import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const faqData = [
  { q: 'How do inventory transfers between stores work?', a: 'You can initiate a transfer from any location. Select the items, choose the destination store, and AA Repairdesk tracks the shipment status in real time. The sending store\'s inventory decreases and the receiving store\'s inventory increases once the transfer is confirmed — no double-counting, no manual spreadsheet updates.' },
  { q: 'Can each location have its own pricing?', a: 'Absolutely. AA Repairdesk lets you set location-specific pricing for any service or product. You can maintain a global price list as a baseline and override individual prices per store based on local market conditions, rent costs, or competitive positioning.' },
  { q: 'How does role-based access work across multiple stores?', a: 'Each employee can be assigned to one or more locations with granular permissions. A technician at Store A won\'t see Store B\'s financial data unless you allow it. Store managers see their own branch, while owners and admins get the full cross-store picture.' },
  { q: 'Is the customer database really shared across all locations?', a: 'Yes. When a customer walks into any of your locations, staff can pull up their full history — past repairs, purchase records, loyalty points, and notes — regardless of which store they originally visited. No duplicate profiles, no lost context.' },
  { q: 'Can I compare performance between my stores?', a: 'AA Repairdesk provides side-by-side location analytics: revenue, ticket volume, average repair time, customer satisfaction, and more. You can spot trends, identify your strongest branch, and replicate what works across your network.' },
];

const storeNodes = [
  { id: 'hq', label: 'HQ', x: 200, y: 60, size: 18 },
  { id: 's1', label: 'Store 1', x: 70, y: 160, size: 13 },
  { id: 's2', label: 'Store 2', x: 330, y: 140, size: 13 },
  { id: 's3', label: 'Store 3', x: 120, y: 270, size: 13 },
  { id: 's4', label: 'Store 4', x: 300, y: 260, size: 13 },
];

const storeEdges = [
  ['hq', 's1'], ['hq', 's2'], ['hq', 's3'], ['hq', 's4'],
  ['s1', 's3'], ['s2', 's4'], ['s1', 's2'],
];

function NetworkMapSVG() {
  const nodeMap = Object.fromEntries(storeNodes.map(n => [n.id, n]));
  return (
    <svg viewBox="0 0 400 340" className="w-full max-w-md mx-auto" fill="none">
      {storeEdges.map(([a, b], i) => (
        <line key={i} x1={nodeMap[a].x} y1={nodeMap[a].y} x2={nodeMap[b].x} y2={nodeMap[b].y}
          stroke="#457b9d" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />
      ))}
      {storeEdges.map(([a, b], i) => {
        const na = nodeMap[a], nb = nodeMap[b];
        const mx = (na.x + nb.x) / 2, my = (na.y + nb.y) / 2;
        return <circle key={`pulse-${i}`} cx={mx} cy={my} r="3" fill="#457b9d" opacity="0.7">
          <animate attributeName="r" values="2;5;2" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.2;0.8" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
        </circle>;
      })}
      {storeNodes.map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.size + 6} fill="#457b9d" opacity="0.1">
            <animate attributeName="r" values={`${n.size + 4};${n.size + 10};${n.size + 4}`} dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx={n.x} cy={n.y} r={n.size} fill={n.id === 'hq' ? '#457b9d' : '#fff'} stroke="#3d405b" strokeWidth="2.5" />
          {n.id === 'hq' && (
            <svg x={n.x - 9} y={n.y - 9} width="18" height="18" viewBox="0 0 24 24" fill="#3d405b" stroke="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#3d405b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          {n.id !== 'hq' && (
            <svg x={n.x - 7} y={n.y - 7} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3d405b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          )}
          <text x={n.x} y={n.y + n.size + 16} textAnchor="middle" className="text-[11px] font-semibold" fill="#fff">{n.label}</text>
        </g>
      ))}
    </svg>
  );
}

function TransferFlowSVG() {
  return (
    <svg viewBox="0 0 600 120" className="w-full" fill="none">
      <rect x="10" y="25" width="140" height="70" rx="16" fill="#3d405b" />
      <text x="80" y="55" textAnchor="middle" fill="#fff" className="text-[13px] font-semibold">Store A</text>
      <text x="80" y="75" textAnchor="middle" fill="#457b9d" className="text-[10px]">50 × iPhone Screens</text>
      <rect x="450" y="25" width="140" height="70" rx="16" fill="#3d405b" />
      <text x="520" y="55" textAnchor="middle" fill="#fff" className="text-[13px] font-semibold">Store B</text>
      <text x="520" y="75" textAnchor="middle" fill="#457b9d" className="text-[10px]">Needs restock</text>
      <line x1="155" y1="60" x2="445" y2="60" stroke="#457b9d" strokeWidth="2" strokeDasharray="8 5" />
      <circle r="6" fill="#457b9d">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M155,60 L445,60" />
      </circle>
      <circle r="4" fill="#457b9d" opacity="0.5">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.6s" path="M155,60 L445,60" />
      </circle>
      <rect x="250" y="30" width="100" height="30" rx="8" fill="#1e2035" />
      <text x="300" y="50" textAnchor="middle" fill="#457b9d" className="text-[10px] font-bold">TRANSFER</text>
      <polygon points="440,52 450,60 440,68" fill="#457b9d" />
    </svg>
  );
}

const locationCards = [
  { name: 'Downtown Flagship', revenue: '$48,200', tickets: 312, rating: 4.9, trend: '+12%' },
  { name: 'Westside Mall', revenue: '$31,750', tickets: 198, rating: 4.7, trend: '+8%' },
  { name: 'Airport Plaza', revenue: '$27,400', tickets: 167, rating: 4.8, trend: '+22%' },
];

export default function MultiLocationPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* Hero — Network Map */}
      <section className="relative bg-rd-dark overflow-hidden py-20 md:py-28 px-6">
        <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'radial-gradient(circle, #457b9d 1px, transparent 1px)', backgroundSize:'32px 32px'}} />
        <div className="container-main relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-rd-lime animate-pulse" />
              <span className="text-rd-mint font-dm-sans text-xs font-semibold tracking-wide uppercase">Multi-Location Management</span>
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-[3.25rem] leading-[1.12] text-white mb-5">
              Your Entire Repair Network, <span className="text-rd-mint">One Command Center</span>
            </h1>
            <p className="font-dm-sans text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              Connect every store location into a single operating system. See live metrics, move inventory, manage staff, and compare performance — without switching tabs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.aarepairdesk.co/register" className="btn-primary px-8 py-3.5 text-base">Start Free Trial</a>
              <Link to="/contact" className="group inline-flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors text-base">
                Book a Demo
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <NetworkMapSVG />
          </div>
        </div>
      </section>

      {/* Central Command Dashboard Mockup */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-rd-teal font-dm-sans text-sm font-bold uppercase tracking-wider">Central Command</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-2">One Dashboard. Every Store. Real Time.</h2>
          </div>
          <div className="bg-rd-dark rounded-3xl p-6 md:p-8 shadow-2xl max-w-5xl mx-auto">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-red-400" /><span className="w-3 h-3 rounded-full bg-yellow-400" /><span className="w-3 h-3 rounded-full bg-blue-400" /></div>
                <span className="text-white/40 font-dm-sans text-xs ml-2">AA Repairdesk — All Locations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-blue-400 text-xs font-dm-sans font-semibold">4 stores online</span>
              </div>
            </div>
            {/* Stat row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Total Revenue', value: '$107,350', delta: '+14%', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
                { label: 'Open Tickets', value: '247', delta: '-8%', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
                { label: 'Customers Served', value: '1,893', delta: '+21%', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
                { label: 'Avg Repair Time', value: '2.4 hrs', delta: '-15%', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              ].map(s => (
                <div key={s.label} className="bg-white/5 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-4 h-4 text-rd-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                    <span className="text-white/50 font-dm-sans text-[11px] uppercase tracking-wide">{s.label}</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-white font-poppins font-bold text-xl">{s.value}</span>
                    <span className={`text-xs font-dm-sans font-semibold ${s.delta.startsWith('+') ? 'text-blue-400' : 'text-blue-400'}`}>{s.delta}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* Mini bar chart */}
            <div className="bg-white/5 rounded-2xl p-5">
              <span className="text-white/50 text-xs font-dm-sans uppercase tracking-wide">Revenue by Location — This Month</span>
              <div className="flex items-end gap-3 mt-4 h-28">
                {[
                  { name: 'Downtown', pct: 85 },
                  { name: 'Westside', pct: 60 },
                  { name: 'Airport', pct: 50 },
                  { name: 'Suburb', pct: 38 },
                ].map(b => (
                  <div key={b.name} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full rounded-t-lg bg-rd-lime/80" style={{ height: `${b.pct}%` }} />
                    <span className="text-white/40 text-[10px] font-dm-sans mt-1">{b.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inter-store Transfer Flow */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-rd-teal font-dm-sans text-sm font-bold uppercase tracking-wider">Inter-Store Transfers</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-2 mb-3">Move Inventory Between Stores in Seconds</h2>
            <p className="text-gray-500 font-dm-sans text-lg max-w-2xl mx-auto">Overstocked at one location, running low at another? Initiate a transfer with a few clicks and both inventories update automatically.</p>
          </div>
          <div className="bg-rd-cream rounded-3xl p-6 md:p-10 overflow-x-auto">
            <TransferFlowSVG />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { step: '01', title: 'Select Items', desc: 'Pick products from the sending store\'s inventory catalog.' },
              { step: '02', title: 'Choose Destination', desc: 'Select the receiving store and confirm transfer quantities.' },
              { step: '03', title: 'Auto-Update Stock', desc: 'Both locations\' inventory counts adjust instantly upon confirmation.' },
            ].map(s => (
              <div key={s.step} className="flex gap-4">
                <span className="font-poppins font-bold text-4xl text-rd-teal/15 leading-none">{s.step}</span>
                <div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-1">{s.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Cards — Individual Store Metrics */}
      <section className="bg-rd-dark py-20 px-6">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-rd-mint font-dm-sans text-sm font-bold uppercase tracking-wider">Location Intelligence</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mt-2">Every Store Has Its Own Pulse</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {locationCards.map((loc, i) => (
              <div key={loc.name} className="relative bg-gradient-to-br from-white/10 to-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-rd-lime/40 transition-colors group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-rd-teal flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-white text-sm">{loc.name}</h3>
                    <span className="text-rd-mint font-dm-sans text-xs font-semibold">{loc.trend} this month</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 font-dm-sans text-xs uppercase tracking-wide">Revenue</span>
                    <span className="text-white font-poppins font-bold">{loc.revenue}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 font-dm-sans text-xs uppercase tracking-wide">Tickets</span>
                    <span className="text-white font-poppins font-bold">{loc.tickets}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 font-dm-sans text-xs uppercase tracking-wide">Rating</span>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <span className="text-white font-poppins font-bold text-sm">{loc.rating}</span>
                    </div>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison — "One Dashboard, All Stores" */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-rd-teal font-dm-sans text-sm font-bold uppercase tracking-wider">Cross-Store Comparison</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-2">One Dashboard, All Stores</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full font-dm-sans text-sm">
              <thead>
                <tr className="border-b-2 border-rd-teal/20">
                  <th className="text-left py-3 px-4 font-poppins font-semibold text-rd-dark text-sm">Metric</th>
                  <th className="text-center py-3 px-4 font-poppins font-semibold text-rd-dark text-sm">Downtown</th>
                  <th className="text-center py-3 px-4 font-poppins font-semibold text-rd-dark text-sm">Westside</th>
                  <th className="text-center py-3 px-4 font-poppins font-semibold text-rd-dark text-sm">Airport</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: 'Monthly Revenue', vals: ['$48,200', '$31,750', '$27,400'], best: 0 },
                  { metric: 'Tickets Closed', vals: ['312', '198', '167'], best: 0 },
                  { metric: 'Avg. Repair Time', vals: ['1.9 hrs', '2.6 hrs', '2.8 hrs'], best: 0 },
                  { metric: 'Customer Rating', vals: ['4.9', '4.7', '4.8'], best: 0 },
                  { metric: 'Inventory Turnover', vals: ['8.2x', '6.1x', '9.4x'], best: 2 },
                  { metric: 'Return Rate', vals: ['1.2%', '2.1%', '0.8%'], best: 2 },
                ].map((row, ri) => (
                  <tr key={row.metric} className={ri % 2 === 0 ? 'bg-rd-cream/60' : ''}>
                    <td className="py-3 px-4 font-medium text-rd-dark">{row.metric}</td>
                    {row.vals.map((v, vi) => (
                      <td key={vi} className="py-3 px-4 text-center">
                        <span className={vi === row.best ? 'text-rd-teal font-bold' : 'text-gray-600'}>{v}</span>
                        {vi === row.best && (
                          <svg className="w-3.5 h-3.5 text-rd-mint inline ml-1 -mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Franchise Growth — Expanding Circles */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="text-rd-teal font-dm-sans text-sm font-bold uppercase tracking-wider">Franchise Ready</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-2 mb-4">Scale From 2 Stores to 200</h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-6">
                AA Repairdesk grows as you grow. Each new location plugs into your existing infrastructure — same workflows, same data visibility, same control. Perfect for franchise owners who need independent operations with centralized oversight.
              </p>
              <ul className="space-y-3">
                {['Onboard new locations in minutes', 'Clone workflows and pricing templates', 'Franchise-level reporting and royalties', 'Independent POS per store, unified backend'].map(item => (
                  <li key={item} className="flex items-start gap-3 font-dm-sans text-gray-700">
                    <svg className="w-5 h-5 text-rd-teal mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <svg viewBox="0 0 320 320" className="w-full max-w-xs" fill="none">
                {/* Expanding rings */}
                {[130, 100, 70, 40].map((r, i) => (
                  <circle key={i} cx="160" cy="160" r={r} stroke="#3d405b" strokeWidth="1" fill="none" opacity={0.1 + i * 0.08}>
                    <animate attributeName="r" values={`${r - 3};${r + 3};${r - 3}`} dur={`${4 - i * 0.5}s`} repeatCount="indefinite" />
                  </circle>
                ))}
                {/* Store dots on rings */}
                {[
                  { angle: 0, ring: 130 }, { angle: 72, ring: 130 }, { angle: 144, ring: 130 }, { angle: 216, ring: 130 }, { angle: 288, ring: 130 },
                  { angle: 36, ring: 100 }, { angle: 120, ring: 100 }, { angle: 204, ring: 100 }, { angle: 300, ring: 100 },
                  { angle: 60, ring: 70 }, { angle: 180, ring: 70 }, { angle: 300, ring: 70 },
                ].map((dot, i) => {
                  const rad = (dot.angle * Math.PI) / 180;
                  const cx = 160 + dot.ring * Math.cos(rad);
                  const cy = 160 + dot.ring * Math.sin(rad);
                  return (
                    <g key={i}>
                      <line x1="160" y1="160" x2={cx} y2={cy} stroke="#457b9d" strokeWidth="0.5" opacity="0.3" />
                      <circle cx={cx} cy={cy} r="6" fill="#3d405b" stroke="#457b9d" strokeWidth="1.5" />
                    </g>
                  );
                })}
                {/* Center HQ */}
                <circle cx="160" cy="160" r="22" fill="#3d405b" stroke="#457b9d" strokeWidth="2" />
                <text x="160" y="164" textAnchor="middle" fill="#457b9d" className="text-[11px] font-bold">HQ</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-5xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-14">Everything Multi-Location Demands</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {[
              { title: 'Centralized Dashboard', desc: 'Bird\'s-eye view of every branch: sales, tickets, inventory, and staff — all in one screen.', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
              { title: 'Shared Customer Database', desc: 'One customer profile across all stores — repair history, loyalty points, and preferences follow them.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { title: 'Cross-Store Tickets', desc: 'Start a repair at one store, finish at another. Ticket visibility spans your entire network.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
              { title: 'Location-Specific Pricing', desc: 'Set different prices per location to match local markets while keeping a global baseline.', icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z' },
              { title: 'Role-Based Access', desc: 'Granular control over who sees what. Technicians, managers, and owners each get the right view.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
              { title: 'Multi-Store POS', desc: 'Every location runs its own point-of-sale terminal, all feeding into unified financials.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
            ].map(f => (
              <div key={f.title} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-rd-teal/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d={f.icon} /></svg>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-1">{f.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="font-poppins font-semibold text-rd-dark text-[15px]">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-rd-teal flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? '300px' : '0', opacity: openFaq === i ? 1 : 0 }}
                >
                  <p className="px-6 pb-5 text-gray-600 font-dm-sans text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
