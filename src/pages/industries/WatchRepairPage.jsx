import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ---- Section 2: ticketing sub-dials ---- */
const ticketFeatures = [
  {
    title: 'Ticket Management',
    desc: 'Speed up your watch repairs using efficient ticket management software for a smoother workflow. Track repair jobs and send job notifications and estimates to customers.',
    to: '/features/repair-ticket-management',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Easy Payment Options',
    desc: 'Allow customers pay conveniently using their debit/credit cards without additional fees. Get paid faster by integrating the watch repair software with your favorite payment processors like Square and Stripe.',
    to: '/features/repairdesk-payments',
    icon: 'M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z',
  },
  {
    title: 'Better Inventory Management',
    desc: "Manage your repair shop's inventory like never before. Get low stock alerts, streamline buybacks, import or export product catalogs, and print barcodes and labels.",
    to: '/features/inventory-management',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  },
];

/* ---- Section 3: watch strap links ---- */
const strapFeatures = [
  {
    title: 'Ticketing System',
    desc: 'Serve customers better by creating tickets online and sending the ticket reference number to your customers via SMS or Email.',
    to: '/features/repair-ticket-management',
    icon: 'M7 7h.01M7 3h5.586a2 2 0 011.414.586l7 7a2 2 0 010 2.828l-7.172 7.172a2 2 0 01-2.828 0l-7-7A2 2 0 013 12.586V7a4 4 0 014-4z',
  },
  {
    title: 'POS System',
    desc: 'Sell your products, repairs, trade-ins, and bundle offers all from the built-in POS system.',
    to: '/features/point-of-sale',
    icon: 'M16 11V7a4 4 0 10-8 0v4M5 9h14l1 12H4L5 9z',
  },
  {
    title: 'Products Inventory',
    desc: "Sell your watches using the built-in POS system, and even make a two-way sync with your online store's product catalog.",
    to: '/features/inventory-management',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  },
  {
    title: 'Billing & Invoicing',
    desc: 'Get paid faster online by sending email invoices to your customers with a payment link. Also, take payments from in-store customers.',
    to: '/features/billing-invoicing',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
];

/* ---- Section 5: gear-train integrations ---- */
const integrations = [
  {
    title: 'WooCommerce Integration',
    desc: 'Have more control over your retail operations with the two-way sync with WooCommerce integration.',
    to: '/integrations',
    icon: 'M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 11-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 115.656 5.656l-1.5 1.5',
  },
  {
    title: 'Payments Integration',
    desc: 'Get paid faster by Integrating the watch repair software with your favorite payments processor like Square and Stripe.',
    to: '/features/repairdesk-payments',
    icon: 'M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z',
  },
  {
    title: 'Xero integration',
    desc: 'Be confident, every transaction in RepairDesk is reflected in your Integrated Xero account.',
    to: '/integrations',
    icon: 'M7 16V4m0 0L3 8m4-4l4 4m6 4v12m0 0l4-4m-4 4l-4-4',
  },
  {
    title: 'SMS Integration',
    desc: 'Connect with your favorite SMS provider and start sending job notifications and marketing campaigns.',
    to: '/features/repairdesk-sms',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
];

/* ---- Section 6: movement train ---- */
const workflowFeatures = [
  {
    title: 'Form Builder',
    desc: 'Track what matters for you and your customer. Using the inbuilt repair form builder, you can collect the necessary information while creating a ticket.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  },
  {
    title: 'Pre-repair Checklist',
    desc: 'Customize the checklist of areas that require inspection before accepting a repair job.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 13l2 2 4-4',
  },
  {
    title: 'Labels & Receipts',
    desc: 'Control what information you need to show on your printed labels and receipts.',
    icon: 'M9 7h6m-6 4h6m-6 4h4M5 3h14a2 2 0 012 2v14l-3-2-2 2-2-2-2 2-2-2-2 2-2-2-3 2V5a2 2 0 012-2z',
  },
  {
    title: 'Dashboard',
    desc: "Assess your store's performance using 25+ analytical charts that you can mix and match to create new insightful reports.",
    to: '/features/reporting',
    icon: 'M3 3v18h18M9 17V9m4 8V5m4 12v-6',
  },
];

/* ---- Section 7: marketing ---- */
const marketingFeatures = [
  {
    title: 'Appointments Widget',
    desc: 'Turn visitors to your site into appointments in the ticketing system!',
    to: '/features/appointments-pro',
    icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    title: 'Self Check-in',
    desc: "It's rush hour. Let your customers check-in on their own so that you focus where matters: delivering an outclass service.",
    to: '/features/self-check-in',
    icon: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z',
  },
  {
    title: 'Integrated Phone System',
    desc: 'Never miss an inquiry again with a single phone number for text and calls, mobile & web apps, and pop-up notifications.',
    icon: 'M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
  },
  {
    title: 'Reviews Campaign',
    desc: 'Stand you out from competitors by setting up your reviews campaign on completion of each clock repair job.',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
];

/* ---- Section 8: customer rapport ---- */
const customerFeatures = [
  {
    title: 'Diagnostic Notes',
    desc: "Mitigate liabilities by keeping record of any information provided by customers or even your technicians before accepting the job. It's saved within the ticket and printed on receipt.",
    icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  },
  {
    title: 'Job Notifications',
    desc: 'Informed customers are happy customers. Automatically notify your customers of the repair job statuses via SMS or emails.',
    to: '/features/job-notifications',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },
  {
    title: 'Integrated Calls and SMS',
    desc: 'Talk with customers via single phone number for text and calls and get notified on your mobile and web apps.',
    to: '/features/repairdesk-sms',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  },
  {
    title: 'Repair Tracker',
    desc: 'Keep your customers updated with the ticket progress and expectations right from your website.',
    icon: 'M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  },
];

const faqs = [
  {
    q: 'How do I advertise my watch repair store?',
    a: (
      <>
        The best way to advertise your store is by creating optimized blogs that highlight your store and promoting your work, customer testimonials, and feedback on social media. With the RepairDesk{' '}
        <Link to="/features/marketing" className="text-rd-teal font-semibold underline">marketing automation</Link> feature, you can send automated campaigns for customers and prompt them to give you reviews as well.
      </>
    ),
  },
  {
    q: 'Can I integrate my vendors into my watch repair shop POS software?',
    a: 'Yes. You can. With RepairDesk, you can store supplier details, manage purchase orders, track shipments, and even generate Goods Received Notes (GRN). It allows seamless integration, so your vendor communication will always stay organized.',
  },
  {
    q: 'Do I manage the warranty of watches separately in my watch repair store?',
    a: (
      <>
        No, not at all. RepairDesk allows you to enter warranty information for all services and parts. You can easily define the claim, history, duration, and conditions within{' '}
        <Link to="/features/point-of-sale" className="text-rd-teal font-semibold underline">the POS</Link>. If your customer comes with a claim, simply track it through the repair ticket or use the watch repair shop barcode tracking.
      </>
    ),
  },
  {
    q: "How can my watch shop's workflow improve using RepairDesk?",
    a: 'Through using the watch repair shop workflow management, RepairDesk simplifies your workflow by managing every aspect, starting from repair ticket management, inventory, billing, payments, reports, and so much more. Everything is digitalized and centralized for easy use.',
  },
];

function TickMark({ i }) {
  const isCardinal = i % 3 === 0;
  return (
    <line
      x1="120" y1="20" x2="120" y2={isCardinal ? 34 : 30}
      stroke="#0C3C3E"
      strokeWidth={isCardinal ? 4 : 2}
      strokeLinecap="round"
      transform={`rotate(${i * 30} 120 120)`}
    />
  );
}

function WatchDial() {
  return (
    <div className="bg-[#0C3C3E] rounded-full p-4 shadow-2xl">
      <div className="bg-[#FAF9E3] rounded-full p-8 ring-4 ring-rd-lime/60">
        <svg viewBox="0 0 240 240" className="w-56 h-56 md:w-72 md:h-72">
          <circle cx="120" cy="120" r="106" fill="none" stroke="#0C3C3E" strokeWidth="1" opacity="0.15" />
          {Array.from({ length: 12 }).map((_, i) => <TickMark key={i} i={i} />)}
          <line x1="120" y1="120" x2="120" y2="74" stroke="#0C3C3E" strokeWidth="6" strokeLinecap="round" transform="rotate(45 120 120)" />
          <line x1="120" y1="120" x2="120" y2="50" stroke="#0C3C3E" strokeWidth="4" strokeLinecap="round" transform="rotate(155 120 120)" />
          <g>
            <line x1="120" y1="132" x2="120" y2="42" stroke="#016D74" strokeWidth="2" strokeLinecap="round" />
            <animateTransform attributeName="transform" type="rotate" from="0 120 120" to="360 120 120" dur="12s" repeatCount="indefinite" />
          </g>
          <circle cx="120" cy="120" r="7" fill="#016D74" />
          <circle cx="120" cy="120" r="2.5" fill="#FAF9E3" />
        </svg>
      </div>
    </div>
  );
}

function LearnMore({ to }) {
  if (!to) return null;
  return (
    <Link to={to} className="group inline-flex items-center gap-1.5 text-rd-teal font-poppins font-semibold text-sm mt-4">
      Learn More
      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-4">
      <span className="w-1.5 h-1.5 rounded-full bg-rd-teal" />
      {children}
    </span>
  );
}

export default function WatchRepairPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* Hero — the watch face */}
      <section className="bg-gradient-to-br from-rd-dark via-[#0C3C3E] to-rd-teal text-white py-20 md:py-28 px-6 overflow-hidden">
        <div className="container-main grid lg:grid-cols-[1.2fr_1fr] gap-14 items-center">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6 font-poppins">
              Watch Repair Shop Software
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              A Slick and Fast Watch Repair Software
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8 max-w-xl">
              Watch repair ticketing software that works faster ⚡ when you're in a rush! Manage all your watch repair and heirloom restoration jobs in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
              <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <WatchDial />
          </div>
        </div>
      </section>

      {/* Ticketing sub-dials */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main">
          <Eyebrow>A Faster Way to Create Tickets</Eyebrow>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            A Faster Way to Create Tickets
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">
            Using the pre-set options, easily check-in repair items, add customers, auto-send job notifications to customers, and keep track of everything in the system. Create tickets with information that is important for you, your customers, and your technicians.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ticketFeatures.map((f) => (
              <div key={f.title} className="text-center flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-4 border-rd-cream bg-white shadow-lg flex items-center justify-center mb-5 relative">
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-rd-teal/30" />
                  <svg className="w-9 h-9 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                <LearnMore to={f.to} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch strap: repair + retail */}
      <section className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main">
          <Eyebrow>Watch Repair Management Software</Eyebrow>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Repair and Sell Watches in One Place
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">
            Selling and repairing was never so easy. Seamlessly manage all your repair tickets using a watch repair ticketing software that also has a built-in POS for the retail side of your business.
          </p>

          {/* strap links */}
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-3 bg-rd-dark/10 rounded-full -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 relative">
              {strapFeatures.map((f, i) => (
                <div key={f.title} className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative ${i % 2 === 1 ? 'md:mt-6' : ''}`}>
                  <div className="w-11 h-11 rounded-xl bg-rd-teal flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                  <LearnMore to={f.to} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mail-in repair — shipping tag */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="bg-rd-cream border-2 border-dashed border-rd-teal/40 rounded-2xl p-10 max-w-sm">
              <div className="w-16 h-16 rounded-full bg-rd-teal/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-poppins font-bold text-rd-dark text-xl">Mail-in Repair Ticket</p>
              <p className="text-gray-400 font-dm-sans text-sm mt-1">Appointment → Ticket → Notification → Invoice</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Watch Mail-in Repair Management</Eyebrow>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">
              Track your Mail-in Repairs
            </h2>
            <p className="text-gray-500 font-dm-sans text-lg leading-relaxed">
              Start offering your customers with <span className="font-semibold text-rd-dark">mail-in repair</span> facility through an integrated calendar on your website. The appointments land in RepairDesk allowing you to create a ticket against it, send repair job notifications to the customer, and email the invoice with a pay link.
            </p>
          </div>
        </div>
      </section>

      {/* Integrations: gear train */}
      <section className="bg-rd-dark py-16 md:py-20 px-6">
        <div className="container-main">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rd-lime" />
            Integrations for Clock Repair Shops
          </span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4 max-w-2xl">
            RepairDesk Works Better Together
          </h2>
          <p className="text-white/70 font-dm-sans text-lg mb-12 max-w-2xl">
            Connect all your core systems with the central headquarters of your business that is RepairDesk for seamlessly managing everything from one place.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-11 h-11 rounded-full bg-rd-lime/20 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-white/60 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movement train — workflow */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main">
          <Eyebrow>Designed for Watch Repair Management</Eyebrow>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Work it, the Way You Need it
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-14 max-w-2xl">
            Set your entire workflow in place for a completely frictionless experience, and control every aspect of the app for your business.
          </p>
          <div className="relative">
            <div className="hidden md:block absolute top-6 left-6 right-6 h-px border-t-2 border-dashed border-rd-teal/30" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {workflowFeatures.map((f, i) => (
                <div key={f.title} className="relative">
                  <div className="w-12 h-12 rounded-full bg-rd-teal text-white flex items-center justify-center font-poppins font-bold mb-5 relative z-10">
                    {i + 1}
                  </div>
                  <svg className="w-6 h-6 text-rd-teal mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                  <LearnMore to={f.to} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marketing */}
      <section className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main">
          <Eyebrow>Watch Repair Marketing Software</Eyebrow>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Watches are Ticking, Your Business Isn't?
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">
            Get access to the right tools to convert more inquiries to tickets, close more sales calls, deliver a great customer experience, and collecting good reviews.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                <LearnMore to={f.to} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer rapport */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main">
          <Eyebrow>Watch Repair Customer Management</Eyebrow>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Build a Rapport with Customers
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">
            Be a hit with your clients with the feature-set designed specifically for keeping your customers updated at all times.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customerFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-4 bg-rd-cream rounded-2xl p-6">
                <div className="w-11 h-11 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-1.5">{f.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                  <LearnMore to={f.to} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You're in Great Company — the case back */}
      <section className="bg-[#0C3C3E] py-16 md:py-20 px-6">
        <div className="container-main text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
            You're in Great Company
          </h2>
          <p className="text-white/70 font-dm-sans text-lg max-w-2xl mx-auto mb-12">
            When you join RepairDesk, you don't just get a software. You join a community of watch repair shop owners around the world who help you learn and grow your business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Happy Customers', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
              { label: 'Payment Processed', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m0-16a9 9 0 100 18 9 9 0 000-18z' },
              { label: 'Countries', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((s) => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl py-8 px-4 flex flex-col items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-rd-lime/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                  </svg>
                </div>
                <span className="font-poppins font-semibold text-white">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-10 text-center">
            All the Answers You're Looking For
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-rd-cream rounded-xl">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-poppins font-semibold text-rd-dark pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-rd-teal shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
