import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ---------- Icon primitive ---------- */
function Icon({ paths, className = 'w-5 h-5', strokeWidth = 1.8 }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={strokeWidth}>
      {(Array.isArray(paths) ? paths : [paths]).map((d, i) => (
        <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />
      ))}
    </svg>
  );
}

const ICONS = {
  wrench: 'M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z',
  waiver: ['M9 12h6M9 16h4M7 4h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z', 'M14 4v5h5'],
  bell: 'M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  pin: ['M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z', 'M12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'],
  star: 'M12 3l2.6 5.9 6.4.6-4.9 4.3 1.5 6.3L12 17l-5.6 3.1 1.5-6.3-4.9-4.3 6.4-.6L12 3z',
  cart: ['M3 4h2l2.2 11.2a2 2 0 002 1.8h7.6a2 2 0 002-1.8L21 8H6', 'M9 20a1 1 0 100-2 1 1 0 000 2z', 'M17 20a1 1 0 100-2 1 1 0 000 2z'],
  alert: ['M12 9v4', 'M12 17h.01', 'M10.3 3.9L2.6 18a2 2 0 001.7 3h15.4a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z'],
  barcode: 'M4 5v14M8 5v14M11 5v14M15 5v14M18 5v14M21 5v14',
  clipboard: ['M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2', 'M9 5a2 2 0 012-2h2a2 2 0 012 2M9 5a2 2 0 002 2h2a2 2 0 002-2', 'M9 12h6M9 16h6'],
  chart: 'M4 20V10m6 10V4m6 16v-7m6 7V8',
  gauge: ['M12 22a10 10 0 100-20 10 10 0 000 20z', 'M12 12l4-3', 'M12 8v1'],
  lock: ['M6 11V8a6 6 0 1112 0v3', 'M5 11h14v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9z'],
  medal: ['M12 15a6 6 0 100-12 6 6 0 000 12z', 'M9 14.5L7 21l5-2.5L17 21l-2-6.5'],
  bolt: 'M13 3L4 14h6l-1 7 9-11h-6l1-7z',
  wireless: ['M5 12.5a10 10 0 0114 0', 'M8.5 15.9a5.5 5.5 0 017 0', 'M12 19.2h.01'],
  mail: ['M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z', 'M3 6l9 7 9-7'],
  shield: 'M12 3l8 3.5v5.4c0 5-3.4 8.4-8 9.6-4.6-1.2-8-4.6-8-9.6V6.5L12 3z',
  users: ['M9 11a3 3 0 100-6 3 3 0 000 6z', 'M3 20c0-3 2.7-5 6-5s6 2 6 5', 'M16 20c0-2.2-.8-3.9-2.2-5', 'M14 6a3 3 0 010 6'],
  spokeCheck: 'M5 13l4 4L19 7',
  route: ['M4 19c3 0 3-3 6-3s3 3 6 3 3-3 6-3', 'M4 5c3 0 3 3 6 3s3-3 6-3 3 3 6 3'],
  helmet: ['M4 15a8 8 0 0116 0v1H4v-1z', 'M2 16h20', 'M9 15a3 3 0 016 0'],
  arrow: 'M9 5l7 7-7 7',
  wheel: ['M12 2a10 10 0 100 20 10 10 0 000-20z', 'M12 9a3 3 0 100 6 3 3 0 000-6z', 'M12 2v7M12 15v7M4.2 7l6 3.5M13.8 13.5l6 3.5M4.2 17l6-3.5M13.8 10.5l6-3.5'],
};

/* ---------- Content ---------- */
const ticketChecklist = [
  'Link parts directly to service tickets',
  'Add diagnostic or private technician notes',
  'Record repair time against every job',
  'Oversee special part order requests',
  'Assign jobs to specific technicians',
  'Attach photos and documents to tickets',
];

const ticketSubFeatures = [
  {
    title: 'Digital Waiver',
    icon: ICONS.waiver,
    desc: "Minimize risks by obtaining digital signatures from your clients before or after the repair is completed, guaranteeing that bicycles are tailored to each client's specific requirements while protecting the interests of both parties.",
  },
  {
    title: 'Job Notifications',
    icon: ICONS.bell,
    desc: 'Keep customers informed at every step. Instantly send job updates via SMS and email whenever ticket status change and get notified immediately whenever customers respond.',
  },
  {
    title: 'Online Repair Tracker',
    icon: ICONS.pin,
    desc: 'Set up a repair tracker on your website so customers can check the status of their repairs by entering their ticket ID and last name.',
  },
  {
    title: 'Get More Reviews',
    icon: ICONS.star,
    desc: 'Automatically trigger an SMS with a review link after 24 hours of completing a repair job and send it to customers to rate your repair shop on Google.',
  },
];

const inventorySubFeatures = [
  {
    title: 'Low Stock Alerts',
    icon: ICONS.alert,
    desc: "Track what's on hand and receive alerts when your inventory is low so you can replenish stock.",
  },
  {
    title: 'Serialized Inventory',
    icon: ICONS.barcode,
    desc: 'Easily differentiate the same items from two vendors and trace your inventory from supplier to end customer.',
  },
  {
    title: 'Purchase Management',
    icon: ICONS.clipboard,
    desc: 'Create POs in seconds and quickly send them to QuickBooks or Xero to keep everything in sync. Automatically update inventory as items are received and eliminate double entry by directly passing purchase information into your accounting software.',
  },
];

const efficiencySubFeatures = [
  {
    title: 'Reporting',
    icon: ICONS.chart,
    desc: 'Stay on top of your shop operations and view key operational metrics, including sales, performance, order, and payment summaries, along with your most profitable line items.',
  },
  {
    title: 'Performance Monitoring',
    icon: ICONS.gauge,
    desc: 'Measure employee productivity with real-time performance insights. Track sales, repairs completed, and process payrolls.',
  },
  {
    title: 'Tiered Access Control',
    icon: ICONS.lock,
    desc: 'Control what each employee can see and do with customizable access to just the tools and data they need.',
  },
  {
    title: 'Loyalty Program',
    icon: ICONS.medal,
    desc: 'Use the RepairHub loyalty program to cultivate stronger relationships, grow repeat business, and increase lifetime value.',
  },
];

const paymentSubFeatures = [
  {
    title: 'Fast & Simple',
    icon: ICONS.bolt,
    desc: 'Accept all cards at the same rate and receive next-day settlements. There are no lock-in contracts or startup, ACH, or other fees. Fees are confusing, and we dislike them as much as you do.',
  },
  {
    title: 'In-Person Payments',
    icon: ICONS.wireless,
    desc: 'Use a Wireless terminal to accept chip cards, Apple Pay, and Google Pay.',
  },
  {
    title: 'Email Invoice With a Payment Link',
    icon: ICONS.mail,
    desc: 'Email invoices to customers, enabling them to e-sign and pay from any location.',
  },
  {
    title: 'PCI Compliant',
    icon: ICONS.shield,
    desc: 'Top-notch security is guaranteed by PCI compliance, enhanced by end-to-end encryption for every transaction.',
  },
];

const companyStats = [
  { stat: '3,000+', label: 'Happy Customers' },
  { stat: '50M+', label: 'Payment Processed' },
  { stat: '120+', label: 'Countries' },
];

const faqs = [
  {
    q: 'What Bicycle Repair Shop Software is Good for Scheduling a Service?',
    a: 'As a bicycle repair store owner, you have multiple options. However, RepairHub stands among all of them. It helps you schedule services, assign repairs to technicians, and track progress all from one place.',
  },
  {
    q: 'Does Bicycle Inventory Management Software Transfer Stock Between Locations as I Own Multiple Stores?',
    a: 'Yes, the software allows you to transfer inventory between locations if you own multiple repair shops, helping you keep everything synced.',
  },
  {
    q: 'Can I also Sell Bicycles Online if I use a POS at My Shop?',
    a: 'Yes. A bicycle repair shop POS software like RepairHub integrates with Shopify and WooCommerce, letting you sell bicycles and accessories online, and keeps your inventory and customer data synced.',
  },
  {
    q: 'What Bicycle Repair Shop Billing Software or Methods Can Help with Invoices and Repairs?',
    a: 'For a bicycle shop, a good POS system for repair shop should handle both invoicing and repairs. Among all the software available right now, RepairHub is one that checks all those boxes. It offers repair job management (tickets, assigning techs, notes), and invoices (digital invoices, payment links).',
  },
  {
    q: 'How can I Get Good Reviews for My Bicycle Repair Shop?',
    a: 'First, you need to offer great repair services and customer support. Secondly, you can get help from the RepairHub Google reviews automation tool. It helps you send a review link to your customers 24 hours after the repair is done. Thus, you can get more 5-star reviews and rank your store even better.',
  },
  {
    q: 'How Much Do I Have to Spend to Get Reliable Management Software for My Bicycle Shop?',
    a: "The cost of a bicycle repair shop software depends on your store's size and the features you need. When it comes to reliability and ease of use, there is nothing better than RepairHub, and you can get the subscription for $99/store per month. And if you go for the annual plan, you can get it for as low as $79.",
  },
  {
    q: 'Does RepairHub also Offer Customer Support?',
    a: 'Yes, we are available 24 hours, 6 days a week to serve you. You can connect with one of our product specialists or send us an email at support@repairhub.co, anytime you want.',
  },
];

/* ---------- Decorative bicycle wheel graphic ---------- */
function WheelGraphic({ className = '' }) {
  const spokes = Array.from({ length: 12 });
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <circle cx="100" cy="100" r="92" stroke="currentColor" strokeWidth="3" opacity="0.35" />
      <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
      <circle cx="100" cy="100" r="9" stroke="currentColor" strokeWidth="3" opacity="0.6" />
      {spokes.map((_, i) => {
        const angle = (i * 360) / spokes.length;
        const rad = (angle * Math.PI) / 180;
        const x2 = 100 + 88 * Math.cos(rad);
        const y2 = 100 + 88 * Math.sin(rad);
        const x1 = 100 + 10 * Math.cos(rad);
        const y1 = 100 + 10 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1.5" opacity="0.3" />;
      })}
    </svg>
  );
}

function FaqItem({ q, a, index, open, onToggle }) {
  return (
    <div className="border-b border-[#1e2035]/10 last:border-b-0">
      <button onClick={() => onToggle(index)} className="w-full flex items-center justify-between gap-4 text-left py-5">
        <span className="font-poppins font-semibold text-rd-dark text-base md:text-lg">{q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full bg-rd-teal/10 flex items-center justify-center transition-transform ${open ? 'rotate-45' : ''}`}>
          <Icon paths="M12 4v16m8-8H4" className="w-4 h-4 text-rd-teal" strokeWidth={2.5} />
        </span>
      </button>
      {open && <p className="text-gray-500 font-dm-sans text-sm leading-relaxed pb-5 pr-10">{a}</p>}
    </div>
  );
}

export default function BicycleRepairPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageLayout>
      {/* ===== HERO ===== */}
      <section className="bg-rd-dark text-white pt-20 pb-28 px-6 relative overflow-hidden">
        <WheelGraphic className="absolute -right-24 -top-24 w-[420px] h-[420px] text-rd-lime hidden md:block" />
        <WheelGraphic className="absolute -left-32 bottom-[-140px] w-72 h-72 text-rd-teal hidden lg:block" />
        <div className="container-main relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
            <Icon paths={ICONS.wheel || 'M12 2a10 10 0 100 20 10 10 0 000-20z'} className="w-3.5 h-3.5" strokeWidth={2.5} />
            Bicycle Repair Shop Software
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Take Control of Your Store with a Bicycle Shop POS System
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-4 max-w-2xl">
            With a single tool, manage every aspect of your bicycle repair shop, including technician tasks, quotes, special parts ordering, customer management, and more.
          </p>
          <p className="text-white/70 font-dm-sans leading-relaxed mb-8 max-w-2xl">
            Sell bicycles online by integrating with Shopify or WooCommerce and keep your inventory and customer data synced. Use QuickBooks or Xero integration for a seamless data flow.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary px-8 py-3.5">Request a Demo</Link>
            <a href="https://app.repairhub.co/register" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Free Trial</a>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-12 text-sm text-white/60 font-dm-sans">
            <span className="text-[11px] uppercase tracking-widest text-white/40">Syncs with</span>
            {['Shopify', 'WooCommerce', 'QuickBooks', 'Xero'].map((n) => (
              <span key={n} className="font-poppins font-semibold text-white/80">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== REPAIR JOB MANAGEMENT ===== */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr] gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">
                <Icon paths={ICONS.wrench} className="w-3.5 h-3.5" strokeWidth={2.2} />
                Repair Job Management
              </span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Track Every Repair with Ease</h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-4">
                Say goodbye to juggling between paper-based service request forms or using multiple systems that don't integrate. With RepairHub, all-in-one bicycle repair shop ticketing system, you can quickly access all job-related data to view job status, due dates, and overdue tasks in one place at a glance.
              </p>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">
                If a repair job needs additional work, email or text quotes to customers for easy acceptance or decline.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm">
              <p className="font-poppins font-semibold text-rd-dark mb-4">On every ticket, you can:</p>
              <ul className="space-y-3">
                {ticketChecklist.map((li) => (
                  <li key={li} className="flex items-start gap-3 text-gray-700 font-dm-sans text-sm">
                    <Icon paths={ICONS.spokeCheck} className="w-5 h-5 text-rd-teal shrink-0 mt-0.5" strokeWidth={2.5} />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {ticketSubFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-rd-teal/10 flex items-center justify-center mb-4">
                  <Icon paths={f.icon} className="w-5 h-5 text-rd-teal" />
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ORGANIZED INVENTORY ===== */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="flex items-start gap-2 mb-3">
            <Icon paths={ICONS.route} className="w-4 h-4 text-rd-teal" strokeWidth={2.2} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-rd-teal">Organized Inventory</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5 max-w-2xl">Easily Manage Your Bicycle Shop Inventory</h2>
          <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-10 max-w-2xl">
            From bicycles to kickstands and helmets, RepairHub allows you to effectively manage your inventory, ensuring you are always aware of what you have in stock and will need before demand arises.
          </p>

          <div className="rounded-3xl bg-[#FAF9E3] p-8 md:p-10 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-rd-dark flex items-center justify-center shrink-0">
              <Icon paths={ICONS.cart} className="w-6 h-6 text-rd-lime" />
            </div>
            <div>
              <h3 className="font-poppins font-bold text-rd-dark text-xl mb-2">Seamlessly Sell Bicycles Online</h3>
              <p className="text-gray-700 font-dm-sans leading-relaxed">
                Whether you prefer selling in-store or running an online store, RepairHub makes it super easy to sell online through its integration with Shopify and WooCommerce, which synchronizes your inventory and customer data between your point of sale and online store, so you always know exactly what you have in stock and prevent issues like double-selling.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {inventorySubFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-md hover:border-rd-teal/30 transition-all">
                <div className="w-11 h-11 rounded-xl bg-rd-teal/10 flex items-center justify-center mb-4">
                  <Icon paths={f.icon} className="w-5 h-5 text-rd-teal" />
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INCREASE EFFICIENCY ===== */}
      <section className="bg-rd-dark text-white py-16 md:py-24 px-6 relative overflow-hidden">
        <WheelGraphic className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 text-white hidden lg:block" />
        <div className="container-main relative z-10">
          <div className="max-w-2xl mb-14">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-3">
              <Icon paths={ICONS.gauge} className="w-3.5 h-3.5" strokeWidth={2.2} />
              Increase Efficiency
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-5">The Ultimate Solution to Elevate Your Bicycle Shop</h2>
            <p className="text-white/70 font-dm-sans text-lg leading-relaxed">
              Manage multiple stores easily and scale your business with enterprise-level reports and insights. See which items are selling best to make better, more informed decisions. You can also keep your employees and technicians organized with role-based access and performance tracking.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {efficiencySubFeatures.map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-rd-lime flex items-center justify-center mb-5">
                  <Icon paths={f.icon} className="w-5 h-5 text-rd-dark" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-white/60 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAYMENT INTEGRATIONS ===== */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="flex items-start gap-2 mb-3">
            <Icon paths={ICONS.wireless} className="w-4 h-4 text-rd-teal" strokeWidth={2.2} />
            <span className="text-[10px] font-bold uppercase tracking-widest text-rd-teal">Payment Integrations</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5 max-w-2xl">The Easy, Integrated Way to Take Payments</h2>
          <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-12 max-w-2xl">
            RepairHub provides a unified platform with Payments seamlessly integrated into your bicycle shop POS. This automates your payment process, reducing errors and quicker checkouts without manual entries. With RepairHub Integrated payment processing, you get:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {paymentSubFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#1e2035] flex items-center justify-center mb-4">
                  <Icon paths={f.icon} className="w-5 h-5 text-rd-lime" />
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TRUSTED / STATS ===== */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="rounded-3xl bg-[#1e2035] p-8 md:p-14 grid grid-cols-1 lg:grid-cols-[0.6fr_0.4fr] gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-3">
                <Icon paths={ICONS.users} className="w-3.5 h-3.5" strokeWidth={2.2} />
                You're in Great Company
              </span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-5">
                Trusted by More Than 3,000+ Repair Stores
              </h2>
              <p className="text-white/70 font-dm-sans leading-relaxed">
                When you join RepairHub, you don't just get a software. You join a community of bicycle repair shop owners around the world who help you learn and grow your business.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {companyStats.map((s) => (
                <div key={s.label} className="text-center bg-white/5 rounded-2xl py-6 px-2 border border-white/10">
                  <p className="font-poppins font-bold text-2xl md:text-3xl text-rd-lime mb-1">{s.stat}</p>
                  <p className="text-white/60 font-dm-sans text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main max-w-3xl">
          <div className="flex items-center gap-2 mb-10 justify-center">
            <Icon paths={ICONS.helmet} className="w-5 h-5 text-rd-teal" strokeWidth={2} />
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center">
              All the Answers You're Looking For
            </h2>
          </div>
          <div className="bg-white rounded-2xl px-6 md:px-10 py-2">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} index={i} open={openFaq === i} onToggle={(idx) => setOpenFaq(openFaq === idx ? null : idx)} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-rd-dark text-white py-16 md:py-20 px-6 relative overflow-hidden">
        <WheelGraphic className="absolute -left-20 -bottom-20 w-64 h-64 text-rd-teal hidden md:block" />
        <div className="container-main relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">Get Started with the #1 Repair Shop POS</h2>
          <p className="text-white/70 font-dm-sans leading-relaxed mb-8">
            RepairHub is a cloud-based point-of-sale software designed specifically for small and medium-sized repair shops, including computer, small engine, power tools, watch &amp; jewelry, shoe, e-bike, bicycle, wireless, camera, heavy-duty, and cell phone repair businesses. The software keeps track of inventory levels and notifies the business when a required part is running low and needs to be replenished, so they can order parts.
          </p>
          <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5 inline-block">Start Free Trial</a>
        </div>
      </section>
    </PageLayout>
  );
}
