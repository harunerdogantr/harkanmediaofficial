import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import SEO from '../components/SEO';
import { useInView } from '../hooks/useInView';
import '../styles/homepage.css';

const SERVICES = [
  { icon: (<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>), title: 'SEO / Arama Optimizasyonu', desc: 'Teknik SEO, içerik stratejisi ve link building ile Google aramalarında üst sıralara çıkın.', href: '/arama-optimizasyonu' },
  { icon: (<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>), title: 'Google Ads Optimizasyonu', desc: 'Arama, görüntülü ve alışveriş reklamlarıyla hedef kitlenize en etkili şekilde ulaşın.', href: '/google-ads-optimizasyonu' },
  { icon: (<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: 'Sosyal Medya Reklamları', desc: "Facebook, Instagram, LinkedIn ve TikTok'ta hedef kitlenize tam isabet eden kampanyalar.", href: '/sosyal-medya-reklamlari' },
  { icon: (<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>), title: 'Dijital Pazarlama', desc: 'Tüm kanalları koordineli yöneten 360° dijital pazarlama stratejisi ile markanızı büyütün.', href: '/dijital-pazarlama' },
  { icon: (<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>), title: 'Veri Analizi', desc: 'İleri düzey analitik modeller ve tahminsel analiz ile veriden anlamlı içgörüler üretin.', href: '/veri-analizi' },
  { icon: (<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>), title: 'Web Analitiği', desc: 'GA4 kurulum, kullanıcı davranışı ve dönüşüm takibi ile sitenizin gerçek performansını görün.', href: '/web-analitik' },
  { icon: (<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>), title: 'Yazılım Danışmanlığı', desc: 'Özel yazılım çözümleri, sistem entegrasyonu ve teknoloji danışmanlığı ile dijitalleşin.', href: '/yazilim-danismanligi' },
  { icon: (<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>), title: 'Mobil Analitiği', desc: 'Firebase, Mixpanel ve Amplitude ile mobil uygulamanızı veriye dayalı yönetin.', href: '/mobil-analitik' },
  { icon: (<svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>), title: 'İYS Çözümleri', desc: 'KVKK ve İYS uyumlu izin yönetimi ile yasal pazarlama altyapınızı güvence altına alın.', href: '/iys-cozumleri' },
];

const REFS = [
  { name: 'Apple', src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Siemens', src: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg' },
  { name: 'Samsung', src: 'https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo.png' },
  { name: 'Shell', src: 'https://1000logos.net/wp-content/uploads/2017/06/Shell-Logo.png' },
  { name: 'Hepsiburada', src: 'https://www.ideasoft.com.tr/wp-content/uploads/2022/05/Hepsiburada-Logo-Transparan.png' },
  { name: 'Arcelik', src: 'https://istanbulcevahir.com/wp-content/uploads/2023/03/arcelik.png' },
  { name: 'DemirDokum', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9mUtAiUwE29HhBlnpXtVNYr2OlTz_8kJvg&s' },
];

const PROCESS = [
  {
    num: '01', title: 'Keşif & Analiz',
    desc: 'Mevcut durumu, rakipleri ve hedef kitleyi derinlemesine analiz ediyoruz. Verilerle desteklenen bir başlangıç noktası belirliyoruz.',
    icon: (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>),
  },
  {
    num: '02', title: 'Strateji & Planlama',
    desc: 'Hedeflerinize özel, ölçülebilir bir dijital büyüme stratejisi ve aksiyon planı oluşturuyoruz.',
    icon: (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>),
  },
  {
    num: '03', title: 'Uygulama & Optimizasyon',
    desc: 'Planı hayata geçirip sürekli test ederek optimize ediyoruz. Her karar veriye dayanır, hiçbir şey tahmine bırakılmaz.',
    icon: (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>),
  },
  {
    num: '04', title: 'Raporlama & Büyüme',
    desc: 'Şeffaf haftalık raporlar ve aylık strateji toplantılarıyla her adımı birlikte değerlendiriyor, büyümeyi sürdürülebilir kılıyoruz.',
    icon: (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
  },
];

const CASES = [
  { cat: 'E-Ticaret', title: 'Moda Markası Dönüşüm Optimizasyonu', result: '+%68 Dönüşüm Oranı', desc: 'GA4 kurulumu ve A/B testleriyle e-ticaret dönüşüm oranını 3 ayda %68 artırdık.', tags: ['GA4', 'A/B Testi', 'CRO'], color: '#FF3B1D' },
  { cat: 'B2B SaaS', title: 'LinkedIn + Google Ads Lead Kampanyası', result: '420 Nitelikli Lead', desc: 'LinkedIn ve Google Ads kombinasyonuyla 3 ayda 420 nitelikli potansiyel müşteri elde ettik.', tags: ['LinkedIn Ads', 'Google Ads', 'B2B'], color: '#4F46E5' },
  { cat: 'SEO', title: 'Hukuk Bürosu Yerel SEO Projesi', result: '3x Organik Trafik', desc: 'Google My Business optimizasyonu ve yerel içerikle organik trafiği 3 ayda 3 kat artırdık.', tags: ['Local SEO', 'GMB', 'İçerik'], color: '#10B981' },
];

const TESTIMONIALS = [
  {
    quote: "Harkan Medya ile çalışmaya başladıktan sonra Google Ads kampanyalarımızın ROAS değeri 2.1x'den 4.8x'e çıktı. Sadece rakam değil, işin arkasındaki stratejiyi de gerçekten anlıyorlar.",
    name: 'Ahmet Yılmaz', title: 'E-Ticaret Direktörü', company: 'ModaMarka A.Ş.',
    initials: 'AY', color: '#FF3B1D',
  },
  {
    quote: 'SEO altyapımızı sıfırdan inşa ettiler. 6 ay içinde organik trafiğimiz 3 kat arttı. Teknik konularda son derece yetkinler ve her adımı şeffaf bir şekilde raporluyorlar.',
    name: 'Selin Kaya', title: 'Pazarlama Müdürü', company: 'Hukuk Bürosu',
    initials: 'SK', color: '#4F46E5',
  },
  {
    quote: 'Firebase entegrasyonu ve kullanıcı analizi sayesinde uygulamamızdaki kayıp noktalarını tespit ettik. D30 retention oranımız %22 iyileşti. Veri konusunda gerçekten uzmanlar.',
    name: 'Murat Demir', title: 'Kurucu & CEO', company: 'Fintech Startup',
    initials: 'MD', color: '#0EA5E9',
  },
];

const WHY = [
  { icon: (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>), title: 'Google & Meta Partner', desc: 'Her iki platformun resmi iş ortağı olarak özel araç ve içgörülere erişiyoruz.' },
  { icon: (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>), title: 'Veriye Dayalı Kararlar', desc: 'Her karar ölçümlenir. Tahmin değil, veri ile çalışıyoruz.' },
  { icon: (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: '10+ Yıl Deneyim', desc: 'On yılı aşkın sektör deneyimimizle projenizi doğru ellere teslim ediyorsunuz.' },
  { icon: (<svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>), title: 'Şeffaf Raporlama', desc: 'Haftalık güncellemeler ve aylık raporlarla her zaman bilgi sahibisiniz.' },
];

export default function Homepage() {
  const [heroRef, heroVisible]       = useInView(0.05, 200);
  const [dashRef, dashVisible]       = useInView(0.05, 350);
  const [refRef, refVisible]         = useInView(0.05, 300);
  const [svcRef, svcVisible]         = useInView(0.05, 400);
  const [processRef, processVisible] = useInView(0.05, 350);
  const [casesRef, casesVisible]     = useInView(0.05, 400);
  const [testiRef, testiVisible]     = useInView(0.05, 400);
  const [whyRef, whyVisible]         = useInView(0.05, 400);
  const [ctaRef, ctaVisible]         = useInView(0.05, 300);

  return (
    <>
      <SEO
        title="Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlığı"
        description="Harkan Media ile dijital dünyada öne çıkın. SEO, sosyal medya yönetimi, Google Ads, Facebook Ads ve daha fazlası için profesyonel dijital pazarlama hizmetleri."
        keywords="dijital pazarlama, SEO, sosyal medya, Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, web analitik, mobil analitik, Harkan Media"
        path="/"
      />
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="hp-hero">
        <div className="hp-hero-bg" aria-hidden="true">
          <span className="hp-blob hp-blob-1" />
          <span className="hp-blob hp-blob-2" />
          <span className="hp-blob hp-blob-3" />
          <span className="hp-grid" />
        </div>

        <div className="hp-hero-inner">
          <div ref={heroRef} className={`hp-hero-text${heroVisible ? ' hp-visible' : ''}`}>
            <span className="hp-eyebrow">Harkan Yazılım, Medya & Danışmanlık</span>
            <h1 className="hp-hero-title">
              Dijitalde <span className="hp-accent">Büyümenin</span><br />Adresi
            </h1>
            <p className="hp-hero-sub">
              Google Partner ve Meta iş ortağı olarak SEO'dan reklam yönetimine,
              veri analitiğinden yazılım danışmanlığına kadar markanızı 360° büyütüyoruz.
            </p>
            <div className="hp-hero-actions">
              <Link to="/teklif" className="hp-btn-primary">
                Ücretsiz Teklif Al
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <Link to="/hakkimizda" className="hp-btn-ghost">Bizi Tanıyın</Link>
            </div>
          </div>

          <div ref={dashRef} className={`hp-hero-visual${dashVisible ? ' hp-visible' : ''}`}>
            <div className="hp-dashboard">
              <div className="hp-dash-header">
                <span className="hp-dash-dot hp-dot-red" />
                <span className="hp-dash-dot hp-dot-yellow" />
                <span className="hp-dash-dot hp-dot-green" />
                <span className="hp-dash-title">Performans Paneli</span>
              </div>
              <div className="hp-dash-stats">
                <div className="hp-dash-stat">
                  <span className="hp-ds-num">+%47</span>
                  <span className="hp-ds-label">Organik Trafik</span>
                  <span className="hp-ds-trend hp-trend-up">↑</span>
                </div>
                <div className="hp-dash-stat">
                  <span className="hp-ds-num">4.2x</span>
                  <span className="hp-ds-label">ROAS</span>
                  <span className="hp-ds-trend hp-trend-up">↑</span>
                </div>
                <div className="hp-dash-stat">
                  <span className="hp-ds-num">-%31</span>
                  <span className="hp-ds-label">CPA</span>
                  <span className="hp-ds-trend hp-trend-down">↓</span>
                </div>
              </div>
              <div className="hp-dash-rows">
                <div className="hp-dash-row" style={{ '--vd': '0.1s' }}>
                  <span className="hp-dr-dot hp-dr-red" /><span className="hp-dr-label">Google Ads Kampanyası</span><span className="hp-dr-badge hp-badge-red">Aktif</span>
                </div>
                <div className="hp-dash-row" style={{ '--vd': '0.22s' }}>
                  <span className="hp-dr-dot hp-dr-green" /><span className="hp-dr-label">SEO İçerik Takvimi</span><span className="hp-dr-badge hp-badge-green">Yayında</span>
                </div>
                <div className="hp-dash-row" style={{ '--vd': '0.34s' }}>
                  <span className="hp-dr-dot hp-dr-blue" /><span className="hp-dr-label">Meta Reklam Optimizasyonu</span><span className="hp-dr-badge hp-badge-blue">İzleniyor</span>
                </div>
                <div className="hp-dash-row" style={{ '--vd': '0.46s' }}>
                  <span className="hp-dr-dot hp-dr-orange" /><span className="hp-dr-label">Haftalık Rapor</span><span className="hp-dr-badge hp-badge-orange">Hazır</span>
                </div>
              </div>
              <div className="hp-dash-pulse">
                <span className="hp-pulse-dot" />
                Ekibimiz çevrimiçi
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ─── STATS BAR ───────────────────────────────── */}
      <div className="hp-stats-bar">
        <div className="hp-stat">
          <span className="hp-stat-num">
            <CountUp end={50} suffix="+" enableScrollSpy scrollSpyOnce duration={2.2} />
          </span>
          <span className="hp-stat-label">Tamamlanan Proje</span>
        </div>
        <div className="hp-stat-div" />
        <div className="hp-stat">
          <span className="hp-stat-num">
            <CountUp end={10} suffix="+" enableScrollSpy scrollSpyOnce duration={2} />
          </span>
          <span className="hp-stat-label">Yıl Deneyim</span>
        </div>
        <div className="hp-stat-div" />
        <div className="hp-stat">
          <span className="hp-stat-num">
            <CountUp end={94} prefix="%" enableScrollSpy scrollSpyOnce duration={2.5} />
          </span>
          <span className="hp-stat-label">Müşteri Memnuniyeti</span>
        </div>
        <div className="hp-stat-div" />
        <div className="hp-stat">
          <span className="hp-stat-num">
            <CountUp end={2} enableScrollSpy scrollSpyOnce duration={1.5} />
          </span>
          <span className="hp-stat-label">Platform Partner</span>
        </div>
      </div>

      {/* ─── REFERANSLAR MARQUEE ──────────────────────── */}
      <section ref={refRef} className={`hp-refs${refVisible ? ' hp-visible' : ''}`}>
        <p className="hp-refs-label">Güvendikleri markalar arasında</p>
        <div className="hp-marquee-wrap" aria-hidden="true">
          <div className="hp-marquee">
            {[...REFS, ...REFS].map((r, i) => (
              <div key={i} className="hp-ref-item">
                <img src={r.src} alt={r.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HİZMETLER ───────────────────────────────── */}
      <section className="hp-services" id="hizmetler">
        <div className="hp-section-head">
          <span className="hp-section-tag">Hizmetlerimiz</span>
          <h2 className="hp-section-title">İşletmenizi Büyüten <span className="hp-accent">Çözümler</span></h2>
          <p className="hp-section-sub">Dijital dünyanın her alanında uzmanlaşmış ekibimizle markanıza değer katıyoruz.</p>
        </div>
        <div ref={svcRef} className={`hp-svc-grid${svcVisible ? ' hp-visible' : ''}`}>
          {SERVICES.map((s, i) => (
            <Link key={s.title} to={s.href} className="hp-svc-card" style={{ '--delay': `${i * 0.06}s` }}>
              <div className="hp-svc-icon">{s.icon}</div>
              <h3 className="hp-svc-title">{s.title}</h3>
              <p className="hp-svc-desc">{s.desc}</p>
              <span className="hp-svc-arrow">
                Detaylar
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── NASIL ÇALIŞIRIZ ──────────────────────────── */}
      <section className="hp-process">
        <div className="hp-section-head">
          <span className="hp-section-tag">Sürecimiz</span>
          <h2 className="hp-section-title">Nasıl <span className="hp-accent">Çalışırız?</span></h2>
          <p className="hp-section-sub">Her proje 4 adımda hayata geçer. Şeffaf, ölçülebilir ve sürdürülebilir bir büyüme süreci.</p>
        </div>
        <div ref={processRef} className={`hp-process-steps${processVisible ? ' hp-visible' : ''}`}>
          {PROCESS.map((step, i) => (
            <div key={step.num} className="hp-process-step" style={{ '--delay': `${i * 0.12}s` }}>
              <div className="hp-ps-header">
                <div className="hp-ps-num">{step.num}</div>
                <div className="hp-ps-icon">{step.icon}</div>
              </div>
              <h3 className="hp-ps-title">{step.title}</h3>
              <p className="hp-ps-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ÖNE ÇIKAN SONUÇLAR ───────────────────────── */}
      <section className="hp-cases">
        <div className="hp-section-head">
          <span className="hp-section-tag">Başarılarımızdan</span>
          <h2 className="hp-section-title">Öne Çıkan <span className="hp-accent">Sonuçlar</span></h2>
          <p className="hp-section-sub">Her proje bir sorunu çözmek için başlar. İşte rakamlarla kanıtlanmış hikayelerimizden bir seçki.</p>
        </div>
        <div ref={casesRef} className={`hp-cases-grid${casesVisible ? ' hp-visible' : ''}`}>
          {CASES.map((c, i) => (
            <div key={c.title} className="hp-case-card" style={{ '--delay': `${i * 0.1}s` }}>
              <div className="hp-case-bar" style={{ background: c.color }} />
              <div className="hp-case-body">
                <span className="hp-case-cat">{c.cat}</span>
                <div className="hp-case-result" style={{ color: c.color }}>{c.result}</div>
                <h3 className="hp-case-title">{c.title}</h3>
                <p className="hp-case-desc">{c.desc}</p>
                <div className="hp-case-tags">
                  {c.tags.map(t => <span key={t} className="hp-case-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hp-cases-footer">
          <Link to="/calismalarimiz" className="hp-cases-link">
            Tüm Çalışmalarımızı Görün
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </section>

      {/* ─── MÜŞTERİ YORUMLARI ────────────────────────── */}
      <section className="hp-testi">
        <div className="hp-section-head">
          <span className="hp-section-tag">Müşterilerimiz</span>
          <h2 className="hp-section-title">Onlar Ne <span className="hp-accent">Söylüyor?</span></h2>
          <p className="hp-section-sub">Birlikte büyüdüğümüz markalardan samimi görüşler.</p>
        </div>
        <div ref={testiRef} className={`hp-testi-grid${testiVisible ? ' hp-visible' : ''}`}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="hp-testi-card" style={{ '--delay': `${i * 0.1}s` }}>
              <div className="hp-testi-stars">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#FF3B1D"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>
              <p className="hp-testi-quote">"{t.quote}"</p>
              <div className="hp-testi-author">
                <div className="hp-testi-avatar" style={{ background: t.color }}>{t.initials}</div>
                <div>
                  <div className="hp-testi-name">{t.name}</div>
                  <div className="hp-testi-role">{t.title} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── NEDEN BİZ ───────────────────────────────── */}
      <section className="hp-why">
        <div className="hp-why-inner">
          <div ref={whyRef} className={`hp-why-content${whyVisible ? ' hp-visible' : ''}`}>
            <span className="hp-section-tag">Neden Harkan Medya</span>
            <h2 className="hp-section-title" style={{ marginBottom: 24 }}>
              Rakiplerinizin Önünde<br /><span className="hp-accent">Durmanızı Sağlarız</span>
            </h2>
            <div className="hp-why-list">
              {WHY.map((w, i) => (
                <div key={w.title} className="hp-why-item" style={{ '--delay': `${i * 0.1}s` }}>
                  <div className="hp-why-icon">{w.icon}</div>
                  <div>
                    <div className="hp-why-title">{w.title}</div>
                    <div className="hp-why-desc">{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/hakkimizda" className="hp-why-link">
              Daha Fazla Bilgi
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

          <div className="hp-why-visual">
            <div className="hp-wv-card hp-wv-top">
              <div className="hp-wv-row"><span className="hp-dr-dot hp-dr-green" /><span>Google Partner Sertifikası</span><span className="hp-dr-badge hp-badge-green">Aktif</span></div>
              <div className="hp-wv-row"><span className="hp-dr-dot hp-dr-blue" /><span>Meta Business Partner</span><span className="hp-dr-badge hp-badge-blue">Aktif</span></div>
              <div className="hp-wv-row"><span className="hp-dr-dot hp-dr-orange" /><span>ISO Kalite Belgesi</span><span className="hp-dr-badge hp-badge-orange">Onaylı</span></div>
            </div>
            <div className="hp-wv-stats">
              <div className="hp-wv-stat"><span className="hp-wv-num">%94</span><span className="hp-wv-lbl">Müşteri Memnuniyeti</span></div>
              <div className="hp-wv-stat"><span className="hp-wv-num">3.8x</span><span className="hp-wv-lbl">Ortalama ROAS</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────── */}
      <div className="hp-cta-wrap">
        <div ref={ctaRef} className={`hp-cta${ctaVisible ? ' hp-visible' : ''}`}>
          <div className="hp-cta-text">
            <div className="hp-cta-eyebrow">Hemen Başlayalım</div>
            <h2 className="hp-cta-title">Projenizi Birlikte Büyütelim</h2>
            <p className="hp-cta-sub">Ücretsiz ön değerlendirme için bizimle iletişime geçin, 24 saat içinde dönüyoruz.</p>
          </div>
          <Link to="/teklif" className="hp-cta-btn">
            Teklif İste
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </>
  );
}
