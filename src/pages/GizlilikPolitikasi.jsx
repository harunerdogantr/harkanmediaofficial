import SEO from '../components/SEO';
import { CONTACT } from '../config/contact';
import '../styles/legal-page.css';

export default function GizlilikPolitikasi() {
  return (
    <>
      <SEO
        title="Gizlilik Politikası | Harkan Media"
        description="Harkan Media gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, kullanıldığı ve korunduğu hakkında bilgi edinin."
        path="/gizlilik-politikasi"
      />

      <section className="lp-hero">
        <span className="lp-eyebrow">Yasal</span>
        <h1 className="lp-hero-title">Gizlilik Politikası</h1>
        <p className="lp-hero-date">Son güncelleme: Temmuz 2025</p>
      </section>

      <div className="lp-content">

        <div className="lp-section">
          <h2>1. Genel Bilgi</h2>
          <p>
            Harkan Yazılım, Medya ve Danışmanlık ("Harkan Media", "biz", "şirket") olarak,
            hizmetlerimizi kullanan kişilerin kişisel verilerinin korunmasına büyük önem veriyoruz.
            Bu Gizlilik Politikası, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
            hazırlanmış olup kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
          </p>
        </div>

        <div className="lp-section">
          <h2>2. Toplanan Kişisel Veriler</h2>
          <p>Web sitemiz üzerinden aşağıdaki kişisel veriler toplanabilmektedir:</p>
          <ul>
            <li>Ad ve soyad</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>Şirket adı ve web sitesi (isteğe bağlı)</li>
            <li>İletişim formları aracılığıyla iletilen mesaj içerikleri</li>
            <li>IP adresi ve tarayıcı bilgileri (Google Analytics aracılığıyla)</li>
          </ul>
        </div>

        <div className="lp-section">
          <h2>3. Verilerin Kullanım Amaçları</h2>
          <p>Toplanan kişisel veriler aşağıdaki amaçlarla kullanılmaktadır:</p>
          <ul>
            <li>Talep ettiğiniz hizmetler hakkında bilgi vermek ve teklif hazırlamak</li>
            <li>İletişim taleplerinizi yanıtlamak</li>
            <li>Hizmet kalitesini iyileştirmek</li>
            <li>Yasal yükümlülükleri yerine getirmek</li>
            <li>Web sitesi trafiğini analiz etmek (anonim istatistik verisi)</li>
          </ul>
        </div>

        <div className="lp-section">
          <h2>4. Verilerin Saklanması ve Güvenliği</h2>
          <p>
            Kişisel verileriniz, hizmet ilişkisinin devam ettiği süre boyunca ve yasal zorunluluklar
            çerçevesinde güvenli sistemlerde saklanmaktadır. Verilerinizin yetkisiz erişime karşı
            korunması için teknik ve idari tedbirler alınmaktadır.
          </p>
          <p>
            İletişim formları aracılığıyla iletilen veriler, EmailJS altyapısı üzerinden işlenmektedir.
            Bu verilerin güvenliğine ilişkin EmailJS'in kendi gizlilik politikası da geçerlidir.
          </p>
        </div>

        <div className="lp-section">
          <h2>5. Üçüncü Taraflarla Veri Paylaşımı</h2>
          <p>
            Kişisel verileriniz; yasal zorunluluklar dışında, açık rızanız olmaksızın üçüncü taraflarla
            paylaşılmamaktadır. Web sitemizde kullanılan üçüncü taraf araçlar şunlardır:
          </p>
          <ul>
            <li><strong>Google Analytics & Google Tag Manager:</strong> Anonim ziyaretçi istatistikleri</li>
            <li><strong>EmailJS:</strong> Form verilerinin iletilmesi</li>
          </ul>
        </div>

        <div className="lp-section">
          <h2>6. KVKK Kapsamında Haklarınız</h2>
          <p>6698 sayılı KVKK'nın 11. maddesi uyarınca aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenen verileriniz hakkında bilgi talep etme</li>
            <li>Verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
            <li>Eksik veya yanlış işlenen verilerin düzeltilmesini isteme</li>
            <li>Verilerin silinmesini veya yok edilmesini isteme</li>
            <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
          </ul>
          <p>
            Bu haklarınızı kullanmak için aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz.
          </p>
        </div>

        <div className="lp-section">
          <h2>7. Politika Değişiklikleri</h2>
          <p>
            Bu Gizlilik Politikası zaman zaman güncellenebilir. Değişiklikler bu sayfada yayımlanacak
            ve önemli değişiklikler e-posta yoluyla bildirilecektir. Politikayı düzenli olarak
            incelemenizi öneririz.
          </p>
        </div>

        <div className="lp-contact-box">
          <p><strong>Veri Sorumlusu:</strong> Harkan Yazılım, Medya ve Danışmanlık</p>
          <p><strong>Adres:</strong> {CONTACT.address}</p>
          <p><strong>E-posta:</strong> <a href={CONTACT.email.href}>{CONTACT.email.display}</a></p>
          <p><strong>Telefon:</strong> <a href={CONTACT.phone.href}>{CONTACT.phone.display}</a></p>
        </div>

      </div>
    </>
  );
}
