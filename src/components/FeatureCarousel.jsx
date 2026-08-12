import React, { useState } from 'react';

/* ---------------------------------------------------------------- */
/* Icons                                                             */
/* ---------------------------------------------------------------- */

const IconWrap = ({ children, className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

const TicketIcon = ({ className }) => (
  <IconWrap className={className}>
    <path
      d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M9 6v12" stroke="currentColor" strokeWidth="1.6" strokeDasharray="2 2" />
  </IconWrap>
);

const BoxIcon = ({ className }) => (
  <IconWrap className={className}>
    <path
      d="M3.5 8.5 12 4l8.5 4.5v7L12 20l-8.5-4.5v-7Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M3.5 8.5 12 13l8.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M12 13v7" stroke="currentColor" strokeWidth="1.6" />
  </IconWrap>
);

const CardIcon = ({ className }) => (
  <IconWrap className={className}>
    <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
    <path d="M6 15h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </IconWrap>
);

const CalendarIcon = ({ className }) => (
  <IconWrap className={className}>
    <rect x="3.5" y="5" width="17" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 9.5h17" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M8 13.5h.01M12 13.5h.01M16 13.5h.01M8 17h.01M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </IconWrap>
);

const BellIcon = ({ className }) => (
  <IconWrap className={className}>
    <path
      d="M6 10a6 6 0 1 1 12 0c0 3.2 1 4.7 1.6 5.5a.8.8 0 0 1-.6 1.3H5a.8.8 0 0 1-.6-1.3C5 14.7 6 13.2 6 10Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M10 20a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </IconWrap>
);

const CartIcon = ({ className }) => (
  <IconWrap className={className}>
    <path
      d="M4 5h2l1.6 9.6a2 2 0 0 0 2 1.7h7a2 2 0 0 0 2-1.6L20 8H6.4"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9.5" cy="19.5" r="1.4" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="16.5" cy="19.5" r="1.4" stroke="currentColor" strokeWidth="1.4" />
  </IconWrap>
);

const UsersIcon = ({ className }) => (
  <IconWrap className={className}>
    <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="17" cy="8.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    <path d="M15.5 14.2c2.5.3 4.5 2.1 4.5 4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </IconWrap>
);

const ChartIcon = ({ className }) => (
  <IconWrap className={className}>
    <path d="M4 20V10M10 20V4M16 20v-7M20 20H4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </IconWrap>
);

/* ---------------------------------------------------------------- */
/* Data                                                               */
/* ---------------------------------------------------------------- */

const FEATURES = [
  {
    key: 'ticket',
    label: 'Repair Ticket Management',
    Icon: TicketIcon,
    content:
      "With RepairDesk intuitive repair ticket management software you can easily create tickets, add parts, complete a pre- & post repair checklists, get customer signatures and assign tickets to technicians. The powerful repair ticket software allows you to access customer information and repair history with ease, track tickets and monitor job progress.",
  },
  {
    key: 'inventory',
    label: 'Inventory Management',
    Icon: BoxIcon,
    content:
      "Make inventory management effortless with RepairDesk's powerful inventory management software that simplifies inventory tracking, ordering, and replenishment. Easily create a serialized inventory, Purchase Orders and GRNs, transfer your inventory from one store to another.",
  },
  {
    key: 'payments',
    label: 'Integrated Payments',
    Icon: CardIcon,
    content:
      "Streamline billing and make payment collection from customers smooth, transparent and secure with multiple integrated payment methods. Accept debit, credit, contactless, online or digital wallet payments.",
  },
  {
    key: 'appointments',
    label: 'Appointment Scheduling',
    Icon: CalendarIcon,
    content:
      "Convert your website visitors to customers with the RepairDesk online appointments module. The innovative feature makes it very easy for your customers to book appointments anytime. With customizable options and an intuitive interface, easily schedule, reschedule, and track appointments in real time.",
  },
  {
    key: 'notifications',
    label: 'SMS and Email Notification',
    Icon: BellIcon,
    content:
      "Stay connected with your customers effortlessly using RepairDesk's SMS and email notification feature. Instantly send automated updates, reminders, and notifications to keep customers informed every step of the way.",
  },
  {
    key: 'pos',
    label: 'Point of Sale',
    Icon: CartIcon,
    content:
      "Generate more revenue and provide a great checkout experience to your customers with a comprehensive POS software that has everything you need for your business operations. Sell more repair services, accessories and gadgets, generate and print invoices, collect payments, and more.",
  },
  {
    key: 'employees',
    label: 'Employee Management',
    Icon: UsersIcon,
    content:
      "Manage your repair shop efficiently with an employee management system that lets you assign tasks, set distinctive roles and permissions for employees, record shift start and end times, actively track work progress, and monitor productivity with ease.",
  },
  {
    key: 'reporting',
    label: 'Business Reporting',
    Icon: ChartIcon,
    content:
      "Gain invaluable insights into your repair business with RepairDesk's powerful reporting software. The comprehensive reporting tools allow you to track key metrics, analyze performance, and make data-driven decisions with ease.",
  },
];

const DEFAULT_INDEX = FEATURES.findIndex((f) => f.key === 'pos');

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_INDEX);
  const active = FEATURES[activeIndex];

  return (
    <section className="bg-rd-light section-padding">
      <div className="container-main">
        <h2 className="text-center font-dm-sans text-3xl md:text-4xl font-bold text-rd-dark">
          Repair Shop Management Control
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
          One feature-rich platform to consolidate, streamline, and manage your repair
          business operations.
        </p>

        {/* Carousel nav */}
        <div className="mt-12 flex items-start gap-6 md:gap-8 overflow-x-auto pb-2 scrollbar-hide">
          {FEATURES.map((feature, index) => {
            const isActive = index === activeIndex;
            const { Icon } = feature;
            return (
              <button
                key={feature.key}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="flex flex-col items-center gap-3 shrink-0 w-24 md:w-28 focus:outline-none"
                aria-pressed={isActive}
              >
                <span
                  className={`flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? 'bg-rd-dark-teal text-white -translate-y-1 shadow-lg'
                      : 'bg-white text-rd-teal shadow-sm'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </span>
                <span
                  className={`text-xs md:text-sm font-poppins text-center leading-snug transition-colors ${
                    isActive ? 'text-rd-dark font-semibold' : 'text-gray-500'
                  }`}
                >
                  {feature.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div
          key={active.key}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn"
        >
          <div className="w-full aspect-[4/3] rounded-2xl bg-gray-300/70 order-2 md:order-1" />
          <div className="order-1 md:order-2">
            <h3 className="font-dm-sans text-3xl font-bold text-rd-dark mb-4">
              {active.label}
            </h3>
            <p className="font-poppins font-light text-lg text-gray-700 leading-relaxed">
              {active.content}
            </p>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a href="#" className="btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
