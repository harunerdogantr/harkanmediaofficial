import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ), title: 'Özel Yazılım', desc: 'İşletmenizin süreçlerine tam uyum sağlayan, sıfırdan geliştirilen yazılım çözümleri.' },
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ), title: 'Sistem Entegrasyonu', desc: 'Mevcut sistemlerinizi modern altyapılarla entegre ederek verimliliği artırıyoruz.' },
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ), title: 'Teknoloji Danışmanlığı', desc: 'Bulut, yapay zeka ve otomasyon teknolojilerini işletmenize en uygun şekilde entegre ediyoruz.' },
];

const SECTIONS = [
  {
    tag: 'Danışmanlık',
    title: 'İşletmenize Özel Yazılım Stratejisi',
    body: 'İşletmenizin ihtiyaçlarına özel yazılım çözümleri sunuyoruz. Mevcut sistemlerinizi analiz ediyor, modern teknolojiler ile entegre ediyor ve verimliliğinizi artırıyoruz. Dijital dönüşüm sürecinizde size rehberlik ediyoruz.',
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'İhtiyaç Analizi',   tag: 'Tamamlandı' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Çözüm Tasarımı',   tag: 'Devam Ediyor' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Geliştirme',        tag: 'Planlandı' },
    ],
    stat: { num: '+100', unit: 'tamamlanan proje' },
    reverse: false,
  },
  {
    tag: 'Teknoloji',
    title: 'En Güncel Teknolojilerle Çalışıyoruz',
    body: 'Bulut çözümleri, yapay zeka ve otomasyon sistemleri ile iş süreçlerinizi optimize ediyoruz. Teknoloji altyapınızı güçlendirerek rekabet avantajı elde etmenizi sağlıyoruz. AWS, Azure, GCP ve modern çerçevelerle çalışıyoruz.',
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Bulut Mimarisi',   tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'AI Entegrasyonu',  tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'CI/CD Pipeline',   tag: 'Çalışıyor' },
    ],
    stat: { num: '15+', unit: 'kullanılan teknoloji' },
    reverse: true,
  },
  {
    tag: 'Özelleştirilmiş',
    title: 'Sektörünüze Özgü Çözümler',
    body: 'Sektörünüze özgü iş süreçlerinizi analiz ediyor, verimliliğinizi artıracak sistemler tasarlıyoruz. E-ticaret, fintech, lojistik ve daha pek çok sektörde başarılı projeler hayata geçirdik.',
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'E-Ticaret Çözümleri', tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'CRM Entegrasyonu',    tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'API Geliştirme',      tag: 'Aktif' },
    ],
    stat: { num: '8+', unit: 'sektörde deneyim' },
    reverse: false,
  },
];

export default function SoftwareConsulting() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);

  return (
    <>
      <SEO
        title="Yazılım Danışmanlığı | Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık"
        description="Özel yazılım çözümleri, sistem entegrasyonu ve teknoloji danışmanlığı ile dijital dönüşümünüzü gerçekleştirin. Harkan Media uzman ekibiyle işletmenizi geleceğe taşıyın."
        keywords="yazılım danışmanlığı, dijital dönüşüm, özel yazılım, sistem entegrasyonu, bulut çözümleri, İstanbul"
        path="/yazilim-danismanligi"
        breadcrumbs={[
          { name: 'Harkan Medya', path: '/' },
          { name: 'Yazılım Danışmanlığı' },
        ]}
        serviceName="Yazılım Danışmanlığı"
      />

      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true">
          <span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" />
        </div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Yazılım Danışmanlığı</span>
          <h1 className="pl-hero-title">Dijital <span className="pl-accent">Dönüşümünüz</span> Başlıyor</h1>
          <p className="pl-hero-sub">Özel yazılım çözümleri, sistem entegrasyonu ve teknoloji danışmanlığıyla<br />işletmenizi geleceğe hazırlıyoruz.</p>
          <div className="pl-breadcrumb">
            <Link to="/">Harkan Medya</Link><span className="pl-sep">/</span><span className="pl-bc-active">Yazılım Danışmanlığı</span>
          </div>
        </div>
      </section>

      <section className="pl-cards-section">
        <div ref={cardsRef} className={`pl-cards pl-cards-3${cardsVisible ? ' pl-visible' : ''}`}>
          {FEATURES.map((f, i) => (
            <Card key={f.title} icon={f.icon} title={f.title} description={f.desc} style={{ '--delay': `${i * 0.1}s` }} />
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
            <div className="pl-cta-eyebrow">Dijital Dönüşüm</div>
            <h2 className="pl-cta-title">Yazılım Projenizi Hayata Geçirelim</h2>
            <p className="pl-cta-sub">İhtiyaçlarınızı paylaşın, size özel bir yazılım stratejisi hazırlayalım.</p>
          </div>
          <Button to="/iletisim">Ücretsiz Danışın</Button>
        </div>
      </div>
    </>
  );
}
