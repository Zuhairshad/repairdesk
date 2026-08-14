import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

/* ---------- POS Terminal SVG (Hero illustration) ---------- */
const POSTerminal = () => (
  <svg viewBox="0 0 320 400" className="w-full max-w-xs mx-auto drop-shadow-2xl" fill="none">
    {/* Terminal body */}
    <rect x="30" y="20" width="260" height="360" rx="24" fill="#1e2035" />
    <rect x="30" y="20" width="260" height="360" rx="24" stroke="#1a5c5f" strokeWidth="2" />
    {/* Screen bezel */}
    <rect x="50" y="44" width="220" height="180" rx="12" fill="#2d2f45" />
    {/* Screen */}
    <rect x="58" y="52" width="204" height="164" rx="8" fill="#e0faf4" />
    {/* Screen content - transaction lines */}
    <rect x="72" y="68" width="90" height="8" rx="4" fill="#3d405b" opacity="0.6" />
    <rect x="200" y="68" width="48" height="8" rx="4" fill="#3d405b" opacity="0.4" />
    <rect x="72" y="88" width="70" height="8" rx="4" fill="#3d405b" opacity="0.5" />
    <rect x="200" y="88" width="40" height="8" rx="4" fill="#3d405b" opacity="0.35" />
    <rect x="72" y="108" width="110" height="8" rx="4" fill="#3d405b" opacity="0.45" />
    <rect x="200" y="108" width="52" height="8" rx="4" fill="#3d405b" opacity="0.3" />
    {/* Divider line */}
    <line x1="72" y1="132" x2="248" y2="132" stroke="#3d405b" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
    {/* Total */}
    <rect x="72" y="148" width="50" height="10" rx="5" fill="#3d405b" opacity="0.7" />
    <rect x="190" y="146" width="58" height="14" rx="7" fill="#3d405b" />
    <text x="219" y="157" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">$149.99</text>
    {/* Checkout button on screen */}
    <rect x="72" y="176" width="176" height="28" rx="14" fill="#D4F479" />
    <text x="160" y="195" textAnchor="middle" fill="#1e2035" fontSize="11" fontWeight="bold">COMPLETE SALE</text>
    {/* Keypad area */}
    {[0, 1, 2].map(row =>
      [0, 1, 2].map(col => (
        <rect
          key={`${row}-${col}`}
          x={80 + col * 56}
          y={244 + row * 36}
          width="44"
          height="26"
          rx="6"
          fill="#1a5c5f"
          stroke="#2a7a7d"
          strokeWidth="1"
        />
      ))
    )}
    {/* Card reader slot */}
    <rect x="110" y="236" width="100" height="4" rx="2" fill="#D4F479" opacity="0.5" />
    {/* LED indicator */}
    <circle cx="160" cy="232" r="3" fill="#D4F479">
      <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/* ---------- Receipt-shaped card (for case study) ---------- */
const ReceiptCard = ({ children, className = '' }) => (
  <div className={`relative ${className}`}>
    {/* Zigzag top edge */}
    <svg className="w-full h-4 text-white" viewBox="0 0 400 16" preserveAspectRatio="none">
      {Array.from({ length: 20 }).map((_, i) => (
        <polygon key={i} points={`${i * 20},16 ${i * 20 + 10},0 ${i * 20 + 20},16`} fill="currentColor" />
      ))}
    </svg>
    <div className="bg-white px-6 md:px-10 py-8">{children}</div>
    {/* Zigzag bottom edge */}
    <svg className="w-full h-4 text-white" viewBox="0 0 400 16" preserveAspectRatio="none">
      {Array.from({ length: 20 }).map((_, i) => (
        <polygon key={i} points={`${i * 20},0 ${i * 20 + 10},16 ${i * 20 + 20},0`} fill="currentColor" />
      ))}
    </svg>
  </div>
);

/* ---------- FAQ data ---------- */
const faqs = [
  {
    q: 'What is a repair shop POS system?',
    a: 'A repair shop POS (Point of Sale) system is software designed to manage all aspects of a repair business — from creating repair tickets and tracking jobs to processing payments and managing inventory. RepairHub\'s POS is built specifically for repair shops, unlike generic retail POS systems.',
  },
  {
    q: 'Does RepairHub POS work for multiple store locations?',
    a: 'Yes! RepairHub supports multiple store locations from a single account. You can manage inventory, staff, reports, and repair tickets across all your locations and see unified data in one dashboard.',
  },
  {
    q: 'Can I use RepairHub POS on a tablet or iPad?',
    a: 'RepairHub is a cloud-based POS that works in any modern web browser, including on iPad and Android tablets. You can run it on a desktop computer, laptop, or tablet — whatever works best for your counter setup.',
  },
  {
    q: 'Does RepairHub integrate with payment processors?',
    a: 'Yes, RepairHub integrates with several payment solutions including RepairHub Payments (our preferred solution), Square, Paymentsense (UK/Ireland), and Tyro (Australia). You can accept cash, cards, contactless payments, and payment links.',
  },
  {
    q: 'How does repair ticket management work?',
    a: 'When a customer brings in a device, you create a repair ticket directly from the POS. You choose the device, log the problem, assign a technician, and set a due date. Customers receive automatic SMS/email updates as the status changes, and can track their repair online.',
  },
  {
    q: 'Can I sell accessories and devices alongside repairs?',
    a: 'Absolutely. RepairHub POS handles both retail sales and repair services. You can sell accessories, pre-owned devices, gift cards, and prepaid PINs all from the same checkout screen.',
  },
  {
    q: 'Is there a free trial available?',
    a: 'Yes, RepairHub offers a free trial so you can explore all the POS features, set up your inventory, and see how it works with your workflow before committing.',
  },
];

function FaqAccordion({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 py-5 text-left group"
      >
        {/* Toggle indicator styled as a receipt bullet */}
        <span className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${isOpen ? 'bg-rd-teal text-white' : 'bg-rd-cream text-rd-teal'}`}>
          <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
        <span className="font-poppins font-semibold text-rd-dark text-[15px] group-hover:text-rd-teal transition-colors">{q}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5' : 'max-h-0'}`}>
        <p className="font-dm-sans text-sm text-gray-600 leading-relaxed pl-11">{a}</p>
      </div>
    </div>
  );
}

/* ---------- Conveyor belt feature item ---------- */
function ConveyorItem({ icon, title, desc, index }) {
  return (
    <div className="flex flex-col items-center text-center relative group">
      {/* Connector line (not on first item) */}
      {index > 0 && (
        <div className="hidden lg:block absolute -left-1/2 top-8 w-full h-0.5 bg-gradient-to-r from-rd-lime/60 to-rd-teal/30" />
      )}
      {/* Step circle */}
      <div className="relative z-10 w-16 h-16 rounded-2xl bg-white shadow-lg border-2 border-rd-teal/20 flex items-center justify-center mb-4 group-hover:border-rd-teal group-hover:shadow-xl transition-all duration-300">
        {icon}
      </div>
      <h4 className="font-poppins font-semibold text-rd-dark text-sm mb-1">{title}</h4>
      <p className="font-dm-sans text-gray-500 text-xs leading-relaxed max-w-[180px]">{desc}</p>
    </div>
  );
}

/* ========== Main Page ========== */
export default function PointOfSalePage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ===== HERO: Split with POS terminal mockup ===== */}
      <section className="relative overflow-hidden bg-rd-dark">
        {/* Background pattern - subtle grid lines like a register display */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(#D4F479 1px, transparent 1px), linear-gradient(90deg, #D4F479 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        <div className="container-main relative z-10 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-rd-lime/15 border border-rd-lime/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-rd-lime animate-pulse" />
                <span className="font-poppins text-rd-lime text-xs font-semibold tracking-wide uppercase">Point of Sale</span>
              </div>
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] mb-6">
                POS Software Built for <span className="text-rd-lime">Repair Shops</span>
              </h1>
              <p className="font-dm-sans text-lg text-white/70 leading-relaxed max-w-lg mb-10">
                From inventory and billing to customer management and integrations, everything you need is built into one streamlined checkout. You focus on repairs &mdash; we handle the rest.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="inline-flex items-center gap-2 bg-rd-lime text-rd-dark font-poppins font-semibold px-7 py-3.5 rounded-full hover:bg-[#e2ff8a] transition-colors">
                  Start Free Trial
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <Link to="/demo" className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white font-poppins font-semibold px-7 py-3.5 rounded-full transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  Watch Demo
                </Link>
              </div>
              {/* Trust micro-stats */}
              <div className="flex gap-8 mt-12">
                {[
                  { val: '5,000+', label: 'Repair Shops' },
                  { val: '2.5x', label: 'Faster Checkout' },
                  { val: '99.9%', label: 'Uptime' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="font-poppins font-bold text-rd-lime text-2xl">{s.val}</div>
                    <div className="font-dm-sans text-white/50 text-xs mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: POS terminal illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow behind terminal */}
                <div className="absolute -inset-12 bg-rd-teal/20 rounded-full blur-3xl" />
                <POSTerminal />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 1: Speed Checkout - Conveyor Belt Flow ===== */}
      <section className="bg-rd-cream py-20 md:py-24">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-poppins text-rd-teal text-xs font-bold tracking-[0.2em] uppercase">Faster Checkout</span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mt-3 mb-4">
              Checkout More Customers in Less Time
            </h2>
            <p className="font-dm-sans text-gray-500 leading-relaxed">
              Every step from walk-in to payment is connected in one seamless flow &mdash; no switching tabs, no duplicate entry.
            </p>
          </div>

          {/* Conveyor belt: horizontal step flow */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            <ConveyorItem
              index={0}
              title="Self Check-In"
              desc="Customers enter their own details before reaching the counter."
              icon={<svg className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>}
            />
            <ConveyorItem
              index={1}
              title="Pre-Repair Checklist"
              desc="Log device condition before any work begins."
              icon={<svg className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
            />
            <ConveyorItem
              index={2}
              title="Repair Ticket"
              desc="Create tickets, assign techs, and set due dates in clicks."
              icon={<svg className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" /></svg>}
            />
            <ConveyorItem
              index={3}
              title="CRM Capture"
              desc="Emails and phone numbers saved automatically for return visits."
              icon={<svg className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" /></svg>}
            />
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Payments - Stacked Card Layers ===== */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: stacked payment cards visual */}
            <div className="relative flex justify-center" aria-hidden="true">
              <div className="relative w-72 h-80">
                {/* Card 4 (deepest) */}
                <div className="absolute bottom-0 left-6 right-6 h-44 rounded-2xl bg-gradient-to-br from-rd-dark to-rd-teal/80 transform rotate-[-6deg] shadow-lg" />
                {/* Card 3 */}
                <div className="absolute bottom-4 left-4 right-4 h-44 rounded-2xl bg-gradient-to-br from-rd-teal to-[#02878f] transform rotate-[-3deg] shadow-lg" />
                {/* Card 2 */}
                <div className="absolute bottom-8 left-2 right-2 h-44 rounded-2xl bg-gradient-to-br from-[#02a0a9] to-rd-teal transform rotate-[1deg] shadow-lg" />
                {/* Card 1 (top) */}
                <div className="absolute bottom-12 left-0 right-0 h-44 rounded-2xl bg-gradient-to-br from-rd-lime to-[#c5e86a] shadow-xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="font-poppins font-bold text-rd-dark text-lg">RepairHub</div>
                    {/* Contactless icon */}
                    <svg className="w-8 h-8 text-rd-dark/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-dm-sans text-rd-dark/60 text-xs tracking-[0.25em]">**** **** **** 4829</div>
                    <div className="font-dm-sans text-rd-dark/40 text-xs mt-1">REPAIR CUSTOMER</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: payment features */}
            <div>
              <span className="font-poppins text-rd-teal text-xs font-bold tracking-[0.2em] uppercase">Payments</span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mt-3 mb-4">
                Payments for Repair Shops, Done Right
              </h2>
              <p className="font-dm-sans text-gray-500 leading-relaxed mb-8">
                Accept every payment method your customers prefer &mdash; from contactless tap to partial deposits &mdash; without juggling multiple systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { title: 'Contactless Payments', desc: 'RFID tap, Apple Pay, Google Pay, or email payment links.', accent: 'bg-rd-teal' },
                  { title: 'Partial Payments', desc: 'Let customers split bills across multiple payment methods.', accent: 'bg-emerald-500' },
                  { title: 'Upfront Deposits', desc: 'Collect deposits before starting repairs to protect your time.', accent: 'bg-amber-500' },
                  { title: 'Estimates & Invoices', desc: 'Send quotes via email and convert to invoices in one click.', accent: 'bg-violet-500' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3">
                    <span className={`w-1.5 self-stretch rounded-full ${item.accent} flex-shrink-0`} />
                    <div>
                      <h4 className="font-poppins font-semibold text-rd-dark text-sm mb-0.5">{item.title}</h4>
                      <p className="font-dm-sans text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Customer Retention - Loyalty Flywheel ===== */}
      <section className="bg-rd-dark py-20 md:py-24 overflow-hidden">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-poppins text-rd-lime text-xs font-bold tracking-[0.2em] uppercase">Customer Retention</span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
              Tools to Help You Retain Customers
            </h2>
            <p className="font-dm-sans text-white/50 leading-relaxed">
              Turn one-time visitors into lifelong patrons with a built-in loyalty loop.
            </p>
          </div>

          {/* Flywheel diagram */}
          <div className="relative max-w-xl mx-auto">
            {/* Outer ring (decorative) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" aria-hidden="true">
              <circle cx="250" cy="250" r="210" fill="none" stroke="#1a5c5f" strokeWidth="1" strokeDasharray="8 6" />
              <circle cx="250" cy="250" r="160" fill="none" stroke="#1a5c5f" strokeWidth="1" />
              {/* Animated orbit dot */}
              <circle r="5" fill="#D4F479">
                <animateMotion dur="8s" repeatCount="indefinite" path="M250,40 A210,210 0 1,1 249.9,40" />
              </circle>
            </svg>

            {/* Center label */}
            <div className="relative z-10 flex flex-col items-center justify-center py-12">
              <div className="w-28 h-28 rounded-full bg-rd-teal/30 border-2 border-rd-lime/40 flex items-center justify-center mb-8">
                <div className="text-center">
                  <div className="font-poppins font-bold text-rd-lime text-xl leading-none">Loyal</div>
                  <div className="font-dm-sans text-white/60 text-[10px] mt-1">Customer</div>
                </div>
              </div>

              {/* Four flywheel nodes */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {[
                  {
                    title: 'Loyalty Program',
                    desc: 'Points on every purchase that drive repeat visits.',
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>,
                  },
                  {
                    title: 'Store Credits',
                    desc: 'Issue credits instead of cash refunds to keep revenue in-store.',
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>,
                  },
                  {
                    title: 'Warranty Claims',
                    desc: 'Built-in tracking so claims are handled fairly and fast.',
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
                  },
                  {
                    title: 'Easy Refunds',
                    desc: 'Process returns with or without restocking fees, no friction.',
                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" /></svg>,
                  },
                ].map(item => (
                  <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-rd-teal/30 text-rd-lime flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <h4 className="font-poppins font-semibold text-white text-sm mb-1">{item.title}</h4>
                    <p className="font-dm-sans text-white/40 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Upsell - Get More Out Of Your Customers ===== */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-poppins text-rd-teal text-xs font-bold tracking-[0.2em] uppercase">Upselling</span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mt-3 mb-4">
                Get More Out of Every Transaction
              </h2>
              <p className="font-dm-sans text-gray-500 leading-relaxed mb-8">
                Boost your average order value without extra effort &mdash; RepairHub suggests accessories, bundles, and group discounts right at the point of sale.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Sell Bundles & Accessories', desc: 'Combine screen protectors, cases, and repairs into discounted bundles that customers love.' },
                  { title: 'Customer Group Discounts', desc: 'Create VIP, wholesale, or loyalty groups with automatic pricing tiers that drive repeat business.' },
                  { title: 'Smart Accessory Prompts', desc: 'The POS suggests relevant add-ons during checkout so your staff never forgets to upsell.' },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-rd-lime text-rd-dark flex items-center justify-center font-poppins font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-rd-dark text-sm mb-0.5">{item.title}</h4>
                      <p className="font-dm-sans text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: mini bar chart visual showing revenue uplift */}
            <div className="bg-rd-cream rounded-3xl p-8 md:p-10" aria-hidden="true">
              <div className="font-poppins font-bold text-rd-dark text-sm mb-6">Average Order Value</div>
              <div className="flex items-end gap-4 h-52">
                {[
                  { label: 'Repair Only', pct: 35, color: 'bg-gray-300' },
                  { label: '+ Accessories', pct: 55, color: 'bg-rd-teal/60' },
                  { label: '+ Bundles', pct: 75, color: 'bg-rd-teal' },
                  { label: '+ Group Disc.', pct: 90, color: 'bg-rd-lime' },
                ].map(bar => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-2">
                    <div className={`w-full rounded-t-xl ${bar.color} transition-all duration-500`} style={{ height: `${bar.pct}%` }} />
                    <span className="font-dm-sans text-[10px] text-gray-500 text-center leading-tight">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: Revenue Streams - Ascending Steps ===== */}
      <section className="bg-rd-cream py-20 md:py-24">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-poppins text-rd-teal text-xs font-bold tracking-[0.2em] uppercase">Revenue Streams</span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mt-3 mb-4">
              Generate More Business With New Revenue Streams
            </h2>
            <p className="font-dm-sans text-gray-500 leading-relaxed">
              Your repair counter can do more than repairs. Unlock new income channels without adding complexity.
            </p>
          </div>

          {/* Ascending stair-step cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Pre-Owned Devices',
                desc: 'Buy, refurbish, and resell second-hand phones, tablets, and laptops.',
                step: 1,
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
              },
              {
                title: 'Gift Cards',
                desc: 'Offer digital or plastic gift cards that bring new faces through your door.',
                step: 2,
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>,
              },
              {
                title: 'Bill Payments',
                desc: 'Sell prepaid PINs for AT&T, T-Mobile, Boost, Verizon, and more carriers.',
                step: 3,
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" /></svg>,
              },
              {
                title: 'In-Line Discounts',
                desc: 'Run promotions and instant discounts that clear slow-moving inventory fast.',
                step: 4,
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" /></svg>,
              },
            ].map(item => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ marginTop: `${(item.step - 1) * 16}px` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rd-teal/10 text-rd-teal flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-poppins text-rd-teal/40 font-bold text-2xl">0{item.step}</span>
                </div>
                <h4 className="font-poppins font-semibold text-rd-dark mb-2">{item.title}</h4>
                <p className="font-dm-sans text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CASE STUDY: Receipt-Styled Card ===== */}
      <section className="bg-gradient-to-b from-[#f0f0f5] to-rd-cream py-20 md:py-24">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            <ReceiptCard>
              {/* Receipt header */}
              <div className="text-center border-b border-dashed border-gray-300 pb-6 mb-6">
                <div className="font-poppins font-bold text-rd-dark text-lg tracking-wide">REPAIRDESK</div>
                <div className="font-dm-sans text-gray-400 text-xs mt-1">*** CUSTOMER SUCCESS RECEIPT ***</div>
              </div>

              {/* Receipt body */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="font-dm-sans text-gray-500">Customer:</span>
                  <span className="font-poppins font-semibold text-rd-dark">Anthony Alfieri</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-dm-sans text-gray-500">Business:</span>
                  <span className="font-poppins font-semibold text-rd-dark">Multi-Location Repair Shop</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-dm-sans text-gray-500">Status:</span>
                  <span className="font-poppins font-semibold text-rd-teal">Transformed</span>
                </div>
              </div>

              <div className="border-t border-dashed border-gray-300 pt-6">
                <p className="font-dm-sans text-gray-600 text-sm leading-relaxed italic">
                  "RepairHub has completely transformed how we run our shop. From ticketing to payments to inventory &mdash; everything is in one place and it just works. I wouldn't go back to our old system for anything."
                </p>
              </div>

              {/* Barcode visual */}
              <div className="mt-8 flex justify-center" aria-hidden="true">
                <svg viewBox="0 0 200 40" className="w-48 text-gray-300">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <rect key={i} x={i * 6.5 + 2} y="0" width={i % 3 === 0 ? 3 : 1.5} height="30" fill="currentColor" />
                  ))}
                  <text x="100" y="38" textAnchor="middle" fill="#999" fontSize="6" fontFamily="monospace">RD-POS-SUCCESS-001</text>
                </svg>
              </div>
            </ReceiptCard>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="bg-rd-teal py-16 md:py-20">
        <div className="container-main">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
            {/* Avatar placeholder */}
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <span className="font-poppins font-bold text-white text-2xl">PH</span>
            </div>
            <div>
              <svg className="w-8 h-8 text-rd-lime/60 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="font-dm-sans text-white/90 text-lg leading-relaxed mb-4">
                "The POS is incredibly intuitive. My team was up and running in a day, and our checkout time dropped by half. The integrated payments and ticketing alone saved us from three separate subscriptions."
              </p>
              <div>
                <span className="font-poppins font-semibold text-rd-lime">Peter Haydon</span>
                <span className="font-dm-sans text-white/50 text-sm ml-2">CEO, Technology Traders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: heading */}
            <div className="lg:col-span-2">
              <span className="font-poppins text-rd-teal text-xs font-bold tracking-[0.2em] uppercase">FAQ</span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mt-3 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="font-dm-sans text-gray-500 leading-relaxed mb-6">
                Everything you need to know about RepairHub's POS system. Can't find an answer?
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 font-poppins font-semibold text-rd-teal text-sm hover:underline">
                Contact Support
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            {/* Right: accordion */}
            <div className="lg:col-span-3">
              {faqs.map((faq, i) => (
                <FaqAccordion
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="relative overflow-hidden bg-rd-dark py-20 md:py-24">
        {/* Decorative register grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#D4F479 1px, transparent 1px), linear-gradient(90deg, #D4F479 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />
        <div className="container-main relative z-10 text-center">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Checkout?
          </h2>
          <p className="font-dm-sans text-white/60 text-lg max-w-xl mx-auto mb-10">
            Join thousands of repair shops worldwide who use RepairHub POS every day to run a faster, smarter business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 bg-rd-lime text-rd-dark font-poppins font-semibold px-8 py-4 rounded-full hover:bg-[#e2ff8a] transition-colors"
            >
              Start Free Trial
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center gap-2 border border-white/25 hover:border-white/60 text-white font-poppins font-semibold px-8 py-4 rounded-full transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
