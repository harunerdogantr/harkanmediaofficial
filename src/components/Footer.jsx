import { Link } from 'react-router-dom';
import Button from './ui/Button';
import { CONTACT } from '../config/contact';
import '../styles/footer.css';

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zm2-3a2 2 0 110-4 2 2 0 010 4z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);
const YouTubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const SendIcon = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/>
  </svg>
);

const SERVICES = [
  { label: 'SEO / Arama Optimizasyonu',    to: '/arama-optimizasyonu' },
  { label: 'Google Ads Optimizasyonu',     to: '/google-ads-optimizasyonu' },
  { label: 'Sosyal Medya Reklamları',      to: '/sosyal-medya-reklamlari' },
  { label: 'Dijital Pazarlama',            to: '/dijital-pazarlama' },
  { label: 'Web Analitiği',               to: '/web-analitik' },
  { label: 'Mobil Analitiği',             to: '/mobil-analitik' },
  { label: 'Veri Analizi',                to: '/veri-analizi' },
  { label: 'İYS Çözümleri',              to: '/iys-cozumleri' },
];

const COMPANY = [
  { label: 'Hakkımızda',     to: '/hakkimizda' },
  { label: 'Partnerlerimiz', to: '/partnerlerimiz' },
  { label: 'Çalışmalarımız', to: '/calismalarimiz' },
  { label: 'İletişim',      to: '/iletisim' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft">

      {/* ── TOP STRIP ── */}
      <div className="ft-top">
        <div className="ft-top-inner">
          <div className="ft-top-text">
            <div className="ft-top-tag">Hemen Başlayın</div>
            <h2 className="ft-top-title">Markanızı dijitalde büyütelim.</h2>
          </div>
          <div className="ft-top-actions">
            <Button to="/teklif" icon={<SendIcon />} iconPosition="start">Ücretsiz Teklif Al</Button>
            <Link to="/iletisim" className="ft-top-link">İletişime Geçin →</Link>
          </div>
        </div>
      </div>

      {/* ── MAIN COLUMNS ── */}
      <div className="ft-main">

        {/* Brand */}
        <div className="ft-brand">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="ft-logo-text">
              <span className="ft-logo-title">HARKAN MEDYA</span>
              <span className="ft-logo-sub">YAZILIM & DANIŞMANLIK</span>
            </div>
          </Link>

          <p className="ft-brand-desc">
            Google Partner ve Meta iş ortağı olarak SEO, reklam yönetimi, veri analitiği
            ve yazılım danışmanlığı hizmetleriyle markanızı büyütüyoruz.
          </p>

          <div className="ft-badge">
            <span className="ft-badge-dot" />
            Dijital Reklamcılar Derneği Üyesi
          </div>

          <div className="ft-socials">
            <a href={CONTACT.social.linkedin} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href={CONTACT.social.instagram} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={CONTACT.social.facebook} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={CONTACT.social.x} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="X / Twitter">
              <XIcon />
            </a>
            <a href={CONTACT.social.youtube} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>

        {/* Hizmetler */}
        <div className="ft-col">
          <div className="ft-col-title">Hizmetlerimiz</div>
          <nav className="ft-nav">
            {SERVICES.map(s => (
              <Link key={s.to} to={s.to} className="ft-link">{s.label}</Link>
            ))}
          </nav>
        </div>

        {/* Şirket */}
        <div className="ft-col">
          <div className="ft-col-title">Şirket</div>
          <nav className="ft-nav">
            {COMPANY.map(c => (
              <Link key={c.to} to={c.to} className="ft-link">{c.label}</Link>
            ))}
          </nav>

          <div className="ft-col-title" style={{ marginTop: 28 }}>Çözümler</div>
          <nav className="ft-nav">
            <Link to="/yazilim-danismanligi" className="ft-link">Yazılım Danışmanlığı</Link>
            <Link to="/domain-hosting"       className="ft-link">Domain & Hosting</Link>
            <Link to="/raporlama"            className="ft-link">Raporlama</Link>
            <Link to="/google-local-seo"     className="ft-link">Google Local SEO</Link>
          </nav>
        </div>

        {/* İletişim */}
        <div className="ft-col">
          <div className="ft-col-title">İletişim</div>
          <div className="ft-contact-items">
            <a href={CONTACT.phone.href} className="ft-contact-item">
              <span className="ft-contact-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </span>
              <span>{CONTACT.phone.display}</span>
            </a>
            <a href={CONTACT.email.href} className="ft-contact-item">
              <span className="ft-contact-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </span>
              <span>{CONTACT.email.display}</span>
            </a>
            <div className="ft-contact-item">
              <span className="ft-contact-icon">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </span>
              <span>{CONTACT.address}</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="ft-bottom">
        <div className="ft-bottom-inner">
          <p className="ft-copy">© {year} Harkan Yazılım, Medya ve Danışmanlık. Tüm hakları saklıdır.</p>
          <div className="ft-policy">
            <Link to="/gizlilik-politikasi">Gizlilik Politikası</Link>
            <Link to="/cerez-politikasi">Çerez Politikası</Link>
            <Link to="/kullanim-kosullari">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
