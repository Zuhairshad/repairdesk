import React from 'react';

export default function PricingCard({ plan, price, period = '/mo', features = [], popular = false, ctaText = 'Start Free Trial' }) {
  return (
    <div className={`rounded-2xl p-8 flex flex-col h-full ${popular ? 'bg-rd-teal text-white shadow-2xl scale-105 relative z-10' : 'bg-white text-[#2e384d] shadow-lg border border-gray-100'}`}>
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rd-lime text-white text-xs font-bold uppercase tracking-wide px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className={`font-poppins font-semibold text-xl mb-2 ${popular ? 'text-white' : 'text-[#2e384d]'}`}>
        {plan}
      </h3>
      <div className="mb-6">
        <span className={`text-4xl font-poppins font-bold ${popular ? 'text-white' : 'text-[#2e384d]'}`}>
          {price}
        </span>
        <span className={`text-sm font-poppins ${popular ? 'text-white/70' : 'text-gray-400'}`}>
          {period}
        </span>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feat, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg className={`w-5 h-5 shrink-0 mt-0.5 ${popular ? 'text-rd-mint' : 'text-rd-teal'}`} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className={`text-sm font-poppins ${popular ? 'text-white/90' : 'text-gray-600'}`}>{feat}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`text-center font-poppins font-medium py-3 rounded-full transition-all duration-300 ${
          popular
            ? 'bg-white text-rd-teal hover:bg-gray-100'
            : 'bg-rd-teal text-white hover:bg-rd-dark-teal'
        }`}
      >
        {ctaText}
      </a>
    </div>
  );
}
