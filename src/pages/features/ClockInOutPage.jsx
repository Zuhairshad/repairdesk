import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const workdaySegments = [
  { label: '9:00 AM', type: 'clock-in', width: '0%', color: 'bg-rd-teal' },
  { label: 'Morning Shift', type: 'work', width: '30%', color: 'bg-rd-teal' },
  { label: '12:00 PM', type: 'break', width: '8%', color: 'bg-amber-400' },
  { label: 'Afternoon Shift', type: 'work', width: '35%', color: 'bg-rd-teal' },
  { label: '5:30 PM', type: 'clock-out', width: '0%', color: 'bg-[#457b9d]' },
];

const timesheetRows = [
  { name: 'Sarah M.', role: 'Senior Tech', mon: '8.0', tue: '8.5', wed: '8.0', thu: '9.0', fri: '8.0', total: '41.5', overtime: '1.5', status: 'Approved' },
  { name: 'Jake R.', role: 'Front Desk', mon: '7.5', tue: '8.0', wed: '8.0', thu: '8.0', fri: '7.5', total: '39.0', overtime: '0.0', status: 'Approved' },
  { name: 'Priya K.', role: 'Technician', mon: '8.0', tue: '8.0', wed: '9.5', thu: '8.5', fri: '8.0', total: '42.0', overtime: '2.0', status: 'Pending' },
  { name: 'Carlos D.', role: 'Sales Rep', mon: '8.0', tue: '7.0', wed: '8.0', thu: '8.0', fri: '8.0', total: '39.0', overtime: '0.0', status: 'Approved' },
];

const faqs = [
  { q: 'How do employees clock in from their phones?', a: 'Employees download the RepairHub mobile app and tap the Clock In button when they arrive. The app captures their GPS coordinates to verify they are at the shop location. Managers can set a geofence radius so clock-ins are only accepted within range of the store.' },
  { q: 'Can I track breaks separately from regular work hours?', a: 'Yes. You can configure paid and unpaid break types for each location. When an employee starts a break, their active shift pauses and the break timer begins. Break duration is deducted automatically from total billable hours, and managers can set maximum break limits per shift.' },
  { q: 'How does overtime calculation work?', a: 'RepairHub lets you define overtime thresholds at daily and weekly levels. Once an employee exceeds the threshold, all additional hours are flagged as overtime at your configured multiplier (1.5x, 2x, etc). Overtime hours are highlighted in red on timesheets and included separately in payroll exports.' },
  { q: 'Can managers edit a timesheet after submission?', a: 'Managers with the appropriate permissions can adjust any clock-in or clock-out time. Every edit is logged in an immutable audit trail showing who made the change, the original value, and the reason. This keeps you compliant with labor regulations while giving flexibility for corrections.' },
  { q: 'Does it integrate with our payroll provider?', a: 'RepairHub exports timesheets in standard CSV and PDF formats compatible with QuickBooks, Xero, Gusto, ADP, and others. You can also use direct API integrations to push approved timesheets straight to your payroll system without any manual file handling.' },
];

export default function ClockInOutPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ── Hero: Clock Face + Clock In Mockup ── */}
      <section className="relative bg-rd-dark overflow-hidden py-24 md:py-32 px-6">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 39px, rgba(255,255,255,0.5) 40px)' }} />
        <div className="container-main relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-xl">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-rd-mint font-poppins mb-4">Employee Time Tracking</span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.12] text-white mb-6">
              Every Minute Tracked.<br />Every Dollar Accounted.
            </h1>
            <p className="text-white/65 text-lg font-dm-sans leading-relaxed mb-8 max-w-md">
              Replace punch cards and spreadsheets with a digital clock-in system built for repair shops. GPS-verified, mobile-ready, payroll-connected.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
              <Link to="/contact" className="border border-white/25 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors text-sm">Book a Demo</Link>
            </div>
          </div>
          {/* Clock Face SVG */}
          <div className="flex-shrink-0 relative">
            <svg width="310" height="310" viewBox="0 0 310 310" fill="none" className="drop-shadow-2xl">
              <circle cx="155" cy="155" r="150" fill="#014a50" stroke="#3d405b" strokeWidth="3"/>
              <circle cx="155" cy="155" r="135" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
              {/* Hour marks */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180);
                const x1 = 155 + 120 * Math.cos(angle);
                const y1 = 155 + 120 * Math.sin(angle);
                const x2 = 155 + 130 * Math.cos(angle);
                const y2 = 155 + 130 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.5)" strokeWidth={i % 3 === 0 ? 3 : 1.5} strokeLinecap="round"/>;
              })}
              {/* Minute hand at ~9:03 */}
              <line x1="155" y1="155" x2="155" y2="45" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
              {/* Hour hand pointing roughly at 9 */}
              <line x1="155" y1="155" x2="75" y2="152" stroke="white" strokeWidth="4" strokeLinecap="round"/>
              {/* Center dot */}
              <circle cx="155" cy="155" r="6" fill="#C2F970"/>
              <circle cx="155" cy="155" r="3" fill="#014a50"/>
              {/* Digital display */}
              <rect x="110" y="195" rx="8" ry="8" width="90" height="32" fill="rgba(0,0,0,0.35)" />
              <text x="155" y="216" textAnchor="middle" fill="#C2F970" fontSize="14" fontFamily="monospace" fontWeight="600">09:03 AM</text>
            </svg>
            {/* Clock-in button below clock */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-rd-teal text-white font-poppins font-semibold text-sm px-8 py-3 rounded-full shadow-lg shadow-rd-teal/30 flex items-center gap-2 whitespace-nowrap">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              Clocked In
            </div>
          </div>
        </div>
      </section>

      {/* ── Workday Timeline (Gantt Bar) ── */}
      <section className="bg-white py-16 px-6">
        <div className="container-main max-w-4xl">
          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal font-poppins mb-3">Visual Shift Tracking</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-3">See the Full Workday at a Glance</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-2xl">Every shift is visualized as a timeline. Instantly spot long breaks, overtime stretches, and missed clock-outs across your entire team.</p>

          <div className="bg-rd-cream rounded-2xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="font-poppins font-semibold text-rd-dark text-sm">Sarah M. — Today's Shift</span>
              <span className="text-xs text-gray-400 font-dm-sans">Total: 8h 30m</span>
            </div>
            {/* Time axis */}
            <div className="flex items-center text-[10px] text-gray-400 font-dm-sans mb-2 justify-between px-0.5">
              {['9 AM', '10', '11', '12 PM', '1', '2', '3', '4', '5', '5:30'].map(t => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {/* Gantt bar */}
            <div className="relative h-12 bg-gray-200 rounded-lg overflow-hidden flex">
              <div className="bg-rd-teal h-full rounded-l-lg" style={{ width: '35%' }} />
              <div className="bg-amber-400 h-full flex items-center justify-center" style={{ width: '6%' }}>
                <span className="text-[9px] font-bold text-amber-900">BRK</span>
              </div>
              <div className="bg-rd-teal h-full" style={{ width: '41%' }} />
              <div className="bg-[#457b9d] h-full rounded-r-lg flex items-center justify-center" style={{ width: '6%' }}>
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
              </div>
            </div>
            {/* Legend */}
            <div className="flex gap-5 mt-4 text-xs font-dm-sans text-gray-500">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-rd-teal inline-block" /> Active Work</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-400 inline-block" /> Break</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-[#457b9d] inline-block" /> Clock Out</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-gray-200 inline-block" /> Untracked</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timesheet Table Mockup ── */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal font-poppins mb-3">Weekly Timesheets</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-3">Timesheets That Build Themselves</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-2xl">Every clock-in becomes a timesheet row. Review, approve, and export weekly hours with overtime automatically calculated.</p>

          <div className="overflow-x-auto rounded-2xl shadow-sm">
            <table className="w-full text-sm font-dm-sans min-w-[700px]">
              <thead>
                <tr className="bg-rd-dark text-white text-left">
                  <th className="py-3.5 px-5 font-poppins font-semibold text-xs uppercase tracking-wider">Employee</th>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(d => (
                    <th key={d} className="py-3.5 px-3 font-poppins font-semibold text-xs uppercase tracking-wider text-center">{d}</th>
                  ))}
                  <th className="py-3.5 px-3 font-poppins font-semibold text-xs uppercase tracking-wider text-center">Total</th>
                  <th className="py-3.5 px-3 font-poppins font-semibold text-xs uppercase tracking-wider text-center">OT</th>
                  <th className="py-3.5 px-4 font-poppins font-semibold text-xs uppercase tracking-wider text-center">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {timesheetRows.map((row, i) => (
                  <tr key={row.name} className={`border-b border-gray-100 ${i % 2 === 1 ? 'bg-gray-50/50' : ''}`}>
                    <td className="py-3.5 px-5">
                      <div className="font-poppins font-semibold text-rd-dark">{row.name}</div>
                      <div className="text-gray-400 text-xs">{row.role}</div>
                    </td>
                    {[row.mon, row.tue, row.wed, row.thu, row.fri].map((h, j) => (
                      <td key={j} className={`py-3.5 px-3 text-center ${parseFloat(h) > 8.5 ? 'text-red-500 font-semibold' : 'text-gray-600'}`}>{h}</td>
                    ))}
                    <td className="py-3.5 px-3 text-center font-semibold text-rd-dark">{row.total}</td>
                    <td className={`py-3.5 px-3 text-center font-semibold ${parseFloat(row.overtime) > 0 ? 'text-red-500' : 'text-gray-400'}`}>{row.overtime}h</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${row.status === 'Approved' ? 'bg-rd-teal/10 text-rd-dark' : 'bg-amber-100 text-amber-700'}`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── GPS Location Pin Map Mockup ── */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal font-poppins mb-3">GPS Clock-In Verification</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Verify They Are Where They Say They Are</h2>
              <p className="text-gray-500 font-dm-sans text-lg mb-6 leading-relaxed">Every mobile clock-in captures GPS coordinates. Set a geofence around each shop location and only accept clock-ins from within range. No more phantom shifts from the parking lot across town.</p>
              <ul className="space-y-3">
                {['Geofence radius configurable per location', 'GPS coordinates logged with every punch', 'Out-of-range clock-ins flagged for review', 'Works offline — syncs when back online'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rd-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <span className="text-gray-600 font-dm-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Map mockup */}
            <div className="relative bg-rd-cream rounded-2xl p-1 shadow-lg overflow-hidden aspect-[4/3]">
              <svg viewBox="0 0 480 360" fill="none" className="w-full h-full">
                {/* Street grid */}
                <rect width="480" height="360" rx="12" fill="#e8e8ef"/>
                {['80','160','240','320','400'].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="360" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>)}
                {['72','144','216','288'].map(y => <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>)}
                {/* Buildings */}
                <rect x="90" y="85" width="60" height="50" rx="4" fill="#d1d1db"/>
                <rect x="200" y="155" width="80" height="60" rx="4" fill="#d1d1db"/>
                <rect x="340" y="90" width="55" height="45" rx="4" fill="#d1d1db"/>
                <rect x="100" y="230" width="70" height="55" rx="4" fill="#d1d1db"/>
                <rect x="350" y="220" width="65" height="50" rx="4" fill="#d1d1db"/>
                {/* Geofence circle */}
                <circle cx="240" cy="185" r="75" fill="rgba(1,109,116,0.08)" stroke="#3d405b" strokeWidth="2" strokeDasharray="6 4"/>
                {/* Shop marker */}
                <g transform="translate(228,150)">
                  <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 22 12 22s12-13 12-22C24 5.4 18.6 0 12 0z" fill="#3d405b"/>
                  <circle cx="12" cy="11" r="5" fill="white"/>
                </g>
                <text x="240" y="210" textAnchor="middle" fill="#3d405b" fontSize="10" fontWeight="700" fontFamily="sans-serif">RepairHub HQ</text>
                {/* Employee pins */}
                <g transform="translate(193,160)">
                  <circle cx="0" cy="0" r="6" fill="#C2F970" stroke="#3d405b" strokeWidth="1.5"/>
                  <text x="10" y="4" fill="#3d405b" fontSize="8" fontWeight="600">Sarah</text>
                </g>
                <g transform="translate(270,195)">
                  <circle cx="0" cy="0" r="6" fill="#C2F970" stroke="#3d405b" strokeWidth="1.5"/>
                  <text x="10" y="4" fill="#3d405b" fontSize="8" fontWeight="600">Jake</text>
                </g>
                {/* Out of range employee */}
                <g transform="translate(390,290)">
                  <circle cx="0" cy="0" r="6" fill="#f87171" stroke="#dc2626" strokeWidth="1.5"/>
                  <text x="10" y="4" fill="#dc2626" fontSize="8" fontWeight="600">Out of range</text>
                </g>
                {/* Geofence label */}
                <text x="240" y="120" textAnchor="middle" fill="rgba(1,109,116,0.5)" fontSize="9" fontWeight="600">GEOFENCE — 200m RADIUS</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Payroll Summary Card ── */}
      <section className="bg-rd-dark py-16 px-6">
        <div className="container-main max-w-5xl">
          <div className="text-center mb-12">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-mint font-poppins mb-3">Payroll-Ready Reports</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-3">From Timesheets to Paychecks in One Click</h2>
            <p className="text-white/55 font-dm-sans text-lg max-w-xl mx-auto">Approved timesheets generate payroll summaries automatically. Export to QuickBooks, Xero, or CSV.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Summary stat cards */}
            {[
              { label: 'Regular Hours', value: '152.5', sub: 'This pay period', accent: 'text-white' },
              { label: 'Overtime Hours', value: '3.5', sub: '@ 1.5x multiplier', accent: 'text-amber-400' },
              { label: 'Total Payroll', value: '$6,840', sub: '4 employees', accent: 'text-rd-mint' },
            ].map(card => (
              <div key={card.label} className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-white/50 text-xs font-poppins uppercase tracking-wider mb-3">{card.label}</div>
                <div className={`text-4xl font-poppins font-bold mb-1 ${card.accent}`}>{card.value}</div>
                <div className="text-white/35 text-sm font-dm-sans">{card.sub}</div>
              </div>
            ))}
          </div>

          {/* Payroll breakdown bar */}
          <div className="mt-8 bg-white/[0.06] border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-poppins font-semibold text-white text-sm">Pay Period Breakdown — Aug 1–15</span>
              <span className="text-xs text-white/40 font-dm-sans flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                Export CSV
              </span>
            </div>
            <div className="h-6 rounded-full bg-white/5 overflow-hidden flex">
              <div className="bg-rd-teal h-full" style={{ width: '72%' }} title="Regular hours" />
              <div className="bg-amber-400 h-full" style={{ width: '5%' }} title="Overtime" />
              <div className="bg-[#457b9d] h-full" style={{ width: '8%' }} title="Break (paid)" />
            </div>
            <div className="flex gap-6 mt-3 text-[11px] font-dm-sans text-white/50">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-rd-teal inline-block" /> Regular (72%)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400 inline-block" /> Overtime (5%)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#457b9d] inline-block" /> Paid Break (8%)</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-white/10 inline-block" /> Unallocated (15%)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works: Vertical 3-Step Flow ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-2xl">
          <div className="text-center mb-14">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal font-poppins mb-3">How It Works</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark">Three Taps. Zero Paperwork.</h2>
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-rd-teal via-rd-teal/40 to-rd-teal hidden md:block" />

            {[
              {
                step: '1',
                title: 'Clock In',
                desc: 'Employee opens the POS or mobile app and taps Clock In. GPS verifies their location, and the shift timer starts immediately. No PINs to forget, no cards to swipe.',
                icon: (
                  <svg className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
                  </svg>
                ),
              },
              {
                step: '2',
                title: 'Work & Track',
                desc: 'Hours accumulate in real time. Breaks are logged separately. Managers see a live dashboard with who is on the clock, who is on break, and who has not shown up yet.',
                icon: (
                  <svg className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                ),
              },
              {
                step: '3',
                title: 'Clock Out & Export',
                desc: 'At shift end, one tap clocks out. The timesheet updates instantly. At pay period close, approve all timesheets and export directly to your payroll system.',
                icon: (
                  <svg className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <div key={item.step} className={`relative flex items-start gap-6 ${i < 2 ? 'mb-12' : ''}`}>
                {/* Step circle */}
                <div className="relative z-10 w-16 h-16 shrink-0 rounded-2xl bg-rd-teal/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="pt-1">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[10px] font-bold text-rd-teal/50 uppercase tracking-widest font-poppins">Step {item.step}</span>
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-rd-dark mb-2">{item.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Attendance History Ribbon ── */}
      <section className="bg-rd-cream py-14 px-6">
        <div className="container-main max-w-4xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-poppins font-bold text-2xl text-rd-dark">Attendance at a Glance</h2>
              <p className="text-gray-500 font-dm-sans text-sm mt-1">Last 14 days — Sarah M.</p>
            </div>
            <div className="flex gap-4 text-[11px] font-dm-sans text-gray-400">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-rd-teal inline-block"/> On Time</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-amber-400 inline-block"/> Late</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-red-400 inline-block"/> Absent</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-gray-200 inline-block"/> Off</span>
            </div>
          </div>
          {/* Heatmap-style grid */}
          <div className="grid grid-cols-7 md:grid-cols-14 gap-2">
            {['on','on','late','on','on','off','off','on','on','on','absent','on','off','off'].map((status, i) => {
              const colors = { on: 'bg-rd-teal', late: 'bg-amber-400', absent: 'bg-red-400', off: 'bg-gray-200' };
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className={`w-full aspect-square rounded-lg ${colors[status]}`} />
                  <span className="text-[9px] text-gray-400 font-dm-sans">{['M','T','W','T','F','S','S'][i % 7]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="bg-white py-16 px-6">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-bold text-3xl text-rd-dark">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4.5 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors text-[15px]"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <svg className={`w-5 h-5 shrink-0 ml-4 text-gray-400 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
