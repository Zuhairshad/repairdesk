import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const smsConversation = [
  { from: 'shop', text: 'Hi Alex! Your iPhone 14 screen repair has been checked in. Ticket #4821. We\'ll keep you updated!', time: '10:02 AM' },
  { from: 'customer', text: 'Thanks! How long will it take?', time: '10:05 AM' },
  { from: 'shop', text: 'Estimated 45 minutes. We\'ll text you when it\'s ready for pickup.', time: '10:06 AM' },
  { from: 'shop', text: 'Great news — your iPhone 14 is repaired and ready for pickup! See you soon.', time: '10:48 AM' },
  { from: 'customer', text: 'Awesome, on my way! 🎉', time: '10:49 AM' },
];

const triggerMap = [
  { stage: 'Check-In', sms: 'Device received confirmation + ticket number', icon: 'clipboard' },
  { stage: 'Diagnosis', sms: 'Issue found + repair cost approval request', icon: 'search' },
  { stage: 'Parts Ordered', sms: 'Parts ETA notification', icon: 'package' },
  { stage: 'In Repair', sms: 'Repair started — estimated completion time', icon: 'wrench' },
  { stage: 'Ready', sms: 'Pickup-ready alert with store hours', icon: 'check' },
];

const analyticsData = [
  { label: 'Delivery Rate', value: '98.4%', bar: 98, color: 'bg-rd-teal' },
  { label: 'Open Rate', value: '97.1%', bar: 97, color: 'bg-[#457b9d]' },
  { label: 'Response Rate', value: '41.3%', bar: 41, color: 'bg-amber-500' },
  { label: 'Opt-out Rate', value: '0.8%', bar: 1, color: 'bg-red-400' },
];

const faqs = [
  { q: 'How does the SMS credit system work?', a: 'RepairHub uses a prepaid credit model. Purchase credits in bundles from your dashboard — domestic US/Canada messages cost about 1-2 credits each, international varies by country. Credits never expire, there are no monthly minimums, and you can set up auto-refill so you never run dry mid-campaign.' },
  { q: 'Can customers reply to automated messages?', a: 'Absolutely. Every automated SMS supports two-way replies. Customer responses land in your RepairHub inbox as threaded conversations tied to their ticket. Your team can reply from the dashboard — no personal phone numbers needed, no context lost.' },
  { q: 'How do I connect my Twilio account?', a: 'Go to Settings → Integrations → Twilio in your RepairHub dashboard. Enter your Twilio Account SID, Auth Token, and a verified phone number. RepairHub handles the rest — message routing, delivery tracking, and compliance. You can also use RepairHub\'s built-in SMS without Twilio.' },
  { q: 'Can I customize which events trigger an SMS?', a: 'Yes, every trigger is configurable. Choose which ticket status changes fire a message, set quiet hours so customers are not texted at 2 AM, and create different templates per trigger. You can also add conditional logic — for example, only send a parts-ordered SMS if the repair cost exceeds a threshold.' },
  { q: 'Is there an opt-in and compliance system?', a: 'RepairHub includes built-in TCPA and GDPR-compliant opt-in management. Customers opt in during check-in (digital signature capture), and every outbound SMS includes an opt-out keyword. Opt-out requests are processed automatically and logged for your records.' },
];

function TriggerIcon({ type }) {
  const icons = {
    clipboard: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
    search: <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
    package: <><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 4v10L4 17V7z" /></>,
    wrench: <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />,
    check: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  };
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
      {icons[type]}
    </svg>
  );
}

export default function RepairHubSMSPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ─── HERO: Phone Mockup with Live Conversation ─── */}
      <section className="relative bg-rd-dark overflow-hidden py-20 md:py-28 px-6">
        {/* Floating bubble decorations */}
        <div className="absolute top-12 left-[8%] w-64 h-64 rounded-full bg-rd-teal/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full bg-rd-teal/5 blur-3xl pointer-events-none" />

        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 bg-rd-teal/20 text-rd-teal font-dm-sans text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              SMS Notifications
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[3.4rem] text-white leading-[1.1] mb-6">
              Every repair update,<br />
              <span className="text-rd-teal">delivered by text.</span>
            </h1>
            <p className="text-white/60 text-lg font-dm-sans leading-relaxed mb-8 max-w-lg">
              Automated SMS keeps customers informed from check-in to pickup. Two-way conversations, marketing campaigns, and analytics — all inside RepairHub.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
              <Link to="/contact" className="border border-white/20 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/5 transition-colors">Book a Demo</Link>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[300px] md:w-[320px] bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl shadow-rd-teal/10 border border-white/10">
              {/* Notch */}
              <div className="flex justify-center mb-1">
                <div className="w-28 h-5 bg-gray-900 rounded-b-2xl" />
              </div>
              <div className="bg-white rounded-[2rem] overflow-hidden">
                {/* Phone header */}
                <div className="bg-rd-teal px-5 py-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold font-poppins">RD</div>
                  <div>
                    <p className="text-white text-sm font-poppins font-semibold">QuickFix Repairs</p>
                    <p className="text-white/60 text-[10px] font-dm-sans">SMS &middot; Today</p>
                  </div>
                </div>
                {/* Messages */}
                <div className="px-3 py-4 space-y-3 bg-gray-50 min-h-[320px]">
                  {smsConversation.map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'customer' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] px-3.5 py-2 text-[12px] font-dm-sans leading-relaxed shadow-sm ${
                        msg.from === 'shop'
                          ? 'bg-white text-gray-700 rounded-2xl rounded-tl-md'
                          : 'bg-rd-teal text-white rounded-2xl rounded-tr-md'
                      }`}>
                        {msg.text}
                        <span className={`block text-[9px] mt-1 ${msg.from === 'shop' ? 'text-gray-400' : 'text-white/50'}`}>{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Input bar */}
                <div className="bg-white border-t border-gray-100 px-3 py-2 flex items-center gap-2">
                  <div className="flex-1 bg-gray-100 rounded-full px-3 py-1.5 text-[11px] text-gray-400 font-dm-sans">Type a message...</div>
                  <div className="w-7 h-7 rounded-full bg-rd-teal flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AUTOMATED TRIGGERS: Ticket Lifecycle → SMS ─── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3 font-dm-sans">Automated Triggers</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-3">Every ticket stage sends the right message</h2>
            <p className="text-gray-500 font-dm-sans text-lg max-w-2xl mx-auto">Map each step of the repair lifecycle to an automatic SMS. Zero manual effort, zero missed updates.</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical connecting line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-rd-teal/60 via-rd-teal/30 to-transparent hidden md:block" />

            <div className="space-y-0">
              {triggerMap.map((t, i) => (
                <div key={t.stage} className="relative flex items-start gap-5 md:gap-7 group py-5">
                  {/* Node */}
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-2xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center text-rd-teal group-hover:text-white transition-colors duration-300">
                    <TriggerIcon type={t.icon} />
                  </div>
                  {/* Content as a chat bubble pointing left */}
                  <div className="relative flex-1 bg-rd-cream rounded-2xl rounded-tl-md px-6 py-4 group-hover:shadow-md transition-shadow">
                    <span className="absolute -left-2 top-4 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-rd-cream" />
                    <p className="font-poppins font-semibold text-rd-dark text-sm md:text-base">{t.stage}</p>
                    <p className="text-gray-500 font-dm-sans text-sm mt-0.5">{t.sms}</p>
                  </div>
                  {/* Step number */}
                  <span className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-rd-teal/10 text-rd-teal font-poppins font-bold text-xs shrink-0 self-center">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHAT BUBBLE TIMELINE ─── */}
      <section className="bg-rd-dark py-20 px-6">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-14">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3 font-dm-sans">Customer Experience</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-3">What your customer sees</h2>
            <p className="text-white/50 font-dm-sans text-lg">A real-time stream of updates, right on their phone.</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            {[
              { text: 'Your iPhone 14 has been checked in at QuickFix Repairs. Ticket #4821.', time: '10:02 AM', delay: '' },
              { text: 'Diagnosis complete — cracked LCD. Repair cost: $89. Reply YES to approve.', time: '10:18 AM', delay: '16 min later' },
              { text: 'Repair approved! Your device is now in our repair queue.', time: '10:20 AM', delay: '2 min later' },
              { text: 'Parts have been ordered for your repair. ETA: same-day delivery.', time: '10:35 AM', delay: '15 min later' },
              { text: 'Great news! Your iPhone 14 is repaired and ready for pickup. See you soon!', time: '10:52 AM', delay: '17 min later' },
            ].map((msg, i) => (
              <div key={i} className="w-full max-w-lg">
                {msg.delay && (
                  <p className="text-white/20 text-[10px] font-dm-sans text-center mb-2 uppercase tracking-wider">{msg.delay}</p>
                )}
                <div className="bg-white/10 backdrop-blur-sm border border-white/5 rounded-2xl rounded-bl-md px-5 py-3.5">
                  <p className="text-white/90 font-dm-sans text-sm leading-relaxed">{msg.text}</p>
                  <p className="text-white/30 text-[10px] font-dm-sans mt-1.5">{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEMPLATE BUILDER MOCKUP ─── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3 font-dm-sans">Custom Templates</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Build templates with merge tags</h2>
              <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-6">
                Create reusable message templates with dynamic placeholders. Every SMS feels personal — at scale. Merge tags auto-fill customer name, ticket ID, device info, and more.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['{customer_name}', '{ticket_id}', '{device_type}', '{repair_cost}', '{store_name}', '{pickup_time}'].map(tag => (
                  <span key={tag} className="inline-block bg-rd-teal/10 text-rd-teal font-mono text-xs px-3 py-1.5 rounded-lg">{tag}</span>
                ))}
              </div>
              <ul className="space-y-3">
                {['Unlimited reusable templates per store', 'Conditional blocks for VIP customers', 'Preview before sending with real data'].map(item => (
                  <li key={item} className="flex items-center gap-2.5 font-dm-sans text-sm text-gray-600">
                    <svg className="w-4 h-4 text-rd-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Template editor mockup */}
            <div className="bg-rd-cream border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="flex items-center justify-between bg-white px-5 py-3 border-b border-gray-100">
                <span className="font-poppins font-semibold text-sm text-rd-dark">Template Editor</span>
                <span className="text-[10px] bg-blue-100 text-blue-700 font-dm-sans font-semibold px-2.5 py-0.5 rounded-full">Active</span>
              </div>
              <div className="px-5 py-4 space-y-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1 font-dm-sans">Template Name</label>
                  <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-rd-dark font-dm-sans">Repair Complete Notification</div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1 font-dm-sans">Trigger</label>
                  <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-rd-dark font-dm-sans">Status changed to → Ready for Pickup</div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1 font-dm-sans">Message Body</label>
                  <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 font-dm-sans leading-relaxed">
                    Hi <span className="bg-rd-teal/15 text-rd-teal font-mono text-xs px-1 py-0.5 rounded">{'{customer_name}'}</span>, your <span className="bg-rd-teal/15 text-rd-teal font-mono text-xs px-1 py-0.5 rounded">{'{device_type}'}</span> repair is complete! Ticket <span className="bg-rd-teal/15 text-rd-teal font-mono text-xs px-1 py-0.5 rounded">{'{ticket_id}'}</span>. Pick up at <span className="bg-rd-teal/15 text-rd-teal font-mono text-xs px-1 py-0.5 rounded">{'{store_name}'}</span> before <span className="bg-rd-teal/15 text-rd-teal font-mono text-xs px-1 py-0.5 rounded">{'{pickup_time}'}</span>. Total: <span className="bg-rd-teal/15 text-rd-teal font-mono text-xs px-1 py-0.5 rounded">{'{repair_cost}'}</span>.
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-gray-400 font-dm-sans text-xs">124 / 160 characters</span>
                  <span className="text-gray-400 font-dm-sans text-xs">1 SMS credit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TWO-WAY CONVERSATION ─── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conversation visualization */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-md mx-auto lg:mx-0">
                <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-rd-teal/10 flex items-center justify-center">
                      <span className="text-rd-teal font-poppins font-bold text-xs">AJ</span>
                    </div>
                    <div>
                      <p className="font-poppins font-semibold text-sm text-rd-dark">Alex Johnson</p>
                      <p className="text-gray-400 text-[10px] font-dm-sans">Ticket #4821 &middot; iPhone 14</p>
                    </div>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400" title="Active" />
                </div>
                <div className="px-4 py-4 space-y-3 bg-gray-50/50">
                  {[
                    { from: 'shop', text: 'Hi Alex, we found some water damage in addition to the cracked screen. Want us to clean the internals? Extra $25.', time: '2:14 PM' },
                    { from: 'customer', text: 'Yes please, go ahead with both!', time: '2:16 PM' },
                    { from: 'shop', text: 'Got it! Updated total: $114. We\'ll have it done by 4 PM today.', time: '2:17 PM' },
                  ].map((msg, i) => (
                    <div key={i} className={`flex ${msg.from === 'customer' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] px-3.5 py-2 text-[13px] font-dm-sans leading-relaxed ${
                        msg.from === 'shop'
                          ? 'bg-white text-gray-700 rounded-2xl rounded-tl-md shadow-sm'
                          : 'bg-rd-teal text-white rounded-2xl rounded-tr-md'
                      }`}>
                        {msg.text}
                        <span className={`block text-[9px] mt-1 ${msg.from === 'shop' ? 'text-gray-400' : 'text-white/50'}`}>{msg.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-3 bg-white border-t border-gray-100 flex gap-2">
                  <input type="text" readOnly className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-400 font-dm-sans outline-none" value="Reply to Alex..." />
                  <button className="w-9 h-9 rounded-full bg-rd-teal flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3 font-dm-sans">Two-Way SMS</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Conversations, not broadcasts</h2>
              <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-6">
                Customers reply right from their phone. Your team responds from the RepairHub dashboard. No personal numbers, no app installs, no missed messages — just a threaded conversation tied to every ticket.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Threaded by Ticket', desc: 'Every conversation links to the repair ticket for full context.' },
                  { title: 'Team Handoff', desc: 'Any team member can pick up a conversation seamlessly.' },
                  { title: 'Smart Flags', desc: 'Messages needing human attention are auto-flagged.' },
                  { title: 'Bulk + Personal', desc: 'Run campaigns and reply individually in the same tool.' },
                ].map(f => (
                  <div key={f.title} className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="font-poppins font-semibold text-rd-dark text-sm mb-1">{f.title}</p>
                    <p className="text-gray-500 font-dm-sans text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SMS ANALYTICS DASHBOARD ─── */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-12">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3 font-dm-sans">Analytics</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-3">Know exactly how your messages perform</h2>
            <p className="text-gray-500 font-dm-sans text-lg max-w-xl mx-auto">Track delivery rates, responses, and ROI on every campaign and automated trigger.</p>
          </div>

          <div className="bg-rd-cream rounded-2xl p-6 md:p-8 border border-gray-100">
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Sent Today', value: '342', sub: '+12% vs yesterday' },
                { label: 'Credits Left', value: '4,218', sub: 'Auto-refill on' },
                { label: 'Avg Response', value: '87s', sub: 'Under 2 minutes' },
                { label: 'Conversations', value: '29', sub: 'Active threads' },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl p-4 text-center">
                  <p className="font-poppins font-bold text-2xl text-rd-dark">{s.value}</p>
                  <p className="font-dm-sans text-xs text-gray-500 mt-0.5">{s.label}</p>
                  <p className="font-dm-sans text-[10px] text-rd-teal mt-1">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* Bar metrics */}
            <div className="space-y-5">
              {analyticsData.map(d => (
                <div key={d.label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-dm-sans text-sm text-gray-600">{d.label}</span>
                    <span className="font-poppins font-semibold text-sm text-rd-dark">{d.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className={`${d.color} h-2.5 rounded-full transition-all duration-700`} style={{ width: `${d.bar}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTEGRATIONS STRIP ─── */}
      <section className="bg-rd-dark py-16 px-6">
        <div className="container-main max-w-3xl text-center">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-3">Powered by Twilio. Managed by RepairHub.</h2>
          <p className="text-white/50 font-dm-sans mb-8 max-w-lg mx-auto">
            Connect your Twilio account for full control, or use RepairHub's built-in SMS — no external account required. Compliance, opt-in management, and delivery tracking are handled automatically.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Twilio Integration', 'TCPA Compliant', 'Auto Opt-Out', 'Delivery Receipts', 'Number Verification'].map(tag => (
              <span key={tag} className="bg-white/10 text-white/80 font-dm-sans text-xs px-4 py-2 rounded-full border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ACCORDION ─── */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-dm-sans">Everything you need to know about RepairHub SMS.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100">
                <button
                  className="w-full flex items-center justify-between px-6 py-4.5 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 shrink-0 text-rd-teal transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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
