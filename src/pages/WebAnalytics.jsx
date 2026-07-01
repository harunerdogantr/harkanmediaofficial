import React from 'react';
import { Helmet } from 'react-helmet-async';

function WebAnalytics() {
  return (
    <>
      <Helmet>
        <title>Web Analitiği - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık</title>
        <meta name="description" content="Web analitiği ile web sitenizin performansını ölçün. Kullanıcı davranışları, dönüşüm oranları ve trafik analizi ile dijital stratejilerinizi optimize edin." />
        <meta name="keywords" content="web analitiği, Google Analytics, kullanıcı davranışları, dönüşüm oranları, trafik analizi, web performansı, İstanbul" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://harkanmedia.vercel.app/web-analitigi" />
        <meta property="og:title" content="Web Analitiği - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="og:description" content="Web analitiği ile web sitenizin performansını ölçün. Kullanıcı davranışları ve dönüşüm oranları ile dijital stratejilerinizi optimize edin." />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://harkanmedia.vercel.app/web-analitigi" />
        <meta property="twitter:title" content="Web Analitiği - Harkan Media - Dijital Pazarlama ve Yazılım Danışmanlık" />
        <meta property="twitter:description" content="Web analitiği ile web sitenizin performansını ölçün. Kullanıcı davranışları ve dönüşüm oranları ile dijital stratejilerinizi optimize edin." />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://harkanmedia.vercel.app/web-analitigi" />
      </Helmet>
      <section className="about-section">
        <div className="about-container">
          <h1>Web Analitiği</h1>
          <div className="about-content">
            <p>
              Web analitiği çözümlerimiz ile web sitenizin performansını detaylı bir şekilde ölçün. Kullanıcı davranışları, 
              dönüşüm oranları ve trafik analizi ile dijital stratejilerinizi optimize edin. Veri odaklı kararlar alın ve 
              web sitenizin performansını artırın.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebAnalytics; 