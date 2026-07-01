import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { teklifStepSchemas } from '../schemas/teklifSchema';
import { CONTACT } from '../config/contact';
import { useInView } from '../hooks/useInView';
import '../styles/teklif-page.css';

const SERVICES = [
  'SEO / Arama Optimizasyonu',
  'Google Ads',
  'Facebook Reklamları',
  'Instagram Reklamları',
  'LinkedIn Reklamları',
  'Sosyal Medya Reklamları',
  'Dijital Pazarlama',
  'Veri Analizi',
  'Web Analitiği',
  'Mobil Analitiği',
  'Yazılım Danışmanlığı',
  'İYS Çözümleri',
];

const BUDGETS = [
  '5.000 ₺ altı',
  '5.000 – 15.000 ₺',
  '15.000 – 30.000 ₺',
  '30.000 ₺ üzeri',
];

const TIMELINES = [
  'Hemen Başlayabilirim',
  '1 Ay İçinde',
  '3 Ay İçinde',
  'Henüz Bilmiyorum',
];

const STEPS = [
  { num: 1, label: 'Hizmetler' },
  { num: 2, label: 'Bütçe & Süre' },
  { num: 3, label: 'İletişim' },
];

export default function TeklifPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [sendError, setSendError] = useState('');

  const [form, setForm] = useState({
    services: [],
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    message: '',
    privacy: false,
    _hp: '',
  });

  const [heroRef, heroVisible] = useInView(0.05, 300);
  const [formRef, formVisible] = useInView(0.05, 500);

  function toggleService(s) {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter(x => x !== s)
        : [...prev.services, s],
    }));
    if (errors.services) setErrors(p => { const n = { ...p }; delete n.services; return n; });
  }

  function setRadio(field, val) {
    setForm(prev => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors(p => { const n = { ...p }; delete n[field]; return n; });
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(p => { const n = { ...p }; delete n[name]; return n; });
  }

  function validateStep(s) {
    const result = teklifStepSchemas[s].safeParse(form);
    if (result.success) return {};
    const e = {};
    for (const issue of result.error.issues) e[issue.path[0]] = issue.message;
    return e;
  }

  useEffect(() => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step]);

  function next() {
    const e = validateStep(step);
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setStep(s => s + 1);
  }

  function back() { setErrors({}); setStep(s => s - 1); }

  async function submit(e) {
    e.preventDefault();
    if (form._hp) return; // honeypot: silently discard bot submissions
    const errs = validateStep(3);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setSendError('');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_QUOTE_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          company: form.company || '—',
          website: form.website || '—',
          services: form.services.join(', '),
          budget: form.budget,
          timeline: form.timeline,
          message: form.message || '—',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS gönderim hatası:', err);
      setSendError(`Teklif gönderilemedi. Lütfen tekrar deneyin veya doğrudan ${CONTACT.email.display} adresine yazın.`);
    } finally {
      setLoading(false);
    }
  }

  const ChevronLeft = () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const ChevronRight = () => (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const CheckIcon = () => (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <SEO
        title="Teklif İste - Harkan Media | Dijital Pazarlama ve Danışmanlık"
        description="Harkan Media'dan ücretsiz teklif alın. Hizmet seçimi, bütçe aralığı ve iletişim bilgilerinizi paylaşın, 24 saat içinde dönelim."
        path="/teklif"
      />

      {/* HERO */}
      <section className="tp-hero">
        <div className="tp-hero-bg" aria-hidden="true">
          <span className="tp-blob tp-blob-1" />
          <span className="tp-blob tp-blob-2" />
          <span className="tp-grid" />
        </div>
        <div ref={heroRef} className={`tp-hero-content${heroVisible ? ' tp-visible' : ''}`}>
          <span className="tp-eyebrow">Ücretsiz Teklif</span>
          <h1 className="tp-hero-title">
            Projenizi <span className="tp-accent">Birlikte</span> Büyütelim
          </h1>
          <p className="tp-hero-sub">
            3 adımda teklif talebinizi iletin — ekibimiz 24 saat içinde size özel<br />
            bir strateji ile geri dönsün.
          </p>
          <div className="tp-breadcrumb">
            <span>Harkan Medya</span>
            <span className="tp-sep">/</span>
            <span className="tp-active">Teklif İste</span>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="tp-section">
        <div ref={formRef} className={`tp-inner${formVisible ? ' tp-visible' : ''}`}>

          {/* Steps indicator */}
          {!submitted && (
            <div className="tp-steps">
              {STEPS.map((s, i) => (
                <>
                  <div key={s.num} className={`tp-step${step === s.num ? ' tp-step-active' : step > s.num ? ' tp-step-done' : ''}`}>
                    <div className="tp-step-num">
                      {step > s.num
                        ? <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        : s.num}
                    </div>
                    <span>{s.label}</span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div key={`line-${i}`} className={`tp-step-line${step > s.num ? ' tp-line-done' : ''}`} />
                  )}
                </>
              ))}
            </div>
          )}

          <div className="tp-form-card">

            {/* ── STEP 1: Hizmetler ── */}
            {step === 1 && (
              <>
                <h2 className="tp-step-title">Hangi hizmetleri istiyorsunuz?</h2>
                <p className="tp-step-desc">Birden fazla seçebilirsiniz.</p>
                <div className="tp-services-grid">
                  {SERVICES.map(s => {
                    const checked = form.services.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        className={`tp-cb-label${checked ? ' tp-cb-checked' : ''}`}
                        onClick={() => toggleService(s)}
                        aria-pressed={checked}
                      >
                        <span className="tp-cb-box">
                          <span className="tp-cb-check"><CheckIcon /></span>
                        </span>
                        {s}
                      </button>
                    );
                  })}
                </div>
                {errors.services && <p className="tp-err" style={{ marginTop: 12 }}>{errors.services}</p>}
                <div className="tp-form-actions">
                  <span />
                  <Button onClick={next} icon={<ChevronRight />}>Devam Et</Button>
                </div>
              </>
            )}

            {/* ── STEP 2: Bütçe & Zaman ── */}
            {step === 2 && (
              <>
                <h2 className="tp-step-title">Bütçe ve zaman çizelgesi</h2>
                <p className="tp-step-desc">Aylık bütçenizi ve ne zaman başlamak istediğinizi paylaşın.</p>

                <div className="tp-group">
                  <div className="tp-sub-head">Aylık Bütçe Aralığı</div>
                  <div className="tp-radio-group">
                    {BUDGETS.map(b => {
                      const checked = form.budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          className={`tp-radio-label${checked ? ' tp-radio-checked' : ''}`}
                          onClick={() => setRadio('budget', b)}
                          aria-pressed={checked}
                        >
                          <span className="tp-radio-dot"><span className="tp-radio-inner" /></span>
                          {b}
                        </button>
                      );
                    })}
                  </div>
                  {errors.budget && <p className="tp-err" style={{ marginTop: 8 }}>{errors.budget}</p>}
                </div>

                <div className="tp-group">
                  <div className="tp-sub-head">Ne Zaman Başlamak İstiyorsunuz?</div>
                  <div className="tp-radio-group">
                    {TIMELINES.map(t => {
                      const checked = form.timeline === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          className={`tp-radio-label${checked ? ' tp-radio-checked' : ''}`}
                          onClick={() => setRadio('timeline', t)}
                          aria-pressed={checked}
                        >
                          <span className="tp-radio-dot"><span className="tp-radio-inner" /></span>
                          {t}
                        </button>
                      );
                    })}
                  </div>
                  {errors.timeline && <p className="tp-err" style={{ marginTop: 8 }}>{errors.timeline}</p>}
                </div>

                <div className="tp-form-actions">
                  <Button variant="text" onClick={back} icon={<ChevronLeft />} iconPosition="start">Geri</Button>
                  <Button onClick={next} icon={<ChevronRight />}>Devam Et</Button>
                </div>
              </>
            )}

            {/* ── STEP 3: İletişim ── */}
            {step === 3 && !submitted && (
              <form onSubmit={submit} noValidate>
                {/* honeypot — hidden from real users, bots fill it, we reject silently */}
                <input
                  type="text"
                  name="_hp"
                  value={form._hp}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
                />
                <h2 className="tp-step-title">İletişim bilgileriniz</h2>
                <p className="tp-step-desc">Teklifinizi hazırlayıp size ulaşalım.</p>

                <div className="tp-row">
                  <Input
                    label="Ad Soyad" name="name" type="text" placeholder="Adınız Soyadınız"
                    value={form.name} onChange={handleChange} filter="name"
                    error={errors.name}
                  />
                  <Input
                    label="E-Posta" name="email" type="email" placeholder="ornek@sirket.com"
                    value={form.email} onChange={handleChange}
                    error={errors.email}
                  />
                </div>

                <div className="tp-row">
                  <Input
                    label="Telefon" name="phone" type="tel" placeholder="05XX XXX XX XX"
                    value={form.phone} onChange={handleChange} filter="phone"
                    error={errors.phone}
                  />
                  <Input
                    label={<>Şirket Adı <span className="tp-optional">(isteğe bağlı)</span></>}
                    name="company" type="text" placeholder="Şirket Adı"
                    value={form.company} onChange={handleChange} maxLength={50}
                    error={errors.company}
                  />
                </div>

                <div className="tp-row">
                  <Input
                    label={<>Web Sitesi <span className="tp-optional">(isteğe bağlı)</span></>}
                    name="website" type="url" placeholder="https://sirketiniz.com"
                    value={form.website} onChange={handleChange}
                    error={errors.website}
                  />
                  <Input
                    label={<>Proje Hakkında <span className="tp-optional">(isteğe bağlı)</span></>}
                    name="message" type="text" placeholder="Kısa bir not..."
                    value={form.message} onChange={handleChange} maxLength={300}
                    error={errors.message}
                  />
                </div>

                <div className="tp-privacy-row">
                  <input id="tp-privacy" name="privacy" type="checkbox" checked={form.privacy} onChange={handleChange} />
                  <label htmlFor="tp-privacy">
                    <a href="/gizlilik-politikasi" target="_blank" rel="noopener noreferrer">Gizlilik Politikası</a>'nı okudum ve kabul ediyorum.
                    {errors.privacy && <span className="tp-err" style={{ display: 'block', marginTop: 4 }}>{errors.privacy}</span>}
                  </label>
                </div>

                {sendError && <p className="tp-err tp-err-send" role="alert">{sendError}</p>}
                <div className="tp-form-actions">
                  <Button variant="text" onClick={back} icon={<ChevronLeft />} iconPosition="start">Geri</Button>
                  <Button type="submit" disabled={loading} icon={loading ? null : <ChevronRight />}>
                    {loading ? <span className="tp-spinner" /> : 'Teklif Gönder'}
                  </Button>
                </div>
              </form>
            )}

            {/* ── SUCCESS ── */}
            {submitted && (
              <div className="tp-success">
                <div className="tp-success-icon">
                  <svg viewBox="0 0 52 52" fill="none">
                    <circle className="tp-check-circle" cx="26" cy="26" r="25" stroke="#FF3B1D" strokeWidth="2" fill="none" />
                    <path className="tp-check-tick" d="M14 27l8 8 16-16" stroke="#FF3B1D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <h3>Teklifiniz Alındı!</h3>
                <p>Seçimlerinize özel bir strateji hazırlayıp 24 saat içinde sizinle iletişime geçeceğiz. Teşekkür ederiz.</p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setForm({ services: [], budget: '', timeline: '', name: '', email: '', phone: '', company: '', website: '', message: '', privacy: false });
                  }}
                >
                  Yeni Teklif İste
                </Button>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  );
}
