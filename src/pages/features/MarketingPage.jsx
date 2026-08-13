import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Custom Email Templates', desc: 'Create your own email templates using our WYSIWYG editor with your own logo and branding. Use Dynamic Tags to personalize emails at scale with Customer Name, Store Name, and more.' },
  { title: 'SMS Campaigns', desc: 'Send customers reminders for bill payments, special offers, and item pickups with automated SMS notifications targeting the right customers at the right time.' },
  { title: 'Reviews Campaign', desc: 'Use the marketing automation tool to create email campaigns that collect reviews on multiple sites. Target customers who got a device fixed, purchased one, or bought an accessory.' },
  { title: 'Send Follow-up Emails & SMS', desc: 'Thank your customers for their purchase, ask for feedback, offer them a discount on their next repair, and inform them about promotions — all automatically.' },
  { title: 'View Campaign Reports', desc: 'View open and click rates of your email campaign. See email addresses of customers and total emails bounced so you can continuously improve performance.' },
  { title: 'Gather Feedback on Repairs', desc: 'Get customer feedback on repairs, remind them to schedule their next appointment, or simply thank them. Trigger feedback requests automatically after ticket closure.' },
];

const faqs = [
  { q: 'How long are your contracts?', a: 'We offer both month-to-month and annual plans to give you the most flexibility. You can always upgrade, downgrade or add locations as your business grows.' },
  { q: 'I am a startup, do you have a cheaper plan for me?', a: "If you're a budding company looking to branch out, we've got the Essential plan for you. If you'd like more features, you can sign up for our Growth plan. RepairDesk offers plans that are highly affordable and pack the most utility for your business." },
  { q: 'What is your pricing for sending customized email and SMS alerts?', a: "Absolutely nothing. You can send emails and SMS alerts exactly how you want without any extra fees for the marketing automation tool." },
  { q: 'What kind of marketing campaigns can I create?', a: 'You can create follow-up campaigns on repair jobs, items sold, airtime sold, and campaign review requests. These campaigns have both email and SMS components and can be scheduled to go out immediately or after a set period.' },
];

export default function MarketingPage() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Marketing Automation Tool for Repair Shops</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">
            Attract new customers and drive repeat business from existing ones. Create offer campaigns for your most loyal customers and send repair status updates automatically via email.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Attract New Customers & Drive Repeat Business</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">Create offer campaigns for your most loyal customers. Save time and send repair status updates automatically via email and SMS.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-7 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-5 transition-colors">
                  <svg className="w-6 h-6 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
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
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Reviews Campaign</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Boost Your Online Presence With The Reviews Campaign</h2>
              <p className="text-gray-500 font-dm-sans text-lg mb-6">Use the marketing automation tool to create email campaigns to collect reviews on multiple sites. Target customers who have gotten a device fixed, purchased one, or bought any accessory.</p>
              <ul className="space-y-3">
                {['Get customer reviews on multiple platforms automatically', 'Target customers based on repair type or purchase', 'View campaign open and click rates in real time', 'Schedule campaigns for immediate or delayed delivery'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rd-teal flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></div>
                    <span className="text-gray-600 font-dm-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rd-dark rounded-2xl p-8 text-white">
              <div className="text-rd-lime text-4xl font-dm-serif mb-3">"</div>
              <p className="text-white/90 font-dm-sans leading-relaxed mb-6 italic">Jeff took full advantage of email &amp; SMS campaigns with RepairDesk and tripled his repeat customer rate in under 3 months. The automated review requests alone brought in 40+ new Google reviews.</p>
              <p className="font-poppins font-semibold text-white">Jeff</p>
              <p className="text-white/50 text-xs font-poppins">Repair Shop Owner, USA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Marketing Automation</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Generate New Business Even While You Sleep</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-2xl">Cut down on time spent on marketing with an automation tool that does the marketing for you. Touch base with existing customers, ask if they are satisfied with a repair, and offer discounts on products and services.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ title: 'Ticket Status Update Notifications', desc: 'Always keep customers updated about the status of their repair with automated emailing or text messaging.' }, { title: 'Automated Campaigns', desc: 'Boost sales and build customer trust with campaigns triggered by purchase events, repair completions, or time-based follow-ups.' }, { title: 'Personalization at Scale', desc: 'Use Dynamic Tags to personalize every email with Customer Name, Store Name, and repair details — all without manual effort.' }].map(item => (
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
