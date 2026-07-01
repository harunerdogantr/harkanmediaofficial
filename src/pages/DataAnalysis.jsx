import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ), title: 'İleri Düzey Analiz', desc: 'Makine öğrenmesi ve yapay zeka algoritmaları ile veri setlerinizi derinlemesine analiz ediyoruz.' },
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ), title: 'Tahminsel Analiz', desc: 'Geçmiş verilerden yola çıkarak geleceğe yönelik öngörüler ve trend analizleri üretiyoruz.' },
  { icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ), title: 'Özel Çözümler', desc: 'Sektörünüze ve ihtiyaçlarınıza özel veri analizi modelleri ve çözümleri geliştiriyoruz.' },
];

const SECTIONS = [
  {
    tag: 'İleri Düzey',
    title: 'Veriden Anlam Çıkarmak İçin Doğru Araçlar',
    body: 'Karmaşık veri setlerinizi anlamlı içgörülere dönüştürüyoruz. Makine öğrenmesi ve yapay zeka algoritmaları ile verilerinizi analiz ediyor, trendleri ortaya çıkarıyor ve iş süreçlerinizi optimize ediyoruz. Veri odaklı karar verme süreçlerinizi güçlendiriyoruz.',
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Veri Toplama & Temizleme', tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Model Eğitimi', tag: 'Çalışıyor' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Tahmin Çıktısı', tag: 'Hazır' },
    ],
    stat: { num: '%94', unit: 'tahmin doğruluğu' },
    reverse: false,
  },
  {
    tag: 'Tahminsel',
    title: 'Geleceği Bugünden Şekillendirin',
    body: 'Geçmiş verilerinizi kullanarak geleceğe yönelik tahminler yapıyoruz. Trend analizi, müşteri davranış tahminleri ve pazar analizleri ile işletmenizin geleceğini şekillendiriyoruz. Veri odaklı stratejik kararlar almanıza yardımcı oluyoruz.',
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Müşteri Segmentasyonu', tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Satış Tahmini', tag: 'Analiz' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Churn Tahmini', tag: 'Hazır' },
    ],
    stat: { num: '3x', unit: 'daha iyi karar hızı' },
    reverse: true,
  },
  {
    tag: 'Özelleştirilmiş',
    title: 'Sektörünüze Özel Analiz Modelleri',
    body: 'İşletmenizin ihtiyaçlarına özel veri analizi çözümleri sunuyoruz. Sektörünüze özgü metrikleri analiz ediyor, veri kalitesini artırıyor ve süreçlerinizi optimize ediyoruz. Modern teknolojiler ve en iyi uygulamalarla veri analizi süreçlerinizi güçlendiriyoruz.',
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Sektör Metrik Analizi', tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'KPI Takip Paneli', tag: 'Canlı' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Otomatik Raporlama', tag: 'Hazır' },
    ],
    stat: { num: '48s', unit: 'ortalama rapor süresi' },
    reverse: false,
  },
];

export default function DataAnalysis() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);

  return (
    <>
      <SEO
        title="Veri Analizi - Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık"
        description="İleri düzey veri analizi ile işletmenizin performansını ölçün, tahminsel analizle geleceği öngörün. Harkan Media uzman ekibi ile veri odaklı kararlar alın."
        keywords="veri analizi, tahminsel analiz, iş analitiği, makine öğrenmesi, KPI, İstanbul"
        path="/veri-analizi"
      />

      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true">
          <span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" />
        </div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Veri Analizi</span>
          <h1 className="pl-hero-title">Veriden <span className="pl-accent">Değer Üretin</span></h1>
          <p className="pl-hero-sub">Karmaşık veri setlerinizi anlamlı içgörülere dönüştürüyor,<br />veri odaklı kararlarla işletmenizi büyütmenize yardımcı oluyoruz.</p>
          <div className="pl-breadcrumb">
            <span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Veri Analizi</span>
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
            <div className="pl-cta-eyebrow">Veri ile Büyüyün</div>
            <h2 className="pl-cta-title">Verilerinizi Anlamlı İçgörülere Dönüştürelim</h2>
            <p className="pl-cta-sub">Uzman veri analistlerimizle tanışın ve işletmenize özel bir analiz stratejisi oluşturalım.</p>
          </div>
          <Button to="/iletisim">Ücretsiz Danışın</Button>
        </div>
      </div>
    </>
  );
}
