import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>),
    title: 'B2B Hedefleme', desc: 'Sektör, şirket büyüklüğü, unvan ve kıdeme göre karar vericilere doğrudan ulaşın.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>),
    title: 'Lead Gen Formları', desc: 'Platform içi formlarla kullanıcı profilinden otomatik doldurulan yüksek kaliteli lead toplayın.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>),
    title: 'Message Ads', desc: "LinkedIn mesajlaşma üzerinden kişiselleştirilmiş mesajlarla karar vericilerin gelen kutusuna girin." },
];

const SECTIONS = [
  { tag: 'B2B Pazarlama', title: "Karar Vericilere Doğrudan Ulaşın",
    body: "LinkedIn, B2B pazarlamada rakipsiz bir platformdur. Şirket büyüklüğü, sektör, unvan, kıdem ve beceriye göre hedefleme yaparak ürün veya hizmetinizi satın alma yetkisine sahip kişilere ulaştırıyoruz. Sponsored Content, Message Ads ve Dynamic Ads formatlarıyla tam kapsamlı kampanya yönetimi sunuyoruz.",
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Sponsored Content',  tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Message Ads',        tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Lead Gen Formları',  tag: 'Aktif' },
    ], stat: { num: '89%', unit: "B2B karar vericiye ulaşım" }, reverse: false },
  { tag: 'Lead Üretimi', title: 'Yüksek Kaliteli Lead Akışı',
    body: "LinkedIn Lead Gen Formları ile kullanıcı profil bilgileri otomatik dolduğundan form doldurma oranı diğer platformlara kıyasla 3 kat daha yüksektir. CRM entegrasyonu ile gelen leadler anında satış ekibinize iletilir.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Form Doldurma Oranı', tag: '%18 Ort.' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'CRM Entegrasyonu',   tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Lead Kalifikasyonu', tag: 'Otomatik' },
    ], stat: { num: '3x', unit: "yüksek form oranı" }, reverse: true },
  { tag: 'Marka Bilinirliği', title: 'Düşünce Liderliği ile Marka İnşa Edin',
    body: "Yalnızca reklam vermekle kalmıyor, şirketinizi sektörünüzde düşünce lideri olarak konumlandırıyoruz. Organik ve ücretli içerik stratejisini birleştirerek takipçi büyümesi, etkileşim ve marka güveni inşa ediyoruz.",
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Sayfa Büyümesi',        tag: 'Aylık' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'İçerik Stratejisi',     tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Thought Leadership',    tag: 'Sürekli' },
    ], stat: { num: '+55%', unit: "marka bilinirliği" }, reverse: false },
];

export default function LinkedInAds() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <SEO
        title="LinkedIn Reklamları - Harkan Media | Dijital Pazarlama"
        description="LinkedIn reklamlarıyla B2B hedef kitlenize ulaşın. Karar vericilere yönelik Sponsored Content, Lead Gen Formları ve Message Ads ile kaliteli lead toplayın."
        keywords="LinkedIn reklamları, LinkedIn Ads, B2B pazarlama, Lead Gen Formları, Sponsored Content, İstanbul"
        path="/linkedin-reklam-optimizasyonu"
      />
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">LinkedIn Reklamları</span>
          <h1 className="pl-hero-title">B2B&apos;de <span className="pl-accent">Lider</span> Olun</h1>
          <p className="pl-hero-sub">Karar vericilere, yöneticilere ve profesyonellere doğrudan ulaşın.<br />{"LinkedIn'in"} güçlü hedefleme altyapısıyla B2B satışlarınızı artırın.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">LinkedIn Reklamları</span></div>
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">LinkedIn B2B</div><h2 className="pl-cta-title">B2B Hedef Kitlenize Ulaşmaya Hazır mısınız?</h2><p className="pl-cta-sub">LinkedIn kampanya stratejinizi birlikte oluşturalım, kaliteli lead akışını başlatalım.</p></div>
          <Button to="/iletisim">Strateji Görüşmesi</Button>
        </div>
      </div>
    </>
  );
}
