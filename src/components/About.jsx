import SEO from './SEO';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '10+ Yıl Deneyim',
    desc: 'Dijital pazarlama ve yazılım danışmanlığında on yılı aşkın deneyimimizle markanıza değer katıyoruz.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Uzman Ekip',
    desc: 'Her biri kendi alanında uzman, genç ve dinamik bir ekip ile projelerinizi hayata geçiriyoruz.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: '360° Yaklaşım',
    desc: 'Pazarlama süreçlerinize ölçümleme mekanizması kurarak veriye dayalı 360 derece bir strateji uyguluyoruz.',
  },
];

export default function About() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const [sec1Ref, sec1Visible] = useInView(0.05, 650);
  const [ctaRef, ctaVisible] = useInView(0.05, 800);

  return (
    <>
      <SEO
        title="Hakkımızda - Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık"
        description="Harkan Media olarak 10 yılı aşkın deneyimimizle dijital pazarlama, yazılım danışmanlığı ve veri analitiği alanlarında işletmenizi bir adım öne taşıyoruz."
        keywords="Harkan Media, hakkımızda, dijital pazarlama ajansı, yazılım danışmanlık, İstanbul"
        path="/hakkimizda"
      />

      {/* HERO */}
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true">
          <span className="pl-blob pl-blob-1" />
          <span className="pl-blob pl-blob-2" />
          <span className="pl-grid" />
        </div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Hakkımızda</span>
          <h1 className="pl-hero-title">
            Dijitalde Güvenilir <span className="pl-accent">Partneriniz</span>
          </h1>
          <p className="pl-hero-sub">
            Harkan Yazılım, Medya ve Danışmanlık olarak işletmelerin dijital dünyada<br />
            büyümesine on yılı aşkın deneyimimizle eşlik ediyoruz.
          </p>
          <div className="pl-breadcrumb">
            <span>Harkan Medya</span>
            <span className="pl-sep">/</span>
            <span className="pl-bc-active">Hakkımızda</span>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="pl-cards-section">
        <div ref={cardsRef} className={`pl-cards pl-cards-3${cardsVisible ? ' pl-visible' : ''}`}>
          {FEATURES.map((f, i) => (
            <div key={f.title} className="pl-feat-card" style={{ '--delay': `${i * 0.1}s` }}>
              <div className="pl-feat-icon">{f.icon}</div>
              <div className="pl-feat-title">{f.title}</div>
              <p className="pl-feat-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <div className="pl-content-wrap">
        <div className="pl-content-inner">
          <div ref={sec1Ref} className={`pl-section${sec1Visible ? ' pl-visible' : ''}`}>
            <div className="pl-about-body">
              <div className="pl-section-tag"><span className="pl-tag-bar" />Biz Kimiz</div>
              <h2 className="pl-section-title">Harkan Medya — Online Fırsatlar Yaratır</h2>
              <p>Harkan Yazılım, Medya ve Danışmanlık; kurumların e-iş modellerine geçişlerini internet ortamında kolay, hızlı ve güvenilir yöntemlerle iş ve ticaret yapmalarını sağlayacak çözümler üretmek amacıyla kurulmuştur.</p>
              <p>Pazarlama süreçlerine bir ölçümleme mekanizması kurar. Verilere kulak verir ve pazarlama süreçlerine 360 derece yaklaşır.</p>
              <p>Bünyemizde Google Analytics, Adwords, Veri Analizi, Pazarlama Otomasyonu, Sosyal Medya Reklamları, Facebook Reklamları, Programatik, Arama Motoru Optimizasyonu (SEO), Yazılım ve Hosting hizmetleri verilmektedir.</p>
              <p>Genç, dinamik ve konusunda uzman ekibimiz, her türlü yeni teknolojiye yakın durarak estetik ve işlevselliği bir arada tutar. Her biri kendi alanında uzman elemanlarıyla tam bir takım çalışması ile projeleri zamanında ve tam istediğiniz şekilde teslim eder.</p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                alt="Harkan Medya Ekibi"
                className="pl-about-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="pl-cta-wrap">
        <div ref={ctaRef} className={`pl-cta${ctaVisible ? ' pl-visible' : ''}`}>
          <div className="pl-cta-text">
            <div className="pl-cta-eyebrow">Birlikte Çalışalım</div>
            <h2 className="pl-cta-title">Projenizi Hayata Geçirmeye Hazır mısınız?</h2>
            <p className="pl-cta-sub">Ekibimizle tanışın, ihtiyaçlarınızı konuşalım ve size özel bir strateji oluşturalım.</p>
          </div>
          <Link to="/iletisim" className="pl-cta-btn">
            Hemen İletişime Geçin
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
