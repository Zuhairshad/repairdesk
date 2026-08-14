import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const faqData = [
  {
    q: 'Can I send invoices directly from a repair ticket?',
    a: 'Yes. When you close or update a ticket, RepairHub auto-generates an invoice pre-filled with line items, labor charges, taxes, and any parts used. You can email it with a payment link in one click.',
  },
  {
    q: 'How do partial payments and deposits work?',
    a: 'You can collect any amount upfront as a deposit when a ticket is created. The remaining balance is tracked automatically, and customers can pay the rest later online or in-store. Every payment is logged with timestamps.',
  },
  {
    q: 'Which accounting platforms does RepairHub integrate with?',
    a: 'RepairHub offers two-way sync with both QuickBooks Online and Xero. Invoices, payments, refunds, and tax data flow automatically so your books are always up to date without double entry.',
  },
  {
    q: 'Does RepairHub support multi-currency billing?',
    a: 'Absolutely. You can set a base currency for your store and accept payments in other currencies. Exchange rates can be configured manually or pulled automatically, and invoices display the correct currency symbol and formatting.',
  },
  {
    q: 'Is it possible to customize the invoice template?',
    a: 'Yes. The built-in Template Editor lets you add your logo, adjust colors, rearrange fields, add custom notes or terms, and choose which columns appear. You can create multiple templates for different use cases.',
  },
  {
    q: 'How does the payment link in emailed invoices work?',
    a: 'Each emailed invoice contains a unique secure link. When customers click it, they see the invoice details and can pay using credit card, debit card, or other enabled payment methods. The payment status updates in RepairHub in real time.',
  },
];

export default function BillingInvoicingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ── Hero: Invoice Mockup ── */}
      <section className="relative bg-rd-dark overflow-hidden py-20 md:py-28 px-6">
        {/* Ledger-line background pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 31px, #fff 31px, #fff 32px)',
        }} />
        <div className="container-main relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-rd-teal/20 border border-rd-teal/30 text-rd-mint text-xs font-poppins font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 8v2" /></svg>
              Billing &amp; Invoicing
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[3.4rem] text-white leading-[1.12] mb-6">
              From repair ticket<br className="hidden md:block" /> to&nbsp;
              <span className="text-rd-mint">paid invoice</span><br className="hidden md:block" /> in seconds
            </h1>
            <p className="font-dm-sans text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Generate invoices automatically, email payment links, collect deposits, and sync every dollar with QuickBooks or Xero — no spreadsheets, no double entry.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
              <Link to="/contact" className="border border-white/30 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Book a Demo</Link>
            </div>
          </div>

          {/* Right: Invoice mockup SVG */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl shadow-black/40 overflow-hidden font-dm-sans text-sm">
              {/* Invoice header */}
              <div className="bg-rd-teal px-6 py-5 flex items-center justify-between">
                <div>
                  <div className="text-white/60 text-[10px] font-poppins uppercase tracking-widest">Invoice</div>
                  <div className="text-white font-poppins font-bold text-lg">#INV-4827</div>
                </div>
                <span className="bg-rd-lime text-white text-[10px] font-poppins font-bold uppercase px-3 py-1 rounded-full">Paid</span>
              </div>
              {/* Line items */}
              <div className="px-6 pt-5 pb-3 space-y-3">
                <div className="flex justify-between text-rd-dark/50 text-[10px] font-poppins uppercase tracking-wider border-b border-dashed border-gray-200 pb-2">
                  <span>Item</span><span>Amount</span>
                </div>
                {[
                  ['iPhone 15 Screen Replacement', '$129.99'],
                  ['Labor - LCD Install', '$45.00'],
                  ['Tempered Glass Protector', '$14.99'],
                ].map(([item, price]) => (
                  <div key={item} className="flex justify-between items-center text-rd-dark">
                    <span className="text-[13px]">{item}</span>
                    <span className="font-semibold text-[13px] tabular-nums">{price}</span>
                  </div>
                ))}
              </div>
              {/* Totals */}
              <div className="mx-6 border-t border-dashed border-gray-200 pt-3 pb-2 space-y-1.5">
                <div className="flex justify-between text-rd-dark/60 text-xs"><span>Subtotal</span><span>$189.98</span></div>
                <div className="flex justify-between text-rd-dark/60 text-xs"><span>Tax (8.25%)</span><span>$15.67</span></div>
                <div className="flex justify-between text-rd-dark/60 text-xs"><span>Deposit Paid</span><span className="text-[#457b9d]">-$50.00</span></div>
              </div>
              <div className="mx-6 border-t-2 border-rd-dark pt-3 pb-5 flex justify-between items-center">
                <span className="font-poppins font-bold text-rd-dark">Total Due</span>
                <span className="font-poppins font-bold text-xl text-rd-teal tabular-nums">$155.65</span>
              </div>
              {/* Payment link bar */}
              <div className="bg-gray-50 px-6 py-3 flex items-center justify-between">
                <span className="text-[11px] text-rd-dark/50">Payment link sent via email</span>
                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-2 lg:left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#457b9d]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="text-rd-dark font-poppins font-semibold text-sm">Payment Received</div>
                <div className="text-[#457b9d] text-xs font-dm-sans">$155.65 via Stripe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Invoice Lifecycle Flow ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-4">The Invoice Lifecycle</h2>
          <p className="text-gray-500 font-dm-sans text-center text-lg mb-16 max-w-2xl mx-auto">Every repair follows the same money trail. RepairHub automates each step so nothing slips through the cracks.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 max-w-5xl mx-auto">
            {[
              {
                step: '01', title: 'Create', desc: 'Invoice auto-generates from ticket line items, parts, and labor with taxes applied.',
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>,
              },
              {
                step: '02', title: 'Send', desc: 'Email it with a secure payment link or print a receipt — one click from the ticket screen.',
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
              },
              {
                step: '03', title: 'Track', desc: 'See sent, viewed, partially paid, and overdue statuses in real time. Auto-reminders chase late payers.',
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
              },
              {
                step: '04', title: 'Get Paid', desc: 'Customer pays online or in-store. Balance updates instantly, receipt is generated, books sync.',
                icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              },
            ].map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center px-4">
                {/* Connector arrow (hidden on first) */}
                {i > 0 && (
                  <div className="hidden md:block absolute left-0 top-10 -translate-x-1/2">
                    <svg className="w-6 h-6 text-rd-teal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                )}
                <div className="w-16 h-16 rounded-2xl bg-rd-teal/10 flex items-center justify-center text-rd-teal mb-4">
                  {s.icon}
                </div>
                <span className="text-[10px] font-poppins font-bold text-rd-teal uppercase tracking-widest mb-1">Step {s.step}</span>
                <h3 className="font-poppins font-bold text-xl text-rd-dark mb-2">{s.title}</h3>
                <p className="font-dm-sans text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                {/* Mobile connector */}
                {i < 3 && (
                  <div className="md:hidden my-4">
                    <svg className="w-5 h-5 text-rd-teal/40 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Payment Methods Grid ── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="max-w-xl mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Accept Every Way They Want to Pay</h2>
            <p className="font-dm-sans text-gray-500 text-lg">Credit card, cash, digital wallet, store credit, gift card, loyalty points — all from one billing screen, even split across methods in a single transaction.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { label: 'Credit / Debit Card', icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="5" width="20" height="14" rx="2.5" /><path d="M2 10h20" /></svg> },
              { label: 'Cash', icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2.5" y="6.5" width="19" height="11" rx="2" /><circle cx="12" cy="12" r="2.5" /><path d="M6 6.5v11M18 6.5v11" /></svg> },
              { label: 'Digital Wallets', icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="4" width="20" height="16" rx="3" /><path d="M16 12h.01" /><path d="M2 9h20" /></svg> },
              { label: 'Store Credit', icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v4l-2 1v7H6v-7L4 8V4z" /><circle cx="12" cy="12" r="2" /></svg> },
              { label: 'Gift Cards', icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M12 8v12M3 12h18M7.5 8C7.5 8 6 5 8.5 4s4 4 3.5 4M16.5 8c0 0 1.5-3-1-4s-4 4-3.5 4" /></svg> },
              { label: 'Loyalty Points', icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg> },
            ].map(m => (
              <div key={m.label} className="bg-white rounded-xl border border-gray-100 p-5 flex flex-col items-center text-center hover:border-rd-teal/30 hover:shadow-md transition-all group">
                <div className="text-rd-teal/60 group-hover:text-rd-teal transition-colors mb-3">{m.icon}</div>
                <span className="font-poppins font-semibold text-rd-dark text-sm">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accounting Sync (Two-way arrow diagram) ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-4">Your Books, Always In Sync</h2>
          <p className="text-gray-500 font-dm-sans text-center text-lg mb-14 max-w-2xl mx-auto">Two-way integration with QuickBooks and Xero means invoices, payments, taxes, and refunds flow automatically. Zero manual reconciliation.</p>

          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
            {/* RepairHub block */}
            <div className="bg-rd-dark rounded-2xl px-8 py-6 text-center shrink-0">
              <div className="w-12 h-12 rounded-xl bg-rd-teal flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <div className="font-poppins font-bold text-white text-lg">RepairHub</div>
              <div className="text-white/50 text-xs font-dm-sans mt-1">Invoices, Payments, Taxes</div>
            </div>

            {/* Two-way arrows */}
            <div className="flex flex-col items-center gap-1 py-2 md:py-0 md:px-2 shrink-0">
              <div className="hidden md:flex items-center gap-1 text-rd-teal">
                <div className="w-16 lg:w-24 h-px bg-rd-teal/40" />
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </div>
              <span className="text-[10px] font-poppins font-bold text-rd-teal uppercase tracking-widest">Real-time Sync</span>
              <div className="hidden md:flex items-center gap-1 text-rd-teal">
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                <div className="w-16 lg:w-24 h-px bg-rd-teal/40" />
              </div>
              {/* Mobile vertical arrows */}
              <div className="flex md:hidden gap-4 text-rd-teal my-1">
                <svg className="w-4 h-4 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                <svg className="w-4 h-4 -rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>

            {/* Accounting platforms */}
            <div className="flex flex-col gap-4 shrink-0">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#457b9d] flex items-center justify-center">
                  <span className="text-white font-black text-sm font-poppins">QB</span>
                </div>
                <div>
                  <div className="font-poppins font-semibold text-rd-dark">QuickBooks Online</div>
                  <div className="text-gray-400 text-xs font-dm-sans">Invoices, expenses, chart of accounts</div>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl px-8 py-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#3b82f6] flex items-center justify-center">
                  <span className="text-white font-black text-sm font-poppins">X</span>
                </div>
                <div>
                  <div className="font-poppins font-semibold text-rd-dark">Xero</div>
                  <div className="text-gray-400 text-xs font-dm-sans">Bank reconciliation, contacts, invoices</div>
                </div>
              </div>
            </div>
          </div>

          {/* Synced data tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {['Invoices', 'Payments', 'Refunds', 'Tax Rates', 'Customers', 'Products'].map(tag => (
              <span key={tag} className="bg-rd-teal/10 text-rd-teal text-xs font-poppins font-semibold px-4 py-1.5 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Revenue Dashboard Mockup ── */}
      <section className="bg-rd-dark py-20 px-6">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">See Your Revenue at a Glance</h2>
              <p className="font-dm-sans text-white/60 text-lg mb-8 leading-relaxed">Track daily collections, outstanding balances, and payment method breakdowns. Know exactly where your money stands without opening a separate tool.</p>
              <ul className="space-y-4">
                {[
                  'Daily, weekly, and monthly revenue breakdowns',
                  'Outstanding vs. collected balance tracking',
                  'Payment method distribution reports',
                  'Customer payment history and trends',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rd-mint mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-dm-sans text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dashboard mockup */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              {/* Top stat row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: 'Collected', value: '$24,380', change: '+12%', color: 'text-blue-400' },
                  { label: 'Outstanding', value: '$3,120', change: '8 invoices', color: 'text-amber-400' },
                  { label: 'This Month', value: '$27,500', change: '+18% vs last', color: 'text-rd-mint' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white/5 rounded-xl p-3">
                    <div className="text-white/40 text-[10px] font-poppins uppercase tracking-wider mb-1">{stat.label}</div>
                    <div className="text-white font-poppins font-bold text-lg tabular-nums">{stat.value}</div>
                    <div className={`${stat.color} text-[11px] font-dm-sans mt-0.5`}>{stat.change}</div>
                  </div>
                ))}
              </div>

              {/* Bar chart mockup */}
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/40 text-[10px] font-poppins uppercase tracking-wider mb-4">Weekly Revenue</div>
                <div className="flex items-end gap-2 h-32">
                  {[
                    { day: 'Mon', h: 55, val: '$2.8k' },
                    { day: 'Tue', h: 72, val: '$3.6k' },
                    { day: 'Wed', h: 45, val: '$2.3k' },
                    { day: 'Thu', h: 88, val: '$4.4k' },
                    { day: 'Fri', h: 100, val: '$5.1k' },
                    { day: 'Sat', h: 65, val: '$3.3k' },
                    { day: 'Sun', h: 30, val: '$1.5k' },
                  ].map(bar => (
                    <div key={bar.day} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-white/50 text-[9px] font-dm-sans tabular-nums">{bar.val}</span>
                      <div className="w-full rounded-t-md bg-rd-teal hover:bg-rd-lime transition-colors cursor-default" style={{ height: `${bar.h}%` }} />
                      <span className="text-white/30 text-[10px] font-dm-sans">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment method breakdown */}
              <div className="bg-white/5 rounded-xl p-4 mt-3">
                <div className="text-white/40 text-[10px] font-poppins uppercase tracking-wider mb-3">Payment Methods</div>
                <div className="space-y-2.5">
                  {[
                    { method: 'Credit / Debit Card', pct: 58, color: 'bg-rd-teal' },
                    { method: 'Cash', pct: 24, color: 'bg-rd-lime' },
                    { method: 'Online Payment Link', pct: 12, color: 'bg-[#6366F1]' },
                    { method: 'Store Credit / Other', pct: 6, color: 'bg-[#F59E0B]' },
                  ].map(m => (
                    <div key={m.method}>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-white/60 font-dm-sans">{m.method}</span>
                        <span className="text-white/80 font-poppins font-semibold tabular-nums">{m.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className={`h-full ${m.color} rounded-full`} style={{ width: `${m.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature Highlights (Staggered cards) ── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-14">Built for the Way Repair Shops Bill</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Automated Invoice Generation',
                desc: 'Invoices create themselves from ticket data — parts, labor, taxes, and discounts already filled in. No copy-pasting, no missed line items.',
                accent: 'bg-rd-teal',
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
              },
              {
                title: 'Email with Payment Link',
                desc: 'Send a professional invoice by email. Customers click a secure link and pay online instantly — no phone calls, no in-store visits required.',
                accent: 'bg-[#6366F1]',
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
              },
              {
                title: 'Partial Payments & Deposits',
                desc: 'Collect deposits upfront and track remaining balances. Split payments across methods in one transaction. Every partial payment is timestamped.',
                accent: 'bg-[#F59E0B]',
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
              },
              {
                title: 'Multi-Currency Support',
                desc: 'Configure base and accepted currencies per store. Invoices display correct symbols, formatting, and exchange rates for international customers.',
                accent: 'bg-[#EC4899]',
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
              },
              {
                title: 'Tax Management',
                desc: 'Set tax rates by category or region. Taxes calculate automatically on every invoice — stay compliant without manual math or guesswork.',
                accent: 'bg-[#457b9d]',
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
              },
              {
                title: 'Receipt Printing',
                desc: 'Generate and print thermal or full-page receipts instantly from any ticket or POS sale. Fully customizable templates with your branding.',
                accent: 'bg-[#8B5CF6]',
                icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>,
              },
            ].map(f => (
              <div key={f.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow group">
                <div className={`w-11 h-11 rounded-xl ${f.accent}/10 flex items-center justify-center mb-4 group-hover:${f.accent} transition-colors`}>
                  <span className="text-rd-dark/60">{f.icon}</span>
                </div>
                <h3 className="font-poppins font-bold text-rd-dark text-lg mb-2">{f.title}</h3>
                <p className="font-dm-sans text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof Stats Strip ── */}
      <section className="bg-rd-teal py-12 px-6">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { figure: '2M+', label: 'Invoices generated' },
              { figure: '$180M+', label: 'Payments processed' },
              { figure: '35%', label: 'Faster collections on average' },
              { figure: '30 hrs', label: 'Saved per month on reconciliation' },
            ].map(s => (
              <div key={s.label}>
                <div className="font-poppins font-bold text-3xl md:text-4xl text-white mb-1">{s.figure}</div>
                <div className="font-dm-sans text-white/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial (Payment receipt style) ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main flex justify-center">
          <div className="max-w-md w-full">
            {/* Receipt paper look */}
            <div className="bg-gray-50 border border-gray-200 rounded-t-2xl px-8 pt-8 pb-6">
              {/* Dotted top edge */}
              <div className="border-b-2 border-dashed border-gray-300 pb-4 mb-5 text-center">
                <div className="text-[10px] font-poppins uppercase tracking-[0.2em] text-gray-400 mb-1">Customer Testimonial</div>
                <div className="text-[10px] font-dm-sans text-gray-300">Verified RepairHub User</div>
              </div>
              <blockquote className="font-dm-sans text-rd-dark text-base leading-relaxed mb-6 text-center">
                "We used to spend an hour every evening reconciling invoices. With RepairHub, invoices generate from tickets automatically, customers pay through the emailed link, and everything syncs to QuickBooks. We literally saved 30 hours a month."
              </blockquote>
              <div className="border-t border-dashed border-gray-300 pt-4 text-center">
                <div className="font-poppins font-bold text-rd-dark">Marcus Chen</div>
                <div className="font-dm-sans text-gray-400 text-sm">Owner, QuickFix Mobile Repairs</div>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
                  ))}
                </div>
              </div>
            </div>
            {/* Torn paper bottom edge */}
            <div className="h-4 bg-gray-50 border-x border-gray-200" style={{
              clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)',
            }} />
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-500 font-dm-sans text-center text-lg mb-12">Everything you need to know about billing and invoicing in RepairHub.</p>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                >
                  <span className="font-poppins font-semibold text-rd-dark pr-4 group-hover:text-rd-teal transition-colors">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-rd-teal shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 font-dm-sans text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
