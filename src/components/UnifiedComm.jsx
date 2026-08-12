import React from 'react';

const features = [
  {
    logo: '/images/connect-logo.png',
    logoAlt: 'RepairDesk Connect',
    description:
      'One inbox within RepairDesk for managing multi-channel communication and reviews.',
    items: [
      'Manage inquiries from Facebook',
      'Enable two-way conversations with SMS chat',
      'Receive emails from your Business Email Account',
      'Get more reviews with Review Automation',
      'Respond to reviews from Google Business Places',
    ],
  },
  {
    logo: '/images/phonepro-logo.png',
    logoAlt: 'PhonePro',
    description:
      'Easy-to-use Phone System integrated with RepairDesk to improve efficiency while taking calls and booking jobs.',
    items: [
      'Single business number for calls and messaging',
      'Get call alerts within RepairDesk with ticket information',
      'Set custom IVR, greetings, office hours and extensions',
      'View missed calls, call logs, and recordings',
      'Port-in an existing number to get started',
    ],
  },
];

export default function UnifiedComm() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[38px] font-poppins font-normal text-[#2e384d] text-center mb-4">
            Unified Communication Ecosystem
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto font-poppins text-lg font-light">
            A Unified Communication Ecosystem integrated with RepairDesk to manage all your calls,
            emails, texts, website queries and social media messages in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((card) => (
            <div
              key={card.logoAlt}
              className="bg-white rounded-2xl shadow-[0_6px_20px_rgba(60,63,64,0.07)] p-8 border border-gray-50"
            >
              <img
                src={card.logo}
                alt={card.logoAlt}
                className="h-10 mb-4 object-contain"
              />
              <p className="text-gray-600 font-poppins mb-6">{card.description}</p>
              <ul className="space-y-3">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-rd-teal inline-block shrink-0 mt-[7px]" />
                    <span className="text-[#2e384d] font-poppins text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary mt-6">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
