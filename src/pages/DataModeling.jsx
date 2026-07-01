import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>),
    title: 'Veri Mimarisi', desc: 'Ölçeklenebilir, güvenli ve tutarlı veri altyapısı tasarlıyor, hayata geçiriyoruz.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>),
    title: 'Model Geliştirme', desc: 'İş ihtiyaçlarınıza özel analitik ve makine öğrenmesi modelleri geliştiriyoruz.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>),
    title: 'Görselleştirme', desc: 'Karmaşık verileri anlaşılır grafik ve dashboardlara dönüştürüyoruz.' },
];

const SECTIONS = [
  { tag: 'Veri Altyapısı', title: 'Güçlü Veri Temeli Kurun',
    body: "Doğru kararlar, güvenilir veri altyapısından geçer. Veri ambarı tasarımı, ETL pipeline geliştirme, veri kalitesi yönetimi ve governance politikalarıyla organizasyonunuzun veri olgunluğunu yükseltiyoruz. Birleşik bir veri kaynağı ile tüm ekipler aynı gerçeklik üzerinde çalışır.",
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Data Warehouse',     tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'ETL Pipeline',        tag: 'Çalışıyor' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Veri Kalitesi',       tag: 'İzleniyor' },
    ], stat: { num: '99.8%', unit: 'veri doğruluğu' }, reverse: false },
  { tag: 'Analitik Modeller', title: 'Veriden Öngörü, Öngörüden Eylem',
    body: "Müşteri segmentasyonu, churn tahmini, talep tahmini, fiyat optimizasyonu ve yaşam boyu değer modelleri geliştiriyoruz. Her model iş değerine odaklıdır; akademik bir çalışma değil, kararları destekleyen pratik bir araçtır.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Segmentasyon Modeli',  tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Churn Tahmin',         tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Talep Tahmini',        tag: 'Geliştirmede' },
    ], stat: { num: '%91', unit: 'model doğruluğu' }, reverse: true },
  { tag: 'Görselleştirme', title: 'Verinizi Herkesin Anlayacağı Dile Çevirin',
    body: "Tableau, Power BI veya özel dashboard çözümleriyle verilerinizi etkileşimli görselleştirmelere dönüştürüyoruz. C-level'den operasyon ekibine kadar herkesin ihtiyacına uygun görünümler hazırlıyoruz.",
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Power BI Dashboard',  tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Özel Dashboard',      tag: 'Geliştirmede' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Otomatik Raporlama', tag: 'Aktif' },
    ], stat: { num: '+70%', unit: 'hızlı karar alma' }, reverse: false },
];

export default function DataModeling() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <Helmet>
        <title>Veri Modelleme - Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Veri ambarı tasarımı, analitik model geliştirme ve görselleştirme hizmetleriyle organizasyonunuzun veri olgunluğunu artırın. Veriden değer üretin." />
        <meta name="keywords" content="veri modelleme, data warehouse, ETL, analitik modeller, veri görselleştirme, Power BI, İstanbul" />
        <meta property="og:title" content="Veri Modelleme | Harkan Media" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://harkanmedia.com/veri-modelleme" />
      </Helmet>
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Veri Modelleme</span>
          <h1 className="pl-hero-title">Verinin <span className="pl-accent">Gücünü</span> Keşfedin</h1>
          <p className="pl-hero-sub">Sağlam veri altyapısı, akıllı analitik modeller ve etkileyici görselleştirmelerle<br />organizasyonunuzu veriye dayalı bir geleceğe taşıyoruz.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Veri Modelleme</span></div>
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">Veri Altyapısı</div><h2 className="pl-cta-title">Veri Olgunluğunuzu Birlikte Artıralım</h2><p className="pl-cta-sub">Mevcut veri altyapınızı değerlendirip nereye gideceğinizi birlikte planlayalım.</p></div>
          <Link to="/iletisim" className="pl-cta-btn">Ücretsiz Danışın<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        </div>
      </div>
    </>
  );
}
