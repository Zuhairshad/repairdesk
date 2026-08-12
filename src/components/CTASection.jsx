import React from 'react';

export default function CTASection() {
  return (
    <section
      className="py-16"
      style={{
        background: 'linear-gradient(135deg, #016D74 0%, #134e4a 100%)',
      }}
    >
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <h2 className="text-white text-2xl md:text-3xl font-bold font-dm-sans max-w-xl">
            Get Started with the #1 Repair Shop POS
          </h2>

          <a href="#" className="btn-white text-lg px-10 py-4 shrink-0">
            Start FREE Trial
          </a>
        </div>
      </div>
    </section>
  );
}
