import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';

const CheckIcon = ({ className = 'w-5 h-5 text-rd-teal flex-shrink-0' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const faqs = [
  {
    q: 'What is a repair shop POS system?',
    a: 'A repair shop POS (Point of Sale) system is software designed to manage all aspects of a repair business — from creating repair tickets and tracking jobs to processing payments and managing inventory. RepairDesk\'s POS is built specifically for repair shops, unlike generic retail POS systems.',
  },
  {
    q: 'Does RepairDesk POS work for multiple store locations?',
    a: 'Yes! RepairDesk supports multiple store locations from a single account. You can manage inventory, staff, reports, and repair tickets across all your locations and see unified data in one dashboard.',
  },
  {
    q: 'Can I use RepairDesk POS on a tablet or iPad?',
    a: 'RepairDesk is a cloud-based POS that works in any modern web browser, including on iPad and Android tablets. You can run it on a desktop computer, laptop, or tablet — whatever works best for your counter setup.',
  },
  {
    q: 'Does RepairDesk integrate with payment processors?',
    a: 'Yes, RepairDesk integrates with several payment solutions including RepairDesk Payments (our preferred solution), Square, Paymentsense (UK/Ireland), and Tyro (Australia). You can accept cash, cards, contactless payments, and payment links.',
  },
  {
    q: 'How does repair ticket management work?',
    a: 'When a customer brings in a device, you create a repair ticket directly from the POS. You choose the device, log the problem, assign a technician, and set a due date. Customers receive automatic SMS/email updates as the status changes, and can track their repair online.',
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-poppins font-semibold text-rd-dark text-sm pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-rd-teal flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function PointOfSalePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 md:py-32">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-rd-lime text-rd-dark text-sm font-semibold font-poppins px-4 py-1.5 rounded-full mb-6">
              Point of Sale
            </span>
            <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              POS Software for Repair Shops
            </h1>
            <p className="font-dm-sans text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Our Point of Sale Software is specifically designed to streamline your repair business. From inventory and billing to acquisitions, customer management and integrations, everything you need is built in to help you run your repair shop smoothly. You focus on the repairs, and we'll handle the rest!
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

      {/* Section 1: Checkout More Customers In Less Time */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">Faster Checkout</span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2 mb-6">
                Checkout More Customers In Less Time
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-rd-dark mb-1">Pre & Post Repair Checklist</h3>
                    <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">
                      Satisfy your customers by logging the device's condition before you take it in for repair and after you hand it over to the customer.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-rd-dark mb-1">Repair Ticket Management</h3>
                    <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">
                      Create repair tickets directly from the POS screen. Choose a device or problem and assign it to a repair technician in just a few clicks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-rd-dark mb-1">Customer Self Check-In</h3>
                    <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">
                      Reduce employee error and counter lines by collecting essential customer data before they come to the counter.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-rd-dark mb-1">Customer Database</h3>
                    <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">
                      Collect customer emails and phone numbers with a few clicks. Quickly pull up customer information on your POS if they walk in again.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-rd-cream rounded-2xl p-10 flex items-center justify-center min-h-64">
              <div className="text-center">
                <div className="font-dm-serif text-6xl text-rd-teal mb-3">2.5x</div>
                <div className="font-dm-sans text-gray-600 text-lg">Faster checkouts vs. manual entry</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Payments For Repair Shops Done Right */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">Payments</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2">
              Payments For Repair Shops Done Right
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Contactless Payments',
                description: 'Collect contactless payments using RFID or send a payment link directly to your customers via email.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                ),
              },
              {
                title: 'Partial Payments',
                description: 'Give customers the option to pay partial invoice amounts. Split payments across multiple methods with ease.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
              },
              {
                title: 'Deposits',
                description: 'Collect deposits from customers before you start working on their repairs. Protect your time and parts.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Estimates & Invoices',
                description: 'Send estimates to customers via email, easily convert those estimates to invoices and collect payments.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-12 h-12 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{item.title}</h3>
                <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Retain Customers */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: 'Loyalty Program', sub: 'Build repeat business' },
                  { stat: 'Warranty Tracking', sub: 'Built-in warranty claims' },
                  { stat: 'Refund Management', sub: 'With or without restocking fees' },
                  { stat: 'Review Protection', sub: 'Reduce bad reviews' },
                ].map(({ stat, sub }) => (
                  <div key={stat} className="bg-rd-cream rounded-2xl p-5 text-center">
                    <div className="font-poppins font-bold text-rd-dark text-sm mb-1">{stat}</div>
                    <div className="text-xs text-gray-500 font-dm-sans">{sub}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">Customer Retention</span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2 mb-6">
                Tools To Help You Retain Customers & Increase Repeat Purchases
              </h2>
              <ul className="space-y-4">
                {[
                  'Build your customer database, grow repeat business, and increase lifetime value with a loyalty program.',
                  'Reduce refunds and bad reviews while encouraging customers to come back for more sales.',
                  'Built-in warranty claims tracking so you know exactly when a customer can claim a warranty.',
                  'Process refunds with or without restocking fees when customers aren\'t happy with their purchase.',
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="font-dm-sans text-gray-600 text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Get More Out Of Your Customers */}
      <section className="bg-rd-dark py-20">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-rd-lime text-sm font-semibold uppercase tracking-widest">Upselling</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-white mt-2">
              Get More Out Of Your Customers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Bundles & Discounts',
                description: 'Increase average order value by bundling accessories and repairs and selling them at discounts.',
              },
              {
                title: 'Accessory Upsells',
                description: 'Upsell customers by retailing accessories such as screen protectors, phone covers, and more.',
              },
              {
                title: 'Customer Groups',
                description: 'Create customer groups and give them specific discounts, so they always come back to your store.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-2xl p-6 border border-white/10">
                <h3 className="font-poppins font-semibold text-white mb-2">{item.title}</h3>
                <p className="font-dm-sans text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: New Revenue Streams */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">Revenue Streams</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2">
              Generate More Business With New Revenue Streams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-poppins font-semibold text-rd-dark mb-2">Pre-Owned Devices</h3>
              <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">
                Buy, refurbish and sell second-hand devices to add another stream of revenue to your repair shop.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="font-poppins font-semibold text-rd-dark mb-2">Gift Cards</h3>
              <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">
                Boost customer retention and increase brand awareness by offering digital or plastic gift cards to your customers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="font-poppins font-semibold text-rd-dark mb-2">Prepaid PINs</h3>
              <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">
                Sell prepaid PINs for H2O, AT&T, T-Mobile, Tracfone, Boost, Verizon, & any other network to add instant revenue.
              </p>
            </div>
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
              "RepairDesk has completely transformed how we run our shop. From ticketing to payments to inventory — everything is in one place and it just works. I wouldn't go back to our old system for anything."
            </p>
            <div>
              <div className="font-poppins font-semibold text-rd-lime">Anthony Alfieri</div>
              <div className="font-dm-sans text-white/60 text-sm mt-1">Repair Shop Owner</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-rd-teal py-20">
        <div className="container-main text-center">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-white mb-4">
            Ready to Transform Your Repair Shop?
          </h2>
          <p className="font-dm-sans text-white/80 text-lg max-w-xl mx-auto mb-8">
            Join thousands of repair shops worldwide who use RepairDesk POS every day to run a faster, smarter business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block bg-rd-lime text-rd-dark font-semibold px-8 py-3.5 rounded-full hover:bg-yellow-300 transition-colors font-poppins"
            >
              Start Free Trial
            </a>
            <a
              href="#"
              className="inline-block border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors font-poppins"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
