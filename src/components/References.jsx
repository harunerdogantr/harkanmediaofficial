import React from 'react';

function References() {
  const references = [
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    {
      name: "Samsung",
      logo: "https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo.png"
    },
    {
      name: "Shell",
      logo: "https://1000logos.net/wp-content/uploads/2017/06/Shell-Logo.png"
    },
    {
      name: "DemirDöküm",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9mUtAiUwE29HhBlnpXtVNYr2OlTz_8kJvg&s",
      specialClass: "demirdokum-logo"
    },
    {
      name: "Siemens",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg"
    },
    {
      name: "Hepsiburada",
      logo: "https://www.ideasoft.com.tr/wp-content/uploads/2022/05/Hepsiburada-Logo-Transparan.png",
      specialClass: "hepsiburada-logo"
    },
    {
      name: "Arçelik",
      logo: "https://istanbulcevahir.com/wp-content/uploads/2023/03/arcelik.png"
    }
  ];

  return (
    <section className="references">
      <div className="references-header">
        <div className="references-title-area">
          <div className="references-title-bar" />
          <h2 className="references-title">Kendi sektöründe öncü markalarla çalışıyoruz...</h2>
        </div>
        <button className="references-all-btn">TÜM REFERANSLAR</button>
      </div>
      <div className="references-grid">
        {references.map((ref, index) => (
          <div key={index} className="reference-card">
            <div className={`reference-logo${ref.specialClass ? ' ' + ref.specialClass : ''}`}>
              <img src={ref.logo} alt={ref.name} />
            </div>
            <h3 className="reference-name">{ref.name}</h3>
            <div className="reference-underline"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default References; 