import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ), title: 'Gerçek Zamanlı', desc: 'Anlık verilerle performansınızı sürekli izleyin, fırsatları anında yakalayın.' },
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ), title: 'Özelleştirilmiş', desc: "İşletmenizin KPI'larına özel dashboard ve raporlar hazırlıyoruz." },
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ), title: 'Detaylı Analiz', desc: 'Trendleri, fırsatları ve büyüme alanlarını derinlemesine analiz ediyoruz.' },
];

const SECTIONS = [
  {
    tag: 'Özelleştirilmiş',
    title: 'Sizin İçin Tasarlanmış Raporlama Çözümleri',
    body: 'İşletmenizin ihtiyaçlarına özel raporlama çözümleri sunuyoruz. Performans metriklerinizi, pazarlama kampanyalarınızın etkisini ve müşteri davranışlarını detaylı olarak analiz ediyor, anlaşılır ve aksiyon alınabilir raporlar hazırlıyoruz.',
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Pazarlama Raporu',   tag: 'Haftalık' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'KPI Dashboard',      tag: 'Canlı' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'ROI Analizi',        tag: 'Aylık' },
    ],
    stat: { num: '48s', unit: 'ortalama rapor süresi' },
    reverse: false,
  },
  {
    tag: 'Gerçek Zamanlı',
    title: 'Anlık İzleme ile Hızlı Karar Alın',
    body: 'Özelleştirilebilir dashboardlar ile tüm önemli metrikleri tek bir ekranda görüntüleyebilir, anlık değişimleri takip edebilir ve hızlı kararlar alabilirsiniz. Otomatik raporlama sistemleri ile değerli zamanınızı kazanın.',
    rows: [
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Kampanya Performansı', tag: 'Canlı' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Dönüşüm Takibi',       tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Anlık Uyarılar',       tag: 'Açık' },
    ],
    stat: { num: '<5dk', unit: 'uyarı bildirimi' },
    reverse: true,
  },
  {
    tag: 'Derinlemesine',
    title: 'Trendler ve Fırsatları Ortaya Çıkarın',
    body: 'Verilerinizi derinlemesine analiz ediyor, trendleri ve fırsatları ortaya çıkarıyoruz. Geçmiş performans verilerinizi kullanarak geleceğe yönelik öngörüler sunuyor, stratejik kararlarınızı destekliyoruz.',
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Trend Analizi',    tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Rakip Analizi',    tag: 'Haftalık' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Büyüme Önerileri', tag: 'Hazır' },
    ],
    stat: { num: '360°', unit: 'veri görünürlüğü' },
    reverse: false,
  },
];

export default function Reporting() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);

  return (
    <>
      <SEO
        title="Raporlama - Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık"
        description="Gerçek zamanlı izleme, özelleştirilmiş KPI raporları ve detaylı analiz ile işletmenizin performansını net olarak görün. Harkan Media raporlama hizmetleri."
        keywords="dijital raporlama, KPI dashboard, performans raporu, veri görselleştirme, gerçek zamanlı analitik, İstanbul"
        path="/raporlama"
      />

      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true">
          <span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" />
        </div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Raporlama</span>
          <h1 className="pl-hero-title">Verilerinizi <span className="pl-accent">Anlayın</span></h1>
          <p className="pl-hero-sub">Gerçek zamanlı dashboardlar ve özelleştirilmiş raporlarla<br />işletmenizin nabzını her an elinizin altında tutun.</p>
          <div className="pl-breadcrumb">
            <span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Raporlama</span>
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
            <div className="pl-cta-eyebrow">Net Görünürlük</div>
            <h2 className="pl-cta-title">Performansınızı Birlikte İzleyelim</h2>
            <p className="pl-cta-sub">İşletmenize özel dashboard ve raporlama sistemi kuralım, kararlarınızı veriye dayandırın.</p>
          </div>
          <Button to="/iletisim">Ücretsiz Danışın</Button>
        </div>
      </div>
    </>
  );
}
