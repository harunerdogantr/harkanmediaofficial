import React from 'react';
import { Helmet } from 'react-helmet-async';

function DigitalMarketing() {
  return (
    <>
      <Helmet>
        <title>Dijital Pazarlama - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Dijital pazarlama stratejileri ile işletmenizi büyütün. SEO, sosyal medya pazarlama, içerik pazarlama ve dijital reklam çözümleri ile online varlığınızı güçlendirin." />
        <meta name="keywords" content="dijital pazarlama, SEO, sosyal medya pazarlama, içerik pazarlama, dijital reklam, online pazarlama, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/dijital-pazarlama" />
        <meta property="og:title" content="Dijital Pazarlama - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="Dijital pazarlama stratejileri ile işletmenizi büyütün. SEO, sosyal medya pazarlama ve dijital reklam çözümleri ile online varlığınızı güçlendirin." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/dijital-pazarlama" />
        <meta property="twitter:title" content="Dijital Pazarlama - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="Dijital pazarlama stratejileri ile işletmenizi büyütün. SEO, sosyal medya pazarlama ve dijital reklam çözümleri ile online varlığınızı güçlendirin." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/dijital-pazarlama" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <h1>Dijital Pazarlama</h1>
          <div className="about-content">
            <p>
              Dijital pazarlama stratejilerimiz ile işletmenizi büyütün. SEO, sosyal medya pazarlama, içerik pazarlama 
              ve dijital reklam çözümlerimiz ile online varlığınızı güçlendirin. Hedef kitlenize ulaşın ve işletmenizi 
              dijital dünyada öne çıkarın.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default DigitalMarketing; 