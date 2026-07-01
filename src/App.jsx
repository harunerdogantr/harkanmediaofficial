import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Partners from './pages/Partners';
import Footer from './components/Footer';
import About from './components/About';
import FacebookAds from './pages/FacebookAds';
import GoogleAds from './pages/GoogleAds';
import ABTest from './pages/ABTest';
import DataAnalysis from './pages/DataAnalysis';
import DomainHosting from './pages/DomainHosting';
import Reporting from './pages/Reporting';
import SoftwareConsulting from './pages/SoftwareConsulting';
import DataModeling from './pages/DataModeling';
import SearchOptimization from './pages/SearchOptimization';
import InstagramAds from './pages/InstagramAds';
import LinkedInAds from './pages/LinkedInAds';
import SocialMediaAds from './pages/SocialMediaAds';
import GoogleLocalSeo from './pages/GoogleLocalSeo';
import IysCozumleri from './pages/IysCozumleri';
import DijitalPazarlama from './pages/DijitalPazarlama';
import WebAnalitik from './pages/WebAnalitik';
import MobilAnalitik from './pages/MobilAnalitik';
import Calismalarimiz from './pages/Calismalarimiz';
import ContactPage from './pages/ContactPage';
import TeklifPage from './pages/TeklifPage';
import GizlilikPolitikasi from './pages/GizlilikPolitikasi';
import CerezPolitikasi from './pages/CerezPolitikasi';
import KullanimKosullari from './pages/KullanimKosullari';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <div className="app">
          <Helmet>
            <title>Harkan Media - Dijital Pazarlama ve Danışmanlık</title>
            <meta name="description" content="Harkan Media ile dijital dünyada öne çıkın. SEO, sosyal medya yönetimi, Google Ads, Facebook Ads ve daha fazlası için profesyonel dijital pazarlama hizmetleri." />
            <meta name="keywords" content="dijital pazarlama, SEO, sosyal medya, Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, web analitik, mobil analitik, Harkan Media" />
            
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://harkanmedia.vercel.app/" />
            <meta property="og:title" content="Harkan Media - Dijital Pazarlama ve Danışmanlık" />
            <meta property="og:description" content="Harkan Media ile dijital dünyada öne çıkın. Profesyonel dijital pazarlama ve danışmanlık hizmetleri." />
            
            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://harkanmedia.vercel.app/" />
            <meta property="twitter:title" content="Harkan Media - Dijital Pazarlama ve Danışmanlık" />
            <meta property="twitter:description" content="Harkan Media ile dijital dünyada öne çıkın. Profesyonel dijital pazarlama ve danışmanlık hizmetleri." />
            
            {/* Canonical URL */}
            <link rel="canonical" href="https://harkanmedia.vercel.app/" />
          </Helmet>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hakkimizda" element={<About />} />
          <Route path="/partnerlerimiz" element={<Partners />} />
          <Route path="/facebook-reklam-optimizasyonu" element={<FacebookAds />} />
          <Route path="/google-ads-optimizasyonu" element={<GoogleAds />} />
          <Route path="/ab-testi" element={<ABTest />} />
          <Route path="/veri-analizi" element={<DataAnalysis />} />
          <Route path="/domain-hosting" element={<DomainHosting />} />
          <Route path="/raporlama" element={<Reporting />} />
          <Route path="/yazilim-danismanligi" element={<SoftwareConsulting />} />
          <Route path="/veri-modelleme" element={<DataModeling />} />
          <Route path="/arama-optimizasyonu" element={<SearchOptimization />} />
          <Route path="/instagram-reklam-optimizasyonu" element={<InstagramAds />} />
          <Route path="/linkedin-reklam-optimizasyonu" element={<LinkedInAds />} />
          <Route path="/sosyal-medya-reklamlari" element={<SocialMediaAds />} />
          <Route path="/google-local-seo" element={<GoogleLocalSeo />} />
          <Route path="/iys-cozumleri" element={<IysCozumleri />} />
          <Route path="/dijital-pazarlama" element={<DijitalPazarlama />} />
          <Route path="/web-analitik" element={<WebAnalitik />} />
          <Route path="/mobil-analitik" element={<MobilAnalitik />} />
          <Route path="/calismalarimiz" element={<Calismalarimiz />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/teklif" element={<TeklifPage />} />
          <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
          <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
          <Route path="/kullanim-kosullari" element={<KullanimKosullari />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;