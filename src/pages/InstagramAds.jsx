import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>),
    title: 'Görsel Reklamlar', desc: 'Dikkat çeken görseller ve videolarla hedef kitlenizin akışında öne çıkın.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>),
    title: 'Story & Reels', desc: 'Tam ekran Story ve viral Reels formatlarıyla geniş kitlelere organik hızda ulaşın.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>),
    title: 'Dönüşüm Takibi', desc: 'Her reklam formatının dönüşüme etkisini ölçüyor, bütçeyi en iyi performansa yönlendiriyoruz.' },
];

const SECTIONS = [
  { tag: 'Reklamlar', title: 'Her Formatta Güçlü Instagram Varlığı',
    body: "Feed reklamları, Story, Reels, Keşfet ve Alışveriş reklamlarının tamamını yönetiyoruz. Markanıza en uygun format karışımını belirliyor, her yerleşim için özelleştirilmiş kreatifler üretiyor ve etkileşimi maksimize ediyoruz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Feed Reklamı',      tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Story Reklamı',     tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Reels Reklamı',     tag: 'Aktif' },
    ], stat: { num: '+120%', unit: 'etkileşim artışı' }, reverse: false },
  { tag: 'Hedefleme', title: "Doğru Kişiye, Doğru Anda Ulaşın",
    body: "Meta'nın güçlü hedefleme altyapısını kullanarak potansiyel müşterilerinize demografik, ilgi alanı ve davranış bazlı segmentasyon ile ulaşıyoruz. Özel kitleler ve benzer kitle genişletme ile erişiminizi artırırken maliyeti düşürüyoruz.",
    rows: [
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Özel Kitle',        tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Lookalike',         tag: 'Genişliyor' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Retargeting',       tag: 'Çalışıyor' },
    ], stat: { num: '-%28', unit: 'CPM düşüşü' }, reverse: true },
  { tag: 'Kreatif', title: 'Durduran Kreatiflerin Gücü',
    body: "Akışta kaydırmayı durduran görseller ve videolar üretiyoruz. Marka kimliğinizle uyumlu, platforma özgü kreatifleri test ederek hangi mesajın hangi kitlenin dikkatini çektiğini veriye dayalı olarak belirliyoruz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Kreatif A/B Testi',  tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Video Reklamlar',    tag: 'Üretimde' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'UGC Reklamlar',      tag: 'Planlı' },
    ], stat: { num: '2.8x', unit: 'ROAS ortalaması' }, reverse: false },
];

export default function InstagramAds() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <SEO
        title="Instagram Reklamları | Harkan Media | Dijital Pazarlama"
        description="Instagram Feed, Story ve Reels reklamlarıyla hedef kitlenize ulaşın. Profesyonel kreatif üretimi ve dönüşüm odaklı kampanya yönetimiyle markanızı büyütün."
        keywords="Instagram reklamları, Instagram Ads, Story reklamı, Reels reklam, Meta reklamları, İstanbul"
        path="/instagram-reklam-optimizasyonu"
        breadcrumbs={[
          { name: 'Harkan Medya', path: '/' },
          { name: 'Instagram Reklamları' },
        ]}
        serviceName="Instagram Reklamları"
      />
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Instagram Reklamları</span>
          <h1 className="pl-hero-title">{"Instagram'da"} <span className="pl-accent">Fark Yaratın</span></h1>
          <p className="pl-hero-sub">{"Feed'den Reels'e, Story'den Keşfet'e her formatta hedef kitlenizin dikkatini çekiyor,"}<br />etkileşimi satışa dönüştürüyoruz.</p>
          <div className="pl-breadcrumb"><Link to="/">Harkan Medya</Link><span className="pl-sep">/</span><span className="pl-bc-active">Instagram Reklamları</span></div>
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">Instagram Reklamları</div><h2 className="pl-cta-title">Kreatif Reklamlarla Öne Çıkın</h2><p className="pl-cta-sub">Instagram reklam hesabınızı ücretsiz analiz edelim, büyüme fırsatlarını birlikte keşfedelim.</p></div>
          <Button to="/iletisim">Ücretsiz Analiz</Button>
        </div>
      </div>
    </>
  );
}
