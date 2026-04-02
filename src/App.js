import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ServiceListingPage from './pages/ServiceListingPage';
import ProviderProfilePage from './pages/ProviderProfilePage';
import BookingFlowPage from './pages/BookingFlowPage';

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
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/service/:serviceId" element={<ServiceListingPage />} />
            <Route path="/provider/:providerId" element={<ProviderProfilePage />} />
            <Route path="/booking/:providerId" element={<BookingFlowPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
