import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
    title: 'Multi-Platform', desc: 'Facebook, Instagram, TikTok, LinkedIn ve Twitter/X dahil tüm platformlarda tek merkezden yönetim.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
    title: 'Hassas Hedefleme', desc: 'Demografik, psikografik ve davranışsal verilerle ideal müşteri profilinize ulaşıyoruz.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>),
    title: 'ROI Maksimizasyonu', desc: 'Her platformun güçlü yönünü kullanarak bütçenizin her kuruşundan maksimum verim alıyoruz.' },
];

const SECTIONS = [
  { tag: 'Strateji', title: "Doğru Platform, Doğru Mesaj, Doğru Kitle",
    body: "Hedef kitlenizin hangi platformda daha aktif olduğunu, hangi içerik formatlarına tepki verdiğini analiz ediyor ve buna göre platforma özgü stratejiler oluşturuyoruz. Bütçenizi en verimli platformlara dağıtarak toplam ROI'nizi maksimize ediyoruz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Facebook & Instagram',  tag: 'Aktif' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'LinkedIn',              tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'TikTok & YouTube',      tag: 'Aktif' },
    ], stat: { num: '5+', unit: 'platform yönetimi' }, reverse: false },
  { tag: 'Kreatif Üretim', title: 'Her Platform İçin Özel Kreatifler',
    body: "Her sosyal medya platformunun farklı bir formatı, farklı bir kültürü ve farklı bir kullanıcı davranışı vardır. Facebook için çalışan reklam Instagram'da çalışmayabilir. Platforma özgü kreatifleri hızla üretiyor, test ediyor ve kazananları ölçeklendiriyoruz.",
    rows: [
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Video Kreatifler',     tag: 'Üretimde' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Statik Görsel',        tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Carousel & Stories',   tag: 'Aktif' },
    ], stat: { num: '+90%', unit: 'etkileşim artışı' }, reverse: true },
  { tag: 'Ölçüm & Raporlama', title: 'Şeffaf Raporlama ile Her Kuruşu Takip Edin',
    body: "Her platformun verisini tek bir raporlama panelinde birleştiriyor, hangi kanalın ne kadar dönüşüm sağladığını net olarak gösteriyoruz. Haftalık performans güncellemeleri ve aylık strateji raporlarıyla her zaman bilgi sahibi olursunuz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Birleşik Dashboard',   tag: 'Canlı' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Haftalık Güncelleme',  tag: 'Otomatik' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'ROI Raporu',           tag: 'Aylık' },
    ], stat: { num: '360°', unit: 'şeffaf raporlama' }, reverse: false },
];

export default function SocialMediaAds() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <SEO
        title="Sosyal Medya Reklamları - Harkan Media | Dijital Pazarlama"
        description="Facebook, Instagram, LinkedIn ve TikTok dahil tüm sosyal medya platformlarında profesyonel reklam yönetimi. Multi-platform strateji ile erişiminizi genişletin."
        keywords="sosyal medya reklamları, Facebook Ads, Instagram Ads, TikTok reklamları, multi-platform reklam, İstanbul"
        path="/sosyal-medya-reklamlari"
      />
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Sosyal Medya Reklamları</span>
          <h1 className="pl-hero-title">Her Platformda <span className="pl-accent">Güçlü</span> Varlık</h1>
          <p className="pl-hero-sub">Facebook, Instagram, LinkedIn, TikTok ve daha fazlasında tek bir stratejiyle<br />hedef kitlenize en etkili şekilde ulaşıyoruz.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Sosyal Medya Reklamları</span></div>
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">Multi-Platform</div><h2 className="pl-cta-title">Sosyal Medya Reklamlarınızı Birlikte Büyütelim</h2><p className="pl-cta-sub">Hangi platformda ne kadar harcamanız gerektiğini birlikte belirleyelim.</p></div>
          <Link to="/iletisim" className="pl-cta-btn">Ücretsiz Danışın<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        </div>
      </div>
    </>
  );
}
