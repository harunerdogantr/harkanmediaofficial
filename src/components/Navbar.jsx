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

// Single source of truth for the dropdown nav — desktop renders each group
// with its own heading/column, mobile flattens every group's links into one
// flat list under the item's heading. Editing a link only ever means editing
// it here once.
const NAV_ITEMS = [
  {
    label: 'Bizi Tanıyın',
    mobileSub: false,
    groups: [
      {
        links: [
          { label: 'Hakkımızda', to: '/hakkimizda' },
          { label: 'Partnerlerimiz', to: '/partnerlerimiz' },
        ],
      },
    ],
  },
  {
    label: 'Neler Yapıyoruz',
    dropMinWidth: 220,
    groups: [
      {
        head: 'Optimizasyon',
        links: [
          { label: 'Facebook Reklamları', to: '/facebook-reklam-optimizasyonu' },
          { label: 'Google Ads', to: '/google-ads-optimizasyonu' },
        ],
      },
      {
        head: 'Veri Analizi',
        links: [
          { label: 'Veri Analizi', to: '/veri-analizi' },
          { label: 'A/B Testi', to: '/ab-testi' },
          { label: 'Veri Modelleme', to: '/veri-modelleme' },
        ],
      },
      {
        head: 'Diğer',
        links: [
          { label: 'Domain & Hosting', to: '/domain-hosting' },
          { label: 'Yazılım Danışmanlığı', to: '/yazilim-danismanligi' },
          { label: 'Raporlama', to: '/raporlama' },
        ],
      },
    ],
  },
  {
    label: 'Hizmetlerimiz',
    dropWide: true,
    groups: [
      {
        head: 'Arama & SEO',
        links: [
          { label: 'Arama Motoru Optimizasyonu', to: '/arama-optimizasyonu' },
          { label: 'Google Local SEO', to: '/google-local-seo' },
          { label: 'İYS Çözümleri', to: '/iys-cozumleri' },
          { label: 'Dijital Pazarlama', to: '/dijital-pazarlama' },
        ],
      },
      {
        head: 'Reklamlar',
        links: [
          { label: 'Sosyal Medya Reklamları', to: '/sosyal-medya-reklamlari' },
          { label: 'Facebook Reklamları', to: '/facebook-reklam-optimizasyonu' },
          { label: 'Instagram Reklamları', to: '/instagram-reklam-optimizasyonu' },
          { label: 'LinkedIn Reklamları', to: '/linkedin-reklam-optimizasyonu' },
        ],
      },
      {
        head: 'Analitik',
        links: [
          { label: 'Web Analitiği', to: '/web-analitik' },
          { label: 'Mobil Analitiği', to: '/mobil-analitik' },
        ],
      },
    ],
  },
];

const NAV_PLAIN_LINKS = [
  { label: 'Çalışmalarımız', to: '/calismalarimiz' },
  { label: 'İletişim', to: '/iletisim' },
];

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
          {NAV_ITEMS.map(item => (
            <div key={item.label} className="nb-item nb-has-drop">
              <span className="nb-label">{item.label} <ChevronIcon /></span>
              <div
                className={`nb-drop${item.dropWide ? ' nb-drop-wide' : ''}`}
                style={item.dropMinWidth ? { minWidth: item.dropMinWidth } : undefined}
              >
                {item.groups.map((group, gi) => (
                  <div key={gi} className={item.dropWide ? 'nb-drop-col' : 'nb-drop-group'}>
                    {group.head && (
                      <div className={item.dropWide ? 'nb-drop-col-head' : 'nb-drop-head'}>{group.head}</div>
                    )}
                    {group.links.map(l => (
                      <Link key={l.to} to={l.to} className="nb-drop-link">{l.label}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {NAV_PLAIN_LINKS.map(l => (
            <Link key={l.to} to={l.to} className="nb-plain">{l.label}</Link>
          ))}
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
      {NAV_ITEMS.map(item => (
        <div key={item.label} className="nb-mob-group">
          <div className="nb-mob-head">{item.label}</div>
          {item.groups.flatMap(g => g.links).map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nb-mob-link${item.mobileSub === false ? '' : ' nb-mob-link-sub'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      ))}

      <div className="nb-mob-group">
        {NAV_PLAIN_LINKS.map(l => (
          <Link key={l.to} to={l.to} className="nb-mob-link">{l.label}</Link>
        ))}
      </div>

      <Link to="/teklif" className="nb-mob-cta">
        <SendIcon /> TEKLİF İSTE
      </Link>
    </div>
    </>
  );
}
