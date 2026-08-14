import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const comparisonData = [
  { feature: 'Point of Sale', rd: true, competitor: true },
  { feature: 'Inventory Management', rd: true, competitor: true },
  { feature: 'Repair Ticket Tracking', rd: true, competitor: true },
  { feature: 'Built-in Marketing Automation', rd: true, competitor: false },
  { feature: 'Customer Facing Display', rd: true, competitor: false },
  { feature: 'Multi-Location Management', rd: true, competitor: false },
  { feature: 'Integrated Phone System', rd: true, competitor: false },
  { feature: 'Loyalty Program', rd: true, competitor: false },
  { feature: 'Self Check-In Kiosk', rd: true, competitor: false },
  { feature: 'Store Credits', rd: true, competitor: false },
  { feature: 'Gift Cards', rd: true, competitor: false },
  { feature: 'Reviews Management', rd: true, competitor: false },
  { feature: 'Trade-In & Buyback', rd: true, competitor: false },
  { feature: 'Employee Commission Tracking', rd: true, competitor: false },
  { feature: 'Franchise Management', rd: true, competitor: false },
];

const differentiators = [
  {
    title: 'Built for Scale, Not Just Basics',
    description:
      'Repairq covers ticket tracking and basic inventory, but RepairHub goes further with multi-location management, franchise tools, and centralized reporting. Whether you run one store or twenty, RepairHub grows with you instead of holding you back.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Revenue Tools That Repairq Lacks',
    description:
      'Gift cards, loyalty programs, store credits, and built-in marketing automation turn one-time customers into repeat visitors. RepairHub includes all of these out of the box. With Repairq, you either go without or patch together outside services.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'A Storefront Experience Customers Notice',
    description:
      'A customer-facing display at checkout, a self check-in kiosk for walk-ins, and an integrated phone system that pulls up caller history instantly — these are the in-store touches that make your shop feel professional. Repairq offers none of them.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'Can I switch from Repairq to RepairHub easily?',
    a: 'Yes. RepairHub provides a free assisted migration that transfers your customers, repair tickets, inventory, and invoices. Our onboarding team walks you through every step so the transition is smooth and nothing gets lost.',
  },
  {
    q: 'How does RepairHub pricing compare to Repairq?',
    a: 'RepairHub plans start at $99/month and include features that Repairq either does not offer or charges extra for — such as marketing automation, loyalty programs, gift cards, and multi-location management. You get more value without bolting on third-party tools.',
  },
  {
    q: 'Does RepairHub support multi-store and franchise operations?',
    a: 'Yes. RepairHub includes centralized inventory, cross-store reporting, franchise management dashboards, and role-based permissions designed for businesses with multiple locations. Repairq is limited to single-store workflows.',
  },
  {
    q: 'Does RepairHub offer a free trial?',
    a: 'Yes. You can start a 14-day free trial with full access to every feature — no credit card required. That gives you time to import your data and compare RepairHub to Repairq in your actual workflow.',
  },
  {
    q: 'What integrations does RepairHub support?',
    a: 'RepairHub integrates with QuickBooks, Xero, Shopify, WooCommerce, eBay, and dozens of other platforms. It also offers RepairHub Connect for custom integrations and an open API for developers who need deeper connectivity.',
  },
];

export default function VsRepairqPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#2d2f45] to-rd-teal text-white py-24 md:py-32 px-6">
        <div className="container-main max-w-4xl text-center">
          <span className="inline-block bg-rd-lime text-white text-xs font-bold uppercase tracking-widest font-poppins px-4 py-1.5 rounded-full mb-6">
            Comparison
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
            RepairHub vs Repairq — The Upgrade Your Repair Shop Deserves
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed max-w-2xl mx-auto mb-10">
            Repairq handles the basics, but RepairHub delivers a complete platform — from multi-location management and marketing automation to in-store hardware that transforms the customer experience.
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
            See how RepairHub stacks up against Repairq across the features repair shops rely on every day.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left min-w-[480px]">
              <thead>
                <tr className="bg-rd-dark text-white sticky top-0">
                  <th className="font-poppins font-semibold text-sm py-4 px-6 w-1/2">Feature</th>
                  <th className="font-poppins font-semibold text-sm py-4 px-6 text-center bg-rd-teal w-1/4">
                    RepairHub
                  </th>
                  <th className="font-poppins font-semibold text-sm py-4 px-6 text-center w-1/4">Repairq</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="font-dm-sans text-rd-dark text-sm py-4 px-6 font-medium">{row.feature}</td>
                    <td className="text-center py-4 px-6 bg-rd-teal/5">
                      <span className="text-blue-500 text-xl">&#10003;</span>
                    </td>
                    <td className="text-center py-4 px-6">
                      {row.competitor ? (
                        <span className="text-blue-500 text-xl">&#10003;</span>
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
            Why Repair Shops Choose RepairHub Over Repairq
          </h2>
          <p className="text-gray-500 font-dm-sans text-center mb-12 max-w-xl mx-auto">
            Three areas where RepairHub delivers what Repairq cannot.
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
