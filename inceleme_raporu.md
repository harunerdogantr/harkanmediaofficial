# Harkan Media — Frontend Kod İnceleme Raporu

**Tarih:** 2026-06-22  
**İncelenen Proje:** `harkanmedia` — React 18 + Vite, Çok Sayfalı Ajans Landing Page  
**İncelenen Kapsam:** Tüm kaynak dosyalar (`src/`), `index.html`, `package.json`, `vercel.json`
claude --resume 45386110-da49-4367-9f54-155a074fba12
claude --resume 45386110-da49-4367-9f54-155a074fba12

## Yönetici Özeti

Proje modern bir teknoloji yığını (React 18, Vite, React Router v6) üzerine kurulmuş, görsel kalitesi yüksek ve duyarlı bir tasarıma sahiptir. Ancak **her iki iletişim formu da yalnızca ön yüz simülasyonudur**; gerçek bir e-posta ya da API entegrasyonu bulunmamaktadır ve bu durum canlı ortama geçmeden önce giderilmesi gereken kritik bir eksikliktir. Güvenlik ve doğrulama katmanlarında da kapatılabilecek boşluklar mevcuttur. Paket boyutunu gereksiz yere artıran kullanılmayan kütüphaneler ve ölü kod barındırılmaktadır. Erişilebilirlik iyileştirmeleri ise düşük çabayla yüksek kazanım sağlayacak fırsatlar sunmaktadır.

| Öncelik | Bulgu Sayısı |
|---------|-------------|
| KRITIK  | 2           |
| YÜKSEK  | 4           |
| ORTA    | 7           |
| DÜŞÜK   | 6           |

---

## 1. Kritik Sorunlar

### ~~[KRİTİK] Formlar Gerçekte E-posta Göndermiyor~~ ✅ Tamamlandı

**Dosyalar:** `src/pages/ContactPage.jsx`, `src/pages/TeklifPage.jsx`

**Sorun:** Her iki formun gönderme işleyicisi de yalnızca `setTimeout` ile sahte bir başarı durumu simüle etmektedir. Herhangi bir API çağrısı, e-posta servisi entegrasyonu veya arka uç uç noktası mevcut değildir. Kullanıcılar mesajlarının iletildiğini düşünmektedir; oysa hiçbir veri hiçbir yere ulaşmamaktadır.

```js
// ContactPage.jsx — mevcut durum (sahte gönderim)
setTimeout(() => {
  setSubmitted(true);
  setLoading(false);
}, 1500);
```

**Öneri:** Gerçek bir e-posta entegrasyonu ekleyin. En hızlı yol EmailJS'dir (arka uç gerektirmez):

```bash
npm install @emailjs/browser
```

```js
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  if (Object.keys(validate()).length) return;
  setLoading(true);
  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { from_name: form.name, from_email: form.email, message: form.message },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    setSubmitted(true);
  } catch {
    setError('Mesaj gönderilemedi. Lütfen tekrar deneyin.');
  } finally {
    setLoading(false);
  }
};
```

Alternatif olarak Vercel Functions veya herhangi bir Node/Express arka ucu kullanılabilir.

---

### ~~[KRİTİK] 404 Rotası Tanımlanmamış~~ ✅ Tamamlandı

**Dosya:** `src/App.jsx`

**Sorun:** `<Routes>` bloğunda joker (`*`) rota bulunmamaktadır. Bilinmeyen bir URL'ye doğrudan erişildiğinde (örn. `/hizmetler/bozuk-link`) sayfa tamamen boş görünür; ne bir hata mesajı ne de yönlendirme vardır.

**Öneri:** `App.jsx` içindeki `<Routes>` bloğunun sonuna ekleyin:

```jsx
// src/pages/NotFound.jsx — basit bir bileşen oluşturun
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>404 — Sayfa Bulunamadı</h1>
      <a href="/">Ana sayfaya dön</a>
    </div>
  );
}

// src/App.jsx içinde
import NotFound from './pages/NotFound';
// <Routes> bloğunun en sonuna:
<Route path="*" element={<NotFound />} />
```

---

## 2. Güvenlik

### ~~[YÜKSEK] Form Spam / Bot Koruması Yok~~ ✅ Tamamlandı

**Dosyalar:** `src/pages/ContactPage.jsx`, `src/pages/TeklifPage.jsx`

**Sorun:** E-posta gönderimi devreye alındıktan sonra her iki form da CAPTCHA, honeypot alanı veya hız sınırlama içermediğinden otomasyon araçlarıyla kolayca suistimal edilebilir.

**Öneri (iki kademeli):**

1. **Honeypot alanı** (sürtünmesiz, arka uç gerektirmez):
```jsx
{/* CSS ile gizle, JS ile değil */}
<input
  type="text"
  name="website"
  value={form.honeypot}
  onChange={e => setForm(f => ({ ...f, honeypot: e.target.value }))}
  style={{ display: 'none' }}
  tabIndex={-1}
  autoComplete="off"
/>
// Gönderme sırasında kontrol et:
if (form.honeypot) return; // Bot tuzağa düştü
```

2. **Cloudflare Turnstile** (ücretsiz, kullanıcı dostu): `@marsidev/react-turnstile` paketi ile entegre edin ve site anahtarını `.env` dosyasında saklayın.

---

### ~~[YÜKSEK] Analitik Kimlik Bilgileri Kaynak Kodunda Sabit Olarak Yer Alıyor~~ ✅ Tamamlandı

**Dosya:** `index.html`

**Sorun:** GTM (`GTM-TT22LZCN`) ve GA4 (`G-9SMG0W98PL`) kimlikleri doğrudan HTML içine yazılmıştır. Bu kimlikler teknik olarak kamuya açık olsa da ortam değişkenleri kullanmak; geliştirme, test ve üretim ortamları arasında farklı izleme hesaplarını bağımsız yönetmeyi kolaylaştırır ve kimlik bilgilerinin yanlışlıkla değiştirilmesini önler.

**Öneri:** `.env` dosyası oluşturun:
```
VITE_GTM_ID=GTM-TT22LZCN
VITE_GA_ID=G-9SMG0W98PL
```
`index.html` içinde `%VITE_GTM_ID%` söz dizimiyle (Vite'nin HTML env değiştiricisi) veya `main.jsx` üzerinden dinamik olarak kullanın. `.env` dosyasını `.gitignore`'a ekleyin.

---

### ~~[ORTA] Content Security Policy (CSP) Başlığı Eksik~~ ✅ Tamamlandı

**Dosya:** `vercel.json`

**Sorun:** `vercel.json` herhangi bir `Content-Security-Policy` başlığı tanımlamamaktadır. Bu durum, XSS açıklarının potansiyel etkisini artırır.

**Öneri:** `vercel.json` dosyasına temel bir CSP ekleyin:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;"
        },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```
GTM inline scriptleri nedeniyle `'unsafe-inline'` geçici olarak gerekli olabilir; GTM nonce yapılandırmasıyla ileride kaldırılabilir.

---

### [DÜŞÜK] JSX'te `dangerouslySetInnerHTML` Kullanımına Karşı Önlem Alın

**Dosyalar:** `src/pages/ContactPage.jsx`, `src/pages/TeklifPage.jsx`

**Sorun:** Şu anda form değerleri (`form.name` vb.) standart JSX ifade söz dizimiyle render edilmektedir ve React bu değerleri otomatik olarak kaçırır. Ancak ileride herhangi bir geliştirici `dangerouslySetInnerHTML` kullanırsa bu durum XSS açığına dönüşebilir.

**Öneri:** Kullanıcıdan gelen veriyi asla `dangerouslySetInnerHTML`'e aktarmayın. Gerekiyorsa `DOMPurify` kütüphanesini kullanın. Bu kural bir yorum satırı veya `CONTRIBUTING.md` dosyasına not olarak eklenebilir.

---

## 3. Form Doğrulama

### ~~[YÜKSEK] Telefon Regex'i Çok Gevşek~~ ✅ Tamamlandı

**Dosya:** `src/pages/ContactPage.jsx` — `validate()` fonksiyonu

**Sorun:** `/^[0-9\s\-\+\(\)]{7,15}$/` deseni boşlukları karakter sayısına dahil eder. Bu nedenle `"   7   "` (7 boşluk + 1 rakam) geçerli kabul edilir. Ayrıca yalnızca tire karakterlerinden oluşan bir giriş (`"-------"`) de geçer.

**Öneri:** Doğrulamadan önce boşlukları çıkarın ve rakam sayısını kontrol edin:

```js
if (!form.phone.trim()) {
  e.phone = 'Telefon zorunludur.';
} else {
  const digits = form.phone.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) {
    e.phone = 'Geçerli bir telefon numarası girin.';
  }
}
```

---

### ~~[YÜKSEK] TeklifPage Step 3'te Telefon Format Doğrulaması Yok~~ ✅ Tamamlandı

**Dosya:** `src/pages/TeklifPage.jsx` — `validateStep3()` fonksiyonu

**Sorun:** Step 3 doğrulaması yalnızca `contact.phone.trim()` (boş olmayan) kontrolü yapar; format doğrulaması uygulanmaz. Bu durum `ContactPage.jsx`'teki doğrulamadan farklıdır.

**Öneri:** `ContactPage.jsx`'teki mantığı (yukarıdaki düzeltme dahil) `src/utils/validators.js` dosyasına taşıyın ve her iki formda da içe aktarın:

```js
// src/utils/validators.js
export const validatePhone = (phone) => {
  if (!phone.trim()) return 'Telefon zorunludur.';
  const digits = phone.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return 'Geçerli bir telefon numarası girin.';
  return null;
};

export const validateEmail = (email) => {
  if (!email.trim()) return 'E-posta zorunludur.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Geçerli bir e-posta girin.';
  return null;
};
```

---

### ~~[ORTA] Mesaj Alanı için Maksimum Uzunluk Sınırı Yok~~ ✅ Tamamlandı

**Dosya:** `src/pages/ContactPage.jsx`

**Sorun:** `message` alanı minimum 10 karakter gerektirmektedir ancak maksimum sınır tanımlanmamıştır. Kullanıcı 100 KB'lık bir metin yapıştırabilir ve bu metin başarıyla gönderilebilir.

**Öneri:** Hem HTML `<textarea>` üzerinde hem de doğrulama fonksiyonunda sınır belirleyin:

```jsx
<textarea maxLength={2000} … />
```

```js
else if (form.message.trim().length > 2000)
  e.message = 'Mesajınız en fazla 2000 karakter olabilir.';
```

---

### ~~[ORTA] Hizmet Dropdown'u Varsayılan Boş Seçeneğe Sahip Değil~~ ✅ Tamamlandı

**Dosya:** `src/pages/ContactPage.jsx`

**Sorun:** Hizmet `<select>` öğesi gerçek bir seçenekle başlamaktadır. Bazı tarayıcılarda dropdown'a odaklanılmadığında kullanıcı herhangi bir seçim yapmadan ilk seçeneği gönderebilir; doğrulama bu durumu yakalar ancak kullanıcı deneyimi yanıltıcıdır.

**Öneri:**

```jsx
// form state içinde
const [form, setForm] = useState({ ..., service: '', ... });

// JSX içinde
<select value={form.service} onChange={…}>
  <option value="" disabled>Hizmet seçin</option>
  <option value="seo">SEO</option>
  {/* … */}
</select>
```

---

### [DÜŞÜK] E-posta Regex'i Uç Durumları Kapsamıyor

**Dosyalar:** `src/pages/ContactPage.jsx`, `src/pages/TeklifPage.jsx`

**Sorun:** `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` deseni `"a@b."` gibi girişleri bazı tarayıcılarda geçerli kabul edebilir. Bu bir ön yüz doğrulaması için kabul edilebilir ancak arka uç entegrasyonu eklendiğinde sunucu tarafında da doğrulama yapılması zorunludur.

**Öneri:** Ön yüzdeki mevcut regex yeterlidir. E-posta gönderimi eklendikten sonra e-posta servisinin (EmailJS, SendGrid vb.) sunucu tarafında format doğrulaması yaptığından emin olun.

---

## 4. Hatalar ve Mantık Sorunları

### ~~[ORTA] `Contact.jsx` Ölü Kod~~ ✅ Tamamlandı

**Dosya:** `src/pages/Contact.jsx`

**Sorun:** `src/pages/Contact.jsx` dosyası 126 satırlık tam bir 2-adımlı form bileşeni içermektedir. Ancak `App.jsx` içinde ne import edilmiş ne de herhangi bir rotaya bağlanmıştır. Bu durum gelecekteki geliştiricilerin hangi formun aktif olduğunu anlamasını güçleştirir.

**Öneri:** Dosyayı silin:
```bash
rm src/pages/Contact.jsx
```

---

### ~~[ORTA] `useInView` Kancası Unmount Sonrası Tetiklenebilir~~ ✅ Tamamlandı

**Dosya:** `src/hooks/useInView.js`

**Sorun:** `ref.current` null ise mevcut `useEffect` erken döner ancak `setTimeout` bu noktada zaten başlatılmıştır. Bileşen zamanlayıcı tetiklenmeden önce unmount edilirse `setInView(true)` unmount edilmiş bir bileşen üzerinde çağrılır.

```js
// Mevcut durum — hatalı
const timer = setTimeout(() => setInView(true), fallbackMs);
const el = ref.current;
if (!el) return; // timer hâlâ çalışıyor!
```

**Öneri:**

```js
// Düzeltilmiş sürüm
useEffect(() => {
  const el = ref.current;
  const timer = setTimeout(() => setInView(true), fallbackMs);
  if (!el) {
    clearTimeout(timer); // erken çıkmadan önce iptal et
    return;
  }
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        clearTimeout(timer);
        observer.disconnect();
      }
    },
    { threshold, rootMargin: '0px 0px -40px 0px' }
  );
  observer.observe(el);
  return () => { observer.disconnect(); clearTimeout(timer); };
}, [threshold, fallbackMs]);
```

---

### ~~[DÜŞÜK] `playwright` Üretim Bağımlılığı Olarak Tanımlanmış~~ ✅ Tamamlandı

**Dosya:** `package.json`

**Sorun:** `playwright` paketi `dependencies` altında listelenmiştir. Paket boyutu ~100 MB'dır, uygulama kodu tarafından hiçbir zaman import edilmez ve üretim ortamına gereksiz yük getirir.

**Öneri:**
```bash
npm uninstall playwright
npm install --save-dev playwright
```

---

## 5. Performans

### ~~[YÜKSEK] Kullanılmayan Kütüphaneler Paket Boyutunu Artırıyor~~ ✅ Tamamlandı

**Dosya:** `package.json`

**Sorun:** `aos@2.3.4` ve `wow.js@1.2.2` üretim bağımlılıkları olarak yüklüdür; ancak hiçbir bileşende import edilmez veya başlatılmaz. Gerçek animasyonlar `useInView` kancası (Intersection Observer API) tarafından yönetilmektedir. Bu iki paket tarayıcıya ~50 KB gereksiz kod gönderir.

**Öneri:**
```bash
npm uninstall aos wow.js
```

---

### [YÜKSEK] Rota Seviyesinde Kod Bölme Uygulanmamış

**Dosya:** `src/App.jsx`

**Sorun:** 22'den fazla sayfa bileşeninin tamamı `App.jsx` içinde doğrudan import edilmektedir. Bu, ilk yüklemede tüm servis sayfalarının JavaScript'ini ziyaretçiye göndermek anlamına gelir; oysa ziyaretçi yalnızca tek bir sayfaya gidiyor olabilir.

**Öneri:** `React.lazy` ve `Suspense` kullanın:

```jsx
// src/App.jsx
import { lazy, Suspense } from 'react';

const Homepage   = lazy(() => import('./pages/Homepage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TeklifPage = lazy(() => import('./pages/TeklifPage'));
// … tüm diğer sayfa importlarını aynı şekilde dönüştürün

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Navbar />
        <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* … */}
          </Routes>
        </Suspense>
        <Footer />
      </HelmetProvider>
    </BrowserRouter>
  );
}
```

Bu değişiklik ilk yükleme JavaScript boyutunu önemli ölçüde azaltır.

---

### [ORTA] `App.css` 1787 Satır — Monolitik Stil Dosyası

**Dosya:** `src/App.css`

**Sorun:** Hero, services, references, partners, contact, footer ve about bölümlerine ait stillerin tamamı tek bir dosyada toplanmıştır. Bu durum bakımı zorlaştırmakta ve tüm sayfalara kullanılmayan CSS kuralları göndermektedir. Proje zaten `contact-page.css`, `navbar.css`, `footer.css` gibi bölüm bazlı dosyaları benimsemiş — ancak bu ayrımı `App.css`'e uygulanmamıştır.

**Öneri:** `App.css` içindeki her bölümü kendi dosyasına taşıyın (örn. `hero.css`, `services.css`, `references.css`) ve her sayfanın bileşeni yalnızca ihtiyaç duyduğu dosyayı import etsin. Acele edilmesine gerek yok; bölüm bölüm aşamalı olarak yapılabilir.

---

## 6. Kod Kalitesi

### ~~[ORTA] Doğrulama Mantığı İki Form Arasında Tekrar Ediyor~~ ✅ Tamamlandı

**Dosyalar:** `src/pages/ContactPage.jsx`, `src/pages/TeklifPage.jsx`

**Sorun:** `name`, `email` ve `phone` için doğrulama kuralları her iki bileşende de ayrı ayrı kodlanmıştır. Birinde yapılan bir düzeltmenin diğerine manuel olarak kopyalanması gerekmektedir.

**Öneri:** `src/utils/validators.js` dosyası oluşturun (Bölüm 3'teki örnek koda bakın) ve her iki formdan import edin. Bu tek değişiklik "3. Form Doğrulama" bölümündeki regex düzeltmelerini de çözer.

---

### [DÜŞÜK] Eski `Contact.jsx` Aktif Form ile Karışıklığa Yol Açıyor

*(Bölüm 4'te ele alınmıştır — dosyanın silinmesi önerilir.)*

---

### ~~[DÜŞÜK] Sabit Kodlanmış İletişim Bilgileri~~ ✅ Tamamlandı

**Dosyalar:** `src/pages/ContactPage.jsx`, `src/components/Footer.jsx`, `index.html`

**Sorun:** Telefon numarası, e-posta adresi ve sosyal medya bağlantıları birden fazla dosyada tekrar etmektedir. Bir değişiklik gerektiğinde tüm dosyaların güncellenmesi gerekmektedir.

**Öneri:** `src/config/contact.js` gibi merkezi bir yapılandırma dosyası oluşturun:

```js
// src/config/contact.js
export const CONTACT = {
  phone: '+90 XXX XXX XX XX',
  email: 'info@harkanmedia.com',
  address: 'İstanbul, Türkiye',
  social: {
    linkedin: 'https://…',
    instagram: 'https://…',
  }
};
```

---

## 7. Erişilebilirlik

### [ORTA] Form Alanları Hata Mesajlarıyla Programatik Olarak İlişkilendirilmemiş

**Dosyalar:** `src/pages/ContactPage.jsx`, `src/pages/TeklifPage.jsx`

**Sorun:** Hata mesajları alanlara görsel olarak yakın görünmektedir ancak `aria-describedby` ile ilişkilendirilmemiştir. Ekran okuyucular alana odaklanıldığında hatayı duyurmaz.

**Öneri:**

```jsx
<input
  id="email"
  aria-describedby={errors.email ? 'email-error' : undefined}
  aria-invalid={!!errors.email}
  …
/>
{errors.email && (
  <span id="email-error" role="alert" className="error-text">
    {errors.email}
  </span>
)}
```

Her form alanı için bu deseni uygulayın.

---

### [DÜŞÜK] Hizmet Dropdown'u `aria-required` Eksik

**Dosya:** `src/pages/ContactPage.jsx`

**Sorun:** Zorunlu form alanları `required` HTML özelliğine sahip olmayabilir veya `aria-required="true"` içermeyebilir.

**Öneri:** Tüm zorunlu alanlara ekleyin:

```jsx
<select required aria-required="true" …>
<input required aria-required="true" …>
```

---

## 8. Hızlı Kazanımlar

Aşağıdaki düzeltmelerin her biri 30 dakikadan az sürer ve anında değer sağlar:

| # | Görev | Dosya | Süre |
|---|-------|-------|------|
| 1 | `<Route path="*">` 404 rotası ekle | `src/App.jsx` | 10 dk |
| 2 | `playwright`'ı devDependencies'e taşı | `package.json` | 2 dk |
| 3 | `aos` ve `wow.js`'i kaldır | `package.json` | 2 dk |
| 4 | `<textarea maxLength={2000}>` ekle | `ContactPage.jsx` | 5 dk |
| 5 | TeklifPage Step 3'e telefon regex ekle | `TeklifPage.jsx` | 10 dk |
| 6 | `src/pages/Contact.jsx`'i sil | — | 1 dk |
| 7 | `useInView` zamanlayıcı sızıntısını düzelt | `hooks/useInView.js` | 10 dk |
| 8 | Hizmet dropdown'una boş varsayılan seçenek ekle | `ContactPage.jsx` | 5 dk |

---

## Ek: Dosya Bazlı Bulgu Haritası

| Dosya | İlgili Bulgular |
|-------|----------------|
| `src/pages/ContactPage.jsx` | #1 (e-posta yok), #3 (spam koruması), #7 (telefon regex), #8 (mesaj max), #9 (e-posta regex), #10 (dropdown), #18 (aria) |
| `src/pages/TeklifPage.jsx` | #1 (e-posta yok), #3 (spam koruması), #10 (telefon regex eksik), #18 (aria) |
| `src/App.jsx` | #2 (404 rotası), #16 (code splitting) |
| `src/pages/Contact.jsx` | #12 (ölü kod — sil) |
| `src/hooks/useInView.js` | #13 (zamanlayıcı sızıntısı) |
| `package.json` | #14 (playwright devDep), #15 (aos/wow.js kaldır) |
| `index.html` | #5 (analitik ID'leri) |
| `vercel.json` | #6 (CSP başlığı) |
| `src/App.css` | #17 (monolitik CSS) |

---

*Bu rapor, otomatik testler değil kaynak kodu incelemesi yoluyla hazırlanmıştır. Bulgular öncelik sırasına göre düzenlenmiş olup bağımsız olarak uygulanabilir.*
