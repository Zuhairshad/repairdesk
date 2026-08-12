import React from 'react';

const CheckIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.12" />
    <path
      d="M8 12.5 10.5 15 16 9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CommCard = ({ logoText, description, items }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col h-full">
    <div className="mb-4">
      <span className="inline-flex items-center font-poppins font-bold text-xl md:text-2xl text-rd-teal">
        {logoText}
      </span>
    </div>

    <p className="text-gray-600 mb-6">{description}</p>

    <ul className="flex flex-col gap-3 mb-8">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-700">
          <CheckIcon className="w-5 h-5 text-rd-teal shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>

    <div className="mt-auto">
      <a href="#" className="btn-primary">
        Learn More
      </a>
    </div>
  </div>
);

export default function UnifiedComm() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <h2 className="text-center font-dm-sans text-3xl md:text-4xl font-bold text-rd-dark">
          Unified Communication Ecosystem
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mt-4">
          A Unified Communication Ecosystem integrated with RepairDesk to manage all
          your calls, emails, texts, website queries and social media messages in one
          place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          <CommCard
            logoText="RepairDesk Connect"
            description="One inbox within RepairDesk for managing multi-channel communication and reviews."
            items={[
              'Manage inquiries from Facebook',
              'Enable two-way conversations with SMS chat',
              'Receive emails from your Business Email Account',
              'Get more reviews with Review Automation',
              'Respond to reviews from Google Business Places',
            ]}
          />
          <CommCard
            logoText="PhonePro"
            description="Easy-to-use Phone System integrated with RepairDesk to improve efficiency while taking calls and booking jobs."
            items={[
              'Single business number for calls and messaging',
              'Get call alerts within RepairDesk with ticket information',
              'Set custom IVR, greetings, office hours and extensions',
              'View missed calls, call logs, and recordings',
              'Port-in an existing number to get started',
            ]}
          />
        </div>
      </div>
    </section>
  );
}
