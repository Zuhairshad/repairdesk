import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const funnelStages = [
  { label: 'Attract', pct: '100%', color: '#016D74', desc: 'Email campaigns, SMS blasts, social media' },
  { label: 'Engage', pct: '75%', color: '#01858E', desc: 'Personalized follow-ups, review requests' },
  { label: 'Convert', pct: '50%', color: '#02A0AB', desc: 'Promotional offers, referral programs' },
  { label: 'Retain', pct: '30%', color: '#7CCE2B', desc: 'Re-engagement, loyalty campaigns' },
];

const campaignMetrics = [
  { label: 'Open Rate', value: '68%', trend: '+12%', icon: 'eye' },
  { label: 'Click Rate', value: '24%', trend: '+8%', icon: 'cursor' },
  { label: 'Conversions', value: '142', trend: '+31', icon: 'star' },
  { label: 'ROI', value: '340%', trend: '+45%', icon: 'chart' },
];

const smsMessages = [
  { time: '10:02 AM', text: 'Hi Sarah! Your iPhone screen repair is ready for pickup. Visit us today!', type: 'sent' },
  { time: '2:15 PM', text: 'Thanks for choosing QuickFix! Enjoy 15% off your next repair. Code: RETURN15', type: 'sent' },
  { time: '9:00 AM', text: 'We miss you! It\'s been 3 months. Book your next service and get a free screen protector.', type: 'sent' },
];

const segments = [
  { name: 'Repeat Buyers', count: 342, color: '#016D74' },
  { name: 'One-time Visitors', count: 891, color: '#02A0AB' },
  { name: 'High-value', count: 156, color: '#7CCE2B' },
];

const faqs = [
  { q: 'Is there any extra cost for using marketing tools?', a: 'No. Email and SMS marketing automation is included in your RepairDesk plan at no additional charge. Send campaigns, set up automations, and track results without paying a cent more.' },
  { q: 'Can I connect my existing Mailchimp or Campaigner account?', a: 'Absolutely. RepairDesk integrates directly with Mailchimp and Campaigner. Your customer lists sync automatically so you can run advanced campaigns in either platform alongside RepairDesk\'s built-in tools.' },
  { q: 'How does automated follow-up work after a repair?', a: 'When a ticket is closed, RepairDesk triggers a follow-up sequence you define: a thank-you email immediately, a review request after 24 hours, and a re-engagement offer after 30 days. Every step is customizable.' },
  { q: 'What kind of customer segments can I create?', a: 'Segment by repair type, purchase history, visit frequency, spending tier, or time since last visit. Combine multiple criteria to build laser-focused audiences for each campaign.' },
  { q: 'Can I use my own branding in email templates?', a: 'Yes. The drag-and-drop email builder lets you upload your logo, set brand colors, choose fonts, and save reusable templates. Dynamic tags auto-fill customer names, store details, and repair info.' },
  { q: 'How do I measure campaign performance?', a: 'Every campaign shows real-time open rates, click-through rates, bounce counts, and conversion metrics. Export reports or view them in your RepairDesk dashboard to continuously optimize your outreach.' },
];

const lifecycleSteps = [
  { stage: 'First Visit', icon: 'door', desc: 'Welcome email with store info' },
  { stage: 'Repair Done', icon: 'wrench', desc: 'Thank-you + review request' },
  { stage: '30 Days Later', icon: 'calendar', desc: 'Check-in + accessory offer' },
  { stage: '90 Days Idle', icon: 'bell', desc: 'Win-back discount campaign' },
  { stage: 'Returned', icon: 'refresh', desc: 'Loyalty reward activation' },
];

/* ── Inline SVG icon helper ── */
function Icon({ name, className = 'w-6 h-6' }) {
  const icons = {
    megaphone: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>,
    mail: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    phone: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    users: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    eye: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
    cursor: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>,
    star: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
    chart: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    chevron: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>,
    check: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>,
    door: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>,
    wrench: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    calendar: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
    bell: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
    refresh: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
    link: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
    gift: <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a4 4 0 00-4-4 2 2 0 00-2 2v2h6zm0 0V6a4 4 0 014-4 2 2 0 012 2v2h-6zm-8 4h16M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>,
  };
  return icons[name] || null;
}

export default function MarketingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ── HERO: Megaphone + Funnel Visualization ── */}
      <section className="relative bg-rd-dark overflow-hidden py-24 md:py-32 px-6">
        {/* Decorative radial rings */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 opacity-[0.07]">
          {[320, 480, 640].map(s => (
            <div key={s} className="absolute rounded-full border-2 border-rd-teal" style={{ width: s, height: s, top: `calc(50% - ${s / 2}px)`, left: `calc(50% - ${s / 2}px)` }} />
          ))}
        </div>

        <div className="container-main relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-rd-teal/20 text-rd-teal rounded-full px-4 py-1.5 text-xs font-poppins font-semibold tracking-wide uppercase mb-6">
              <Icon name="megaphone" className="w-4 h-4" /> Marketing Suite
            </div>
            <h1 className="font-poppins font-bold text-4xl md:text-[3.25rem] leading-[1.12] text-white mb-6">
              Turn Every Repair Into a <span className="text-rd-teal">Repeat Customer</span>
            </h1>
            <p className="text-white/65 text-lg font-dm-sans leading-relaxed mb-10 max-w-lg">
              Email campaigns, SMS automations, review collection, and referral programs — all built into your repair shop POS. No extra tools, no extra cost.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
              <Link to="/contact" className="border border-white/25 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Book a Demo</Link>
            </div>
          </div>

          {/* Marketing Funnel SVG */}
          <div className="flex justify-center">
            <svg viewBox="0 0 360 340" className="w-full max-w-sm" fill="none">
              {funnelStages.map((s, i) => {
                const topW = 320 - i * 60;
                const botW = 320 - (i + 1) * 60;
                const y = i * 78;
                const topX = (360 - topW) / 2;
                const botX = (360 - botW) / 2;
                return (
                  <g key={s.label}>
                    <path d={`M${topX},${y + 6} L${topX + topW},${y + 6} L${botX + botW},${y + 70} L${botX},${y + 70} Z`} fill={s.color} opacity={0.92} rx="6" />
                    <text x="180" y={y + 35} textAnchor="middle" fill="white" fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="15">{s.label}</text>
                    <text x="180" y={y + 54} textAnchor="middle" fill="white" fontFamily="DM Sans,sans-serif" fontSize="10" opacity="0.7">{s.desc}</text>
                  </g>
                );
              })}
              {/* Drip arrow at bottom */}
              <path d="M175 320 L180 335 L185 320" stroke="#7CCE2B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <circle cx="180" cy="338" r="2" fill="#7CCE2B" opacity="0.6" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── EMAIL CAMPAIGN BUILDER MOCKUP ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Builder mockup */}
            <div className="bg-rd-cream rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
              {/* Toolbar */}
              <div className="flex items-center gap-2 px-5 py-3 bg-white border-b border-gray-100">
                <div className="flex gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-400" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400" /><span className="w-2.5 h-2.5 rounded-full bg-green-400" /></div>
                <span className="ml-3 text-xs font-poppins font-semibold text-rd-dark/60">Email Template Builder</span>
              </div>
              {/* Canvas */}
              <div className="p-6 space-y-4">
                <div className="bg-rd-teal rounded-xl p-5 text-center">
                  <div className="w-10 h-10 mx-auto bg-white/20 rounded-lg flex items-center justify-center mb-2"><Icon name="mail" className="w-5 h-5 text-white" /></div>
                  <p className="text-white font-poppins font-bold text-sm">Your Logo Here</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-dashed border-gray-300">
                  <div className="h-3 bg-rd-dark/10 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-rd-dark/10 rounded w-1/2 mb-4" />
                  <div className="h-2 bg-gray-100 rounded w-full mb-1.5" />
                  <div className="h-2 bg-gray-100 rounded w-5/6 mb-1.5" />
                  <div className="h-2 bg-gray-100 rounded w-4/6" />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 bg-white rounded-lg p-3 border border-dashed border-gray-300 text-center">
                    <div className="w-full h-16 bg-gradient-to-br from-rd-teal/10 to-rd-teal/5 rounded mb-2 flex items-center justify-center"><Icon name="gift" className="w-6 h-6 text-rd-teal/40" /></div>
                    <div className="h-2 bg-gray-100 rounded w-3/4 mx-auto" />
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-3 border border-dashed border-gray-300 text-center">
                    <div className="w-full h-16 bg-gradient-to-br from-rd-teal/10 to-rd-teal/5 rounded mb-2 flex items-center justify-center"><Icon name="star" className="w-6 h-6 text-rd-teal/40" /></div>
                    <div className="h-2 bg-gray-100 rounded w-3/4 mx-auto" />
                  </div>
                </div>
                <div className="bg-rd-teal rounded-lg py-2.5 text-center">
                  <span className="text-white text-xs font-poppins font-semibold">Shop Now &rarr;</span>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal mb-3 font-poppins">Drag & Drop Builder</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5 leading-tight">Beautiful Emails, Zero Design Skills</h2>
              <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-8">
                Build on-brand email templates with our visual editor. Drop in your logo, pick colors, add dynamic tags like <span className="bg-rd-teal/10 text-rd-teal px-1.5 py-0.5 rounded text-sm font-semibold">&#123;&#123;customer_name&#125;&#125;</span> and hit send. Every template is mobile-ready out of the box.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Custom branding & logo', 'Dynamic personalization tags', 'Mobile-responsive layouts', 'Reusable template library'].map(item => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-rd-teal/10 flex items-center justify-center shrink-0 mt-0.5"><Icon name="check" className="w-3 h-3 text-rd-teal" /></div>
                    <span className="text-gray-600 font-dm-sans text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SMS PHONE MOCKUP ── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal mb-3 font-poppins">SMS Automation</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5 leading-tight">Right Message, Right Moment</h2>
              <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-8">
                Automatically text customers when their repair is done, send birthday discounts, or win back lapsed visitors with timed SMS sequences. No manual effort required.
              </p>
              <div className="space-y-4">
                {['Pickup reminders reduce hold time by 40%', 'Promotional SMS with trackable short links', 'Automatic follow-ups after every repair'].map(item => (
                  <div key={item} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm">
                    <Icon name="phone" className="w-5 h-5 text-rd-teal shrink-0" />
                    <span className="text-rd-dark font-dm-sans text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockup */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="w-72 bg-rd-dark rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="bg-rd-teal px-5 py-3 flex items-center justify-between">
                    <span className="text-white font-poppins font-semibold text-sm">QuickFix Repairs</span>
                    <Icon name="phone" className="w-4 h-4 text-white/60" />
                  </div>
                  {/* Messages */}
                  <div className="p-4 space-y-3 min-h-[280px]">
                    {smsMessages.map((msg, i) => (
                      <div key={i}>
                        <div className="bg-rd-teal/10 rounded-2xl rounded-tl-sm px-4 py-3">
                          <p className="text-rd-dark font-dm-sans text-xs leading-relaxed">{msg.text}</p>
                        </div>
                        <p className="text-gray-400 text-[10px] font-dm-sans mt-1 ml-1">{msg.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOMER SEGMENTATION VENN ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main text-center">
          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal mb-3 font-poppins">Smart Segmentation</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Target the Right Customers Every Time</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-14 max-w-2xl mx-auto">
            Slice your customer base by repair history, spending, visit frequency, or any custom field. Then send each segment exactly the offer they respond to.
          </p>

          {/* Venn diagram */}
          <div className="flex justify-center mb-14">
            <svg viewBox="0 0 420 260" className="w-full max-w-md" fill="none">
              <circle cx="155" cy="130" r="100" fill="#016D74" opacity="0.15" stroke="#016D74" strokeWidth="1.5" />
              <circle cx="265" cy="130" r="100" fill="#02A0AB" opacity="0.15" stroke="#02A0AB" strokeWidth="1.5" />
              <circle cx="210" cy="80" r="80" fill="#7CCE2B" opacity="0.12" stroke="#7CCE2B" strokeWidth="1.5" />
              {segments.map((s, i) => {
                const positions = [{ x: 110, y: 170 }, { x: 310, y: 170 }, { x: 210, y: 60 }];
                return (
                  <g key={s.name}>
                    <text x={positions[i].x} y={positions[i].y} textAnchor="middle" fill={s.color} fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="13">{s.name}</text>
                    <text x={positions[i].x} y={positions[i].y + 18} textAnchor="middle" fill={s.color} fontFamily="DM Sans,sans-serif" fontSize="11" opacity="0.7">{s.count} customers</text>
                  </g>
                );
              })}
              {/* Overlap label */}
              <text x="210" y="145" textAnchor="middle" fill="#016D74" fontFamily="Poppins,sans-serif" fontWeight="700" fontSize="12">VIP</text>
              <text x="210" y="162" textAnchor="middle" fill="#016D74" fontFamily="DM Sans,sans-serif" fontSize="10" opacity="0.6">48 customers</text>
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              { icon: 'users', title: 'By Behavior', desc: 'Repair type, visit frequency, or purchase patterns' },
              { icon: 'chart', title: 'By Value', desc: 'Spending tier, lifetime value, average ticket size' },
              { icon: 'calendar', title: 'By Timing', desc: 'Days since last visit, seasonal buyers, lapsed customers' },
            ].map(item => (
              <div key={item.title} className="bg-rd-cream rounded-2xl p-6 text-left">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 flex items-center justify-center mb-4"><Icon name={item.icon} className="w-5 h-5 text-rd-teal" /></div>
                <h3 className="font-poppins font-semibold text-rd-dark text-sm mb-1.5">{item.title}</h3>
                <p className="text-gray-500 font-dm-sans text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN PERFORMANCE DASHBOARD ── */}
      <section className="bg-rd-dark py-20 px-6">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal mb-3 font-poppins">Campaign Analytics</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4">Know What Works, Double Down</h2>
            <p className="text-white/55 font-dm-sans text-lg max-w-xl mx-auto">Real-time dashboards show exactly how every campaign performs so you can optimize on the fly.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {campaignMetrics.map(m => (
              <div key={m.label} className="bg-white/[0.06] backdrop-blur border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/20 flex items-center justify-center mx-auto mb-4"><Icon name={m.icon} className="w-5 h-5 text-rd-teal" /></div>
                <p className="font-poppins font-bold text-3xl text-white mb-1">{m.value}</p>
                <p className="text-white/50 font-dm-sans text-xs uppercase tracking-wider mb-2">{m.label}</p>
                <span className="inline-block bg-green-500/20 text-green-400 text-xs font-semibold font-dm-sans px-2.5 py-0.5 rounded-full">{m.trend}</span>
              </div>
            ))}
          </div>

          {/* Mini bar chart */}
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-white/50 text-xs font-poppins uppercase tracking-wider mb-5">Weekly Send Volume</p>
            <div className="flex items-end gap-3 h-28">
              {[45, 62, 78, 55, 88, 72, 94].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full rounded-t-md transition-all" style={{ height: `${h}%`, background: i === 6 ? '#7CCE2B' : '#016D74' }} />
                  <span className="text-white/30 text-[10px] font-dm-sans">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section className="bg-white py-16 px-6">
        <div className="container-main text-center">
          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal mb-3 font-poppins">Integrations</span>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-4">Works With Tools You Already Use</h2>
          <p className="text-gray-500 font-dm-sans mb-12 max-w-lg mx-auto">Sync customers and campaigns with leading marketing platforms for even more power.</p>

          <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
            {[
              { name: 'Mailchimp', letter: 'M', bg: '#FFE01B' },
              { name: 'Campaigner', letter: 'C', bg: '#016D74' },
              { name: 'Google Reviews', letter: 'G', bg: '#4285F4' },
              { name: 'Facebook', letter: 'f', bg: '#1877F2' },
              { name: 'Yelp', letter: 'Y', bg: '#D32323' },
            ].map(tool => (
              <div key={tool.name} className="group flex flex-col items-center gap-2.5">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300" style={{ backgroundColor: tool.bg + '15' }}>
                  <span className="font-poppins font-bold text-xl" style={{ color: tool.bg }}>{tool.letter}</span>
                </div>
                <span className="text-gray-500 font-dm-sans text-xs">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RE-ENGAGEMENT LIFECYCLE ── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal mb-3 font-poppins">Customer Lifecycle</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Bring Every Customer Back</h2>
            <p className="text-gray-500 font-dm-sans text-lg max-w-2xl mx-auto">
              Map automated touchpoints across the entire customer journey. From first visit to loyal advocate, RepairDesk keeps the conversation going.
            </p>
          </div>

          {/* Lifecycle timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-rd-teal/20" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
              {lifecycleSteps.map((step, i) => (
                <div key={step.stage} className="relative flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-md border-2 border-rd-teal/20 flex items-center justify-center mb-4 relative z-10">
                    <Icon name={step.icon} className="w-7 h-7 text-rd-teal" />
                  </div>
                  <h3 className="font-poppins font-semibold text-rd-dark text-sm mb-1">{step.stage}</h3>
                  <p className="text-gray-500 font-dm-sans text-xs leading-relaxed">{step.desc}</p>
                  {i < lifecycleSteps.length - 1 && (
                    <div className="md:hidden w-0.5 h-6 bg-rd-teal/20 mt-3" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-14">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-10 py-3.5">Automate Your Marketing</a>
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-3">Questions? Answered.</h2>
            <p className="text-gray-500 font-dm-sans">Everything you need to know about RepairDesk marketing tools.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-100 overflow-hidden transition-shadow hover:shadow-sm">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-poppins font-semibold text-rd-dark text-sm hover:text-rd-teal transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className={`shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    <Icon name="chevron" className="w-5 h-5" />
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${openFaq === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
