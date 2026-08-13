import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const comparisonData = [
  { feature: 'Point of Sale', rd: true, competitor: true },
  { feature: 'Inventory Management', rd: true, competitor: true },
  { feature: 'Repair Ticket Tracking', rd: true, competitor: true },
  { feature: 'Built-in Marketing Automation', rd: true, competitor: false },
  { feature: 'Customer Facing Display', rd: true, competitor: false },
  { feature: 'Multi-Location Management', rd: true, competitor: true },
  { feature: 'Integrated Phone System', rd: true, competitor: false },
  { feature: 'Loyalty Program', rd: true, competitor: false },
  { feature: 'Self Check-In Kiosk', rd: true, competitor: false },
  { feature: 'Store Credits', rd: true, competitor: true },
  { feature: 'Gift Cards', rd: true, competitor: false },
  { feature: 'Reviews Management', rd: true, competitor: false },
];

const differentiators = [
  {
    title: 'All-in-One Marketing Suite',
    description:
      'RepairDesk includes built-in marketing automation, Google Reviews management, and a loyalty program — tools that keep customers coming back without bolting on third-party apps. RepairShopr leaves marketing to external integrations, adding cost and complexity.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: 'Customer-Facing Hardware & Kiosk',
    description:
      'From a customer-facing display at checkout to a self check-in kiosk that lets walk-ins start their own repair tickets, RepairDesk gives you storefront tools that reduce wait times and free up your counter staff. RepairShopr does not offer either feature.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Integrated Phone System',
    description:
      'RepairDesk PhonePro brings VoIP calling, caller ID, and call logs directly into your repair workflow. See who is calling, pull up their ticket instantly, and log the call — no switching apps. RepairShopr has no built-in phone integration.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'Can I migrate my data from RepairShopr to RepairDesk?',
    a: 'Yes. RepairDesk offers a free data migration service that brings over your customers, tickets, inventory, and invoices from RepairShopr. Our onboarding team handles the heavy lifting so you can switch without losing history.',
  },
  {
    q: 'Does RepairDesk cost more than RepairShopr?',
    a: 'RepairDesk plans are competitively priced, and you get significantly more features out of the box — including marketing automation, a customer-facing display, loyalty programs, and gift cards — without paying for add-ons or third-party tools.',
  },
  {
    q: 'Is RepairDesk suitable for multi-location repair shops?',
    a: 'Absolutely. RepairDesk was built with multi-store operations in mind. You get centralized inventory, cross-location reporting, role-based access, and franchise management tools that scale as you grow.',
  },
  {
    q: 'Does RepairDesk offer a free trial?',
    a: 'Yes. You can start a 14-day free trial with full access to all features — no credit card required. That gives you enough time to import your data and see how RepairDesk compares to RepairShopr in your day-to-day workflow.',
  },
  {
    q: 'What kind of support does RepairDesk provide?',
    a: 'RepairDesk offers live chat, email, and phone support along with a comprehensive knowledge base and video tutorials. Growth and Advanced plan customers also receive priority support and a dedicated onboarding specialist.',
  },
];

export default function VsRepairShoprPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 md:py-32 px-6">
        <div className="container-main max-w-4xl text-center">
          <span className="inline-block bg-rd-lime text-rd-dark text-xs font-bold uppercase tracking-widest font-poppins px-4 py-1.5 rounded-full mb-6">
            Comparison
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
            RepairDesk vs RepairShopr — Why Repair Shops Choose RepairDesk
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed max-w-2xl mx-auto mb-10">
            Both platforms handle repair tickets, inventory, and point of sale. See where RepairDesk pulls ahead with built-in marketing, a customer-facing display, and tools RepairShopr simply does not offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing" className="btn-primary text-center">
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white/30 text-white font-poppins font-medium hover:bg-white/10 transition-colors duration-200"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main max-w-4xl">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-rd-dark text-center mb-4">
            Feature-by-Feature Comparison
          </h2>
          <p className="text-gray-500 font-dm-sans text-center mb-12 max-w-xl mx-auto">
            A side-by-side look at the capabilities that matter most to repair shops.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left min-w-[480px]">
              <thead>
                <tr className="bg-rd-dark text-white sticky top-0">
                  <th className="font-poppins font-semibold text-sm py-4 px-6 w-1/2">Feature</th>
                  <th className="font-poppins font-semibold text-sm py-4 px-6 text-center bg-rd-teal w-1/4">
                    RepairDesk
                  </th>
                  <th className="font-poppins font-semibold text-sm py-4 px-6 text-center w-1/4">RepairShopr</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="font-dm-sans text-rd-dark text-sm py-4 px-6 font-medium">{row.feature}</td>
                    <td className="text-center py-4 px-6 bg-rd-teal/5">
                      <span className="text-green-500 text-xl">&#10003;</span>
                    </td>
                    <td className="text-center py-4 px-6">
                      {row.competitor ? (
                        <span className="text-green-500 text-xl">&#10003;</span>
                      ) : (
                        <span className="text-red-400 text-xl">&#10007;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main max-w-5xl">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-rd-dark text-center mb-4">
            Why Repair Shops Switch to RepairDesk
          </h2>
          <p className="text-gray-500 font-dm-sans text-center mb-12 max-w-xl mx-auto">
            Three areas where RepairDesk gives you capabilities that RepairShopr cannot match.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-5 group-hover:bg-rd-teal group-hover:text-white transition-colors duration-300">
                  {d.icon}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{d.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8F8FB] py-16 md:py-24 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-normal text-[32px] md:text-[38px] text-[#2e384d] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="font-poppins font-medium text-[#2e384d] text-[15px] pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-rd-teal shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="text-gray-500 font-poppins text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
