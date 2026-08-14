import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Getting Started',
    desc: 'Set up your store, onboard your team, and learn the essentials.',
    articles: 24,
    color: 'bg-emerald-50 text-emerald-600',
    iconBg: 'bg-emerald-100',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: 'POS & Checkout',
    desc: 'Process sales, refunds, discounts, and checkout workflows.',
    articles: 31,
    color: 'bg-blue-50 text-blue-600',
    iconBg: 'bg-blue-100',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    title: 'Inventory',
    desc: 'Track stock, manage products, barcodes, and supplier orders.',
    articles: 28,
    color: 'bg-amber-50 text-amber-600',
    iconBg: 'bg-amber-100',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Repair Tickets',
    desc: 'Create tickets, assign techs, track status, and warranty claims.',
    articles: 35,
    color: 'bg-rose-50 text-rose-600',
    iconBg: 'bg-rose-100',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.193-.14 1.743" />
      </svg>
    ),
  },
  {
    title: 'Payments',
    desc: 'Payment processing, gateways, invoicing, and refund handling.',
    articles: 18,
    color: 'bg-violet-50 text-violet-600',
    iconBg: 'bg-violet-100',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Integrations',
    desc: 'Connect with payment processors, e-commerce, and accounting.',
    articles: 19,
    color: 'bg-cyan-50 text-cyan-600',
    iconBg: 'bg-cyan-100',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.959.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
      </svg>
    ),
  },
  {
    title: 'Reports',
    desc: 'Sales analytics, inventory reports, and business insights.',
    articles: 22,
    color: 'bg-teal-50 text-teal-600',
    iconBg: 'bg-teal-100',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: 'Employee Management',
    desc: 'Roles, permissions, time tracking, and commission setup.',
    articles: 16,
    color: 'bg-orange-50 text-orange-600',
    iconBg: 'bg-orange-100',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Account Settings',
    desc: 'Subscription, billing, security, and account preferences.',
    articles: 14,
    color: 'bg-slate-50 text-slate-600',
    iconBg: 'bg-slate-200',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const popularArticles = [
  { title: 'How to set up your first store location', views: 12840, category: 'Getting Started' },
  { title: 'Creating and managing repair tickets', views: 9720, category: 'Repair Tickets' },
  { title: 'Configuring tax rates by region', views: 8450, category: 'POS & Checkout' },
  { title: 'Connecting Stripe as a payment gateway', views: 7930, category: 'Payments' },
  { title: 'Importing inventory from a CSV file', views: 7210, category: 'Inventory' },
  { title: 'Setting up employee roles and permissions', views: 6580, category: 'Employee Management' },
];

const quickStartSteps = [
  { step: 1, title: 'Create Your Account', desc: 'Sign up and verify your email to access your RepairHub dashboard.', time: '2 min' },
  { step: 2, title: 'Add Your Store', desc: 'Enter your store details, logo, and business hours to personalize your setup.', time: '5 min' },
  { step: 3, title: 'Import Inventory', desc: 'Bulk-upload products via CSV or add them one by one from the Inventory tab.', time: '10 min' },
  { step: 4, title: 'Start Selling', desc: 'Open the POS, ring up your first sale, and print a receipt. You are live!', time: '1 min' },
];

const videoTutorials = [
  { title: 'RepairHub Full Walkthrough', duration: '12:34', views: '24K', thumb: 'rd-teal' },
  { title: 'Mastering Repair Tickets', duration: '8:17', views: '18K', thumb: 'emerald-600' },
  { title: 'Advanced Inventory Management', duration: '10:45', views: '15K', thumb: 'violet-600' },
];

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PageLayout>
      {/* ─── Hero with Search ─── */}
      <section className="relative bg-rd-dark overflow-hidden">
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
        {/* Floating book shapes */}
        <div className="absolute top-12 left-[8%] w-16 h-20 rounded-sm border border-white/10 rotate-[-12deg] opacity-20" />
        <div className="absolute bottom-16 right-[12%] w-12 h-16 rounded-sm border border-rd-lime/20 rotate-[8deg] opacity-30" />
        <div className="absolute top-1/2 left-[75%] w-10 h-14 rounded-sm border border-white/10 rotate-[-5deg] opacity-15" />

        <div className="relative container-main px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-rd-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <span className="text-white/80 font-dm-sans text-sm font-medium">Knowledge Base</span>
          </div>

          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 tracking-tight">
            How can we help<span className="text-rd-mint">?</span>
          </h1>
          <p className="text-white/60 font-dm-sans text-lg md:text-xl max-w-xl mx-auto mb-10">
            Search 200+ articles, guides, and tutorials to find answers fast.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-0 bg-rd-teal/30 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, guides, or topics..."
                className="w-full pl-14 pr-32 py-5 rounded-2xl bg-white text-rd-dark font-dm-sans text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rd-lime/50 shadow-2xl shadow-black/20"
              />
              <button className="absolute right-3 bg-rd-teal hover:bg-rd-teal/90 text-white font-poppins font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['Repair tickets', 'POS setup', 'Inventory CSV', 'Stripe integration'].map((tag) => (
              <Link key={tag} to="#" className="text-white/50 hover:text-rd-mint font-dm-sans text-sm border border-white/10 hover:border-rd-lime/40 rounded-full px-4 py-1.5 transition-colors">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Category Cards Grid ─── */}
      <section className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark">Browse by Topic</h2>
              <p className="text-gray-500 font-dm-sans mt-1">9 categories covering every corner of RepairHub.</p>
            </div>
            <span className="font-dm-sans text-sm text-gray-400">207 total articles</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to="#"
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-lg hover:shadow-rd-teal/8 transition-all duration-200"
              >
                {/* Hover accent bar */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-rd-teal scale-x-0 group-hover:scale-x-100 rounded-full transition-transform origin-left" />

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center shrink-0 ${cat.color.split(' ')[1]} group-hover:bg-rd-teal group-hover:text-white transition-colors`}>
                    {cat.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-poppins font-semibold text-rd-dark text-base mb-1 group-hover:text-rd-teal transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-gray-500 font-dm-sans text-sm leading-relaxed line-clamp-2">
                      {cat.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs font-dm-sans text-gray-400">{cat.articles} articles</span>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-rd-teal group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Popular Articles ─── */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left column: heading */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <span className="inline-block bg-rd-teal/10 text-rd-teal text-xs font-semibold font-poppins uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  Trending
                </span>
                <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-3">
                  Popular Articles
                </h2>
                <p className="text-gray-500 font-dm-sans leading-relaxed">
                  The most-read articles this month. Start here if you are new or looking for quick answers.
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm font-dm-sans text-gray-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Based on 52,000+ page views
                </div>
              </div>
            </div>

            {/* Right column: articles list */}
            <div className="lg:col-span-3 space-y-1">
              {popularArticles.map((article, i) => (
                <Link
                  key={article.title}
                  to="#"
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-rd-cream/70 transition-colors"
                >
                  <span className="font-poppins font-bold text-2xl text-gray-200 group-hover:text-rd-teal/40 transition-colors w-8 shrink-0 text-center">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-poppins font-semibold text-rd-dark text-sm group-hover:text-rd-teal transition-colors truncate">
                      {article.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs font-dm-sans text-gray-400">{article.category}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="text-xs font-dm-sans text-gray-400 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {article.views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-rd-teal shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quick-Start Guide ─── */}
      <section className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-3">
              Get Up and Running in 4 Steps
            </h2>
            <p className="text-gray-500 font-dm-sans">From sign-up to your first sale in under 20 minutes.</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-0.5 bg-gradient-to-r from-rd-teal via-rd-teal/50 to-rd-teal" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {quickStartSteps.map((s) => (
                <div key={s.step} className="relative text-center group">
                  {/* Step circle */}
                  <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-rd-teal text-white flex items-center justify-center font-poppins font-bold text-lg shadow-lg shadow-rd-teal/20 mb-4">
                    {s.step}
                  </div>
                  <h4 className="font-poppins font-semibold text-rd-dark text-sm mb-2">{s.title}</h4>
                  <p className="text-gray-500 font-dm-sans text-xs leading-relaxed mb-2">{s.desc}</p>
                  <span className="inline-block bg-rd-teal/10 text-rd-teal text-[11px] font-poppins font-medium rounded-full px-2.5 py-0.5">
                    ~{s.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="#" className="btn-primary px-8 py-3.5 inline-flex items-center gap-2">
              Start the Quick-Start Guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Video Tutorials ─── */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="inline-block bg-rose-50 text-rose-500 text-xs font-semibold font-poppins uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                Video
              </span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark">Watch and Learn</h2>
            </div>
            <Link to="#" className="text-rd-teal font-poppins font-semibold text-sm hover:underline flex items-center gap-1">
              View all tutorials
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoTutorials.map((vid) => (
              <Link key={vid.title} to="#" className="group">
                {/* Thumbnail placeholder */}
                <div className={`relative aspect-video rounded-2xl bg-gradient-to-br from-rd-dark to-gray-800 overflow-hidden mb-4`}>
                  {/* Decorative shapes inside thumbnail */}
                  <div className="absolute inset-0 opacity-10">
                    <div className={`absolute top-4 right-4 w-20 h-20 rounded-full bg-${vid.thumb}`} />
                    <div className={`absolute bottom-4 left-4 w-14 h-14 rounded-lg bg-${vid.thumb} rotate-12`} />
                  </div>
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 group-hover:scale-110 transition-all">
                      <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-dm-sans font-medium px-2 py-0.5 rounded">
                    {vid.duration}
                  </div>
                </div>
                <h4 className="font-poppins font-semibold text-rd-dark text-sm group-hover:text-rd-teal transition-colors mb-1">
                  {vid.title}
                </h4>
                <p className="text-xs font-dm-sans text-gray-400">{vid.views} views</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Still Need Help? ─── */}
      <section className="bg-rd-dark py-16 md:py-20 px-6 relative overflow-hidden">
        {/* Decorative gradient orbs */}
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-rd-teal/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-rd-lime/10 rounded-full blur-3xl" />

        <div className="container-main relative">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-3">
              Still Need Help?
            </h2>
            <p className="text-white/50 font-dm-sans max-w-lg mx-auto">
              Our support team is available 24/6. Pick the channel that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {/* Email */}
            <a href="mailto:hello@repairhub.co" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rd-teal/40 rounded-2xl p-6 text-center transition-all">
              <div className="w-11 h-11 mx-auto rounded-xl bg-rd-teal/20 flex items-center justify-center mb-3 group-hover:bg-rd-teal transition-colors">
                <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h4 className="font-poppins font-semibold text-white text-sm mb-1">Email</h4>
              <p className="text-white/40 font-dm-sans text-xs">Typically replies in 2 hrs</p>
            </a>

            {/* Live Chat */}
            <Link to="#" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rd-teal/40 rounded-2xl p-6 text-center transition-all">
              <div className="w-11 h-11 mx-auto rounded-xl bg-rd-teal/20 flex items-center justify-center mb-3 group-hover:bg-rd-teal transition-colors">
                <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h4 className="font-poppins font-semibold text-white text-sm mb-1">Live Chat</h4>
              <p className="text-white/40 font-dm-sans text-xs">Online now</p>
            </Link>

            {/* Phone */}
            <a href="tel:+18001234567" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rd-teal/40 rounded-2xl p-6 text-center transition-all">
              <div className="w-11 h-11 mx-auto rounded-xl bg-rd-teal/20 flex items-center justify-center mb-3 group-hover:bg-rd-teal transition-colors">
                <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h4 className="font-poppins font-semibold text-white text-sm mb-1">Phone</h4>
              <p className="text-white/40 font-dm-sans text-xs">Mon-Sat, 9am-6pm EST</p>
            </a>

            {/* Schedule a Call */}
            <Link to="#" className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-rd-lime/40 rounded-2xl p-6 text-center transition-all">
              <div className="w-11 h-11 mx-auto rounded-xl bg-rd-lime/20 flex items-center justify-center mb-3 group-hover:bg-rd-lime transition-colors">
                <svg className="w-5 h-5 text-rd-mint group-hover:text-rd-dark transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
              </div>
              <h4 className="font-poppins font-semibold text-white text-sm mb-1">Schedule a Call</h4>
              <p className="text-white/40 font-dm-sans text-xs">Book a 30-min slot</p>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
