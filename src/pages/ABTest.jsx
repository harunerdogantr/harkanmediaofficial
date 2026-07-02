import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>),
    title: 'Hipotez Testi', desc: 'Veri destekli hipotezler kurarak hangi değişkenin dönüşümü artırdığını bilimsel yöntemle test ediyoruz.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
    title: 'İstatistiksel Analiz', desc: 'İstatistiksel anlamlılık garantisiyle yanlış pozitif sonuçlara karşı korunan güvenilir test sonuçları.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>),
    title: 'Sürekli İyileştirme', desc: 'Her test döngüsünden öğrenerek dönüşüm oranlarınızı sürekli olarak yukarı taşıyoruz.' },
];

const SECTIONS = [
  { tag: 'Test Metodolojisi', title: 'Bilimsel Temelli Test Süreci',
    body: "A/B testlerini doğru yürütmek, sahte pozitiflerden kaçınmak ve istatistiksel anlamlılığa ulaşmak için kanıtlanmış metodolojiler kullanıyoruz. Hipotez oluşturma, segment izolasyonu, kontrol grubu yönetimi ve test süresi hesaplaması ile güvenilir sonuçlar elde ediyoruz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Hipotez Kurma',       tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Segment Yalıtımı',    tag: 'Çalışıyor' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'İstatistiksel Analiz', tag: 'Otomatik' },
    ], stat: { num: '%95', unit: 'güven aralığı' }, reverse: false },
  { tag: 'Test Alanları', title: 'Neyi Test Edebiliriz?',
    body: "Açılış sayfaları, reklam metinleri ve görselleri, e-posta konu satırları, CTA butonları, fiyatlandırma sunumu, form uzunlukları ve onboarding akışları dahil olmak üzere dönüşümü etkileyen her değişkeni test edebiliyoruz.",
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Açılış Sayfası Testi',  tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Reklam Kreatif Testi',  tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'E-posta Testi',          tag: 'Aktif' },
    ], stat: { num: '+35%', unit: 'dönüşüm artışı' }, reverse: true },
  { tag: 'Öğrenme & Büyüme', title: 'Her Testten Öğrenerek Büyüyün',
    body: "Bir test bitmesi bir sonrakinin başlangıcıdır. Test bulgularını dokümante ediyor, kazanan varyantı hızla hayata geçiriyor ve bir sonraki hipotez için temel oluşturuyoruz. Bu döngüsel süreç sayesinde dönüşüm oranlarınız sistematik olarak artıyor.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Bulgu Dokümantasyonu', tag: 'Her Test' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Kazanan Uygulama',     tag: 'Hızlı' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Yeni Hipotez',         tag: 'Sürekli' },
    ], stat: { num: '2-4', unit: 'test/ay ortalaması' }, reverse: false },
];

export default function ABTest() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <SEO
        title="A/B Testi | Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık"
        description="Veriye dayalı A/B testleriyle dönüşüm oranlarınızı artırın. İstatistiksel anlamlılık garantisiyle güvenilir test sonuçları, sürekli iyileştirme döngüsü."
        keywords="A/B testi, split test, dönüşüm optimizasyonu, CRO, landing page testi, İstanbul"
        path="/ab-testi"
        breadcrumbs={[
          { name: 'Harkan Medya', path: '/' },
          { name: 'A/B Testi' },
        ]}
        serviceName="A/B Testi"
      />
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">A/B Testi</span>
          <h1 className="pl-hero-title">Verilere Dayalı <span className="pl-accent">Kararlar</span> Alın</h1>
          <p className="pl-hero-sub">Tahmin değil, test. Her değişken için istatistiksel kanıt üretiyor,<br />dönüşüm oranlarınızı sistematik olarak artırıyoruz.</p>
          <div className="pl-breadcrumb"><Link to="/">Harkan Medya</Link><span className="pl-sep">/</span><span className="pl-bc-active">A/B Testi</span></div>
        </div>
      </section>
      <section className="pl-cards-section">
        <div ref={cardsRef} className={`pl-cards pl-cards-3${cardsVisible ? ' pl-visible' : ''}`}>
          {FEATURES.map((f, i) => (<Card key={f.title} icon={f.icon} title={f.title} description={f.desc} style={{ '--delay': `${i * 0.1}s` }} />))}
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">Dönüşüm Optimizasyonu</div><h2 className="pl-cta-title">Dönüşüm Oranlarınızı Birlikte Yükseltelim</h2><p className="pl-cta-sub">Sitenizin hangi noktalarını test etmeli, nereden başlamalı? Ücretsiz CRO analizi için yazın.</p></div>
          <Button to="/iletisim">Ücretsiz Analiz</Button>
        </div>
      </div>
    </>
  );
}
