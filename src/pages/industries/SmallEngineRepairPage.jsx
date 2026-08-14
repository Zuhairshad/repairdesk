import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ---------- Icons ---------- */
const Icon = {
  alert: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
    </svg>
  ),
  truck: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
    </svg>
  ),
  supplier: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2h4" />
    </svg>
  ),
  transfer: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
  clock: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0" />
    </svg>
  ),
  signature: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l4-1 10-10a2 2 0 10-3-3L4 13l-1 4zM15 6l3 3" />
    </svg>
  ),
  bell: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  star: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  template: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  tag: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  ),
  barcode: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M4 5v14M8 5v14M11 5v14M15 5v14M17 5v14M20 5v14" />
    </svg>
  ),
  puzzle: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.1 1.1" />
    </svg>
  ),
  bars: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm6 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10m10 0v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4" />
    </svg>
  ),
  gauge: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="13" r="8" strokeLinecap="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 13l4-4M12 3v2" />
    </svg>
  ),
  calendar: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  heart: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 10-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  bolt: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  shield: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z" />
    </svg>
  ),
  link: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-7 1l-1.5 1.5a3.536 3.536 0 105 5L13 14m-2-8l1.5-1.5a3.536 3.536 0 115 5L16 11" />
    </svg>
  ),
  wireless: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  card: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h5M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
    </svg>
  ),
  globe: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  team: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-4.13a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 10-8 0" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  check: (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  plus: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  ),
};

/* ---------- Hex icon frame — bolt-head shaped icon badge ---------- */
function HexIcon({ children, tone = 'teal' }) {
  const tones = {
    teal: 'bg-rd-teal/10 text-rd-teal',
    lime: 'bg-rd-lime/20 text-rd-mint',
    cream: 'bg-[#FAF9E3] text-rd-dark',
  };
  return (
    <div
      className={`w-12 h-12 flex items-center justify-center shrink-0 ${tones[tone]}`}
      style={{ clipPath: 'polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)' }}
    >
      {children}
    </div>
  );
}

/* ---------- Dashboard-style radial gauge ---------- */
function Gauge({ value }) {
  const r = 40;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div className="relative w-24 h-24 shrink-0">
      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#ffffff26" strokeWidth="9" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#457b9d"
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray={`${c} ${c}`}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-poppins font-bold text-white text-lg">{value}%</span>
      </div>
    </div>
  );
}

/* ---------- Data ---------- */
const inventoryItems = [
  {
    title: 'Low Stock Alert Notification',
    desc: 'Never run out of spark plugs or blades again — get automatic low stock alerts when any repair part or product falls below your desired quantity.',
    icon: Icon.alert,
  },
  {
    title: 'Track Special Part Order',
    desc: "With AA Repairdesk, you can track every custom part request from order to arrival. Whether you're sourcing rare carburetors, ignition coils, or gaskets, our system makes sure nothing gets overlooked.",
    icon: Icon.truck,
  },
  {
    title: 'Supplier Management',
    desc: 'Save your suppliers and vendors details, manage purchase orders, and reorder inventory directly from the software — no need for spreadsheets.',
    icon: Icon.supplier,
  },
  {
    title: 'Transfer Inventory from Store A to B',
    desc: 'Easily transfer stock from store A to B and keep everything synced across the board.',
    icon: Icon.transfer,
  },
];

const workflowSteps = [
  { n: '01', label: 'Intake', desc: 'Log the engine model, serial number, and service history.' },
  { n: '02', label: 'Diagnosis', desc: 'Add internal notes and upload photos of the issue.' },
  { n: '03', label: 'Repair', desc: 'Assign the ticket to a technician and log time on the job.' },
  { n: '04', label: 'Notify', desc: 'Send status updates to customers by email or SMS.' },
  { n: '05', label: 'Pickup', desc: 'Collect a digital signature and close out the ticket.' },
];

const repairFeatures = [
  {
    title: 'Time Tracking',
    desc: 'With built-in time tracking, technicians can log hours directly against repair tickets, helping you understand labor costs, improve productivity, and bill accurately.',
    icon: Icon.clock,
  },
  {
    title: 'Get Digital Signatures from Customers',
    desc: 'Get digital signatures from your customers before and after the repair to avoid any future arguments, and issues.',
    icon: Icon.signature,
  },
  {
    title: 'Job Notifications',
    desc: 'Keep your customers in the loop through SMS or email notifications that help reduce no-shows, boost satisfaction, and build trust with timely, professional communication that saves you time and keeps your repair shop running smoothly.',
    icon: Icon.bell,
  },
  {
    title: 'Get More Reviews',
    desc: 'Automatically send an SMS with your Google profile link 24 hours after you complete a repair job to encourage customers to rate your repair shop on Google.',
    icon: Icon.star,
  },
];

const workSmarterItems = [
  {
    title: 'Repair Templates',
    desc: 'Save time by using ready-made templates for common jobs like blade sharpening, oil changes, or spark plug replacements. No need to fill out details from scratch every time.',
    icon: Icon.template,
  },
  {
    title: 'Custom Fields for Equipment Tracking',
    desc: 'Track what matters most to you. Add custom fields for equipment type, engine model, serial number, or last serviced date.',
    icon: Icon.tag,
  },
  {
    title: 'Barcode & RFID Tagging',
    desc: 'Tag each machine with a barcode or RFID label to quickly scan, look up past work, and speed up intake.',
    icon: Icon.barcode,
  },
  {
    title: 'Supported Integrations',
    desc: 'Get QuickBooks, Google Calendar/Outlook, and service recall reminders integrations for fast, error-free accounting and appointment scheduling.',
    icon: Icon.puzzle,
  },
];

const stayInChargeItems = [
  {
    title: 'See Reports to Decide your Next Move',
    desc: 'View key operational metrics, including sales, order, payment summaries, and your most profitable line items to decide what to do next.',
    icon: Icon.bars,
    value: 96,
  },
  {
    title: 'Performance Monitoring',
    desc: "Get detailed insights on technicians' productivity — daily, weekly, or monthly — to pay them fair wages and commissions.",
    icon: Icon.gauge,
    value: 100,
  },
  {
    title: 'Track Attendance',
    desc: 'Allow your employees to clock in and out directly from small engine repair shop management software and track their work hours.',
    icon: Icon.calendar,
    value: 100,
  },
  {
    title: 'Know Your Loyal Customers',
    desc: 'Leverage the AA Repairdesk Loyalty program to know about your loyal clients. Offer them loyalty points to grow repeat business.',
    icon: Icon.heart,
    value: 92,
  },
];

const paymentItems = [
  {
    title: 'Fast & Simple',
    desc: 'Accept all cards at the same rate and receive next-day settlements. There are no lock-in contracts or startup, ACH, or other fees. Fees are confusing, and we dislike them as much as you do.',
    icon: Icon.bolt,
  },
  {
    title: 'Secure & Compliant',
    desc: 'Every transaction at your repair shop is encrypted and PCI-compliant, so your shop stays protected.',
    icon: Icon.shield,
  },
  {
    title: 'One-Click Invoicing with a Payment Link',
    desc: 'Generate and email professional invoices to your customers and allow them to pay from anywhere.',
    icon: Icon.link,
  },
  {
    title: 'In-Person Payments',
    desc: 'Use a wireless terminal to accept chip cards, Apple Pay, and Google Pay.',
    icon: Icon.wireless,
  },
];

const trustBadges = [
  { label: 'Happy Customers', icon: Icon.users },
  { label: 'Payment Processed', icon: Icon.card },
  { label: 'Countries', icon: Icon.globe },
  { label: 'Dedicated Employees', icon: Icon.team },
];

const faqs = [
  {
    q: 'Can I Track Different Types of Small Engines using POS Software?',
    a: 'Yes, AA Repairdesk small engine repair shop software allows you to track different types of small engines such as lawnmowers, generators, snowblowers, etc.',
  },
  {
    q: 'Does Small Engine Repair Business Software Offer Integration with QuickBooks and Google Calendar?',
    a: 'Yes, you can integrate your small engine repair business software with your favourite tools such as QuickBooks, and Google Calendar for fast, error-free accounting, and appointment scheduling. However, not every system available in the market does that but AA Repairdesk. So, it would be a good pick for you.',
  },
  {
    q: 'My Repair Technicians are not very Techy. Is Small Engine Repair Shop Software Easy for them to Learn?',
    a: 'AA Repairdesk is an all in one management software for small engine repair shops designed with a simple user interface so that anyone can use it with just a little training.',
  },
  {
    q: 'Can I get Low Inventory Notifications and Transfer Stock Between Locations if I use the Best Small Engine Repair Shop POS?',
    a: 'Yes, the best small engine repair shop POS always notifies you when you are running low on parts and accessories such as carburetors, spark plugs, ignition coils, or gaskets. Also, you can transfer inventory from one store to another and keep everything synced.',
  },
  {
    q: 'What is a Repair Template Feature in a Small Engine Shop POS System and How Does it Work?',
    a: "In software for small engine repair shops, you can use ready-made templates for common repair jobs like blade sharpening, oil changes, or spark plug replacements. This way, you don't have to fill out details from scratch.",
  },
  {
    q: 'Can I Generate Invoices and send them over to My Customers?',
    a: 'Yes, you can create professional invoices and email them to your customers along with a payment link.',
  },
  {
    q: 'How Can Lawnmowers and Small Engine Repair Shops Manage the Workloads?',
    a: "To manage workload, small engine and lawnmowers repair shop owners can leverage a POS software that will help them manage repairs, inventory, enhance customer communication and get all the payments on time. This way, they don't have to worry about handling the admin work.",
  },
  {
    q: 'Do You Also Offer Customer Support?',
    a: 'Yes. Our customer support is top-notch and always available to help you setup, and troubleshoot whenever you need 24 hours, 6 days a week. You can give us a call, chat with one of our product specialists, or send us an email at support@aarepairdesk.co',
  },
];

export default function SmallEngineRepairPage() {
  return (
    <PageLayout>
      <style>{`
        @keyframes rd-spin-slow { to { transform: rotate(360deg); } }
        @keyframes rd-spin-slow-rev { to { transform: rotate(-360deg); } }
      `}</style>

      {/* ============ HERO — workshop blueprint ============ */}
      <section className="bg-rd-dark text-white pt-20 pb-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div
          className="absolute -right-24 -top-20 w-96 h-96 text-white/[0.04] pointer-events-none"
          style={{ animation: 'rd-spin-slow 30s linear infinite' }}
        >
          {Icon.gear}
        </div>
        <div
          className="absolute -left-16 bottom-0 w-56 h-56 text-white/[0.05] pointer-events-none"
          style={{ animation: 'rd-spin-slow-rev 24s linear infinite' }}
        >
          {Icon.gear}
        </div>
        <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #457b9d 0 10px, #1e2035 10px 20px)' }} />

        <div className="container-main grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-poppins font-bold uppercase tracking-widest bg-rd-lime text-white px-4 py-1.5 rounded-full mb-6">
              <span className="w-4 h-4">{Icon.gear}</span>
              Small Engine Repair Shop Software
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-[2.7rem] leading-tight mb-6">
              Built for Repair Shops That Service Lawnmowers, Chainsaws, Snowblowers, Pressure Washers, Generators & More
            </h1>
            <p className="text-white/75 font-dm-sans text-lg leading-relaxed mb-6">
              Simplify repairs, inventory, customers, and employees all from a single platform.
            </p>
            <ul className="space-y-3 mb-8 font-dm-sans">
              <li className="flex items-start gap-3 text-white/85">
                <span className="w-5 h-5 rounded-full bg-rd-teal flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white">{Icon.check}</span>
                </span>
                Send repair quotes to your customers so they can approve or decline.
              </li>
              <li className="flex items-start gap-3 text-white/85">
                <span className="w-5 h-5 rounded-full bg-rd-teal flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-white">{Icon.check}</span>
                </span>
                Use integrated payments to accept both in-person and online payments.
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.aarepairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
              <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
            </div>
          </div>

          {/* Service tag mockup — hangs like a tag tied to a machine */}
          <div className="relative flex justify-center md:justify-end">
            <div className="w-1 h-10 bg-white/30 rounded-full mb-[-2px] mx-auto md:mr-10" />
            <div className="absolute top-8 left-1/2 md:left-auto md:right-10 -translate-x-1/2 md:translate-x-0 w-3 h-3 rounded-full border-2 border-white/40 bg-rd-dark" />
            <div className="bg-[#FAF9E3] text-rd-dark rounded-2xl p-6 shadow-2xl rotate-2 relative w-full max-w-sm mt-6">
              <div className="flex items-center justify-between mb-4 border-b border-rd-dark/10 pb-3">
                <span className="font-poppins font-bold text-sm">Service Tag</span>
                <span className="text-[10px] font-dm-sans bg-rd-teal text-white px-2 py-0.5 rounded-full">Ticket #5563</span>
              </div>
              <div className="space-y-1.5 mb-4 font-dm-sans text-xs text-rd-dark/60">
                <p><span className="font-semibold text-rd-dark">Equipment:</span> Toro 21" Push Mower</p>
                <p><span className="font-semibold text-rd-dark">Serial No:</span> LM-88231</p>
                <p><span className="font-semibold text-rd-dark">Issue:</span> Won't start / fuel line</p>
              </div>
              <ul className="space-y-2.5 font-dm-sans text-sm">
                {['Parts ordered — carburetor kit', 'Assigned to technician', 'Customer notified via SMS'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rd-teal flex items-center justify-center shrink-0">
                      <span className="text-white">{Icon.check}</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-5 -left-2 md:left-0 bg-rd-teal text-white rounded-xl px-5 py-3 shadow-xl -rotate-3 font-poppins font-semibold text-sm hidden sm:block">
              Quote approved by customer ✓
            </div>
          </div>
        </div>
      </section>

      {/* ============ INVENTORY — parts bin shelf ============ */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <div>
              <span className="text-rd-teal font-poppins font-bold text-xs uppercase tracking-widest">Smart Inventory Management</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3">Inventory Chaos? Not Anymore.</h2>
            </div>
            <div className="pt-1 md:pt-9">
              <p className="text-gray-600 font-dm-sans leading-relaxed mb-3">
                Never run out of spark plugs, mower blades, or oil filters again. Get low stock alerts before you're empty. Our software for lawn mower and small engine repair shops enables you to stay on top of your inventory all the time.
              </p>
              <p className="text-gray-600 font-dm-sans leading-relaxed">
                Order repair parts from your preferred suppliers, helping you stay organized, save time, and make more informed purchasing decisions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {inventoryItems.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 flex gap-5 shadow-sm border-t-4 border-rd-teal">
                <HexIcon>{item.icon}</HexIcon>
                <div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-1.5">{item.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REPAIR JOB MANAGEMENT — conveyor workflow ============ */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="max-w-2xl mb-14">
            <span className="text-rd-teal font-poppins font-bold text-xs uppercase tracking-widest">Repair Job Management</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3 mb-5">Take Control of Every Repair Job</h2>
            <p className="text-gray-600 font-dm-sans leading-relaxed mb-3">
              With AA Repairdesk small engine repair shop software, you can track engine models, serial numbers, and service history for every customer.
            </p>
            <p className="text-gray-600 font-dm-sans leading-relaxed mb-3">
              Create, manage, and track each repair ticket from intake to pickup. Assign repairs to technicians, update job statuses, add internal notes, upload photos, and send job notifications via email or SMS to keep your customers informed.
            </p>
            <p className="text-gray-600 font-dm-sans leading-relaxed">
              If a job requires additional work, send email quotes to customers for easy acceptance or rejection.
            </p>
          </div>

          {/* Conveyor-belt ticket flow */}
          <div className="mb-16 overflow-x-auto">
            <div className="flex items-start gap-0 min-w-[640px] md:min-w-0">
              {workflowSteps.map((step, i) => (
                <React.Fragment key={step.n}>
                  <div className="flex flex-col items-center text-center w-32 shrink-0">
                    <div className="w-14 h-14 rounded-full bg-rd-dark text-rd-mint flex items-center justify-center font-poppins font-bold text-sm border-4 border-rd-cream mb-3">
                      {step.n}
                    </div>
                    <h4 className="font-poppins font-semibold text-rd-dark text-sm mb-1">{step.label}</h4>
                    <p className="text-gray-500 font-dm-sans text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <div className="flex-1 h-14 flex items-center min-w-[24px]">
                      <div className="w-full border-t-2 border-dashed border-rd-teal/40" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {repairFeatures.map((f) => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center shrink-0 transition-colors">
                  <span className="text-rd-teal group-hover:text-white transition-colors">{f.icon}</span>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-1.5">{f.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WORK SMARTER — pegboard tools ============ */}
      <section className="bg-rd-dark text-white py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}
        />
        <div className="container-main relative z-10">
          <div className="max-w-2xl mb-14">
            <span className="text-rd-mint font-poppins font-bold text-xs uppercase tracking-widest">Work Smarter</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mt-3 mb-5">Built for Small Engine Repair Workflows</h2>
            <p className="text-white/70 font-dm-sans leading-relaxed">
              AA Repairdesk isn't just generic repair software — it's built for how your shop actually works. These tools and integrations help you work faster, stay accurate, and deliver a better customer experience every time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {workSmarterItems.map((item) => (
              <div key={item.title} className="relative pt-5">
                <div className="w-3 h-3 rounded-full bg-rd-cream mx-auto mb-1 shadow-[0_0_0_3px_rgba(255,255,255,0.15)]" />
                <div className="w-px h-4 bg-white/25 mx-auto" />
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors h-full">
                  <div className="w-11 h-11 rounded-xl bg-rd-lime/20 text-rd-mint flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-poppins font-semibold mb-1.5 text-sm">{item.title}</h3>
                  <p className="text-white/60 font-dm-sans text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STAY IN CHARGE — gauge dashboard ============ */}
      <section className="bg-[#1e2035] text-white py-20 px-6">
        <div className="container-main">
          <div className="max-w-2xl mb-14">
            <span className="text-rd-mint font-poppins font-bold text-xs uppercase tracking-widest">Stay in Charge</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mt-3 mb-5">Smarter Reports, Better Team Control</h2>
            <p className="text-white/70 font-dm-sans leading-relaxed">
              Keep your shop accountable with reporting and employee management software. Track performance of your employees, monitor sales, and spot bottlenecks efficiently. Set role-based access, reward your top-performing employees, and visualize your growth with stats and data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stayInChargeItems.map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-center gap-6">
                <Gauge value={item.value} />
                <div>
                  <div className="flex items-center gap-2 mb-1.5 text-rd-mint">{item.icon}
                    <h3 className="font-poppins font-semibold text-white text-sm">{item.title}</h3>
                  </div>
                  <p className="text-white/60 font-dm-sans text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EARN FASTER — payments ============ */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="max-w-2xl mb-14">
            <span className="text-rd-teal font-poppins font-bold text-xs uppercase tracking-widest">Earn Faster</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3 mb-5">Integrated Payments That Just Work Your Way</h2>
            <p className="text-gray-600 font-dm-sans leading-relaxed mb-4">
              AA Repairdesk integrates with Stripe and Square, trusted by thousands of small engine repair shops. This automates your payment process, reducing errors and speeding up checkouts without manual entries. With AA Repairdesk Integrated payment processing, you get:
            </p>
            <div className="flex gap-3">
              <span className="text-xs font-dm-sans font-semibold bg-white text-rd-dark rounded-full px-4 py-1.5 shadow-sm">Stripe</span>
              <span className="text-xs font-dm-sans font-semibold bg-white text-rd-dark rounded-full px-4 py-1.5 shadow-sm">Square</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {paymentItems.map((item) => (
              <div key={item.title} className="bg-[#1e2035] text-white rounded-2xl p-7">
                <HexIcon tone="lime">{item.icon}</HexIcon>
                <h3 className="font-poppins font-semibold mt-4 mb-1.5">{item.title}</h3>
                <p className="text-white/60 font-dm-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section className="bg-white py-16 px-6 border-y border-gray-100">
        <div className="container-main text-center">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-3">You're in Great Company</h2>
          <p className="text-gray-500 font-dm-sans max-w-2xl mx-auto mb-10">
            When you join AA Repairdesk, you don't just get software designed for small engine repair shops, but a global community of repair business owners who help you grow and understand your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2.5 bg-rd-cream text-rd-dark rounded-full px-6 py-3">
                <span className="text-rd-teal">{b.icon}</span>
                <span className="font-poppins font-semibold text-sm">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-10 text-center">All the Answers You're Looking For</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="group bg-white rounded-xl p-5 open:shadow-md">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-poppins font-semibold text-rd-dark">
                  {item.q}
                  <span className="shrink-0 text-rd-teal transition-transform group-open:rotate-45">{Icon.plus}</span>
                </summary>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="bg-rd-teal text-white py-16 px-6">
        <div className="container-main text-center max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-5">Power Up Your Small Engine Repair Shop with the #1 Repair POS</h2>
          <p className="text-white/80 font-dm-sans leading-relaxed mb-8">
            AA Repairdesk is a cloud-based point-of-sale software designed specifically for small and medium-sized repair shops, including computer, small engine, power tools, watch & jewelry, shoe, e-bike, bicycle, wireless, camera, heavy-duty, and cell phone repair businesses. The software keeps track of inventory levels and notifies the business when a required part is running low and needs to be replenished, so they can order parts.
          </p>
          <a href="https://app.aarepairdesk.co/register" className="inline-block bg-white text-rd-dark px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-rd-cream transition-colors">Start Free Trial</a>
        </div>
      </section>
    </PageLayout>
  );
}
