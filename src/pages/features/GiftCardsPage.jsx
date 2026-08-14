import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'Can customers redeem gift cards at any of my locations?', a: 'Yes. RepairHub gift cards work across every store linked to your account. A card sold at one location can be redeemed at any other, making them perfect for multi-location repair businesses.' },
  { q: 'How do digital gift cards get delivered?', a: 'Digital gift cards are emailed instantly to the recipient with a unique QR code. The email template is fully customizable with your branding, colors, and a personal message from the sender.' },
  { q: 'Can I create gift cards in bulk for promotions?', a: 'Absolutely. The bulk creation tool lets you generate hundreds of pre-loaded gift cards in one click. Set a fixed denomination, assign a batch code, and export them as printable cards or digital codes for your marketing campaigns.' },
  { q: 'What happens when a gift card is only partially redeemed?', a: 'The remaining balance stays on the card and is tracked automatically. Customers can check their balance at the POS, and your staff can see the full transaction history for every card at a glance.' },
  { q: 'Do gift card sales appear in my reporting dashboard?', a: 'Yes. Gift card revenue has its own reporting section showing total sold, redeemed, outstanding balances, and expiration timelines. You can filter by date range, location, and denomination to spot trends and plan promotions.' },
];

const GiftCardSVG = () => (
  <svg viewBox="0 0 340 220" fill="none" className="w-full max-w-[340px] drop-shadow-2xl" style={{ transform: 'perspective(800px) rotateY(-8deg) rotateX(4deg)' }}>
    <defs>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3d405b" />
        <stop offset="100%" stopColor="#2d2f45" />
      </linearGradient>
      <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#d4a843" />
        <stop offset="50%" stopColor="#f0d78c" />
        <stop offset="100%" stopColor="#d4a843" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="332" height="212" rx="16" fill="url(#cardGrad)" stroke="url(#goldShine)" strokeWidth="2" />
    <rect x="20" y="20" width="300" height="180" rx="10" fill="none" stroke="#ffffff18" strokeWidth="1" strokeDasharray="6 4" />
    <circle cx="280" cy="60" r="30" fill="#ffffff08" />
    <circle cx="60" cy="170" r="20" fill="#ffffff06" />
    {/* Gift bow */}
    <path d="M170 50 Q155 30 140 50 Q155 55 170 50Z" fill="url(#goldShine)" opacity="0.9" />
    <path d="M170 50 Q185 30 200 50 Q185 55 170 50Z" fill="url(#goldShine)" opacity="0.9" />
    <rect x="166" y="50" width="8" height="25" rx="2" fill="url(#goldShine)" opacity="0.7" />
    <circle cx="170" cy="50" r="5" fill="#f0d78c" />
    <text x="170" y="110" textAnchor="middle" fill="white" fontFamily="Poppins, sans-serif" fontSize="13" fontWeight="600" letterSpacing="3">GIFT CARD</text>
    <text x="170" y="140" textAnchor="middle" fill="#f0d78c" fontFamily="DM Sans, sans-serif" fontSize="28" fontWeight="700">$50.00</text>
    <text x="170" y="195" textAnchor="middle" fill="#ffffff60" fontFamily="DM Sans, sans-serif" fontSize="9" letterSpacing="2">REPAIRDESK</text>
  </svg>
);

const MiniCardSVG = ({ bg, accent, label, amount }) => (
  <svg viewBox="0 0 200 130" fill="none" className="w-full rounded-xl shadow-lg">
    <rect width="200" height="130" rx="12" fill={bg} />
    <rect x="8" y="8" width="184" height="114" rx="8" fill="none" stroke={`${accent}30`} strokeWidth="1" />
    <circle cx="160" cy="35" r="18" fill={`${accent}15`} />
    <text x="20" y="45" fill={accent} fontFamily="Poppins, sans-serif" fontSize="8" fontWeight="600" letterSpacing="2">{label}</text>
    <text x="20" y="80" fill="white" fontFamily="DM Sans, sans-serif" fontSize="22" fontWeight="700">{amount}</text>
    <text x="20" y="115" fill="#ffffff50" fontFamily="DM Sans, sans-serif" fontSize="7" letterSpacing="1.5">REPAIRDESK</text>
  </svg>
);

export default function GiftCardsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeCard, setActiveCard] = useState(1);

  const designCards = [
    { bg: '#1a1a2e', accent: '#e94560', label: 'PREMIUM', amount: '$100' },
    { bg: '#3d405b', accent: '#f0d78c', label: 'CLASSIC', amount: '$50' },
    { bg: '#2d3436', accent: '#74b9ff', label: 'TECH LOVER', amount: '$25' },
  ];

  return (
    <PageLayout>
      {/* ── Hero with 3D Gift Card ── */}
      <section className="relative overflow-hidden bg-rd-dark py-24 px-6">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-10 right-[10%] w-72 h-72 bg-rd-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[5%] w-56 h-56 bg-[#f0d78c]/5 rounded-full blur-2xl" />
        <div className="container-main relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <svg className="w-4 h-4 text-[#f0d78c]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7L2 9.4h7.6z"/></svg>
              <span className="text-white/70 text-xs font-dm-sans tracking-wide">Repair Shop Gift Card System</span>
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-[3.25rem] leading-[1.15] text-white mb-6">
              The gift that brings<br />customers <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0d78c] to-[#d4a843]">back again</span>
            </h1>
            <p className="font-dm-sans text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              Sell digital and plastic gift cards from your POS. Custom denominations, branded designs, QR scanning, and real-time balance tracking built in.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5 shadow-lg shadow-rd-teal/20">Start Free Trial</a>
              <Link to="/contact" className="group inline-flex items-center gap-2 text-white/70 font-poppins font-semibold hover:text-white transition-colors">
                Book a Demo
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="absolute -inset-8 bg-rd-teal/5 rounded-3xl blur-xl" />
            <div className="relative">
              <GiftCardSVG />
            </div>
          </div>
        </div>
      </section>

      {/* ── Digital vs Physical Split ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <p className="text-rd-teal font-poppins font-semibold text-sm tracking-widest uppercase mb-3 text-center">Choose Your Format</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-14">Digital or Physical — You Decide</h2>
          <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200">
            {/* Digital side */}
            <div className="relative p-10 bg-gradient-to-br from-rd-teal/[0.04] to-transparent border-b md:border-b-0 md:border-r border-gray-200">
              <div className="absolute top-6 right-6 bg-rd-lime text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Popular</div>
              <div className="w-14 h-14 rounded-2xl bg-rd-teal/10 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" /></svg>
              </div>
              <h3 className="font-poppins font-bold text-xl text-rd-dark mb-3">Digital Gift Cards</h3>
              <p className="font-dm-sans text-gray-500 text-sm leading-relaxed mb-6">Instant email delivery with a scannable QR code. Zero inventory, zero waste. Customers receive and redeem from their phone.</p>
              <ul className="space-y-3">
                {['Instant email delivery', 'QR code scanning', 'Custom branded templates', 'Personal message option'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-dm-sans text-rd-dark">
                    <svg className="w-4 h-4 text-rd-teal flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Physical side */}
            <div className="p-10">
              <div className="w-14 h-14 rounded-2xl bg-[#f0d78c]/15 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#d4a843]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>
              </div>
              <h3 className="font-poppins font-bold text-xl text-rd-dark mb-3">Plastic Gift Cards</h3>
              <p className="font-dm-sans text-gray-500 text-sm leading-relaxed mb-6">Print from any receipt printer with fully customizable templates. A tangible card customers can hold, gift-wrap, and hand to someone they love.</p>
              <ul className="space-y-3">
                {['Receipt printer compatible', 'Custom print templates', 'Barcode or QR scannable', 'Great for in-store upsells'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-dm-sans text-rd-dark">
                    <svg className="w-4 h-4 text-[#d4a843] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gift Card Design Gallery ── */}
      <section className="bg-rd-dark py-20 px-6">
        <div className="container-main max-w-3xl text-center">
          <p className="text-[#f0d78c] font-poppins font-semibold text-sm tracking-widest uppercase mb-3">Branded Designs</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">Cards That Carry Your Brand</h2>
          <p className="font-dm-sans text-white/50 mb-12 max-w-md mx-auto">Pick a template or upload your own design. Every card your customers see reinforces your shop identity.</p>
          <div className="flex items-center justify-center gap-6 mb-8">
            {designCards.map((card, i) => (
              <button key={i} onClick={() => setActiveCard(i)} className={`w-44 transition-all duration-300 ${activeCard === i ? 'scale-110 z-10' : 'scale-90 opacity-50 hover:opacity-70'}`}>
                <MiniCardSVG {...card} />
              </button>
            ))}
          </div>
          <div className="flex justify-center gap-2">
            {designCards.map((_, i) => (
              <button key={i} onClick={() => setActiveCard(i)} className={`w-2 h-2 rounded-full transition-all ${activeCard === i ? 'bg-[#f0d78c] w-6' : 'bg-white/20'}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Boost Revenue Chart Mockup ── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center gap-14 max-w-5xl mx-auto">
            <div className="flex-1">
              <p className="text-rd-teal font-poppins font-semibold text-sm tracking-widest uppercase mb-3">Revenue Impact</p>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Gift Cards Drive Repeat Business</h2>
              <p className="font-dm-sans text-gray-500 leading-relaxed mb-6">Stores using RepairHub gift cards see an average 23% increase in repeat visits. Gift card holders spend 20% more per transaction than cash customers.</p>
              <div className="grid grid-cols-2 gap-4">
                {[{ stat: '23%', label: 'More repeat visits' }, { stat: '20%', label: 'Higher avg. spend' }, { stat: '65%', label: 'Redeemed in 60 days' }, { stat: '3x', label: 'Holiday season lift' }].map(s => (
                  <div key={s.label} className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="font-poppins font-bold text-2xl text-rd-teal">{s.stat}</div>
                    <div className="font-dm-sans text-xs text-gray-400 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-sm">
              <svg viewBox="0 0 280 200" fill="none" className="w-full">
                <rect width="280" height="200" rx="16" fill="white" />
                <text x="20" y="30" fill="#1a1a2e" fontFamily="Poppins, sans-serif" fontSize="10" fontWeight="600">Gift Card Sales</text>
                <text x="220" y="30" fill="#3d405b" fontFamily="DM Sans, sans-serif" fontSize="8" fontWeight="500">This Year</text>
                {/* Y-axis labels */}
                {['$5k', '$4k', '$3k', '$2k', '$1k', '$0'].map((l, i) => (
                  <text key={l} x="16" y={55 + i * 24} fill="#9ca3af" fontFamily="DM Sans, sans-serif" fontSize="7" textAnchor="end">{l}</text>
                ))}
                {/* Grid lines */}
                {[0, 1, 2, 3, 4, 5].map(i => (
                  <line key={i} x1="24" y1={52 + i * 24} x2="265" y2={52 + i * 24} stroke="#f3f4f6" strokeWidth="0.5" />
                ))}
                {/* Bar chart */}
                {[
                  { x: 40, h: 60, label: 'Jan' }, { x: 72, h: 45, label: 'Feb' }, { x: 104, h: 75, label: 'Mar' },
                  { x: 136, h: 55, label: 'Apr' }, { x: 168, h: 90, label: 'May' }, { x: 200, h: 105, label: 'Jun' },
                  { x: 232, h: 120, label: 'Jul' },
                ].map(bar => (
                  <g key={bar.label}>
                    <rect x={bar.x} y={172 - bar.h} width="20" height={bar.h} rx="4" fill="#3d405b" opacity="0.85" />
                    <text x={bar.x + 10} y="188" fill="#9ca3af" fontFamily="DM Sans, sans-serif" fontSize="7" textAnchor="middle">{bar.label}</text>
                  </g>
                ))}
                {/* Trend line */}
                <polyline points="50,120 82,132 114,108 146,124 178,95 210,82 242,62" fill="none" stroke="#f0d78c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                {[{ cx: 242, cy: 62 }].map((dot, i) => (
                  <circle key={i} cx={dot.cx} cy={dot.cy} r="4" fill="#f0d78c" stroke="white" strokeWidth="2" />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works 4-Step Process ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-4xl">
          <p className="text-rd-teal font-poppins font-semibold text-sm tracking-widest uppercase mb-3 text-center">How It Works</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-16">Four Steps, Zero Friction</h2>
          <div className="relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-0.5 bg-gradient-to-r from-rd-teal/20 via-rd-teal/40 to-rd-teal/20" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              {[
                { step: '01', title: 'Create', desc: 'Set denomination, expiry, and quantity from your dashboard in seconds.', icon: 'M12 4v16m8-8H4' },
                { step: '02', title: 'Customize', desc: 'Pick a template or upload your own branded design and personal message.', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' },
                { step: '03', title: 'Sell', desc: 'Sell at the POS or send digitally via email with a scannable QR code.', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
                { step: '04', title: 'Track', desc: 'Monitor balances, redemptions, and sales trends in real-time reports.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
              ].map(s => (
                <div key={s.step} className="text-center relative">
                  <div className="w-20 h-20 rounded-full bg-rd-teal/5 border-2 border-rd-teal/20 flex items-center justify-center mx-auto mb-5 relative z-10 bg-white">
                    <svg className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon}/></svg>
                  </div>
                  <span className="font-dm-sans text-xs text-rd-teal/50 font-bold tracking-widest">{s.step}</span>
                  <h3 className="font-poppins font-bold text-lg text-rd-dark mt-1 mb-2">{s.title}</h3>
                  <p className="font-dm-sans text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Holiday Season Promo ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rd-teal via-[#2d2f45] to-rd-dark py-20 px-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#f0d78c]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="container-main relative z-10 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
                <svg className="w-4 h-4 text-[#f0d78c]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span className="text-white/80 text-xs font-dm-sans">Holiday Ready</span>
              </div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-5">Peak Season? Gift Cards Are Your Secret Weapon</h2>
              <p className="font-dm-sans text-white/60 leading-relaxed mb-8">Black Friday, Christmas, Valentine's Day, Mother's Day — gift card sales spike during every holiday. Be ready with bulk creation, seasonal templates, and automated email delivery.</p>
              <a href="https://app.repairhub.co/register" className="inline-flex items-center gap-2 bg-[#f0d78c] text-rd-dark px-7 py-3 rounded-full font-poppins font-semibold hover:bg-[#e8c96e] transition-colors text-sm">
                Get Started Free
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
            </div>
            <div className="flex-shrink-0 grid grid-cols-3 gap-4">
              {[
                { icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7', label: 'Holidays', color: '#f0d78c' },
                { icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', label: "Valentine's", color: '#e94560' },
                { icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', label: 'New Year', color: '#74b9ff' },
                { icon: 'M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0A2.704 2.704 0 014.5 16 2.704 2.704 0 013 15.546', label: 'Summer', color: '#f0d78c' },
                { icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707', label: 'Birthdays', color: '#ffa502' },
                { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', label: 'Corporate', color: '#a29bfe' },
              ].map(s => (
                <div key={s.label} className="flex flex-col items-center gap-2 bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                  <svg className="w-6 h-6" style={{ color: s.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon}/></svg>
                  <span className="text-white/60 text-[10px] font-dm-sans tracking-wider uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-2xl">
          <p className="text-rd-teal font-poppins font-semibold text-sm tracking-widest uppercase mb-3 text-center">FAQ</p>
          <h2 className="font-poppins font-bold text-3xl text-rd-dark text-center mb-12">Common Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-sm">
                <button
                  className="w-full flex items-center gap-4 px-6 py-5 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-poppins font-bold transition-colors ${openFaq === i ? 'bg-rd-teal text-white' : 'bg-rd-teal/5 text-rd-teal'}`}>
                    {i + 1}
                  </span>
                  <span className="flex-1 font-poppins font-semibold text-rd-dark text-[15px] group-hover:text-rd-teal transition-colors">{faq.q}</span>
                  <svg className={`w-5 h-5 text-gray-300 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 pl-[4.5rem]">
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
