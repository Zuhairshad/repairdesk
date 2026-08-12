import React from 'react';

const awards = [
  'Happiest Users',
  'Budget Friendly',
  'Capterra',
  'Quality Choice',
  'Trustpilot',
  'Trusted Vendor',
];

export default function Awards() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container-main">
        <div className="flex flex-wrap justify-center items-center gap-8">
          {awards.map((label) => (
            <div
              key={label}
              className="w-28 h-20 rounded-lg bg-gray-200 flex items-center justify-center text-center px-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
            >
              <span className="text-xs font-semibold text-gray-600 font-dm-sans leading-tight">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
