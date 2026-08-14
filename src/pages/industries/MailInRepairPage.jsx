import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ---- Inline SVG icons ---- */

const IconPackage = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const IconTruck = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <rect x="1" y="3" width="15" height="13" rx="1" />
    <path d="M16 8h4l3 3v5h-7V8z" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const IconForm = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    <path strokeLinecap="round" d="M9 12h6M9 16h4" />
  </svg>
);

const IconBell = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const IconShield = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconCamera = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const IconCheck = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const IconChevron = ({ className, open }) => (
  <svg className={`${className} transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

/* ---- Mail-In Journey steps ---- */
const journeySteps = [
  { label: 'Request', icon: <IconForm className="w-5 h-5" />, desc: 'Customer submits repair request online via your website widget.' },
  { label: 'Ship', icon: <IconTruck className="w-5 h-5" />, desc: 'Pre-paid shipping label generated. Customer drops off package.' },
  { label: 'Receive', icon: <IconPackage className="w-5 h-5" />, desc: 'Package arrives at your shop. Device condition documented.' },
  { label: 'Repair', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ), desc: 'Technician diagnoses and repairs. Customer approves quote if needed.' },
  { label: 'Ship Back', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a5 5 0 015 5v2M3 10l4-4M3 10l4 4" />
    </svg>
  ), desc: 'Device repaired, invoiced, and shipped back via tracked carrier.' },
  { label: 'Delivered', icon: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" />
    </svg>
  ), desc: 'Customer receives repaired device. Repair cycle complete.' },
];

/* ---- Notification timeline events ---- */
const notifications = [
  { time: '10:03 AM', channel: 'Email', msg: 'Repair request #4821 received. Shipping label attached.', color: 'bg-blue-500' },
  { time: '2:17 PM', channel: 'SMS', msg: 'Your package is on its way! Tracking: 1Z999AA10...',  color: 'bg-purple-500' },
  { time: 'Next Day', channel: 'Email', msg: 'We received your device. Intake inspection complete.', color: 'bg-rd-teal' },
  { time: '11:45 AM', channel: 'SMS', msg: 'Repair quote ready: $89.00. Tap to approve.',           color: 'bg-amber-500' },
  { time: '4:30 PM', channel: 'Email', msg: 'Repair complete! Invoice #4821 — pay online.',        color: 'bg-[#457b9d]' },
  { time: '5:00 PM', channel: 'SMS', msg: 'Your device shipped! Tracking: 1Z999AA20...',           color: 'bg-rd-teal' },
];

/* ---- Walk-in vs Mail-in comparison ---- */
const comparisonRows = [
  { metric: 'Customer reach', walkin: 'Local area only', mailin: 'Nationwide / global' },
  { metric: 'Operating hours', walkin: 'Store hours', mailin: '24/7 online requests' },
  { metric: 'Overhead costs', walkin: 'Retail storefront rent', mailin: 'Warehouse or home-based' },
  { metric: 'Revenue ceiling', walkin: 'Limited by foot traffic', mailin: 'Scales with marketing' },
  { metric: 'Customer communication', walkin: 'Phone calls, walk-ins', mailin: 'Automated SMS & email' },
  { metric: 'Device documentation', walkin: 'Manual notes', mailin: 'Photo + condition forms' },
];

/* ---- FAQ data ---- */
const faqs = [
  { q: 'How does the online repair request form work?', a: 'You embed a booking widget on your website. Customers fill in their device details, select the repair type, and submit. RepairHub automatically creates a repair ticket, sends a confirmation email with a pre-paid shipping label, and assigns the job to a technician queue.' },
  { q: 'Which shipping carriers does RepairHub integrate with?', a: 'RepairHub integrates with ShipStation, which connects you to FedEx, UPS, USPS, DHL, and dozens of other carriers. You can generate labels, compare rates, and track shipments from inside RepairHub without switching between apps.' },
  { q: 'Can customers track their repair status in real time?', a: 'Yes. Every customer gets a unique tracking link via email and SMS. The customer portal shows the current repair stage, technician notes, photos, and estimated completion date. Updates are sent automatically at each stage transition.' },
  { q: 'How does damage documentation protect my business?', a: 'When a device arrives, technicians photograph the device and log its condition using RepairHub intake forms. These timestamped records are attached to the repair ticket and visible in the customer portal, preventing disputes about pre-existing damage.' },
  { q: 'Do I need a separate ShipStation subscription?', a: 'Yes, ShipStation requires its own subscription. RepairHub connects to your ShipStation account via API to pull rates, generate labels, and sync tracking numbers. The integration eliminates double-entry and keeps shipping data inside your repair workflow.' },
];

export default function MailInRepairPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ========== HERO — package tracking motif ========== */}
      <section className="relative bg-gradient-to-br from-rd-dark via-[#013a3e] to-rd-teal text-white py-28 px-6 overflow-hidden">
        {/* Decorative dotted tracking path */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]" preserveAspectRatio="none" viewBox="0 0 1200 500">
          <path d="M-20 400 Q300 50 600 250 T1220 100" fill="none" stroke="white" strokeWidth="3" strokeDasharray="12 8" />
          <path d="M-20 450 Q400 150 700 350 T1220 200" fill="none" stroke="white" strokeWidth="2" strokeDasharray="8 6" />
        </svg>

        {/* Floating package illustration */}
        <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
          <svg width="260" height="260" viewBox="0 0 260 260" fill="none">
            <rect x="50" y="70" width="160" height="130" rx="12" stroke="white" strokeWidth="2.5" />
            <path d="M50 110h160" stroke="white" strokeWidth="2" />
            <path d="M130 70v130" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
            <rect x="80" y="125" width="40" height="6" rx="3" fill="white" opacity="0.5" />
            <rect x="80" y="137" width="30" height="6" rx="3" fill="white" opacity="0.35" />
            <rect x="140" y="125" width="50" height="50" rx="4" stroke="white" strokeWidth="1.5" />
            <path d="M150 150h30M150 157h20" stroke="white" strokeWidth="1.5" opacity="0.6" />
            {/* Tape strip across top */}
            <rect x="105" y="60" width="50" height="20" rx="2" fill="white" opacity="0.15" />
          </svg>
        </div>

        <div className="container-main max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6 font-dm-sans">
            <IconTruck className="w-4 h-4" />
            Mail-In Repair Tracking
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-[3.25rem] leading-[1.15] mb-6">
            Run a Repair Shop Without a Storefront
          </h1>
          <p className="text-white/75 text-lg md:text-xl font-dm-sans leading-relaxed mb-10 max-w-2xl">
            Accept devices from anywhere in the country. RepairHub handles the entire mail-in cycle — online requests, shipping labels, package tracking, automated updates, and return delivery — so your customers always know exactly where their device is.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5 text-base">Start Free Trial</a>
            <Link to="/contact" className="border border-white/30 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors text-base">Book a Demo</Link>
          </div>
        </div>
      </section>

      {/* ========== MAIL-IN JOURNEY — 6-step horizontal timeline ========== */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-4">The Mail-In Journey</h2>
          <p className="text-gray-500 font-dm-sans text-center max-w-xl mx-auto mb-14">Every mail-in repair follows six clear stages. RepairHub automates each handoff so nothing falls through the cracks.</p>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[8.33%] right-[8.33%] h-0.5 bg-gradient-to-r from-rd-teal/30 via-rd-teal to-rd-teal/30" style={{ zIndex: 0 }} />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-0 relative z-10">
              {journeySteps.map((step, i) => (
                <div key={step.label} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-rd-teal/30 group-hover:border-rd-teal group-hover:shadow-lg flex items-center justify-center text-rd-teal transition-all duration-300 mb-3">
                    {step.icon}
                  </div>
                  <span className="font-poppins font-semibold text-rd-dark text-sm mb-1">{step.label}</span>
                  <p className="text-gray-400 font-dm-sans text-xs leading-relaxed max-w-[140px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== ONLINE REPAIR REQUEST FORM MOCKUP ========== */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-rd-teal font-dm-sans font-semibold text-sm uppercase tracking-wider">Online Booking Widget</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-2 mb-5">Accept Repair Requests 24/7</h2>
              <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-6">Embed a branded booking form on your website. Customers describe the issue, upload photos, and submit — RepairHub creates the ticket, emails a shipping label, and queues the job before you even open for the day.</p>
              <ul className="space-y-3 font-dm-sans text-gray-600">
                {['Custom fields for device type, model & issue', 'Photo upload for pre-ship condition', 'Auto-generated shipping label via ShipStation', 'Instant confirmation email with tracking link'].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <IconCheck className="w-5 h-5 text-rd-teal shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form mockup card */}
            <div className="bg-rd-cream rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-300" /><div className="w-3 h-3 rounded-full bg-amber-300" /><div className="w-3 h-3 rounded-full bg-blue-300" />
                <span className="ml-2 text-xs text-gray-400 font-dm-sans">yourshop.com/repair-request</span>
              </div>
              <div className="space-y-4">
                <div><label className="text-xs font-semibold text-gray-500 font-dm-sans block mb-1">Device Type</label><div className="bg-white rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 font-dm-sans">iPhone 15 Pro Max</div></div>
                <div><label className="text-xs font-semibold text-gray-500 font-dm-sans block mb-1">Issue Description</label><div className="bg-white rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-400 font-dm-sans h-16">Cracked back glass, camera lens scratched...</div></div>
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-semibold text-gray-500 font-dm-sans block mb-1">Your Name</label><div className="bg-white rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 font-dm-sans">Sarah M.</div></div>
                  <div><label className="text-xs font-semibold text-gray-500 font-dm-sans block mb-1">Email</label><div className="bg-white rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-700 font-dm-sans">sarah@email.com</div></div>
                </div>
                <div className="flex items-center gap-2 bg-rd-teal/5 border border-dashed border-rd-teal/30 rounded-lg p-3">
                  <IconCamera className="w-5 h-5 text-rd-teal" />
                  <span className="text-sm text-gray-500 font-dm-sans">device-photo.jpg uploaded</span>
                </div>
                <div className="bg-rd-teal text-white text-center py-2.5 rounded-lg font-poppins font-semibold text-sm">Submit Repair Request</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CUSTOMER TRACKING PORTAL MOCKUP ========== */}
      <section className="bg-rd-dark text-white py-20 px-6">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Portal mockup */}
            <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-white/10 p-6 order-2 lg:order-1">
              <div className="flex items-center justify-between mb-6">
                <span className="font-poppins font-semibold text-sm">Repair #4821</span>
                <span className="text-xs bg-rd-mint/20 text-rd-mint px-3 py-1 rounded-full font-dm-sans font-semibold">In Repair</span>
              </div>

              {/* Status progress bar */}
              <div className="relative mb-6">
                <div className="h-1.5 bg-white/10 rounded-full">
                  <div className="h-1.5 bg-gradient-to-r from-rd-teal to-rd-mint rounded-full" style={{ width: '66%' }} />
                </div>
                <div className="flex justify-between mt-2 text-[10px] text-white/40 font-dm-sans">
                  <span className="text-white/80">Received</span><span className="text-white/80">Diagnosing</span><span className="text-rd-mint">Repairing</span><span>Shipping</span><span>Delivered</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { t: 'Aug 12, 2:17 PM', msg: 'Repair in progress — back glass replacement', status: 'current' },
                  { t: 'Aug 12, 10:30 AM', msg: 'Diagnostic complete. Quote approved by customer.', status: 'done' },
                  { t: 'Aug 11, 3:45 PM', msg: 'Device received. Intake photos taken.', status: 'done' },
                  { t: 'Aug 10, 10:03 AM', msg: 'Repair request submitted. Shipping label sent.', status: 'done' },
                ].map((entry, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${entry.status === 'current' ? 'bg-rd-mint shadow-[0_0_6px_rgba(69,123,157,0.5)]' : 'bg-white/25'}`} />
                    <div>
                      <p className="text-white/90 text-sm font-dm-sans">{entry.msg}</p>
                      <span className="text-white/30 text-xs font-dm-sans">{entry.t}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-rd-mint font-dm-sans font-semibold text-sm uppercase tracking-wider">Customer Portal</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mt-2 mb-5">Real-Time Tracking Your Customers Will Love</h2>
              <p className="text-white/65 font-dm-sans text-lg leading-relaxed mb-6">Every customer gets a unique tracking page — like tracking a package, but for their repair. They see live status changes, technician notes, intake photos, and estimated completion without ever calling your shop.</p>
              <ul className="space-y-3 font-dm-sans text-white/70">
                {['Live repair stage progress bar', 'Timestamped activity log', 'Intake condition photos visible to customer', 'One-tap quote approval from the portal'].map(item => (
                  <li key={item} className="flex items-start gap-2.5">
                    <IconCheck className="w-5 h-5 text-rd-mint shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SHIPSTATION + CARRIER INTEGRATION ========== */}
      <section className="bg-white py-20 px-6">
        <div className="container-main text-center">
          <span className="text-rd-teal font-dm-sans font-semibold text-sm uppercase tracking-wider">Shipping Integration</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-2 mb-4">Ship With Every Major Carrier</h2>
          <p className="text-gray-500 font-dm-sans text-lg max-w-2xl mx-auto mb-12">RepairHub connects to ShipStation so you can compare rates, print labels, and track packages across all carriers — without leaving your repair dashboard.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-14">
            {[
              { name: 'FedEx', color: '#4D148C', accent: '#FF6600' },
              { name: 'UPS', color: '#351C15', accent: '#FFB500' },
              { name: 'USPS', color: '#004B87', accent: '#DA291C' },
              { name: 'DHL', color: '#D40511', accent: '#FFCC00' },
            ].map(carrier => (
              <div key={carrier.name} className="bg-rd-cream rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center font-poppins font-bold text-white text-sm" style={{ backgroundColor: carrier.color }}>
                  {carrier.name.substring(0, 2)}
                </div>
                <span className="font-poppins font-semibold text-rd-dark text-sm">{carrier.name}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <IconPackage className="w-6 h-6" />, title: 'Generate Labels', desc: 'Create outbound and return shipping labels from inside RepairHub. Costs are logged against the repair ticket.' },
              { icon: <IconTruck className="w-6 h-6" />, title: 'Compare Rates', desc: 'See live rates from all your connected carriers. Pick the cheapest or fastest option for each shipment.' },
              { icon: <IconShield className="w-6 h-6" />, title: 'Sync Tracking', desc: 'Tracking numbers flow back into RepairHub automatically. Customers get SMS/email updates at every scan.' },
            ].map(feat => (
              <div key={feat.title} className="text-left bg-rd-cream/60 rounded-2xl p-6 border border-gray-100">
                <div className="w-11 h-11 rounded-xl bg-rd-teal/10 flex items-center justify-center text-rd-teal mb-4">{feat.icon}</div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{feat.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NOTIFICATION TIMELINE ========== */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-rd-teal font-dm-sans font-semibold text-sm uppercase tracking-wider">Automated Notifications</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-2 mb-5">Keep Customers Informed at Every Stage</h2>
              <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-6">The number-one complaint in mail-in repair is silence. RepairHub sends automated SMS and email notifications at each stage transition — so your customer never has to wonder what is happening.</p>
              <div className="flex gap-6 font-dm-sans text-sm">
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-rd-teal">6</div>
                  <div className="text-gray-400">Auto triggers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-rd-teal">2</div>
                  <div className="text-gray-400">Channels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-poppins font-bold text-rd-teal">0</div>
                  <div className="text-gray-400">Manual effort</div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-6">
              <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gray-200" />
              <div className="space-y-5">
                {notifications.map((n, i) => (
                  <div key={i} className="relative flex gap-4 items-start">
                    <div className={`w-[22px] h-[22px] rounded-full ${n.color} border-[3px] border-rd-cream shrink-0 -ml-[5px] z-10`} />
                    <div className="bg-white rounded-xl border border-gray-100 p-4 flex-1 shadow-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-dm-sans">{n.channel}</span>
                        <span className="text-[10px] text-gray-300 font-dm-sans">{n.time}</span>
                      </div>
                      <p className="text-sm text-rd-dark font-dm-sans">{n.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WALK-IN VS MAIL-IN COMPARISON ========== */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-4xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-4">Walk-In Shop vs. Mail-In Shop</h2>
          <p className="text-gray-500 font-dm-sans text-center max-w-xl mx-auto mb-12">Mail-in repair removes geographic limits and overhead costs. See how the two models compare.</p>

          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-left font-dm-sans">
              <thead>
                <tr className="bg-rd-cream">
                  <th className="py-4 px-5 font-poppins font-semibold text-rd-dark text-sm w-1/3" />
                  <th className="py-4 px-5 font-poppins font-semibold text-gray-400 text-sm w-1/3">Walk-In</th>
                  <th className="py-4 px-5 font-poppins font-semibold text-rd-teal text-sm w-1/3">Mail-In</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.metric} className={i % 2 === 0 ? 'bg-white' : 'bg-rd-cream/50'}>
                    <td className="py-3.5 px-5 text-sm font-semibold text-rd-dark">{row.metric}</td>
                    <td className="py-3.5 px-5 text-sm text-gray-500">{row.walkin}</td>
                    <td className="py-3.5 px-5 text-sm text-rd-teal font-medium">{row.mailin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========== DAMAGE DOCUMENTATION ========== */}
      <section className="bg-rd-dark text-white py-20 px-6">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-rd-mint font-dm-sans font-semibold text-sm uppercase tracking-wider">Damage Documentation</span>
              <h2 className="font-poppins font-bold text-3xl mt-2 mb-5">Protect Yourself From Disputes</h2>
              <p className="text-white/65 font-dm-sans text-lg leading-relaxed mb-6">When a device arrives by mail, there is no face-to-face handoff. RepairHub intake forms let technicians photograph every angle and log pre-existing damage before work begins. Every record is timestamped and attached to the ticket.</p>
              <ul className="space-y-2.5 font-dm-sans text-white/70 text-sm">
                {['Timestamped intake photos', 'Condition checklist with checkboxes', 'Notes visible in customer portal', 'PDF export for dispute resolution'].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <IconShield className="w-4 h-4 text-rd-mint shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intake card mockup */}
            <div className="bg-white/[0.06] rounded-2xl border border-white/10 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="font-poppins font-semibold text-sm">Intake Report</span>
                <span className="text-[10px] text-white/40 font-dm-sans">Aug 11, 3:45 PM</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {['Front', 'Back', 'Side'].map(angle => (
                  <div key={angle} className="aspect-square bg-white/5 rounded-lg flex flex-col items-center justify-center border border-white/10">
                    <IconCamera className="w-5 h-5 text-white/30 mb-1" />
                    <span className="text-[10px] text-white/30 font-dm-sans">{angle}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-sm font-dm-sans">
                {[
                  { label: 'Screen', status: 'No damage', ok: true },
                  { label: 'Back glass', status: 'Cracked — 3 fractures', ok: false },
                  { label: 'Camera lens', status: 'Scratched', ok: false },
                  { label: 'Battery', status: 'Normal', ok: true },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between bg-white/5 rounded-lg px-3 py-2">
                    <span className="text-white/70">{item.label}</span>
                    <span className={item.ok ? 'text-rd-mint text-xs' : 'text-amber-400 text-xs'}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ACCORDION ========== */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <IconChevron className="w-5 h-5 text-gray-400 shrink-0" open={openFaq === i} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-60' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-gray-500 font-dm-sans leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
