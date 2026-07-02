import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 | Sayfa Bulunamadı | Harkan Media"
        description="Aradığınız sayfa bulunamadı."
        path="/404"
        noindex
      />
      <div style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 2rem',
        gap: '1.5rem',
      }}>
        <h1 style={{ fontSize: '5rem', fontWeight: 800, color: '#FF3B1D', margin: 0 }}>404</h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#23272F', margin: 0 }}>Sayfa Bulunamadı</h2>
        <p style={{ color: '#666', maxWidth: '400px', lineHeight: 1.6 }}>
          Aradığınız sayfa taşınmış veya silinmiş olabilir. Ana sayfaya dönerek devam edebilirsiniz.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            padding: '0.85rem 2rem',
            background: '#FF3B1D',
            color: '#fff',
            borderRadius: '8px',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </>
  );
}
