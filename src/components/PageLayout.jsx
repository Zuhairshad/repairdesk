import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CTASection from './CTASection';

export default function PageLayout({ children, showCTA = true }) {
  return (
    <div className="App">
      <Navbar />
      <main>{children}</main>
      {showCTA && <CTASection />}
      <Footer />
    </div>
  );
}
