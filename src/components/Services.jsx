import React from 'react';
import ServiceIcon from './ServiceIcon';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      title: "SEO",
      description: "SEO Google, Yandex gibi arama motorlarındaki reklamsız (sponsorlu olmayan) içerikler arasında daha görünür hale gelmek ve üst sıralara çıkmak üzere yapılan teknik ve içerik bazlı faaliyetler bütünüdür.",
      iconName: "seo"
    },
    {
      title: "Google Reklamları",
      description: "Google Ads reklamları, ihtiyaçları doğrultusunda bir çözüm arayışında olan online tüketicilere ulaşmanın en etkili ve verimli yoludur. Hizmetimiz hakkında detaylı bilgi almak için tıklayınız.",
      iconName: "googleAds"
    },
    {
      title: "Mobil Analitiği",
      description: "Kullanıcıların uygulama içindeki davranışlarını takip etmek, bu verilerden elde edilen içgörülerle hem pazarlama hem de ürün stratejisini yönlendirme stratejilerinin geliştirilmesi hizmetidir.",
      iconName: "mobileAnalytics"
    },
    {
      title: "Web Analitiği",
      description: "Web sitenize gelen kullanıcı davranışlarını analiz ederek veri odaklı çıktılar elde edebilmek mümkün!",
      iconName: "webAnalytics"
    },
    {
      title: "Dijital Pazarlama",
      description: "Markanızı bugünün en iyi pazarlama platformlarıyla ortaklaşa tanıtmak ve doğru hedef kitlelere iletmek için çalışıyoruz.",
      iconName: "digitalMarketing"
    },
    {
      title: "İYS Çözümleri",
      description: "Harkan Yazılım olarak sms, arama, e-posta gibi müşteri verilerinizi Harkan Soft ile İYS'ye (İleti Yönetim Sistemi) entegre ediyoruz.",
      iconName: "iys"
    }
  ];

  return (
    <section className="services">
      <div className="services-header">
        <div className="services-title-area">
          <h2 className="services-title">Hizmetlerimiz</h2>
        </div>
        <button className="services-all-btn">TÜMÜ</button>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <ServiceIcon name={service.iconName} />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services; 