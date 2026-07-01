import SEO from '../components/SEO';
import { CONTACT } from '../config/contact';
import '../styles/legal-page.css';

export default function CerezPolitikasi() {
  return (
    <>
      <SEO
        title="Çerez Politikası — Harkan Media"
        description="Harkan Media çerez politikası. Web sitemizde kullanılan çerezler ve yönetim seçenekleri hakkında bilgi edinin."
        path="/cerez-politikasi"
      />

      <section className="lp-hero">
        <span className="lp-eyebrow">Yasal</span>
        <h1 className="lp-hero-title">Çerez Politikası</h1>
        <p className="lp-hero-date">Son güncelleme: Temmuz 2025</p>
      </section>

      <div className="lp-content">

        <div className="lp-section">
          <h2>1. Çerez Nedir?</h2>
          <p>
            Çerezler (cookies), web sitemizi ziyaret ettiğinizde tarayıcınız tarafından cihazınıza
            kaydedilen küçük metin dosyalarıdır. Çerezler, siteyi daha işlevsel hale getirmek,
            deneyiminizi kişiselleştirmek ve ziyaret istatistiklerini analiz etmek amacıyla kullanılır.
          </p>
        </div>

        <div className="lp-section">
          <h2>2. Kullandığımız Çerez Türleri</h2>

          <p><strong>Zorunlu Çerezler</strong></p>
          <p>
            Web sitesinin temel işlevlerini yerine getirebilmesi için gereklidir. Bu çerezler
            olmadan site düzgün çalışamaz. Oturum yönetimi ve güvenlik amaçlı kullanılır.
          </p>

          <p><strong>Analitik Çerezler</strong></p>
          <p>
            Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur. Bu amaçla
            Google Analytics kullanılmaktadır. Toplanan veriler anonimleştirilmiş istatistiklerdir;
            kimliğinizi tanımlamak için kullanılmaz.
          </p>

          <p><strong>Pazarlama ve İzleme Çerezleri</strong></p>
          <p>
            Google Tag Manager aracılığıyla yönetilen bu çerezler, reklam kampanyalarının
            etkinliğini ölçmek amacıyla kullanılabilir.
          </p>
        </div>

        <div className="lp-section">
          <h2>3. Üçüncü Taraf Çerezleri</h2>
          <p>Web sitemizde aşağıdaki üçüncü taraf hizmetleri çerez kullanmaktadır:</p>
          <ul>
            <li><strong>Google Analytics (G-9SMG0W98PL):</strong> Ziyaretçi davranışı analizi</li>
            <li><strong>Google Tag Manager (GTM-TT22LZCN):</strong> Etiket yönetimi ve izleme</li>
          </ul>
          <p>
            Bu hizmetlerin çerez kullanımı kendi gizlilik politikaları kapsamındadır.
            Google'ın gizlilik politikasına <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">buradan</a> ulaşabilirsiniz.
          </p>
        </div>

        <div className="lp-section">
          <h2>4. Çerezleri Nasıl Yönetebilirsiniz?</h2>
          <p>
            Tarayıcı ayarlarınız üzerinden çerezleri kabul etmeyi reddedebilir, mevcut çerezleri
            silebilir veya çerez bildirimi almayı tercih edebilirsiniz. Çerezleri devre dışı
            bırakmanız durumunda sitenin bazı özellikleri düzgün çalışmayabilir.
          </p>
          <p>Yaygın tarayıcılarda çerez ayarları:</p>
          <ul>
            <li><strong>Google Chrome:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler</li>
            <li><strong>Mozilla Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik</li>
            <li><strong>Safari:</strong> Tercihler → Gizlilik</li>
            <li><strong>Microsoft Edge:</strong> Ayarlar → Çerezler ve Site İzinleri</li>
          </ul>
        </div>

        <div className="lp-section">
          <h2>5. Politika Değişiklikleri</h2>
          <p>
            Bu Çerez Politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayımlanacaktır.
            Sitemizi kullanmaya devam etmeniz, güncellenmiş politikayı kabul ettiğiniz anlamına gelir.
          </p>
        </div>

        <div className="lp-contact-box">
          <p><strong>Sorularınız için:</strong></p>
          <p><strong>E-posta:</strong> <a href={CONTACT.email.href}>{CONTACT.email.display}</a></p>
          <p><strong>Telefon:</strong> <a href={CONTACT.phone.href}>{CONTACT.phone.display}</a></p>
        </div>

      </div>
    </>
  );
}
