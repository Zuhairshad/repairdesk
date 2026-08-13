import React from 'react';
import PageLayout from '../../components/PageLayout';

const features = [
  {
    title: 'Online Intake Forms',
    description: 'Customers submit a mail-in repair request directly from your website. They describe the issue, upload photos, and agree to your terms — before the device even ships.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Shipping Label Generation',
    description: 'Generate inbound shipping labels for customers with a single click. Print-ready labels can be emailed directly to the customer so they can drop off without friction.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: 'Intake Photos',
    description: 'When the device arrives, technicians photograph its condition and attach those images to the work order. Pre-existing damage is documented before a wrench is touched.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Automated Email Status Updates',
    description: 'Customers receive automatic emails at every stage — received, diagnosed, in repair, repaired, shipped back. No manual follow-up, no missed communications.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Return Shipping Tracking',
    description: 'Generate return shipping labels and share real-time tracking links with customers. They know exactly when their repaired device will arrive back at their door.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    title: 'Customer Portal',
    description: 'Customers log in to a self-service portal to track their repair, approve estimates, pay invoices, and download receipts — all without calling your shop.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Prepaid Shipping Labels',
    description: 'Offer a premium experience by emailing customers a prepaid inbound shipping label. Remove every barrier to sending in a device and win more mail-in business.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '100%', label: 'End-to-end trackable' },
  { value: '0', label: 'Phone calls needed' },
  { value: '24/7', label: 'Intake form availability' },
  { value: '1-click', label: 'Shipping label generation' },
];

const faqs = [
  {
    q: 'How do customers submit a mail-in repair?',
    a: 'Customers fill out an online intake form embedded on your website. They describe the issue, upload photos, agree to your terms and pricing, and then receive instructions on how to ship the device to your shop.',
  },
  {
    q: 'Does this integrate with shipping carriers?',
    a: 'Yes. RepairDesk Mail-in Repair integrates with major shipping carriers to generate and print shipping labels directly from the platform. Tracking numbers are automatically shared with customers.',
  },
  {
    q: 'Can customers pay online before the device is shipped back?',
    a: 'Yes. Once the repair is complete, customers receive an email with a payment link. They pay online and the device is shipped back upon payment confirmation.',
  },
];

export default function MailInRepairProductPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 md:py-32">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-rd-lime text-rd-dark text-sm font-semibold font-poppins px-4 py-1.5 rounded-full mb-6">
              Mail-In Repair
            </span>
            <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Mail-In Repair Management
            </h1>
            <p className="font-dm-sans text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Track and manage mail-in repair orders end-to-end. From intake to return shipping — fully automated, fully professional.
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
              Expand your reach beyond your local market
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              Mail-in repairs let you serve customers anywhere in the country. RepairDesk handles the logistics and communication so you can focus on fixing devices.
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

      {/* How it works */}
      <section className="py-20 bg-rd-cream">
        <div className="container-main">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-4">
              How mail-in repair works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Customer Submits Form', body: 'Online intake form captures device details, issue, and customer info.' },
              { step: '02', title: 'Device Ships In', body: 'Customer ships using prepaid label or their own carrier. Tracking is linked to the ticket.' },
              { step: '03', title: 'Repair & Update', body: 'Technicians repair the device and auto-emails keep the customer informed at every step.' },
              { step: '04', title: 'Pay & Ship Back', body: 'Customer pays online. Return shipping label is generated and the device is sent back.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-7 text-center shadow-sm">
                <div className="font-dm-serif text-5xl text-rd-teal/20 mb-3">{item.step}</div>
                <h3 className="font-poppins font-semibold text-rd-dark text-base mb-3">{item.title}</h3>
                <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
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
              "Mail-in now accounts for 35% of our monthly revenue. RepairDesk handles the intake, the updates, and the shipping automatically — I barely touch it. It just runs."
            </p>
            <div>
              <div className="font-poppins font-semibold text-rd-lime">Aiden Clarke</div>
              <div className="font-dm-sans text-white/60 text-sm mt-1">Owner, NationwideRepair.co — Denver, CO</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-rd-cream">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{faq.q}</h3>
                  <p className="font-dm-sans text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
