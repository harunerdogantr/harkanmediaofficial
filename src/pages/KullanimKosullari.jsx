import SEO from '../components/SEO';
import { CONTACT } from '../config/contact';
import '../styles/legal-page.css';

export default function KullanimKosullari() {
  return (
    <>
      <SEO
        title="Kullanım Koşulları — Harkan Media"
        description="Harkan Media kullanım koşulları. Web sitemizi ve hizmetlerimizi kullanırken geçerli olan şartlar hakkında bilgi edinin."
        path="/kullanim-kosullari"
      />

      <section className="lp-hero">
        <span className="lp-eyebrow">Yasal</span>
        <h1 className="lp-hero-title">Kullanım Koşulları</h1>
        <p className="lp-hero-date">Son güncelleme: Temmuz 2025</p>
      </section>

      <div className="lp-content">

        <div className="lp-section">
          <h2>1. Kabul</h2>
          <p>
            Bu web sitesini ziyaret ederek veya hizmetlerimizden yararlanarak aşağıdaki
            kullanım koşullarını kabul etmiş sayılırsınız. Koşulları kabul etmiyorsanız
            lütfen sitemizi kullanmayınız.
          </p>
        </div>

        <div className="lp-section">
          <h2>2. Hizmetlerin Tanımı</h2>
          <p>
            Harkan Yazılım, Medya ve Danışmanlık; SEO, dijital reklamcılık, sosyal medya yönetimi,
            veri analitiği ve yazılım danışmanlığı alanlarında profesyonel hizmetler sunmaktadır.
            Sunulan hizmetlerin kapsamı, taraflar arasında imzalanan sözleşme veya iş emirleriyle belirlenir.
          </p>
        </div>

        <div className="lp-section">
          <h2>3. Kullanıcı Yükümlülükleri</h2>
          <p>Web sitemizi kullanan kişiler aşağıdaki kurallara uymakla yükümlüdür:</p>
          <ul>
            <li>Yasadışı, yanıltıcı veya zararlı içerik paylaşmamak</li>
            <li>Siteye yetkisiz erişim sağlamaya veya zarar vermeye çalışmamak</li>
            <li>Başkalarının kişisel verilerini izinsiz kullanmamak</li>
            <li>İletişim formlarını spam veya kötüye kullanım amacıyla kullanmamak</li>
            <li>Fikri mülkiyet haklarına saygı göstermek</li>
          </ul>
        </div>

        <div className="lp-section">
          <h2>4. Fikri Mülkiyet</h2>
          <p>
            Bu web sitesinde yer alan tüm içerikler (metin, görsel, logo, tasarım, kod vb.)
            Harkan Yazılım, Medya ve Danışmanlık'a aittir ve telif hakkı yasalarıyla korunmaktadır.
            Önceden yazılı izin alınmaksızın bu içeriklerin kopyalanması, dağıtılması veya
            ticari amaçla kullanılması yasaktır.
          </p>
        </div>

        <div className="lp-section">
          <h2>5. Sorumluluk Sınırlaması</h2>
          <p>
            Harkan Media, web sitesindeki bilgilerin doğruluğunu ve güncelliğini sağlamak
            için makul çaba göstermektedir; ancak hataların tamamen önleneceğini garanti etmez.
          </p>
          <p>
            Sitemiz üzerindeki bağlantılar aracılığıyla erişilen üçüncü taraf web sitelerinin
            içeriğinden sorumlu değiliz. Bu sitelere erişim tamamen kullanıcının sorumluluğundadır.
          </p>
        </div>

        <div className="lp-section">
          <h2>6. Hizmet Kesintileri</h2>
          <p>
            Bakım, güncelleme veya teknik nedenlerle web sitesinin geçici olarak erişime
            kapatılabileceğini önceden bildirmek isteriz. Bu tür kesintilerden doğabilecek
            kayıplardan Harkan Media sorumlu tutulamaz.
          </p>
        </div>

        <div className="lp-section">
          <h2>7. Değişiklikler</h2>
          <p>
            Harkan Media, bu Kullanım Koşullarını önceden bildirmeksizin değiştirme hakkını
            saklı tutar. Güncellenmiş koşullar bu sayfada yayımlanacak olup yayım tarihinden
            itibaren geçerli olacaktır. Sitemizi kullanmaya devam etmeniz, değişiklikleri
            kabul ettiğiniz anlamına gelir.
          </p>
        </div>

        <div className="lp-section">
          <h2>8. Geçerli Hukuk</h2>
          <p>
            Bu Kullanım Koşulları Türk hukukuna tabidir. Bu koşullardan doğacak uyuşmazlıklarda
            İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.
          </p>
        </div>

        <div className="lp-contact-box">
          <p><strong>Harkan Yazılım, Medya ve Danışmanlık</strong></p>
          <p><strong>Adres:</strong> {CONTACT.address}</p>
          <p><strong>E-posta:</strong> <a href={CONTACT.email.href}>{CONTACT.email.display}</a></p>
          <p><strong>Telefon:</strong> <a href={CONTACT.phone.href}>{CONTACT.phone.display}</a></p>
        </div>

      </div>
    </>
  );
}
