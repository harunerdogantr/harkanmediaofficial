import React from 'react';
import { Helmet } from 'react-helmet-async';

function MobileAnalytics() {
  return (
    <>
      <Helmet>
        <title>Mobil Analitiği - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Mobil analitiği ile mobil uygulamanızın performansını ölçün. Kullanıcı deneyimi, uygulama kullanımı ve mobil dönüşüm oranları ile mobil stratejilerinizi optimize edin." />
        <meta name="keywords" content="mobil analitiği, uygulama analitiği, mobil performans, kullanıcı deneyimi, mobil dönüşüm, uygulama kullanımı, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/mobil-analitigi" />
        <meta property="og:title" content="Mobil Analitiği - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="Mobil analitiği ile mobil uygulamanızın performansını ölçün. Kullanıcı deneyimi ve mobil dönüşüm oranları ile mobil stratejilerinizi optimize edin." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/mobil-analitigi" />
        <meta property="twitter:title" content="Mobil Analitiği - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="Mobil analitiği ile mobil uygulamanızın performansını ölçün. Kullanıcı deneyimi ve mobil dönüşüm oranları ile mobil stratejilerinizi optimize edin." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/mobil-analitigi" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <h1>Mobil Analitiği</h1>
          <div className="about-content">
            <p>
              Mobil analitiği çözümlerimiz ile mobil uygulamanızın performansını detaylı bir şekilde ölçün. Kullanıcı deneyimi, 
              uygulama kullanımı ve mobil dönüşüm oranları ile mobil stratejilerinizi optimize edin. Veri odaklı kararlar alın ve 
              mobil uygulamanızın performansını artırın.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MobileAnalytics; 