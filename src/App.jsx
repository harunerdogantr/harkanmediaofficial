import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { withFallback } from './utils/withFallback';
import PageLayoutFallback from './components/fallbacks/PageLayoutFallback';
import HomepageFallback from './components/fallbacks/HomepageFallback';
import FormPageFallback from './components/fallbacks/FormPageFallback';
import LegalPageFallback from './components/fallbacks/LegalPageFallback';

const Homepage = withFallback(() => import('./pages/Homepage'), HomepageFallback);
const Partners = withFallback(() => import('./pages/Partners'), PageLayoutFallback);
const About = withFallback(() => import('./components/About'), PageLayoutFallback);
const FacebookAds = withFallback(() => import('./pages/FacebookAds'), PageLayoutFallback);
const GoogleAds = withFallback(() => import('./pages/GoogleAds'), PageLayoutFallback);
const ABTest = withFallback(() => import('./pages/ABTest'), PageLayoutFallback);
const DataAnalysis = withFallback(() => import('./pages/DataAnalysis'), PageLayoutFallback);
const DomainHosting = withFallback(() => import('./pages/DomainHosting'), PageLayoutFallback);
const Reporting = withFallback(() => import('./pages/Reporting'), PageLayoutFallback);
const SoftwareConsulting = withFallback(() => import('./pages/SoftwareConsulting'), PageLayoutFallback);
const DataModeling = withFallback(() => import('./pages/DataModeling'), PageLayoutFallback);
const SearchOptimization = withFallback(() => import('./pages/SearchOptimization'), PageLayoutFallback);
const InstagramAds = withFallback(() => import('./pages/InstagramAds'), PageLayoutFallback);
const LinkedInAds = withFallback(() => import('./pages/LinkedInAds'), PageLayoutFallback);
const SocialMediaAds = withFallback(() => import('./pages/SocialMediaAds'), PageLayoutFallback);
const GoogleLocalSeo = withFallback(() => import('./pages/GoogleLocalSeo'), PageLayoutFallback);
const IysCozumleri = withFallback(() => import('./pages/IysCozumleri'), PageLayoutFallback);
const DijitalPazarlama = withFallback(() => import('./pages/DijitalPazarlama'), PageLayoutFallback);
const WebAnalitik = withFallback(() => import('./pages/WebAnalitik'), PageLayoutFallback);
const MobilAnalitik = withFallback(() => import('./pages/MobilAnalitik'), PageLayoutFallback);
const Calismalarimiz = withFallback(() => import('./pages/Calismalarimiz'), PageLayoutFallback);
const ContactPage = withFallback(() => import('./pages/ContactPage'), FormPageFallback);
const TeklifPage = withFallback(() => import('./pages/TeklifPage'), FormPageFallback);
const GizlilikPolitikasi = withFallback(() => import('./pages/GizlilikPolitikasi'), LegalPageFallback);
const CerezPolitikasi = withFallback(() => import('./pages/CerezPolitikasi'), LegalPageFallback);
const KullanimKosullari = withFallback(() => import('./pages/KullanimKosullari'), LegalPageFallback);
const NotFound = withFallback(() => import('./pages/NotFound'), LegalPageFallback);

function App() {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main>
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
        </main>
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}

export default App;
