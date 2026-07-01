# Harkan Media — Architectural Review & Optimization Report (2026)

Senior full-stack architectural review of the React/Vite marketing site, covering baseline architecture, SEO, form validation, and Core Web Vitals. Written to balance modern best practices against practical maintainability — flagging both under-engineering and over-engineering risks.

> **Implementation status (2026-07-02):** All priority action items from Sections 1-4 have been implemented and verified via production build + dev-server smoke checks. Completed items are marked `[x]` below. See the note at the end of each section for what remains open.

---

## 0. Baseline Verdict

For what this project actually is — a static Turkish digital-marketing brochure/lead-gen site (33 pages, no auth, no backend, one third-party form integration via EmailJS) — the project is **appropriately, even conservatively, engineered on the state-management axis** (correctly has no Redux/Context store; a store would be over-engineering here) but is **under-engineered on the reuse/component axis** (no shared UI primitives, hooks duplicated instead of imported, dead code accumulating) and has a **hard process gap**: zero test coverage on the two pieces of nontrivial logic in the app (the two lead-gen forms).

### State management — appropriately minimal ✅
No Redux/Zustand/Recoil/Context store anywhere (verified via grep for `createContext|useContext|useReducer|Provider` — only hit is the third-party `HelmetProvider` in `src/App.jsx`). All state is local `useState` per page. **This is correct, not a gap** — there is no cross-page shared state to justify a store.

### Component reuse — the main structural weakness ⚠️
- **No shared UI primitives** (no `Button`, `Input`, `Card`, `Modal`). Every page reimplements forms/buttons/cards with page-local CSS prefixes (`cp-`, `pl-`, `nb-`, `ft-`). Fine at 5 pages; expensive at 33. *(Still open — not part of this implementation pass.)*
- [x] **`src/hooks/useInView.js` exists but is bypassed.** `ContactPage.jsx` (~L58-81) and `TeklifPage.jsx` (~L36-51) each pasted their own copy of the identical IntersectionObserver hook instead of importing the shared one. **Fixed:** both now import `useInView` from `src/hooks/useInView.js`; the duplicated local copies were deleted. (`DijitalPazarlama.jsx` was already importing the shared hook correctly.)
- **`Navbar.jsx`** hand-duplicates the same nav-item list once for desktop (`nb-drop`) and once for mobile (`nb-mobile`) instead of mapping over one data array. *(Still open.)*
- ~15 near-identical service pages (`FacebookAds`, `GoogleAds`, `InstagramAds`, etc.) each hand-roll the same page-layout pattern — a candidate for a shared `<ServicePageLayout>`, but only worth building if another such page is added soon (see over-engineering cautions below). *(Still open, intentionally deferred.)*

### Dead code accumulating 🗑️ — all resolved [x]
- [x] `public/index.html` — stale CRA-template leftover. **Deleted.**
- [x] `src/components/Partners.jsx` + `Partners.css` — unused, name-collided with `src/pages/Partners.jsx`. **Deleted.**
- [x] 5 orphaned pages not in the route table (`DigitalMarketing.jsx`, `IYSSolutions.jsx`, `MobileAnalytics.jsx`, `OurWork.jsx`, `WebAnalytics.jsx`). **Deleted.**
- [x] 4 unused FontAwesome packages + unused `playwright` devDependency. **Removed from `package.json`**; `zod` added in their place. `src/utils/validators.js` was also deleted as a consequence of the Zod migration (Section 2) since nothing imports it anymore.

### Performance baseline — correctly unoptimized ✅
Zero `useMemo`/`useCallback`/`React.memo` usage, but this is **appropriate**, not a gap: all data arrays are module-level constants (not recreated per render), lists are tiny (≤14 items, no virtualization needed). Adding memoization here would be the over-engineering trap.

### Security — solid baseline, two small inconsistencies
No `dangerouslySetInnerHTML`, no hardcoded secrets in `src`, EmailJS credentials correctly sourced from gitignored `import.meta.env.VITE_*` vars. Real CSP + `X-Frame-Options`/`X-Content-Type-Options`/`Referrer-Policy` headers in `vercel.json`. Honeypot field on both forms. Minor inconsistency: root `index.html` moved GTM/GA IDs to env vars but the GTM `<noscript>` fallback still hardcodes the literal ID. Client-side-only form validation is an accepted tradeoff given there's no backend — worth naming explicitly as a documented decision, not an oversight.

### Testing — the real process gap ❌ (still open)
Zero test files, no test runner configured. `playwright` was removed as an unused devDependency in this pass rather than wired up (see Section 4). The two pieces of the app with actual logic — `ContactPage.jsx` and `TeklifPage.jsx` — still have no automated coverage. **Not addressed in this implementation pass** — the Zod migration (Section 2) makes the validation rules easier to unit-test going forward (pure `safeParse` calls on the schemas), but no test files were added.

### Folder structure — reasonable now, will need revisiting
Flat type-based layout (`components/`, `pages/`, `hooks/`, `styles/`) is fine at current size but `pages/` already has 33 flat files. Not urgent, but the next organizational move (when it grows further) should be feature/domain grouping (e.g. `pages/services/*`, `pages/legal/*`), not a premature restructure today.

---

## 1. SEO Optimization

### Findings
- **No shared SEO component.** Every page hand-rolls its own `<Helmet>` block, which is why coverage is inconsistent: some pages have OG tags, none have `og:image`/`twitter:image` at the page level (all social shares fall back to one generic image), title separators vary (`—`, `|`, `-`), and `DigitalMarketing.jsx` even repeats "Dijital Pazarlama" twice in one title.
- **Homepage has no `<Helmet>` at all** — it silently inherits a global `<Helmet>` block hardcoded in `App.jsx` (lines 41-60), which renders on every route as a sibling of `<Routes>`, competing with page-level tags.
- **Canonical domain split, three ways**: `index.html` says `harkanmedia.com`, `App.jsx`'s global Helmet (and thus the homepage) says `harkanmedia.vercel.app`, and `robots.txt`/`sitemap.xml` also point at `harkanmedia.vercel.app` — while every actual routed page's own canonical correctly uses `harkanmedia.com`. Google sees three different "true" domains depending on which page it reads.
- **Sitemap is stale and missing your two highest-value pages**: `/iletisim` (contact) and `/teklif` (quote request) — the two conversion pages — aren't in `sitemap.xml` at all, and every entry has the same fake `lastmod` from 2024.
- **No `<main>` landmark anywhere** in the app — page content isn't semantically distinguished from nav/footer chrome.
- **Zero structured data** (no JSON-LD) despite having an obvious `Organization`/`LocalBusiness` candidate (address/geo meta already present in `index.html`) and visual breadcrumbs on every service page that could be paired with `BreadcrumbList` schema almost for free.
- **`NotFound.jsx` has no `noindex` meta**, and because Vercel's rewrite (`/(.*) → /index.html`) returns HTTP 200 for any URL, this is a soft-404 risk — any mistyped/removed URL can get indexed as thin content.
- **Pure CSR, no SSR/SSG** — confirmed no Next/Remix/vite-ssg. Googlebot must execute JS to see any page's title/meta/content. This is a real but manageable risk for a 26-route marketing site (Google does render JS), not a blocker.
- Missing `<link rel="icon">` favicon tag; broken `og:image`/`twitter:image` file references (files don't exist in `public/images/`).
- Heading hierarchy is actually solid: every page has exactly one `<h1>`.

### Recommendations (priority order)
1. [x] **Build one `<SEO>` component** (`src/components/SEO.jsx`) taking `{title, description, path, image?}` props, owning the canonical domain, default OG image, and Twitter card tags in one place. **Done** — created and wired into `Homepage.jsx` (previously had no `<Helmet>` at all) and `NotFound.jsx`. *Not yet rolled out to the other ~30 pages, which still use their original hand-rolled `<Helmet>` blocks — see note below.*
2. [x] **Pick one canonical domain** (`harkanmedia.com`) and fix `index.html`, `robots.txt`, `sitemap.xml`, and the `App.jsx` global Helmet to match. **Done** — `robots.txt` and `sitemap.xml` now point at `harkanmedia.com`; the redundant global `<Helmet>` in `App.jsx` was deleted entirely (each page now owns its own tags).
3. [x] **Regenerate `sitemap.xml`** with all 26 live routes (including `/iletisim`, `/teklif`) and real/current `lastmod` dates. **Done.**
4. [x] **Add `<meta name="robots" content="noindex">` to `NotFound.jsx`.** **Done**, via the new `<SEO noindex>` prop.
5. **Add one `Organization` JSON-LD block** in `index.html`. *(Still open — not implemented in this pass.)*
6. [x] **Add `<main>` around routed content** in `App.jsx`. **Done.**
7. Low priority: [x] favicon tag added (points at `harkan-logo.png`, see Section 3); [x] broken OG image references fixed (now point at the existing `harkan-logo.png` instead of the missing `og-image.jpg`/`twitter-image.jpg`); title-separator punctuation standardization *(still open, only applied to the 2 pages migrated to `<SEO>` so far)*.

**Avoid**: don't reach for Next.js/SSG migration to solve this — that's a framework rewrite to fix meta-tag hygiene. Google renders CSR JS fine for a site this size; fix the concrete tag/canonical/sitemap bugs first and revisit SSR only if indexing data later shows a real problem.

**Remaining work**: migrating the other ~30 pages' hand-rolled `<Helmet>` blocks to the shared `<SEO>` component, and the `Organization` JSON-LD block, are the two items from this section not yet done.

---

## 2. Logic & Validation — Zod Blueprint [x] Implemented

### Current state (confirmed clean slate)
No `zod`/`react-hook-form`/`formik`/`yup` installed. Validation is currently hand-rolled in `src/utils/validators.js` (5 functions) plus inline rules in both pages. Both forms validate **only on submit** (or step-advance for TeklifPage) — no onBlur — so a Zod migration doesn't need to replicate any live-validation UX, which simplifies things.

**Critical constraint**: the two forms are NOT validation-identical today, even though they share some validators:

| Field | ContactPage | TeklifPage |
|---|---|---|
| message | required, 10–2000 chars | optional, max 300, no min |
| service(s) | single required string | array, min 1 selected |
| company/website | doesn't exist | optional |
| email regex | loose, non-standard `.email()` semantics | same |
| phone | digit-count 10–15 only, no Turkish-prefix enforcement | same |

A Zod migration that naively shares one schema between both forms **will silently change validation behavior** on at least the `message` and `service` fields. The blueprint below keeps them separate on purpose.

### Blueprint

```js
// src/schemas/shared.js
import { z } from 'zod';

// Byte-identical to current validators.js regexes — do not "improve" these
// without a product decision, since z.string().email() is stricter than
// the current permissive regex and would reject previously-valid input.
export const nameSchema = z.string()
  .trim()
  .min(2, 'İsim en az 2 karakter olmalıdır.')
  .max(50, 'İsim en fazla 50 karakter olabilir.')
  .regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/, 'İsim yalnızca harf içerebilir.');

export const emailSchema = z.string()
  .min(1, 'E-posta zorunludur.')
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Geçerli bir e-posta girin.');

export const phoneSchema = z.string()
  .min(1, 'Telefon zorunludur.')
  .transform(v => v.replace(/\D/g, ''))
  .refine(v => v.length >= 10, 'Telefon numarası en az 10 rakam olmalıdır.')
  .refine(v => v.length <= 15, 'Telefon numarası en fazla 15 rakam olabilir.');

export const privacySchema = z.literal(true, {
  errorMap: () => ({ message: 'Gizlilik politikasını kabul etmelisiniz.' }),
});

// Honeypot: kept OUTSIDE the schema, checked pre-parse exactly like today
// (silent no-op on fill, never shown to the "bot" as an error).
export function isHoneypotFilled(form) {
  return Boolean(form._hp);
}
```

```js
// src/schemas/contactSchema.js
import { z } from 'zod';
import { nameSchema, emailSchema, phoneSchema, privacySchema } from './shared';

export const contactSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  service: z.string().min(1, 'Lütfen bir hizmet seçin.'),
  message: z.string().trim()
    .min(10, 'Mesajınız en az 10 karakter olmalı.')
    .max(2000, 'Mesajınız en fazla 2000 karakter olabilir.'),
  privacy: privacySchema,
});
```

```js
// src/schemas/teklifSchema.js
import { z } from 'zod';
import { nameSchema, emailSchema, phoneSchema, privacySchema } from './shared';

const step1Schema = z.object({
  services: z.array(z.string()).min(1, 'En az bir hizmet seçin.'),
});

const step2Schema = z.object({
  budget: z.string().min(1, 'Bütçe aralığı seçin.'),
  timeline: z.string().min(1, 'Zaman çizelgesi seçin.'),
  // Tighten to z.enum(BUDGETS)/z.enum(TIMELINES) later if desired —
  // current behavior only checks non-empty, so keep parity for now.
});

const step3Schema = z.object({
  name: nameSchema,
  email: emailSchema,
  phone: phoneSchema,
  company: z.string().trim().max(50, 'Şirket adı en fazla 50 karakter olabilir.').optional().or(z.literal('')),
  website: z.string().trim()
    .regex(/^https?:\/\/.+\..+/, 'Geçerli bir URL girin. (örn. https://sirket.com)')
    .optional().or(z.literal('')),
  message: z.string().trim().max(300).optional().or(z.literal('')),
  privacy: privacySchema,
});

export const teklifStepSchemas = { 1: step1Schema, 2: step2Schema, 3: step3Schema };
export const teklifFullSchema = step1Schema.merge(step2Schema).merge(step3Schema);
```

**Wiring into the components** (minimal glue, no `react-hook-form` needed — these forms are simple enough that adding a form library on top of Zod would be the over-engineering trap):

```js
// inside ContactPage.jsx, replacing validate()
function validate() {
  const result = contactSchema.safeParse(form);
  if (result.success) return {};
  return Object.fromEntries(
    result.error.issues.map(issue => [issue.path[0], issue.message])
  );
}
```

```js
// inside TeklifPage.jsx, replacing validateStep(s)
function validateStep(s) {
  const schema = teklifStepSchemas[s];
  const result = schema.safeParse(form); // extra keys are ignored by default
  if (result.success) return {};
  return Object.fromEntries(
    result.error.issues.map(issue => [issue.path[0], issue.message])
  );
}
```

This preserves the exact current UX (submit-time-only validation, per-field error map, error cleared on change via existing `handleChange` logic) while collapsing 5 hand-rolled validator functions + 2 sets of inline rules into 3 declarative schema files. `errors` state shape, JSX, and CSS classes in both pages **do not need to change at all**.

**Implementation note:** the blueprint above was implemented exactly as written — `src/schemas/shared.js`, `contactSchema.js`, and `teklifSchema.js` were created, and `ContactPage.jsx`'s `validate()` / `TeklifPage.jsx`'s `validateStep()` were rewired to call `.safeParse()` against them, as shown in the wiring snippets. `zod` was added to `package.json` and `src/utils/validators.js` was deleted (no longer imported anywhere).

### Secondary fixes surfaced by this audit (unrelated to Zod itself, worth doing in the same pass) — all done [x]
- [x] `TeklifPage.jsx`'s catch-block fallback email is hardcoded (`info@harkanmedya.com`) instead of using `CONTACT.email.display` like `ContactPage.jsx` does. **Fixed** — now sourced from `CONTACT.email.display` in both files.
- [x] Both `catch { ... }` blocks discard the actual error object. **Fixed** — both now log via `console.error(err)` before setting the user-facing error message.
- [x] Reuse the shared `src/hooks/useInView.js` in both pages instead of the duplicated inline copies. **Fixed** (see Section 0, Component reuse).

**Avoid**: don't add `react-hook-form` or `formik` on top of Zod — these are two simple, low-field-count forms with submit-time-only validation; a form library would add an abstraction layer with no behavior this app needs. Zod alone, wired as above, is the right altitude.

---

## 3. Performance / Core Web Vitals

### Findings, ranked by actual impact (not by what's "trendy" to fix)

1. **Render-blocking CSS is the biggest concrete lever, bigger than JS splitting.** All 9 CSS files (~85 KB combined) are imported per-component in source, but because all 33 pages are statically bundled into one entry (`App.jsx`), Vite collapses them into a single global stylesheet. A visitor landing on `/gizlilik-politikasi` downloads `homepage.css` (24 KB) + `contact-page.css` (14.7 KB) + `teklif-page.css` (11 KB) — none of which that page uses — before first paint, since CSS is render-blocking by nature.

2. **Missing resource hints** — zero `<link rel="preconnect">`/`dns-prefetch"` in `index.html` for `googletagmanager.com`, `google-analytics.com`, or the EmailJS API domain. Cheap, direct LCP/FCP win.

3. **No code-splitting** — all 33 routes statically imported in `App.jsx`, no `React.lazy`/`Suspense` anywhere. Real issue, but **more modest than it sounds**: total source is only ~640 KB uncompressed across all pages (19 of the 33 pages are near-identical ~87-line templates), likely landing around 60-120 KB gzipped for the whole route bundle — not egregious. The main value of fixing this is that per-route lazy-loading would *also* naturally split the CSS (point 1), making it a two-birds-one-stone fix rather than a pure JS-size play.

4. **Minor/non-issues, confirmed not to matter here:**
   - Images are **not** a bottleneck — only 2 small `<img>` tags in the whole app (icon-sized SVGs in `Partners.jsx`); everything else is inline SVG with hardcoded dimensions (CLS-safe by construction). No font loading strategy issue either, since no custom web fonts are used at all.
   - `Navbar.jsx`'s unthrottled scroll listener does O(1) work — negligible, not worth touching.
   - No heavy dependencies (no framer-motion/GSAP/chart libraries) — the dependency tree is already lean.

5. **Housekeeping**: unused 2.1 MB `harkan-logo.png` sitting in `public/images/` with zero references in code; broken `og:image`/`twitter:image` file paths (referenced in `index.html` but files don't exist); the already-known unused FontAwesome packages add lockfile bloat but zero runtime cost (tree-shaken out).

### Recommendations (priority order)
1. [x] **`React.lazy` + `Suspense` per route** in `App.jsx`. **Done** — all 27 routed pages are now lazy-loaded with a single `<Suspense>` wrapper. Verified in the production build: each page now ships as its own JS chunk (e.g. `TeklifPage-*.js` 12.3 kB, `Homepage-*.js` 36.9 kB) *and* its own CSS chunk (e.g. `page-layout-*.css` split out from the former single global stylesheet), confirming this also fixed the CSS-bloat issue from Finding #1 as predicted.
2. [x] **Add `preconnect` hints** in `index.html` for `googletagmanager.com`, `google-analytics.com`, and the EmailJS API host. **Done.**
3. [x] **Delete the unused `harkan-logo.png`** and fix or remove the broken `og:image`/`twitter:image` references. **Handled differently than originally recommended**: instead of deleting the logo, it's now *reused* as the favicon and the default OG/Twitter image (replacing the broken references to the nonexistent `og-image.jpg`/`twitter-image.jpg`) — this fixes the broken-image problem and stops the file being dead weight in one move. Note: at 2.1 MB the file is oversized for a social-preview image; generating a properly compressed (~<300 KB, 1200×630) dedicated OG image is design work outside the scope of this code pass and still worth doing.
4. [x] Skip image-optimization tooling, manual-chunks Rollup config, and CDN/image-service integration — **correctly not added**, consistent with the recommendation.

**Avoid**: don't add `vite-plugin-imagemin` or a responsive-image pipeline — there's no image problem to solve. Don't hand-write `manualChunks` Rollup config — plain `React.lazy` per route is simpler and sufficient at this scale. Don't chase a Lighthouse 100 score with diminishing-returns work (critical CSS inlining, service workers, etc.) on a 33-page brochure site — the three fixes above address the actual bottlenecks found in the code, not hypothetical ones.

---

## 4. Summary: Recommended Action Order

1. [x] Fix sitemap + canonical domain split (SEO, ~30 min, zero code risk) — **done**
2. [x] Add `<SEO>` shared component + `noindex` on 404 (SEO, ~1 hr) — **done** (component built and applied to Homepage + NotFound; site-wide rollout to remaining pages still open)
3. [x] Introduce Zod schemas as shown above, wired into existing `validate()`/`validateStep()` — **done**
4. [x] `React.lazy` all routes in `App.jsx` (~30 min, mechanical) — **done**
5. [x] Add preconnect hints, delete unused logo file (~10 min) — **done** (logo repurposed as favicon/OG image instead of deleted, see Section 3)
6. [x] (Carried over from baseline review) Delete dead code, deduplicate `useInView` — **done**. Adding minimal test coverage for form validation logic — **still open**.

Everything above is scoped to fix a specific, evidenced problem — no new frameworks, no form libraries, no SSR migration, no build-tool overhaul. Real technical debt addressed, no speculative infrastructure added.

### What's left open after this implementation pass
- Roll out the `<SEO>` component to the remaining ~30 pages (currently only Homepage and NotFound use it; the rest still have their original, individually-fine-but-inconsistent `<Helmet>` blocks).
- `Organization` JSON-LD structured data in `index.html`.
- Minimal unit tests for the new Zod schemas and an e2e smoke test per form (Contact, Teklif) — the schemas are now pure and easy to test, but no test files exist yet.
- Shared UI primitives (`Button`, `Input`, `Card`) and the `Navbar.jsx` desktop/mobile nav-list duplication — both intentionally deferred as lower-value, larger-scope work.
- A dedicated, properly compressed OG/social-preview image to replace the oversized 2.1 MB logo currently serving that role.
