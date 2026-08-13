import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const kbCategories = [
  {
    title: 'Getting Started',
    desc: 'Set up your account, configure your first store, and learn the basics of RepairDesk in minutes.',
    articleCount: 24,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: 'POS & Checkout',
    desc: 'Learn how to process sales, handle refunds, apply discounts, and manage your checkout workflow.',
    articleCount: 31,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Inventory',
    desc: 'Manage products, track stock levels, set reorder points, print barcodes, and handle supplier orders.',
    articleCount: 28,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Tickets & Repairs',
    desc: 'Create repair tickets, assign technicians, track repair status, and manage warranty claims.',
    articleCount: 35,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    ),
  },
  {
    title: 'Integrations',
    desc: 'Connect RepairDesk with payment processors, e-commerce platforms, accounting tools, and more.',
    articleCount: 19,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-3.18a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
      </svg>
    ),
  },
  {
    title: 'Account & Billing',
    desc: 'Manage your subscription, update payment methods, add users, and configure account settings.',
    articleCount: 14,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function KnowledgeBasePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main text-center">
          <span className="inline-block bg-rd-teal/10 text-rd-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Support
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-rd-dark mb-4">
            Knowledge Base
          </h1>
          <p className="text-gray-500 font-dm-sans text-lg max-w-2xl mx-auto mb-8">
            Find guides, how-tos, and answers to help you get the most out of RepairDesk.
          </p>

          {/* Search Bar (decorative) */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search for articles, guides, or topics..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-10 text-center">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kbCategories.map((cat) => (
              <Link
                key={cat.title}
                to="#"
                className="group bg-white rounded-2xl p-7 border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-rd-teal/10 text-rd-teal flex items-center justify-center mb-5 group-hover:bg-rd-teal group-hover:text-white transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-poppins font-bold text-rd-dark text-lg mb-2 group-hover:text-rd-teal transition-colors">
                  {cat.title}
                </h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-4">
                  {cat.desc}
                </p>
                <span className="text-rd-teal font-poppins font-semibold text-sm flex items-center gap-1">
                  {cat.articleCount} articles
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main text-center max-w-2xl">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-6">
            Our support team is available 24/6 to answer questions and help you get set up. Reach out anytime.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary px-8 py-3.5">Contact Support</Link>
            <a href="mailto:hello@repairdesk.co" className="border border-rd-teal text-rd-teal px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-rd-teal hover:text-white transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
