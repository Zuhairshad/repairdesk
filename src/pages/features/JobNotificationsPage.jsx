import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Real-Time Push Notifications', desc: 'Get instant push notifications on your desktop or mobile device the moment a ticket is created, updated, or completed. Never miss a critical repair status change again.' },
  { title: 'Email Alerts for Ticket Updates', desc: 'Receive detailed email notifications for every ticket event — new assignments, status changes, parts arrivals, and customer messages. Configure which events trigger alerts per role.' },
  { title: 'Customer Auto-Notifications', desc: 'Automatically notify customers when their repair moves to a new stage. From intake confirmation to ready-for-pickup alerts, keep customers informed without any manual effort.' },
  { title: 'Internal Team Alerts', desc: 'Route notifications to the right technician or manager based on ticket type, priority, or location. Escalation alerts ensure urgent repairs get immediate attention from senior staff.' },
  { title: 'Custom Notification Triggers', desc: 'Define your own notification rules based on any ticket event or condition. Trigger alerts when a repair exceeds its estimated time, when parts arrive, or when a high-value device is checked in.' },
  { title: 'Notification History Log', desc: 'Access a complete log of every notification sent — who received it, when, and through which channel. Audit notification delivery and troubleshoot communication gaps with full transparency.' },
];

const faqs = [
  { q: 'Can I choose which notifications I receive?', a: 'Yes. Every user can configure their own notification preferences from their profile settings. Choose which events trigger notifications, select your preferred channels (push, email, or both), and set quiet hours when notifications should be silenced. Managers can also set organization-wide defaults.' },
  { q: 'Do customers receive notifications automatically?', a: 'Customer notifications are fully configurable. You can enable automatic notifications for any ticket status change — new ticket created, in progress, waiting for parts, ready for pickup, and completed. Each notification uses customizable templates so the messaging matches your brand voice.' },
  { q: 'Can I set up escalation alerts for overdue repairs?', a: 'Absolutely. You can define escalation rules based on repair duration, priority level, or ticket age. If a repair exceeds its estimated completion time, RepairDesk can automatically notify the assigned technician, their manager, or both. Multi-tier escalation ensures nothing slips through the cracks.' },
  { q: 'Are notifications available on mobile devices?', a: 'Yes. Push notifications work on both desktop and mobile through the RepairDesk app. You can also receive email alerts and SMS notifications on any device. The mobile app supports badge counts and notification grouping so you can triage quickly without being overwhelmed.' },
];

export default function JobNotificationsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Job Notifications — Stay on Top of Every Repair</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">
            Get real-time alerts for every repair ticket event. Notify your team instantly when tickets are assigned, updated, or escalated — and keep customers informed automatically at every stage.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Never Miss a Beat on Any Repair Job</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">RepairDesk notifications keep your entire team aligned and your customers informed. Configure alerts by role, channel, and event type to match how your shop operates.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-7 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-5 transition-colors">
                  <svg className="w-6 h-6 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
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
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Customer Communication</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Keep Customers Informed Without Lifting a Finger</h2>
              <p className="text-gray-500 font-dm-sans text-lg mb-6">Automated customer notifications eliminate the most time-consuming part of running a repair shop — fielding status calls. Customers get updates the moment something changes, so they never need to wonder.</p>
              <ul className="space-y-3">
                {['Automatic alerts when repair status changes', 'Ready-for-pickup notifications via SMS and email', 'Customizable message templates with Dynamic Tags', 'Branded notifications that match your shop identity'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rd-teal flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></div>
                    <span className="text-gray-600 font-dm-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rd-dark rounded-2xl p-8 text-white">
              <div className="text-rd-lime text-4xl font-dm-serif mb-3">"</div>
              <p className="text-white/90 font-dm-sans leading-relaxed mb-6 italic">Before RepairDesk, my front desk spent half their day answering 'Is my phone ready yet?' calls. Now customers get a text the second we mark it complete. We've cut inbound status calls by over 80%.</p>
              <p className="font-poppins font-semibold text-white">David R.</p>
              <p className="text-white/50 text-xs font-poppins">Cell Phone Repair Shop Owner, Florida</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Smart Routing</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">The Right Alert to the Right Person at the Right Time</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-2xl">Not every notification needs to go to everyone. RepairDesk lets you route alerts by role, priority, and event type so your team stays focused instead of overwhelmed.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ title: 'Role-Based Routing', desc: 'Technicians see ticket assignments and parts updates. Managers get escalation alerts and daily summaries. Front desk staff receive walk-in and pickup notifications. Each role sees only what matters to them.' }, { title: 'Priority Escalation', desc: 'Define multi-tier escalation paths for high-priority repairs. If a VIP repair sits idle for too long, the system automatically escalates from technician to manager to owner until someone takes action.' }, { title: 'Quiet Hours & Batching', desc: 'Set quiet hours so off-duty staff are not disturbed. Non-urgent notifications batch into a daily or shift-start digest, while critical alerts always break through immediately.' }].map(item => (
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
