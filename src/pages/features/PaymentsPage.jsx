import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';

const paymentMethods = [
  {
    name: 'Visa & Mastercard',
    icon: (
      <div className="flex items-center gap-1.5">
        <div className="w-9 h-6 rounded bg-[#1A3E8C] flex items-center justify-center">
          <span className="text-white text-[9px] font-black italic tracking-tighter font-poppins">VISA</span>
        </div>
        <div className="relative w-6 h-6">
          <span className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#EB001B] opacity-90" />
          <span className="absolute left-2.5 top-0 w-4 h-4 rounded-full bg-[#F79E1B] opacity-90 mix-blend-multiply" />
        </div>
      </div>
    ),
  },
  {
    name: 'Amex & Discover',
    icon: (
      <div className="flex items-center gap-1.5">
        <div className="w-9 h-6 rounded bg-[#016FD0] flex items-center justify-center">
          <span className="text-white text-[7px] font-black tracking-tighter font-poppins">AMEX</span>
        </div>
        <div className="w-9 h-6 rounded bg-[#F47216] flex items-center justify-center">
          <span className="text-white text-[6px] font-black tracking-tighter font-poppins">DISC</span>
        </div>
      </div>
    ),
  },
  {
    name: 'Contactless & Tap-to-Pay',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    name: 'Apple Pay & Google Pay',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="6" y="2" width="12" height="20" rx="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 18h5M12 5.2c-1.3 0-2.4 1-2.4 2.3 0 1.6 2.4 2.2 2.4 3.9M12 5.2c1.3 0 2.4 1 2.4 2.3 0 1.6-2.4 2.2-2.4 3.9" />
      </svg>
    ),
  },
  {
    name: 'Cash',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2.5" y="6.5" width="19" height="11" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.5v11M18 6.5v11" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: '01',
    title: 'The Amount Displays Automatically',
    description: "With integrated payments, you don't have to enter the amount manually on your payment terminal.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="5" y="3" width="14" height="18" rx="2" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6M9 11h6M9 15h3" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Customers Can Add a Tip, Right There',
    description: 'When you want to check out the customer, the payment terminal automatically displays the amount, providing a great experience for your customers and employees. The customer also sees an option for tipping, which your employees will appreciate.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Pay Remotely, Just as Securely',
    description: 'If your customer cannot physically visit the store, you can always email or text the invoice and accept payment on a secure page without leaving your point of sale system.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'What payment processing rate will I be charged?',
    a: 'We charge custom rates depending on your processing volume. Please fill out the form above to speak to a Payments Product Specialist for further details.',
  },
  {
    q: "I'm stuck in a Lock in Contract with my Bank/merchant processing provider?",
    a: 'RepairHub Payments will try to offer cost savings in merchant service fees to alleviate the cost of a Lock in Contract.',
  },
  {
    q: 'How soon will my funds be deposited to my bank account?',
    a: "We offer the next day's deposit. It means transactions processed before 8:00 pm (ET) are ACH to your bank account. Also, funds processed on Friday are deposited to merchants' accounts on Saturday. Whereas transactions processed on Saturday and Sunday will be ACH to merchants bank on Monday.",
  },
  {
    q: 'Can I send an invoice with a pay-now link?',
    a: 'Yes. With RepairHub Payments, you have the option of sending customers an invoice with a convenient "Pay Now" button, which they can click to pay their dues online.',
  },
  {
    q: 'How long does it take to process my application?',
    a: 'Once we have received the Application form and supporting documents, it normally takes 24 - 48 hours in application processing.',
  },
  {
    q: 'What happens if I get a chargeback?',
    a: "When a chargeback happens, the disputed funds are held from the business until the card issuer works things out and decides what to do. If the bank rules against you, those funds are returned to the cardholder. If the bank rules in your favor, they'll send the disputed funds back to you. We charge a $20 dispute fee and in order to avoid chargebacks we recommend merchants taking payments through EMV (chip cards), collecting customer signature before & after a repair is completed and asking for their ID. If the ID doesn't match please don't process the transaction.",
  },
];

export default function PaymentsPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rd-dark via-[#1e2035] to-rd-teal text-white overflow-hidden py-24 md:py-32 px-6">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rd-lime/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-rd-teal/20 blur-3xl" />
        <div className="container-main relative grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
              RepairHub Payments
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
              RepairHub Payments
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">
              Accept in-person, contactless, or online payments securely and pay one flat rate with no hidden fees.
            </p>
            <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5 inline-block">
              Get Started
            </a>
          </div>

          {/* Card + terminal mockup */}
          <div className="relative h-80 md:h-96">
            {/* Terminal */}
            <div className="absolute right-2 bottom-0 w-52 md:w-60 bg-white/10 border border-white/20 rounded-3xl p-4 backdrop-blur-sm shadow-2xl">
              <div className="flex justify-center gap-1 mb-3">
                <span className="w-8 h-1 rounded-full bg-white/30" />
              </div>
              <div className="bg-rd-dark/60 rounded-xl p-4 mb-3">
                <p className="text-white/50 text-[10px] font-dm-sans uppercase tracking-widest mb-1">Amount Due</p>
                <p className="font-poppins font-bold text-2xl text-white">$84.00</p>
                <div className="flex items-center gap-1.5 mt-2 text-rd-lime">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0" />
                  </svg>
                  <span className="text-[10px] font-dm-sans">Tap, Insert, or Swipe</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="h-4 rounded bg-white/10" />
                ))}
              </div>
            </div>

            {/* Card */}
            <div className="absolute left-0 top-4 w-56 md:w-64 rounded-2xl bg-gradient-to-br from-[#1e2035] to-rd-teal p-5 shadow-2xl border border-white/10">
              <div className="flex justify-between items-start mb-8">
                <span className="w-9 h-6 rounded bg-gradient-to-br from-rd-lime to-yellow-200 opacity-90" />
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <p className="font-dm-sans text-white text-lg tracking-widest mb-5">•••• •••• •••• 4242</p>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/50 text-[9px] uppercase tracking-widest font-dm-sans">Card Holder</p>
                  <p className="text-white text-xs font-poppins font-semibold tracking-wide">REPAIR SHOP OWNER</p>
                </div>
                <span className="text-white font-black italic text-lg font-poppins tracking-tighter">VISA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-white py-20 px-6">
        <div className="container-main grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl bg-rd-dark overflow-hidden aspect-video flex items-center justify-center border border-gray-100 shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-rd-dark via-[#1e2035] to-rd-teal opacity-90" />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="flex gap-1 items-end h-10 opacity-40">
                {[6, 10, 14, 8, 16, 12, 7, 15, 9, 11].map((h, i) => (
                  <span key={i} className="w-1.5 bg-rd-lime rounded-full" style={{ height: `${h * 4}px` }} />
                ))}
              </div>
            </div>
            <button aria-label="Play case study video" className="relative z-10 w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-rd-dark ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-teal/10 text-rd-teal px-4 py-1.5 rounded-full mb-5">
              Case Study
            </span>
            <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-5 leading-snug">
              Christopher Smith Talks About The Benefits of Using RepairHub Pay
            </h2>
            <blockquote className="border-l-4 border-rd-lime pl-5 text-gray-600 font-dm-sans text-base leading-relaxed mb-6">
              "Finally kicked out the old payment processor and pulled the trigger on RepairHub Payments. Gotta admit I'm mad I didn't switch sooner. Terminal is awesome, Quick setup and the slideshow/video feature on the terminal is so dope. That's pretty much what sold me tbh. Thanks to RepairHub team for making it a quick and easy process."
            </blockquote>
            <a href="/contact" className="font-poppins font-semibold text-rd-teal hover:text-rd-dark inline-flex items-center gap-2 transition-colors">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-teal/10 text-rd-teal px-4 py-1.5 rounded-full mb-5">
              Accept Multiple Payment Methods
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">
              Fast & Simple Payment Process
            </h2>
            <p className="text-gray-500 font-dm-sans text-base leading-relaxed">
              Accept all cards at the same rate and get next day settlements. No lock-in contracts and no startup, ACH or other fees. They're confusing & we dislike fees as much as you do.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-center border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all"
              >
                <div className="h-8 flex items-center justify-center">{method.icon}</div>
                <p className="font-poppins font-medium text-xs text-rd-dark">{method.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Processing / Transaction Flow */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="container-main">
          <div className="max-w-2xl mb-16">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-[#FAF9E3] text-rd-dark px-4 py-1.5 rounded-full mb-5">
              Collect Payments Easier
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">
              Integrated Payment Processing Made For Repair Shops
            </h2>
          </div>

          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0 mb-16">
            {[
              { label: 'Ticket Closed Out', icon: 'M9 12h6m-6 4h6M7 3h10a2 2 0 012 2v14l-3-2-3 2-3-2-3 2V5a2 2 0 012-2z' },
              { label: 'Terminal Displays Total', icon: 'M9 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2h-2M9 3v4h6V3M9 3h6M9 17h6' },
              { label: 'Customer Taps or Pays Remotely', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0' },
              { label: 'Funds Settle Next Day', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
            ].map((node, i, arr) => (
              <React.Fragment key={node.label}>
                <div className="flex-1 bg-rd-cream rounded-2xl p-5 flex flex-col items-center text-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-rd-teal text-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={node.icon} />
                    </svg>
                  </div>
                  <p className="font-poppins font-semibold text-sm text-rd-dark">{node.label}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="flex items-center justify-center px-1 md:px-2 rotate-90 md:rotate-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-rd-teal/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="text-gray-500 font-dm-sans text-base leading-relaxed max-w-3xl mb-12">
            With integrated payments, you don't have to enter the amount manually on your payment terminal. When you want to check out the customer, the payment terminal automatically displays the amount, providing a great experience for your customers and employees. The customer also sees an option for tipping, which your employees will appreciate.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="relative border-t-2 border-rd-lime pt-6">
                <span className="font-poppins font-black text-4xl text-rd-teal/10 absolute -top-2 right-0">{step.step}</span>
                <div className="w-11 h-11 rounded-xl bg-rd-teal/10 text-rd-teal flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-rd-dark py-20 px-6">
        <div className="container-main grid md:grid-cols-[auto,1fr] gap-10 items-center">
          <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-4">
              Security
            </span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
              End-To-End Encryption & Nothing But The Best In PCI-Compliance
            </h2>
            <p className="text-white/70 font-dm-sans text-base leading-relaxed max-w-2xl">
              Other processors let you fend for yourself to meet PCI requirements. We handle the expense and time required to become PCI compliant so you don't have to worry about it.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started Today */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="rounded-3xl bg-gradient-to-br from-rd-teal to-rd-dark p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-rd-lime/10" />
            <div className="relative">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">
                Get Started Today!
              </h2>
              <p className="text-white/80 font-dm-sans text-lg mb-8 max-w-xl mx-auto">
                Demo a fully integrated and secure payment processing platform
              </p>
              <a href="/contact" className="btn-primary px-8 py-3.5 inline-block">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-10">All the Answers You're Looking For</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div>
              <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-1">Do you have more questions?</h3>
              <p className="text-gray-500 font-dm-sans text-sm">
                Did we miss anything? Please reach out to us to keep the conversation going.
              </p>
            </div>
            <a
              href="tel:+13022077373"
              className="flex items-center gap-3 bg-rd-teal/10 text-rd-teal font-poppins font-semibold px-6 py-3.5 rounded-full whitespace-nowrap hover:bg-rd-teal hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 302-207-7373
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
