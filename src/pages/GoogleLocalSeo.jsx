import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
    title: 'Google My Business', desc: 'GMB profilinizi optimize ederek yerel aramalarda ve Google Haritalar\'da üst sıralara çıkın.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>),
    title: 'Yerel Arama Optimizasyonu', desc: '"Yakınımdaki" ve konum bazlı aramalarda rakiplerinizin önüne geçin.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>),
    title: 'Yorum Yönetimi', desc: 'Olumlu yorumları artırın, olumsuzlara doğru yanıt verin ve itibarınızı koruyun.' },
];

const SECTIONS = [
  { tag: 'Google My Business', title: "Yerel Aramada 1. Sırada Görünün",
    body: "Google My Business profilinizi eksiksiz ve doğru bilgilerle dolduruyoruz. Kategori optimizasyonu, fotoğraf yönetimi, soru-cevap bölümü ve Google Gönderi kullanımıyla profilinizin yerel arama sıralamalarındaki etkisini maksimize ediyoruz. 3-Pack'e girmenizi sağlıyoruz.",
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Profil Optimizasyonu',  tag: 'Tamamlandı' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Google Gönderi',        tag: 'Haftalık' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Yerel 3-Pack',          tag: 'Hedef' },
    ], stat: { num: '+180%', unit: 'yerel görünürlük' }, reverse: false },
  { tag: 'Yerel SEO', title: "Konumunuz İçin Güçlü Dijital Varlık",
    body: "NAP (Name, Address, Phone) tutarlılığı, yerel alıntı oluşturma ve yerel anahtar kelime optimizasyonuyla arama motoru sıralamanızı güçlendiriyoruz. Şehir ve ilçe bazlı içerik stratejisiyle rekabetçi konumlarda öne çıkıyoruz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'NAP Tutarlılığı',       tag: 'Kontrol Edildi' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Yerel Alıntılar',       tag: 'Artıyor' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Yerel İçerik',          tag: 'Aktif' },
    ], stat: { num: '+75%', unit: 'yerel trafik artışı' }, reverse: true },
  { tag: 'İtibar Yönetimi', title: "Yorumlar İtibarınızı Şekillendirir",
    body: "Müşteri yorumları, yerel SEO sıralamasını ve satın alma kararlarını doğrudan etkiler. Proaktif yorum talep stratejileri, olumsuz yorumlara profesyonel yanıt şablonları ve yorum izleme sistemiyle dijital itibarınızı koruyup güçlendiriyoruz.",
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Yorum İzleme',          tag: '7/24' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Yanıt Yönetimi',        tag: '<24s' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Ortalama Puan',         tag: '4.8/5' },
    ], stat: { num: '4.8/5', unit: 'hedef ortalama puan' }, reverse: false },
];

export default function GoogleLocalSeo() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <SEO
        title="Google Local SEO - Harkan Media | Dijital Pazarlama"
        description="Google My Business optimizasyonu, yerel SEO ve itibar yönetimiyle bölgenizde 1. sıraya çıkın. Yakınımdaki aramalarda rakiplerinizin önüne geçin."
        keywords="Google Local SEO, yerel SEO, Google My Business, yerel arama optimizasyonu, itibar yönetimi, İstanbul"
        path="/google-local-seo"
      />
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Google Local SEO</span>
          <h1 className="pl-hero-title">Yerel Aramalarda <span className="pl-accent">1. Sıra</span></h1>
          <p className="pl-hero-sub">{"\"Yakınımdaki\""} aramalarında karşılarına ilk siz çıkın.<br />Google My Business ve yerel SEO ile bölgenizdeki müşterilere ulaşın.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Google Local SEO</span></div>
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">Yerel SEO</div><h2 className="pl-cta-title">Bölgenizdeki Müşterilere Ulaşalım</h2><p className="pl-cta-sub">GMB profilinizi ve yerel SEO durumunuzu ücretsiz analiz edelim.</p></div>
          <Link to="/iletisim" className="pl-cta-btn">Ücretsiz Analiz<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        </div>
      </div>
    </>
  );
}
