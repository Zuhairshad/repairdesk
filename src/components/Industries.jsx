import React from 'react';

const PhoneIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="2" width="12" height="20" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    <line x1="10" y1="5" x2="14" y2="5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="18.5" r="1" fill="currentColor" />
  </svg>
);

const LaptopIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M2 19h20l-1.5-3H3.5L2 19z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <line x1="10" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const RingIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 10l3-6 3 6-3 3-3-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <circle cx="12" cy="16" r="5.5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const WatchIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.6" />
    <path d="M9 2h6l-1 4H10L9 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 22h6l-1-4H10l-1 4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M12 9.5V12l2 1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DroneIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9.5" y="10" width="5" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
    <line x1="9.5" y1="11" x2="4" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="14.5" y1="11" x2="20" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="9.5" y1="13" x2="4" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <line x1="14.5" y1="13" x2="20" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="4" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="20" cy="6" r="1.8" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="4" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="20" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.5" y="5" width="19" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const industries = [
  {
    icon: PhoneIcon,
    title: 'Cell Phone Repair',
    description:
      'Create tickets, generate invoices, process payments, order parts, manage inventory and much more.',
  },
  {
    icon: LaptopIcon,
    title: 'Computer Repair',
    description:
      'Repair tracking, shop management, and a suite of add-ons to help grow your computer repair business.',
  },
  {
    icon: RingIcon,
    title: 'Jewelry Repair',
    description:
      'Manage your entire jewelry repair & restoration business in one place at the speed of now.',
  },
  {
    icon: WatchIcon,
    title: 'Watch Repair',
    description:
      'Quick ticketing system and a fast and easy checkout that works seamlessly with both repairs and retail.',
  },
  {
    icon: DroneIcon,
    title: 'Drone Repair',
    description:
      'Serve walk-in customers, mail-in requests, and everything in between with a powerful software suite.',
  },
  {
    icon: MailIcon,
    title: 'Mail-in Repair',
    description:
      'Digitize your end-to-end repair workflow using custom features designed to handle mail-in repair orders.',
  },
];

export default function Industries() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-rd-dark">
            Industries We Serve
          </h2>
          <p className="text-gray-600 mt-4">
            RepairDesk offers total repair control with an end-to-end workflow tailored for your
            entire repair business in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition border border-gray-100"
            >
              <Icon className="w-12 h-12 text-rd-teal mb-4" />
              <h5 className="font-bold text-lg font-dm-sans text-rd-dark mb-2">{title}</h5>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
