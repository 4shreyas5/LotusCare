import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './lib/LanguageContext';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Page Components
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ServiceListingPage from './pages/ServiceListingPage';
import ProviderProfilePage from './pages/ProviderProfilePage';
import BookingFlowPage from './pages/BookingFlowPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import PressPage from './pages/PressPage';
import BlogPage from './pages/BlogPage';
import PartnersPage from './pages/PartnersPage';
import HelpPage from './pages/HelpPage';
import SafetyPage from './pages/SafetyPage';
import GuidelinesPage from './pages/GuidelinesPage';
import ContactPage from './pages/ContactPage';
import AccessibilityPage from './pages/AccessibilityPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

// Layout wrapper with Navbar and Footer
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/service/:serviceId" element={<ServiceListingPage />} />
            <Route path="/provider/:providerId" element={<ProviderProfilePage />} />
            <Route path="/booking/:providerId" element={<BookingFlowPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/guidelines" element={<GuidelinesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}

export default App;
