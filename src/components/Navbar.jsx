import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const ChevronIcon = () => (
  <svg width="13" height="13" viewBox="0 0 20 20" fill="none">
    <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SendIcon = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/>
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
    <header className={`nb${scrolled ? ' nb-scrolled' : ''}`}>
      <nav className="nb-inner">

        {/* Logo */}
        <Link to="/" className="nb-logo">
          <span className="nb-logo-title">HARKAN MEDYA</span>
          <span className="nb-logo-sub">YAZILIM & DANIŞMANLIK</span>
        </Link>

        {/* Desktop links */}
        <div className="nb-links">

          {/* Bizi Tanıyın */}
          <div className="nb-item nb-has-drop">
            <span className="nb-label">Bizi Tanıyın <ChevronIcon /></span>
            <div className="nb-drop">
              <Link to="/hakkimizda"    className="nb-drop-link">Hakkımızda</Link>
              <Link to="/partnerlerimiz" className="nb-drop-link">Partnerlerimiz</Link>
            </div>
          </div>

          {/* Neler Yapıyoruz */}
          <div className="nb-item nb-has-drop">
            <span className="nb-label">Neler Yapıyoruz <ChevronIcon /></span>
            <div className="nb-drop" style={{ minWidth: 220 }}>
              <div className="nb-drop-group">
                <div className="nb-drop-head">Optimizasyon</div>
                <Link to="/facebook-reklam-optimizasyonu" className="nb-drop-link">Facebook Reklamları</Link>
                <Link to="/google-ads-optimizasyonu"      className="nb-drop-link">Google Ads</Link>
              </div>
              <div className="nb-drop-group">
                <div className="nb-drop-head">Veri Analizi</div>
                <Link to="/veri-analizi"   className="nb-drop-link">Veri Analizi</Link>
                <Link to="/ab-testi"       className="nb-drop-link">A/B Testi</Link>
                <Link to="/veri-modelleme" className="nb-drop-link">Veri Modelleme</Link>
              </div>
              <div className="nb-drop-group">
                <div className="nb-drop-head">Diğer</div>
                <Link to="/domain-hosting"      className="nb-drop-link">Domain & Hosting</Link>
                <Link to="/yazilim-danismanligi" className="nb-drop-link">Yazılım Danışmanlığı</Link>
                <Link to="/raporlama"            className="nb-drop-link">Raporlama</Link>
              </div>
            </div>
          </div>

          {/* Hizmetlerimiz */}
          <div className="nb-item nb-has-drop">
            <span className="nb-label">Hizmetlerimiz <ChevronIcon /></span>
            <div className="nb-drop nb-drop-wide">
              <div className="nb-drop-col">
                <div className="nb-drop-col-head">Arama & SEO</div>
                <Link to="/arama-optimizasyonu" className="nb-drop-link">Arama Motoru Optimizasyonu</Link>
                <Link to="/google-local-seo"    className="nb-drop-link">Google Local SEO</Link>
                <Link to="/iys-cozumleri"       className="nb-drop-link">İYS Çözümleri</Link>
                <Link to="/dijital-pazarlama"   className="nb-drop-link">Dijital Pazarlama</Link>
              </div>
              <div className="nb-drop-col">
                <div className="nb-drop-col-head">Reklamlar</div>
                <Link to="/sosyal-medya-reklamlari"       className="nb-drop-link">Sosyal Medya Reklamları</Link>
                <Link to="/facebook-reklam-optimizasyonu" className="nb-drop-link">Facebook Reklamları</Link>
                <Link to="/instagram-reklam-optimizasyonu" className="nb-drop-link">Instagram Reklamları</Link>
                <Link to="/linkedin-reklam-optimizasyonu" className="nb-drop-link">LinkedIn Reklamları</Link>
              </div>
              <div className="nb-drop-col">
                <div className="nb-drop-col-head">Analitik</div>
                <Link to="/web-analitik"   className="nb-drop-link">Web Analitiği</Link>
                <Link to="/mobil-analitik" className="nb-drop-link">Mobil Analitiği</Link>
              </div>
            </div>
          </div>

          <Link to="/calismalarimiz" className="nb-plain">Çalışmalarımız</Link>
          <Link to="/iletisim"       className="nb-plain">İletişim</Link>
        </div>

        {/* CTA */}
        <Link to="/teklif" className="nb-cta">
          <SendIcon />
          TEKLİF İSTE
        </Link>

        {/* Hamburger */}
        <button
          className={`nb-burger${menuOpen ? ' nb-burger-open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menüyü aç/kapat"
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>

    {/* Mobile menu — sibling to header to avoid backdrop-filter stacking context */}
    <div className={`nb-mobile${menuOpen ? ' nb-mobile-open' : ''}`}>
        <div className="nb-mob-group">
          <div className="nb-mob-head">Bizi Tanıyın</div>
          <Link to="/hakkimizda"     className="nb-mob-link">Hakkımızda</Link>
          <Link to="/partnerlerimiz" className="nb-mob-link">Partnerlerimiz</Link>
        </div>

        <div className="nb-mob-group">
          <div className="nb-mob-head">Neler Yapıyoruz</div>
          <Link to="/facebook-reklam-optimizasyonu" className="nb-mob-link nb-mob-link-sub">Facebook Reklamları</Link>
          <Link to="/google-ads-optimizasyonu"      className="nb-mob-link nb-mob-link-sub">Google Ads</Link>
          <Link to="/veri-analizi"                  className="nb-mob-link nb-mob-link-sub">Veri Analizi</Link>
          <Link to="/ab-testi"                      className="nb-mob-link nb-mob-link-sub">A/B Testi</Link>
          <Link to="/veri-modelleme"                className="nb-mob-link nb-mob-link-sub">Veri Modelleme</Link>
          <Link to="/domain-hosting"                className="nb-mob-link nb-mob-link-sub">Domain & Hosting</Link>
          <Link to="/yazilim-danismanligi"           className="nb-mob-link nb-mob-link-sub">Yazılım Danışmanlığı</Link>
          <Link to="/raporlama"                     className="nb-mob-link nb-mob-link-sub">Raporlama</Link>
        </div>

        <div className="nb-mob-group">
          <div className="nb-mob-head">Hizmetlerimiz</div>
          <Link to="/arama-optimizasyonu"           className="nb-mob-link nb-mob-link-sub">SEO / Arama Optimizasyonu</Link>
          <Link to="/google-local-seo"              className="nb-mob-link nb-mob-link-sub">Google Local SEO</Link>
          <Link to="/sosyal-medya-reklamlari"       className="nb-mob-link nb-mob-link-sub">Sosyal Medya Reklamları</Link>
          <Link to="/facebook-reklam-optimizasyonu" className="nb-mob-link nb-mob-link-sub">Facebook Reklamları</Link>
          <Link to="/instagram-reklam-optimizasyonu" className="nb-mob-link nb-mob-link-sub">Instagram Reklamları</Link>
          <Link to="/linkedin-reklam-optimizasyonu" className="nb-mob-link nb-mob-link-sub">LinkedIn Reklamları</Link>
          <Link to="/dijital-pazarlama"             className="nb-mob-link nb-mob-link-sub">Dijital Pazarlama</Link>
          <Link to="/iys-cozumleri"                 className="nb-mob-link nb-mob-link-sub">İYS Çözümleri</Link>
          <Link to="/web-analitik"                  className="nb-mob-link nb-mob-link-sub">Web Analitiği</Link>
          <Link to="/mobil-analitik"                className="nb-mob-link nb-mob-link-sub">Mobil Analitiği</Link>
        </div>

        <div className="nb-mob-group">
          <Link to="/calismalarimiz" className="nb-mob-link">Çalışmalarımız</Link>
          <Link to="/iletisim"       className="nb-mob-link">İletişim</Link>
        </div>

        <Link to="/teklif" className="nb-mob-cta">
          <SendIcon /> TEKLİF İSTE
        </Link>
      </div>
    </>
  );
}
