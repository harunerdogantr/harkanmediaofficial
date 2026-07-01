import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ), title: '%99.9 Uptime', desc: 'Yüksek erişilebilirlik garantisi ile web siteniz 7/24 kesintisiz çalışır.' },
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ), title: 'SSD Depolama', desc: 'Hızlı SSD diskler ile yükleme sürelerinizi minimize ediyoruz.' },
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ), title: '7/24 Destek', desc: 'Teknik destek ekibimiz her an yanınızda, sorunlarınızı hızla çözüyoruz.' },
];

const SECTIONS = [
  {
    tag: 'Hosting',
    title: 'Güvenilir ve Hızlı Hosting Çözümleri',
    body: 'Yüksek performanslı ve güvenli hosting hizmetleri sunuyoruz. SSD depolama, yüksek bant genişliği ve 7/24 teknik destek ile web sitenizin kesintisiz çalışmasını sağlıyoruz. Modern altyapımız ile dijital varlığınızı güvenle barındırıyoruz.',
    rows: [
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Sunucu Durumu',    tag: 'Çevrimiçi' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'SSL Sertifikası',  tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Yedekleme',        tag: 'Otomatik' },
    ],
    stat: { num: '%99.9', unit: 'uptime garantisi' },
    reverse: false,
  },
  {
    tag: 'Domain',
    title: 'Markanıza Uygun Domain Yönetimi',
    body: 'Markanıza uygun domain adını bulmanıza yardımcı oluyoruz. Domain kayıt, transfer ve yenileme işlemlerinizi kolayca yönetmenizi sağlıyoruz. DNS yönetimi ve SSL sertifikaları ile güvenli ve profesyonel bir online varlık oluşturmanıza destek oluyoruz.',
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'DNS Yönetimi',    tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Domain Yenileme', tag: 'Otomatik' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'WHOIS Koruma',    tag: 'Aktif' },
    ],
    stat: { num: '+500', unit: 'yönetilen domain' },
    reverse: true,
  },
  {
    tag: 'Paketler',
    title: 'İhtiyacınıza Özel Hosting Paketleri',
    body: 'Paylaşımlı hosting, VPS, dedicated sunucu ve bulut hosting seçenekleri ile bütçenize ve gereksinimlerinize uygun çözümler sunuyoruz. Ölçeklenebilir altyapımız ile büyümenize destek oluyoruz.',
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Paylaşımlı Hosting', tag: 'Hazır' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'VPS Sunucu',         tag: 'Hazır' },
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Bulut Hosting',      tag: 'Hazır' },
    ],
    stat: { num: '3', unit: 'esnek paket seçeneği' },
    reverse: false,
  },
];

export default function DomainHosting() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);

  return (
    <>
      <SEO
        title="Domain & Hosting Yönetimi - Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık"
        description="%99.9 uptime garantisi, SSD depolama ve 7/24 teknik destek ile domain ve hosting hizmetlerinizi profesyonel olarak yönetiyoruz."
        keywords="domain yönetimi, hosting hizmetleri, VPS, SSL sertifikası, web hosting, İstanbul"
        path="/domain-hosting"
      />

      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true">
          <span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" />
        </div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Domain & Hosting</span>
          <h1 className="pl-hero-title">Güvenli <span className="pl-accent">Dijital Altyapı</span></h1>
          <p className="pl-hero-sub">%99.9 uptime garantisi, SSD hız ve 7/24 teknik destek ile<br />dijital varlığınızı kesintisiz koruyoruz.</p>
          <div className="pl-breadcrumb">
            <span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Domain & Hosting</span>
          </div>
        </div>
      </section>

      <section className="pl-cards-section">
        <div ref={cardsRef} className={`pl-cards pl-cards-3${cardsVisible ? ' pl-visible' : ''}`}>
          {FEATURES.map((f, i) => (
            <div key={f.title} className="pl-feat-card" style={{ '--delay': `${i * 0.1}s` }}>
              <div className="pl-feat-icon">{f.icon}</div>
              <div className="pl-feat-title">{f.title}</div>
              <p className="pl-feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="pl-content-wrap">
        <div className="pl-content-inner">
          {SECTIONS.map((s, i) => {
            const [ref, visible] = secRefs[i];
            return (
              <div key={s.tag} ref={ref} className={`pl-section${s.reverse ? ' pl-reverse' : ''}${visible ? ' pl-visible' : ''}`}>
                <div>
                  <div className="pl-section-tag"><span className="pl-tag-bar" />{s.tag}</div>
                  <h2 className="pl-section-title">{s.title}</h2>
                  <p className="pl-section-body">{s.body}</p>
                </div>
                <div className="pl-visual-block">
                  {s.rows.map((r, j) => (
                    <div key={r.label} className="pl-vb-row" style={{ '--vd': `${j * 0.15}s` }}>
                      <span className={`pl-vb-dot ${r.dot}`} />
                      <span className="pl-vb-label">{r.label}</span>
                      <span className={`pl-vb-badge ${r.badge}`}>{r.tag}</span>
                    </div>
                  ))}
                  <div className="pl-vb-stat">
                    <span className="pl-vb-num">{s.stat.num}</span>
                    <span className="pl-vb-unit">{s.stat.unit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pl-cta-wrap">
        <div ref={ctaRef} className={`pl-cta${ctaVisible ? ' pl-visible' : ''}`}>
          <div className="pl-cta-text">
            <div className="pl-cta-eyebrow">Altyapınız Güvende</div>
            <h2 className="pl-cta-title">Dijital Varlığınızı Bizimle Güçlendirin</h2>
            <p className="pl-cta-sub">İhtiyaçlarınıza uygun hosting ve domain paketi için hemen danışın.</p>
          </div>
          <Link to="/iletisim" className="pl-cta-btn">
            Teklif Alın
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
