import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntegrationsBanner from './components/IntegrationsBanner';
import FeatureChips from './components/FeatureChips';
import Testimonial from './components/Testimonial';
import FeatureCarousel from './components/FeatureCarousel';
import UnifiedComm from './components/UnifiedComm';
import Awards from './components/Awards';
import Industries from './components/Industries';
import SuccessStories from './components/SuccessStories';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <IntegrationsBanner />
      <FeatureChips />
      <Testimonial
        quote="Our experience with RepairDesk has been a really exciting advancement for our business. While there was a transition period moving to the new system; the positive and cooperative attitude of the company is one that we really admire. Usman and his team go out of their way to assist their customers and are open to feedback and integrating new ideas into their software, as well as providing an extensive knowledge base and tailored support for your business model. Cannot recommend these guys enough for all the hard work and grit they pour into their software."
        name="Simon Nash"
        title="Owner"
        company="The iPhone Guy"
      />
      <FeatureCarousel />
      <UnifiedComm />
      <Awards />
      <Industries />
      <SuccessStories />
      <Testimonial
        quote="We had good experience working with the team at RepairDesk in switching everything over from Quickbooks. This software is what I always dreamed of creating for my business. Thank you for all your help and continued improvements with RepairDesk!"
        name="Lyle Schrock"
        title="Owner"
        company="The Lab"
        reversed
      />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
