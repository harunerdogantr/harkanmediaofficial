import { useState, useEffect } from 'react';

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Dijital Dünyada\nYeni Nesil\nÇözümler",
      description: "Yazılım ve danışmanlık hizmetlerimizle işinizi bir üst seviyeye taşıyoruz. Modern teknolojiler ve yenilikçi yaklaşımlarla geleceğe hazırlanın.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    },
    {
      title: "Profesyonel\nYazılım\nHizmetleri",
      description: "Uzman ekibimizle özel yazılım çözümleri sunuyoruz. İhtiyaçlarınıza özel, güvenilir ve ölçeklenebilir yazılımlar geliştiriyoruz.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${currentSlide === index ? 'active' : ''}`}
          >
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-description">{slide.description}</p>
              <div className="hero-buttons">
                <button className="primary-btn">
                  Keşfedin
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img src={slide.image} alt={`Hero görsel ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero; 