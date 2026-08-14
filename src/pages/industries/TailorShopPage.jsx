import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ───── inline SVG icons ───── */

const ScissorsIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
    <path strokeLinecap="round" d="M8.12 7.88L20 20M8.12 16.12L20 4" />
  </svg>
);

const TapeMeasureIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path strokeLinecap="round" d="M6 4v4M10 4v6M14 4v4M18 4v6M2 12h3" />
  </svg>
);

const NeedleIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v14M12 16l-2 4h4l-2-4z" />
    <circle cx="12" cy="5" r="1" fill="currentColor" />
    <path strokeLinecap="round" d="M12 18c-2 1-4 2.5-4 3.5" strokeDasharray="2 2" />
  </svg>
);

const HangerIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a2 2 0 012 2c0 1.1-.9 2-2 2s-2-.9-2-2M3 18l9-8 9 8H3z" />
  </svg>
);

const RulerIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="10" width="18" height="4" rx="1" />
    <path strokeLinecap="round" d="M6 10v2M9 10v3M12 10v2M15 10v3M18 10v2" />
  </svg>
);

const ClockIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <circle cx="12" cy="12" r="9" /><path strokeLinecap="round" d="M12 7v5l3 3" />
  </svg>
);

const CalendarIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
    <circle cx="8" cy="15" r="1" fill="currentColor" /><circle cx="12" cy="15" r="1" fill="currentColor" />
  </svg>
);

const SpoolIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <ellipse cx="12" cy="6" rx="6" ry="3" /><ellipse cx="12" cy="18" rx="6" ry="3" />
    <path strokeLinecap="round" d="M6 6v12M18 6v12" />
  </svg>
);

const ChevronIcon = ({ className = 'w-5 h-5', open }) => (
  <svg className={`${className} transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

/* ───── garment data ───── */

const garmentTypes = [
  { name: 'Pants', desc: 'Hemming, tapering, waist adjustments', icon: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M14 8h20v6l-4 26h-4l-2-20-2 20h-4L14 14V8z" /><path strokeLinecap="round" d="M14 8h20" strokeWidth={2} />
    </svg>
  )},
  { name: 'Dress', desc: 'Taking in, letting out, length changes', icon: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M20 6h8l2 8-6 4-6-4 2-8zM14 18l4-4v0l6 4 6-4v0l4 4-2 24H16L14 18z" />
    </svg>
  )},
  { name: 'Suit', desc: 'Jacket fitting, sleeve length, vents', icon: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M16 6l-6 8v24h8V22l6 4 6-4v16h8V14l-6-8H16z" /><path strokeLinecap="round" d="M24 18v20M20 8l4 10 4-10" />
    </svg>
  )},
  { name: 'Jacket', desc: 'Shoulder adjustments, relining', icon: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M18 6l-8 10v20h10V24h8v12h10V16l-8-10H18z" /><path strokeLinecap="round" d="M22 6c0 4 2 6 2 6s2-2 2-6" />
    </svg>
  )},
  { name: 'Shirt', desc: 'Darts, collar, cuff resizing', icon: (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M18 6l-8 6 4 4 4-2v24h12V14l4 2 4-4-8-6H18z" /><path strokeLinecap="round" d="M20 6h8" strokeWidth={2} />
    </svg>
  )},
];

const workflowSteps = [
  { label: 'Measure', icon: <TapeMeasureIcon className="w-7 h-7" />, color: 'bg-rd-teal' },
  { label: 'Cut', icon: <ScissorsIcon className="w-7 h-7" />, color: 'bg-amber-500' },
  { label: 'Sew', icon: <NeedleIcon className="w-7 h-7" />, color: 'bg-violet-500' },
  { label: 'Fit', icon: <HangerIcon className="w-7 h-7" />, color: 'bg-rose-500' },
  { label: 'Deliver', icon: <RulerIcon className="w-7 h-7" />, color: 'bg-emerald-500' },
];

const fabricSwatches = [
  { name: 'Italian Wool', color: 'bg-gray-700', stock: 42, unit: 'yards' },
  { name: 'Egyptian Cotton', color: 'bg-sky-100', stock: 78, unit: 'yards' },
  { name: 'Silk Charmeuse', color: 'bg-rose-200', stock: 15, unit: 'yards' },
  { name: 'French Linen', color: 'bg-amber-100', stock: 34, unit: 'yards' },
  { name: 'Cashmere Blend', color: 'bg-stone-400', stock: 8, unit: 'yards' },
  { name: 'Denim Stretch', color: 'bg-blue-800', stock: 56, unit: 'yards' },
];

const calendarDays = [
  { day: 'Mon 14', slots: [{ time: '10:00 AM', client: 'Sarah K.', type: 'Fitting' }, { time: '2:30 PM', client: 'James L.', type: 'Measure' }] },
  { day: 'Tue 15', slots: [{ time: '9:00 AM', client: 'Priya M.', type: 'Pickup' }] },
  { day: 'Wed 16', slots: [{ time: '11:00 AM', client: 'David R.', type: 'Fitting' }, { time: '1:00 PM', client: 'Aisha T.', type: 'Measure' }, { time: '4:00 PM', client: 'Chen W.', type: 'Fitting' }] },
  { day: 'Thu 17', slots: [] },
  { day: 'Fri 18', slots: [{ time: '10:30 AM', client: 'Maria G.', type: 'Fitting' }] },
];

const slotColors = { Fitting: 'bg-rd-teal/15 text-rd-teal border-rd-teal/30', Measure: 'bg-amber-50 text-amber-700 border-amber-200', Pickup: 'bg-emerald-50 text-emerald-700 border-emerald-200' };

const faqs = [
  { q: 'Can I store individual customer measurements?', a: 'Yes. Every customer profile includes a dedicated measurements tab where you can log chest, waist, hip, inseam, sleeve length, and any custom fields. Measurements are saved permanently so repeat orders take seconds to create.' },
  { q: 'How does multi-garment ticketing work?', a: 'A single ticket can hold multiple garments. Each garment gets its own alteration line items, pricing, and status. Customers receive one consolidated invoice while your team sees each item individually on the workshop floor.' },
  { q: 'Can I manage rush orders separately?', a: 'Absolutely. Mark any ticket as Rush and assign a priority level. Rush orders appear with a visual flag across every screen, and you can set automatic surcharges based on the turnaround time selected.' },
  { q: 'Does RepairHub handle before-and-after photos?', a: 'Yes. Attach photos at intake and after completion directly from a phone or tablet camera. Photos are stored on the ticket and can be shared with the customer via email or the online repair tracker.' },
  { q: 'Can I set custom pricing for different alteration types?', a: 'You can build a full alteration price list organized by garment type. Set a base price for hemming pants, a different price for tapering a jacket, and so on. Prices auto-populate when creating tickets, and staff can still adjust per order if needed.' },
];

/* ───── page component ───── */

export default function TailorShopPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-rd-dark text-white">
        {/* decorative diagonal fabric texture */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)' }} />
        <div className="relative container-main max-w-6xl px-6 py-28 md:py-36 flex flex-col lg:flex-row items-center gap-14">
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-1.5 mb-7">
              <ScissorsIcon className="w-4 h-4 text-rd-mint" />
              <span className="text-xs font-bold uppercase tracking-widest text-rd-mint font-poppins">Tailor &amp; Alteration Shop Software</span>
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-[3.25rem] leading-[1.12] mb-6">
              The fitting room for your <span className="text-rd-mint">entire business</span>
            </h1>
            <p className="text-white/75 text-lg font-dm-sans leading-relaxed mb-9">
              From the first measurement to the final stitch — manage alteration orders, fabric inventory, fitting appointments, and customer profiles in one elegant system built for tailors.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5 text-base">Start Free Trial</a>
              <Link to="/contact" className="border border-white/30 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors text-base">Book a Demo</Link>
            </div>
          </div>

          {/* hero illustration — stylized mannequin with measuring tape */}
          <div className="flex-shrink-0 relative w-64 h-72 md:w-80 md:h-[22rem]">
            <svg viewBox="0 0 320 360" fill="none" className="w-full h-full drop-shadow-2xl">
              {/* mannequin silhouette */}
              <path d="M160 40c-18 0-32 14-32 32s14 32 32 32 32-14 32-32-14-32-32-32z" fill="#3d405b" opacity="0.9" />
              <path d="M110 120c0-10 22-20 50-20s50 10 50 20l8 140c0 8-6 14-14 14H116c-8 0-14-6-14-14l8-140z" fill="#3d405b" opacity="0.7" />
              <path d="M100 260h120v20c0 12-10 22-22 22H122c-12 0-22-10-22-22v-20z" fill="#3d405b" opacity="0.5" />
              {/* measuring tape wrapping around */}
              <path d="M95 140c60-10 110 10 130 0" stroke="#CDEA68" strokeWidth="6" strokeLinecap="round" strokeDasharray="12 6" />
              <path d="M90 190c70 15 120-5 140 5" stroke="#CDEA68" strokeWidth="6" strokeLinecap="round" strokeDasharray="12 6" />
              {/* measurement annotations */}
              <line x1="80" y1="130" x2="80" y2="250" stroke="white" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
              <text x="70" y="195" fill="white" fontSize="11" textAnchor="end" opacity="0.6" fontFamily="sans-serif">28"</text>
              <line x1="130" y1="105" x2="190" y2="105" stroke="white" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
              <text x="160" y="100" fill="white" fontSize="11" textAnchor="middle" opacity="0.6" fontFamily="sans-serif">16"</text>
              {/* scissors accent */}
              <g transform="translate(230, 100) rotate(25)">
                <circle cx="0" cy="0" r="6" stroke="#CDEA68" strokeWidth="1.5" fill="none" />
                <circle cx="0" cy="18" r="6" stroke="#CDEA68" strokeWidth="1.5" fill="none" />
                <line x1="4" y1="4" x2="20" y2="20" stroke="#CDEA68" strokeWidth="1.5" />
                <line x1="4" y1="14" x2="20" y2="-2" stroke="#CDEA68" strokeWidth="1.5" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ── ALTERATION TYPES GRID ── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-5xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-3">Every Garment Type, One System</h2>
          <p className="text-gray-500 font-dm-sans text-center text-lg mb-14 max-w-2xl mx-auto">Categorize work by garment, set custom pricing per alteration type, and give your team a clear view of what needs to happen next.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {garmentTypes.map(g => (
              <div key={g.name} className="group bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-rd-teal/40 hover:shadow-lg transition-all duration-300 cursor-default">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rd-teal/10 group-hover:bg-rd-teal text-rd-teal group-hover:text-white transition-colors duration-300 mb-4 mx-auto">
                  {g.icon}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-1">{g.name}</h3>
                <p className="text-gray-400 font-dm-sans text-sm leading-snug">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEASUREMENT PROFILE CARD ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-5xl flex flex-col lg:flex-row items-center gap-14">
          <div className="flex-1 max-w-md">
            <span className="text-xs font-bold uppercase tracking-widest text-rd-teal font-poppins">Customer Profiles</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-2 mb-4">Measurements on file, always</h2>
            <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-6">
              No more digging through paper cards. Every customer's measurements live in their digital profile — instantly accessible for repeat orders and quick look-ups during fittings.
            </p>
            <ul className="space-y-3 font-dm-sans text-gray-600">
              {['Chest, waist, hip, inseam & custom fields', 'Measurement history with date stamps', 'Preferred fit notes & style preferences', 'Linked across multi-garment tickets'].map(item => (
                <li key={item} className="flex items-start gap-2.5">
                  <svg className="w-5 h-5 text-rd-teal flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* mockup card */}
          <div className="flex-shrink-0 w-full max-w-sm">
            <div className="bg-gradient-to-br from-rd-dark to-[#014a50] rounded-2xl p-6 text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-rd-teal flex items-center justify-center font-poppins font-bold text-lg">SK</div>
                <div>
                  <p className="font-poppins font-semibold">Sarah Kingsley</p>
                  <p className="text-white/50 text-xs font-dm-sans">Last visit: Aug 2, 2026</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm font-dm-sans">
                {[['Chest', '36"'], ['Waist', '28"'], ['Hips', '38"'], ['Inseam', '30"'], ['Shoulders', '15.5"'], ['Sleeve', '24"']].map(([label, val]) => (
                  <div key={label} className="bg-white/10 rounded-lg px-3 py-2">
                    <span className="block text-white/50 text-[11px] uppercase tracking-wide">{label}</span>
                    <span className="font-semibold text-base">{val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-white/40 font-dm-sans">
                <span className="text-white/60 font-semibold">Fit note:</span> Prefers slim fit, extra room in shoulders
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ORDER TRACKING WORKFLOW ── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-5xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-3">Track Every Stitch</h2>
          <p className="text-gray-500 font-dm-sans text-center text-lg mb-14 max-w-2xl mx-auto">A clear five-stage pipeline so you always know where every garment stands — from first measurement to doorstep delivery.</p>

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0">
            {/* connecting line (desktop) */}
            <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-200" />

            {workflowSteps.map((step, i) => (
              <div key={step.label} className="relative flex flex-row md:flex-col items-center gap-4 md:gap-3 flex-1">
                <div className={`relative z-10 w-20 h-20 rounded-full ${step.color} text-white flex items-center justify-center shadow-lg`}>
                  {step.icon}
                </div>
                <div className="md:text-center">
                  <span className="block font-poppins font-semibold text-rd-dark">{step.label}</span>
                  <span className="text-gray-400 text-sm font-dm-sans">Stage {i + 1}</span>
                </div>
                {i < workflowSteps.length - 1 && (
                  <svg className="hidden md:block absolute -right-4 top-9 w-8 h-3 text-gray-300" viewBox="0 0 32 12" fill="none">
                    <path d="M0 6h28m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FABRIC INVENTORY ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-5xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-rd-teal font-poppins">Fabric Inventory</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-2">Your fabric library, digitized</h2>
            </div>
            <p className="text-gray-500 font-dm-sans max-w-sm text-sm leading-relaxed">Track bolts, buttons, threads, and zippers. Low-stock alerts make sure you never run out mid-order.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {fabricSwatches.map(s => (
              <div key={s.name} className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                <div className={`${s.color} h-24 w-full transition-transform duration-300 group-hover:scale-105`} />
                <div className="p-3">
                  <p className="font-poppins font-semibold text-rd-dark text-sm leading-tight">{s.name}</p>
                  <p className={`text-xs font-dm-sans mt-1 ${s.stock < 20 ? 'text-rose-500 font-semibold' : 'text-gray-400'}`}>
                    {s.stock} {s.unit} {s.stock < 20 ? '— Low' : 'in stock'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT CALENDAR MOCKUP ── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-5xl">
          <div className="flex flex-col lg:flex-row items-start gap-14">
            <div className="flex-1 max-w-md pt-4">
              <span className="text-xs font-bold uppercase tracking-widest text-rd-teal font-poppins">Fitting Appointments</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-2 mb-4">Book fittings, reduce no-shows</h2>
              <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-5">
                Schedule fitting and measurement appointments directly inside RepairHub. Automated SMS and email reminders go out before each appointment so your chair is never empty.
              </p>
              <div className="flex items-center gap-3 text-sm font-dm-sans text-gray-500">
                <CalendarIcon className="w-5 h-5 text-rd-teal" />
                <span>Color-coded by appointment type</span>
              </div>
            </div>

            {/* calendar strip */}
            <div className="flex-1 w-full overflow-x-auto">
              <div className="inline-flex gap-3 min-w-[640px] pb-2">
                {calendarDays.map(d => (
                  <div key={d.day} className="bg-white rounded-xl border border-gray-100 w-[120px] flex-shrink-0 overflow-hidden">
                    <div className="bg-rd-dark text-white text-center py-2 text-xs font-poppins font-semibold">{d.day}</div>
                    <div className="p-2 space-y-1.5 min-h-[110px]">
                      {d.slots.length === 0 && <p className="text-gray-300 text-[11px] italic font-dm-sans text-center pt-6">Open</p>}
                      {d.slots.map(s => (
                        <div key={s.time} className={`rounded-md border px-2 py-1.5 ${slotColors[s.type]}`}>
                          <p className="text-[10px] font-semibold">{s.time}</p>
                          <p className="text-[11px] truncate">{s.client}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RUSH ORDER PRIORITY ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-4xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-3">Rush Orders, Under Control</h2>
          <p className="text-gray-500 font-dm-sans text-center text-lg mb-12 max-w-2xl mx-auto">Flag urgent jobs with a priority level. Your workshop sees rush work front-and-center, and automatic surcharges keep pricing fair.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { level: 'Standard', time: '5 – 7 days', surcharge: 'No surcharge', border: 'border-gray-200', badge: 'bg-gray-100 text-gray-600', bar: 'w-1/3 bg-gray-300' },
              { level: 'Priority', time: '2 – 3 days', surcharge: '+25% surcharge', border: 'border-amber-300', badge: 'bg-amber-50 text-amber-700', bar: 'w-2/3 bg-amber-400' },
              { level: 'Same-Day Rush', time: 'Within hours', surcharge: '+50% surcharge', border: 'border-rose-400', badge: 'bg-rose-50 text-rose-600', bar: 'w-full bg-rose-500' },
            ].map(p => (
              <div key={p.level} className={`rounded-2xl border-2 ${p.border} p-6 flex flex-col items-center text-center`}>
                <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${p.badge}`}>{p.level}</span>
                <ClockIcon className="w-8 h-8 text-rd-dark mb-2" />
                <p className="font-poppins font-semibold text-rd-dark text-lg">{p.time}</p>
                <p className="text-gray-400 text-sm font-dm-sans mb-5">{p.surcharge}</p>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${p.bar}`} />
                </div>
                <p className="text-[11px] text-gray-400 mt-2 font-dm-sans">Urgency</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER + MULTI-GARMENT HIGHLIGHT ── */}
      <section className="bg-rd-dark text-white py-20 px-6">
        <div className="container-main max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
            <SpoolIcon className="w-8 h-8 text-rd-mint mb-4" />
            <h3 className="font-poppins font-semibold text-xl mb-3">Before &amp; After Documentation</h3>
            <p className="text-white/60 font-dm-sans leading-relaxed text-sm">Snap photos at intake and after completion. Images attach directly to the ticket and can be shared with the customer for approval, building trust and reducing disputes.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
            <HangerIcon className="w-8 h-8 text-rd-mint mb-4" />
            <h3 className="font-poppins font-semibold text-xl mb-3">Multi-Garment Tickets</h3>
            <p className="text-white/60 font-dm-sans leading-relaxed text-sm">A bride bringing in a dress and three bridesmaid gowns? One ticket, four garments, each with its own alteration line, pricing, and status. One invoice, zero confusion.</p>
          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION ── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`bg-white rounded-xl border transition-colors ${isOpen ? 'border-rd-teal/40 shadow-sm' : 'border-gray-100'}`}>
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                    <span className="font-poppins font-semibold text-rd-dark">{faq.q}</span>
                    <ChevronIcon open={isOpen} className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-6 pb-5 text-gray-500 font-dm-sans leading-relaxed text-sm">{faq.a}</p>
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
