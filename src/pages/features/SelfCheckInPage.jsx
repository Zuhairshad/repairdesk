import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */
const IconTablet = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
  </svg>
);
const IconUser = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0" />
  </svg>
);
const IconQueue = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);
const IconWrench = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.049.58.025 1.192-.14 1.743" />
  </svg>
);
const IconClock = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconShield = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);
const IconPaint = ({ className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>
);
const IconCheck = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);
const IconChevron = ({ className = 'w-5 h-5', open }) => (
  <svg className={`${className} transition-transform duration-300 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Kiosk Screen Mockup Component                                      */
/* ------------------------------------------------------------------ */
function KioskScreen({ children, label, active = false }) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Tablet frame */}
      <div className={`relative w-full max-w-[220px] transition-all duration-500 ${active ? 'scale-105' : 'hover:scale-[1.02]'}`}>
        <div className={`rounded-[1.5rem] p-2 shadow-xl border-2 ${active ? 'bg-rd-dark border-rd-teal shadow-rd-teal/20' : 'bg-gray-800 border-gray-700'}`}>
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/40 rounded-full" />
          <div className="bg-white rounded-[1rem] overflow-hidden aspect-[3/4] flex flex-col">
            {children}
          </div>
        </div>
        {/* Stand */}
        <div className="mx-auto w-2.5 h-6 bg-gradient-to-b from-gray-400 to-gray-500 rounded-sm" />
        <div className="mx-auto w-16 h-1.5 bg-gray-400 rounded-full" />
      </div>
      {label && (
        <span className={`text-xs font-poppins font-semibold tracking-wide uppercase ${active ? 'text-rd-teal' : 'text-gray-400'}`}>
          {label}
        </span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Customer Journey Steps                                             */
/* ------------------------------------------------------------------ */
const journeySteps = [
  { icon: IconUser, label: 'Walk In', desc: 'Customer enters your shop' },
  { icon: IconTablet, label: 'Self Check-In', desc: 'Fills info on kiosk tablet' },
  { icon: IconQueue, label: 'Queued', desc: 'Ticket created automatically' },
  { icon: IconWrench, label: 'Service', desc: 'You start the repair' },
];

/* ------------------------------------------------------------------ */
/*  FAQ Data                                                           */
/* ------------------------------------------------------------------ */
const faqs = [
  { q: 'What hardware do I need for Self Check-In?', a: 'Any device with a touchscreen, a browser, and an internet connection works perfectly. Most shops use an iPad or Android tablet mounted on a counter stand.' },
  { q: 'Can customers use their own phone to check in?', a: 'Self Check-In is designed to run on a pre-configured device at your shop counter. This ensures a consistent branded experience and prevents unauthorized access to your system.' },
  { q: 'Is Self Check-In the same as Customer Facing Display?', a: 'No. Self Check-In is a standalone kiosk where walk-in customers register themselves. Customer Facing Display shows order details during checkout. You can combine both, but they serve different purposes.' },
  { q: 'Can I customize the fields customers fill in?', a: 'Yes. You choose which fields appear on the check-in form — name, phone, email, device type, issue description, and any custom fields your shop needs.' },
  { q: 'Does Self Check-In support terms & conditions acceptance?', a: 'Absolutely. You can add your repair terms and conditions that customers must accept before submitting. This protects your business and sets clear expectations.' },
];

/* ------------------------------------------------------------------ */
/*  Stats Data                                                         */
/* ------------------------------------------------------------------ */
const stats = [
  { value: '60%', label: 'Less Wait Time' },
  { value: '0', label: 'Data Entry Errors' },
  { value: '3x', label: 'Faster Check-Ins' },
  { value: '100%', label: 'Accurate Info' },
];

/* ------------------------------------------------------------------ */
/*  Customization Options                                              */
/* ------------------------------------------------------------------ */
const customizations = [
  { icon: IconPaint, title: 'Your Brand, Your Kiosk', desc: 'Upload your logo, pick your colors, and make the kiosk screen unmistakably yours.' },
  { icon: IconShield, title: 'Terms & Conditions', desc: 'Add repair policies customers must accept before submitting. Digital consent, zero paperwork.' },
  { icon: IconTablet, title: 'Custom Form Fields', desc: 'Choose exactly what data to collect — device type, serial number, issue description, or any custom field.' },
  { icon: IconClock, title: 'Pre-Repair Checklist', desc: 'Have customers confirm device condition before handoff. Scratch on screen? Cracked back? Documented upfront.' },
];

/* ================================================================== */
/*  PAGE COMPONENT                                                     */
/* ================================================================== */
export default function SelfCheckInPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ============================================================ */}
      {/*  HERO — Tablet kiosk SVG + headline                          */}
      {/* ============================================================ */}
      <section className="relative bg-rd-dark overflow-hidden">
        {/* Background pattern — diagonal grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(-45deg, #fff 0, #fff 1px, transparent 1px, transparent 40px)' }} />

        <div className="container-main relative z-10 py-20 md:py-28 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — Copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-rd-teal/20 border border-rd-teal/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-rd-lime animate-pulse" />
                <span className="text-[11px] font-poppins font-bold uppercase tracking-widest text-rd-lime">Self Check-In Kiosk</span>
              </div>
              <h1 className="font-poppins font-bold text-4xl md:text-[3.25rem] leading-[1.15] text-white mb-5">
                Your customers check in.<br />
                <span className="text-rd-teal">You stay on the bench.</span>
              </h1>
              <p className="text-white/70 text-lg font-dm-sans leading-relaxed mb-8 max-w-lg">
                Put a tablet on the counter and let walk-ins register themselves. Name, phone, device, issue — captured in seconds, turned into a ticket instantly.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5 shadow-lg shadow-rd-teal/25">Start Free Trial</a>
                <Link to="/contact" className="border border-white/25 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Book a Demo</Link>
              </div>
            </div>

            {/* Right — Tablet Kiosk Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Glow behind tablet */}
                <div className="absolute inset-0 bg-rd-teal/20 rounded-full blur-3xl scale-110" />
                {/* Tablet */}
                <div className="relative bg-[#0a2e30] rounded-[2rem] p-3 shadow-2xl border-2 border-rd-teal/30 w-[260px] md:w-[300px]">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-black/40 rounded-full" />
                  <div className="bg-white rounded-[1.25rem] overflow-hidden aspect-[3/4.2] flex flex-col">
                    {/* Mock screen: welcome state */}
                    <div className="bg-rd-teal px-5 pt-8 pb-5 text-center">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-white/20 flex items-center justify-center">
                        <IconTablet className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-white font-poppins font-bold text-sm">Welcome!</p>
                      <p className="text-white/70 text-[10px] font-dm-sans mt-0.5">Tap to check in</p>
                    </div>
                    <div className="flex-1 px-4 pt-4 pb-3 flex flex-col gap-2.5">
                      {['Your Name', 'Phone Number', 'Device Type'].map((f) => (
                        <div key={f} className="border border-gray-200 rounded-lg px-3 py-2">
                          <span className="text-[9px] text-gray-400 font-dm-sans">{f}</span>
                        </div>
                      ))}
                      <div className="border border-gray-200 rounded-lg px-3 py-2 flex-1">
                        <span className="text-[9px] text-gray-400 font-dm-sans">Describe the issue...</span>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <div className="w-3 h-3 rounded border border-rd-teal flex items-center justify-center">
                          <IconCheck className="w-2 h-2 text-rd-teal" />
                        </div>
                        <span className="text-[8px] text-gray-400 font-dm-sans">I agree to repair terms</span>
                      </div>
                      <div className="bg-rd-teal rounded-lg py-2 text-center mt-1">
                        <span className="text-white text-[10px] font-poppins font-semibold">Check In</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Stand */}
                <div className="mx-auto w-3 h-8 bg-gradient-to-b from-gray-500 to-gray-600" />
                <div className="mx-auto w-24 h-2 bg-gray-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  STATS BAR                                                    */}
      {/* ============================================================ */}
      <section className="bg-rd-teal">
        <div className="container-main px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className={`py-6 md:py-8 text-center ${i > 0 ? 'border-l border-white/15' : ''}`}>
                <div className="font-poppins font-bold text-3xl md:text-4xl text-white">{s.value}</div>
                <div className="text-white/70 text-xs md:text-sm font-dm-sans mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CUSTOMER JOURNEY — 4-step flow                              */}
      {/* ============================================================ */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-bold uppercase tracking-widest text-rd-teal font-poppins">How It Works</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3">The Customer Journey, Simplified</h2>
            <p className="text-gray-500 font-dm-sans mt-3">From the door to the repair bench in four frictionless steps.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connector line */}
            <div className="hidden md:block absolute top-14 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-rd-teal/20 via-rd-teal to-rd-teal/20" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {journeySteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center group">
                    {/* Step number ring */}
                    <div className="relative mb-4">
                      <div className="w-[72px] h-[72px] rounded-full bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center transition-colors duration-300">
                        <Icon className="w-7 h-7 text-rd-teal group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-rd-dark text-white text-[10px] font-poppins font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-poppins font-semibold text-rd-dark text-sm mb-1">{step.label}</h3>
                    <p className="text-gray-400 font-dm-sans text-xs leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  KIOSK SCREEN MOCKUPS — three states side by side            */}
      {/* ============================================================ */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-bold uppercase tracking-widest text-rd-teal font-poppins">Kiosk Screens</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3">What Your Customers See</h2>
            <p className="text-gray-500 font-dm-sans mt-3">Three simple screens. No training needed. Customers get it immediately.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {/* Screen 1: Welcome */}
            <KioskScreen label="Welcome Screen" active>
              <div className="bg-rd-teal flex-1 flex flex-col items-center justify-center px-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                  <IconTablet className="w-7 h-7 text-white" />
                </div>
                <p className="text-white font-poppins font-bold text-base mb-1">Your Shop Name</p>
                <p className="text-white/60 text-[11px] font-dm-sans mb-5">Tap anywhere to begin</p>
                <div className="w-12 h-1 bg-white/30 rounded-full animate-pulse" />
              </div>
            </KioskScreen>

            {/* Screen 2: Form */}
            <KioskScreen label="Check-In Form">
              <div className="bg-rd-teal px-4 py-3 text-center">
                <p className="text-white font-poppins font-bold text-xs">Enter Your Details</p>
              </div>
              <div className="flex-1 px-3 py-3 flex flex-col gap-2">
                {['Full Name', 'Phone', 'Email', 'Device'].map((f) => (
                  <div key={f} className="border border-gray-200 rounded-md px-2.5 py-1.5">
                    <span className="text-[8px] text-gray-400 font-dm-sans">{f}</span>
                  </div>
                ))}
                <div className="border border-gray-200 rounded-md px-2.5 py-1.5 flex-1 min-h-[28px]">
                  <span className="text-[8px] text-gray-400 font-dm-sans">Issue description...</span>
                </div>
                <div className="bg-rd-teal rounded-md py-1.5 text-center">
                  <span className="text-white text-[9px] font-poppins font-semibold">Submit</span>
                </div>
              </div>
            </KioskScreen>

            {/* Screen 3: Confirmation */}
            <KioskScreen label="Confirmation">
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-white to-green-50/50">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <IconCheck className="w-7 h-7 text-green-600" />
                </div>
                <p className="font-poppins font-bold text-rd-dark text-sm mb-1">You're Checked In!</p>
                <p className="text-gray-400 text-[10px] font-dm-sans mb-3 leading-relaxed">Ticket #1042 created. We'll call your name shortly.</p>
                <div className="bg-rd-dark/5 rounded-lg px-3 py-2 w-full">
                  <p className="text-[9px] text-gray-500 font-dm-sans">Position in queue</p>
                  <p className="font-poppins font-bold text-rd-teal text-lg">#3</p>
                </div>
              </div>
            </KioskScreen>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BEFORE / AFTER — Manual vs Kiosk comparison                 */}
      {/* ============================================================ */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[10px] font-bold uppercase tracking-widest text-rd-teal font-poppins">Reduce Wait Times</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3">Manual Front Desk vs. Self Check-In Kiosk</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Before — Manual */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-400/60" />
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <span className="font-poppins font-bold text-rd-dark text-sm">Manual Check-In</span>
              </div>
              <ul className="space-y-3">
                {[
                  'Staff stops current task for each walk-in',
                  'Handwriting or verbal data — typos happen',
                  '4-5 min per customer on average',
                  'Customers wait in an unmanaged line',
                  'No digital record of consent',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-500 font-dm-sans text-sm">
                    <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-gray-200 flex items-baseline gap-2">
                <span className="font-poppins font-bold text-2xl text-red-400">~5 min</span>
                <span className="text-gray-400 text-xs font-dm-sans">per customer</span>
              </div>
            </div>

            {/* After — Kiosk */}
            <div className="bg-rd-dark border border-rd-teal/30 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-rd-lime" />
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-rd-teal/30 flex items-center justify-center">
                  <IconCheck className="w-4 h-4 text-rd-lime" />
                </div>
                <span className="font-poppins font-bold text-white text-sm">Self Check-In Kiosk</span>
              </div>
              <ul className="space-y-3">
                {[
                  'Customers register themselves on the tablet',
                  'Typed data — accurate every time',
                  'Under 2 min per check-in',
                  'Automatic queue with ticket numbers',
                  'Digital T&C acceptance on record',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-white/70 font-dm-sans text-sm">
                    <IconCheck className="w-4 h-4 text-rd-lime shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-baseline gap-2">
                <span className="font-poppins font-bold text-2xl text-rd-lime">&lt;2 min</span>
                <span className="text-white/40 text-xs font-dm-sans">per customer</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CUSTOMIZATION OPTIONS                                       */}
      {/* ============================================================ */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-10 items-start">
              {/* Left copy */}
              <div className="md:col-span-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-rd-teal font-poppins">Make It Yours</span>
                <h2 className="font-poppins font-bold text-3xl text-rd-dark mt-3 mb-4">Fully Customizable to Match Your Shop</h2>
                <p className="text-gray-500 font-dm-sans leading-relaxed text-sm">
                  Every repair shop is different. Configure the kiosk form fields, upload your branding, set repair terms, and add a pre-repair checklist — all from RepairHub settings.
                </p>
              </div>

              {/* Right cards */}
              <div className="md:col-span-3 grid sm:grid-cols-2 gap-4">
                {customizations.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all group">
                      <div className="w-10 h-10 rounded-lg bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-3 transition-colors">
                        <Icon className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-poppins font-semibold text-rd-dark text-sm mb-1.5">{c.title}</h3>
                      <p className="text-gray-400 font-dm-sans text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ ACCORDION                                               */}
      {/* ============================================================ */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-rd-teal font-poppins">FAQ</span>
            <h2 className="font-poppins font-bold text-3xl text-rd-dark mt-3">Common Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`rounded-xl border transition-colors ${isOpen ? 'border-rd-teal/30 bg-rd-teal/[0.03]' : 'border-gray-100 bg-white'} shadow-sm`}>
                  <button
                    className="w-full flex items-center justify-between px-6 py-4.5 text-left font-poppins font-semibold text-sm text-rd-dark hover:text-rd-teal transition-colors"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span className="pr-4">{faq.q}</span>
                    <IconChevron className="w-5 h-5 shrink-0 text-gray-400" open={isOpen} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
