import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const categories = [
  'All',
  'Payments',
  'Accounting',
  'eCommerce',
  'Marketing',
  'Parts Suppliers',
  'Shipping',
  'Automation',
  'Widgets',
  'Misc',
];

const integrations = [
  // Payments
  {
    name: 'RepairDesk Payments',
    category: 'Payments',
    description: 'Preferred Payment Solution. Accept payments seamlessly within RepairDesk with competitive rates and next-day funding.',
    badge: 'Preferred',
    color: 'bg-teal-100 text-teal-700',
    initials: 'RD',
  },
  {
    name: 'Square',
    category: 'Payments',
    description: 'Preferred Payment Partner. All-in-one payment solution with hardware and POS capabilities for in-store payments.',
    badge: 'Preferred Partner',
    color: 'bg-gray-100 text-gray-700',
    initials: 'SQ',
  },
  {
    name: 'Paymentsense',
    category: 'Payments',
    description: 'Payment processing solution available for repair shops in the UK and Ireland.',
    badge: 'UK / Ireland',
    color: 'bg-blue-100 text-blue-700',
    initials: 'PS',
  },
  {
    name: 'Tyro',
    category: 'Payments',
    description: 'Payment processing solution built for Australian repair shops. Fast, reliable EFTPOS integration.',
    badge: 'Australia',
    color: 'bg-orange-100 text-orange-700',
    initials: 'TY',
  },
  // Accounting
  {
    name: 'QuickBooks Online',
    category: 'Accounting',
    description: 'Sync your repair orders, invoices, and expenses directly with QuickBooks Online automatically.',
    badge: null,
    color: 'bg-green-100 text-green-700',
    initials: 'QB',
  },
  {
    name: 'Xero',
    category: 'Accounting',
    description: 'Xero simplifies your store\'s accounting by automatically sending invoices from RepairDesk to your Xero accounting system.',
    badge: null,
    color: 'bg-cyan-100 text-cyan-700',
    initials: 'XR',
  },
  {
    name: 'FreshBooks',
    category: 'Accounting',
    description: 'Simple invoicing and expense tracking. Sync your RepairDesk transactions with FreshBooks effortlessly.',
    badge: null,
    color: 'bg-red-100 text-red-700',
    initials: 'FB',
  },
  // eCommerce
  {
    name: 'WooCommerce',
    category: 'eCommerce',
    description: 'A popular shopping cart that gives you complete control to sell anything, anywhere. Sync inventory between your store and online shop.',
    badge: null,
    color: 'bg-purple-100 text-purple-700',
    initials: 'WC',
  },
  // Marketing
  {
    name: 'MailChimp',
    category: 'Marketing',
    description: 'Enable MailChimp integration to keep your mailing list up to date! Automatically sync customer data for email campaigns.',
    badge: null,
    color: 'bg-yellow-100 text-yellow-800',
    initials: 'MC',
  },
  {
    name: 'RepairDesk SMS',
    category: 'Marketing',
    description: 'Keep customers informed with automated SMS notifications for repair status updates, pickup reminders, and promotions.',
    badge: null,
    color: 'bg-teal-100 text-teal-700',
    initials: 'RS',
  },
  // Parts Suppliers
  {
    name: 'Injured Gadgets',
    category: 'Parts Suppliers',
    description: 'A leading US based supplier, is your one-stop-shop to order cell phone repair parts, tools, batteries and much more.',
    badge: null,
    color: 'bg-red-100 text-red-700',
    initials: 'IG',
  },
  {
    name: 'MobileSentrix',
    category: 'Parts Suppliers',
    description: 'Industry leader in parts distribution, largest wholesale supplier in wireless repair industry, offers extensive mobile parts from 3 distribution hubs in US, Canada, UK.',
    badge: null,
    color: 'bg-blue-100 text-blue-700',
    initials: 'MS',
  },
  {
    name: 'Phone LCD Parts',
    category: 'Parts Suppliers',
    description: 'Offers high-quality wholesale cell phone replacement parts, accessories, and LCD refurbishment to repair shops worldwide.',
    badge: null,
    color: 'bg-indigo-100 text-indigo-700',
    initials: 'PL',
  },
  {
    name: 'Wholesale Gadget Parts',
    category: 'Parts Suppliers',
    description: 'Order wholesale cell phone and tablet repair parts directly from your RepairDesk account to keep your inventory stocked.',
    badge: null,
    color: 'bg-green-100 text-green-700',
    initials: 'WG',
  },
  {
    name: 'Parts4Cell',
    category: 'Parts Suppliers',
    description: 'US-based cell phone repair parts distributor offering a wide range of quality parts delivered fast.',
    badge: null,
    color: 'bg-orange-100 text-orange-700',
    initials: 'P4',
  },
  {
    name: 'Nexus Cellular',
    category: 'Parts Suppliers',
    description: 'Leading supplier of wholesale cell phone parts and accessories. Order directly from RepairDesk with seamless inventory sync.',
    badge: null,
    color: 'bg-purple-100 text-purple-700',
    initials: 'NC',
  },
  {
    name: 'Balaji Wireless',
    category: 'Parts Suppliers',
    description: 'Worldwide supplier of phone accessories including cases, chargers, speakers and more. Order in bulk from your RepairDesk dashboard.',
    badge: null,
    color: 'bg-pink-100 text-pink-700',
    initials: 'BW',
  },
  // Shipping
  {
    name: 'ShipStation',
    category: 'Shipping',
    description: 'Streamline your mail-in repair shipping. Create labels, track packages, and manage returns all from within RepairDesk.',
    badge: null,
    color: 'bg-blue-100 text-blue-800',
    initials: 'SS',
  },
  // Automation
  {
    name: 'Zapier',
    category: 'Automation',
    description: 'Automate your repair shop by connecting RepairDesk with over 3,000+ apps. No coding required.',
    badge: null,
    color: 'bg-orange-100 text-orange-700',
    initials: 'ZP',
  },
  {
    name: 'Integrately',
    category: 'Automation',
    description: 'Streamline your repair shop by linking RepairDesk to 1,200+ apps — no coding needed!',
    badge: null,
    color: 'bg-violet-100 text-violet-700',
    initials: 'IN',
  },
  // Widgets
  {
    name: 'BuyBack Widget',
    category: 'Widgets',
    description: 'Allow customers to get instant quotes on used devices with pre-set buy prices straight from your website.',
    badge: null,
    color: 'bg-lime-100 text-lime-700',
    initials: 'BB',
  },
  {
    name: 'Repair Tracker',
    category: 'Widgets',
    description: 'Give power to your customers & allow them to check the status of their repair job in real time straight from your website.',
    badge: null,
    color: 'bg-teal-100 text-teal-700',
    initials: 'RT',
  },
  {
    name: 'Customer Self Check-In',
    category: 'Widgets',
    description: 'Reduce counter lines by letting customers check themselves in before they reach the counter.',
    badge: null,
    color: 'bg-cyan-100 text-cyan-700',
    initials: 'CI',
  },
  {
    name: 'Appointment Calendar',
    category: 'Widgets',
    description: 'Enable customers to book onsite, in-store or pick up repair appointments straight from your website!',
    badge: null,
    color: 'bg-indigo-100 text-indigo-700',
    initials: 'AC',
  },
  // Misc
  {
    name: 'Internal Wiki',
    category: 'Misc',
    description: 'Create manuals, repair guides or how-to articles for employees. Keep your team knowledge base centralized.',
    badge: null,
    color: 'bg-gray-100 text-gray-700',
    initials: 'IW',
  },
  {
    name: 'Google Calendar',
    category: 'Misc',
    description: 'Sync & Track Onsite, In-Store and Pick Up repair appointments with Google Calendar for your whole team.',
    badge: null,
    color: 'bg-blue-100 text-blue-700',
    initials: 'GC',
  },
  {
    name: 'M360 Diagnostics',
    category: 'Misc',
    description: 'Boost repair accuracy & efficiency with M360\'s comprehensive diagnostic tests. Diagnose devices faster and more accurately.',
    badge: null,
    color: 'bg-green-100 text-green-700',
    initials: 'M3',
  },
  {
    name: 'Avalara',
    category: 'Misc',
    description: 'Simplifies sales tax management by automatically calculating address-specific tax rates across all your transactions.',
    badge: null,
    color: 'bg-red-100 text-red-700',
    initials: 'AV',
  },
  {
    name: 'Phone System (3CX)',
    category: 'Misc',
    description: 'Easily engage with more customers, solve queries faster with 3CX phone system integration built into RepairDesk.',
    badge: null,
    color: 'bg-teal-100 text-teal-700',
    initials: '3C',
  },
  {
    name: 'Reusely',
    category: 'Misc',
    description: 'A seamless online solution for businesses managing buybacks and trade-ins. Perfect for device resellers.',
    badge: null,
    color: 'bg-emerald-100 text-emerald-700',
    initials: 'RE',
  },
];

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = integrations.filter((item) => {
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rd-cream pt-20 pb-16">
        <div className="container-main text-center">
          <span className="inline-block bg-rd-teal/10 text-rd-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Integrations
          </span>
          <h1 className="font-dm-serif text-4xl md:text-5xl text-rd-dark mb-4">
            Connect Your Favorite Tools
          </h1>
          <p className="font-dm-sans text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            RepairDesk integrates with the platforms your repair business already relies on — from payment processors and accounting software to parts suppliers and automation tools.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search integrations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm"
            />
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="container-main">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-rd-teal text-white shadow'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="bg-rd-cream py-16">
        <div className="container-main">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 font-dm-sans text-lg">No integrations found matching your search.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); }}
                className="mt-4 text-rd-teal font-semibold text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500 font-dm-sans mb-6">
                Showing {filtered.length} integration{filtered.length !== 1 ? 's' : ''}
                {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
                  >
                    <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center font-bold text-lg mb-4 font-poppins`}>
                      {item.initials}
                    </div>

                    <div className="mb-2">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-poppins font-semibold text-rd-dark text-sm">{item.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                          {item.category}
                        </span>
                        {item.badge && (
                          <span className="text-xs bg-rd-lime text-rd-dark px-2 py-0.5 rounded-full font-semibold">
                            {item.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 font-dm-sans mb-4 flex-1 leading-relaxed">{item.description}</p>

                    <a
                      href="#"
                      className="text-rd-teal text-sm font-semibold hover:underline flex items-center gap-1 mt-auto"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-rd-dark py-16">
        <div className="container-main text-center">
          <h2 className="font-dm-serif text-3xl text-white mb-4">Want to create your own integration?</h2>
          <p className="text-gray-300 font-dm-sans mb-8 max-w-xl mx-auto">
            RepairDesk offers a powerful API that lets developers build custom integrations and automate workflows for their repair shops.
          </p>
          <a
            href="#"
            className="inline-block bg-rd-lime text-rd-dark font-semibold px-8 py-3.5 rounded-full hover:bg-yellow-300 transition-colors font-poppins"
          >
            Read The Documentation
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
