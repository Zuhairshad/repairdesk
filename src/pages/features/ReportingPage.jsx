import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ── Inline SVG Icons ── */

function IconBar(p) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><rect x="3" y="12" width="4" height="9" rx="1" /><rect x="10" y="6" width="4" height="15" rx="1" /><rect x="17" y="2" width="4" height="19" rx="1" /></svg>);
}
function IconPie(p) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><path d="M12 2a10 10 0 1010 10h-10z" /><path d="M12 2v10h10A10 10 0 0012 2z" /></svg>);
}
function IconUsers(p) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><circle cx="9" cy="7" r="3" /><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" /><circle cx="18" cy="8" r="2.5" /><path d="M21 21v-1.5a3 3 0 00-3-3h-.5" /></svg>);
}
function IconClock(p) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" strokeLinecap="round" /></svg>);
}
function IconDollar(p) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" /></svg>);
}
function IconStar(p) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01z" /></svg>);
}
function IconDownload(p) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" strokeLinecap="round" /><polyline points="7 10 12 15 17 10" strokeLinecap="round" strokeLinejoin="round" /><line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round" /></svg>);
}
function IconStore(p) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><path d="M3 9l1.5-5h15L21 9" /><path d="M3 9h18v12H3z" /><path d="M9 21V14h6v7" /><path d="M3 9c0 1.1.9 2 2 2s2-.9 2-2m0 0c0 1.1.9 2 2 2s2-.9 2-2m0 0c0 1.1.9 2 2 2s2-.9 2-2m0 0c0 1.1.9 2 2 2s2-.9 2-2" /></svg>);
}
function IconChevron({ open, ...p }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} {...p}><polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" /></svg>);
}
function IconCalendar(p) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>);
}

/* ── Report category data ── */

const reportTabs = [
  {
    id: 'sales',
    label: 'Sales',
    icon: <IconDollar className="w-4 h-4" />,
    title: 'Sales & Revenue Reports',
    desc: 'Track every transaction, refund, and payment method. Break down revenue by service type, employee, or time period to spot growth patterns.',
    items: ['Daily/weekly/monthly sales summary', 'Revenue by service type', 'Payment method breakdown', 'Refund and discount tracking'],
  },
  {
    id: 'inventory',
    label: 'Inventory',
    icon: <IconBar className="w-4 h-4" />,
    title: 'Inventory & Parts Reports',
    desc: 'Know exactly what is in stock, what is running low, and what is eating into your margins. Automated reorder alerts keep shelves stocked.',
    items: ['Stock level overview', 'Low-stock alerts', 'Parts cost vs. selling price', 'Supplier purchase history'],
  },
  {
    id: 'employees',
    label: 'Employees',
    icon: <IconUsers className="w-4 h-4" />,
    title: 'Employee Performance Reports',
    desc: 'Measure each technician by tickets closed, average repair time, and revenue generated. Build a culture of accountability with transparent metrics.',
    items: ['Tickets closed per technician', 'Revenue generated per employee', 'Average repair time comparison', 'Clock-in/out attendance logs'],
  },
  {
    id: 'customers',
    label: 'Customers',
    icon: <IconStar className="w-4 h-4 fill-current" />,
    title: 'Customer Analytics',
    desc: 'Understand your customers better: repeat visit frequency, lifetime value, satisfaction scores, and acquisition channels that actually work.',
    items: ['Customer lifetime value', 'Repeat visit frequency', 'Satisfaction & review scores', 'Acquisition channel analysis'],
  },
  {
    id: 'tax',
    label: 'Tax & Profit',
    icon: <IconPie className="w-4 h-4" />,
    title: 'Tax & Profit Margin Reports',
    desc: 'Stay tax-ready year-round. See profit margins at a glance, track taxable vs. non-taxable items, and export everything your accountant needs.',
    items: ['Tax collected by period', 'Profit margin per service', 'Expense vs. revenue ratio', 'Accountant-ready exports'],
  },
];

/* ── KPI data ── */

const kpis = [
  { label: 'Monthly Revenue', value: '$48,260', change: '+12.4%', up: true, icon: <IconDollar className="w-6 h-6" /> },
  { label: 'Tickets Closed', value: '1,847', change: '+8.1%', up: true, icon: <IconBar className="w-6 h-6" /> },
  { label: 'Avg Repair Time', value: '2.3 hrs', change: '-18%', up: true, icon: <IconClock className="w-6 h-6" /> },
  { label: 'Customer Score', value: '4.8/5', change: '+0.3', up: true, icon: <IconStar className="w-6 h-6" /> },
];

/* ── Bar chart data (monthly revenue) ── */

const barData = [
  { month: 'Jan', value: 32 }, { month: 'Feb', value: 38 },
  { month: 'Mar', value: 35 }, { month: 'Apr', value: 42 },
  { month: 'May', value: 40 }, { month: 'Jun', value: 48 },
  { month: 'Jul', value: 44 }, { month: 'Aug', value: 52 },
  { month: 'Sep', value: 55 }, { month: 'Oct', value: 50 },
  { month: 'Nov', value: 58 }, { month: 'Dec', value: 62 },
];
const barMax = Math.max(...barData.map(d => d.value));

/* ── Pie chart data (revenue by service) ── */

const pieSlices = [
  { label: 'Screen Repair', pct: 35, color: '#3d405b' },
  { label: 'Battery Replace', pct: 22, color: '#0EA5E9' },
  { label: 'Data Recovery', pct: 18, color: '#457b9d' },
  { label: 'Board Repair', pct: 15, color: '#F59E0B' },
  { label: 'Other', pct: 10, color: '#A78BFA' },
];

function piePath(cx, cy, r, startAngle, endAngle) {
  const s = (Math.PI / 180) * (startAngle - 90);
  const e = (Math.PI / 180) * (endAngle - 90);
  const x1 = cx + r * Math.cos(s), y1 = cy + r * Math.sin(s);
  const x2 = cx + r * Math.cos(e), y2 = cy + r * Math.sin(e);
  const large = endAngle - startAngle > 180 ? 1 : 0;
  return `M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2} Z`;
}

/* ── Store comparison data ── */

const stores = [
  { name: 'Downtown Hub', revenue: '$18,400', tickets: 642, rating: 4.9, trend: '+14%' },
  { name: 'Mall Kiosk', revenue: '$12,850', tickets: 481, rating: 4.7, trend: '+9%' },
  { name: 'Westside Branch', revenue: '$16,010', tickets: 724, rating: 4.8, trend: '+22%' },
];

/* ── FAQ data ── */

const faqs = [
  { q: 'What types of reports does AA Repairdesk offer?', a: 'AA Repairdesk provides sales summaries, inventory reports, employee performance analytics, customer insights, profit margin breakdowns, tax reports, ticket status tracking, and multi-store comparison dashboards. Each report type supports custom date ranges and filters.' },
  { q: 'Can I export reports to share with my accountant?', a: 'Absolutely. Every report can be exported as CSV, PDF, or Excel with a single click. You can also schedule automatic exports to be emailed at daily, weekly, or monthly intervals.' },
  { q: 'How does multi-store reporting work?', a: 'Our multi-store dashboard aggregates data from all your locations into a single view. You can compare revenue, ticket volume, employee performance, and customer satisfaction side by side, or drill down into any individual store.' },
  { q: 'Are the KPIs updated in real time?', a: 'Yes. Dashboard widgets and KPI cards pull live data so you always see the most current numbers. There is no delay or batch processing -- the moment a ticket is closed or a sale is made, your dashboard reflects it.' },
  { q: 'Can I customize which metrics appear on my dashboard?', a: 'You can add, remove, and rearrange dashboard widgets to show the metrics that matter most to your business. Each widget also supports individual date range filters independent of the global range.' },
  { q: 'Is there a way to track employee performance over time?', a: 'The Employee Performance report shows trends over any date range you choose. Compare tickets closed, average repair time, revenue generated, and customer ratings for each technician week over week or month over month.' },
];

/* ══════════════════════════════════════════════════════════════ */
/*  COMPONENT                                                     */
/* ══════════════════════════════════════════════════════════════ */

export default function ReportingPage() {
  const [activeTab, setActiveTab] = useState('sales');
  const [openFaq, setOpenFaq] = useState(null);

  const currentTab = reportTabs.find(t => t.id === activeTab);

  return (
    <PageLayout>
      {/* ─── HERO: Full Dashboard Mockup ─── */}
      <section className="relative bg-rd-dark overflow-hidden py-24 px-6">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative container-main max-w-6xl">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest bg-rd-lime/15 text-rd-mint px-4 py-1.5 rounded-full mb-6 font-poppins">
              <IconBar className="w-3.5 h-3.5" /> Reporting &amp; Analytics
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[3.4rem] text-white leading-tight mb-5">
              Your Repair Shop's Numbers,<br className="hidden md:block" /> Finally Making Sense
            </h1>
            <p className="text-white/60 font-dm-sans text-lg max-w-2xl mx-auto leading-relaxed">
              Stop guessing. AA Repairdesk turns every ticket, sale, and customer interaction into clear, actionable reports you can act on today.
            </p>
          </div>

          {/* Dashboard mockup grid */}
          <div className="grid grid-cols-4 md:grid-cols-12 gap-3 max-w-5xl mx-auto">
            {/* Mini KPI tiles */}
            {kpis.map((k, i) => (
              <div key={i} className="col-span-2 md:col-span-3 bg-white/[0.06] backdrop-blur border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/40 text-[11px] font-dm-sans uppercase tracking-wide">{k.label}</span>
                  <span className="text-white/20">{k.icon && React.cloneElement(k.icon, { className: 'w-4 h-4' })}</span>
                </div>
                <p className="text-white font-poppins font-bold text-xl">{k.value}</p>
                <span className={`text-xs font-dm-sans font-semibold ${k.up ? 'text-rd-mint' : 'text-red-400'}`}>{k.change}</span>
              </div>
            ))}
            {/* Mini bar chart */}
            <div className="col-span-4 md:col-span-8 bg-white/[0.06] backdrop-blur border border-white/10 rounded-xl p-4">
              <p className="text-white/40 text-[11px] font-dm-sans uppercase tracking-wide mb-3">Monthly Revenue Trend</p>
              <div className="flex items-end gap-[6px] h-20">
                {barData.map((d, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full rounded-sm bg-rd-teal/80" style={{ height: `${(d.value / barMax) * 100}%` }} />
                  </div>
                ))}
              </div>
            </div>
            {/* Mini pie */}
            <div className="col-span-4 md:col-span-4 bg-white/[0.06] backdrop-blur border border-white/10 rounded-xl p-4 flex items-center gap-4">
              <svg viewBox="0 0 100 100" className="w-20 h-20 shrink-0">
                {pieSlices.reduce((acc, slice, i) => {
                  const start = acc.angle;
                  const end = start + (slice.pct / 100) * 360;
                  acc.paths.push(<path key={i} d={piePath(50, 50, 45, start, end)} fill={slice.color} opacity={0.85} />);
                  acc.angle = end;
                  return acc;
                }, { angle: 0, paths: [] }).paths}
              </svg>
              <div className="space-y-1">
                {pieSlices.slice(0, 3).map(s => (
                  <div key={s.label} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: s.color }} />
                    <span className="text-white/60 text-[11px] font-dm-sans">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-10">
            <a href="https://app.aarepairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/30 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors text-sm">Book a Demo</Link>
          </div>
        </div>
      </section>

      {/* ─── KPI Cards Row ─── */}
      <section className="bg-white py-16 px-6 -mt-1">
        <div className="container-main max-w-5xl">
          <p className="text-center text-xs font-poppins font-semibold uppercase tracking-widest text-rd-teal mb-8">Real-Time KPIs At A Glance</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {kpis.map((k, i) => (
              <div key={i} className="relative group bg-rd-cream rounded-2xl p-6 text-center hover:shadow-lg transition-shadow overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-rd-teal/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-rd-teal/10 flex items-center justify-center mx-auto mb-3 text-rd-teal">{k.icon}</div>
                  <p className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark">{k.value}</p>
                  <p className="text-gray-500 font-dm-sans text-sm mt-1">{k.label}</p>
                  <span className={`inline-block mt-2 text-xs font-dm-sans font-bold px-2 py-0.5 rounded-full ${k.up ? 'bg-blue-50 text-[#457b9d]' : 'bg-red-50 text-red-500'}`}>{k.change} this month</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Report Categories: Browser Tab Mockup ─── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-3">Every Report Your Shop Needs</h2>
            <p className="text-gray-500 font-dm-sans text-lg max-w-xl mx-auto">Five report categories, each packed with the details that matter. Pick a tab to explore.</p>
          </div>

          {/* Browser chrome */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            {/* Title bar */}
            <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-blue-400" />
              <span className="ml-4 text-xs text-gray-400 font-dm-sans bg-white rounded px-3 py-1 flex-1 max-w-xs truncate">app.aarepairdesk.co/reports/{activeTab}</span>
            </div>
            {/* Tabs */}
            <div className="flex border-b border-gray-200 overflow-x-auto">
              {reportTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3.5 text-sm font-poppins font-semibold whitespace-nowrap transition-colors border-b-2 ${activeTab === tab.id ? 'border-rd-teal text-rd-teal bg-rd-teal/5' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                >
                  {tab.icon} {tab.label}
                </button>
              ))}
            </div>
            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-poppins font-bold text-2xl text-rd-dark mb-3">{currentTab.title}</h3>
                  <p className="text-gray-500 font-dm-sans leading-relaxed mb-6">{currentTab.desc}</p>
                  <ul className="space-y-3">
                    {currentTab.items.map(item => (
                      <li key={item} className="flex items-start gap-3 font-dm-sans text-sm text-gray-600">
                        <span className="mt-1 w-5 h-5 rounded-full bg-rd-teal/10 flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Faux data table */}
                <div className="bg-rd-cream/60 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-poppins font-semibold uppercase tracking-wide text-rd-teal">Sample Output</span>
                    <span className="flex items-center gap-1 text-[11px] text-gray-400 font-dm-sans"><IconCalendar className="w-3 h-3" /> Last 30 days</span>
                  </div>
                  <div className="space-y-2">
                    {[85, 62, 45, 30].map((w, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="text-[11px] text-gray-400 font-dm-sans w-16 shrink-0">Row {i + 1}</span>
                        <div className="flex-1 bg-white rounded-full h-3 overflow-hidden">
                          <div className="h-full rounded-full bg-rd-teal/70" style={{ width: `${w}%` }} />
                        </div>
                        <span className="text-[11px] font-dm-sans font-semibold text-rd-dark w-8 text-right">{w}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Charts Section: Bar + Pie Side by Side ─── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-3">Visualize Growth, Spot Trends</h2>
            <p className="text-gray-500 font-dm-sans text-lg max-w-xl mx-auto">Interactive charts turn raw repair data into patterns you can act on. No spreadsheet PhD required.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bar Chart */}
            <div className="bg-rd-cream rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-poppins font-semibold text-rd-dark">Monthly Revenue</h3>
                <span className="text-xs text-gray-400 font-dm-sans">2024</span>
              </div>
              <svg viewBox="0 0 360 180" className="w-full" aria-label="Monthly revenue bar chart">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map(i => (
                  <line key={i} x1="30" y1={20 + i * 35} x2="355" y2={20 + i * 35} stroke="#e5e7eb" strokeWidth="0.5" />
                ))}
                {/* Bars */}
                {barData.map((d, i) => {
                  const barH = (d.value / barMax) * 140;
                  const x = 35 + i * 27;
                  return (
                    <g key={i}>
                      <rect x={x} y={160 - barH} width="18" height={barH} rx="3" fill="#3d405b" opacity={0.85} />
                      <text x={x + 9} y={175} textAnchor="middle" className="text-[8px] fill-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>{d.month}</text>
                    </g>
                  );
                })}
                {/* Y labels */}
                {['$60k', '$45k', '$30k', '$15k', '$0'].map((lbl, i) => (
                  <text key={i} x="25" y={24 + i * 35} textAnchor="end" className="text-[7px] fill-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>{lbl}</text>
                ))}
              </svg>
            </div>

            {/* Pie Chart */}
            <div className="bg-rd-cream rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-poppins font-semibold text-rd-dark">Revenue by Service</h3>
                <span className="text-xs text-gray-400 font-dm-sans">All time</span>
              </div>
              <div className="flex items-center gap-6">
                <svg viewBox="0 0 120 120" className="w-40 h-40 shrink-0" aria-label="Revenue by service type pie chart">
                  {pieSlices.reduce((acc, slice, i) => {
                    const start = acc.angle;
                    const end = start + (slice.pct / 100) * 360;
                    acc.paths.push(<path key={i} d={piePath(60, 60, 55, start, Math.min(end, start + 359.9))} fill={slice.color} />);
                    acc.angle = end;
                    return acc;
                  }, { angle: 0, paths: [] }).paths}
                  <circle cx="60" cy="60" r="28" fill="white" />
                  <text x="60" y="58" textAnchor="middle" className="text-[10px] fill-gray-800 font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>100%</text>
                  <text x="60" y="70" textAnchor="middle" className="text-[7px] fill-gray-400" style={{ fontFamily: 'DM Sans, sans-serif' }}>Revenue</text>
                </svg>
                <div className="space-y-3 flex-1">
                  {pieSlices.map(s => (
                    <div key={s.label} className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-sm shrink-0" style={{ background: s.color }} />
                      <span className="text-sm font-dm-sans text-gray-600 flex-1">{s.label}</span>
                      <span className="text-sm font-poppins font-semibold text-rd-dark">{s.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Export Anywhere ─── */}
      <section className="bg-gradient-to-br from-rd-dark to-[#1e2035] py-20 px-6 text-white">
        <div className="container-main max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
            <IconDownload className="w-4 h-4 text-rd-mint" />
            <span className="text-xs font-poppins font-semibold tracking-wide text-rd-mint uppercase">Export Anywhere</span>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">One Click. Any Format.</h2>
          <p className="text-white/60 font-dm-sans text-lg max-w-xl mx-auto mb-12">Download any report instantly or schedule automatic exports to your inbox. Your accountant will thank you.</p>

          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { ext: 'CSV', desc: 'Spreadsheet-ready', color: '#457b9d' },
              { ext: 'PDF', desc: 'Print & share', color: '#F43F5E' },
              { ext: 'XLS', desc: 'Excel compatible', color: '#0EA5E9' },
            ].map(fmt => (
              <div key={fmt.ext} className="bg-white/[0.07] backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/[0.12] transition-colors group">
                <div className="w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center" style={{ background: `${fmt.color}20` }}>
                  <span className="font-poppins font-black text-lg" style={{ color: fmt.color }}>{fmt.ext}</span>
                </div>
                <p className="text-white/50 text-xs font-dm-sans">{fmt.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-white/40 text-sm font-dm-sans">
            <IconCalendar className="w-4 h-4" />
            <span>Custom date ranges</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Scheduled email delivery</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span>Unlimited exports</span>
          </div>
        </div>
      </section>

      {/* ─── Multi-Store Comparison ─── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-5xl">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 text-rd-teal mb-4">
                <IconStore className="w-5 h-5" />
                <span className="text-xs font-poppins font-semibold uppercase tracking-widest">Multi-Store</span>
              </div>
              <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-4">Compare Every Location Side by Side</h2>
              <p className="text-gray-500 font-dm-sans leading-relaxed mb-6">Running multiple stores? See which location outperforms, where bottlenecks hide, and how to replicate your best shop's success everywhere.</p>
              <Link to="/features/multi-location" className="inline-flex items-center gap-2 text-rd-teal font-poppins font-semibold text-sm hover:underline">
                Learn about Multi-Location
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <div className="md:col-span-3 grid sm:grid-cols-3 gap-4">
              {stores.map((s, i) => (
                <div key={i} className="bg-rd-cream rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-rd-teal flex items-center justify-center">
                      <IconStore className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-poppins font-semibold text-sm text-rd-dark">{s.name}</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[10px] font-dm-sans text-gray-400 uppercase tracking-wide">Revenue</p>
                      <p className="font-poppins font-bold text-lg text-rd-dark">{s.revenue}</p>
                    </div>
                    <div className="flex justify-between text-xs font-dm-sans">
                      <span className="text-gray-400">Tickets: <span className="text-rd-dark font-semibold">{s.tickets}</span></span>
                      <span className="text-gray-400">Rating: <span className="text-rd-dark font-semibold">{s.rating}</span></span>
                    </div>
                    <div className="flex items-center gap-1 text-[#457b9d] text-xs font-dm-sans font-semibold">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                      {s.trend} vs last month
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Dashboard Widgets Highlight ─── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-4xl text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Build Your Perfect Dashboard</h2>
          <p className="text-gray-500 font-dm-sans text-lg max-w-xl mx-auto mb-12">Drag, drop, and customize. Add the widgets that matter to your business and remove the noise.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <IconDollar className="w-5 h-5" />, name: 'Revenue Widget' },
              { icon: <IconBar className="w-5 h-5" />, name: 'Ticket Volume' },
              { icon: <IconClock className="w-5 h-5" />, name: 'Avg Repair Time' },
              { icon: <IconUsers className="w-5 h-5" />, name: 'Top Technicians' },
              { icon: <IconPie className="w-5 h-5" />, name: 'Service Mix' },
              { icon: <IconStar className="w-5 h-5" />, name: 'Customer Score' },
              { icon: <IconStore className="w-5 h-5" />, name: 'Store Ranking' },
              { icon: <IconCalendar className="w-5 h-5" />, name: 'Scheduled Reports' },
            ].map((w, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3 hover:border-rd-teal/30 hover:shadow-sm transition-all cursor-default">
                <div className="w-9 h-9 rounded-lg bg-rd-teal/10 flex items-center justify-center text-rd-teal shrink-0">{w.icon}</div>
                <span className="text-sm font-dm-sans font-medium text-rd-dark text-left">{w.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Accordion ─── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`rounded-xl border transition-colors ${isOpen ? 'border-rd-teal/30 bg-rd-teal/[0.03]' : 'border-gray-200'}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-poppins font-semibold text-rd-dark pr-4">{faq.q}</span>
                    <IconChevron open={isOpen} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 pb-5 px-5' : 'max-h-0'}`}>
                    <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
