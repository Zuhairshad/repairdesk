import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ── Appointment data for the calendar mockup ─────────────────────────── */
const calendarAppts = [
  { time: '09:00', name: 'Sara J.', service: 'iPhone Screen', duration: 2, color: 'bg-rd-teal' },
  { time: '10:00', name: 'Mike T.', service: 'Battery Replace', duration: 1, color: 'bg-indigo-500' },
  { time: '11:30', name: 'Priya N.', service: 'MacBook Repair', duration: 3, color: 'bg-amber-500' },
  { time: '14:00', name: 'Walk-in', service: 'Diagnostic', duration: 1, color: 'bg-gray-400' },
  { time: '15:00', name: 'James O.', service: 'iPad Glass', duration: 2, color: 'bg-purple-500' },
];

const HOURS = ['08', '09', '10', '11', '12', '13', '14', '15', '16', '17'];

/* ── Booking flow steps ────────────────────────────────────────────────── */
const bookingFlow = [
  {
    num: '01',
    title: 'Customer Picks a Service',
    desc: 'Your branded booking widget — on your site or Facebook — lets customers choose their device type and repair service with one tap.',
  },
  {
    num: '02',
    title: 'Choose a Time Slot',
    desc: 'A live availability grid shows open slots for each technician. Customers pick the time that works for them, 24 hours a day.',
  },
  {
    num: '03',
    title: 'Confirmation Sent Instantly',
    desc: 'RepairDesk fires an SMS and email confirmation the moment the booking is made — no back-and-forth.',
  },
  {
    num: '04',
    title: 'Automated Reminders Go Out',
    desc: '24 hours before — and again 2 hours before — reminders go out automatically to slash no-shows.',
  },
  {
    num: '05',
    title: 'Ticket Created Automatically',
    desc: 'When the customer arrives, a repair ticket is already waiting. Zero manual data entry, zero friction.',
  },
];

/* ── Feature deep-dives ─────────────────────────────────────────────────── */
const deepDives = [
  {
    tag: 'Online Booking',
    title: 'A Booking Widget That Works While You Sleep',
    desc: 'Embed a fully branded scheduling widget anywhere — your website, Google Business profile, or Facebook page. Customers book a service, pick a tech, choose a time, and confirm. You get notified instantly. Your calendar fills without a single phone call.',
    bullets: ['Google & Facebook integration', 'Your branding, your colors', 'Works on mobile & desktop', 'Zero coding required'],
    art: 'widget',
  },
  {
    tag: 'Calendar Sync',
    title: 'One Calendar — Everywhere You Need It',
    desc: 'Every appointment in RepairDesk flows to Google Calendar or Outlook in real time. Double-booking is physically impossible. Your team sees their schedule on any device without ever opening the POS.',
    bullets: ['Two-way Google Calendar sync', 'Microsoft Outlook integration', 'Conflict detection & blocking', 'Per-technician calendar views'],
    art: 'calendar',
  },
  {
    tag: 'Automated Reminders',
    title: 'Slash No-Shows by 70% — Without Lifting a Finger',
    desc: 'Reminders go out automatically at 24 hours and 2 hours before each appointment. Customers can confirm, reschedule, or cancel via a secure link. You never have to chase anyone down.',
    bullets: ['SMS + email reminders', 'Two-way customer replies', 'Reschedule links in every message', 'Custom reminder copy & timing'],
    art: 'bell',
  },
  {
    tag: 'Staff Management',
    title: 'Route Every Job to the Right Technician',
    desc: "Set individual availability, lunch breaks, and vacation days for each tech. RepairDesk routes new bookings only to available staff. Customers see real-time open slots — never a time that's already taken.",
    bullets: ['Per-tech availability windows', 'Break & holiday blocking', 'Auto-routing by skill level', 'Color-coded team calendar'],
    art: 'staff',
  },
];

/* ── Stats ─────────────────────────────────────────────────────────────── */
const stats = [
  { value: '70%', label: 'Fewer no-shows' },
  { value: '24/7', label: 'Booking availability' },
  { value: '3 min', label: 'Avg. booking time' },
  { value: '5,000+', label: 'Shops using it' },
];

/* ── Integrations ───────────────────────────────────────────────────────── */
const integrations = [
  'Google Calendar', 'Outlook', 'Google Business', 'Facebook', 'RepairDesk SMS', 'RepairDesk POS',
];

/* ── FAQ ────────────────────────────────────────────────────────────────── */
const faqs = [
  { q: 'Can I embed the booking widget on my own website?', a: 'Yes — you get a small JavaScript snippet you paste into any page. It works on WordPress, Wix, Squarespace, Shopify, and plain HTML.' },
  { q: 'Does the widget match my brand colors?', a: 'Fully. You can set your logo, primary color, and button text from within RepairDesk. Customers never see RepairDesk branding unless you want them to.' },
  { q: 'What happens when a customer books online?', a: 'RepairDesk creates a pending repair ticket, notifies the assigned tech, and sends the customer a confirmation SMS and email — all within seconds of the booking.' },
  { q: 'Can I block out days when my shop is closed?', a: 'Yes. You set your business hours, holidays, and per-technician breaks. Customers can only book slots that are genuinely open.' },
  { q: 'Does Appointments Pro replace my POS workflow?', a: "No — it feeds into it. When a customer arrives for their appointment, the ticket is already created. Your tech just opens it, performs the repair, and closes it out as normal." },
];

/* ── Art SVGs ───────────────────────────────────────────────────────────── */
function WidgetArt() {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-sm mx-auto">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="ml-2 text-xs text-gray-400 font-dm-sans">myrepairshop.com/book</div>
      </div>
      <div className="text-center mb-5">
        <div className="font-poppins font-bold text-rd-dark text-lg">Book a Repair</div>
        <p className="text-xs text-gray-500 font-dm-sans mt-1">What needs fixing?</p>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-5">
        {['📱 Phone', '💻 Laptop', '⌚ Watch', '🎮 Console'].map((s) => (
          <button key={s} className={`text-sm font-poppins px-3 py-2.5 rounded-xl border-2 text-rd-dark transition-all ${s === '📱 Phone' ? 'border-rd-teal bg-rd-teal/10' : 'border-gray-200 hover:border-rd-teal/50'}`}>{s}</button>
        ))}
      </div>
      <div className="mb-4">
        <div className="text-xs font-poppins font-semibold text-gray-500 uppercase tracking-wide mb-2">Select Service</div>
        <div className="space-y-2">
          {['Screen Replacement', 'Battery Swap', 'Diagnostic'].map((s, i) => (
            <div key={s} className={`flex items-center gap-3 text-sm font-dm-sans px-3 py-2 rounded-lg cursor-pointer ${i === 0 ? 'bg-rd-teal text-white' : 'bg-gray-50 text-gray-700'}`}>
              <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${i === 0 ? 'border-white' : 'border-gray-300'}`}>
                {i === 0 && <span className="w-2 h-2 rounded-full bg-white block" />}
              </span>
              {s}
            </div>
          ))}
        </div>
      </div>
      <button className="w-full bg-rd-teal text-white font-poppins font-semibold py-3 rounded-xl text-sm">
        Choose a Time →
      </button>
    </div>
  );
}

function CalendarArt() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const slots = [
    [1, 0, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1],
    [1, 0, 0, 1, 1],
  ];
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <span className="font-poppins font-semibold text-rd-dark">August 2025</span>
        <div className="flex gap-2">
          <button className="text-gray-400 hover:text-rd-teal">‹</button>
          <button className="text-gray-400 hover:text-rd-teal">›</button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {days.map(d => <div key={d} className="text-center text-xs font-poppins font-semibold text-gray-400 uppercase">{d}</div>)}
      </div>
      {slots.map((row, ri) => (
        <div key={ri} className="grid grid-cols-5 gap-2 mb-2">
          {row.map((open, ci) => (
            <div key={ci} className={`h-10 rounded-lg flex items-center justify-center text-xs font-poppins font-semibold cursor-pointer transition-all ${open ? 'bg-rd-teal/10 text-rd-teal hover:bg-rd-teal hover:text-white border border-rd-teal/30' : 'bg-gray-100 text-gray-300 cursor-not-allowed'}`}>
              {open ? 'Open' : '—'}
            </div>
          ))}
        </div>
      ))}
      <div className="mt-4 text-center text-xs font-dm-sans text-gray-500">Sync with Google Calendar</div>
    </div>
  );
}

function BellArt() {
  const messages = [
    { icon: '📱', text: 'Hi Sara — reminder: your iPhone screen repair is tomorrow at 10am. Reply YES to confirm or call to reschedule.', type: 'sms', time: '9:00 AM' },
    { icon: '✅', text: 'YES', type: 'reply', time: '9:02 AM' },
    { icon: '📱', text: 'Perfect! We\'ll see you tomorrow at iFixCity. Your tech is James. See you then!', type: 'sms', time: '9:02 AM' },
  ];
  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl p-6 max-w-sm mx-auto">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 bg-rd-teal rounded-full flex items-center justify-center text-white text-xs font-poppins font-bold">RD</div>
        <div>
          <div className="text-white text-sm font-poppins font-semibold">iFixCity Repair</div>
          <div className="text-gray-400 text-xs font-dm-sans">+1 (555) 012-3456</div>
        </div>
      </div>
      <div className="space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.type === 'reply' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs font-dm-sans leading-relaxed ${m.type === 'reply' ? 'bg-rd-teal text-white rounded-br-sm' : 'bg-gray-700 text-gray-100 rounded-bl-sm'}`}>
              {m.text}
              <div className={`text-[10px] mt-1 ${m.type === 'reply' ? 'text-white/70' : 'text-gray-500'}`}>{m.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2">
        <div className="flex-1 bg-gray-700 rounded-full px-4 py-2 text-gray-400 text-xs font-dm-sans">iMessage</div>
        <button className="w-8 h-8 bg-rd-teal rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </button>
      </div>
    </div>
  );
}

function StaffArt() {
  const techs = [
    { name: 'James', color: 'bg-rd-teal', slots: [1, 1, 0, 1, 0, 1] },
    { name: 'Priya', color: 'bg-purple-500', slots: [0, 1, 1, 0, 1, 1] },
    { name: 'Marcus', color: 'bg-amber-500', slots: [1, 0, 1, 1, 1, 0] },
  ];
  const times = ['9AM', '10AM', '11AM', '1PM', '2PM', '3PM'];
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-sm mx-auto">
      <div className="bg-rd-dark px-5 py-3 flex items-center justify-between">
        <span className="font-poppins font-semibold text-white text-sm">Team Availability</span>
        <span className="text-xs font-dm-sans text-white/60">Wed, Aug 14</span>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-7 gap-1 mb-2">
          <div />
          {times.map(t => <div key={t} className="text-center text-[10px] font-poppins font-semibold text-gray-400">{t}</div>)}
        </div>
        {techs.map(t => (
          <div key={t.name} className="grid grid-cols-7 gap-1 mb-2 items-center">
            <div className="flex items-center gap-1">
              <div className={`w-5 h-5 ${t.color} rounded-full flex items-center justify-center text-white text-[9px] font-poppins font-bold`}>{t.name[0]}</div>
            </div>
            {t.slots.map((s, i) => (
              <div key={i} className={`h-8 rounded-md flex items-center justify-center text-[10px] font-poppins ${s ? `${t.color} text-white` : 'bg-gray-100 text-gray-300'}`}>
                {s ? '✓' : '—'}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Main Component ─────────────────────────────────────────────────────── */
export default function AppointmentsProPage() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const artMap = { widget: <WidgetArt />, calendar: <CalendarArt />, bell: <BellArt />, staff: <StaffArt /> };

  return (
    <PageLayout>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-rd-dark text-white pt-24 pb-0 overflow-hidden">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-rd-teal/20 border border-rd-teal/40 text-rd-lime px-5 py-2 rounded-full text-sm font-poppins font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Appointments Pro
            </div>
            <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Your Booking Calendar,<br className="hidden md:block" /> Running on Autopilot
            </h1>
            <p className="font-dm-sans text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-2xl mx-auto">
              Customers book online, reminders go out automatically, tickets create themselves, and no-shows drop to near zero. Appointments Pro does the scheduling so you can do the repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-primary text-base px-8 py-3.5">Start Free Trial</Link>
              <a href="#how-it-works" className="border border-white/30 hover:border-white text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-full transition-colors duration-200">See How It Works</a>
            </div>
          </div>

          {/* Stacked calendar mockup */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-t-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Browser bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100 bg-gray-50">
                <div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 mx-4 bg-white border border-gray-200 rounded-lg px-4 py-1.5 text-xs font-dm-sans text-gray-400">Appointments — RepairDesk</div>
              </div>
              {/* Calendar grid */}
              <div className="flex">
                {/* Time column */}
                <div className="w-20 flex-shrink-0 border-r border-gray-100 pt-8">
                  {HOURS.map(h => (
                    <div key={h} className="h-14 flex items-start px-3 pt-1">
                      <span className="text-xs font-dm-sans text-gray-400">{h}:00</span>
                    </div>
                  ))}
                </div>
                {/* Events column */}
                <div className="flex-1 relative pt-8">
                  {HOURS.map((h, i) => (
                    <div key={h} className={`h-14 border-b ${i % 2 === 0 ? 'border-gray-100' : 'border-dashed border-gray-50'}`} />
                  ))}
                  {/* Appointment blocks */}
                  {calendarAppts.map((appt) => {
                    const hourIndex = parseInt(appt.time.split(':')[0]) - 8;
                    const minOffset = parseInt(appt.time.split(':')[1]);
                    const top = hourIndex * 56 + (minOffset / 60) * 56 + 32;
                    const height = appt.duration * 56 - 4;
                    return (
                      <div
                        key={appt.name}
                        className={`absolute left-3 right-3 ${appt.color} text-white rounded-xl px-3 py-2 shadow-sm overflow-hidden`}
                        style={{ top, height }}
                      >
                        <div className="font-poppins font-semibold text-xs leading-tight">{appt.name}</div>
                        <div className="font-dm-sans text-[11px] text-white/80 leading-tight">{appt.service}</div>
                      </div>
                    );
                  })}
                  {/* Now line */}
                  <div className="absolute left-0 right-0 flex items-center" style={{ top: 4 * 56 + 32 }}>
                    <div className="w-2 h-2 rounded-full bg-red-500 -ml-1" />
                    <div className="flex-1 h-px bg-red-400" />
                    <span className="text-[10px] text-red-500 font-poppins pr-2">Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────── */}
      <section className="bg-rd-teal py-12">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.value} className="text-center">
                <div className="font-dm-serif text-4xl text-white mb-1">{s.value}</div>
                <div className="font-dm-sans text-sm text-white/75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking flow ──────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-rd-teal/10 text-rd-teal font-poppins font-semibold text-sm px-4 py-1.5 rounded-full mb-4">How It Works</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-4">From Click to Repair Ticket in Minutes</h2>
            <p className="font-dm-sans text-gray-600 text-lg">The entire booking journey, handled automatically.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {bookingFlow.map((step, i) => (
              <div key={step.num} className="flex gap-6 mb-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-rd-dark text-rd-lime font-dm-serif text-lg flex items-center justify-center font-bold shrink-0 shadow-md">
                    {step.num}
                  </div>
                  {i < bookingFlow.length - 1 && <div className="w-px flex-1 bg-gradient-to-b from-rd-dark/20 to-transparent mt-2 min-h-[40px]" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-2">{step.title}</h3>
                  <p className="font-dm-sans text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature deep-dives (interactive tabs) ─────────────────────── */}
      <section className="py-20 md:py-28 bg-rd-cream">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-4">Everything Your Schedule Demands</h2>
            <p className="font-dm-sans text-gray-600 text-lg">Four core capabilities that keep your calendar full and your shop running smoothly.</p>
          </div>
          {/* Tab pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {deepDives.map((d, i) => (
              <button
                key={d.tag}
                onClick={() => setActiveFeature(i)}
                className={`px-5 py-2.5 rounded-full font-poppins font-semibold text-sm transition-all duration-200 ${activeFeature === i ? 'bg-rd-teal text-white shadow-md shadow-rd-teal/30' : 'bg-white text-gray-600 hover:text-rd-teal border border-gray-200'}`}
              >
                {d.tag}
              </button>
            ))}
          </div>
          {/* Active panel */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="inline-block bg-rd-teal/10 text-rd-teal font-poppins font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                {deepDives[activeFeature].tag}
              </span>
              <h3 className="font-dm-serif text-3xl text-rd-dark mb-5">{deepDives[activeFeature].title}</h3>
              <p className="font-dm-sans text-gray-600 leading-relaxed mb-7">{deepDives[activeFeature].desc}</p>
              <ul className="space-y-3">
                {deepDives[activeFeature].bullets.map(b => (
                  <li key={b} className="flex items-center gap-3 font-dm-sans text-gray-700">
                    <svg className="w-5 h-5 text-rd-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              {artMap[deepDives[activeFeature].art]}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonial ───────────────────────────────────────────────── */}
      <section className="py-20 bg-rd-dark">
        <div className="container-main max-w-4xl">
          <div className="text-center text-white">
            <svg className="w-10 h-10 text-rd-lime mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-dm-sans text-2xl md:text-3xl leading-relaxed mb-10 text-white/90 max-w-3xl mx-auto">
              "Our no-show rate dropped from 22% to 3% in the first month. The automated reminders alone paid for the subscription in week one."
            </p>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-rd-teal rounded-full flex items-center justify-center text-white font-poppins font-bold text-lg mb-3">PN</div>
              <div className="font-poppins font-semibold text-white text-lg">Priya Nair</div>
              <div className="font-dm-sans text-white/50 text-sm mt-1">Owner, PixelFix — San Jose, CA</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Integrations ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-4">Connects to the Tools You Already Use</h2>
            <p className="font-dm-sans text-gray-600 max-w-xl mx-auto">Appointments Pro plugs into your calendar, website, and messaging — no manual bridges needed.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {integrations.map(name => (
              <div key={name} className="bg-rd-cream rounded-2xl px-6 py-4 font-poppins font-semibold text-rd-dark text-sm border border-gray-100 hover:border-rd-teal/40 hover:shadow-md transition-all duration-200">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-rd-cream">
        <div className="container-main max-w-3xl">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark text-center mb-12">Common Questions</h2>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                >
                  <span className="font-poppins font-medium text-rd-dark text-[15px]">{faq.q}</span>
                  <svg className={`w-5 h-5 text-rd-teal shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-60 pb-5' : 'max-h-0'}`}>
                  <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-rd-dark text-white text-center">
        <div className="container-main max-w-2xl">
          <h2 className="font-dm-serif text-4xl md:text-5xl mb-6">Stop Playing Phone Tag.<br />Start Booking Online.</h2>
          <p className="font-dm-sans text-white/70 text-lg mb-10">14-day free trial. No credit card. Full access to Appointments Pro from day one.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="btn-primary text-base px-8 py-4">Start Your Free Trial</Link>
            <Link to="/contact" className="border border-white/30 hover:border-white text-white font-poppins font-semibold text-base px-8 py-4 rounded-full transition-colors duration-200">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
