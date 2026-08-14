import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ---------- Inline SVG Icons ---------- */

const WalletIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="6" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <path d="M16 14.5h2" />
    <path d="M6 2l4 4M18 2l-4 4" />
  </svg>
);

const CreditIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v12M8.5 9.5C8.5 8.1 10.1 7 12 7s3.5 1.1 3.5 2.5S13.9 12 12 12s-3.5 1.1-3.5 2.5S10.1 17 12 17" />
  </svg>
);

const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const ChartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 20h18" />
    <rect x="5" y="10" width="3" height="10" rx="1" />
    <rect x="10.5" y="6" width="3" height="14" rx="1" />
    <rect x="16" y="13" width="3" height="7" rx="1" />
  </svg>
);

const StoreIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 9l1.5-5h15L21 9" />
    <path d="M3 9h18v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" />
    <path d="M9 21V14h6v7" />
    <path d="M3 9c0 1.1.9 2 2 2s2-.9 2-2M7 9c0 1.1.9 2 2 2s2-.9 2-2M11 9c0 1.1.9 2 2 2s2-.9 2-2M15 9c0 1.1.9 2 2 2s2-.9 2-2" />
  </svg>
);

const HeartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z" />
  </svg>
);

const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

/* ---------- Data ---------- */

const flowSteps = [
  { num: '1', label: 'Issue', desc: 'Issue store credit instead of a cash refund', color: 'bg-rd-teal' },
  { num: '2', label: 'Store', desc: 'Credit sits in the customer\'s digital wallet', color: 'bg-[#014a50]' },
  { num: '3', label: 'Redeem', desc: 'Customer spends credit on their next visit', color: 'bg-rd-dark' },
];

const benefits = [
  { icon: CreditIcon, title: 'Partial Credit Redemption', desc: 'Customers use only what they need and save the rest for later. No pressure, no waste.' },
  { icon: ClockIcon, title: 'Credit Expiry Management', desc: 'Set custom expiry windows to create urgency and drive customers back within your timeframe.' },
  { icon: ShieldIcon, title: 'Reduce Chargebacks', desc: 'Fewer refund disputes means fewer chargebacks. Store credits keep payment conflicts in-house.' },
  { icon: ChartIcon, title: 'Credit History Reports', desc: 'Full audit trail of every credit issued, used, and expired. Know exactly where your money flows.' },
  { icon: StoreIcon, title: 'Multi-Store Support', desc: 'Credits work across all your locations. A customer earns at one store, spends at another.' },
  { icon: HeartIcon, title: 'Customer Loyalty Boost', desc: 'A credit balance is a reason to return. Turn one-time visitors into repeat customers.' },
];

const stats = [
  { value: '67%', label: 'of credited customers return within 30 days' },
  { value: '2.4x', label: 'more spent by customers redeeming store credits' },
  { value: '85%', label: 'reduction in refund-related chargebacks' },
  { value: '41%', label: 'increase in average customer lifetime value' },
];

const faqs = [
  { q: 'Can customers use store credits alongside other payment methods?', a: 'Absolutely. Customers can split their payment between store credits and any other method you accept — cash, card, loyalty points, or mobile payments. The POS handles the split automatically at checkout.' },
  { q: 'How do I set expiry dates for issued credits?', a: 'You can configure default expiry windows in your RepairDesk settings — 30, 60, 90 days, or custom durations. Each credit issued follows your default, or you can override per transaction. Customers receive notifications as expiry approaches.' },
  { q: 'Do store credits sync across multiple store locations?', a: 'Yes. When you run multiple locations under RepairDesk, a customer\'s credit balance is unified. Credits issued at any location can be redeemed at any other location in real time.' },
  { q: 'Can I issue store credits for trade-in devices?', a: 'This is one of the most popular use cases. Instead of paying cash for trade-ins, issue store credits. You acquire inventory while the customer gets spending power that keeps them coming back to your shop.' },
  { q: 'Is there an additional cost for the store credits feature?', a: 'Store credits are included with the RepairDesk Enterprise plan at no additional per-transaction fees. There are no hidden charges — credits are simply another payment method within your existing subscription.' },
];

/* ---------- Component ---------- */

export default function StoreCreditsPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ===== HERO — Digital Wallet ===== */}
      <section className="relative bg-gradient-to-b from-rd-dark via-rd-dark to-[#014a50] text-white py-24 md:py-32 px-6 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="container-main relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur text-rd-lime px-4 py-2 rounded-full mb-8 border border-white/10">
              <WalletIcon className="w-4 h-4" />
              Store Credits for Repair Shops
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-[3.25rem] leading-[1.12] mb-6">
              Turn Every Refund Into a <span className="text-rd-lime">Return Visit</span>
            </h1>
            <p className="text-white/70 text-lg font-dm-sans leading-relaxed mb-10 max-w-lg">
              Stop bleeding revenue through refunds. Issue store credits instead and watch one-time customers become loyal regulars with a balance to spend.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5 shadow-lg shadow-rd-teal/30">Start Free Trial</a>
              <Link to="/contact" className="border border-white/30 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Book a Demo</Link>
            </div>
          </div>

          {/* Digital Wallet Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Wallet body */}
              <div className="bg-gradient-to-br from-[#01858e] to-rd-teal rounded-3xl p-6 shadow-2xl shadow-black/40 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-poppins font-semibold tracking-wider uppercase text-white/60">RepairDesk Wallet</span>
                  <WalletIcon className="w-6 h-6 text-rd-lime" />
                </div>
                <p className="text-white/50 text-xs font-dm-sans mb-1">Available Balance</p>
                <p className="font-poppins font-bold text-4xl text-white mb-6">$247<span className="text-2xl text-white/60">.50</span></p>
                <div className="flex gap-3">
                  <div className="flex-1 bg-white/10 rounded-xl p-3 backdrop-blur">
                    <p className="text-[10px] text-white/50 font-dm-sans mb-0.5">Credits Issued</p>
                    <p className="font-poppins font-semibold text-white text-sm">$420.00</p>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-xl p-3 backdrop-blur">
                    <p className="text-[10px] text-white/50 font-dm-sans mb-0.5">Redeemed</p>
                    <p className="font-poppins font-semibold text-rd-lime text-sm">$172.50</p>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-white/10">
                  <p className="text-[10px] text-white/40 font-dm-sans">Customer: Sarah M. &bull; Last visit 3 days ago</p>
                </div>
              </div>
              {/* Floating notification */}
              <div className="absolute -top-4 -right-4 bg-white text-rd-dark rounded-2xl px-4 py-3 shadow-xl text-xs font-dm-sans animate-pulse">
                <span className="font-poppins font-bold text-rd-teal">+$75.00</span> credit issued
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3-Step Circular Flow ===== */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <p className="text-rd-teal font-poppins font-semibold text-sm uppercase tracking-wider mb-3 text-center">The Credit Cycle</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 text-center">How Store Credits Work</h2>
          <p className="text-gray-500 font-dm-sans text-lg text-center max-w-xl mx-auto mb-16">Three steps. Zero lost revenue. Every refund becomes a future transaction.</p>

          <div className="relative max-w-3xl mx-auto">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-rd-teal via-[#014a50] to-rd-dark" />
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%]">
              <ArrowIcon className="w-5 h-5 text-rd-teal absolute left-[42%] -top-2.5" />
              <ArrowIcon className="w-5 h-5 text-rd-dark absolute left-[85%] -top-2.5" />
            </div>

            <div className="grid md:grid-cols-3 gap-10 md:gap-6">
              {flowSteps.map((step) => (
                <div key={step.num} className="text-center">
                  <div className={`${step.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5 text-white font-poppins font-bold text-xl shadow-lg relative z-10`}>
                    {step.num}
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-rd-dark mb-2">{step.label}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed max-w-[220px] mx-auto">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Credit Card Mockup ===== */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-[1.58/1] bg-gradient-to-br from-rd-dark via-[#013a3e] to-rd-teal rounded-2xl p-7 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              {/* Card chip pattern */}
              <div className="absolute top-7 right-7 w-20 h-20 rounded-full border border-white/10" />
              <div className="absolute top-10 right-10 w-14 h-14 rounded-full border border-white/10" />
              <div>
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-9 h-6 bg-rd-lime/80 rounded-md" />
                  <div className="w-5 h-5 rounded-full border-2 border-white/30" />
                </div>
                <p className="font-poppins font-bold text-white text-2xl tracking-widest">**** **** **** 7842</p>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-white/40 font-dm-sans uppercase tracking-wider">Balance</p>
                  <p className="font-poppins font-bold text-white text-xl">$247.50</p>
                </div>
                <p className="font-poppins font-bold text-rd-lime text-sm tracking-wider">RepairDesk</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Every Customer Carries Your Store in Their Wallet</h2>
            <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-8">
              Store credits automatically appear at checkout when a customer is selected. No extra steps, no forgotten balances. The credit applies with one tap, making every return visit frictionless.
            </p>
            <ul className="space-y-4">
              {['Auto-applies at POS checkout', 'Visible on customer profile', 'Works with split payments', 'Real-time balance updates'].map((item) => (
                <li key={item} className="flex items-center gap-3 font-dm-sans text-rd-dark">
                  <span className="w-6 h-6 rounded-full bg-rd-teal/10 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3.5 h-3.5 text-rd-teal" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Before / After Comparison ===== */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-4xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 text-center">Refunds Cost You Twice</h2>
          <p className="text-gray-500 font-dm-sans text-lg text-center max-w-2xl mx-auto mb-14">You lose the money and the customer. Store credits flip the equation.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BEFORE — Refund */}
            <div className="relative rounded-2xl border-2 border-red-200 bg-red-50/50 p-7 overflow-hidden">
              <div className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-poppins font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">The Old Way</div>
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-5 mt-4">
                <XIcon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-rd-dark mb-3">Cash Refund</h3>
              <ul className="space-y-3 font-dm-sans text-sm text-gray-600">
                {['Revenue leaves your business permanently', 'Customer has no reason to return', 'Higher chargeback risk from disputes', 'Negative experience lingers'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <XIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-red-200 text-center">
                <p className="text-red-500 font-poppins font-bold text-2xl">-$150</p>
                <p className="text-xs text-gray-400 font-dm-sans">Gone forever</p>
              </div>
            </div>

            {/* AFTER — Store Credit */}
            <div className="relative rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-7 overflow-hidden">
              <div className="absolute top-0 right-0 bg-rd-teal text-white text-[10px] font-poppins font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-xl">The RepairDesk Way</div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-5 mt-4">
                <CheckIcon className="w-6 h-6 text-rd-teal" />
              </div>
              <h3 className="font-poppins font-bold text-xl text-rd-dark mb-3">Store Credit</h3>
              <ul className="space-y-3 font-dm-sans text-sm text-gray-600">
                {['Revenue stays within your ecosystem', 'Customer returns to redeem their balance', 'Zero chargeback risk on credited amount', 'Positive experience builds loyalty'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="w-4 h-4 text-rd-teal shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-emerald-200 text-center">
                <p className="text-rd-teal font-poppins font-bold text-2xl">+$150</p>
                <p className="text-xs text-gray-400 font-dm-sans">Retained as future revenue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benefits Grid ===== */}
      <section className="bg-rd-dark py-20 px-6">
        <div className="container-main">
          <p className="text-rd-lime font-poppins font-semibold text-sm uppercase tracking-wider mb-3 text-center">Built for Repair Shops</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-14 text-center">Everything You Need to Manage Credits</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {benefits.map((b) => (
              <div key={b.title} className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rd-teal/40 rounded-2xl p-6 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-rd-teal/20 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors duration-300">
                  <b.icon className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-poppins font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-white/50 font-dm-sans text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Retention Stats ===== */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-4xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 text-center">The Numbers Speak for Themselves</h2>
          <p className="text-gray-500 font-dm-sans text-lg text-center max-w-xl mx-auto mb-14">Repair shops using store credits see measurable improvements in retention and revenue.</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.value} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <p className="font-poppins font-bold text-3xl md:text-4xl text-rd-teal mb-2">{s.value}</p>
                <p className="text-gray-500 font-dm-sans text-sm leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ Accordion ===== */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-3 text-center">Common Questions</h2>
          <p className="text-gray-500 font-dm-sans text-center mb-12">Everything you need to know about store credits on RepairDesk.</p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:border-rd-teal/30 transition-colors">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-200 ${openFaq === i ? 'rotate-180 text-rd-teal' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${openFaq === i ? 'max-h-60' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
