import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { useInView } from '../hooks/useInView';
import '../styles/page-layout.css';

const FEATURES = [
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>),
    title: 'Kullanıcı Takibi', desc: 'Uygulama içi her tıklamayı, ekran geçişini ve etkileşimi gerçek zamanlı izliyoruz.' },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>),
    title: 'Funnel Analizi', desc: "Kullanıcıların nerede takıldığını tespit ederek kayıp noktalarını ortadan kaldırıyoruz." },
  { icon: (<svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>),
    title: 'Retention Analizi', desc: 'Kullanıcı kaybını anlıyor, geri kazanım stratejileriyle uygulamanın ömrünü uzatıyoruz.' },
];

const SECTIONS = [
  { tag: 'Kurulum & Entegrasyon', title: "Uygulamanızı Doğru Araçlarla İzleyin",
    body: "Firebase Analytics, Mixpanel, Amplitude veya Adjust gibi sektörün önde gelen mobil analitik araçlarını uygulamanıza entegre ediyoruz. Custom event'ler, kullanıcı property'leri ve ekran izleme ile sağlıklı bir veri temeli oluşturuyoruz.",
    rows: [
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Firebase Analytics',    tag: 'Entegre' },
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'Custom Event',          tag: 'Yapılandırıldı' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Ekran Takibi',          tag: 'Aktif' },
    ], stat: { num: '+200', unit: 'izlenen event' }, reverse: false },
  { tag: 'Kullanıcı Davranışı', title: "Uygulamanızda Neler Olduğunu Görün",
    body: "Hangi özelliklerin kullanıldığını, hangi ekranların terk edildiğini ve hangi aksiyonların dönüşümle sonuçlandığını analiz ediyoruz. Kullanıcı segment analizi ve kohort analizi ile farklı kullanıcı gruplarının nasıl davrandığını karşılaştırıyoruz.",
    rows: [
      { dot: 'pl-vb-dot-red',    badge: 'pl-badge-red',    label: 'Özellik Kullanım',      tag: 'İzleniyor' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Kohort Analizi',        tag: 'Haftalık' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Segment Karşılaştırma', tag: 'Aktif' },
    ], stat: { num: '+42%', unit: 'DAU artışı' }, reverse: true },
  { tag: 'Retention & Büyüme', title: "Kullanıcıları Elde Tutun, Büyümeye Devam Edin",
    body: "D1, D7, D30 retention oranlarını takip ediyor ve her eşikte kullanıcı kaybının nedenini analiz ediyoruz. Push bildirim optimizasyonu, in-app mesajlaşma ve kişiselleştirilmiş deneyim önerileriyle kullanıcı bağlılığını artırıyoruz.",
    rows: [
      { dot: 'pl-vb-dot-orange', badge: 'pl-badge-orange', label: 'D7 Retention',          tag: '%35+' },
      { dot: 'pl-vb-dot-blue',   badge: 'pl-badge-blue',   label: 'Push Optimizasyonu',    tag: 'Aktif' },
      { dot: 'pl-vb-dot-green',  badge: 'pl-badge-green',  label: 'Churn Tahmini',         tag: 'Model Aktif' },
    ], stat: { num: '-%22', unit: 'churn oranı düşüşü' }, reverse: false },
];

export default function MobilAnalitik() {
  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [cardsRef, cardsVisible] = useInView(0.05, 500);
  const secRefs = [useInView(0.05, 650), useInView(0.05, 200), useInView(0.05, 200)];
  const [ctaRef, ctaVisible] = useInView(0.05, 200);
  return (
    <>
      <SEO
        title="Mobil Analitiği - Harkan Media | Dijital Pazarlama ve Yazılım Danışmanlık"
        description="Firebase, Mixpanel ve Amplitude entegrasyonu ile mobil uygulamanızı veriye dayalı yönetin. Kullanıcı takibi, funnel analizi ve retention stratejileri."
        keywords="mobil analitik, Firebase Analytics, Mixpanel, uygulama analizi, retention analizi, funnel optimizasyonu, İstanbul"
        path="/mobil-analitik"
      />
      <section className="pl-hero">
        <div className="pl-hero-bg" aria-hidden="true"><span className="pl-blob pl-blob-1" /><span className="pl-blob pl-blob-2" /><span className="pl-grid" /></div>
        <div ref={heroRef} className={`pl-hero-content${heroVisible ? ' pl-visible' : ''}`}>
          <span className="pl-eyebrow">Mobil Analitiği</span>
          <h1 className="pl-hero-title">Uygulamanızı <span className="pl-accent">Veriye Dayandırın</span></h1>
          <p className="pl-hero-sub">Kullanıcı davranışı, funnel analizi ve retention metrikleriyle uygulamanızın<br />gerçek performansını görün ve büyümeyi hızlandırın.</p>
          <div className="pl-breadcrumb"><span>Harkan Medya</span><span className="pl-sep">/</span><span className="pl-bc-active">Mobil Analitiği</span></div>
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
          <div className="pl-cta-text"><div className="pl-cta-eyebrow">Mobil Büyüme</div><h2 className="pl-cta-title">Uygulamanızın Analytics Altyapısını Güçlendirelim</h2><p className="pl-cta-sub">Mevcut analitik kurulumunuzu değerlendirelim, eksikleri birlikte tamamlayalım.</p></div>
          <Button to="/iletisim">Ücretsiz Danışın</Button>
        </div>
      </div>
    </>
  );
}
