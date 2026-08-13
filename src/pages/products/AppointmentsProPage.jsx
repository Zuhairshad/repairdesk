import React from 'react';
import PageLayout from '../../components/PageLayout';

const features = [
  {
    title: 'Online Booking Widget',
    description: 'Embed a customizable booking widget on your website. Customers can select a device, describe the issue, and book a time slot — 24/7 without calling your shop.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Google Calendar Sync',
    description: 'All appointments sync automatically with Google Calendar. Your technicians always see their daily schedule — on any device, anywhere.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'SMS & Email Reminders',
    description: 'Automated appointment reminders sent by SMS and email significantly reduce no-shows. Customers can confirm, reschedule, or cancel with a single tap.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: 'Staff Scheduling Calendar',
    description: 'Manage your team\'s availability, time off, and overlapping appointments on a visual calendar built into RepairDesk.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Walk-In Queue Management',
    description: 'Handle drop-ins alongside booked appointments. Add walk-ins to a live queue so your team always knows who is next without double-booking.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    title: 'Customer Self-Reschedule & Cancel',
    description: 'Give customers the freedom to reschedule or cancel their own appointment via a link — no phone call needed, no back-and-forth for your staff.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '40%', label: 'Reduction in no-shows' },
  { value: '24/7', label: 'Bookings without staff' },
  { value: '2 min', label: 'Widget setup time' },
  { value: '100%', label: 'Calendar sync accuracy' },
];

const faqs = [
  {
    q: 'How does the online booking widget work?',
    a: 'You embed a small piece of code on your website. Customers click "Book a Repair", choose their device and issue, select a time slot from your live availability, and receive an instant confirmation SMS and email.',
  },
  {
    q: 'Will appointments automatically become repair tickets?',
    a: 'Yes. When a booked appointment is checked in, Appointments Pro creates a repair ticket in RepairDesk automatically — no manual data entry required.',
  },
  {
    q: 'Is Appointments Pro included in my plan?',
    a: 'Appointments Pro is available as an add-on for Essential and Growth plans and is included in the Advanced plan. Start with a free trial from your RepairDesk dashboard.',
  },
];

export default function AppointmentsProPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 md:py-32">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-block bg-rd-lime text-rd-dark text-sm font-semibold font-poppins px-4 py-1.5 rounded-full">
                Appointments Pro
              </span>
              <span className="inline-block bg-white text-rd-teal text-xs font-bold font-poppins px-3 py-1.5 rounded-full uppercase tracking-wide">
                NEW
              </span>
            </div>
            <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Appointments Pro
            </h1>
            <p className="font-dm-sans text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Let customers book repair appointments from your website, 24/7. Reduce no-shows with automated reminders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary text-base px-8 py-3.5">
                Start Free Trial
              </a>
              <a href="#" className="border border-white/40 hover:border-white text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-full transition-colors duration-200">
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-rd-cream py-14 border-b border-gray-200">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="font-dm-serif text-4xl md:text-5xl text-rd-teal mb-2">{stat.value}</div>
                <div className="font-dm-sans text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-4">
              Fill your calendar without lifting a finger
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              From the first booking click to the post-repair review, Appointments Pro keeps every step automated, organized, and on-brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-rd-cream rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-5 group-hover:bg-rd-teal group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{feature.title}</h3>
                <p className="font-dm-sans text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-rd-cream">
        <div className="container-main">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-4">
              Booked to repaired in three steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Customer Books Online', body: 'Customers visit your site and select a time slot. Instant confirmation is sent by SMS and email.' },
              { step: '02', title: 'Auto-Reminder Sent', body: 'RepairDesk sends reminders 24 hours before. Customers can confirm, reschedule, or cancel with one click.' },
              { step: '03', title: 'Ticket Created on Arrival', body: 'When the customer checks in, a repair ticket is created automatically. No duplicate data entry.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="font-dm-serif text-5xl text-rd-teal/20 mb-3">{item.step}</div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{item.title}</h3>
                <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-rd-dark to-rd-teal">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center text-white">
            <svg className="w-10 h-10 text-rd-lime mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-dm-sans text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
              "No-shows dropped by almost half in the first month. The automatic reminders do the chasing so we don't have to. Our technicians love having a clean, organized calendar every morning."
            </p>
            <div>
              <div className="font-poppins font-semibold text-rd-lime">Sandra Okafor</div>
              <div className="font-dm-sans text-white/60 text-sm mt-1">Manager, PhoneFix Pro — Toronto, Canada</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-rd-cream">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{faq.q}</h3>
                  <p className="font-dm-sans text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
