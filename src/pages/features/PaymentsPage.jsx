import React from 'react';
import PageLayout from '../../components/PageLayout';

const features = [
  {
    title: 'Credit & Debit Cards',
    description: 'Accept all major card networks including Visa, Mastercard, American Express, and Discover. Funds settle fast with transparent, flat-rate processing fees.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    title: 'Contactless & NFC',
    description: 'Accept Apple Pay, Google Pay, Samsung Pay, and tap-to-pay cards. Give customers the fast, secure checkout experience they expect.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: 'Cash Tracking',
    description: 'Log every cash transaction with a complete audit trail. Run end-of-day reconciliation reports and spot discrepancies before they become problems.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Split Payments',
    description: 'Let customers pay with multiple methods in one transaction — split a bill between cash and card, or apply store credit alongside a payment.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Refunds & Exchanges',
    description: 'Process partial or full refunds in seconds. Issue store credit, reverse card charges, or handle exchanges — all from within the same interface.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
  },
  {
    title: 'Integrated Card Readers',
    description: 'Pair RepairDesk with certified card readers from Stripe, Square, and others. No third-party apps — payments flow directly into your repair tickets and reports.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
];

const stats = [
  { value: '$0', label: 'Monthly gateway fees' },
  { value: '1-2 days', label: 'Fund settlement time' },
  { value: '6+', label: 'Payment methods accepted' },
  { value: '256-bit', label: 'SSL encryption on every transaction' },
];

const processors = ['Stripe', 'Square', 'PayPal', 'Authorize.net', 'Worldpay', 'Heartland'];

export default function PaymentsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 md:py-32">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-rd-lime text-rd-dark text-sm font-semibold font-poppins px-4 py-1.5 rounded-full mb-6">
              Payments
            </span>
            <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Accept Payments Your Customers Prefer
            </h1>
            <p className="font-dm-sans text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              From cash to contactless, RepairDesk handles every payment method in one unified system — with the reporting and reconciliation your accountant will love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary text-base px-8 py-3.5">
                Start Free Trial
              </a>
              <a href="#" className="border border-white/40 hover:border-white text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-full transition-colors duration-200">
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-rd-cream py-14 border-b border-gray-200">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="font-dm-serif text-4xl md:text-5xl text-rd-teal mb-2">{stat.value}</div>
                <div className="font-dm-sans text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-4">
              Every way to pay, fully integrated
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              Stop toggling between a payment terminal and your POS. RepairDesk brings everything together so payments, tickets, and inventory all stay perfectly in sync.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-rd-cream rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-5 group-hover:bg-rd-teal group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{feature.title}</h3>
                <p className="font-dm-sans text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processor logos */}
      <section className="py-16 bg-rd-cream">
        <div className="container-main">
          <p className="text-center font-poppins text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">
            Works with your payment processor
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {processors.map((name) => (
              <div
                key={name}
                className="bg-white border border-gray-200 rounded-xl px-8 py-4 font-poppins font-semibold text-rd-dark text-sm shadow-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security callout */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto bg-rd-dark rounded-2xl p-10 md:p-14 text-white text-center">
            <div className="w-16 h-16 bg-rd-teal/20 text-rd-lime rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="font-dm-serif text-3xl md:text-4xl mb-4">
              PCI-DSS compliant and secure
            </h2>
            <p className="font-dm-sans text-white/70 text-lg max-w-2xl mx-auto">
              RepairDesk never stores raw card data on your devices. Every transaction is tokenized, encrypted, and processed through PCI-DSS Level 1 compliant payment partners — protecting you and your customers at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-rd-dark to-rd-teal">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center text-white">
            <svg className="w-10 h-10 text-rd-lime mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-dm-sans text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
              "Switching to RepairDesk payments was effortless. I plugged in the card reader, and within minutes it was processing. End-of-day reconciliation now takes two minutes instead of thirty."
            </p>
            <div>
              <div className="font-poppins font-semibold text-rd-lime">Derek Huang</div>
              <div className="font-dm-sans text-white/60 text-sm mt-1">Owner, iRepair Express — Seattle, WA</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
