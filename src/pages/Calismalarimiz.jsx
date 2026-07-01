import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';
import '../styles/calismalarimiz.css';

const PROJECTS = [
  { cat: 'E-Ticaret Analitik', title: 'Moda Markası Dönüşüm Optimizasyonu', desc: 'GA4 kurulumu ve A/B testleriyle e-ticaret dönüşüm oranını %68 artırdık.', tags: ['GA4', 'A/B Testi', 'CRO'], color: '#FF3B1D' },
  { cat: 'Dijital Pazarlama', title: 'B2B SaaS Lead Üretimi Kampanyası', desc: 'LinkedIn ve Google Ads kombinasyonuyla 3 ayda 420 nitelikli lead elde ettik.', tags: ['LinkedIn Ads', 'Google Ads', 'B2B'], color: '#4F46E5' },
  { cat: 'Mobil Uygulama Analizi', title: 'Fintech Uygulaması Retention Artışı', desc: 'Firebase ve kohort analiziyle D30 retention oranını %22 iyileştirdik.', tags: ['Firebase', 'Retention', 'Mobil'], color: '#0EA5E9' },
  { cat: 'SEO Optimizasyonu', title: 'Hukuk Bürosu Yerel SEO Projesi', desc: 'Google My Business optimizasyonu ve yerel içerikle organik trafiği 3 ayda 3 kat artırdık.', tags: ['Local SEO', 'GMB', 'İçerik'], color: '#10B981' },
  { cat: 'Sosyal Medya Yönetimi', title: 'FMCG Markası Instagram Büyümesi', desc: 'Reels odaklı içerik stratejisi ve reklam yönetimiyle 6 ayda takipçi tabanını 4 kat büyüttük.', tags: ['Instagram', 'Reels', 'İçerik'], color: '#F59E0B' },
  { cat: 'Google Ads', title: 'E-Ticaret Google Alışveriş Kampanyası', desc: 'Akıllı teklif stratejisi ve feed optimizasyonuyla ROAS değerini 2.1x\'den 4.8x\'e taşıdık.', tags: ['Google Ads', 'Shopping', 'ROAS'], color: '#EF4444' },
];

const STATS = [
  { num: '+50', label: 'Tamamlanan Proje' },
  { num: '3.8x', label: 'Ortalama ROAS' },
  { num: '%94', label: 'Müşteri Memnuniyeti' },
  { num: '8+', label: "Sektörde Deneyim" },
];

export default function Calismalarimiz() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [statsRef, statsVisible] = useInView(0.05, 450);
  const [projRef, projVisible] = useInView(0.05, 550);
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <SEO
        title="Çalışmalarımız - Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık"
        description="Harkan Media'nın gerçekleştirdiği dijital pazarlama, SEO, reklam ve analitik projelerini inceleyin. Gerçek sonuçlar, ölçülmüş başarılar."
        keywords="çalışmalarımız, referanslar, portföy, dijital pazarlama projeleri, başarı hikayeleri, İstanbul"
        path="/calismalarimiz"
      />

      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Çalışmalarımız</span>
          <h1 className="pl-hero-title">Başarı <span className="pl-accent">Hikayelerimiz</span></h1>
          <p className="pl-hero-sub">Her proje bir problemi çözmek için başlar. İşte rakamlarla kanıtlanmış<br />dijital dönüşüm hikayelerimizden bir seçki.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Çalışmalarımız</span></div>
        </div>
      </section>

      {/* STATS */}
      <section className="cw-stats-section">
        <div ref={statsRef} className={`cw-stats${statsVisible ? ' pl-visible' : ''}`}>
          {STATS.map((s, i) => (
            <div key={s.label} className="cw-stat-item" style={{ '--delay': `${i * 0.1}s` }}>
              <span className="cw-stat-num">{s.num}</span>
              <span className="cw-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="cw-projects-section">
        <div ref={projRef} className={`cw-grid${projVisible ? ' pl-visible' : ''}`}>
          {PROJECTS.map((p, i) => (
            <div key={p.title} className="cw-card" style={{ '--delay': `${i * 0.08}s` }}>
              <div className="cw-card-bar" style={{ background: p.color }} />
              <div className="cw-card-body">
                <span className="cw-card-cat">{p.cat}</span>
                <h3 className="cw-card-title">{p.title}</h3>
                <p className="cw-card-desc">{p.desc}</p>
                <div className="cw-card-tags">
                  {p.tags.map(t => <span key={t} className="cw-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="pl-cta-wrap">
        <div ref={ctaRef} className={`pl-cta${ctaVisible ? ' pl-visible' : ''}`}>
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">Bir Sonraki Başarı Hikayesi</div><h2 className="pl-cta-title">Projenizi Portföyümüze Ekleyelim</h2><p className="pl-cta-sub">İhtiyaçlarınızı paylaşın, sizin için en uygun stratejiyi birlikte oluşturalım.</p></div>
          <Link to="/iletisim" className="pl-cta-btn">Hemen Başlayın<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        </div>
      </div>
    </>
  );
}
