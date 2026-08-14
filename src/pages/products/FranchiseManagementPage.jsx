import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const faqs = [
  {
    q: 'How many franchise locations can RepairHub support?',
    a: 'RepairHub scales to 100+ franchise locations under a single franchisor account. Each location gets its own workspace while corporate maintains full oversight. For networks exceeding 100 locations, our enterprise team provides dedicated infrastructure.',
  },
  {
    q: 'Can franchisees customize anything locally?',
    a: 'Franchisors define exactly which settings are locked at corporate level and which can be adjusted locally. Pricing, templates, and brand assets can be locked, while local operating hours, staff roles, and promotions remain flexible.',
  },
  {
    q: 'How does royalty fee calculation work?',
    a: 'Royalties are calculated automatically based on rules you define — percentage of revenue, flat monthly fees, or tiered structures. Reports are generated each billing cycle with full transaction-level detail for transparency.',
  },
  {
    q: 'What happens during franchisee onboarding?',
    a: 'New locations inherit your master catalog, pricing rules, brand templates, and workflow configurations automatically. A dedicated onboarding checklist guides each new franchisee through setup, training, and go-live in as few as 48 hours.',
  },
  {
    q: 'Is franchise data isolated between locations?',
    a: 'Yes. Each franchisee sees only their own location data — tickets, customers, inventory, and financials. The franchisor dashboard aggregates all location data with drill-down capability, but individual locations cannot view sibling data.',
  },
];

const pipelineSteps = [
  {
    label: 'Apply',
    desc: 'Franchisee submits application with territory preference and financials',
    color: 'bg-rd-teal/10 text-rd-teal border-rd-teal/30',
  },
  {
    label: 'Approve',
    desc: 'Corporate reviews, scores, and approves the candidate',
    color: 'bg-amber-50 text-amber-700 border-amber-300',
  },
  {
    label: 'Setup',
    desc: 'Auto-provision store, inherit catalogs, assign territory',
    color: 'bg-blue-50 text-blue-700 border-blue-300',
  },
  {
    label: 'Launch',
    desc: 'Franchisee goes live with full training and support resources',
    color: 'bg-rd-cream text-rd-dark border-rd-teal/30',
  },
];

const complianceCards = [
  {
    title: 'Invoice Templates',
    desc: 'Locked brand-approved layouts across every location',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Repair Workflows',
    desc: 'Standardized intake-to-delivery process for every ticket',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Customer Messaging',
    desc: 'Pre-approved SMS and email templates with brand voice',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Pricing Rules',
    desc: 'Corporate-controlled pricing with optional local margin bands',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
];

export default function FranchiseManagementPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* Hero with Hub-and-Spoke Network SVG */}
      <section className="relative bg-rd-dark overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-rd-teal/20 border border-rd-teal/30 text-rd-mint text-sm font-poppins font-medium px-4 py-1.5 rounded-full mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Franchise Management
              </div>
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] mb-6">
                One HQ.<br />
                <span className="text-rd-mint">Every location.</span><br />
                Total control.
              </h1>
              <p className="font-dm-sans text-lg text-white/70 max-w-lg mb-10 leading-relaxed">
                Scale your repair franchise with centralized operations, automated royalty tracking, and real-time visibility into every store — from a single corporate dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo" className="inline-flex items-center justify-center bg-rd-lime text-white font-poppins font-semibold px-8 py-3.5 rounded-full hover:brightness-110 transition-all duration-200">
                  Talk to Enterprise Sales
                </Link>
                <Link to="/demo" className="inline-flex items-center justify-center border border-white/30 text-white font-poppins font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200">
                  Watch Product Tour
                </Link>
              </div>
            </div>

            {/* Hub-and-Spoke Franchise Network SVG */}
            <div className="hidden lg:flex justify-center">
              <svg viewBox="0 0 420 400" className="w-full max-w-[420px]" fill="none">
                {/* Connection lines from HQ to nodes */}
                <line x1="210" y1="200" x2="210" y2="60" stroke="#3d405b" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
                <line x1="210" y1="200" x2="350" y2="120" stroke="#3d405b" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
                <line x1="210" y1="200" x2="370" y2="260" stroke="#3d405b" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
                <line x1="210" y1="200" x2="310" y2="360" stroke="#3d405b" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
                <line x1="210" y1="200" x2="110" y2="360" stroke="#3d405b" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
                <line x1="210" y1="200" x2="50" y2="260" stroke="#3d405b" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />
                <line x1="210" y1="200" x2="70" y2="120" stroke="#3d405b" strokeWidth="2" strokeDasharray="6 4" opacity="0.5" />

                {/* Animated pulse rings on HQ */}
                <circle cx="210" cy="200" r="45" stroke="#3d405b" strokeWidth="1" opacity="0.15">
                  <animate attributeName="r" from="45" to="90" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.2" to="0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="210" cy="200" r="45" stroke="#3d405b" strokeWidth="1" opacity="0.15">
                  <animate attributeName="r" from="45" to="90" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.2" to="0" dur="3s" begin="1.5s" repeatCount="indefinite" />
                </circle>

                {/* Central HQ node */}
                <circle cx="210" cy="200" r="44" fill="#3d405b" />
                <circle cx="210" cy="200" r="44" stroke="#7ba8c4" strokeWidth="2.5" fill="none" />
                <text x="210" y="195" textAnchor="middle" fill="white" fontFamily="Poppins, sans-serif" fontWeight="700" fontSize="14">HQ</text>
                <text x="210" y="213" textAnchor="middle" fill="#7ba8c4" fontFamily="DM Sans, sans-serif" fontSize="9">CORPORATE</text>

                {/* Franchise nodes */}
                {[
                  { cx: 210, cy: 60, name: 'Store 1', status: '#457b9d' },
                  { cx: 350, cy: 120, name: 'Store 2', status: '#457b9d' },
                  { cx: 370, cy: 260, name: 'Store 3', status: '#457b9d' },
                  { cx: 310, cy: 360, name: 'Store 4', status: '#eab308' },
                  { cx: 110, cy: 360, name: 'Store 5', status: '#457b9d' },
                  { cx: 50, cy: 260, name: 'Store 6', status: '#457b9d' },
                  { cx: 70, cy: 120, name: 'Store 7', status: '#457b9d' },
                ].map((node, i) => (
                  <g key={i}>
                    <circle cx={node.cx} cy={node.cy} r="28" fill="#1e2035" stroke="#3d405b" strokeWidth="1.5" />
                    <circle cx={node.cx + 16} cy={node.cy - 16} r="5" fill={node.status} />
                    <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill="white" fontFamily="DM Sans, sans-serif" fontSize="10" fontWeight="500">{node.name}</text>
                  </g>
                ))}

                {/* Data flow particles */}
                {[60, 120, 260, 360].map((angle, i) => (
                  <circle key={`p${i}`} r="3" fill="#7ba8c4" opacity="0.8">
                    <animateMotion dur={`${2.5 + i * 0.3}s`} repeatCount="indefinite" path={`M210,200 L${[210, 350, 370, 310][i]},${[60, 120, 260, 360][i]}`} />
                  </circle>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Growth - Expanding Network */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-rd-teal font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Network Growth</span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mb-5">
              Watch your franchise network expand
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              From your first franchise location to your hundredth, RepairHub scales with you at every milestone.
            </p>
          </div>

          {/* Growth timeline */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-rd-teal/0 via-rd-teal/40 to-rd-teal/0 hidden md:block" />
            {[
              { count: '1-5', title: 'Startup Phase', detail: 'Establish your brand blueprint. Configure master catalog, pricing rules, invoice templates, and repair workflows that every future location will inherit.', side: 'left' },
              { count: '5-20', title: 'Regional Expansion', detail: 'Roll out locations rapidly with automated onboarding. Territory management prevents overlap. Corporate dashboard shows real-time performance for every store.', side: 'right' },
              { count: '20-50', title: 'National Scale', detail: 'Regional managers get delegated oversight. Automated royalty billing runs monthly. Multi-tier reporting lets you compare regions, cities, and individual stores.', side: 'left' },
              { count: '50+', title: 'Enterprise Network', detail: 'Full API integrations, white-label capabilities, dedicated account management, and custom SLAs. Your franchise network runs like a machine.', side: 'right' },
            ].map((phase, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-6 mb-12 last:mb-0 ${phase.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <div className={`flex-1 ${phase.side === 'right' ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="bg-rd-cream rounded-2xl p-6 md:p-8 border border-gray-100">
                    <div className="font-poppins text-rd-teal font-bold text-2xl mb-1">{phase.count} locations</div>
                    <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-2">{phase.title}</h3>
                    <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{phase.detail}</p>
                  </div>
                </div>
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-rd-teal text-white font-poppins font-bold text-sm flex items-center justify-center shadow-lg shadow-rd-teal/30">
                  {i + 1}
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchisee Dashboard Mockup */}
      <section className="py-20 md:py-28 bg-rd-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-rd-teal font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Franchisee View</span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mb-5">
                Every store gets its own performance cockpit
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg mb-8 leading-relaxed">
                Franchisees log in to see their own metrics, while corporate sees everything. Each location gets a dedicated dashboard with the KPIs that matter most.
              </p>
              <div className="space-y-4">
                {['Real-time revenue vs. target tracking', 'Repair ticket volume and completion rates', 'Inventory levels with low-stock alerts', 'Customer satisfaction scores'].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rd-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-dm-sans text-rd-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard mockup */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Title bar */}
              <div className="bg-rd-dark px-5 py-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-blue-400" />
                <span className="ml-3 text-white/50 font-dm-sans text-xs">Store #14 — Downtown Seattle</span>
              </div>
              <div className="p-5 space-y-4">
                {/* KPI row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Revenue MTD', value: '$42,850', change: '+12%', up: true },
                    { label: 'Tickets Closed', value: '186', change: '+8%', up: true },
                    { label: 'Avg Rating', value: '4.8', change: '+0.2', up: true },
                  ].map((kpi, i) => (
                    <div key={i} className="bg-rd-cream rounded-xl p-3 text-center">
                      <div className="font-dm-sans text-[11px] text-gray-500 mb-1">{kpi.label}</div>
                      <div className="font-poppins font-bold text-rd-dark text-lg">{kpi.value}</div>
                      <div className={`text-xs font-dm-sans font-medium ${kpi.up ? 'text-rd-teal' : 'text-red-500'}`}>{kpi.change}</div>
                    </div>
                  ))}
                </div>
                {/* Mini bar chart */}
                <div>
                  <div className="font-dm-sans text-xs text-gray-500 mb-2">Weekly Revenue</div>
                  <div className="flex items-end gap-1.5 h-20">
                    {[55, 70, 45, 80, 65, 90, 75].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i === 5 ? '#3d405b' : '#e2e8f0' }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                      <span key={i} className="flex-1 text-center text-[10px] text-gray-400 font-dm-sans">{d}</span>
                    ))}
                  </div>
                </div>
                {/* Recent tickets */}
                <div>
                  <div className="font-dm-sans text-xs text-gray-500 mb-2">Recent Tickets</div>
                  {[
                    { id: '#4821', device: 'iPhone 15 Pro', status: 'In Progress', color: 'bg-amber-100 text-amber-700' },
                    { id: '#4820', device: 'Samsung S24', status: 'Completed', color: 'bg-rd-teal/10 text-rd-dark' },
                    { id: '#4819', device: 'iPad Air', status: 'Completed', color: 'bg-rd-teal/10 text-rd-dark' },
                  ].map((t, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <div className="flex items-center gap-2">
                        <span className="font-dm-sans text-xs text-gray-400">{t.id}</span>
                        <span className="font-dm-sans text-sm text-rd-dark">{t.device}</span>
                      </div>
                      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${t.color}`}>{t.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Consistency */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-rd-teal font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Brand Compliance</span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mb-5">
              Consistency at every touchpoint
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              Lock down what matters. Every customer interaction across every location reflects your brand standards — no exceptions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {complianceCards.map((card, i) => (
              <div key={i} className="group relative bg-rd-cream rounded-2xl p-6 border border-transparent hover:border-rd-teal/20 hover:shadow-lg transition-all duration-300">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="w-11 h-11 rounded-xl bg-rd-teal/10 text-rd-teal flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{card.title}</h3>
                <p className="font-dm-sans text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Royalty & Reporting */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-rd-dark to-[#1e2035]">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-rd-mint font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Royalties & Reporting</span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-5">
              Automated royalty collection. Zero spreadsheets.
            </h2>
            <p className="font-dm-sans text-white/60 text-lg">
              Define your royalty structure once. RepairHub calculates, invoices, and reports — every billing cycle, hands-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Network Revenue',
                value: '$1.28M',
                sub: 'Across 32 active locations this month',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                ),
              },
              {
                title: 'Royalties Collected',
                value: '$76.8K',
                sub: '6% avg. royalty rate applied automatically',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Compliance Rate',
                value: '97.4%',
                sub: 'Brand standards met across the network',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <div key={i} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-dm-sans text-white/50 text-sm">{card.title}</span>
                  <span className="text-rd-mint">{card.icon}</span>
                </div>
                <div className="font-poppins text-3xl font-bold text-white mb-1">{card.value}</div>
                <div className="font-dm-sans text-white/40 text-sm">{card.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Pipeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-rd-teal font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Onboarding</span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mb-5">
              New franchisee? Live in 48 hours.
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              A structured four-stage pipeline takes every new location from application to fully operational — with nothing falling through the cracks.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {pipelineSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className={`rounded-2xl border p-6 ${step.color} h-full`}>
                    <div className="font-poppins font-bold text-3xl opacity-20 mb-2">0{i + 1}</div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">{step.label}</h3>
                    <p className="font-dm-sans text-sm opacity-80 leading-relaxed">{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:flex absolute top-1/2 -right-3 z-10 -translate-y-1/2">
                      <svg className="w-6 h-6 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Territory Map Mockup */}
      <section className="py-20 md:py-28 bg-rd-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Territory map SVG */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-poppins font-semibold text-rd-dark">Territory Map</h3>
                <div className="flex items-center gap-4 text-xs font-dm-sans">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-rd-teal" /> Active</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Pending</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-gray-300" /> Available</span>
                </div>
              </div>
              <svg viewBox="0 0 400 260" className="w-full" fill="none">
                {/* Abstract territory zones */}
                <rect x="10" y="10" width="120" height="100" rx="16" fill="#3d405b" opacity="0.12" stroke="#3d405b" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="70" y="55" textAnchor="middle" fill="#3d405b" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="11">Northwest</text>
                <text x="70" y="72" textAnchor="middle" fill="#3d405b" fontFamily="DM Sans, sans-serif" fontSize="9" opacity="0.7">8 locations</text>
                <circle cx="45" cy="90" r="4" fill="#3d405b" /><circle cx="70" cy="85" r="4" fill="#3d405b" /><circle cx="95" cy="92" r="4" fill="#3d405b" />

                <rect x="145" y="10" width="120" height="100" rx="16" fill="#3d405b" opacity="0.12" stroke="#3d405b" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="205" y="55" textAnchor="middle" fill="#3d405b" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="11">Midwest</text>
                <text x="205" y="72" textAnchor="middle" fill="#3d405b" fontFamily="DM Sans, sans-serif" fontSize="9" opacity="0.7">5 locations</text>
                <circle cx="180" cy="88" r="4" fill="#3d405b" /><circle cx="210" cy="90" r="4" fill="#eab308" /><circle cx="230" cy="85" r="4" fill="#3d405b" />

                <rect x="280" y="10" width="110" height="100" rx="16" fill="#d1d5db" opacity="0.3" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="335" y="55" textAnchor="middle" fill="#6b7280" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="11">Northeast</text>
                <text x="335" y="72" textAnchor="middle" fill="#9ca3af" fontFamily="DM Sans, sans-serif" fontSize="9">Available</text>

                <rect x="10" y="125" width="180" height="120" rx="16" fill="#3d405b" opacity="0.12" stroke="#3d405b" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="100" y="175" textAnchor="middle" fill="#3d405b" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="11">Southwest</text>
                <text x="100" y="192" textAnchor="middle" fill="#3d405b" fontFamily="DM Sans, sans-serif" fontSize="9" opacity="0.7">12 locations</text>
                <circle cx="50" cy="210" r="4" fill="#3d405b" /><circle cx="80" cy="215" r="4" fill="#3d405b" /><circle cx="110" cy="208" r="4" fill="#3d405b" />
                <circle cx="140" cy="218" r="4" fill="#3d405b" /><circle cx="65" cy="225" r="4" fill="#eab308" />

                <rect x="205" y="125" width="185" height="120" rx="16" fill="#fef3c7" opacity="0.5" stroke="#eab308" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="297" y="175" textAnchor="middle" fill="#92400e" fontFamily="Poppins, sans-serif" fontWeight="600" fontSize="11">Southeast</text>
                <text x="297" y="192" textAnchor="middle" fill="#b45309" fontFamily="DM Sans, sans-serif" fontSize="9">3 pending approvals</text>
                <circle cx="260" cy="215" r="4" fill="#eab308" /><circle cx="300" cy="210" r="4" fill="#eab308" /><circle cx="340" cy="220" r="4" fill="#eab308" />
              </svg>
            </div>

            <div>
              <span className="inline-block text-rd-teal font-poppins font-semibold text-sm uppercase tracking-widest mb-3">Territory Management</span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mb-5">
                Protect territories. Prevent overlap.
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg mb-8 leading-relaxed">
                Define exclusive franchise zones, track pending applications by region, and identify open territories for expansion — all from one interactive view.
              </p>
              <div className="space-y-5">
                {[
                  { title: 'Exclusive Zones', desc: 'Assign protected territories so franchisees never compete with each other.' },
                  { title: 'Expansion Planning', desc: 'Identify high-potential regions and track pipeline applicants by territory.' },
                  { title: 'Proximity Rules', desc: 'Set minimum distance rules between locations to prevent market cannibalization.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-rd-teal/10 text-rd-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-rd-dark mb-1">{item.title}</h4>
                      <p className="font-dm-sans text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-rd-teal font-poppins font-semibold text-sm uppercase tracking-widest mb-3">FAQ</span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark">
                Common questions about franchise management
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden transition-colors duration-200 hover:border-rd-teal/30">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-poppins font-semibold text-rd-dark">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-rd-teal flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48 pb-5' : 'max-h-0'}`}
                  >
                    <p className="font-dm-sans text-gray-600 leading-relaxed px-5">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
