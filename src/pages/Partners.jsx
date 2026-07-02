import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const STATS = [
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ), title: 'Sertifikalı Uzmanlar', desc: 'Google ve Meta sertifikalı uzman ekibimizle çalışıyorsunuz.' },
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ), title: 'Öncelikli Destek', desc: 'Partner statüsü sayesinde platformlardan öncelikli teknik destek alıyoruz.' },
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ), title: 'Özel Kaynaklar', desc: 'Yalnızca partner ajansların erişebildiği eğitim ve kaynaklardan yararlanıyoruz.' },
];

export default function Partners() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const [sec1Ref, sec1Visible] = useInView(0.05, 600);
  const [sec2Ref, sec2Visible] = useInView(0.05, 200);
  const [ctaRef, ctaVisible] = useInView(0.05, 200);

  return (
    <>
      <SEO
        title="Partnerlerimiz | Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık"
        description="Harkan Media; Google Partner ve Facebook Business Partner statüleriyle müşterilerine en üst düzey dijital pazarlama hizmetleri sunmaktadır."
        keywords="Google Partner, Facebook Business Partner, Harkan Media partnerleri, dijital pazarlama, İstanbul"
        path="/partnerlerimiz"
        breadcrumbs={[
          { name: 'Harkan Medya', path: '/' },
          { name: 'Partnerlerimiz' },
        ]}
      />

      {/* HERO */}
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true">
          <span className="pl-blob pl-blob-1" />
          <span className="pl-blob pl-blob-2" />
          <span className="pl-grid" />
        </div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Partnerlerimiz</span>
          <h1 className="pl-hero-title">
            Güçlü <span className="pl-accent">İş Birlikleri</span>
          </h1>
          <p className="pl-hero-sub">
            Dünyanın önde gelen dijital platformlarıyla stratejik iş birliklerimiz sayesinde<br />
            müşterilerimize en üst düzey hizmet sunuyoruz.
          </p>
          <div className="pl-breadcrumb">
            <Link to="/">Harkan Medya</Link>
            <span className="pl-sep">/</span>
            <span className="pl-bc-active">Partnerlerimiz</span>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="pl-cards-section">
        <div ref={cardsRef} className={`pl-cards pl-cards-3${cardsVisible ? ' pl-visible' : ''}`}>
          {STATS.map((s, i) => (
            <Card key={s.title} icon={s.icon} title={s.title} description={s.desc} style={{ '--delay': `${i * 0.1}s` }} />
          ))}
        </div>
      </section>

      {/* PARTNER CARDS */}
      <div className="pl-content-wrap">
        <div className="pl-content-inner">
          <div ref={sec1Ref} className={`pl-section${sec1Visible ? ' pl-visible' : ''}`}>
            <div className="pl-partner-card">
              <div className="pl-partner-logo-wrap">
                <img src="/images/google-icon.svg" alt="Google" />
              </div>
              <span className="pl-partner-badge">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Resmi Partner
              </span>
              <h2 className="pl-partner-name">Google Partner</h2>
              <p className="pl-partner-desc">
                Dijital pazarlamaya yaptığınız yatırım önemlidir. Google Partner statüsü, kanıtlanmış uzmanlığa ve yetkinliğe sahip bir ekiple çalıştığınızı gösterir. Müşterilerimize daha iyi sonuçlar sunmak için özel bir Google ekibiyle yakın iş birliği yapıyoruz.
              </p>
            </div>

            <div className="pl-partner-card">
              <div className="pl-partner-logo-wrap">
                <img src="/images/facebook-icon.svg" alt="Meta" />
              </div>
              <span className="pl-partner-badge">
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Resmi Partner
              </span>
              <h2 className="pl-partner-name">Facebook Business Partner</h2>
              <p className="pl-partner-desc">
                Facebook Business Partner olarak Facebook'un yalnızca belirli ajanslara sunduğu eğitimlere, programlara ve özel kaynaklara sahibiz. Müşterilerimize ajansımızın tecrübesiyle birlikte Facebook'un en iyi uygulamalarını sunuyoruz.
              </p>
            </div>
          </div>

          {/* Dark visual block */}
          <div ref={sec2Ref} className={`pl-section pl-reverse${sec2Visible ? ' pl-visible' : ''}`}>
            <div>
              <div className="pl-section-tag"><span className="pl-tag-bar" />Partner Avantajları</div>
              <h2 className="pl-section-title">Partner Statüsünün Size Kattıkları</h2>
              <p className="pl-section-body">
                Her iki platformun da resmi iş ortağı olarak, müşterilerimize erken erişim özellikleri, beta programları ve platform uzmanlarıyla doğrudan iletişim imkânı sunuyoruz. Bu ayrıcalıklar, kampanyalarınızın rakiplerinizden bir adım önde olmasını sağlar.
              </p>
            </div>
            <div className="pl-visual-block">
              <div className="pl-vb-row" style={{ '--vd': '0.1s' }}>
                <span className="pl-vb-dot pl-vb-dot-green" />
                <span className="pl-vb-label">Google Partner Sertifikası</span>
                <span className="pl-vb-badge pl-badge-green">Aktif</span>
              </div>
              <div className="pl-vb-row" style={{ '--vd': '0.25s' }}>
                <span className="pl-vb-dot pl-vb-dot-blue" />
                <span className="pl-vb-label">Meta Business Partner</span>
                <span className="pl-vb-badge pl-badge-blue">Aktif</span>
              </div>
              <div className="pl-vb-row" style={{ '--vd': '0.4s' }}>
                <span className="pl-vb-dot pl-vb-dot-orange" />
                <span className="pl-vb-label">Dijital Reklamcılar Derneği</span>
                <span className="pl-vb-badge pl-badge-orange">Üye</span>
              </div>
              <div className="pl-vb-stat" style={{ marginTop: '8px' }}>
                <span className="pl-vb-num">+50</span>
                <span className="pl-vb-unit">Başarılı proje</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pl-cta-wrap">
        <div ref={ctaRef} className={`pl-cta${ctaVisible ? ' pl-visible' : ''}`}>
          <div className="pl-cta-text">
            <div className="pl-cta-eyebrow">Güvenilir Ortağınız</div>
            <h2 className="pl-cta-title">Sertifikalı Ekibimizle Tanışın</h2>
            <p className="pl-cta-sub">Google ve Meta iş ortaklığımız sayesinde kampanyalarınıza stratejik bir güç katıyoruz.</p>
          </div>
          <Button to="/iletisim">Teklif Alın</Button>
        </div>
      </div>
    </>
  );
}
