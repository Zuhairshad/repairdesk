import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ---------------------------------------------------------------- */
/* Content                                                          */
/* ---------------------------------------------------------------- */

const trustedLogos = [
  { src: '/images/logos/techy.png', alt: 'Techy' },
  { src: '/images/logos/savannah.png', alt: 'Savannah iDoctor' },
  { src: '/images/logos/crd.png', alt: 'Computer Repair Doctor' },
  { src: '/images/logos/ifixscreens.svg', alt: 'iFixScreens' },
  { src: '/images/logos/firstresponse.png', alt: 'First Response Phone Repair' },
  { src: '/images/logos/wsa.svg', alt: 'WSA' },
];

const heroChips = [
  {
    label: 'Quotes & Estimates',
    desc: 'Quote drills, sanders, saws, routers, vacuums & grinders — email for accept or decline.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  },
  {
    label: 'Work Order Tracking',
    desc: 'Manage work orders, time, notes, and special part order requests — all in one place.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
  },
  {
    label: 'Faster Invoicing',
    desc: 'Get paid faster with customized invoices, plus QuickBooks or Xero sync.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a4 4 0 00-8 0v2M5 9h14l1 11H4L5 9z" />,
  },
];

const workOrderFeatures = [
  {
    title: 'Digital Labels',
    desc: 'Say goodbye to sticky notes with digital labels that are customizable to your workshop needs.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5.586a1 1 0 01.707.293l6.414 6.414a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0l-6.414-6.414A1 1 0 014 11.586V6a3 3 0 013-3z" />,
  },
  {
    title: 'Digital Quote Approvals',
    desc: 'Reduce your phone time and expedite work with digital signatures for estimate approvals, allowing customers to approve services from anywhere.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 112.828 2.828L11.828 13.828a4 4 0 01-1.414.94l-3.09 1.157 1.157-3.09a4 4 0 01.94-1.414z M5 19h14" />,
  },
  {
    title: 'Job Notifications',
    desc: 'Keep customers informed at every step. Instantly send job updates via SMS and email whenever there is a change in ticket status and get notified immediately whenever customers respond. Set up a repair tracker on your website so customers can track repair status.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />,
  },
  {
    title: 'Customer Portal',
    desc: 'Offer your business customers 24/7 access to their online portal, where they can request work, approve quotes, track repair progress and make payments quickly and easily.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
];

const inventoryFeatures = [
  {
    title: 'Low Stock Alerts',
    desc: "Track what's on hand and receive alerts when your inventory is low so you can replenish stock.",
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />,
  },
  {
    title: 'Purchase Management',
    desc: 'Create POs in seconds and quickly send them to QuickBooks or Xero to keep everything in sync. Automatically update inventory as items are received and eliminate double entry by directly passing purchase information into your accounting software.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 2L3 7v13a1 1 0 001 1h4a1 1 0 001-1v-6h6v6a1 1 0 001 1h4a1 1 0 001-1V7l-6-5M9 22V12h6v10" />,
  },
  {
    title: 'Inventory Count',
    desc: 'Take the guesswork out of inventory management and use inventory counts that help you perform physical stock takes to ensure that your inventory is up to date.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />,
  },
  {
    title: 'Serialized Inventory',
    desc: 'Easily differentiate the same items from two different vendors and clearly trace your inventory items from supplier to end customer.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6M4 6l2-3h12l2 3M9.5 11h.01M14.5 11h.01M9.5 15h5" />,
  },
];

const employeeFeatures = [
  {
    title: 'Time Tracking',
    desc: 'Track employee working hours with our easy to use clock in/out feature and make payday painless by quickly exporting hours.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Performance Monitoring',
    desc: 'Measure employee productivity with real-time performance insights. Track sales, repairs completed, and process payrolls.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm6 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm6 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2z" />,
  },
  {
    title: 'Role Based Access',
    desc: 'Control what each employee can see and do with customizable access to just the tools and data they need.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-12V7a4 4 0 10-8 0v2" />,
  },
  {
    title: 'Reporting',
    desc: 'Stay on top of your shop operations and view key operational metrics including sales, performance, order, and payment summaries along with your most profitable line items.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm6 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm6 0V5a2 2 0 00-2-2h-2a2 2 0 00-2 2v14a2 2 0 002 2h2a2 2 0 002-2z" />,
  },
];

const efficiencyFeatures = [
  {
    title: 'Loyalty Program',
    desc: 'Use the AA Repairdesk loyalty program to cultivate stronger relationships, grow repeat business, and increase lifetime value.',
    link: '/features/loyalty-program',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 4 3 6 3 6s3-2 3-6c0-1.657-1.343-3-3-3zm0 0V2m0 6a4 4 0 100 8" />,
  },
  {
    title: 'Self Check-In',
    desc: 'Save time by letting customers enter the information you need before they come to the checkout counter.',
    link: '/features/self-check-in',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" />,
  },
  {
    title: 'Appointment Scheduling',
    desc: 'Grab every opportunity by turning website visitors into quote requests and booked appointments. Provide accurate repair quotes around the clock.',
    link: '/features/appointments-pro',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  },
  {
    title: 'Review Automation',
    desc: 'Automatically trigger an SMS with a review link after 24 hours of completing a repair job and send it to customers to rate your repair shop on Google.',
    link: '/features/google-reviews',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
  },
];

const paymentFeatures = [
  {
    title: 'Fast & Simple',
    desc: 'Accept all cards at the same rate and receive next-day settlements. There are no lock-in contracts or startup, ACH, or other fees. Fees are confusing, and we dislike them as much as you do.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
  },
  {
    title: 'In-Person Payments',
    desc: 'Use a wireless terminal to accept chip cards, Apple Pay, and Google Pay.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V7a2 2 0 012-2h8a2 2 0 012 2v1m-6 12h8a2 2 0 002-2v-7a2 2 0 00-2-2h-8a2 2 0 00-2 2v7a2 2 0 002 2z" />,
  },
  {
    title: 'Email Invoice with a Payment Link',
    desc: 'Email invoices to customers, enabling them to e-sign and pay from any location.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  },
  {
    title: 'PCI Compliant',
    desc: 'Top-notch security is guaranteed by PCI compliance, enhanced by end-to-end encryption for every transaction.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  },
];

const companyStats = [
  { stat: '3,000+', label: 'Happy Customers' },
  { stat: '50M+', label: 'Payment Processed' },
  { stat: '120+', label: 'Countries' },
];

/* ---------------------------------------------------------------- */
/* Small building blocks                                            */
/* ---------------------------------------------------------------- */

function HazardStrip({ className = '' }) {
  return (
    <div
      className={`h-2.5 w-full ${className}`}
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, #457b9d 0 14px, #1e2035 14px 28px)',
      }}
    />
  );
}

function BoltIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12l1-8.5z" />
    </svg>
  );
}

/* ---------------------------------------------------------------- */
/* Page                                                              */
/* ---------------------------------------------------------------- */

export default function PowerToolsPage() {
  return (
    <PageLayout>
      {/* ============================ HERO ============================ */}
      <section className="bg-[#1e2035] text-white pt-20 pb-16 px-6 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-rd-teal/20 blur-3xl" />
        <div className="absolute left-1/3 -bottom-32 w-72 h-72 rounded-full bg-rd-lime/10 blur-3xl" />

        {/* faint bolt pattern */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
            {Array.from({ length: 8 }).map((_, i) => (
              <circle key={i} cx={(i * 53 + 20) % 400} cy={((i * 97) % 360) + 20} r="14" stroke="white" strokeWidth="2" />
            ))}
          </svg>
        </div>

        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-white px-4 py-1.5 rounded-full mb-6">
                <BoltIcon className="w-3.5 h-3.5" />
                Power Tools Repair Shop Software
              </span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
                Easily Manage Everything for Your Power Tool Repair Shop
              </h1>
              <p className="text-white/80 text-lg font-dm-sans leading-relaxed mb-8 max-w-xl">
                Create professional quotes to repair drills, sanders, saws, compact routers, vacuums, and grinders, and email your customers so they can accept or decline. Never miss a deadline again — manage work orders, track time, notes, and special part order requests from one place.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://app.aarepairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
                <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
              </div>
            </div>

            {/* Toolbox card */}
            <div className="relative">
              <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="flex items-center gap-2 bg-white/10 px-5 py-3 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-rd-lime" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="ml-2 text-white/60 text-xs font-dm-sans">Get paid faster with customized invoices</span>
                </div>
                <div className="p-6 space-y-4">
                  {heroChips.map((c) => (
                    <div key={c.label} className="flex items-start gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
                      <div className="w-10 h-10 rounded-xl bg-rd-lime flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-rd-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>{c.icon}</svg>
                      </div>
                      <div>
                        <p className="font-poppins font-semibold text-white text-sm mb-1">{c.label}</p>
                        <p className="text-white/60 font-dm-sans text-xs leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-white/50 font-dm-sans text-xs mt-3 text-center">Use QuickBooks or Xero integration for a seamless data flow.</p>
            </div>
          </div>
        </div>
      </section>

      <HazardStrip />

      {/* ============================ TRUSTED BY ============================ */}
      <section className="bg-white py-10 px-6 border-b border-gray-100">
        <div className="container-main">
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-gray-400 font-poppins mb-6">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {trustedLogos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-9 md:h-11 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* ====================== WORK ORDER MANAGEMENT (pegboard) ====================== */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Stay in Control of Your Job Management</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5 max-w-2xl">Work Order Management</h2>
          <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-4 max-w-3xl">
            Minimize paperwork in your power tool repair shop and quickly access all job-related data to view job status, due dates, and overdue tasks in one place at a glance.
          </p>
          <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-14 max-w-3xl">
            Link parts to service tickets, print asset tags, include diagnostic or private notes, record time spent on repairs, oversee special part order requests, assign jobs to technicians, and conveniently attach photos and documents to repair tickets. If a job needs additional work, email quotes to customers for easy acceptance or decline.
          </p>

          {/* Pegboard grid — cards hang from a peg hole like tools on a workshop wall */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {workOrderFeatures.map((f) => (
              <div key={f.title} className="relative">
                <div className="w-4 h-4 rounded-full bg-rd-cream border-2 border-rd-teal/40 absolute -top-2 left-1/2 -translate-x-1/2 z-10" />
                <div className="bg-white rounded-2xl pt-8 pb-6 px-5 shadow-sm border border-gray-100 h-full text-center">
                  <div className="w-12 h-12 rounded-xl bg-rd-teal/10 flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>{f.icon}</svg>
                  </div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== INVENTORY MANAGEMENT (parts bin) ====================== */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Always Know What's In Your Inventory</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Inventory Management at Your Fingertips</h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-4">
                For many small and medium power tool shop owners, tracking repair parts can be time-consuming. With AA Repairdesk, you can efficiently manage your inventory, ensuring you are always aware of what you have in stock and what you'll need before the demand arises.
              </p>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">
                Whether you prefer selling in-store or have an online store powered by Shopify or WooCommerce, AA Repairdesk provides the tools to scale.
              </p>
            </div>

            {/* Parts bin grid — dashed dividers like labelled storage bins */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {inventoryFeatures.map((f) => (
                <div key={f.title} className="rounded-2xl border-2 border-dashed border-rd-teal/25 p-6 hover:border-rd-teal/50 hover:bg-rd-cream/60 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-rd-dark flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-rd-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>{f.icon}</svg>
                    </div>
                    <h3 className="font-poppins font-semibold text-rd-dark">{f.title}</h3>
                  </div>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== EMPLOYEE MANAGEMENT (dark dashboard strip) ====================== */}
      <section className="bg-[#1e2035] text-white py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="absolute -left-24 top-1/3 w-72 h-72 rounded-full bg-rd-teal/20 blur-3xl" />
        <div className="container-main relative z-10">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-mint mb-3">Employee Management</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-5 max-w-2xl">Set Your Team and Business Up For Success</h2>
          <p className="text-white/70 font-dm-sans text-lg leading-relaxed mb-14 max-w-2xl">
            Keep your employees and technicians organized with role-based access and performance tracking. Track work hours and improve accountability with detailed reports.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {employeeFeatures.map((f, i) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 relative">
                <span className="absolute top-4 right-5 font-poppins font-bold text-white/10 text-4xl">{String(i + 1).padStart(2, '0')}</span>
                <div className="w-11 h-11 rounded-xl bg-rd-lime flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-rd-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>{f.icon}</svg>
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-white/60 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HazardStrip />

      {/* ====================== INCREASE EFFICIENCY ====================== */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Increase Efficiency</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5 max-w-2xl">The Ultimate Solution to Elevate Your Business</h2>
          <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-14 max-w-2xl">
            Automate tedious tasks, speed up operations, and boost your revenue!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {efficiencyFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm flex flex-col">
                <div className="w-11 h-11 rounded-xl bg-[#FAF9E3] flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>{f.icon}</svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-6 flex-1">{f.desc}</p>
                <Link to={f.link} className="text-rd-teal font-poppins font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== UNIFIED POS & PAYMENTS ====================== */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Unified POS &amp; Payments</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Get Paid Without the Friction</h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-8">
                AA Repairdesk provides a unified platform with Payments seamlessly integrated into your POS. This automates your payment process, reducing errors and speeding up checkouts without manual entries. With AA Repairdesk Integrated payment processing, you get:
              </p>
              <a href="https://app.aarepairdesk.co/register" className="btn-primary px-8 py-3.5 inline-block">Start Free Trial</a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {paymentFeatures.map((f) => (
                <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                    <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>{f.icon}</svg>
                  </div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== YOU'RE IN GREAT COMPANY ====================== */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="bg-[#1e2035] rounded-3xl p-8 md:p-14 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-mint mb-3">You're in Great Company</span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-5">Join Power Tool Shop Owners Worldwide</h2>
              <p className="text-white/70 font-dm-sans leading-relaxed">
                When you join AA Repairdesk, you don't just get a software. You join a community of power tool repair shop owners around the world who help you learn and grow your business.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {companyStats.map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-2xl py-6 text-center">
                  <p className="font-poppins font-bold text-2xl md:text-3xl text-rd-mint mb-1">{s.stat}</p>
                  <p className="text-white/60 font-dm-sans text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== FINAL CTA ====================== */}
      <section className="bg-[#1e2035] py-16 md:py-20 px-6 relative overflow-hidden">
        <HazardStrip className="absolute top-0 left-0" />
        <div className="container-main text-center max-w-2xl mx-auto pt-4">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">Supercharge Repairs with the #1 Power Tools Repair POS!</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://app.aarepairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
