import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

/* ── Inline SVG: Desk Phone with Signal Waves ─────────────────────── */
const DeskPhoneSVG = () => (
  <svg viewBox="0 0 320 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs mx-auto">
    {/* Signal waves */}
    <path d="M230 40c12-12 32-12 44 0" stroke="#7ba8c4" strokeWidth="3" strokeLinecap="round" opacity=".5" />
    <path d="M222 28c20-20 52-20 72 0" stroke="#7ba8c4" strokeWidth="3" strokeLinecap="round" opacity=".35" />
    <path d="M214 16c28-28 72-28 100 0" stroke="#7ba8c4" strokeWidth="3" strokeLinecap="round" opacity=".2" />
    {/* Phone base */}
    <rect x="60" y="130" width="200" height="120" rx="16" fill="#2d2f45" />
    <rect x="70" y="140" width="180" height="100" rx="10" fill="#3d405b" />
    {/* Screen */}
    <rect x="100" y="152" width="120" height="44" rx="6" fill="#1e2035" />
    <text x="160" y="172" textAnchor="middle" fill="#7ba8c4" fontFamily="monospace" fontSize="11">INCOMING CALL</text>
    <text x="160" y="188" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="13">(512) 555-0147</text>
    {/* Keypad dots */}
    {[0,1,2].map(r => [0,1,2].map(c => (
      <circle key={`${r}${c}`} cx={120 + c * 30} cy={210 + r * 12} r="3.5" fill="#1e2035" />
    )))}
    {/* Handset */}
    <rect x="70" y="78" width="100" height="36" rx="18" fill="#1e2035" />
    <circle cx="86" cy="96" r="10" fill="#1e2035" />
    <circle cx="154" cy="96" r="10" fill="#1e2035" />
    {/* Cord */}
    <path d="M120 114 Q125 126 120 130" stroke="#1e2035" strokeWidth="3" fill="none" />
  </svg>
);

/* ── FAQ data ────────────────────────────────────────────────────── */
const faqs = [
  {
    q: 'Do I need special hardware to use the phone system?',
    a: 'No. The AA Repairdesk Phone System is 100% cloud-based VoIP. You can use any SIP-compatible desk phone, a USB headset, or the mobile and desktop softphone apps. No on-premise PBX required.',
  },
  {
    q: 'Can I keep my existing business phone number?',
    a: 'Yes. We support number porting in most regions. Our onboarding team handles the transfer so there is zero downtime for your shop.',
  },
  {
    q: 'How does Caller ID customer lookup work?',
    a: 'When a call comes in, AA Repairdesk matches the number against your customer database instantly. A pop-up shows the customer name, open tickets, device history, and balance — before you even pick up.',
  },
  {
    q: 'Is call recording compliant with privacy regulations?',
    a: 'Call recording follows your jurisdiction\'s consent requirements. You can enable one-party or two-party consent announcements via the IVR, and recordings are encrypted at rest and in transit.',
  },
  {
    q: 'What happens to calls after business hours?',
    a: 'The IVR auto-attendant takes over. Callers hear your custom greeting, can leave a voicemail, or get routed to an on-call number. Missed call notifications ensure next-day follow-up.',
  },
];

/* ── Comparison data ─────────────────────────────────────────────── */
const comparisonRows = [
  { feature: 'Caller ID with customer info',   traditional: false, aarepairdesk: true },
  { feature: 'Auto-create tickets from calls',  traditional: false, aarepairdesk: true },
  { feature: 'Call recording & playback',        traditional: false, aarepairdesk: true },
  { feature: 'IVR / Auto-Attendant',             traditional: false, aarepairdesk: true },
  { feature: 'Works from any device',            traditional: false, aarepairdesk: true },
  { feature: 'SMS from business number',          traditional: false, aarepairdesk: true },
  { feature: 'Monthly per-line costs',           traditional: true,  aarepairdesk: true },
  { feature: 'Requires on-site PBX hardware',   traditional: true,  aarepairdesk: false },
];

export default function PhoneSystemPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative overflow-hidden bg-rd-dark py-24 md:py-32">
        {/* Decorative sound-wave bars behind hero content */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] pointer-events-none" aria-hidden="true">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="mx-[3px] rounded-full bg-rd-lime"
              style={{
                width: 4,
                height: `${20 + Math.abs(Math.sin(i * 0.45)) * 140}px`,
              }}
            />
          ))}
        </div>

        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left copy */}
            <div>
              <span className="inline-flex items-center gap-2 bg-rd-teal/20 text-rd-mint text-sm font-poppins font-semibold px-4 py-1.5 rounded-full mb-6">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Cloud VoIP
              </span>
              <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.12] mb-6">
                A phone system that <span className="text-rd-mint">knows your customers</span> before you answer
              </h1>
              <p className="font-dm-sans text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                VoIP calling, caller&nbsp;ID with instant customer lookup, IVR routing, call recording, and SMS&nbsp;&mdash;&nbsp;all built into AA Repairdesk so every ring turns into revenue.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="btn-primary text-base px-8 py-3.5">
                  Start Free Trial
                </Link>
                <Link to="/demo" className="border border-white/30 hover:border-rd-lime text-white hover:text-rd-mint font-poppins font-semibold text-base px-8 py-3.5 rounded-full transition-colors">
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Right illustration */}
            <div className="hidden lg:block">
              <DeskPhoneSVG />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CALLER ID POP-UP MOCKUP ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Mockup */}
            <div className="relative bg-rd-cream rounded-2xl p-6 md:p-10 shadow-lg">
              {/* Fake browser chrome */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-blue-400" />
                <span className="ml-3 text-xs font-dm-sans text-gray-400 bg-white rounded px-3 py-1">aarepairdesk.co/dashboard</span>
              </div>
              {/* Dashboard background placeholder */}
              <div className="bg-gray-100 rounded-xl h-52 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-300 font-dm-sans text-sm">Dashboard view</div>
                {/* Caller ID overlay card */}
                <div className="absolute top-4 right-4 w-64 bg-white rounded-xl shadow-2xl border border-rd-teal/20 overflow-hidden animate-pulse-slow">
                  <div className="bg-rd-teal px-4 py-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-white text-xs font-poppins font-semibold">Incoming Call</span>
                  </div>
                  <div className="p-4">
                    <p className="font-poppins font-semibold text-rd-dark text-sm">Sarah Mitchell</p>
                    <p className="text-xs text-gray-500 font-dm-sans">(512) 555-0147</p>
                    <div className="mt-3 space-y-1.5 text-xs font-dm-sans text-gray-600">
                      <div className="flex justify-between"><span>Open tickets</span><span className="font-semibold text-rd-teal">2</span></div>
                      <div className="flex justify-between"><span>Last device</span><span className="font-semibold">iPhone 15 Pro</span></div>
                      <div className="flex justify-between"><span>Balance</span><span className="font-semibold text-red-500">$45.00</span></div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <button className="flex-1 bg-rd-teal text-white text-xs rounded-lg py-1.5 font-poppins font-semibold">Answer</button>
                      <button className="flex-1 bg-gray-100 text-gray-600 text-xs rounded-lg py-1.5 font-poppins font-semibold">Decline</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <h2 className="font-poppins font-bold text-rd-dark text-3xl md:text-4xl mb-5">
                Caller&nbsp;ID that pulls up the whole story
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed mb-6">
                The moment a customer calls, a pop-up shows their name, open repair tickets, device history, and outstanding balance. Your technician picks up the phone already knowing the context&nbsp;&mdash;&nbsp;no awkward "Can I get your name?"
              </p>
              <ul className="space-y-3">
                {['Instant match from your customer database', 'Open tickets & repair status at a glance', 'Outstanding balance & payment history', 'One-click to create a new ticket from the call'].map(item => (
                  <li key={item} className="flex items-start gap-3 font-dm-sans text-gray-700">
                    <svg className="w-5 h-5 text-rd-teal flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CALL ROUTING FLOWCHART ═══════════════ */}
      <section className="py-20 md:py-28 bg-rd-cream">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-rd-dark text-3xl md:text-4xl mb-4">
              Every call lands in the right hands
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              Set up intelligent routing in minutes. No telecom degree required.
            </p>
          </div>

          {/* Flowchart */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 overflow-x-auto pb-4">
            {[
              {
                label: 'Incoming Call',
                sub: 'Customer dials your number',
                color: 'bg-rd-dark text-white',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
              },
              {
                label: 'IVR Menu',
                sub: '"Press 1 for repairs..."',
                color: 'bg-rd-teal text-white',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                ),
              },
              {
                label: 'Smart Route',
                sub: 'Skills-based or round-robin',
                color: 'bg-rd-teal text-white',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                ),
              },
              {
                label: 'Agent / Voicemail',
                sub: 'Live answer or leave a message',
                color: 'bg-rd-dark text-white',
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
            ].map((step, i, arr) => (
              <React.Fragment key={step.label}>
                <div className={`${step.color} rounded-2xl p-6 min-w-[180px] text-center shadow-md flex flex-col items-center`}>
                  <div className="mb-3 opacity-80">{step.icon}</div>
                  <h3 className="font-poppins font-semibold text-base mb-1">{step.label}</h3>
                  <p className="text-xs opacity-70 font-dm-sans">{step.sub}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="text-rd-teal flex items-center justify-center py-2 md:py-0 md:px-2 rotate-90 md:rotate-0">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SMART INTEGRATION ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Copy first on desktop */}
            <div className="order-2 lg:order-1">
              <h2 className="font-poppins font-bold text-rd-dark text-3xl md:text-4xl mb-5">
                Your phone, CRM, and tickets&nbsp;&mdash;&nbsp;one nervous system
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed mb-8">
                Calls don&rsquo;t live in a silo. Every interaction automatically syncs with your CRM contacts, creates or updates repair tickets, and logs the call in the customer timeline.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { t: 'Auto-log calls', d: 'Every call saved to customer timeline' },
                  { t: 'One-click tickets', d: 'Create a repair ticket mid-call' },
                  { t: 'Contact sync', d: 'New callers become CRM contacts' },
                  { t: 'SMS follow-up', d: 'Text from the same business number' },
                ].map(card => (
                  <div key={card.t} className="bg-rd-cream rounded-xl p-5">
                    <h4 className="font-poppins font-semibold text-rd-dark text-sm mb-1">{card.t}</h4>
                    <p className="font-dm-sans text-gray-500 text-sm">{card.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integration diagram */}
            <div className="order-1 lg:order-2 flex justify-center">
              <svg viewBox="0 0 300 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm">
                {/* Center phone node */}
                <circle cx="150" cy="140" r="48" fill="#3d405b" />
                <svg x="126" y="116" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {/* CRM node */}
                <line x1="150" y1="92" x2="150" y2="38" stroke="#7ba8c4" strokeWidth="2" strokeDasharray="6 3" />
                <circle cx="150" cy="28" r="24" fill="#1e2035" />
                <text x="150" y="32" textAnchor="middle" fill="#7ba8c4" fontSize="10" fontFamily="sans-serif" fontWeight="600">CRM</text>
                {/* Tickets node */}
                <line x1="192" y1="162" x2="252" y2="210" stroke="#7ba8c4" strokeWidth="2" strokeDasharray="6 3" />
                <circle cx="262" cy="220" r="24" fill="#1e2035" />
                <text x="262" y="224" textAnchor="middle" fill="#7ba8c4" fontSize="9" fontFamily="sans-serif" fontWeight="600">Tickets</text>
                {/* SMS node */}
                <line x1="108" y1="162" x2="48" y2="210" stroke="#7ba8c4" strokeWidth="2" strokeDasharray="6 3" />
                <circle cx="38" cy="220" r="24" fill="#1e2035" />
                <text x="38" y="224" textAnchor="middle" fill="#7ba8c4" fontSize="10" fontFamily="sans-serif" fontWeight="600">SMS</text>
                {/* Call log node */}
                <line x1="108" y1="118" x2="48" y2="70" stroke="#7ba8c4" strokeWidth="2" strokeDasharray="6 3" />
                <circle cx="38" cy="60" r="24" fill="#1e2035" />
                <text x="38" y="64" textAnchor="middle" fill="#7ba8c4" fontSize="9" fontFamily="sans-serif" fontWeight="600">Log</text>
                {/* Voicemail node */}
                <line x1="192" y1="118" x2="252" y2="70" stroke="#7ba8c4" strokeWidth="2" strokeDasharray="6 3" />
                <circle cx="262" cy="60" r="24" fill="#1e2035" />
                <text x="262" y="56" textAnchor="middle" fill="#7ba8c4" fontSize="8" fontFamily="sans-serif" fontWeight="600">Voice</text>
                <text x="262" y="68" textAnchor="middle" fill="#7ba8c4" fontSize="8" fontFamily="sans-serif" fontWeight="600">mail</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CALL ANALYTICS DASHBOARD MOCKUP ═══════════════ */}
      <section className="py-20 md:py-28 bg-rd-dark">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-poppins font-bold text-white text-3xl md:text-4xl mb-4">
              Know exactly how your phones perform
            </h2>
            <p className="font-dm-sans text-white/60 text-lg">
              Real-time analytics so you can staff smarter and never leave a customer hanging.
            </p>
          </div>

          {/* Metrics row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            {[
              { label: 'Calls Today', value: '47', delta: '+12%', up: true },
              { label: 'Avg Wait Time', value: '18s', delta: '-6s', up: true },
              { label: 'Missed Calls', value: '3', delta: '-40%', up: true },
              { label: 'Tickets Created', value: '14', delta: '+3', up: true },
            ].map(m => (
              <div key={m.label} className="bg-[#1e2035] rounded-2xl p-6 text-center">
                <p className="font-dm-sans text-white/50 text-sm mb-1">{m.label}</p>
                <p className="font-poppins font-bold text-white text-3xl md:text-4xl">{m.value}</p>
                <span className="inline-block mt-2 text-xs font-dm-sans font-semibold text-rd-mint bg-rd-lime/10 px-2 py-0.5 rounded-full">
                  {m.delta}
                </span>
              </div>
            ))}
          </div>

          {/* Mini bar chart mockup */}
          <div className="bg-[#1e2035] rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-poppins font-semibold text-white text-sm">Calls by Hour&nbsp;&mdash;&nbsp;Today</h3>
              <span className="text-xs font-dm-sans text-white/40">9 AM &ndash; 6 PM</span>
            </div>
            <div className="flex items-end gap-2 h-32">
              {[35,60,80,55,90,100,70,45,25].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-md bg-rd-teal hover:bg-rd-lime transition-colors"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-[10px] text-white/40 font-dm-sans">{9 + i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ COMPARISON TABLE ═══════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-poppins font-bold text-rd-dark text-3xl md:text-4xl mb-4">
              Traditional phone vs AA Repairdesk Phone
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              See what you gain when your phone system actually talks to your repair software.
            </p>
          </div>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="font-poppins text-sm text-gray-500 pb-4 pr-4 font-medium">Feature</th>
                  <th className="font-poppins text-sm text-gray-500 pb-4 px-4 text-center font-medium">Traditional</th>
                  <th className="font-poppins text-sm pb-4 px-4 text-center font-semibold text-rd-teal">AA Repairdesk</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-rd-cream/60' : ''}>
                    <td className="font-dm-sans text-rd-dark py-3.5 pr-4 pl-4 rounded-l-lg text-sm">{row.feature}</td>
                    <td className="text-center py-3.5 px-4">
                      {row.traditional ? (
                        <svg className="w-5 h-5 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      )}
                    </td>
                    <td className="text-center py-3.5 px-4 rounded-r-lg">
                      {row.aarepairdesk ? (
                        <svg className="w-5 h-5 text-rd-teal mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════ FEATURE HIGHLIGHTS STRIP ═══════════════ */}
      <section className="py-16 bg-rd-teal">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { icon: (<svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>), t: 'Multi-Device', d: 'Desk phone, laptop, or mobile' },
              { icon: (<svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 3H7a2 2 0 00-2 2v6a2 2 0 002 2h1v3l3-3" /></svg>), t: 'Multi-Line', d: 'Handle several calls at once' },
              { icon: (<svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>), t: 'Call Forwarding', d: 'Route to any external number' },
              { icon: (<svg className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>), t: 'Missed Call Alerts', d: 'Instant push notification' },
            ].map(f => (
              <div key={f.t}>
                <div className="mb-3 text-rd-mint">{f.icon}</div>
                <h4 className="font-poppins font-semibold text-sm mb-1">{f.t}</h4>
                <p className="font-dm-sans text-white/70 text-xs">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FAQ ACCORDION ═══════════════ */}
      <section className="py-20 md:py-28 bg-rd-cream">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-rd-dark text-3xl md:text-4xl mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-poppins font-semibold text-rd-dark text-[15px] pr-4">{faq.q}</span>
                      <svg
                        className={`w-5 h-5 text-rd-teal flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`transition-all duration-200 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                    >
                      <p className="px-6 pb-5 font-dm-sans text-gray-600 leading-relaxed text-[15px]">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
