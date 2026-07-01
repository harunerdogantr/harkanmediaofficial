import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
    title: 'Hedef Kitle Analizi', desc: 'Demografik, ilgi alanı ve davranış bazlı segmentasyonla tam doğru kitleye ulaşıyoruz.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
    title: 'Dönüşüm Optimizasyonu', desc: 'Reklam metinleri, görseller ve yerleşim testleriyle dönüşüm oranlarınızı sürekli artırıyoruz.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>),
    title: 'ROI Takibi', desc: 'Her kuruşun nereye gittiğini ölçüyor, reklam bütçenizden maksimum verim almanızı sağlıyoruz.' },
];

const SECTIONS = [
  { tag: 'Kampanya', title: 'Kapsamlı Facebook Ads Yönetimi',
    body: 'Facebook ve Instagram reklamlarınızı uçtan uca yönetiyoruz. Hedef kitle segmentasyonu, reklam formatları ve kampanya optimizasyonu ile sosyal medya varlığınızı güçlendiriyoruz. Bütçenizi en verimli şekilde kullanarak marka bilinirliğinizi ve satışlarınızı artırıyoruz.',
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Kampanya Kurulumu',    tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'A/B Test',             tag: 'Çalışıyor' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Performans Raporu',    tag: 'Hazır' },
    ], stat: { num: '3.2x', unit: 'ortalama ROAS' }, reverse: false },
  { tag: 'Optimizasyon', title: 'Sürekli İyileştirme ile Büyüme',
    body: 'Kampanyalarınızı haftalık bazda analiz ediyor, düşük performanslı reklamları devre dışı bırakıp bütçeyi kazananlara yönlendiriyoruz. Piksel optimizasyonu, lookalike kitle genişletme ve yeniden hedefleme stratejileriyle dönüşüm maliyetinizi düşürüyoruz.',
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Piksel Takibi',        tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Lookalike Kitle',      tag: 'Genişliyor' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Retargeting',          tag: 'Aktif' },
    ], stat: { num: '-%40', unit: 'CPA düşüşü' }, reverse: true },
  { tag: 'Strateji', title: 'İşletmenize Özel Reklam Stratejisi',
    body: 'Sektörünüzü, rakiplerinizi ve hedef kitlenizi analiz ederek size özel bir reklam stratejisi oluşturuyoruz. Mevsimsel kampanyalar, lansman planlamaları ve funnel bazlı yaklaşımla kısa ve uzun vadeli hedeflerinize ulaşıyoruz.',
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Rakip Analizi',        tag: 'Haftalık' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Funnel Stratejisi',    tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Aylık Raporlama',      tag: 'Otomatik' },
    ], stat: { num: '+65%', unit: 'marka görünürlüğü' }, reverse: false },
];

export default function FacebookAds() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <Helmet>
        <title>Facebook Reklamları - Harkan Media | Dijital Pazarlama</title>
        <meta name="description" content="Facebook ve Instagram reklamlarınızı profesyonel olarak yönetiyoruz. Hedef kitle analizi, dönüşüm optimizasyonu ve ROI odaklı kampanyalarla markanızı büyütün." />
        <meta name="keywords" content="Facebook reklamları, Facebook Ads, Meta reklam, sosyal medya reklamı, dönüşüm optimizasyonu, İstanbul" />
        <meta property="og:title" content="Facebook Reklamları | Harkan Media" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://harkanmedia.com/facebook-reklam-optimizasyonu" />
      </Helmet>
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Facebook Reklamları</span>
          <h1 className="pl-hero-title">Facebook'ta Markanızı <span className="pl-accent">Büyütün</span></h1>
          <p className="pl-hero-sub">Hedef kitlenize tam isabet eden reklamlarla dönüşüm oranlarınızı artırıyor,<br />reklam bütçenizden maksimum verim almanızı sağlıyoruz.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Facebook Reklamları</span></div>
        </div>
      </section>
      <section className="pl-cards-section">
        <div ref={cardsRef} className={`pl-cards pl-cards-3${cardsVisible ? ' pl-visible' : ''}`}>
          {FEATURES.map((f, i) => (<div key={f.title} className="pl-feat-card" style={{ '--delay': `${i * 0.1}s` }}><div className="pl-feat-icon">{f.icon}</div><div className="pl-feat-title">{f.title}</div><p className="pl-feat-desc">{f.desc}</p></div>))}
        </div>
      </section>
      <div className="pl-content-wrap"><div className="pl-content-inner">
        {SECTIONS.map((s, i) => { const [ref, visible] = secRefs[i]; return (
          <div key={s.tag} ref={ref} className={`pl-section${s.reverse ? ' pl-reverse' : ''}${visible ? ' pl-visible' : ''}`}>
            <div><div className="pl-section-tag"><span className="pl-tag-bar" />{s.tag}</div><h2 className="pl-section-title">{s.title}</h2><p className="pl-section-body">{s.body}</p></div>
            <div className="pl-visual-block">
              {s.rows.map((r, j) => (<div key={r.label} className="pl-vb-row" style={{ '--vd': `${j * 0.15}s` }}><span className={`pl-vb-dot ${r.dot}`} /><span className="pl-vb-label">{r.label}</span><span className={`pl-vb-badge ${r.badge}`}>{r.tag}</span></div>))}
              <div className="pl-vb-stat"><span className="pl-vb-num">{s.stat.num}</span><span className="pl-vb-unit">{s.stat.unit}</span></div>
            </div>
          </div>
        ); })}
      </div></div>
      <div className="pl-cta-wrap">
        <div ref={ctaRef} className={`pl-cta${ctaVisible ? ' pl-visible' : ''}`}>
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">Facebook & Instagram</div><h2 className="pl-cta-title">Kampanyanızı Birlikte Büyütelim</h2><p className="pl-cta-sub">Ücretsiz reklam hesabı analizi için hemen iletişime geçin.</p></div>
          <Link to="/iletisim" className="pl-cta-btn">Ücretsiz Analiz<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        </div>
      </div>
    </>
  );
}
