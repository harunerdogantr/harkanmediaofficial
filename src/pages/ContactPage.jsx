import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { validateName, validateEmail, validatePhone } from '../utils/validators';
import { CONTACT } from '../config/contact';
import '../styles/contact-page.css';

const services = [
  'SEO & Arama Motoru Optimizasyonu',
  'Google Ads Yönetimi',
  'Facebook & Instagram Reklamları',
  'LinkedIn Reklamları',
  'Sosyal Medya Yönetimi',
  'Web Analitiği',
  'Mobil Analitiği',
  'Veri Analizi & Modelleme',
  'Dijital Pazarlama',
  'Yazılım Danışmanlığı',
  'Domain & Hosting',
  'İYS Çözümleri',
  'Diğer',
];

const INFO_CARDS = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Telefon',
    value: CONTACT.phone.display,
    href: CONTACT.phone.href,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'E-Posta',
    value: CONTACT.email.display,
    href: CONTACT.email.href,
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Adres',
    value: CONTACT.address,
    href: '#',
  },
];

function useInView(threshold = 0.05, fallbackMs = 800) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const timer = setTimeout(() => setInView(true), fallbackMs);
    if (!el) { clearTimeout(timer); return; }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          clearTimeout(timer);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => { observer.disconnect(); clearTimeout(timer); };
  }, [threshold, fallbackMs]);

  return [ref, inView];
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', privacy: false, _hp: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState('');

  const [headerRef, headerInView] = useInView(0.05, 300);
  const [cardsRef, cardsInView] = useInView(0.05, 500);
  const [formRef, formInView] = useInView(0.05, 700);

  function validate() {
    const e = {};
    const nameErr = validateName(form.name);       if (nameErr)  e.name  = nameErr;
    const emailErr = validateEmail(form.email);    if (emailErr) e.email = emailErr;
    const phoneErr = validatePhone(form.phone);    if (phoneErr) e.phone = phoneErr;
    if (!form.service) e.service = 'Lütfen bir hizmet seçin.';
    if (!form.message.trim()) e.message = 'Mesaj zorunludur.';
    else if (form.message.trim().length < 10)  e.message = 'Mesajınız en az 10 karakter olmalı.';
    else if (form.message.trim().length > 2000) e.message = 'Mesajınız en fazla 2000 karakter olabilir.';
    if (!form.privacy) e.privacy = 'Gizlilik politikasını kabul etmelisiniz.';
    return e;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form._hp) return; // honeypot: silently discard bot submissions
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setSendError('');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      setSendError(`Mesaj gönderilemedi. Lütfen tekrar deneyin veya doğrudan ${CONTACT.email.display} adresine yazın.`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>İletişim - Harkan Media | Dijital Pazarlama ve Danışmanlık</title>
        <meta name="description" content="Harkan Media ile iletişime geçin. Dijital pazarlama, SEO, Google Ads ve yazılım danışmanlığı hizmetlerimiz hakkında bilgi almak için bize ulaşın." />
        <meta name="keywords" content="iletişim, Harkan Media, dijital pazarlama, SEO, Google Ads, danışmanlık" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="İletişim | Harkan Media" />
        <meta property="og:description" content="Harkan Media ile iletişime geçin." />
        <link rel="canonical" href="https://harkanmedia.com/iletisim" />
      </Helmet>

      {/* ── PAGE HEADER ── */}
      <section className="cp-hero">
        <div className="cp-hero-bg" aria-hidden="true">
          <span className="cp-blob cp-blob-1" />
          <span className="cp-blob cp-blob-2" />
          <span className="cp-grid" />
        </div>
        <div ref={headerRef} className={`cp-hero-content${headerInView ? ' cp-visible' : ''}`}>
          <span className="cp-eyebrow">İletişim</span>
          <h1 className="cp-hero-title">
            Birlikte <span className="cp-accent">Büyüyelim</span>
          </h1>
          <p className="cp-hero-sub">
            Dijital dünyada markanızı bir adım öteye taşımak için buradayız.<br />
            Sorularınız ve projeleriniz için bize ulaşın.
          </p>
          <div className="cp-breadcrumb">
            <span>Harkan Medya</span>
            <span className="cp-sep">/</span>
            <span className="cp-active">İletişim</span>
          </div>
        </div>
      </section>

      {/* ── INFO CARDS ── */}
      <section className="cp-cards-section">
        <div ref={cardsRef} className={`cp-cards${cardsInView ? ' cp-visible' : ''}`}>
          {INFO_CARDS.map((card, i) => (
            <a
              key={card.label}
              href={card.href}
              className="cp-info-card"
              style={{ '--delay': `${i * 0.12}s` }}
            >
              <span className="cp-card-icon">{card.icon}</span>
              <span className="cp-card-label">{card.label}</span>
              <span className="cp-card-value">{card.value}</span>
              <span className="cp-card-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── FORM + SIDE ── */}
      <section className="cp-form-section">
        <div ref={formRef} className={`cp-form-wrapper${formInView ? ' cp-visible' : ''}`}>

          {/* LEFT — form */}
          <div className="cp-form-left">
            <div className="cp-section-tag">
              <span className="cp-tag-bar" />
              <span>Mesaj Gönderin</span>
            </div>
            <h2 className="cp-form-title">Hadi Konuşalım</h2>
            <p className="cp-form-desc">
              Formu doldurun, ekibimiz en kısa sürede size dönüş yapsın.
            </p>

            {submitted ? (
              <div className="cp-success">
                <div className="cp-success-icon">
                  <svg viewBox="0 0 52 52" fill="none">
                    <circle className="cp-check-circle" cx="26" cy="26" r="25" stroke="#FF3B1D" strokeWidth="2" fill="none" />
                    <path className="cp-check-tick" d="M14 27l8 8 16-16" stroke="#FF3B1D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <h3>Mesajınız Alındı!</h3>
                <p>En kısa sürede sizinle iletişime geçeceğiz. Teşekkür ederiz.</p>
                <button className="cp-btn" onClick={() => { setSubmitted(false); setSendError(''); setForm({ name: '', email: '', phone: '', service: '', message: '', privacy: false, _hp: '' }); }}>
                  Yeni Mesaj Gönder
                </button>
              </div>
            ) : (
              <form className="cp-form" onSubmit={handleSubmit} noValidate>
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
                <div className="cp-form-row">
                  <div className={`cp-field${errors.name ? ' cp-field-error' : ''}`}>
                    <label htmlFor="cp-name">Ad Soyad</label>
                    <input id="cp-name" name="name" type="text" placeholder="Adınız Soyadınız" value={form.name} onChange={handleChange} autoComplete="name" onKeyDown={e => { if (!/[a-zA-ZğüşıöçĞÜŞİÖÇ\s\b]/.test(e.key) && !e.ctrlKey && !e.metaKey) e.preventDefault(); }} />
                    {errors.name && <span className="cp-err">{errors.name}</span>}
                  </div>
                  <div className={`cp-field${errors.email ? ' cp-field-error' : ''}`}>
                    <label htmlFor="cp-email">E-Posta</label>
                    <input id="cp-email" name="email" type="email" placeholder="ornek@sirket.com" value={form.email} onChange={handleChange} autoComplete="email" />
                    {errors.email && <span className="cp-err">{errors.email}</span>}
                  </div>
                </div>

                <div className="cp-form-row">
                  <div className={`cp-field${errors.phone ? ' cp-field-error' : ''}`}>
                    <label htmlFor="cp-phone">Telefon</label>
                    <input id="cp-phone" name="phone" type="tel" placeholder="05XX XXX XX XX" value={form.phone} onChange={handleChange} autoComplete="tel" onKeyDown={e => { if (!/[\d\s\+\-\(\)\b]/.test(e.key) && !e.ctrlKey && !e.metaKey) e.preventDefault(); }} />
                    {errors.phone && <span className="cp-err">{errors.phone}</span>}
                  </div>
                  <div className={`cp-field${errors.service ? ' cp-field-error' : ''}`}>
                    <label htmlFor="cp-service">Hizmet</label>
                    <select id="cp-service" name="service" value={form.service} onChange={handleChange}>
                      <option value="" disabled>Hizmet seçin</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <span className="cp-err">{errors.service}</span>}
                  </div>
                </div>

                <div className={`cp-field cp-field-full${errors.message ? ' cp-field-error' : ''}`}>
                  <label htmlFor="cp-message">Mesajınız</label>
                  <textarea id="cp-message" name="message" rows={5} placeholder="Proje veya ihtiyacınızı kısaca anlatın..." value={form.message} onChange={handleChange} maxLength={2000} />
                  {errors.message && <span className="cp-err">{errors.message}</span>}
                </div>

                <div className={`cp-checkbox-row${errors.privacy ? ' cp-field-error' : ''}`}>
                  <input id="cp-privacy" name="privacy" type="checkbox" checked={form.privacy} onChange={handleChange} />
                  <label htmlFor="cp-privacy">
                    <a href="/gizlilik-politikasi" target="_blank" rel="noopener noreferrer">Gizlilik Politikası</a>'nı okudum ve kabul ediyorum.
                  </label>
                  {errors.privacy && <span className="cp-err cp-err-inline">{errors.privacy}</span>}
                </div>

                {sendError && <p className="cp-err cp-err-send" role="alert">{sendError}</p>}
                <button type="submit" className="cp-btn cp-submit-btn" disabled={loading} aria-label="Formu gönder">
                  {loading ? (
                    <span className="cp-spinner" aria-hidden="true" />
                  ) : (
                    <>
                      Mesaj Gönder
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT — visual */}
          <div className="cp-form-right" aria-hidden="true">
            <div className="cp-visual">
              <div className="cp-visual-card cp-vc-1">
                <span className="cp-vc-dot" />
                <span>Google Ads Kampanyası</span>
                <span className="cp-vc-tag">Aktif</span>
              </div>
              <div className="cp-visual-card cp-vc-2">
                <span className="cp-vc-dot cp-vc-dot-2" />
                <span>SEO Raporu Hazırlandı</span>
                <span className="cp-vc-tag cp-vc-tag-2">Tamamlandı</span>
              </div>
              <div className="cp-visual-card cp-vc-3">
                <span className="cp-vc-dot cp-vc-dot-3" />
                <span>Sosyal Medya Analizi</span>
                <span className="cp-vc-tag cp-vc-tag-3">Devam Ediyor</span>
              </div>

              <div className="cp-stat-ring">
                <svg viewBox="0 0 120 120" className="cp-ring-svg">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#f0f0f0" strokeWidth="10" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#FF3B1D" strokeWidth="10"
                    strokeDasharray="251" strokeDashoffset="50"
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                    className="cp-ring-progress"
                  />
                </svg>
                <div className="cp-ring-inner">
                  <span className="cp-ring-num">%80</span>
                  <span className="cp-ring-label">Müşteri<br/>Memnuniyeti</span>
                </div>
              </div>

              <div className="cp-pulse-badge">
                <span className="cp-pulse-dot" />
                Ekibimiz çevrimiçi
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
