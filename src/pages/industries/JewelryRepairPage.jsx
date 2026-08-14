import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const GOLD = '#D4AF37';

/* ---------- decorative + content icons ---------- */

const IconGem = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8.5L8 4h8l4 4.5-9.5 11L4 8.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8.5h16M8 4l2 4.5-3.5 11M16 4l-2 4.5 3.5 11M8.5 8.5l3.5 11 3.5-11" />
  </svg>
);

const IconTicket = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 100-4V8z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6v12" strokeDasharray="2 2" />
  </svg>
);

const IconLink = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l6-6M10 6l1-1a4 4 0 115.5 5.5l-1.5 1.5m-3 3l-1.5 1.5A4 4 0 015 12l1-1" />
  </svg>
);

const IconBox = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8" />
  </svg>
);

const IconPOS = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="5" width="18" height="13" rx="2" strokeLinejoin="round" />
    <path strokeLinecap="round" d="M3 10h18M7 14h2M12 14h5" />
  </svg>
);

const IconInvoice = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h10a1 1 0 011 1v16l-3-2-2 2-2-2-2 2-3-2V4a1 1 0 011-1z" />
    <path strokeLinecap="round" d="M9 8h6M9 12h6" />
  </svg>
);

const IconChain = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="8" cy="8" r="3.5" />
    <circle cx="16" cy="16" r="3.5" />
    <path strokeLinecap="round" d="M10.5 10.5l3 3" />
  </svg>
);

const IconCard = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path strokeLinecap="round" d="M3 10h18" />
  </svg>
);

const IconXero = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M8 8l8 8M16 8l-8 8" />
  </svg>
);

const IconSMS = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H8l-5 4V6a2 2 0 012-2h14a2 2 0 012 2v9z" />
  </svg>
);

const IconForm = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path strokeLinecap="round" d="M8 8h8M8 12h8M8 16h5" />
  </svg>
);

const IconChecklist = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l1.5 1.5L14 4M9 12l1.5 1.5L14 10M9 18l1.5 1.5L14 16" />
    <path strokeLinecap="round" d="M17 6h2M17 12h2M17 18h2" />
  </svg>
);

const IconTag = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.6 12.6L12 21.2a2 2 0 01-2.8 0l-6.4-6.4a2 2 0 010-2.8L11.4 3.4a2 2 0 011.4-.6H19a2 2 0 012 2v6.4a2 2 0 01-.4 1.4z" />
    <circle cx="15" cy="8" r="1.5" />
  </svg>
);

const IconDashboard = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M7 19V9m5 10V5m5 14v-7" />
  </svg>
);

const IconCalendar = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path strokeLinecap="round" d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);

const IconCheckin = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 21a9 9 0 100-18 9 9 0 000 18z" />
  </svg>
);

const IconPhone = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5c0 8.837 6.163 15 15 15l2-3.5-5-2-1.5 2A12.4 12.4 0 018.5 10L10.5 8.5l-2-5L5 4a1 1 0 00-1 1z" />
  </svg>
);

const IconStar = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z" />
  </svg>
);

const IconNote = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h9l3 3v15H6V3z" />
    <path strokeLinecap="round" d="M9 8h6M9 12h6M9 16h4" />
  </svg>
);

const IconBell = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9a6 6 0 1112 0c0 3.5 1 5 2 6H4c1-1 2-2.5 2-6zM10 19a2 2 0 004 0" />
  </svg>
);

const IconChat = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a8 8 0 10-3.5 6.6L21 20l-1-3.4A7.96 7.96 0 0021 12z" />
  </svg>
);

const IconTracker = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3.5 2" />
  </svg>
);

const IconUsers = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1M10 12a4 4 0 100-8 4 4 0 000 8zM17 8a3 3 0 010 6M21 21v-1a3.5 3.5 0 00-2.5-3.4" />
  </svg>
);

const IconCoin = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M12 7v10M9.5 9.5c0-1.4 1.2-2.2 2.5-2.2s2.5.8 2.5 2c0 2.6-5 1.6-5 4.2 0 1.3 1.2 2 2.5 2s2.5-.7 2.5-2" />
  </svg>
);

const IconGlobe = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18M12 3a13 13 0 010 18M12 3a13 13 0 000 18" />
  </svg>
);

const IconChevron = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

/* ---------- content data (verbatim from repairhub.co) ---------- */

const painPoints = [
  {
    icon: IconTicket,
    title: 'Manage Repair Tickets',
    desc: 'An efficient ticket management system to streamline operations at your repair shop. Upload pre-repair images, get digital signatures of your customers, highlight overdue tasks, and assign repair jobs to different technicians.',
  },
  {
    icon: IconLink,
    title: 'Multiple Integrations Options',
    desc: "Use the software to suit your shop's operations by integrating it with WooCommerce, RepairHub payments, and SMS integration. Keep your transactions updated, get paid faster, and connect with the customers.",
  },
  {
    icon: IconBox,
    title: 'Streamlined Inventory Management',
    desc: 'Seamlessly manage parts and accessories and retail sales. Get automated notification alerts whenever you are low on stock and order products from your desired vendors.',
  },
];

const repairAndSell = [
  {
    icon: IconTicket,
    title: 'Ticketing System',
    desc: 'Create tickets faster with repair details, customer notes, pre-repair images and checklist. Also, notify customers of the job status via SMS and Email.',
  },
  {
    icon: IconPOS,
    title: 'POS System',
    desc: 'Why just repairs? Sell your gems, necklace, gold items, trade-ins, and other items like watches and keychains all within the same jewelry repair shop software.',
  },
  {
    icon: IconBox,
    title: 'Products Inventory',
    desc: 'Manage your products with the least product training. Easily create variable products, SKUs, and repair parts for both your online and in-store products.',
  },
  {
    icon: IconInvoice,
    title: 'Billing & Invoicing',
    desc: 'Get your hard-earned money faster by using email invoices with a payment link! Plus, take payments from in-store customers for added convenience.',
  },
];

const integrations = [
  {
    icon: IconChain,
    title: 'WooCommerce Integration',
    desc: "With two-way sync, keep of your ecommerce transactions updated for both your online and in-store inventory. It's two-way, or no way!",
  },
  {
    icon: IconCard,
    title: 'Payments Integration',
    desc: 'Get paid faster by integrating the jewelry repair software with your favorite payments processor like Square and Stripe.',
  },
  {
    icon: IconXero,
    title: 'Xero Integration',
    desc: "Think of a personal assistant diligently reflecting all your transactions in your integrated Xero account. That's RepairHub!",
  },
  {
    icon: IconSMS,
    title: 'SMS Integration',
    desc: 'Connect with your favorite SMS provider and start sending job notifications, marketing campaigns, and more.',
  },
];

const flexible = [
  {
    icon: IconForm,
    title: 'Form Builder',
    desc: 'Create a specialized form for recording details that are only relevant to the specific repair item.',
  },
  {
    icon: IconChecklist,
    title: 'Pre-repair Checklist',
    desc: 'Customize the checklist of areas that require inspection before accepting a repair job.',
  },
  {
    icon: IconTag,
    title: 'Labels & Receipts',
    desc: 'Control what information you need to show on your printed labels and receipts. Print small-sized labels for professional jewelry tagging.',
  },
  {
    icon: IconDashboard,
    title: 'Dashboard',
    desc: "Spot improvement areas in your store's performance using 25+ analytical charts.",
  },
];

const labelStyles = [
  { title: 'Rat Tail Labels', desc: 'Perfect for pendants or rings.' },
  { title: 'Barbell Labels', desc: 'Great for tagging thin chains or small watches.' },
];

const marketing = [
  {
    icon: IconCalendar,
    title: 'Appointments Widget',
    desc: 'Turn website visitors into customers with our easy-to-use appointment scheduling widget.',
    link: 'Read More',
  },
  {
    icon: IconCheckin,
    title: 'Self Check-in',
    desc: "Convert more customers while you're busy with the one in queue. Let them self check-in for the repair and products quickly.",
    link: 'Read More',
  },
  {
    icon: IconPhone,
    title: 'Integrated Phone System',
    desc: 'Make the sales happen on the go with a single phone number for text and calls, mobile & web apps, and pop-up notifications.',
  },
  {
    icon: IconStar,
    title: 'Reviews Campaign',
    desc: 'Let the word of mouth reach more customers. Send a review request to the customers against each repair job using your favorite integrated SMS provider.',
  },
];

const customerRelations = [
  {
    icon: IconNote,
    title: 'Diagnostic Notes',
    desc: "Protect yourself from potential liabilities- keep a log of all customer and technician information before starting the job. It'll be saved in the ticket and you can print it out for your records.",
  },
  {
    icon: IconBell,
    title: 'Job Notifications',
    desc: "Sending auto-notifications to your customers about the status of their repair job - now that's customer service!",
  },
  {
    icon: IconChat,
    title: 'Connect with Customers',
    desc: 'Get connected with your customers like never before! Talk, text, and get notified all in one place.',
  },
  {
    icon: IconTracker,
    title: 'Repair Tracker',
    desc: 'Keep your customers always in the loop with updates and expected arrival times for their tickets, right from your website.',
  },
];

const companyStats = [
  { icon: IconUsers, label: 'Happy Customers' },
  { icon: IconCoin, label: 'Payment Processed' },
  { icon: IconGlobe, label: 'Countries' },
];

const faqs = [
  {
    q: 'How to choose a good Jewelry POS system for repair stores?',
    a: 'A good POS system for jewelry store manages the operations of both sales and repair services simultaneously. Instead of shifting to different modes of operation to look over tickets, repairs, sales, technicians, inventory, and billing, the POS combines them all under one roof.',
  },
  {
    q: 'How long do jewelry repair services take?',
    a: 'Simple repairs, such as polishing stones or replacing clasps, can take up to a few hours. Major repairs, such as stone replacements, restorations, or resizing, will take up to a few days, depending on the nature of the jewelry piece.',
  },
  {
    q: 'Can you track jewelry repair jobs with RepairHub?',
    a: "Yes, you can. RepairHub's jewelry repair tracking software creates digital tickets for every repair job. To determine the status of a specific repair, all you need to do is type the customer name or ticket ID in the Jewelry shop POS system.",
  },
  {
    q: 'Can I use the same system for repair services and jewelry sales?',
    a: 'You absolutely can. RepairHub combines jewelry repair store management and sales under one roof. You can sell jewelry, create tickets, track inventory, and track all progress from the same POS dashboard.',
  },
  {
    q: 'Can I set custom prices for jewelry repair and service using RepairHub?',
    a: 'Yes. RepairHub lets you set and adjust custom prices for every repair job and service item, so pricing always reflects the materials, labor, and complexity of the piece in front of you.',
  },
];

/* ---------- small building blocks ---------- */

const Eyebrow = ({ children, dark }) => (
  <div className="flex items-center gap-3 mb-4">
    <span className="w-8 h-px" style={{ backgroundColor: GOLD }} />
    <span
      className={`font-poppins text-xs font-bold uppercase tracking-[0.2em] ${dark ? 'text-white/70' : ''}`}
      style={!dark ? { color: GOLD } : undefined}
    >
      {children}
    </span>
  </div>
);

function JewelCard({ icon: Icon, title, desc, link, index }) {
  return (
    <div className="relative bg-white rounded-2xl p-7 border border-[#e9e2c8] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div
        className="absolute -top-4 -left-1 w-8 h-8 rounded-full flex items-center justify-center font-poppins text-xs font-bold text-rd-dark shadow"
        style={{ backgroundColor: GOLD }}
      >
        {index}
      </div>
      <div className="w-12 h-12 rounded-xl bg-rd-teal/10 flex items-center justify-center mb-5 text-rd-teal">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-poppins font-semibold text-lg text-rd-dark mb-2">{title}</h3>
      <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-4">{desc}</p>
      {link && (
        <a href="#" className="inline-flex items-center gap-1 font-poppins text-sm font-semibold" style={{ color: GOLD }}>
          {link}
          <IconChevron className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

export default function JewelryRepairPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative bg-rd-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(circle at 15% 20%, rgba(212,175,55,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(1,109,116,0.6), transparent 50%)',
          }}
        />
        <div className="absolute top-10 right-10 opacity-10 hidden md:block">
          <IconGem className="w-56 h-56" />
        </div>
        <div className="container-main relative z-10 py-24 px-6 max-w-3xl">
          <span
            className="inline-flex items-center gap-2 text-[11px] font-poppins font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border"
            style={{ borderColor: GOLD, color: GOLD }}
          >
            <IconGem className="w-4 h-4" />
            Jewelry Repair Shop Software
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
            Your Perfect Jewelry Store POS System
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">
            Simplify your jewelry repair, retail, and restoration operations with an all-in-one jewelry repair shop management software.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5">
              Start My Free Trial
            </a>
            <Link
              to="/contact"
              className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>
        <div className="relative z-10 border-t border-white/10 py-6 px-6">
          <p className="text-center text-white/40 font-poppins text-xs font-bold uppercase tracking-[0.3em]">Trusted By</p>
        </div>
      </section>

      {/* PAIN MANAGEMENT — vertical gold-numbered timeline */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <Eyebrow>Jewelry Repair Ticketing Software</Eyebrow>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Take the Pain Out of Repair Job Management
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-14 max-w-2xl">
            Stay ahead of the game with a ready-to-ticket software for managing your jewelry repair and restoration jobs. Using pre-set options, create a ticket to track your repairs, invoices, and customers.
          </p>

          <div className="relative">
            <div
              className="absolute left-6 top-2 bottom-2 w-px hidden md:block"
              style={{ background: `linear-gradient(to bottom, ${GOLD}, transparent)` }}
            />
            <div className="space-y-10">
              {painPoints.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="relative md:pl-20 flex flex-col md:flex-row md:items-start gap-5">
                    <div
                      className="hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-full items-center justify-center border-4 border-white shadow-md"
                      style={{ backgroundColor: GOLD }}
                    >
                      <Icon className="w-5 h-5 text-rd-dark" />
                    </div>
                    <div className="flex-1 bg-rd-cream rounded-2xl p-7">
                      <div className="flex items-center gap-3 mb-3 md:hidden">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: GOLD }}>
                          <Icon className="w-4 h-4 text-rd-dark" />
                        </div>
                      </div>
                      <h3 className="font-poppins font-bold text-xl text-rd-dark mb-2">{p.title}</h3>
                      <p className="text-gray-500 font-dm-sans leading-relaxed mb-3 max-w-2xl">{p.desc}</p>
                      <a href="#" className="inline-flex items-center gap-1 font-poppins text-sm font-semibold text-rd-teal">
                        Learn More <IconChevron className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* REPAIR AND SELL — jewel case grid */}
      <section className="bg-[#1e2035] py-20 px-6 text-white">
        <div className="container-main">
          <Eyebrow dark>Jewelry Repair Management Software</Eyebrow>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 max-w-2xl">Repair and Sell Jewelry in One place</h2>
          <p className="text-white/70 font-dm-sans text-lg mb-14 max-w-2xl">
            Start managing your repair &amp; restoration jobs using a jewelry repair ticket management system that also has a built-in POS for the retail side of your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repairAndSell.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="rounded-2xl p-7 bg-white/5 border border-white/10 hover:border-[#D4AF37]/60 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: GOLD }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-poppins font-semibold text-xl">{f.title}</h3>
                  </div>
                  <p className="text-white/70 font-dm-sans leading-relaxed mb-4">{f.desc}</p>
                  <a href="#" className="inline-flex items-center gap-1 font-poppins text-sm font-semibold" style={{ color: GOLD }}>
                    Learn More <IconChevron className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MAIL-IN REPAIR — split showcase */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-rd-teal rounded-3xl aspect-square max-w-sm mx-auto flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-6 rounded-2xl border" style={{ borderColor: 'rgba(212,175,55,0.4)' }} />
              <IconCalendar className="w-24 h-24 text-white/90" />
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full flex items-center justify-center"
                style={{ backgroundColor: GOLD }}
              >
                <IconTicket className="w-10 h-10 text-rd-dark" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 order-1 lg:order-2">
            <Eyebrow>Jewelry Mail-in Repair Management</Eyebrow>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Never Lose Track of Your Mail-in Repairs</h2>
            <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">
              Make your business thrive in the new world – go online with mail-in appointments through an integrated calendar on your website. Start responding to appointments, tracking tickets, notifying customers, and creating online and printed invoices – all within our jewelry repair business software.
            </p>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS — necklace chain */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <Eyebrow>Integrations for Jewelry Repair Shops</Eyebrow>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Stay Focused on Growth, not Legwork.</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-14 max-w-2xl">
            Save three hours every day to focus on your business growth while RepairHub automatically handles all the legwork for you.
          </p>

          <div className="relative">
            <div
              className="absolute top-8 left-8 right-8 h-px hidden lg:block"
              style={{ background: `linear-gradient(to right, transparent, ${GOLD}, ${GOLD}, transparent)` }}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {integrations.map((it) => {
                const Icon = it.icon;
                return (
                  <div key={it.title} className="flex flex-col items-center text-center relative">
                    <div
                      className="w-16 h-16 rounded-full bg-white border-2 flex items-center justify-center mb-5 relative z-10 shadow-sm"
                      style={{ borderColor: GOLD, color: GOLD }}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-poppins font-semibold text-rd-dark mb-2">{it.title}</h3>
                    <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-3">{it.desc}</p>
                    <a href="#" className="inline-flex items-center gap-1 font-poppins text-xs font-semibold text-rd-teal">
                      Learn More <IconChevron className="w-3.5 h-3.5" />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FLEXIBLE / SCALABLE — jewel cards with gold numbering */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <Eyebrow>Designed for Jewelry Repair Management</Eyebrow>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">It's Flexible. It's Scalable.</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-14 max-w-2xl">
            Make RepairHub handle the repair ticket workflow separately for each item like jewelry, watch, and keychain. You can easily adjust the system to suit your shop operations – the way you need it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
            {flexible.map((f, i) => (
              <JewelCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMIZED LABELS — actual tag shapes */}
      <section className="bg-rd-dark py-20 px-6 text-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Eyebrow dark>Customized Options</Eyebrow>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-5">Built For Jewelry Repairs</h2>
              <p className="text-white/70 font-dm-sans text-lg leading-relaxed">
                RepairHub supports "Rat Tail" and "Barbell" label templates, designed especially for delicate and small jewelry items. These tags ensure professional presentation and secure tagging. You can customize size, print layout, and even include logos or repair codes.
              </p>
            </div>
            <div className="flex flex-col gap-8 items-center">
              {labelStyles.map((label) => (
                <div key={label.title} className="flex items-center gap-4 w-full max-w-xs">
                  <div className="relative shrink-0">
                    <svg width="72" height="36" viewBox="0 0 72 36" fill="none">
                      <circle cx="10" cy="18" r="4" stroke={GOLD} strokeWidth="1.5" />
                      <path
                        d="M14 18h50a4 4 0 014 4v0a4 4 0 01-4 4H26l-12-8z"
                        stroke={GOLD}
                        strokeWidth="1.5"
                        fill="rgba(212,175,55,0.08)"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold" style={{ color: GOLD }}>
                      {label.title}
                    </h4>
                    <p className="text-white/70 font-dm-sans text-sm">{label.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARKETING */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <Eyebrow>Jewelry Repair Marketing Software</Eyebrow>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Attract More Customers</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-14 max-w-2xl">
            With the right tools by your side, convert more inquiries to tickets, close more sales calls, deliver a great customer experience, and collect good reviews.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketing.map((m, i) => (
              <JewelCard key={m.title} icon={m.icon} title={m.title} desc={m.desc} link={m.link} index={i + 1} />
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER RELATIONS */}
      <section className="bg-[#FAF9E3] py-20 px-6">
        <div className="container-main">
          <Eyebrow>Jewelry Repair Customer Management</Eyebrow>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Build Customer Relations</h2>
          <p className="text-gray-600 font-dm-sans text-lg mb-14 max-w-2xl">
            RepairHub isn't just built for helping you repair precious family heirlooms – it also lets you forge customer relationships as precious as any treasure you're tasked with fixing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerRelations.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-white rounded-2xl p-6 border-t-4" style={{ borderColor: GOLD }}>
                  <div className="w-11 h-11 rounded-full bg-rd-teal/10 flex items-center justify-center mb-4 text-rd-teal">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-2">{c.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="bg-[#1e2035] py-16 px-6 text-white">
        <div className="container-main text-center">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-4">You're in Great Company</h2>
          <p className="text-white/70 font-dm-sans max-w-2xl mx-auto mb-12">
            When you join RepairHub, you don't just get a software. You join a community of jewelry repair shop owners around the world who help you learn and grow your business.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {companyStats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="flex flex-col items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center border"
                    style={{ borderColor: GOLD, color: GOLD }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-poppins font-semibold uppercase tracking-wide text-sm text-white/80">{s.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-10 text-center">All the Answers You're Looking For</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-2xl border border-[#e9e2c8] px-6 py-5 open:shadow-md transition-shadow">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-poppins font-semibold text-rd-dark">
                  {f.q}
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform group-open:rotate-45"
                    style={{ backgroundColor: 'rgba(212,175,55,0.15)', color: GOLD }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                      <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 font-dm-sans text-sm leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
