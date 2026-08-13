import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ---------------------------------------------------------------- */
/* Content pulled directly from the repairdesk.co cell phone page   */
/* ---------------------------------------------------------------- */

const heroBullets = [
  'Move phone repairs from intake to checkout with less manual work',
  'Keep barcode labels, notes, and updates tied to each ticket',
  'Find parts faster with inventory tracking built into the repair flow',
  'Keep busy cell phone stores moving when jobs start to pile up',
];

const stats = [
  { value: '24/6', label: 'Support included' },
  { value: '40+', label: 'Integrated partners' },
  { value: '4.7/5', label: 'on Capterra · 244 verified reviews', stars: true },
  { value: '4.9/5', label: 'on Trustpilot · 509 verified reviews', stars: true },
];

const trustedByLogos = [
  { logo: '/images/logos/wsa.svg', alt: 'WSA' },
  { logo: '/images/logos/techy.png', alt: 'Techy' },
  { logo: '/images/logos/savannah.png', alt: 'Savannah iDoctor' },
  { logo: '/images/logos/crd.png', alt: 'Computer Repair Doctor' },
  { logo: '/images/logos/ifixscreens.svg', alt: 'iFixScreens' },
  { logo: '/images/logos/firstresponse.png', alt: 'First Response Phone Repair' },
];

const pressurePoints = [
  { text: 'A customer wants an update, and the ticket is hard to find.', rotate: '-rotate-1' },
  { text: 'A job stalls because the next step was not clear.', rotate: 'rotate-1' },
  { text: 'Two people grab the same repair, or nobody does.', rotate: 'rotate-2' },
  { text: 'Repairs and checkout live apart, so the handoff slows down.', rotate: '-rotate-2' },
  { text: 'Customers leave happy, then you never see them again.', rotate: 'rotate-1' },
];

const workflowSteps = [
  'Take in the device, snap photos, and print a barcode label in seconds',
  'Assign the job, track status, and log diagnostic notes without losing context',
  'Send SMS and email alerts that keep customers updated without constant calls',
  'Check out with any payment method, including cash, card, contactless, and mobile wallet',
  'Prepare repair estimates and print tax invoices without rebuilding the ticket',
  'Reorder parts directly from your supplier without leaving the screen',
];

const iconPaths = {
  ticket: 'M9 5H7a2 2 0 00-2 2v3a2 2 0 010 4v3a2 2 0 002 2h10a2 2 0 002-2v-3a2 2 0 010-4V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  cube: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  card: 'M2 8h20M2 8v9a2 2 0 002 2h16a2 2 0 002-2V8M2 8V6a2 2 0 012-2h16a2 2 0 012 2v2M6 15h4',
  users: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-3.5a3 3 0 100-6 3 3 0 000 6zm7 3a3 3 0 10-2.24-5M6 10a3 3 0 102.24-5',
  chart: 'M3 3v18h18M7 15l4-4 3 3 5-6',
  refresh: 'M4 4v6h6M20 20v-6h-6M4.5 15a8 8 0 0014.9 2.5M19.5 9A8 8 0 004.6 6.5',
  badge: 'M12 15a4 4 0 100-8 4 4 0 000 8zM6 20.2V9a2 2 0 012-2h8a2 2 0 012 2v11.2l-6-3.2-6 3.2z',
  megaphone: 'M3 11l18-7v16l-18-7zm0 0v6a2 2 0 002 2h2',
  store: 'M3 9l1.5-5h15L21 9M3 9v10a1 1 0 001 1h4a1 1 0 001-1v-4h6v4a1 1 0 001 1h4a1 1 0 001-1V9M3 9h18',
  calendar: 'M8 3v3M16 3v3M4 9h16M5 6h14a1 1 0 011 1v13a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1z',
  chat: 'M8 12h8M8 8h8M4 4h16v12H8l-4 4V4z',
};

const coreFeatures = [
  {
    icon: 'ticket',
    accent: 'teal',
    title: 'Repair Ticket Management',
    desc: 'Create, assign, and track every phone repair from intake to pickup with full context on one ticket.',
    tags: ['Multi-device tickets', 'Pre/post repair photos', 'Diagnostic & staff notes', 'Calendar view and ticket workflows', 'Custom statuses with color labels'],
  },
  {
    icon: 'cube',
    accent: 'lime',
    title: 'Inventory Management',
    desc: 'Track every LCD, batteries, charging ports, and accessories down to the unit with real visibility across stores.',
    tags: ['Low-stock alerts', 'Barcode scan and labels', 'Serialized parts tracking', 'Cross-store stock view', 'Inventory valuation and refurb tracking'],
  },
  {
    icon: 'card',
    accent: 'dark',
    title: 'POS Built for Repairs',
    desc: 'A POS that understands repair tickets, labor, parts, taxes, repair estimates, and tax invoices.',
    tags: ['Customer-facing display and self check-in', 'Estimates, refunds, and exchanges', 'Split payments and bill payments', 'Loyalty programs and gift cards', 'Recurring billing module'],
  },
  {
    icon: 'users',
    accent: 'teal',
    title: 'CRM and Customer Tracking',
    desc: 'Every customer profile shows every device they brought in and how much they spent, making follow-ups easier.',
    tags: ['Customer groups and third-party billing', 'Purchase history and device linkage', 'Flagged notes and document upload', 'B2B portal for enterprise clients', 'Auto SMS and email notifications'],
  },
  {
    icon: 'chart',
    accent: 'lime',
    title: 'Reporting and Analytics',
    desc: 'Real-time reports on sales, repairs, profit margins, and store-by-store performance, allowing you to make decisions with data.',
    tags: ['Multi-Store performance report', 'Sales and tickets insights', 'Custom sales report', 'Inventory and RMA report', 'QuickBooks and Xero export report'],
  },
  {
    icon: 'refresh',
    accent: 'dark',
    title: 'Trade-in and Buyback',
    desc: 'Turn used phones into resale inventory with consistent pricing, refurb workflows, and VAT margin rules built-in.',
    tags: ['Website buyback widget', 'Refurb workflow', 'VAT-margin support', 'Reusely integration', 'Condition and resale tracking'],
  },
  {
    icon: 'badge',
    accent: 'teal',
    title: 'Employee Management',
    desc: 'Assign roles and permissions, switch staff profiles with a 4-digit access PIN, and track clock-in and clock-out with timesheets and shifts.',
    tags: ['Access roles and permissions', 'Commission tracking and payroll', 'Clock-in/Clock-out', 'Shift scheduling', 'Activity log and productivity report'],
  },
  {
    icon: 'megaphone',
    accent: 'lime',
    title: 'Marketing Automation',
    desc: 'Send the right follow ups automatically, so reviews grow, and past customers keep returning to your store.',
    tags: ['Campaigner module', 'Automated follow-ups via SMS and email', 'Mailchimp integration', 'Reviews management system', 'Google My Business and Facebook integration'],
  },
  {
    icon: 'store',
    accent: 'dark',
    title: 'Multi-Store Management',
    desc: 'Manage multiple locations from one dashboard with shared inventory visibility and store-level control.',
    tags: ['Centralized multi-store dashboard', 'Inter-store inventory transfer', 'Franchise management', 'Inter-company billing', 'Store-level permissions'],
  },
  {
    icon: 'calendar',
    accent: 'teal',
    title: 'Leads & Appointments',
    desc: 'Capture repair requests, book jobs faster, and convert inquiries into tickets without losing details.',
    tags: ['Appointment Pro online booking', 'Email and SMS alerts', 'RepairDesk Forms', 'Mail-in repair suite', 'Lead-to-ticket flow'],
  },
  {
    icon: 'chat',
    accent: 'lime',
    title: 'Unified Communication',
    desc: 'Keep calls, texts, and messages tied to the ticket, with customer details and history visible so replies stay fast and accurate.',
    tags: ['RepairDesk Connect inbox', 'Two-way SMS', 'Google My Business integration', 'Facebook Messenger integration'],
  },
];

const accentClasses = {
  teal: { bg: 'bg-rd-teal/10', text: 'text-rd-teal', ring: 'group-hover:ring-rd-teal/30' },
  lime: { bg: 'bg-rd-lime/25', text: 'text-rd-dark', ring: 'group-hover:ring-rd-lime/40' },
  dark: { bg: 'bg-rd-dark/10', text: 'text-rd-dark', ring: 'group-hover:ring-rd-dark/20' },
};

const testimonials = [
  {
    quote:
      'Our experience with RepairDesk has been a really exciting advancement for our business. While there was a transition period moving to the new system, the positive and cooperative attitude of the company is one that we really admire. Usman and his team go out of their way to assist their customers and are open to feedback and integrating new ideas into their software, as well as providing an extensive knowledge base and tailored support for your business model. Cannot recommend these guys enough for all the hard work and grit they pour into their software.',
    name: 'Simon Nash',
    title: 'Owner, The iPhone Guy',
  },
  {
    quote:
      'We had good experience working with the team at RepairDesk in switching everything over from Quickbooks. This software is what I always dreamed of creating for my business. Thank you for all your help and continued improvements with RepairDesk!',
    name: 'Lyle Schrock',
    title: 'Owner, The Lab',
  },
];

function Icon({ name, className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      <path strokeLinecap="round" strokeLinejoin="round" d={iconPaths[name]} />
    </svg>
  );
}

function StarRow({ className = 'text-rd-lime' }) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 1.5l2.7 5.9 6.3.6-4.8 4.3 1.4 6.2L10 15.3l-5.6 3.2 1.4-6.2L1 8l6.3-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function CellPhoneRepairPage() {
  return (
    <PageLayout>
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden bg-rd-dark text-white pt-16 pb-28 md:pt-24 md:pb-36 px-6">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rd-teal/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-rd-lime/10 blur-3xl" />

        <div className="container-main relative grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
              Cell Phone Repair Shop Software
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-tight mb-6">
              Built for Faster Tickets, Checkout, and Inventory Management
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-7 max-w-xl">
              Faster booking, repair tickets, invoicing, and inventory tracking in one flow.
            </p>
            <ul className="space-y-3 mb-9 max-w-xl">
              {heroBullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-rd-lime/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/85 font-dm-sans text-[15px] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-8 py-3.5">Book a Free Demo</Link>
              <Link to="/pricing" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">See Pricing</Link>
            </div>
          </div>

          {/* Right: illustrative ticket mockup */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-white text-rd-dark rounded-xl px-4 py-2.5 shadow-xl z-10 hidden sm:flex flex-col items-center">
              <StarRow className="text-rd-teal" />
              <span className="text-xs font-poppins font-bold mt-1">4.7/5 Capterra</span>
            </div>
            <div className="absolute -bottom-6 -right-4 bg-white text-rd-dark rounded-xl px-4 py-2.5 shadow-xl z-10 hidden sm:flex flex-col items-center">
              <StarRow className="text-rd-teal" />
              <span className="text-xs font-poppins font-bold mt-1">4.9/5 Trustpilot</span>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-6 relative">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Icon name="ticket" className="w-5 h-5 text-rd-teal" />
                  <span className="font-poppins font-bold text-rd-dark text-sm">Repair Ticket #10482</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wide bg-rd-lime/30 text-rd-dark px-2.5 py-1 rounded-full">In Progress</span>
              </div>
              <div className="space-y-3 mb-5">
                {[
                  { icon: 'card', label: 'Device', value: 'iPhone 14 Pro — Screen Replacement' },
                  { icon: 'cube', label: 'Parts', value: 'OLED Assembly · In stock' },
                  { icon: 'chat', label: 'Customer update', value: 'SMS sent: "Ready for pickup"' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3 bg-rd-cream rounded-lg px-3 py-2.5">
                    <Icon name={row.icon} className="w-4 h-4 text-rd-teal shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-wide text-gray-400 font-dm-sans">{row.label}</p>
                      <p className="text-xs text-rd-dark font-dm-sans font-medium truncate">{row.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <div className="flex -space-x-1.5">
                  {['Intake', 'Repair', 'QC', 'Checkout'].map((s, i) => (
                    <div key={s} className={`w-2.5 h-2.5 rounded-full ${i < 3 ? 'bg-rd-teal' : 'bg-gray-200'}`} title={s} />
                  ))}
                </div>
                <span className="font-poppins font-bold text-rd-dark text-sm">$129.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar — overlapping the hero */}
        <div className="container-main relative mt-14 md:mt-16">
          <div className="bg-white rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {stats.map((s) => (
              <div key={s.label} className="p-6 md:p-7 flex flex-col items-center text-center">
                {s.stars && <StarRow className="text-rd-teal mb-1.5" />}
                <span className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark">{s.value}</span>
                <span className="text-gray-500 font-dm-sans text-xs md:text-sm mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= TRUSTED BY ========================= */}
      <section className="bg-white pt-16 md:pt-20 pb-14 px-6">
        <div className="container-main text-center">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Trusted By</span>
          <h2 className="font-poppins font-semibold text-2xl md:text-3xl text-rd-dark mb-10">
            3000+ Repair Stores Run on RepairDesk
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {trustedByLogos.map((l) => (
              <img
                key={l.alt}
                src={l.logo}
                alt={l.alt}
                className="h-8 md:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== THE DAILY PRESSURE ===================== */}
      <section className="bg-rd-dark text-white py-20 md:py-24 px-6">
        <div className="container-main grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-4">The Daily Pressure</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl leading-tight mb-5">
              A Busy Phone Repair Shop Can Turn Into Chaos Fast
            </h2>
            <p className="text-white/70 font-dm-sans text-base leading-relaxed mb-8">
              On a packed day, phone repair moves at the speed of your workflow. Every intake, every status change, and every part pull has to stay tight, or the counter backs up, and the bench slows down.
            </p>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-6 md:p-7">
              <p className="text-white font-dm-sans text-base md:text-lg leading-relaxed">
                When your workflow cracks under pressure, the gaps get expensive.{' '}
                <span className="text-rd-lime font-semibold">RepairDesk keeps repairs, inventory, and checkout connected</span>, so your shop stays in control.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pressurePoints.map((p, i) => (
                <div
                  key={i}
                  className={`bg-white text-rd-dark rounded-lg p-4 shadow-xl transform ${p.rotate} hover:rotate-0 hover:scale-[1.03] transition-transform ${i === pressurePoints.length - 1 ? 'sm:col-span-2 sm:max-w-[70%] sm:mx-auto' : ''}`}
                >
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <p className="text-sm font-dm-sans leading-snug">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =================== THE CONNECTED WORKFLOW =================== */}
      <section className="bg-white py-20 md:py-24 px-6">
        <div className="container-main">
          <div className="max-w-3xl mb-14">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-4">The Connected Workflow</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">
              One System for Every Phone Repair, Every Part, and Every Checkout
            </h2>
            <p className="text-gray-500 font-dm-sans text-lg leading-relaxed">
              From cracked screens and battery swaps to charge port fixes and diagnostics, the work moves fast on a busy bench. RepairDesk keeps the full job in one place, from intake to pickup, with tickets, inventory, customer updates, and checkout working together.
            </p>
          </div>

          <div className="relative max-w-3xl">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-rd-teal via-rd-teal/40 to-transparent" />
            <div className="space-y-8">
              {workflowSteps.map((step, i) => (
                <div key={i} className="relative flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-rd-teal text-white flex items-center justify-center shrink-0 text-sm font-bold font-poppins ring-4 ring-white z-10">
                    {i + 1}
                  </div>
                  <div className="bg-rd-cream rounded-xl px-5 py-4 flex-1">
                    <p className="text-rd-dark font-dm-sans text-[15px] leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link to="/contact" className="btn-primary px-8 py-3.5">Book a Free Demo</Link>
          </div>
        </div>
      </section>

      {/* ========================= CORE FEATURES ========================= */}
      <section className="bg-rd-cream py-20 md:py-24 px-6">
        <div className="container-main">
          <div className="max-w-3xl mb-14">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-4">Core Features</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">
              Everything You Need to Run a Fast, Profitable Cell Phone Repair Shop
            </h2>
            <p className="text-gray-500 font-dm-sans text-lg leading-relaxed">
              Phone repair is detailed work. Your software should keep up. These are the core tools RepairDesk brings together so that tickets, parts, customers, and checkout stay connected during the daily rush.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map((f) => {
              const a = accentClasses[f.accent];
              return (
                <div
                  key={f.title}
                  className={`group bg-white rounded-2xl p-6 shadow-sm ring-1 ring-transparent hover:shadow-lg ${a.ring} transition-all duration-300`}
                >
                  <div className={`w-11 h-11 rounded-xl ${a.bg} flex items-center justify-center mb-4`}>
                    <Icon name={f.icon} className={`w-5 h-5 ${a.text}`} />
                  </div>
                  <h3 className="font-poppins font-bold text-rd-dark text-base mb-2">{f.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-4">{f.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-[11px] font-dm-sans font-medium px-2.5 py-1 rounded-full ${a.bg} ${a.text}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================= TESTIMONIALS ========================= */}
      <section className="bg-gradient-to-br from-rd-dark to-[#014a50] py-20 md:py-24 px-6">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-4">What Repair Shops Say</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white max-w-2xl mx-auto">
              Shops Trust RepairDesk to Keep Every Repair Moving
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-7 md:p-8 flex flex-col">
                <svg className="w-8 h-8 text-rd-lime mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.5 7C6.5 7 4 9.5 4 12.5S6.5 18 9.5 18h.3c-.6 1.6-2 2.8-3.8 3v2c3.4-.3 6-3.2 6-6.7V12c0-2.8-2.2-5-4.5-5zm9 0c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5h.3c-.6 1.6-2 2.8-3.8 3v2c3.4-.3 6-3.2 6-6.7V12c0-2.8-2.2-5-4.5-5z" />
                </svg>
                <p className="text-white/85 font-dm-sans text-sm md:text-[15px] leading-relaxed italic mb-6 flex-1">
                  {t.quote}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div>
                    <p className="font-poppins font-semibold text-rd-lime text-sm">{t.name}</p>
                    <p className="text-white/60 text-xs font-poppins">{t.title}</p>
                  </div>
                  <StarRow />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= READY TO UPGRADE ======================= */}
      <section className="bg-rd-lime py-16 md:py-20 px-6">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-2">
              Ready to Upgrade Your Cell Phone Repair Shop?
            </h2>
            <p className="text-rd-dark/70 font-dm-sans text-base">
              Join thousands of repair stores running faster tickets, checkout, and inventory on RepairDesk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/contact" className="bg-rd-dark text-white px-7 py-3.5 rounded-full font-poppins font-semibold hover:bg-rd-dark-teal transition-colors whitespace-nowrap">
              Book a Free Demo
            </Link>
            <Link to="/pricing" className="border-2 border-rd-dark text-rd-dark px-7 py-3.5 rounded-full font-poppins font-semibold hover:bg-rd-dark hover:text-white transition-colors whitespace-nowrap">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
