import React from 'react';

const partners = [
  'Partner 1',
  'Partner 2',
  'Partner 3',
  'Partner 4',
  'Partner 5',
  'Partner 6',
  'Partner 7',
  'Partner 8',
  'Partner 9',
  'Partner 10',
];

export default function IntegrationsBanner() {
  return (
    <section
      className="relative"
      style={{
        background: 'linear-gradient(135deg, #0C3C3E 0%, #134e4a 100%)',
      }}
    >
      <div className="container-main pb-16 md:pb-20">
        <h2 className="text-white font-bold text-2xl text-center">
          Powered by a Suite of 40+ Integrated Partners
        </h2>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center h-16 w-36 rounded-xl bg-white/10 border border-white/15 text-white/70 text-sm font-medium backdrop-blur-sm hover:bg-white/15 transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
