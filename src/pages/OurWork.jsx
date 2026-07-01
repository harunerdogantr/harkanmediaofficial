import React from 'react';
import { Helmet } from 'react-helmet-async';

function OurWork() {
  return (
    <>
      <Helmet>
        <title>Çalışmalarımız - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Başarılı dijital pazarlama ve yazılım projelerimizi keşfedin. Müşterilerimizle gerçekleştirdiğimiz başarılı çalışmalar ve referanslarımız ile dijital dönüşüm hikayelerimizi paylaşıyoruz." />
        <meta name="keywords" content="dijital pazarlama projeleri, yazılım projeleri, başarılı çalışmalar, referanslar, dijital dönüşüm, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/calismalarimiz" />
        <meta property="og:title" content="Çalışmalarımız - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="Başarılı dijital pazarlama ve yazılım projelerimizi keşfedin. Müşterilerimizle gerçekleştirdiğimiz başarılı çalışmalar ve referanslarımız ile dijital dönüşüm hikayelerimizi paylaşıyoruz." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/calismalarimiz" />
        <meta property="twitter:title" content="Çalışmalarımız - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="Başarılı dijital pazarlama ve yazılım projelerimizi keşfedin. Müşterilerimizle gerçekleştirdiğimiz başarılı çalışmalar ve referanslarımız ile dijital dönüşüm hikayelerimizi paylaşıyoruz." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/calismalarimiz" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <h1>Çalışmalarımız</h1>
          <div className="about-content">
            <p>
              Başarılı dijital pazarlama ve yazılım projelerimizi keşfedin. Müşterilerimizle gerçekleştirdiğimiz başarılı 
              çalışmalar ve referanslarımız ile dijital dönüşüm hikayelerimizi paylaşıyoruz. Her projemizde müşterilerimizin 
              ihtiyaçlarına özel çözümler üretiyor ve başarıya ulaşmaları için çalışıyoruz.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWork; 