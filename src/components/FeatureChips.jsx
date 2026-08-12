import React from 'react';

const chips = [
  'Repair Ticket Management',
  'Digital Signatures',
  'Print Device Tags',
  'Deposits',
  'Text Messaging',
  'Appointments',
  'Loyalty Program',
  'Store Credits',
  'Review Management',
  'Self Check-In',
  'Buybacks',
  '40+ Integrations',
];

const CheckIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M6.5 10.2L8.7 12.4L13.5 7.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function FeatureChips() {
  return (
    <section className="bg-rd-cream section-padding">
      <div className="container-main">
        <div className="flex flex-wrap justify-center gap-3">
          {chips.map((chip) => (
            <div
              key={chip}
              className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100"
            >
              <CheckIcon className="w-4 h-4 text-rd-teal shrink-0" />
              <span className="text-sm font-medium text-rd-dark whitespace-nowrap">
                {chip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
