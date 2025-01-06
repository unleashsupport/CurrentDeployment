import React from 'react';
import FloatingMenu from './components/navigation/FloatingMenu';
import Hero from './components/Hero';
import DetailedServices from './components/services/DetailedServices';
import IndustrySolutions from './components/industries/IndustrySolutions';
import IntegrationsScroll from './components/integrations/IntegrationsScroll';
import PricingSection from './components/pricing/PricingSection';
import FAQSection from './components/faq/FAQSection';
import CompanyInfo from './components/company/CompanyInfo';
import LogoSection from './components/LogoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      <FloatingMenu />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <DetailedServices />
        </section>
        <section id="industries">
          <IndustrySolutions />
        </section>
        <IntegrationsScroll />
        <section id="pricing">
          <PricingSection />
        </section>
        <FAQSection />
        <section id="contact">
          <CompanyInfo />
        </section>
        <LogoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;