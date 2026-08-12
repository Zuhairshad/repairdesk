import React from 'react';

const badges = [
  { src: '/images/badge-happiest.png', alt: 'Happiest Users' },
  { src: '/images/badge-budget.png', alt: 'Budget Friendly' },
  { src: '/images/badge-capterra.png', alt: 'Capterra' },
  { src: '/images/badge-quality.png', alt: 'Quality Choice' },
  { src: '/images/badge-trustpilot.png', alt: 'Trustpilot' },
  { src: '/images/badge-trusted.png', alt: 'Trusted Vendor' },
];

export default function Awards() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container-main">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {badges.map((badge) => (
            <img
              key={badge.alt}
              src={badge.src}
              alt={badge.alt}
              className="h-16 md:h-20 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
