import React, { Suspense, lazy } from 'react';
import LoadingScreen from '../components/LoadingScreen';

// Lazy load components
const Hero = lazy(() => import('../components/Hero'));
const ServicesSection = lazy(() => import('../components/ServicesSection'));
const AboutSection = lazy(() => import('../components/AboutSection'));
const ContactForm = lazy(() => import('../components/ContactForm'));
const ReviewsSection = lazy(() => import('../components/ReviewsSection'));
const ContactBlock = lazy(() => import('../components/ContactBlock'));
const MapSection = lazy(() => import('../components/MapSection'));

const HomePage: React.FC = () => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      {/* Hero Section */}
      <div className="mt-0">
        <Hero />
      </div>

      {/* Services Section */}
      <ServicesSection />

      {/* Contact Form */}
      <ContactForm />

      {/* About Section */}
      <AboutSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Contact Block */}
      <ContactBlock />

      {/* Map Section */}
      <MapSection />
    </Suspense>
  );
};

export default HomePage; 