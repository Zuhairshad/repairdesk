import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ---------- Inline icon set (propeller / remote / GPS / camera / drone) ---------- */

const IconPropeller = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    <path strokeLinecap="round" d="M12 12c0-3.3-1.6-6.4-4.6-7.6-1.7-.7-3.1.5-2.6 2.3C5.7 9.6 8.6 11.6 12 12z" />
    <path strokeLinecap="round" d="M12 12c3.3 0 6.4-1.6 7.6-4.6.7-1.7-.5-3.1-2.3-2.6C13.4 5.7 11.4 8.6 11 12z" />
    <path strokeLinecap="round" d="M12 12c0 3.3 1.6 6.4 4.6 7.6 1.7.7 3.1-.5 2.6-2.3-.9-2.7-3.8-4.7-7.2-5.3z" />
    <path strokeLinecap="round" d="M12 12c-3.3 0-6.4 1.6-7.6 4.6-.7 1.7.5 3.1 2.3 2.6 2.7-.9 4.7-3.8 5.3-7.2z" />
  </svg>
);

const IconRemote = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8l3-4h10l3 4" />
    <rect x="3" y="8" width="18" height="11" rx="3" />
    <circle cx="7.5" cy="13.5" r="1.8" />
    <circle cx="16.5" cy="13.5" r="1.8" />
    <path strokeLinecap="round" d="M11.5 13.5h1" />
  </svg>
);

const IconGPS = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-11.5A7 7 0 105 9.5C5 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
);

const IconCamera = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconTicket = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8a2 2 0 012-2h12a2 2 0 012 2v1.5a1.5 1.5 0 000 3V14a2 2 0 01-2 2H6a2 2 0 01-2-2v-1.5a1.5 1.5 0 000-3V8z" />
    <path strokeLinecap="round" d="M9 6v12" strokeDasharray="2 2" />
  </svg>
);

const IconInvoice = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h8l4 4v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 3v4h4" />
    <path strokeLinecap="round" d="M9 12h6M9 15h6M9 9h3" />
  </svg>
);

const IconBox = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9-5-9 5 9 5 9-5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8v8l9 5 9-5V8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v8" />
  </svg>
);

const IconPlug = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v4M15 3v4M6 7h12l-1 5a5 5 0 01-10 0L6 7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 17v4" />
  </svg>
);

const IconCalendar = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
    <path strokeLinecap="round" d="M8 14h2M14 14h2M8 17h2" />
  </svg>
);

const IconCheckIn = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12l2.5 2.5L16 9" />
  </svg>
);

const IconPhone = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 3h3l1.5 4-2 1.5a12 12 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2 2C9.9 19 4 13.1 4 5a2 2 0 012-2z" />
  </svg>
);

const IconStar = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.3l-5.4 3.1 1-6.1-4.4-4.3 6.1-.9L12 3.5z" />
  </svg>
);

const IconMail = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
  </svg>
);

/* ---------- Data ---------- */

const howItWorks = [
  {
    icon: IconTicket,
    title: 'Ticket Management',
    heading: 'Manage Repair Tickets',
    desc: 'Simplify your drone repair operations with a robust ticket management solution for efficiency and transparency. Track repair tickets with centralized history and technician notes.',
  },
  {
    icon: IconInvoice,
    title: 'Easy & Fast Invoicing',
    heading: 'Easy & Fast Invoicing',
    desc: 'Streamline transactions through integrated payment processing with Square and AA Repairdesk Payments. Search for items, tickets, invoices, or customer details for a smooth workflow.',
  },
  {
    icon: IconBox,
    title: 'Inventory Management',
    heading: 'Inventory Management',
    desc: 'Effortlessly manage buybacks, spare parts, accessories, and retail sales. Organize your inventory and enhance efficiency by printing barcodes and labels directly from the platform.',
  },
  {
    icon: IconPlug,
    title: 'Integrations',
    heading: 'Integrations',
    desc: 'Leverage powerful integrations for e-commerce, payments, SMS, printing, and customer management. Connect with Shopify, WooCommerce, Square, Stripe, and more for a seamless workflow.',
  },
];

const customizationCards = [
  {
    icon: IconCalendar,
    title: 'Appointments Pro',
    desc: 'Convert website visitors into booked appointments and provide accurate repair quotes no matter where you are.',
  },
  {
    icon: IconCheckIn,
    title: 'Self Check-in',
    desc: "Eliminate manual check-ins and provide convenience to your customers with AA Repairdesk's self-check-in feature.",
  },
  {
    icon: IconPhone,
    title: 'Phone System',
    desc: 'Avoid missing leads due to missed phone calls. Get instant notifications on your POS screen for calls and text messages.',
  },
  {
    icon: IconStar,
    title: 'Reviews Management',
    desc: 'Stand out from competitors by setting up your review campaign and getting positive feedback on each repair job.',
  },
];

const companyStats = [
  { stat: '3,000+', label: 'Happy Customers' },
  { stat: '50M+', label: 'Payment Processed' },
  { stat: '120+', label: 'Countries' },
];

const customFieldPerks = [
  'Set custom fields to capture drone model, serial number, and damage type',
  'Keep a record of pre and post-repair conditions with customer notes',
  "Cut exciting deals with AA Repairdesk's trade-in module",
  'Build a check-in flow that matches how your shop actually works',
];

export default function DroneRepairPage() {
  return (
    <PageLayout>

      {/* ---------------- HERO — radar / night-flight theme ---------------- */}
      <section className="relative overflow-hidden bg-[#1e2035] text-white py-24 px-6">
        {/* radar rings decoration */}
        <div className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 hidden lg:block">
          <svg width="520" height="520" viewBox="0 0 520 520" fill="none">
            <circle cx="260" cy="260" r="240" stroke="#457b9d" strokeOpacity="0.12" />
            <circle cx="260" cy="260" r="180" stroke="#457b9d" strokeOpacity="0.16" />
            <circle cx="260" cy="260" r="120" stroke="#457b9d" strokeOpacity="0.22" />
            <circle cx="260" cy="260" r="60" stroke="#457b9d" strokeOpacity="0.3" />
            <line x1="260" y1="20" x2="260" y2="500" stroke="#457b9d" strokeOpacity="0.08" />
            <line x1="20" y1="260" x2="500" y2="260" stroke="#457b9d" strokeOpacity="0.08" />
            <circle cx="352" cy="180" r="5" fill="#457b9d" />
            <circle cx="180" cy="330" r="3.5" fill="#457b9d" fillOpacity="0.7" />
          </svg>
        </div>

        <div className="container-main relative max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-white px-4 py-1.5 rounded-full mb-6">
            <IconPropeller className="w-3.5 h-3.5" />
            Drone Repair Shop Software
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
            Unlock the True Potential of Your Drone Repair Business
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">
            An all-in-one repair shop management software. Track repair jobs, create invoices, and manage your inventory in one place.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.aarepairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">
              Request a Demo
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <IconGPS className="w-6 h-6 text-rd-mint" />
              <span className="font-dm-sans text-sm text-white/70">Live status tracking</span>
            </div>
            <div className="flex items-center gap-3">
              <IconRemote className="w-6 h-6 text-rd-mint" />
              <span className="font-dm-sans text-sm text-white/70">Built for fast turnaround</span>
            </div>
            <div className="flex items-center gap-3">
              <IconCamera className="w-6 h-6 text-rd-mint" />
              <span className="font-dm-sans text-sm text-white/70">Photo condition records</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS — flight-path timeline ---------------- */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">How it Works</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Get Started by Creating Your First Drone Repair Ticket
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-14 max-w-2xl">
            Never lose track of any job from start to finish.
          </p>

          <div className="relative">
            {/* connecting flight line, desktop only */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px border-t-2 border-dashed border-rd-teal/25" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="relative">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-rd-teal text-white flex items-center justify-center shadow-lg shadow-rd-teal/20 mb-6">
                      <Icon className="w-7 h-7" />
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rd-lime text-white text-xs font-poppins font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-poppins font-semibold text-lg text-rd-dark mb-2">{f.heading}</h3>
                    <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-4">{f.desc}</p>
                    <a href="#" className="inline-flex items-center gap-1 text-rd-teal font-poppins font-semibold text-sm hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CASE STUDY ---------------- */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="bg-[#1e2035] rounded-3xl p-8 md:p-14 grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] gap-10 items-center relative overflow-hidden">
            <IconPropeller className="absolute -bottom-10 -right-10 w-52 h-52 text-white/5" />
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-mint mb-3">Case Study</span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">
                Team Newland Ag Drones about AA Repairdesk
              </h2>
              <a href="#" className="inline-flex items-center gap-1 text-rd-mint font-poppins font-semibold text-sm hover:gap-2 transition-all">
                Learn More
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
            <div className="bg-white rounded-2xl p-7 md:p-9 relative z-10">
              <div className="text-rd-teal text-4xl font-dm-serif mb-3">&ldquo;</div>
              <p className="text-rd-dark font-dm-sans italic leading-relaxed mb-6">
                Once we had everything in AA Repairdesk, we stopped guessing where a repair stood and started running service with a lot more clarity. AA Repairdesk gave us a more dependable way to stay organized as volume increased because we can see the repair and the status in one place.
              </p>
              <p className="font-poppins font-semibold text-rd-dark">Team Newland Ag Drones</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CUSTOMIZATION OPTIONS ---------------- */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-14 items-start mb-14">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Customization Options</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">
                Customize AA Repairdesk for Your Drone Repair Store
              </h2>
              <p className="text-gray-500 font-dm-sans text-lg leading-relaxed">
                Leverage high-level customization to create your check-in flow and serve your customers in the best way possible. Provide value to your customers by utilizing AA Repairdesk&rsquo;s trade-in module to cut exciting deals.
              </p>
            </div>
            <ul className="space-y-4 self-center">
              {customFieldPerks.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rd-teal flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-600 font-dm-sans text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationCards.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="group bg-white p-7 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-5 transition-colors">
                    <Icon className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-4">{f.desc}</p>
                  <a href="#" className="inline-flex items-center gap-1 text-rd-teal font-poppins font-semibold text-sm hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- MAIL-IN TICKET MANAGEMENT ---------------- */}
      <section className="relative overflow-hidden bg-rd-teal text-white py-16 md:py-24 px-6">
        <div className="pointer-events-none absolute -left-16 -top-16 opacity-10">
          <IconMail className="w-72 h-72" />
        </div>
        <div className="container-main relative grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <div className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border border-dashed border-white/30" />
              <IconMail className="w-20 h-20 md:w-24 md:h-24 text-white" />
              <IconGPS className="absolute -top-2 -right-2 w-10 h-10 text-rd-mint bg-[#1e2035] rounded-full p-2" />
            </div>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-mint mb-3">Drone Mail-In Ticket Management</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-5">You&rsquo;ve Got a Mail to Repair!</h2>
            <p className="text-white/80 font-dm-sans text-lg leading-relaxed">
              Track your mail-in drone repair appointments from an integrated calendar right from your ticketing software. Stay on top of schedules with real-time updates and ensure timely service for every repair.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- YOU'RE IN GREAT COMPANY ---------------- */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="bg-[#1e2035] rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 opacity-10 flex items-center justify-center">
              <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
                <circle cx="300" cy="300" r="280" stroke="#457b9d" />
                <circle cx="300" cy="300" r="200" stroke="#457b9d" />
                <circle cx="300" cy="300" r="120" stroke="#457b9d" />
              </svg>
            </div>
            <div className="relative">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-mint mb-3">You&rsquo;re in Great Company</span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-5 max-w-xl mx-auto">
                When you join AA Repairdesk, you don&rsquo;t just get a software
              </h2>
              <p className="text-white/70 font-dm-sans leading-relaxed max-w-xl mx-auto mb-10">
                You join a community of drone repair shop owners around the world who help you learn and grow your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                {companyStats.map((s) => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl py-6">
                    <p className="font-poppins font-bold text-3xl text-rd-mint mb-1">{s.stat}</p>
                    <p className="text-white/60 font-dm-sans text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="bg-[#FAF9E3] py-16 md:py-20 px-6">
        <div className="container-main text-center max-w-2xl mx-auto">
          <IconPropeller className="w-10 h-10 text-rd-teal mx-auto mb-5" />
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-6">
            Fly Higher with the #1 Drone Repair POS!
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://app.aarepairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-rd-dark/30 text-rd-dark px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-rd-dark/5 transition-colors">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
