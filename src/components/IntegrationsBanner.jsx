import React from 'react';

export default function IntegrationsBanner() {
  return (
    <section className="bg-[#1e2035]">
      <div className="container-main py-12 md:py-16">
        <h2 className="text-white font-poppins font-semibold text-xl md:text-2xl text-center">
          Powered by a Suite of 40+ Integrated Partners
        </h2>

        <div className="mt-10 md:mt-12">
          <img
            src="/images/integrations.png"
            alt="Integration Partners"
            className="w-full max-w-4xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
