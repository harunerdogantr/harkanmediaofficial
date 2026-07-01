import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
    title: 'GA4 Kurulum & Yapılandırma', desc: "Google Analytics 4'ü doğru yapılandırarak sağlıklı ve eksiksiz veri toplama altyapısı kuruyoruz." },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>),
    title: 'Kullanıcı Davranışı', desc: 'Ziyaretçilerin sitede ne yaptığını anlıyor, friction noktalarını tespit edip kaldırıyoruz.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
    title: 'Dönüşüm Takibi', desc: 'Form doldurma, satın alma, telefon tıklaması dahil tüm dönüşüm noktalarını izliyoruz.' },
];

const SECTIONS = [
  { tag: 'GA4 & Tag Manager', title: "Sağlıklı Veri Toplamakla Başlar Her Şey",
    body: "Yanlış yapılandırılmış analytics, yanlış kararların temelidir. GA4 kurulum ve yapılandırması, Google Tag Manager entegrasyonu, özel event tracking ve e-ticaret izleme kurulumunu eksiksiz gerçekleştiriyoruz. Sonuç: güvenilir, tutarlı ve eyleme dönüştürülebilir veri.",
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'GA4 Kurulum',          tag: 'Tamamlandı' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'GTM Yapılandırma',      tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Event Tracking',        tag: 'Canlı' },
    ], stat: { num: '%100', unit: 'veri doğruluğu' }, reverse: false },
  { tag: 'Kullanıcı Analizi', title: "Ziyaretçileriniz Sitede Ne Yapıyor?",
    body: "Kullanıcı akışı analizi, ısı haritaları, scroll derinliği ve tıklama takibiyle ziyaretçilerin sitenizde nasıl davrandığını anlıyoruz. En çok hangi sayfaların terk edildiğini, hangi butonların görmezden gelindiğini ve neden alışveriş sepeti terkedildiğini tespit ediyoruz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Kullanıcı Akışı',      tag: 'İzleniyor' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Isı Haritası',         tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Oturum Kaydı',         tag: 'Aktif' },
    ], stat: { num: '+28%', unit: 'dönüşüm artışı' }, reverse: true },
  { tag: 'Raporlama', title: "Veriden Anlamlı İçgörüler Üretin",
    body: "Ham analytics verilerini anlayabileceğiniz bir dile çeviriyoruz. Haftalık trafik özetleri, kanal bazlı performans karşılaştırmaları ve kullanıcı segment analizleriyle hangi kanalın ne kadar değer ürettiğini net olarak görürsünüz.",
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Haftalık Rapor',       tag: 'Otomatik' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Kanal Analizi',        tag: 'Aylık' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Segment Raporu',       tag: 'Haftalık' },
    ], stat: { num: '3dk', unit: "haftalık özet okuma süresi" }, reverse: false },
];

export default function WebAnalitik() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <Helmet>
        <title>Web Analitiği - Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="GA4 kurulum, kullanıcı davranış analizi ve dönüşüm takibiyle web sitenizin performansını derinlemesine anlayın. Veri odaklı büyüme için web analitiği hizmetleri." />
        <meta name="keywords" content="web analitiği, Google Analytics 4, GA4, kullanıcı davranışı, dönüşüm takibi, GTM, İstanbul" />
        <meta property="og:title" content="Web Analitiği | Harkan Media" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://harkanmedia.com/web-analitik" />
      </Helmet>
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Web Analitiği</span>
          <h1 className="pl-hero-title">Sitenizi <span className="pl-accent">İçten İçe</span> Anlayın</h1>
          <p className="pl-hero-sub">GA4, GTM ve kullanıcı davranış araçlarıyla sitenizde neler olduğunu tam olarak görün,<br />veriyi aksiyona dönüştürün.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Web Analitiği</span></div>
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">Analytics Kurulum</div><h2 className="pl-cta-title">Analytics Altyapınızı Birlikte Güçlendirelim</h2><p className="pl-cta-sub">Mevcut GA4 kurulumunuzu veya yeni kurulum ihtiyacınızı birlikte değerlendirelim.</p></div>
          <Link to="/iletisim" className="pl-cta-btn">Ücretsiz Analiz<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        </div>
      </div>
    </>
  );
}
