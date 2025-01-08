import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import { useImagePreloader } from './hooks/useImagePreloader';
import Layout from './components/Layout';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const DentalServicesPage = lazy(() => import('./pages/DentalServicesPage'));
const CosmetologyServicesPage = lazy(() => import('./pages/CosmetologyServicesPage'));
const DiagnosticServicesPage = lazy(() => import('./pages/DiagnosticServicesPage'));
const InsuranceServicesPage = lazy(() => import('./pages/InsuranceServicesPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const DoctorsPage = lazy(() => import('./pages/DoctorsPage'));

function App() {
  const imagesLoaded = useImagePreloader();

  if (!imagesLoaded) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/dental" element={<DentalServicesPage />} />
            <Route path="/services/cosmetology" element={<CosmetologyServicesPage />} />
            <Route path="/services/diagnostic" element={<DiagnosticServicesPage />} />
            <Route path="/services/insurance" element={<InsuranceServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
