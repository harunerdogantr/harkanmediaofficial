import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
    title: 'Teknik SEO', desc: 'Sayfa hızı, Core Web Vitals, yapılandırılmış veri ve taranabilirlik optimizasyonuyla sağlam SEO temeli.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>),
    title: 'İçerik SEO', desc: 'Anahtar kelime araştırması ve içerik stratejisiyle hedef kitlenizin sorularına yanıt verin.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>),
    title: 'Link Building', desc: 'Otorite kazandıran kaliteli backlink stratejisiyle domain gücünüzü artırıyoruz.' },
];

const SECTIONS = [
  { tag: 'Teknik SEO', title: 'Güçlü Bir SEO Temeli İnşa Edin',
    body: "Arama motorlarının sitenizi kolayca tarayıp indekslemesi için teknik altyapınızı optimize ediyoruz. Sayfa hızı, Core Web Vitals, mobil uyumluluk, yapılandırılmış veri şeması ve URL mimarisi optimizasyonlarıyla sitenizi arama motoru dostu hale getiriyoruz.",
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Core Web Vitals',    tag: 'İyi' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Sayfa Hızı',         tag: '95/100' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Yapılandırılmış Veri', tag: 'Aktif' },
    ], stat: { num: '+45%', unit: 'organik trafik' }, reverse: false },
  { tag: 'İçerik Stratejisi', title: 'Aranılan İçerikleri Üretin',
    body: "Anahtar kelime hacmi, rekabet düzeyi ve kullanıcı niyetini analiz ederek sıralamanızı en hızlı artıracak içerik fırsatlarını belirliyoruz. Pillar-cluster yapısıyla içerik mimarinizi güçlendiriyor, sayfalarınızın otorite kazanmasını sağlıyoruz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Keyword Araştırması',  tag: 'Aylık' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'İçerik Takvimi',      tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'SEO İçerik Üretimi',  tag: 'Haftalık' },
    ], stat: { num: '3x', unit: 'organik görünürlük' }, reverse: true },
  { tag: 'Otorite İnşası', title: 'Güvenilir Kaynaklardan Bağlantı Kazanın',
    body: "Kaliteli ve alakalı sitelerden gelen backlink'ler, domain otoritenizi artırarak rakiplerinizin önüne geçmenizi sağlar. Dijital PR, konuk yazarlık ve broken link building stratejileriyle doğal ve güçlü backlink profili oluşturuyoruz.",
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Backlink Analizi',   tag: 'Haftalık' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Dijital PR',         tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Domain Otoritesi',   tag: 'Artıyor' },
    ], stat: { num: 'DA+28', unit: 'ort. otorite kazanımı' }, reverse: false },
];

export default function SearchOptimization() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <SEO
        title="Arama Motoru Optimizasyonu (SEO) - Harkan Media | Dijital Pazarlama"
        description="Teknik SEO, içerik stratejisi ve link building ile arama motorlarında üst sıralara çıkın. Organik trafiğinizi artıran kanıtlanmış SEO hizmetleri."
        keywords="SEO, arama motoru optimizasyonu, teknik SEO, içerik SEO, link building, Google sıralama, İstanbul"
        path="/arama-optimizasyonu"
      />
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">SEO / Arama Optimizasyonu</span>
          <h1 className="pl-hero-title">Arama Motorlarında <span className="pl-accent">Öne Çıkın</span></h1>
          <p className="pl-hero-sub">Teknik altyapı, içerik stratejisi ve otorite inşasıyla Google aramalarında<br />hedef kitlenizin karşısına ilk sırada çıkıyoruz.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Arama Optimizasyonu</span></div>
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">SEO Analizi</div><h2 className="pl-cta-title">Sitenizi Ücretsiz SEO Analizinden Geçirelim</h2><p className="pl-cta-sub">Nerede durduğunuzu, rakiplerinizin nerede olduğunu ve nereye gidebileceğinizi birlikte inceleyelim.</p></div>
          <Link to="/iletisim" className="pl-cta-btn">Ücretsiz SEO Analizi<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
        </div>
      </div>
    </>
  );
}
