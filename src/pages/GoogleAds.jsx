import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>),
    title: 'Arama Reklamları', desc: 'Potansiyel müşterileriniz arama yaptığı anda karşılarına çıkın, doğru zamanda doğru mesajı verin.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>),
    title: 'Görüntülü Reklamlar', desc: "Milyonlarca web sitesinde markanızı görünür kılın, yeniden hedeflemeyle dönüşüm oranını artırın." },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>),
    title: 'ROI Odaklı Yönetim', desc: 'Her tıklamanın değerini ölçüyor, bütçenizi en yüksek dönüşümü getiren kampanyalara yönlendiriyoruz.' },
];

const SECTIONS = [
  { tag: 'Kampanya', title: "Google'da Görünürlüğünüzü Zirveye Taşıyın",
    body: "Google Ads kampanyalarınızı uçtan uca yönetiyoruz. Arama, görüntülü, video ve alışveriş reklamları ile hedef kitlenize ulaşmanızı sağlıyoruz. Optimize edilmiş kampanyalar ile reklam bütçenizi verimli kullanmanıza yardımcı oluyoruz.",
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Search Kampanyası',   tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Display Network',     tag: 'Çalışıyor' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Shopping Reklamları', tag: 'Aktif' },
    ], stat: { num: '4.1x', unit: 'ortalama ROAS' }, reverse: false },
  { tag: 'Optimizasyon', title: 'Anahtar Kelimeden Dönüşüme Optimize Yol',
    body: "Anahtar kelime araştırması, negatif kelime yönetimi ve teklif stratejileriyle kalite puanınızı yükseltiyor, tıklama başı maliyetinizi (CPC) düşürüyoruz. Reklam metinleri ve açılış sayfası uyumu ile dönüşüm oranlarınızı maksimize ediyoruz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Kalite Puanı',        tag: '8/10' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'CPC Optimizasyonu',  tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Dönüşüm İzleme',     tag: 'Aktif' },
    ], stat: { num: '-%35', unit: 'CPC düşüşü' }, reverse: true },
  { tag: 'Strateji', title: 'Rekabette Öne Geçiren Reklam Stratejisi',
    body: "Sektörünüzün rekabet ortamını analiz ediyor, rakiplerinizin hangi kelimelerle göründüğünü tespit edip boşlukları sizin için fırsata dönüştürüyoruz. Akıllı teklif stratejileri ve özel hedef kitle listeleriyle dönüşüm maliyetinizi en aza indiriyoruz.",
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Rakip Analizi',       tag: 'Haftalık' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Smart Bidding',       tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Remarketing',         tag: 'Aktif' },
    ], stat: { num: '+80%', unit: 'organik görünürlük' }, reverse: false },
];

export default function GoogleAds() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <SEO
        title="Google Ads Optimizasyonu - Harkan Media | Dijital Pazarlama"
        description="Google Ads reklamlarınızı profesyonel olarak yönetiyoruz. Arama, görüntülü ve video reklamlarıyla hedef kitlenize ulaşın, ROI'nizi maksimize edin."
        keywords="Google Ads, Google reklamları, PPC, arama reklamları, görüntülü reklamlar, Google Ads optimizasyonu, İstanbul"
        path="/google-ads-optimizasyonu"
      />
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Google Ads</span>
          <h1 className="pl-hero-title">{"Google'da"} <span className="pl-accent">1. Sıraya</span> Çıkın</h1>
          <p className="pl-hero-sub">Doğru anahtar kelimeler, optimize teklif stratejileri ve ikna edici reklam metinleriyle<br />hedef kitlenize tam ihtiyaç duydukları anda ulaşıyoruz.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Google Ads</span></div>
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">Google Ads</div><h2 className="pl-cta-title">Reklam Hesabınızı Ücretsiz Analiz Edelim</h2><p className="pl-cta-sub">Mevcut kampanyalarınızın güçlü ve zayıf yönlerini birlikte değerlendirelim.</p></div>
          <Link to="/iletisim" className="pl-cta-btn">Ücretsiz Analiz<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        </div>
      </div>
    </>
  );
}
