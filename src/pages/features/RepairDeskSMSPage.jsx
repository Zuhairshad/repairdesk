import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Automated Repair Status SMS', desc: 'Customers receive instant text messages the moment their repair status changes. From intake to completion, every update is communicated automatically — no phone calls or manual follow-ups needed.' },
  { title: '2-Way SMS Conversations', desc: 'Reply to customer messages directly from your RepairDesk dashboard. Customers text back from their phone and the conversation threads in one place, giving your team full context without switching apps.' },
  { title: 'SMS Marketing Campaigns', desc: 'Send targeted promotions, seasonal offers, and re-engagement messages to your customer list. Segment by repair type, purchase history, or location to maximize response rates.' },
  { title: 'Custom SMS Templates', desc: 'Create reusable message templates with Dynamic Tags for customer name, device type, repair status, and store details. Maintain a consistent brand voice while personalizing every message.' },
  { title: 'SMS Scheduling', desc: 'Schedule messages to go out at the optimal time. Queue up appointment reminders, follow-ups, and marketing blasts in advance so your communication runs on autopilot.' },
  { title: 'Delivery Tracking', desc: 'See real-time delivery status for every SMS sent — delivered, pending, or failed. Identify undeliverable numbers and keep your contact list clean for higher campaign success rates.' },
];

const faqs = [
  { q: 'How much does SMS messaging cost with RepairDesk?', a: 'RepairDesk SMS uses a simple credit-based system. You purchase SMS credits in bundles directly from your dashboard. Pricing varies by region, but domestic messages in the US and Canada typically cost just a few cents each. There are no monthly minimums or hidden fees.' },
  { q: 'Can customers reply to automated SMS messages?', a: 'Yes. RepairDesk SMS supports full 2-way messaging. When a customer replies to any automated or manual SMS, the response appears in your RepairDesk dashboard as a threaded conversation. Your team can reply directly without leaving the platform.' },
  { q: 'What countries does RepairDesk SMS support?', a: 'RepairDesk SMS works in the United States, Canada, United Kingdom, Australia, and many other countries. Coverage depends on our carrier partnerships in each region. Contact our support team for availability in your specific country.' },
  { q: 'Can I use my own phone number for SMS?', a: 'Yes. You can register your existing business phone number or get a new dedicated number through RepairDesk. Having a recognizable number increases open rates and builds customer trust. We support local numbers, toll-free numbers, and short codes depending on your region.' },
];

export default function RepairDeskSMSPage() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">RepairDesk SMS — Direct Messaging for Repair Shops</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">
            Keep customers in the loop with automated SMS notifications for every repair stage. Send status updates, appointment reminders, and marketing campaigns — all from one platform, all via text.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Powerful SMS Tools Built for Repair Businesses</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">From automated repair updates to targeted marketing campaigns, RepairDesk SMS gives you everything you need to communicate with customers via text.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-7 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-5 transition-colors">
                  <svg className="w-6 h-6 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-3">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">SMS vs Email</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Why SMS Outperforms Email for Repair Shops</h2>
              <p className="text-gray-500 font-dm-sans text-lg mb-6">Text messages have a 98% open rate compared to just 20% for email. For time-sensitive repair updates and appointment reminders, SMS is the channel your customers actually check.</p>
              <ul className="space-y-3">
                {['98% open rate vs 20% for email — messages actually get read', 'Average response time of 90 seconds vs 90 minutes for email', 'No spam filters — your message lands directly on their phone', 'Customers prefer text for short updates and confirmations'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rd-teal flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></div>
                    <span className="text-gray-600 font-dm-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rd-dark rounded-2xl p-8 text-white">
              <div className="text-rd-lime text-4xl font-dm-serif mb-3">"</div>
              <p className="text-white/90 font-dm-sans leading-relaxed mb-6 italic">We used to get 10-15 calls a day from customers asking about repair status. After turning on RepairDesk SMS, those calls dropped to almost zero. Customers love getting a text the moment their device is ready.</p>
              <p className="font-poppins font-semibold text-white">Sarah L.</p>
              <p className="text-white/50 text-xs font-poppins">Phone Repair Shop Owner, California</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">2-Way Messaging</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Real Conversations, Not Just Notifications</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-2xl">RepairDesk SMS is more than one-way alerts. Customers can reply to any message and your team sees the full conversation in the dashboard — no personal phone numbers, no missed messages.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ title: 'Threaded Conversations', desc: 'Every customer text thread is organized by ticket and customer profile. Your team sees the full history and can pick up any conversation without asking the customer to repeat themselves.' }, { title: 'Team Collaboration', desc: 'Multiple team members can view and respond to SMS threads. Internal notes let staff coordinate before replying, so the customer always gets a consistent, informed response.' }, { title: 'Smart Automation + Human Touch', desc: 'Automated messages handle routine updates while your team steps in for complex questions. The system flags messages that need a human response so nothing falls through the cracks.' }].map(item => (
              <div key={item.title} className="bg-rd-cream rounded-2xl p-6">
                <h3 className="font-poppins font-semibold text-rd-dark mb-3">{item.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-10">All the Answers You're Looking For</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button className="w-full flex items-center justify-between px-6 py-4 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}<svg className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-5 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
