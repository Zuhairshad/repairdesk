import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const equipmentCategories = [
  {
    name: 'Tractors & Loaders',
    desc: 'Farm tractors, wheel loaders, skid steers — full engine and hydraulic service tracking.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><circle cx="12" cy="36" r="8" stroke="currentColor" strokeWidth="2.5"/><circle cx="36" cy="36" r="6" stroke="currentColor" strokeWidth="2.5"/><path d="M4 36h0M20 36h10M42 36h2M20 28V16h10l8 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="8" y="14" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="2.5"/><line x1="14" y1="10" x2="14" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
  },
  {
    name: 'Forklifts',
    desc: 'Electric, propane, and diesel forklifts — mast, hydraulic cylinder, and battery service.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="14" y="20" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2.5"/><path d="M8 34v-18h6v18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="8" y1="22" x2="14" y2="22" stroke="currentColor" strokeWidth="2.5"/><circle cx="18" cy="38" r="3" stroke="currentColor" strokeWidth="2.5"/><circle cx="28" cy="38" r="3" stroke="currentColor" strokeWidth="2.5"/><path d="M36 34V10h4v24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="36" y1="10" x2="44" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
    ),
  },
  {
    name: 'Generators',
    desc: 'Standby, portable, and industrial generators — engine rebuild and electrical system repair.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="6" y="14" width="28" height="22" rx="3" stroke="currentColor" strokeWidth="2.5"/><path d="M22 20l-4 8h6l-4 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><line x1="34" y1="22" x2="42" y2="22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><line x1="34" y1="28" x2="42" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><rect x="38" y="18" width="6" height="14" rx="1" stroke="currentColor" strokeWidth="2.5"/></svg>
    ),
  },
  {
    name: 'Construction Equipment',
    desc: 'Excavators, bulldozers, cranes — undercarriage, boom, and engine overhaul tracking.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10"><rect x="4" y="30" width="20" height="10" rx="2" stroke="currentColor" strokeWidth="2.5"/><circle cx="10" cy="42" r="3" stroke="currentColor" strokeWidth="2.5"/><circle cx="18" cy="42" r="3" stroke="currentColor" strokeWidth="2.5"/><path d="M20 30l10-16h6v16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M30 14l12-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><rect x="10" y="32" width="6" height="4" rx="1" fill="currentColor" opacity="0.3"/></svg>
    ),
  },
];

const pipelineSteps = [
  { label: 'Intake', detail: 'Log equipment, photos, and customer details' },
  { label: 'Diagnose', detail: 'Run inspections and record fault codes' },
  { label: 'Parts', detail: 'Source parts, check inventory, create POs' },
  { label: 'Repair', detail: 'Assign techs, track labor hours live' },
  { label: 'Test', detail: 'Run post-repair load and safety tests' },
  { label: 'Release', detail: 'Final invoice, signature, and pickup' },
];

const fleetUnits = [
  { id: 'CAT-320F', type: 'Excavator', status: 'In Service', health: 92, nextPM: '12 days' },
  { id: 'JD-6130R', type: 'Tractor', status: 'In Repair', health: 41, nextPM: 'Overdue' },
  { id: 'TOY-8FD25', type: 'Forklift', status: 'In Service', health: 78, nextPM: '30 days' },
  { id: 'GEN-QAS60', type: 'Generator', status: 'Awaiting Parts', health: 55, nextPM: '5 days' },
];

const partsCategories = [
  { name: 'Hydraulic Components', items: 'Cylinders, hoses, pumps, valves', qty: 342 },
  { name: 'Engine Filters & Belts', items: 'Oil, fuel, air filters, serpentine belts', qty: 1280 },
  { name: 'Electrical Systems', items: 'Alternators, starters, wiring harnesses', qty: 198 },
  { name: 'Undercarriage Parts', items: 'Track links, rollers, sprockets, idlers', qty: 87 },
  { name: 'Transmission & Drivetrain', items: 'Clutch plates, torque converters, axles', qty: 156 },
  { name: 'Cooling Systems', items: 'Radiators, water pumps, thermostats', qty: 224 },
];

const faqs = [
  { q: 'Can RepairDesk handle multi-part work orders with different technicians?', a: 'Yes. Each work order can contain unlimited line items, each assignable to a different technician with independent labor time tracking. You can split mechanical, electrical, and hydraulic work across your team and see a unified cost and timeline on a single ticket.' },
  { q: 'How does fleet management work for customers with many assets?', a: 'Every customer can have an unlimited number of assets registered under their account. Each asset tracks its own serial number, service history, warranty status, and preventive maintenance schedule. You can view an entire fleet at a glance and drill into any unit.' },
  { q: 'Does RepairDesk support preventive maintenance scheduling?', a: 'Absolutely. Set up PM schedules based on calendar intervals or operating hours. The system sends automated reminders to both your shop and the customer when service is due, so nothing slips through the cracks.' },
  { q: 'Can I track serialized high-value parts like engines and transmissions?', a: 'Yes. RepairDesk supports serial number tracking on any inventory item. You can trace exactly which part went into which unit, record core returns, and maintain a full chain-of-custody for warranty and liability purposes.' },
  { q: 'How do I send estimates for expensive heavy equipment repairs?', a: 'Create itemized estimates with labor, parts, and sublet costs. Send them to the customer by email or SMS with a one-click approve/decline link. Once approved, the estimate converts directly into a work order with no re-entry.' },
  { q: 'Is RepairDesk suitable for mobile or on-site heavy equipment repair?', a: 'Yes. RepairDesk runs in any browser, so your field technicians can create tickets, log labor, and capture photos from a tablet or phone on the job site. All data syncs in real time back to your shop.' },
];

const GearIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-full h-full opacity-[0.07]">
    <path d="M32 20a12 12 0 100 24 12 12 0 000-24zm0 18a6 6 0 110-12 6 6 0 010 12z" fill="currentColor"/>
    <path d="M55.4 28h-3.8a20.1 20.1 0 00-2.4-5.8l2.7-2.7a2 2 0 000-2.8l-4.6-4.6a2 2 0 00-2.8 0l-2.7 2.7A20.1 20.1 0 0036 12.4V8.6a2 2 0 00-2-2h-4a2 2 0 00-2 2v3.8a20.1 20.1 0 00-5.8 2.4l-2.7-2.7a2 2 0 00-2.8 0l-4.6 4.6a2 2 0 000 2.8l2.7 2.7A20.1 20.1 0 0012.4 28H8.6a2 2 0 00-2 2v4a2 2 0 002 2h3.8a20.1 20.1 0 002.4 5.8l-2.7 2.7a2 2 0 000 2.8l4.6 4.6a2 2 0 002.8 0l2.7-2.7a20.1 20.1 0 005.8 2.4v3.8a2 2 0 002 2h4a2 2 0 002-2v-3.8a20.1 20.1 0 005.8-2.4l2.7 2.7a2 2 0 002.8 0l4.6-4.6a2 2 0 000-2.8l-2.7-2.7A20.1 20.1 0 0051.6 36h3.8a2 2 0 002-2v-4a2 2 0 00-2-2z" fill="currentColor"/>
  </svg>
);

function HealthBar({ value }) {
  const color = value > 75 ? 'bg-green-500' : value > 50 ? 'bg-yellow-500' : 'bg-red-500';
  return (
    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
      <div className={`${color} h-full rounded-full transition-all`} style={{ width: `${value}%` }} />
    </div>
  );
}

export default function HeavyDutyRepairPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* === HERO: Industrial dark with gear watermark === */}
      <section className="relative bg-rd-dark overflow-hidden">
        <div className="absolute top-4 right-[-40px] w-72 h-72 text-white pointer-events-none"><GearIcon /></div>
        <div className="absolute bottom-[-20px] left-[-30px] w-56 h-56 text-white pointer-events-none rotate-45"><GearIcon /></div>
        <div className="relative z-10 container-main py-24 md:py-32 px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px flex-1 max-w-[60px] bg-rd-lime" />
              <span className="font-dm-sans text-xs uppercase tracking-[0.25em] text-rd-lime font-semibold">Heavy Duty Repair Software</span>
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-[3.4rem] md:leading-[1.12] text-white mb-6">
              Built for the Shops That Fix<br className="hidden md:block" /> the Biggest Machines
            </h1>
            <p className="font-dm-sans text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Tractors, excavators, generators, forklifts — your jobs are complex. RepairDesk gives you multi-part work orders, fleet tracking, and parts inventory purpose-built for heavy equipment.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5 text-base">Start Free Trial</a>
              <Link to="/contact" className="group inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:border-rd-lime hover:text-rd-lime transition-colors">
                Book a Demo
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
        {/* Hazard stripe bottom border */}
        <div className="h-3 w-full" style={{ background: 'repeating-linear-gradient(135deg, #C8E52B 0 12px, #3d405b 12px 24px)' }} />
      </section>

      {/* === EQUIPMENT CATEGORIES GRID === */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-4">Equipment We Help You Service</h2>
          <p className="font-dm-sans text-gray-500 text-center mb-14 max-w-xl mx-auto">RepairDesk adapts to every class of heavy equipment your shop handles.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentCategories.map((cat) => (
              <div key={cat.name} className="group bg-white rounded-2xl p-7 border-2 border-transparent hover:border-rd-teal transition-all shadow-sm hover:shadow-lg">
                <div className="text-rd-teal mb-5 group-hover:scale-110 transition-transform origin-left">{cat.icon}</div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-2">{cat.name}</h3>
                <p className="font-dm-sans text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === WORK ORDER LIFECYCLE PIPELINE === */}
      <section className="bg-rd-dark py-20 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white text-center mb-4">Work Order Lifecycle</h2>
          <p className="font-dm-sans text-white/60 text-center mb-14 max-w-lg mx-auto">Every heavy job follows a clear pipeline. See exactly where each repair stands.</p>
          {/* Desktop pipeline */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connector bar behind the circles */}
            <div className="absolute top-7 left-[8%] right-[8%] h-1.5 bg-gradient-to-r from-rd-teal via-rd-lime to-rd-teal rounded-full opacity-40" />
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="relative flex flex-col items-center text-center flex-1">
                <div className="relative z-10 w-14 h-14 rounded-full bg-rd-teal text-white flex items-center justify-center font-poppins font-bold text-lg border-4 border-rd-dark shadow-lg shadow-rd-teal/20">
                  {i + 1}
                </div>
                <span className="font-poppins font-semibold text-white mt-4 text-sm">{step.label}</span>
                <span className="font-dm-sans text-white/50 text-xs mt-1 max-w-[130px] leading-snug">{step.detail}</span>
              </div>
            ))}
          </div>
          {/* Mobile pipeline */}
          <div className="md:hidden space-y-0">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-rd-teal text-white flex items-center justify-center font-poppins font-bold text-sm border-2 border-rd-dark">{i + 1}</div>
                  {i < pipelineSteps.length - 1 && <div className="w-0.5 h-10 bg-rd-teal/30" />}
                </div>
                <div className="pt-1.5 pb-4">
                  <span className="font-poppins font-semibold text-white text-sm">{step.label}</span>
                  <p className="font-dm-sans text-white/50 text-xs mt-0.5">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FLEET DASHBOARD MOCKUP === */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-dm-sans text-xs uppercase tracking-[0.2em] text-rd-teal font-semibold">Fleet Management</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3 mb-5">Every Unit, One Dashboard</h2>
              <p className="font-dm-sans text-gray-500 text-lg leading-relaxed mb-6">
                Customers with 5 or 500 assets get the same experience: a live view of every unit's service status, health score, and next scheduled maintenance.
              </p>
              <ul className="space-y-3 font-dm-sans text-rd-dark">
                {['Track assets by serial number, VIN, or custom ID', 'Full service history per unit — accessible in seconds', 'Automated PM reminders by date or hour-meter reading', 'Customer portal lets fleet managers see their own units'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-rd-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Dashboard mockup */}
            <div className="bg-gray-900 rounded-2xl p-5 shadow-2xl overflow-x-auto">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-3 text-gray-500 text-xs font-dm-sans">Fleet Dashboard — Acme Equipment Co.</span>
              </div>
              <div className="space-y-3 min-w-[320px]">
                {fleetUnits.map((u) => {
                  const statusColor = u.status === 'In Service' ? 'text-green-400' : u.status === 'In Repair' ? 'text-yellow-400' : 'text-orange-400';
                  return (
                    <div key={u.id} className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-poppins font-semibold text-white text-sm">{u.id}</span>
                          <span className="text-gray-500 text-xs font-dm-sans">{u.type}</span>
                        </div>
                        <div className="mt-2"><HealthBar value={u.health} /></div>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-6 text-xs font-dm-sans flex-shrink-0">
                        <span className={`${statusColor} font-medium whitespace-nowrap`}>{u.status}</span>
                        <span className={`whitespace-nowrap ${u.nextPM === 'Overdue' ? 'text-red-400' : 'text-gray-400'}`}>PM: {u.nextPM}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === PREVENTIVE MAINTENANCE CALENDAR MOCKUP === */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-4">Preventive Maintenance Scheduling</h2>
          <p className="font-dm-sans text-gray-500 text-center mb-12 max-w-lg mx-auto">Never miss an oil change, filter swap, or safety inspection. Set it once — RepairDesk handles the reminders.</p>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 max-w-3xl mx-auto overflow-x-auto">
            <div className="flex items-center justify-between mb-6 min-w-[500px]">
              <span className="font-poppins font-semibold text-rd-dark">August 2026</span>
              <div className="flex gap-1">
                <span className="flex items-center gap-1.5 text-xs font-dm-sans text-gray-400"><span className="w-3 h-3 rounded bg-rd-teal inline-block" /> Scheduled</span>
                <span className="flex items-center gap-1.5 text-xs font-dm-sans text-gray-400 ml-3"><span className="w-3 h-3 rounded bg-yellow-400 inline-block" /> Overdue</span>
                <span className="flex items-center gap-1.5 text-xs font-dm-sans text-gray-400 ml-3"><span className="w-3 h-3 rounded bg-green-500 inline-block" /> Completed</span>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-dm-sans min-w-[500px]">
              {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => <div key={d} className="text-gray-400 pb-2 font-medium">{d}</div>)}
              {Array.from({ length: 31 }, (_, i) => {
                const day = i + 1;
                const scheduled = [4, 11, 18, 25].includes(day);
                const overdue = day === 7;
                const completed = [1, 8, 13].includes(day);
                const today = day === 14;
                return (
                  <div key={day} className={`relative aspect-square flex items-center justify-center rounded-lg text-sm
                    ${today ? 'ring-2 ring-rd-teal font-bold text-rd-teal' : 'text-gray-600'}
                    ${scheduled ? 'bg-rd-teal/10' : ''} ${overdue ? 'bg-yellow-50' : ''} ${completed ? 'bg-green-50' : ''}`}>
                    {day}
                    {scheduled && <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-rd-teal" />}
                    {overdue && <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-yellow-400" />}
                    {completed && <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-green-500" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* === PARTS INVENTORY === */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-4">Heavy-Duty Parts Inventory</h2>
          <p className="font-dm-sans text-gray-500 text-center mb-12 max-w-lg mx-auto">Track thousands of SKUs across hydraulic, engine, electrical, and undercarriage categories. Never run out of critical parts again.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {partsCategories.map((cat) => (
              <div key={cat.name} className="flex items-start gap-4 bg-rd-cream rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-rd-teal/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                </div>
                <div className="min-w-0">
                  <h3 className="font-poppins font-semibold text-rd-dark text-sm mb-0.5">{cat.name}</h3>
                  <p className="font-dm-sans text-gray-400 text-xs leading-relaxed">{cat.items}</p>
                  <span className="inline-block mt-2 text-xs font-dm-sans font-medium text-rd-teal">{cat.qty} parts tracked</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === STATS BAR === */}
      <section className="bg-rd-teal py-10 px-6">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            {[
              { value: '500+', label: 'Repair Shops Worldwide' },
              { value: '1.2M+', label: 'Work Orders Completed' },
              { value: '99.9%', label: 'Platform Uptime' },
              { value: '4.8/5', label: 'Average Rating' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-poppins font-bold text-3xl text-white">{s.value}</div>
                <div className="font-dm-sans text-white/70 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ ACCORDION === */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-poppins font-semibold text-rd-dark text-[15px]">{faq.q}</span>
                    <svg className={`w-5 h-5 text-rd-teal flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                    <p className="px-6 pb-5 font-dm-sans text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="relative bg-rd-dark py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] text-white" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 5L5 30l25 25 25-25L30 5zm0 10l15 15-15 15-15-15 15-15z\' fill=\'white\' fill-opacity=\'0.4\'/%3E%3C/svg%3E")', backgroundSize: '60px 60px' }} />
        <div className="relative z-10 container-main max-w-2xl text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-5">Ready to Overhaul Your Shop's Workflow?</h2>
          <p className="font-dm-sans text-white/60 text-lg mb-10">14-day free trial. No credit card required. Set up in under 15 minutes.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-10 py-4 text-base">Start Free Trial</a>
            <Link to="/contact" className="border-2 border-white/20 text-white px-10 py-4 rounded-full font-poppins font-semibold hover:border-rd-lime hover:text-rd-lime transition-colors">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
