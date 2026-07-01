import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Homepage = lazy(() => import('./pages/Homepage'));
const Partners = lazy(() => import('./pages/Partners'));
const About = lazy(() => import('./components/About'));
const FacebookAds = lazy(() => import('./pages/FacebookAds'));
const GoogleAds = lazy(() => import('./pages/GoogleAds'));
const ABTest = lazy(() => import('./pages/ABTest'));
const DataAnalysis = lazy(() => import('./pages/DataAnalysis'));
const DomainHosting = lazy(() => import('./pages/DomainHosting'));
const Reporting = lazy(() => import('./pages/Reporting'));
const SoftwareConsulting = lazy(() => import('./pages/SoftwareConsulting'));
const DataModeling = lazy(() => import('./pages/DataModeling'));
const SearchOptimization = lazy(() => import('./pages/SearchOptimization'));
const InstagramAds = lazy(() => import('./pages/InstagramAds'));
const LinkedInAds = lazy(() => import('./pages/LinkedInAds'));
const SocialMediaAds = lazy(() => import('./pages/SocialMediaAds'));
const GoogleLocalSeo = lazy(() => import('./pages/GoogleLocalSeo'));
const IysCozumleri = lazy(() => import('./pages/IysCozumleri'));
const DijitalPazarlama = lazy(() => import('./pages/DijitalPazarlama'));
const WebAnalitik = lazy(() => import('./pages/WebAnalitik'));
const MobilAnalitik = lazy(() => import('./pages/MobilAnalitik'));
const Calismalarimiz = lazy(() => import('./pages/Calismalarimiz'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const TeklifPage = lazy(() => import('./pages/TeklifPage'));
const GizlilikPolitikasi = lazy(() => import('./pages/GizlilikPolitikasi'));
const CerezPolitikasi = lazy(() => import('./pages/CerezPolitikasi'));
const KullanimKosullari = lazy(() => import('./pages/KullanimKosullari'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
        <Suspense fallback={null}>
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
        </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
