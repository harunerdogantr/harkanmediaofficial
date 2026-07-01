import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>),
    title: '360° Strateji', desc: 'SEO, sosyal medya, reklam ve içerik kanallarını entegre eden bütünsel bir dijital pazarlama planı.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>),
    title: 'İçerik Pazarlama', desc: 'Hedef kitlenizin problemlerini çözen, marka güveni inşa eden içerikler üretiyoruz.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>),
    title: 'Performans Odaklı', desc: 'Tüm aktiviteleri ölçümlüyor, veriye dayalı kararlarla yatırımınızın karşılığını maksimize ediyoruz.' },
];

const SECTIONS = [
  { tag: 'Strateji', title: "Markanız İçin Bütünsel Dijital Strateji",
    body: "Dijital pazarlama yalnızca reklam vermek değildir. Marka konumlaması, müşteri yolculuğu tasarımı, kanal seçimi ve bütçe dağılımını bir arada düşünen bütünsel bir strateji hazırlıyoruz. Her kanal birbirini destekler, hiçbir bütçe boşa gitmez.",
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Pazar Araştırması',    tag: 'Tamamlandı' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Kanal Planlaması',     tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Bütçe Optimizasyonu', tag: 'Sürekli' },
    ], stat: { num: '360°', unit: 'bütünsel yaklaşım' }, reverse: false },
  { tag: 'Büyüme', title: "Ölçümlenen Büyüme, Sürdürülebilir Başarı",
    body: "Her kampanya başlamadan önce net KPI'lar belirliyoruz: marka bilinirliği, web trafiği, lead sayısı veya satış artışı. Aylık performans raporlarıyla ne işe yaradığını, neyin değişmesi gerektiğini birlikte değerlendiriyoruz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'KPI Belirleme',        tag: 'Her Proje' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Aylık Raporlama',      tag: 'Otomatik' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Strateji Revizyon',    tag: 'Aylık' },
    ], stat: { num: '+3.5x', unit: 'ortalama yatırım getirisi' }, reverse: true },
  { tag: 'Ekosistem', title: "Tüm Kanallar Bir Arada Çalışır",
    body: "Arama reklamları (Google Ads), sosyal medya reklamları (Meta, LinkedIn), SEO, e-posta pazarlama ve içerik kanallarının hepsini koordineli yönetiyoruz. Bir kanalda kazanılan müşteri, diğer kanallarla beslenerek marka savunucusuna dönüşür.",
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Ücretli Reklamlar',   tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Organik Kanallar',    tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'E-posta Pazarlama',   tag: 'Aktif' },
    ], stat: { num: '6+', unit: 'entegre kanal' }, reverse: false },
];

export default function DijitalPazarlama() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <SEO
        title="Dijital Pazarlama - Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık"
        description="SEO, sosyal medya, içerik ve ücretli reklam kanallarını entegre eden 360° dijital pazarlama stratejisiyle markanızı büyütün. Veriye dayalı, ölçümlenebilir sonuçlar."
        keywords="dijital pazarlama, 360 dijital strateji, içerik pazarlama, inbound marketing, performans pazarlama, İstanbul"
        path="/dijital-pazarlama"
      />
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Dijital Pazarlama</span>
          <h1 className="pl-hero-title">Markanızı <span className="pl-accent">360°</span> Büyütün</h1>
          <p className="pl-hero-sub">Tüm dijital kanalları koordineli yönetiyor, her yatırımın karşılığını<br />ölçümlüyor ve markanızı sürdürülebilir biçimde büyütüyoruz.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Dijital Pazarlama</span></div>
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">Dijital Strateji</div><h2 className="pl-cta-title">Markanız İçin Bir Strateji Hazırlayalım</h2><p className="pl-cta-sub">Hedeflerinizi paylaşın, size özel 360° dijital pazarlama planı hazırlayalım.</p></div>
          <Link to="/iletisim" className="pl-cta-btn">Ücretsiz Strateji Görüşmesi<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        </div>
      </div>
    </>
  );
}
