import React from 'react';
import { Helmet } from 'react-helmet-async';

function IYSSolutions() {
  return (
    <>
      <Helmet>
        <title>İYS Çözümleri - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="İYS (İleti Yönetim Sistemi) çözümleri ile e-posta pazarlama süreçlerinizi yönetin. KVKK uyumlu e-posta pazarlama, otomatik e-posta gönderimi ve kampanya yönetimi ile müşterilerinize ulaşın." />
        <meta name="keywords" content="İYS, İleti Yönetim Sistemi, e-posta pazarlama, KVKK uyumlu pazarlama, otomatik e-posta, kampanya yönetimi, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/iys-cozumleri" />
        <meta property="og:title" content="İYS Çözümleri - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="İYS çözümleri ile e-posta pazarlama süreçlerinizi yönetin. KVKK uyumlu e-posta pazarlama ve kampanya yönetimi ile müşterilerinize ulaşın." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/iys-cozumleri" />
        <meta property="twitter:title" content="İYS Çözümleri - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="İYS çözümleri ile e-posta pazarlama süreçlerinizi yönetin. KVKK uyumlu e-posta pazarlama ve kampanya yönetimi ile müşterilerinize ulaşın." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/iys-cozumleri" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <h1>İYS Çözümleri</h1>
          <div className="about-content">
            <p>
              İleti Yönetim Sistemi (İYS) çözümlerimiz ile e-posta pazarlama süreçlerinizi KVKK uyumlu bir şekilde yönetin. 
              Otomatik e-posta gönderimi, kampanya yönetimi ve müşteri segmentasyonu özellikleri ile müşterilerinize 
              etkili bir şekilde ulaşın.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default IYSSolutions; 