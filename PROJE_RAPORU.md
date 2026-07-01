# Harkan Media — Proje Analiz Raporu

**Tarih:** 16 Haziran 2026  
**Kapsam:** Tüm kaynak dosyalar (src/, index.html, package.json, vite.config.js)  
**Proje:** React + Vite tabanlı kurumsal dijital pazarlama sitesi

---

## Özet

Proje genel olarak çalışır durumda olmakla birlikte; **çalışmayan butonlar**, **form doğrulama eksiklikleri**, **büyük kod tekrarları**, **kullanılmayan bağımlılıklar** ve **SEO tutarsızlıkları** gibi kritik seviyede sorunlar içermektedir. Aşağıda sorunlar öncelik sırasına göre üç kategoride listelenmiştir.

---

## 1. Kritik Hatalar (Bug)

### 1.1 İletişim Formu — Son Adım Butonu Hiçbir Şey Yapmıyor

**Etkilenen dosyalar:**
- [src/pages/Contact.jsx:105](src/pages/Contact.jsx#L105)
- [src/pages/GoogleAds.jsx:196](src/pages/GoogleAds.jsx#L196)
- [src/pages/FacebookAds.jsx:207](src/pages/FacebookAds.jsx#L207)
- [src/pages/IysCozumleri.jsx:198](src/pages/IysCozumleri.jsx#L198)
- [src/pages/DijitalPazarlama.jsx:197](src/pages/DijitalPazarlama.jsx#L197)
- [src/pages/WebAnalitik.jsx:196](src/pages/WebAnalitik.jsx#L196)
- Diğer tüm servis sayfaları

**Sorun:** 2. adımdaki "SIRADAKI ADIM" butonu `type="button"` olmasına rağmen `onClick` handler'ı **yok** ve form hiçbir zaman submit edilmiyor. Kullanıcı mesajını yazıp butona tıkladığında görünürde hiçbir şey olmaz.

```jsx
// BUG: onClick yok, hiçbir şey yapmıyor
<button type="button" className="contact-button">
  SIRADAKI ADIM
  <span className="button-arrow">→</span>
</button>
```

**Çözüm:** Forma bir `onSubmit` handler eklenmeli, veriler bir API'ye (Formspree, EmailJS vb.) gönderilmeli ve başarı/hata durumları kullanıcıya gösterilmelidir.

---

### 1.2 Form Validasyonu Tamamen Eksik

**Etkilenen dosyalar:** Tüm Contact formları

**Sorun:** E-posta, isim ve telefon alanları boş bırakıldığında bile "SIRADAKI ADIM" butonuna tıklanabiliyor. Gizlilik Politikası checkbox'ı da zorunlu değil. Geçersiz e-posta formatlı girişler kabul ediliyor.

```jsx
// Hiçbir alan için required veya validation yok
<input type="email" placeholder="E-Posta" className="contact-input" />
<input type="text"  placeholder="İsim"    className="contact-input" />
<input type="tel"   placeholder="Telefon" className="contact-input" />
```

**Çözüm:** HTML `required` attribute'u ve JavaScript validasyonu eklenmeli; KVKK uyumu için checkbox zorunlu hale getirilmelidir.

---

### 1.3 Navbar "TEKLİF İSTE" Butonu Fonksiyonsuz

**Dosya:** [src/components/Navbar.jsx:202](src/components/Navbar.jsx#L202)

**Sorun:** Sitedeki en görünür CTA (Call-to-Action) butonunun `onClick` handler'ı yok. Tıklandığında hiçbir şey olmuyor.

```jsx
// onClick yok — kullanıcı tıkladığında hiçbir şey olmaz
<button className="offer-btn">
  TEKLİF İSTE
</button>
```

---

### 1.4 Hero "Keşfedin" ve Diğer CTA Butonları Fonksiyonsuz

**Dosyalar:**
- [src/components/Hero.jsx:39](src/components/Hero.jsx#L39)
- [src/components/Services.jsx:45](src/components/Services.jsx#L45)
- [src/components/References.jsx:44](src/components/References.jsx#L44)

**Sorun:** "Keşfedin", "TÜMÜ" ve "TÜM REFERANSLAR" butonlarının hiçbirinde `onClick` handler yok.

---

### 1.5 Footer Linkleri Kırık (Dead Anchor Links)

**Dosya:** [src/components/Footer.jsx:29-53](src/components/Footer.jsx#L29)

**Sorun:** Footer'daki tüm servis ve destek linkleri `#hash` formatında tanımlanmış. Bu ID'lere sahip element sayfada **mevcut değil**, bu yüzden linkler hiçbir yere gitmiyor.

```jsx
<a href="#adres">Adresimiz</a>           {/* kırık */}
<a href="#google-ads">Google Reklamları</a> {/* kırık */}
<a href="#seo">SEO</a>                    {/* kırık */}
<a href="#outlook">Outlook Mail Kurulum</a>  {/* kırık */}
```

**Çözüm:** React Router `<Link>` bileşenine ya da gerçek URL'lere dönüştürülmeli veya ilgili sayfalar oluşturulmalıdır.

---

### 1.6 `/iletisim` Route'u Yok — SEO Canonical Çakışması

**Dosyalar:**
- [src/pages/Contact.jsx:35](src/pages/Contact.jsx#L35)
- [src/App.jsx:65](src/App.jsx#L65)

**Sorun:** `Contact.jsx` bileşeni kendi canonical URL'sinde `https://harkanmedia.vercel.app/iletisim` tanımlıyor. Ancak bu route `App.jsx`'te **tanımlı değil**. Contact bileşeni ana sayfa (`/`) route'unun içine gömülü; ayrı bir URL'i hiç yok.

---

### 1.7 `FacebookAds.jsx` İçinde Yanlış DOM Manipülasyonu

**Dosya:** [src/pages/FacebookAds.jsx:7-15](src/pages/FacebookAds.jsx#L7)

**Sorun:** `useEffect` içinde `document.querySelector('.page-header')` kullanılıyor. Bu bileşenin JSX'inde `.page-header` class'ı **bulunmuyor**, dolayısıyla bu kod hiçbir zaman çalışmaz. React'ta DOM doğrudan manipüle edilmemeli; bunun yerine `useRef` kullanılmalıdır.

```jsx
useEffect(() => {
  // .page-header bu bileşende yok — hiçbir zaman çalışmaz
  const header = document.querySelector('.page-header');
  if (header) {
    setTimeout(() => header.classList.add('visible'), 100);
  }
}, []);
```

---

### 1.8 Inline Style ile `:hover` Pseudo-Class Kullanımı — Çalışmıyor

**Dosya:** [src/pages/Calismalarimiz.jsx:100](src/pages/Calismalarimiz.jsx#L100)

**Sorun:** React'ta inline `style` prop'u içinde `':hover'` key'i kullanımı desteklenmez. Bu hover efekti asla uygulanmaz.

```jsx
// BUG: Bu syntax React'ta çalışmaz
<div style={{
  transition: 'transform 0.3s ease',
  ':hover': { transform: 'translateY(-5px)' }  // asla uygulanmaz
}}>
```

**Çözüm:** CSS class kullanılmalı ya da `onMouseEnter`/`onMouseLeave` event'leri ile state yönetimi yapılmalıdır.

---

### 1.9 OG ve Twitter Görselleri Mevcut Değil

**Dosya:** [index.html:35-43](index.html#L35)

**Sorun:** `og:image` ve `twitter:image` meta etiketleri sırasıyla `/images/og-image.jpg` ve `/images/twitter-image.jpg` dosyalarına işaret ediyor. Bu dosyalar `public/images/` klasöründe **bulunmuyor**.

```html
<meta property="og:image" content="/images/og-image.jpg" />  <!-- dosya yok -->
<meta name="twitter:image" content="/images/twitter-image.jpg" /> <!-- dosya yok -->
```

---

## 2. Optimizasyon Sorunları

### 2.1 Büyük Kod Tekrarı — Contact Formu (DRY İhlali)

**Etkilenen dosyalar:** GoogleAds, FacebookAds, InstagramAds, LinkedInAds, IysCozumleri, DijitalPazarlama, WebAnalitik, MobilAnalitik, ABTest, DataAnalysis, Reporting, SoftwareConsulting, DataModeling, SearchOptimization, DomainHosting ve diğerleri (~15+ dosya)

**Sorun:** Her servis sayfası aynı iki adımlı contact form kodunu (`~80 satır JSX`) kopyalayıp yapıştırıyor. Aynı state mantığı, aynı JSX yapısı, yalnızca 1-2 metin satırı değişiyor. Bir bug veya tasarım değişikliği 15+ dosyada tek tek düzeltilmek zorunda.

**Çözüm:** `<ContactForm />` adında yeniden kullanılabilir bir bileşen oluşturulmalı:

```jsx
// Önerilen yapı
function ContactForm({ title, step1Subtitle, step2Subtitle }) {
  // ortak form mantığı burada
}
```

---

### 2.2 Kullanılmayan Bağımlılıklar — Gereksiz Bundle Ağırlığı

**Dosya:** [package.json](package.json)

| Paket | Boyut (tahmini) | Kullanım |
|---|---|---|
| `wow.js` | ~10 KB | Hiçbir dosyada kullanılmıyor |
| `aos` | ~13 KB | Hiçbir dosyada kullanılmıyor |
| `react-countup` | ~15 KB | Hiçbir dosyada kullanılmıyor |
| `@fortawesome/fontawesome-svg-core` | ~50 KB | Hiçbir dosyada kullanılmıyor |
| `@fortawesome/free-regular-svg-icons` | ~100 KB | Hiçbir dosyada kullanılmıyor |
| `@fortawesome/free-solid-svg-icons` | ~500 KB | Hiçbir dosyada kullanılmıyor |
| `@fortawesome/react-fontawesome` | ~15 KB | Hiçbir dosyada kullanılmıyor |

**Toplam: ~700+ KB gereksiz bağımlılık.** Bu paketler production build'a dahil edilebilir (tree-shaking varsayılan değildir).

**Çözüm:**
```bash
npm uninstall wow.js aos react-countup @fortawesome/fontawesome-svg-core @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
```

---

### 2.3 Vite Build Optimizasyonu Yapılandırılmamış

**Dosya:** [vite.config.js](vite.config.js)

**Sorun:** `vite.config.js` minimum yapılandırmayla bırakılmış. Code splitting, chunk boyut optimizasyonu ve asset optimizasyonu yapılmamış.

**Öneri:**
```js
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          helmet: ['react-helmet-async'],
        }
      }
    },
    chunkSizeWarningLimit: 500,
  }
})
```

---

### 2.4 Tüm Resimler Dış Kaynaklıdan Yükleniyor

**Etkilenen dosyalar:** Hero.jsx, About.jsx, GoogleAds.jsx, FacebookAds.jsx, Calismalarimiz.jsx, vb.

**Sorun:** Hero görselleri Unsplash'ten, servis görselleri Freepik'ten, referans logoları 3. parti sitelerden yükleniyor. Bu durum:
- **CORS riskleri** yaratıyor (3. parti domain politikası değişirse görseller kırılır)
- **Sayfa yükleme hızını** dışarıya bağımlı kılıyor
- **Core Web Vitals LCP** (Largest Contentful Paint) skorunu düşürüyor
- **Bant genişliğini** kontrol etmeyi imkânsız kılıyor

**Çözüm:** Görseller `public/images/` klasöründe yerel olarak barındırılmalı; `loading="lazy"` attribute'u eklenmeli.

---

### 2.5 Hero Görselleri `loading="lazy"` Eksik + LCP Sorunu

**Dosya:** [src/components/Hero.jsx:45](src/components/Hero.jsx#L45)

**Sorun:** Hero sectionı LCP elementi olduğu için görseller **eager** yüklenmeli (varsayılan). Ancak diğer tüm sayfa görselleri lazy yükleme kullanmıyor. Büyük hero görseli (688px genişlik, Unsplash) performansı olumsuz etkiliyor.

```jsx
// Şu an:
<img src={slide.image} alt={`Hero görsel ${index + 1}`} />

// Önerilen:
<img
  src={slide.image}
  alt={`Hero görsel ${index + 1}`}
  fetchpriority={index === 0 ? "high" : "auto"}
  loading={index === 0 ? "eager" : "lazy"}
/>
```

---

### 2.6 Navbar Timeout Referansları Temizlenmiyor (Potansiyel Memory Leak)

**Dosya:** [src/components/Navbar.jsx:15-17](src/components/Navbar.jsx#L15)

**Sorun:** `dropdownTimeout`, `whatWeDoTimeout` ve `hizmetlerimizTimeout` ref'leri component unmount olduğunda `clearTimeout` ile temizlenmiyor. Route değişimlerinde bu timeout'lar askıda kalabilir.

**Çözüm:**
```jsx
useEffect(() => {
  return () => {
    clearTimeout(dropdownTimeout.current);
    clearTimeout(whatWeDoTimeout.current);
    clearTimeout(hizmetlerimizTimeout.current);
  };
}, []);
```

---

### 2.7 Mobile Navbar Dropdown'ları Touch Cihazlarda Çalışmıyor

**Dosya:** [src/App.css:240-243](src/App.css#L240)

**Sorun:** Mobile görünümde dropdown menüler CSS `:hover` pseudo-class'ına dayanıyor. Touch ekranlarda `:hover` güvenilir şekilde çalışmaz; bu durum iOS ve Android cihazlarda menülerin açılmamasına sebep olur.

```css
/* Sorun: Touch'ta hover çalışmaz */
.nav-item-dropdown-wrapper:hover .dropdown-menu,
.dropdown-submenu:hover .dropdown-menu.right {
  display: block;
}
```

**Çözüm:** Mobile menü için JavaScript tabanlı toggle yapısı kurulmalı (Navbar.jsx'teki mevcut state yapısı genişletilmeli).

---

### 2.8 Çok Fazla Inline Style — CSS Sınıfı Kullanılmalı

**Etkilenen dosyalar:** GoogleAds.jsx, FacebookAds.jsx, IysCozumleri.jsx, DijitalPazarlama.jsx, WebAnalitik.jsx ve diğerleri

**Sorun:** Her servis sayfası yüzlerce satır inline style içeriyor. Bu durum:
- Her render'da yeni stil nesneleri oluşturarak **gereksiz re-render** tetikliyor
- Stil tutarlılığını bozuyor (farklı sayfalarda farklı renk kodları)
- Kod okunurluğunu ciddi şekilde düşürüyor

```jsx
// Şu an (her render'da yeni obje)
<h1 style={{ fontSize: '48px', fontWeight: '900', color: '#333333', margin: '0 0 16px 0' }}>

// Önerilen
<h1 className="service-page-title">
```

---

## 3. SEO ve İçerik Sorunları

### 3.1 Canonical URL Tutarsızlığı — İki Farklı Domain

**Dosyalar:**
- [index.html:28](index.html#L28) → `https://harkanmedia.com`
- [src/App.jsx:56](src/App.jsx#L56) → `https://harkanmedia.vercel.app/`
- Tüm servis sayfaları → `https://harkanmedia.vercel.app/...`

**Sorun:** Root `index.html` canonical URL'sinde `harkanmedia.com` domain'i kullanılırken, React uygulamasının tüm Helmet bileşenleri `harkanmedia.vercel.app` kullanıyor. Arama motorları bu tutarsızlığı duplicate content olarak değerlendirebilir.

---

### 3.2 Her Sayfada Çift `<h1>` Etiketi

**Etkilenen dosyalar:** GoogleAds.jsx, FacebookAds.jsx, IysCozumleri.jsx, DijitalPazarlama.jsx, WebAnalitik.jsx ve diğerleri

**Sorun:** Her servis sayfasında iki ayrı `<h1>` bulunuyor: biri `about-header` bölümünde, diğeri içerik alanında. SEO açısından her sayfada yalnızca bir `<h1>` olmalı.

```jsx
{/* 1. h1 */}
<div className="about-header">
  <h1>Google Reklamları</h1>
</div>

{/* 2. h1 — aynı sayfada! */}
<h1 style={{ fontSize: '48px', fontWeight: '900' }}>
  Google Reklamları
</h1>
```

---

### 3.3 Hizmetler Bölümündeki Kartlar Navigasyon Sağlamıyor

**Dosya:** [src/components/Services.jsx:50-55](src/components/Services.jsx#L50)

**Sorun:** Anasayfadaki hizmet kartları `<div>` olarak tanımlanmış, `<Link>` veya `<a>` değil. Kullanıcı bir hizmete tıkladığında ilgili sayfaya gitmiyor. Aynı zamanda arama motorları için dahili bağlantı (internal link) kaçırılıyor.

```jsx
// Şu an: tıklanamaz div
<div key={index} className="service-card">

// Önerilen
<Link to={service.path} key={index} className="service-card">
```

---

### 3.4 App.jsx'teki Ana Helmet Her Sayfada Geçersiz Kalıyor

**Dosya:** [src/App.jsx:38-57](src/App.jsx#L38)

**Sorun:** `App.jsx`'teki `<Helmet>` ana sayfa meta verilerini tanımlarken canonical URL'yi her zaman `https://harkanmedia.vercel.app/` olarak set ediyor. Alt sayfaların kendi Helmet'ları bunu override etse de bu sadece `react-helmet-async`'in merge davranışına bağlı; bazı etiketler çakışabilir.

---

### 3.5 Placeholder İçerikler Production'da

**Dosya:** [src/pages/Calismalarimiz.jsx:7-36](src/pages/Calismalarimiz.jsx#L7)

**Sorun:** Çalışmalarımız sayfasında "ABC Şirketi", "XYZ Holding", "123 Teknoloji" gibi örnek veriler ve Freepik'ten rastgele logolar kullanılıyor. Bu, bir kullanıcının gerçek bir siteye eriştiğinde görebileceği içerik.

---

### 3.6 `public/index.html` Gereksiz Dosya

**Dosya:** [public/index.html](public/index.html)

**Sorun:** `public/` klasöründe bir `index.html` dosyası mevcut. Vite, root dizindeki `index.html` dosyasını giriş noktası olarak kullanır. `public/index.html` build çıktısını karıştırabilir ya da beklenmedik davranışlara yol açabilir.

---

## Sorun Özeti

| Kategori | Sorun Sayısı | Öncelik |
|---|---|---|
| Form çalışmıyor / fonksiyonsuz buton | 4 | Kritik |
| Kırık footer linkleri | 1 | Kritik |
| DOM manipülasyon anti-pattern | 1 | Kritik |
| Inline `:hover` çalışmıyor | 1 | Kritik |
| OG/Twitter görseli eksik | 1 | Yüksek |
| Kod tekrarı (Contact Form) | 1 | Yüksek |
| Kullanılmayan bağımlılıklar (~700 KB) | 7 paket | Yüksek |
| Mobile dropdown touch sorunu | 1 | Yüksek |
| Memory leak (timeout cleanup) | 1 | Orta |
| Dış kaynak görseller | 1 | Orta |
| Vite optimizasyon eksikliği | 1 | Orta |
| Çift `<h1>` etiketi | 1 | Orta |
| Canonical URL tutarsızlığı | 1 | Orta |
| Hizmet kartları linklenmemiş | 1 | Orta |
| Placeholder içerik production'da | 1 | Düşük |

---

## Önerilen Öncelik Sırası

1. Contact form submit handler + validasyon ekle
2. Navbar "TEKLİF İSTE" ve Hero "Keşfedin" butonlarını çalıştır
3. Footer linklerini React Router `<Link>` ile düzelt
4. Kullanılmayan 7 npm paketini kaldır (`npm uninstall ...`)
5. Contact form bileşenini tekil, paylaşılan bir component'a taşı
6. OG/Twitter görsellerini `public/images/` altına ekle
7. Canonical URL tutarsızlığını çöz (tek domain belirle)
8. Her sayfadaki çift `<h1>` sorununu gider
9. Mobile dropdown'ları JavaScript toggle ile yönet
10. Timeout cleanup için `useEffect` return ekle
