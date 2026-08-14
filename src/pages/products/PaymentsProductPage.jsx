import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const faqs = [
  {
    q: 'What hardware do I need to accept payments?',
    a: 'None beyond what you already have. RepairDesk Payments works with your existing POS setup. For tap-to-pay, we ship a compact chip + contactless reader that plugs right in — no separate terminal contract required.',
  },
  {
    q: 'How fast do I get my money?',
    a: 'Funds from card transactions processed before the daily cutoff are deposited to your bank account by the next business day. No holding periods, no reserve requirements for established accounts.',
  },
  {
    q: 'Are there monthly fees or long-term contracts?',
    a: 'No monthly fees and no long-term contracts. You pay only per transaction at a competitive flat rate. Cancel anytime — your payment history and reporting stay accessible.',
  },
  {
    q: 'Is it safe for my customers\' card data?',
    a: 'Absolutely. RepairDesk Payments is fully PCI-DSS Level 1 compliant with end-to-end encryption and tokenization. Card data never touches your local systems — it is encrypted at the reader and decrypted only by the payment processor.',
  },
  {
    q: 'Can I send payment links instead of swiping a card?',
    a: 'Yes. Generate a secure payment link from any invoice and send it via email or SMS. Customers pay from their phone or laptop — ideal for mail-in repairs or when a device is ready for pickup.',
  },
];

const flowSteps = [
  {
    step: '01',
    title: 'Customer Pays',
    desc: 'Tap, dip, swipe, or click a payment link — any method works.',
    color: 'bg-rd-teal',
  },
  {
    step: '02',
    title: 'Securely Processed',
    desc: 'Encrypted end-to-end and routed through PCI-compliant rails.',
    color: 'bg-[#0a8a8f]',
  },
  {
    step: '03',
    title: 'Deposited Next Day',
    desc: 'Funds land in your bank account the following business day.',
    color: 'bg-[#014a50]',
  },
  {
    step: '04',
    title: 'Auto-Reconciled',
    desc: 'Every transaction ties back to the ticket inside RepairDesk.',
    color: 'bg-rd-dark',
  },
];

const recentTxns = [
  { id: 'TXN-4821', customer: 'Maria Chen', device: 'iPhone 15 Pro', amount: '$189.00', method: 'Tap to Pay', status: 'Settled', time: '2 min ago' },
  { id: 'TXN-4820', customer: 'Jake Torres', device: 'Samsung S24', amount: '$95.50', method: 'Chip', status: 'Settled', time: '18 min ago' },
  { id: 'TXN-4819', customer: 'Priya Nair', device: 'iPad Air', amount: '$245.00', method: 'Payment Link', status: 'Settled', time: '1 hr ago' },
  { id: 'TXN-4818', customer: 'David Kim', device: 'MacBook Pro', amount: '$420.00', method: 'Tap to Pay', status: 'Pending', time: '1 hr ago' },
  { id: 'TXN-4817', customer: 'Leah Brooks', device: 'Pixel 8', amount: '$67.25', method: 'Chip', status: 'Settled', time: '3 hr ago' },
];

export default function PaymentsProductPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ── Hero: dark gradient with credit card + contactless waves ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rd-dark via-[#012e32] to-[#014a50] text-white py-24 md:py-36">
        {/* Decorative contactless wave arcs */}
        <svg className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[340px] h-[340px] opacity-[0.07] pointer-events-none hidden lg:block" viewBox="0 0 340 340" fill="none">
          <circle cx="170" cy="170" r="60" stroke="white" strokeWidth="3" />
          <circle cx="170" cy="170" r="100" stroke="white" strokeWidth="2.5" />
          <circle cx="170" cy="170" r="140" stroke="white" strokeWidth="2" />
          <circle cx="170" cy="170" r="168" stroke="white" strokeWidth="1.2" />
        </svg>

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Copy */}
            <div>
              <span className="inline-block bg-rd-lime/90 text-rd-dark text-xs font-bold font-poppins px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                RepairDesk Payments
              </span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.12] mb-6">
                One tap. <br className="hidden md:block" />Paid and reconciled.
              </h1>
              <p className="font-dm-sans text-lg text-white/75 max-w-lg mb-10 leading-relaxed">
                Accept every card, every wallet, every payment link — directly inside your POS. No extra hardware, no separate merchant account, next-day deposits.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="btn-primary text-base px-8 py-3.5">
                  Start Free Trial
                </Link>
                <Link to="/demo" className="border border-white/30 hover:border-white text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-full transition-colors">
                  See a Demo
                </Link>
              </div>
            </div>

            {/* Credit card + contactless SVG illustration */}
            <div className="flex justify-center lg:justify-end">
              <svg viewBox="0 0 380 260" fill="none" className="w-full max-w-[380px] drop-shadow-2xl" aria-hidden="true">
                {/* Card body */}
                <rect x="20" y="30" width="300" height="190" rx="18" fill="url(#cardGrad)" />
                <defs>
                  <linearGradient id="cardGrad" x1="20" y1="30" x2="320" y2="220">
                    <stop offset="0%" stopColor="#3d405b" />
                    <stop offset="100%" stopColor="#012e32" />
                  </linearGradient>
                </defs>
                {/* Chip */}
                <rect x="55" y="85" width="44" height="34" rx="6" fill="#c9b458" opacity="0.85" />
                <line x1="77" y1="85" x2="77" y2="119" stroke="#a89640" strokeWidth="1" />
                <line x1="55" y1="102" x2="99" y2="102" stroke="#a89640" strokeWidth="1" />
                {/* Contactless icon on card */}
                <g transform="translate(118,88)" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7">
                  <path d="M2 14c2.5-3.5 2.5-8.5 0-12" />
                  <path d="M7 16c3.8-5 3.8-13 0-18" />
                  <path d="M12 18c5-6.5 5-17.5 0-24" />
                </g>
                {/* Card number dots */}
                {[0, 1, 2, 3].map((g) => (
                  <g key={g} transform={`translate(${55 + g * 62}, 148)`}>
                    {g < 3
                      ? [0, 1, 2, 3].map((d) => (
                          <circle key={d} cx={d * 12} cy="0" r="3.2" fill="white" opacity="0.5" />
                        ))
                      : <text x="0" y="5" fill="white" opacity="0.7" fontSize="14" fontFamily="monospace">4821</text>
                    }
                  </g>
                ))}
                {/* Cardholder */}
                <text x="55" y="195" fill="white" opacity="0.55" fontSize="11" fontFamily="sans-serif" letterSpacing="2">REPAIR SHOP OWNER</text>
                {/* Brand arc */}
                <circle cx="275" cy="185" r="18" fill="#ff5f00" opacity="0.7" />
                <circle cx="295" cy="185" r="18" fill="#eb001b" opacity="0.5" />

                {/* Floating contactless waves outside card */}
                <g transform="translate(310,60)" stroke="#B4F472" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.55">
                  <path d="M0 22c4-6 4-14 0-20" />
                  <path d="M8 28c6-9 6-21 0-30" />
                  <path d="M16 34c8-12 8-28 0-40" />
                </g>
                {/* Small phone outline (tap-to-pay device) */}
                <rect x="330" y="55" width="38" height="68" rx="8" stroke="white" strokeWidth="1.8" fill="white" fillOpacity="0.06" />
                <circle cx="349" cy="112" r="2.5" fill="white" opacity="0.35" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accepted Payment Methods ── */}
      <section className="bg-rd-cream py-10 border-b border-gray-200">
        <div className="container-main">
          <p className="font-poppins text-xs font-semibold text-gray-400 uppercase tracking-widest text-center mb-6">
            Accepted everywhere your customers expect
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {/* Visa */}
            <svg viewBox="0 0 80 26" className="h-7 text-[#1a1f71]" aria-label="Visa">
              <text x="0" y="22" fill="currentColor" fontSize="26" fontWeight="bold" fontFamily="sans-serif" fontStyle="italic">VISA</text>
            </svg>
            {/* Mastercard */}
            <svg viewBox="0 0 48 30" className="h-7" aria-label="Mastercard">
              <circle cx="16" cy="15" r="13" fill="#eb001b" />
              <circle cx="32" cy="15" r="13" fill="#ff5f00" opacity="0.85" />
            </svg>
            {/* Amex */}
            <svg viewBox="0 0 60 26" className="h-6 text-[#2e77bc]" aria-label="Amex">
              <text x="0" y="21" fill="currentColor" fontSize="18" fontWeight="bold" fontFamily="sans-serif">AMEX</text>
            </svg>
            {/* Apple Pay */}
            <svg viewBox="0 0 90 26" className="h-6 text-rd-dark" aria-label="Apple Pay">
              <text x="0" y="21" fill="currentColor" fontSize="17" fontWeight="600" fontFamily="sans-serif"> Pay</text>
            </svg>
            {/* Google Pay */}
            <svg viewBox="0 0 100 26" className="h-6 text-rd-dark" aria-label="Google Pay">
              <text x="0" y="21" fill="#4285f4" fontSize="17" fontWeight="600" fontFamily="sans-serif">G</text>
              <text x="14" y="21" fill="currentColor" fontSize="17" fontWeight="500" fontFamily="sans-serif">Pay</text>
            </svg>
            {/* Contactless */}
            <svg viewBox="0 0 30 30" className="h-6 text-rd-teal" aria-label="Contactless">
              <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" fill="none">
                <path d="M8 20c3-4.5 3-10.5 0-15" />
                <path d="M14 23c4.5-6.5 4.5-15.5 0-22" />
                <path d="M20 26c6-8.5 6-19.5 0-28" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ── How Payments Flow ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">
              How Payments Flow
            </h2>
            <p className="font-dm-sans text-gray-500 text-lg">
              From the moment a customer taps their card to the dollar in your bank — four steps, fully automatic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {flowSteps.map((s, i) => (
              <div key={s.step} className="relative flex flex-col items-center text-center px-6 py-10 group">
                {/* Connector line */}
                {i < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-rd-teal/40 to-rd-teal/10" />
                )}
                <div className={`${s.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white font-poppins font-bold text-lg mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  {s.step}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-2">{s.title}</h3>
                <p className="font-dm-sans text-gray-500 text-sm leading-relaxed max-w-[220px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Card Terminal Mockup with Tap-to-Pay ── */}
      <section className="py-20 md:py-28 bg-rd-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Terminal SVG */}
            <div className="flex justify-center">
              <svg viewBox="0 0 260 380" fill="none" className="w-full max-w-[260px]" aria-hidden="true">
                {/* Terminal body */}
                <rect x="30" y="20" width="200" height="340" rx="24" fill="#1a2332" />
                <rect x="30" y="20" width="200" height="340" rx="24" stroke="#2d3a4a" strokeWidth="2" />
                {/* Screen */}
                <rect x="50" y="45" width="160" height="100" rx="10" fill="#0d3d40" />
                <text x="130" y="82" textAnchor="middle" fill="#B4F472" fontSize="28" fontWeight="bold" fontFamily="monospace">$189.00</text>
                <text x="130" y="108" textAnchor="middle" fill="white" opacity="0.5" fontSize="11" fontFamily="sans-serif">TAP, DIP, OR SWIPE</text>
                <rect x="60" y="120" width="46" height="14" rx="3" fill="#B4F472" opacity="0.3" />
                <text x="83" y="131" textAnchor="middle" fill="#B4F472" fontSize="8" fontFamily="sans-serif">APPROVED</text>
                {/* Contactless zone */}
                <g transform="translate(108,165)" stroke="#B4F472" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6">
                  <path d="M4 18c3.5-5 3.5-11 0-16" />
                  <path d="M11 22c5-7 5-15 0-22" />
                  <path d="M18 26c6.5-9 6.5-19 0-28" />
                </g>
                <rect x="80" y="160" width="100" height="45" rx="8" stroke="#B4F472" strokeWidth="1.2" strokeDasharray="4 3" fill="none" opacity="0.35" />
                {/* Keypad */}
                {[0, 1, 2].map((row) =>
                  [0, 1, 2].map((col) => (
                    <rect key={`${row}-${col}`} x={72 + col * 42} y={225 + row * 36} width="32" height="26" rx="6" fill="#243044" stroke="#2d3a4a" strokeWidth="1" />
                  ))
                )}
                {/* Bottom keys */}
                <rect x="72" y="333" width="32" height="16" rx="4" fill="#d94f4f" opacity="0.6" />
                <rect x="114" y="333" width="32" height="16" rx="4" fill="#f5c542" opacity="0.6" />
                <rect x="156" y="333" width="32" height="16" rx="4" fill="#4caf50" opacity="0.6" />
                {/* Tap animation hint — phone approaching */}
                <rect x="185" y="130" width="48" height="80" rx="10" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="1.5" opacity="0.4" />
                <g transform="translate(196,148)" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3">
                  <path d="M2 12c2-3.5 2-8.5 0-12" />
                  <path d="M7 14c3-4.5 3-10 0-14" />
                </g>
              </svg>
            </div>

            {/* Features beside terminal */}
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-6">
                Every payment method,<br />one reader
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg mb-8 leading-relaxed">
                Chip cards, contactless tap, Apple Pay, Google Pay, magnetic swipe — the RepairDesk reader handles them all. No juggling terminals from different providers.
              </p>
              <ul className="space-y-4">
                {[
                  'Chip & PIN / Chip & Signature',
                  'NFC tap-to-pay and mobile wallets',
                  'Split payments across multiple cards',
                  'Tip / gratuity prompt at checkout',
                  'Send payment links via email or SMS',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rd-teal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-dm-sans text-rd-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rate Comparison ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">
              Transparent pricing, no surprises
            </h2>
            <p className="font-dm-sans text-gray-500 text-lg">
              See how RepairDesk Payments stacks up against legacy processors.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-0 text-center font-dm-sans text-sm text-gray-400 mb-3 px-4">
              <span className="text-left" />
              <span className="font-poppins font-semibold text-rd-teal">RepairDesk</span>
              <span className="font-poppins font-semibold text-gray-400">Traditional</span>
            </div>
            {[
              { label: 'Monthly fee', rd: '$0', trad: '$25 – $50' },
              { label: 'Per-transaction rate', rd: '2.6% + 10¢', trad: '2.9% + 30¢' },
              { label: 'PCI compliance fee', rd: 'Included', trad: '$79 – $120 / yr' },
              { label: 'Equipment lease', rd: 'None', trad: '$30 – $60 / mo' },
              { label: 'Deposit speed', rd: 'Next day', trad: '2-3 business days' },
              { label: 'Cancellation fee', rd: '$0', trad: '$250 – $500' },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-3 gap-0 items-center px-4 py-4 rounded-xl ${i % 2 === 0 ? 'bg-rd-cream' : ''}`}
              >
                <span className="font-dm-sans text-rd-dark font-medium text-left">{row.label}</span>
                <span className="font-poppins font-semibold text-rd-teal text-center">{row.rd}</span>
                <span className="font-dm-sans text-gray-400 text-center line-through decoration-gray-300">{row.trad}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Security & PCI Compliance ── */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-rd-dark to-[#013a3f] text-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Bank-grade security, built in
            </h2>
            <p className="font-dm-sans text-white/60 text-lg">
              Every transaction is encrypted, tokenized, and monitored — so you never have to think about it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'PCI-DSS Level 1',
                desc: 'The highest level of payment card industry compliance — the same standard used by the largest banks and processors worldwide.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'End-to-End Encryption',
                desc: 'Card data is encrypted at the point of interaction and stays encrypted until it reaches the payment processor. Your systems never see raw card numbers.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
              {
                title: 'Tokenization',
                desc: 'Sensitive card details are replaced with unique tokens after the first transaction. Recurring charges and refunds work without re-entering card info.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                ),
              },
              {
                title: 'Fraud Monitoring',
                desc: 'Real-time fraud detection flags suspicious transactions before they settle. Automated alerts keep you informed without slowing down checkout.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                ),
              },
              {
                title: 'Chargeback Protection',
                desc: 'Automatic digital signature capture and transaction records give you the evidence you need to dispute chargebacks and win.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
              },
              {
                title: 'Secure Data Storage',
                desc: 'All payment data is stored in SOC 2 Type II certified infrastructure with 256-bit AES encryption. Regular penetration tests verify defenses.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                ),
              },
            ].map((sec) => (
              <div key={sec.title} className="bg-white/[0.06] border border-white/10 rounded-2xl p-7 hover:bg-white/[0.1] transition-colors">
                <div className="text-rd-lime mb-4">{sec.icon}</div>
                <h3 className="font-poppins font-semibold text-lg mb-2">{sec.title}</h3>
                <p className="font-dm-sans text-white/55 text-sm leading-relaxed">{sec.desc}</p>
              </div>
            ))}
          </div>

          {/* PCI Badge */}
          <div className="flex justify-center mt-14">
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full px-6 py-3">
              <svg className="w-6 h-6 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="font-poppins text-sm font-semibold tracking-wide">PCI-DSS Level 1 Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transaction Dashboard Mockup ── */}
      <section className="py-20 md:py-28 bg-rd-cream">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">
              Real-time transaction reporting
            </h2>
            <p className="font-dm-sans text-gray-500 text-lg">
              Every payment, refund, and deposit — searchable, filterable, and exportable from one dashboard.
            </p>
          </div>

          {/* Dashboard mockup */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Dashboard top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 font-poppins text-sm font-semibold text-rd-dark">Payments Dashboard</span>
              </div>
              <span className="font-dm-sans text-xs text-gray-400">Today</span>
            </div>

            {/* Stat cards row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-b border-gray-100">
              {[
                { label: 'Today\'s Revenue', value: '$1,016.75', trend: '+12%' },
                { label: 'Transactions', value: '14', trend: '+3' },
                { label: 'Avg. Ticket', value: '$72.63', trend: '' },
                { label: 'Pending', value: '$420.00', trend: '' },
              ].map((stat, i) => (
                <div key={stat.label} className={`px-6 py-5 ${i < 3 ? 'border-r border-gray-100' : ''}`}>
                  <div className="font-dm-sans text-xs text-gray-400 mb-1">{stat.label}</div>
                  <div className="font-poppins font-bold text-xl text-rd-dark">{stat.value}</div>
                  {stat.trend && <span className="font-dm-sans text-xs text-green-600">{stat.trend}</span>}
                </div>
              ))}
            </div>

            {/* Recent transactions list */}
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100 text-xs font-poppins text-gray-400 uppercase tracking-wider">
                    <th className="px-6 py-3">ID</th>
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3 hidden md:table-cell">Device</th>
                    <th className="px-6 py-3">Amount</th>
                    <th className="px-6 py-3 hidden sm:table-cell">Method</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="font-dm-sans text-sm">
                  {recentTxns.map((tx) => (
                    <tr key={tx.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                      <td className="px-6 py-3.5 font-mono text-xs text-gray-400">{tx.id}</td>
                      <td className="px-6 py-3.5 text-rd-dark font-medium">{tx.customer}</td>
                      <td className="px-6 py-3.5 text-gray-500 hidden md:table-cell">{tx.device}</td>
                      <td className="px-6 py-3.5 font-poppins font-semibold text-rd-dark">{tx.amount}</td>
                      <td className="px-6 py-3.5 text-gray-500 hidden sm:table-cell">{tx.method}</td>
                      <td className="px-6 py-3.5">
                        <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${
                          tx.status === 'Settled'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-poppins font-semibold text-rd-dark pr-4">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-rd-teal flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-0">
                        <p className="font-dm-sans text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
