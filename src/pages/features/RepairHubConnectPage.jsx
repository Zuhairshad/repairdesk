import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'Does RepairHub Connect replace my existing email and SMS providers?', a: 'RepairHub Connect works alongside your current providers. It pulls SMS, email, and internal messages into a single threaded inbox so your team never has to switch between apps. You keep your existing phone numbers and email addresses — Connect simply unifies them.' },
  { q: 'Can I see the full communication history for a customer?', a: 'Yes. Every message exchanged with a customer — across SMS, email, and internal notes — is stored in a single timeline on their profile. When a customer walks in or calls, your team has the full context in seconds, no matter who handled the previous conversation.' },
  { q: 'How do automated message triggers work?', a: 'You define rules based on ticket events — for example, "when repair status changes to Ready for Pickup, send SMS template #3." Triggers fire instantly and log the outbound message in the customer thread. You can set triggers for status changes, payment receipts, appointment reminders, and more.' },
  { q: 'Is internal team chat included at no extra cost?', a: 'Internal messaging is built into every RepairHub Connect plan. Your technicians can tag colleagues, share notes on a ticket, and escalate issues — all inside the same interface where customer messages live. No separate chat tool required.' },
  { q: 'Are file attachments supported in conversations?', a: 'Yes. You can attach images, PDFs, and documents to any outbound message or internal note. Attachments are stored with the conversation thread so your team can reference warranty photos, diagnostic reports, or signed approvals at any time.' },
];

export default function RepairHubConnectPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ── Hero: Split layout with unified inbox mockup ── */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-20 md:py-28 overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block bg-rd-lime/20 text-rd-lime text-xs font-bold font-poppins px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                Unified Communications
              </span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
                Every message.<br />Every channel.<br />
                <span className="text-rd-lime">One&nbsp;inbox.</span>
              </h1>
              <p className="font-dm-sans text-lg text-white/75 leading-relaxed mb-10 max-w-lg">
                RepairHub Connect brings SMS, email, and internal team chat into a single threaded conversation view — so no customer message falls through the cracks.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5 text-base">Start Free Trial</a>
                <Link to="/contact" className="border border-white/30 hover:border-white text-white font-poppins font-semibold px-8 py-3.5 rounded-full transition-colors">
                  Request a Demo
                </Link>
              </div>
            </div>

            {/* Inbox mockup SVG */}
            <div className="relative flex justify-center lg:justify-end" aria-hidden="true">
              <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md drop-shadow-2xl">
                <rect x="2" y="2" width="416" height="336" rx="18" fill="#fff" fillOpacity=".07" stroke="rgba(255,255,255,.15)" strokeWidth="2" />
                {/* Header bar */}
                <rect x="2" y="2" width="416" height="48" rx="18" fill="rgba(255,255,255,.1)" />
                <rect x="2" y="32" width="416" height="18" fill="rgba(255,255,255,.1)" />
                <circle cx="26" cy="26" r="8" fill="#C1F04F" />
                <text x="44" y="30" fill="#fff" fontSize="13" fontFamily="sans-serif" fontWeight="600">Inbox</text>
                <rect x="310" y="17" width="48" height="18" rx="9" fill="#C1F04F" />
                <text x="320" y="30" fill="#0a2e31" fontSize="9" fontFamily="sans-serif" fontWeight="700">3 new</text>
                {/* Message rows */}
                {/* Row 1 — SMS */}
                <rect x="16" y="62" width="388" height="56" rx="10" fill="rgba(255,255,255,.06)" />
                <rect x="28" y="72" width="42" height="18" rx="9" fill="#3B82F6" />
                <text x="37" y="84" fill="#fff" fontSize="9" fontFamily="sans-serif" fontWeight="600">SMS</text>
                <text x="80" y="84" fill="#fff" fontSize="12" fontFamily="sans-serif" fontWeight="600">Sarah Kim</text>
                <text x="80" y="102" fill="rgba(255,255,255,.5)" fontSize="11" fontFamily="sans-serif">Is my iPhone screen ready for pickup?</text>
                <text x="350" y="84" fill="rgba(255,255,255,.35)" fontSize="10" fontFamily="sans-serif">2m ago</text>
                {/* Row 2 — Email */}
                <rect x="16" y="128" width="388" height="56" rx="10" fill="rgba(255,255,255,.04)" />
                <rect x="28" y="138" width="50" height="18" rx="9" fill="#F59E0B" />
                <text x="35" y="150" fill="#fff" fontSize="9" fontFamily="sans-serif" fontWeight="600">Email</text>
                <text x="88" y="150" fill="rgba(255,255,255,.85)" fontSize="12" fontFamily="sans-serif" fontWeight="600">Marcus J.</text>
                <text x="88" y="168" fill="rgba(255,255,255,.45)" fontSize="11" fontFamily="sans-serif">Warranty claim for MacBook repair #4082</text>
                <text x="344" y="150" fill="rgba(255,255,255,.35)" fontSize="10" fontFamily="sans-serif">18m ago</text>
                {/* Row 3 — Internal */}
                <rect x="16" y="194" width="388" height="56" rx="10" fill="rgba(255,255,255,.04)" />
                <rect x="28" y="204" width="62" height="18" rx="9" fill="#8B5CF6" />
                <text x="34" y="216" fill="#fff" fontSize="9" fontFamily="sans-serif" fontWeight="600">Internal</text>
                <text x="100" y="216" fill="rgba(255,255,255,.85)" fontSize="12" fontFamily="sans-serif" fontWeight="600">Tech — Ravi</text>
                <text x="100" y="234" fill="rgba(255,255,255,.45)" fontSize="11" fontFamily="sans-serif">Parts arrived for ticket #4091, starting now</text>
                <text x="350" y="216" fill="rgba(255,255,255,.35)" fontSize="10" fontFamily="sans-serif">1h ago</text>
                {/* Compose bar */}
                <rect x="16" y="272" width="388" height="48" rx="24" fill="rgba(255,255,255,.08)" stroke="rgba(255,255,255,.12)" />
                <text x="40" y="300" fill="rgba(255,255,255,.3)" fontSize="12" fontFamily="sans-serif">Type a reply...</text>
                <circle cx="372" cy="296" r="16" fill="#C1F04F" />
                <path d="M366 296l8-4v8z" fill="#0a2e31" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Channel Convergence Diagram ── */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">All Channels, One&nbsp;Inbox</h2>
            <p className="font-dm-sans text-gray-500 text-lg">Three communication streams converge into one timeline — so your team answers from a single screen instead of juggling tabs.</p>
          </div>
          <div className="flex justify-center" aria-hidden="true">
            <svg viewBox="0 0 700 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-3xl">
              {/* Source nodes */}
              <rect x="0" y="10" width="130" height="56" rx="28" fill="#3B82F6" />
              <text x="65" y="43" textAnchor="middle" fill="#fff" fontSize="15" fontFamily="sans-serif" fontWeight="600">SMS</text>
              <rect x="0" y="82" width="130" height="56" rx="28" fill="#F59E0B" />
              <text x="65" y="115" textAnchor="middle" fill="#fff" fontSize="15" fontFamily="sans-serif" fontWeight="600">Email</text>
              <rect x="0" y="154" width="130" height="56" rx="28" fill="#8B5CF6" />
              <text x="65" y="187" textAnchor="middle" fill="#fff" fontSize="15" fontFamily="sans-serif" fontWeight="600">Internal Chat</text>
              {/* Arrows */}
              <path d="M134 38 C220 38, 260 110, 350 110" stroke="#3B82F6" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
              <path d="M134 110 L350 110" stroke="#F59E0B" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
              <path d="M134 182 C220 182, 260 110, 350 110" stroke="#8B5CF6" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
              {/* Merge circle */}
              <circle cx="370" cy="110" r="22" fill="#3d405b" />
              <path d="M360 110h20M370 100v20" stroke="#C1F04F" strokeWidth="2.5" strokeLinecap="round" />
              {/* Arrow to inbox */}
              <path d="M394 110 L470 110" stroke="#3d405b" strokeWidth="2.5" fill="none" markerEnd="url(#arrowT)" />
              <defs><marker id="arrowT" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0l7 4-7 4z" fill="#3d405b" /></marker></defs>
              {/* Unified inbox */}
              <rect x="476" y="60" width="220" height="100" rx="16" fill="#F8F8FB" stroke="#3d405b" strokeWidth="2" />
              <text x="586" y="96" textAnchor="middle" fill="#3d405b" fontSize="14" fontFamily="sans-serif" fontWeight="700">Unified Inbox</text>
              <rect x="500" y="108" width="172" height="8" rx="4" fill="#3d405b" fillOpacity=".15" />
              <rect x="500" y="122" width="130" height="8" rx="4" fill="#3d405b" fillOpacity=".1" />
              <rect x="500" y="136" width="90" height="8" rx="4" fill="#3d405b" fillOpacity=".07" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── Conversation Thread Timeline ── */}
      <section className="bg-rd-cream py-20 md:py-28 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Thread mockup */}
            <div className="space-y-5 max-w-sm mx-auto lg:mx-0" aria-hidden="true">
              {/* Timestamp */}
              <div className="text-center">
                <span className="text-xs font-dm-sans text-gray-400 bg-white px-3 py-1 rounded-full shadow-sm">Today, 10:14 AM</span>
              </div>
              {/* Customer bubble */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">SK</span>
                </div>
                <div>
                  <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <span className="inline-block text-[10px] font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded mb-1">SMS</span>
                    <p className="text-sm text-gray-700 font-dm-sans">Hi, is my iPhone screen ready? Ticket #4055</p>
                  </div>
                  <span className="text-[10px] text-gray-400 font-dm-sans mt-1 block">Sarah Kim &middot; 10:14 AM</span>
                </div>
              </div>
              {/* Staff reply */}
              <div className="flex gap-3 items-start flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-rd-teal flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">YO</span>
                </div>
                <div className="text-right">
                  <div className="bg-rd-teal text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm inline-block text-left">
                    <p className="text-sm font-dm-sans">All done, Sarah! You can pick it up anytime before 7 PM today.</p>
                  </div>
                  <span className="text-[10px] text-gray-400 font-dm-sans mt-1 block">You &middot; 10:16 AM &middot; <span className="text-rd-teal">&#10003;&#10003; Read</span></span>
                </div>
              </div>
              {/* Internal note */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">RV</span>
                </div>
                <div>
                  <div className="bg-purple-50 border border-purple-200 rounded-2xl rounded-tl-sm px-4 py-3">
                    <span className="inline-block text-[10px] font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded mb-1">Internal</span>
                    <p className="text-sm text-gray-700 font-dm-sans">Screen calibrated and tested. Passed QC.</p>
                  </div>
                  <span className="text-[10px] text-gray-400 font-dm-sans mt-1 block">Ravi &middot; 10:15 AM</span>
                </div>
              </div>
              {/* Auto trigger */}
              <div className="text-center">
                <span className="text-[10px] font-dm-sans text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                  &#9889; Auto-trigger: "Ready for Pickup" SMS sent to Sarah
                </span>
              </div>
            </div>

            {/* Copy */}
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Threaded Conversations with Full&nbsp;Context</h2>
              <p className="font-dm-sans text-gray-500 text-lg leading-relaxed mb-8">
                Customer messages, staff replies, internal notes, and automated triggers all appear in one chronological thread — color-coded by channel. Your team sees the complete story without switching tools.
              </p>
              <ul className="space-y-4">
                {['Channel-tagged messages at a glance', 'Read receipts confirm delivery', 'Internal notes stay hidden from customers', 'Automated triggers logged in the timeline'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-rd-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-dm-sans text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Smart Routing ── */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Smart Message&nbsp;Routing</h2>
              <p className="font-dm-sans text-gray-500 text-lg leading-relaxed mb-8">
                Incoming messages are automatically tagged and routed based on rules you define. Warranty emails go to your manager. SMS inquiries reach the front desk. Internal escalations ping the right technician — instantly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Route by channel', desc: 'SMS, email, and internal each follow their own path' },
                  { label: 'Route by keyword', desc: 'Messages containing "warranty" or "refund" escalate automatically' },
                  { label: 'Route by customer', desc: 'VIP customers reach senior staff directly' },
                  { label: 'Route by ticket status', desc: 'Replies on closed tickets re-open and alert the assignee' },
                ].map(r => (
                  <div key={r.label} className="bg-rd-cream rounded-xl p-5">
                    <h4 className="font-poppins font-semibold text-rd-dark text-sm mb-1">{r.label}</h4>
                    <p className="font-dm-sans text-gray-500 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Routing diagram */}
            <div className="order-1 lg:order-2 flex justify-center" aria-hidden="true">
              <svg viewBox="0 0 340 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xs">
                {/* Incoming message */}
                <rect x="110" y="0" width="120" height="44" rx="22" fill="#3d405b" />
                <text x="170" y="27" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="sans-serif" fontWeight="600">Incoming</text>
                {/* Router diamond */}
                <polygon points="170,80 220,130 170,180 120,130" fill="#F8F8FB" stroke="#3d405b" strokeWidth="2" />
                <text x="170" y="134" textAnchor="middle" fill="#3d405b" fontSize="11" fontFamily="sans-serif" fontWeight="700">ROUTE</text>
                {/* Lines down from incoming to diamond */}
                <line x1="170" y1="44" x2="170" y2="80" stroke="#3d405b" strokeWidth="2" />
                {/* Branches */}
                <line x1="120" y1="130" x2="40" y2="130" stroke="#3B82F6" strokeWidth="2" />
                <line x1="40" y1="130" x2="40" y2="230" stroke="#3B82F6" strokeWidth="2" />
                <rect x="0" y="234" width="80" height="40" rx="10" fill="#3B82F6" />
                <text x="40" y="259" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif" fontWeight="600">Front Desk</text>

                <line x1="170" y1="180" x2="170" y2="230" stroke="#F59E0B" strokeWidth="2" />
                <rect x="130" y="234" width="80" height="40" rx="10" fill="#F59E0B" />
                <text x="170" y="259" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif" fontWeight="600">Manager</text>

                <line x1="220" y1="130" x2="300" y2="130" stroke="#8B5CF6" strokeWidth="2" />
                <line x1="300" y1="130" x2="300" y2="230" stroke="#8B5CF6" strokeWidth="2" />
                <rect x="260" y="234" width="80" height="40" rx="10" fill="#8B5CF6" />
                <text x="300" y="259" textAnchor="middle" fill="#fff" fontSize="11" fontFamily="sans-serif" fontWeight="600">Technician</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Replies Template Gallery ── */}
      <section className="bg-gradient-to-b from-rd-cream to-white py-20 md:py-28 px-6">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Quick Replies &amp; Templates</h2>
            <p className="font-dm-sans text-gray-500 text-lg">One click sends a polished, personalized response. Build a library of templates your whole team can use — with dynamic tags that auto-fill customer and ticket data.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { tag: 'Pickup Ready', color: 'bg-emerald-500', preview: 'Hi {customer}, your {device} repair is complete! You can pick it up at {store} before closing today.' },
              { tag: 'Diagnosis Update', color: 'bg-blue-500', preview: 'Hi {customer}, we\'ve diagnosed your {device}. The issue is {diagnosis}. Estimated cost: {cost}. Reply YES to approve.' },
              { tag: 'Payment Receipt', color: 'bg-amber-500', preview: 'Thank you, {customer}! Payment of {amount} received for ticket #{ticket}. Here is your digital receipt.' },
              { tag: 'Appointment Reminder', color: 'bg-purple-500', preview: 'Reminder: You have an appointment at {store} on {date} at {time}. Reply CANCEL to reschedule.' },
              { tag: 'Follow-up', color: 'bg-pink-500', preview: 'Hi {customer}, how is your {device} working after the repair? We\'d love your feedback — reply to this message!' },
              { tag: 'Custom', color: 'bg-gray-500', preview: 'Create your own template with dynamic tags. Personalize every message while keeping your brand voice consistent.' },
            ].map(t => (
              <div key={t.tag} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`${t.color} text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide`}>{t.tag}</span>
                </div>
                <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{t.preview}</p>
                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center gap-1.5 text-rd-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  <span className="text-xs font-poppins font-semibold">Use template</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Collaboration ── */}
      <section className="bg-rd-dark text-white py-20 md:py-28 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-5">Internal Team Chat,<br />Built Right&nbsp;In</h2>
              <p className="font-dm-sans text-white/65 text-lg leading-relaxed mb-8">
                No more side conversations in WhatsApp or Slack about a repair ticket. Tag a colleague, drop an internal note, and resolve issues without the customer ever seeing the back-and-forth.
              </p>
              <div className="space-y-5">
                {[
                  { icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z', title: '@mention teammates', desc: 'Tag a technician or manager directly on any ticket thread' },
                  { icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z', title: 'Internal-only visibility', desc: 'Notes marked Internal are hidden from customer-facing channels' },
                  { icon: 'M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13', title: 'Attach files to notes', desc: 'Share diagnostic photos, parts invoices, or manuals with the team' },
                ].map(f => (
                  <div key={f.title} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d={f.icon} /></svg>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-sm mb-1">{f.title}</h4>
                      <p className="font-dm-sans text-white/50 text-sm">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team chat mockup */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-sm mx-auto lg:mx-0 lg:ml-auto space-y-4" aria-hidden="true">
              <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-purple-400" />
                <span className="font-poppins font-semibold text-sm text-white/80">Ticket #4091 &middot; Internal</span>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center shrink-0"><span className="text-[10px] text-white font-bold">RV</span></div>
                <div className="bg-white/8 rounded-xl rounded-tl-sm px-3 py-2">
                  <p className="text-white/70 text-xs font-dm-sans">Parts for the Galaxy S24 arrived. Starting the display swap now.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-rd-teal flex items-center justify-center shrink-0"><span className="text-[10px] text-white font-bold">AM</span></div>
                <div className="bg-white/8 rounded-xl rounded-tl-sm px-3 py-2">
                  <p className="text-white/70 text-xs font-dm-sans">Nice, @Ravi — customer asked for a screen protector too. Add one from shelf B2.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-purple-500 flex items-center justify-center shrink-0"><span className="text-[10px] text-white font-bold">RV</span></div>
                <div className="bg-white/8 rounded-xl rounded-tl-sm px-3 py-2">
                  <p className="text-white/70 text-xs font-dm-sans">Got it. Attaching the QC photo now.</p>
                  <div className="mt-2 flex items-center gap-1.5 text-rd-lime/70">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
                    <span className="text-[10px] font-dm-sans">qc_photo_4091.jpg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-14">Frequently Asked Questions</h2>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-poppins font-semibold text-rd-dark group-hover:text-rd-teal transition-colors">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-rd-teal shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="pb-5 pr-10">
                    <p className="font-dm-sans text-gray-500 leading-relaxed">{faq.a}</p>
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
