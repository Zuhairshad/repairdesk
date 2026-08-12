import React from 'react';

const industries = [
  {
    icon: '/images/icon-mobile.png',
    title: 'Cell Phone Repair',
    description:
      'Create tickets, generate invoices, process payments, order parts, manage inventory and much more.',
  },
  {
    icon: '/images/icon-laptop.png',
    title: 'Computer Repair',
    description:
      'Repair tracking, shop management, and a suite of add-ons to help grow your computer repair business.',
  },
  {
    icon: '/images/icon-ring.png',
    title: 'Jewelry Repair',
    description:
      'Manage your entire jewelry repair & restoration business in one place at the speed of now.',
  },
  {
    icon: '/images/icon-watch.png',
    title: 'Watch Repair',
    description:
      'Quick ticketing system and a fast and easy checkout that works seamlessly with both repairs and retail.',
  },
  {
    icon: '/images/icon-drone.png',
    title: 'Drone Repair',
    description:
      'Serve walk-in customers, mail-in requests, and everything in between with a powerful software suite.',
  },
  {
    icon: '/images/icon-mailin.svg',
    title: 'Mail-in Repair',
    description:
      'Digitize your end-to-end repair workflow using custom features designed to handle mail-in repair orders.',
  },
];

export default function Industries() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[38px] font-poppins font-normal text-[#2e384d] text-center mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto font-poppins text-lg font-light">
            RepairDesk offers total repair control with an end-to-end workflow tailored for your
            entire repair business in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-6 md:p-8 shadow-[0_6px_20px_rgba(60,63,64,0.07)] border border-gray-50 hover:shadow-lg transition-shadow duration-300"
            >
              <img src={icon} alt="" className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-poppins font-semibold text-[#2e384d] mb-3">{title}</h3>
              <p className="text-gray-600 font-poppins text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
