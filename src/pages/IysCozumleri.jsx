import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>),
    title: 'Yasal Uyum', desc: "KVKK ve İYS mevzuatına tam uyumlu süreçlerle yasal risklerinizi ortadan kaldırıyoruz." },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>),
    title: 'Teknik Entegrasyon', desc: 'CRM ve pazarlama platformlarınızı İYS sistemiyle entegre ederek süreçleri otomatize ediyoruz.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
    title: 'Raporlama & İzleme', desc: 'İzin durumlarını gerçek zamanlı izliyor, uyumsuzluk risklerini proaktif olarak bildiriyoruz.' },
];

const SECTIONS = [
  { tag: 'İYS Uyum', title: "İzinli Pazarlamada Güvenli ve Uyumlu Yapı",
    body: "İleti Yönetim Sistemi (İYS) kapsamında SMS, e-posta ve arama kanalları için gerekli izin altyapısını kuruyoruz. Mevcut veri tabanınızdaki izinleri İYS sistemine entegre ediyor, yeni izin toplama süreçlerini düzenliyor ve yasal uyumu sürdürülebilir hale getiriyoruz.",
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'SMS İzin Yönetimi',    tag: 'Aktif' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'E-posta İzni',          tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Arama İzni',           tag: 'Aktif' },
    ], stat: { num: '%100', unit: 'yasal uyum garantisi' }, reverse: false },
  { tag: 'Entegrasyon', title: 'Sistemlerinizle Sorunsuz Çalışır',
    body: "Mevcut CRM, e-posta pazarlama ve SMS platformlarınızı İYS API'si ile entegre ediyoruz. Otomatik izin senkronizasyonu sayesinde manuel müdahale gerektirmeden güncel kalırsınız. Yeni müşteri ediniminde izin toplama akışlarını da sıfırdan tasarlıyoruz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'İYS API Entegrasyonu',  tag: 'Tamamlandı' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'CRM Senkronizasyonu',   tag: 'Otomatik' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'İzin Akışı Tasarımı',   tag: 'Aktif' },
    ], stat: { num: '<48s', unit: 'otomatik senkronizasyon' }, reverse: true },
  { tag: 'İzleme & Raporlama', title: "Uyumluluk Durumunuzu Her An Görün",
    body: "İzin durumu değişikliklerini anlık takip ediyor, ihlal risklerini önceden tespit edip bildiriyoruz. Düzenleyici kurumların denetimlerine hazır olmak için kapsamlı uyum raporları üretiyoruz.",
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Gerçek Zamanlı İzleme',  tag: '7/24' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Uyumluluk Raporu',       tag: 'Aylık' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Denetim Hazırlığı',      tag: 'Aktif' },
    ], stat: { num: '0', unit: 'ihlal riski' }, reverse: false },
];

export default function IysCozumleri() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <SEO
        title="İYS Çözümleri - Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık"
        description="KVKK ve İYS uyumlu izin yönetimi, CRM entegrasyonu ve uyumluluk raporlamasıyla yasal pazarlama altyapınızı güvence altına alın."
        keywords="İYS çözümleri, ileti yönetim sistemi, KVKK uyum, izin yönetimi, SMS izni, e-posta izni, İstanbul"
        path="/iys-cozumleri"
      />
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">İYS Çözümleri</span>
          <h1 className="pl-hero-title">İzinli Pazarlamada <span className="pl-accent">Güvenli</span> Çözümler</h1>
          <p className="pl-hero-sub">KVKK ve İYS mevzuatına tam uyum, sorunsuz sistem entegrasyonu ve<br />gerçek zamanlı uyumluluk izlemeyle yasal risklerinizi sıfıra indirin.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">İYS Çözümleri</span></div>
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">İYS Uyum</div><h2 className="pl-cta-title">İYS Uyum Durumunuzu Birlikte Değerlendirelim</h2><p className="pl-cta-sub">Mevcut izin altyapınızı analiz ediyor, eksikleri hızla gidermek için aksiyon planı hazırlıyoruz.</p></div>
          <Button to="/iletisim">Ücretsiz Analiz</Button>
        </div>
      </div>
    </>
  );
}
