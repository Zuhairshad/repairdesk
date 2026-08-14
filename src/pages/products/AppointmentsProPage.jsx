import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

/* ---------- Small inline icon set ---------- */

const IconCalendar = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconBell = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const IconSync = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const IconSliders = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h6m4 0h6M4 12h10m4 0h2M4 18h2m4 0h10" />
    <circle cx="12" cy="6" r="2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" />
    <circle cx="8" cy="18" r="2" fill="currentColor" stroke="none" />
  </svg>
);

const IconChat = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

const IconCheck = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconChevron = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const IconClock = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
  </svg>
);

const IconDesktop = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v10H4V5zM9 20h6M12 15v5" />
  </svg>
);

const IconPhone = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <rect x="7" y="2.5" width="10" height="19" rx="2" />
    <path strokeLinecap="round" d="M11 19h2" />
  </svg>
);

const IconTicket = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v3a2 2 0 010 4v3a2 2 0 002 2h2m6-14h2a2 2 0 012 2v3a2 2 0 000 4v3a2 2 0 01-2 2h-2M9 5v14" strokeDasharray="2 2" />
  </svg>
);

const IconQuote = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

/* ---------- Static content ---------- */

const abcSteps = [
  {
    letter: 'A',
    title: 'Categories, Auto-Imported',
    body: 'Your repair categories are pulled straight from RepairHub — nothing to rebuild.',
  },
  {
    letter: 'B',
    title: 'Brands & Models, Ready to Go',
    body: 'Every brand and device model you already sell repairs for shows up on the widget instantly.',
  },
  {
    letter: 'C',
    title: 'Issues & Pricing, In Sync',
    body: 'Issues and their prices match your RepairHub account exactly, so quotes are always accurate.',
  },
];

const personalizationToggles = [
  { label: 'Accept Appointments', on: true },
  { label: 'Accept Quote Requests', on: true },
  { label: 'Show Pricing on Widget', on: false },
  { label: 'Exclude Select Brands / Models', on: true },
];

const inboxMessages = [
  { name: 'Michael Ross', snippet: 'Can I get a quote for a cracked iPhone 15 screen?', time: '2m', unread: true },
  { name: 'Amara Chen', snippet: 'Booked a slot for tomorrow at 11:30 AM — see you then!', time: '18m', unread: true },
  { name: 'Diego Fernandez', snippet: 'Is the battery replacement still available today?', time: '1h', unread: false },
];

const faqs = [
  {
    q: 'How do I install Appointments Pro in RepairHub?',
    a: 'Open RepairHub and click the "+" icon on the right side. Choose "Appointments Pro" from the list of applications and click "Install." The "Appointments Pro" icon will then appear on the right side.',
  },
  {
    q: 'Can I get a free trial of Appointments Pro?',
    a: "By filling out the form above, you can get a 7-day free trial to RepairHub Appointments Pro. Once you're happy with the experience, you can enable a subscription from the Billing Module anytime.",
  },
  {
    q: 'How much does Appointments Pro cost?',
    a: 'connect-link',
  },
  {
    q: 'How do I filter Appointments Pro messages in Connect?',
    a: 'Open Connect, go to the messages section, and use the "All Sources" filter to select "Appointments Pro." Only messages and leads from Appointments Pro will be shown.',
  },
  {
    q: 'How do I set up email and SMS templates in Appointments Pro?',
    a: 'Click on "Notifications Configurations" in the left menu. Create and customize templates for different scenarios like Quote Requests, Quotes with No Price, and Appointments. Then, click the Save button when you’re finished.',
  },
  {
    q: 'How can I view leads in Appointments Pro?',
    a: 'When a customer requests a quote or books an appointment, a lead appears on the "Leads and Appointments" page with their name and contact information. If Sync with RepairHub is enabled, you can also view the lead in RepairHub’s Leads section, where you can send messages or start repair tickets.',
  },
];

const weekdayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function AppointmentsProPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', storeName: '',
    utm_source: '', utm_medium: '', utm_content: '', utm_campaign: '', utm_dump: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      {/* ============ HERO ============ */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-rd-lime text-rd-dark text-sm font-semibold font-poppins px-4 py-1.5 rounded-full mb-6">
                Appointments Pro
              </span>
              <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-tight mb-6">
                Grab every opportunity by turning website visitors into quote requests and booked appointments.
              </h1>
              <p className="font-dm-sans text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                Provide accurate repair quotes around the clock.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#signup" className="btn-primary text-base px-8 py-3.5 text-center">
                  Start My 7-Day Free Trial
                </a>
              </div>
            </div>

            {/* Booking widget mockup */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -top-5 -left-5 z-20 bg-white text-rd-dark rounded-xl shadow-xl px-4 py-2.5 flex items-center gap-2 font-poppins text-xs font-semibold animate-pulse">
                <IconBell className="w-4 h-4 text-rd-teal" />
                New Quote Request
              </div>
              <div className="bg-white rounded-3xl shadow-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-poppins font-semibold text-rd-dark">August 2026</span>
                  <div className="flex gap-1 text-gray-400">
                    <IconChevron className="w-4 h-4 rotate-90" />
                    <IconChevron className="w-4 h-4 -rotate-90" />
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-dm-sans text-gray-400 mb-2">
                  {weekdayLabels.map((d, i) => (
                    <span key={`${d}-${i}`}>{d}</span>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm font-dm-sans text-rd-dark mb-5">
                  {Array.from({ length: 14 }, (_, i) => i + 9).map((day) => (
                    <span
                      key={day}
                      className={
                        day === 13
                          ? 'bg-rd-teal text-white rounded-full py-1.5 font-semibold'
                          : 'py-1.5 text-gray-600'
                      }
                    >
                      {day}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-rd-cream rounded-xl px-4 py-2.5">
                    <span className="font-dm-sans text-sm text-rd-dark">9:00 AM</span>
                    <span className="text-xs font-poppins font-semibold text-rd-teal">Available</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-100 rounded-xl px-4 py-2.5 opacity-60">
                    <span className="font-dm-sans text-sm text-gray-500 line-through">11:30 AM</span>
                    <span className="text-xs font-poppins font-semibold text-gray-400">Booked</span>
                  </div>
                  <div className="flex items-center justify-between bg-rd-teal/10 rounded-xl px-4 py-2.5 ring-2 ring-rd-teal">
                    <span className="font-dm-sans text-sm text-rd-dark font-semibold">2:00 PM</span>
                    <span className="text-xs font-poppins font-semibold text-rd-teal">Selected</span>
                  </div>
                </div>
                <button className="btn-primary w-full mt-5 py-3 text-sm">Book Appointment</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BREEZE SETUP ============ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block bg-rd-teal/10 text-rd-teal text-xs font-bold font-poppins px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">
              Breeze Setup
            </span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-5">
              Getting Started is as Easy as ABC
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
              Getting started is a breeze with Appointments Pro. It automatically imports your repair categories, brands, models, and issues, along with their prices, precisely as configured in your RepairHub account. This allows you to get started with Appointments Pro RIGHT AWAY!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {abcSteps.map((step) => (
              <div key={step.letter} className="bg-rd-cream rounded-2xl p-8 text-center relative">
                <div className="w-14 h-14 rounded-2xl bg-rd-teal text-white font-dm-serif text-2xl flex items-center justify-center mx-auto mb-5">
                  {step.letter}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{step.title}</h3>
                <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SIMPLIFIED APPOINTMENTS ============ */}
      <section className="py-20 md:py-24 bg-rd-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-sm p-7">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-rd-teal/10 text-rd-teal flex items-center justify-center">
                    <IconClock className="w-5 h-5" />
                  </div>
                  <span className="font-poppins font-semibold text-rd-dark">Booking Rules</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="font-dm-sans text-sm text-gray-600">Break Time</span>
                    <span className="font-poppins text-sm font-semibold text-rd-dark">12:00 PM – 1:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <span className="font-dm-sans text-sm text-gray-600">Slot Duration</span>
                    <span className="font-poppins text-sm font-semibold text-rd-dark">30 minutes</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-dm-sans text-sm text-gray-600">Appointments per Slot</span>
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-rd-cream flex items-center justify-center font-poppins text-sm text-rd-dark">−</span>
                      <span className="font-poppins text-sm font-semibold text-rd-dark">3</span>
                      <span className="w-7 h-7 rounded-full bg-rd-teal text-white flex items-center justify-center font-poppins text-sm">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-rd-teal/10 text-rd-teal text-xs font-bold font-poppins px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">
                Simplified Appointments
              </span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-5">
                Always Notified, Never Confused!
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
                Let Your Customers Book with Ease! Customize break times, define slot durations, and set appointment limits per slot to offer a flexible booking experience. Tailor your schedule to meet customer needs effortlessly!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SEAMLESS INTEGRATION ============ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-rd-teal/10 text-rd-teal text-xs font-bold font-poppins px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">
                Seamless Integration
              </span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-5">
                Seamless Integration with RepairHub
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
                Turn Leads into Action with Ease! Appointments Pro syncs the lead information with RepairHub, allowing you to take instant action directly from RepairHub. Whether it&rsquo;s converting a lead into a ticket or sending a quick message, &ndash; It&rsquo;s just a click away!
              </p>
            </div>
            <div className="bg-rd-cream rounded-2xl p-8">
              <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 shadow-sm mb-4">
                <div className="w-10 h-10 rounded-full bg-rd-teal/10 text-rd-teal flex items-center justify-center font-poppins font-semibold shrink-0">
                  JD
                </div>
                <div className="flex-1">
                  <div className="font-poppins font-semibold text-rd-dark text-sm">Jamie Diaz</div>
                  <div className="font-dm-sans text-xs text-gray-500">Requested a quote &middot; iPhone 14 Pro</div>
                </div>
                <span className="text-[10px] font-poppins font-bold text-rd-teal uppercase bg-rd-teal/10 px-2.5 py-1 rounded-full">Lead</span>
              </div>
              <div className="flex items-center justify-center my-3 text-rd-teal">
                <IconSync className="w-5 h-5" />
              </div>
              <div className="flex gap-3">
                <div className="flex-1 flex items-center gap-2 justify-center bg-white rounded-xl px-4 py-3 shadow-sm">
                  <IconTicket className="w-4 h-4 text-rd-teal" />
                  <span className="font-poppins text-xs font-semibold text-rd-dark">Convert to Ticket</span>
                </div>
                <div className="flex-1 flex items-center gap-2 justify-center bg-white rounded-xl px-4 py-3 shadow-sm">
                  <IconChat className="w-4 h-4 text-rd-teal" />
                  <span className="font-poppins text-xs font-semibold text-rd-dark">Send Message</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PERSONALIZATION ============ */}
      <section className="py-20 md:py-24 bg-rd-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1 bg-white rounded-2xl shadow-sm p-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 text-rd-teal flex items-center justify-center">
                  <IconSliders className="w-5 h-5" />
                </div>
                <span className="font-poppins font-semibold text-rd-dark">Widget Settings</span>
              </div>
              <div className="space-y-5">
                {personalizationToggles.map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="font-dm-sans text-sm text-gray-600">{item.label}</span>
                    <span
                      className={`inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        item.on ? 'bg-rd-teal' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
                          item.on ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-rd-teal/10 text-rd-teal text-xs font-bold font-poppins px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">
                Personalization
              </span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-5">
                Your Widget, Your Way!
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
                Personalize Your Experience with Appointments Pro! Tailor it to your needs by accepting both appointments and quotes or just one. Display prices on your widget or keep them hidden, and easily exclude specific brands or models you don&rsquo;t want to show on the Widget. Whatever your preference, we&rsquo;ve got you covered!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONNECT ============ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-rd-teal/10 text-rd-teal text-xs font-bold font-poppins px-4 py-1.5 rounded-full uppercase tracking-wide mb-4">
                Connect
              </span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-5">
                Respond to messages right within Connect
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
                Effortlessly filter and manage messages from your leads in Connect, ensuring you always stay on top of your follow-ups and never miss the message from your potential customers.
              </p>
            </div>
            <div className="bg-rd-cream rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <span className="font-poppins font-semibold text-rd-dark text-sm">Messages</span>
                <span className="flex items-center gap-1.5 bg-white rounded-full px-3.5 py-1.5 text-xs font-poppins font-semibold text-rd-teal shadow-sm">
                  All Sources: Appointments Pro
                  <IconChevron className="w-3 h-3" />
                </span>
              </div>
              <div className="space-y-2.5">
                {inboxMessages.map((m) => (
                  <div key={m.name} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-rd-teal/10 text-rd-teal flex items-center justify-center font-poppins text-xs font-semibold shrink-0">
                      {m.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-poppins font-semibold text-rd-dark text-sm">{m.name}</span>
                        <span className="font-dm-sans text-[11px] text-gray-400 shrink-0">{m.time}</span>
                      </div>
                      <p className="font-dm-sans text-xs text-gray-500 truncate">{m.snippet}</p>
                    </div>
                    {m.unread && <span className="w-2 h-2 rounded-full bg-rd-teal mt-2 shrink-0" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SEE IT IN ACTION ============ */}
      <section className="py-20 md:py-24 bg-rd-cream overflow-hidden">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-5">
              See it in Action!
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
              The stunning, intuitive design is crafted specifically for repair stores. It is designed with your customers in mind, boosting conversions and generating more inquiries. Fully responsive on every device, it guarantees an enjoyable experience for your customers.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
            {/* Desktop frame */}
            <div className="w-full max-w-md">
              <div className="flex items-center gap-2 bg-rd-dark rounded-t-xl px-4 py-2.5">
                <IconDesktop className="w-4 h-4 text-white/60" />
                <span className="font-dm-sans text-[11px] text-white/60">yourshop.com/book</span>
              </div>
              <div className="bg-white rounded-b-xl shadow-xl p-6">
                <div className="font-poppins font-semibold text-rd-dark mb-4">Book a Repair</div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {['Phone', 'Tablet', 'Laptop'].map((d, i) => (
                    <div
                      key={d}
                      className={`text-center rounded-lg py-2.5 text-xs font-poppins font-medium ${
                        i === 0 ? 'bg-rd-teal text-white' : 'bg-rd-cream text-rd-dark'
                      }`}
                    >
                      {d}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {['9:00', '10:30', '1:00', '3:30'].map((t, i) => (
                    <div
                      key={t}
                      className={`text-center rounded-lg py-2 text-[11px] font-dm-sans ${
                        i === 2 ? 'bg-rd-teal text-white' : 'border border-gray-200 text-gray-600'
                      }`}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile frame */}
            <div className="w-40 shrink-0 -mt-4 md:mt-0 md:-ml-6">
              <div className="bg-rd-dark rounded-[1.75rem] p-2 shadow-xl">
                <div className="bg-white rounded-[1.4rem] overflow-hidden">
                  <div className="flex items-center justify-center py-2">
                    <IconPhone className="w-3 h-3 text-gray-300" />
                  </div>
                  <div className="px-3 pb-4">
                    <div className="font-poppins font-semibold text-rd-dark text-[11px] mb-3">Book a Repair</div>
                    <div className="space-y-1.5">
                      <div className="bg-rd-teal text-white rounded-lg py-1.5 text-center text-[10px] font-poppins">Get a Quote</div>
                      <div className="bg-rd-cream text-rd-dark rounded-lg py-1.5 text-center text-[10px] font-poppins">Book Appointment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="py-20 bg-gradient-to-br from-rd-dark to-rd-teal">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center text-white">
            <IconQuote className="w-10 h-10 text-rd-lime mx-auto mb-6" />
            <p className="font-dm-sans text-xl md:text-2xl leading-relaxed mb-4 text-white/90">
              &ldquo;Appointments Pro has been great for my store in generating quick leads, and we are using it across all of our stores.&rdquo;
            </p>
            <p className="font-dm-sans text-lg md:text-xl leading-relaxed mb-8 text-white/80">
              &ldquo;Editing and making changes in the widget is very easy because it is directly synced with the Repair Desk account. The recent improvements have significantly enhanced the user experience for Appointments Pro, making it a must-have for every store.&rdquo;
            </p>
            <div>
              <div className="font-poppins font-semibold text-rd-lime">Rajesh Patel</div>
              <div className="font-dm-sans text-white/60 text-sm mt-1">GR Phones</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SIGN UP FORM ============ */}
      <section id="signup" className="py-20 md:py-24 bg-white">
        <div className="container-main">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-3">
                Sign Up for a <span className="text-rd-teal">Free Trial</span>
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg">
                Fill out the form below and our team will be in touch
              </p>
            </div>

            {submitted ? (
              <div className="bg-rd-cream rounded-2xl p-10 text-center">
                <div className="w-14 h-14 bg-rd-teal text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconCheck className="w-6 h-6" />
                </div>
                <p className="font-poppins font-semibold text-rd-dark text-lg">Thanks! Our team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-rd-cream rounded-2xl p-8 space-y-4">
                <input type="hidden" name="utm_source" value={form.utm_source} onChange={handleChange} />
                <input type="hidden" name="utm_medium" value={form.utm_medium} onChange={handleChange} />
                <input type="hidden" name="utm_content" value={form.utm_content} onChange={handleChange} />
                <input type="hidden" name="utm_campaign" value={form.utm_campaign} onChange={handleChange} />
                <input type="hidden" name="utm_dump" value={form.utm_dump} onChange={handleChange} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 font-dm-sans text-sm text-rd-dark focus:border-rd-teal focus:ring-1 focus:ring-rd-teal outline-none transition-colors"
                  />
                  <input
                    type="text"
                    name="storeName"
                    placeholder="Store Name *"
                    value={form.storeName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 font-dm-sans text-sm text-rd-dark focus:border-rd-teal focus:ring-1 focus:ring-rd-teal outline-none transition-colors"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 font-dm-sans text-sm text-rd-dark focus:border-rd-teal focus:ring-1 focus:ring-rd-teal outline-none transition-colors"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 font-dm-sans text-sm text-rd-dark focus:border-rd-teal focus:ring-1 focus:ring-rd-teal outline-none transition-colors"
                />
                <button type="submit" className="btn-primary w-full py-3.5 text-base">
                  Start My 7-Day Free Trial
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-20 bg-rd-cream">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-12 text-center">
              All the Answers You&rsquo;re Looking For
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={faq.q} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 text-left px-7 py-5"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full bg-rd-teal/10 text-rd-teal flex items-center justify-center shrink-0">
                          <IconCalendar className="w-4 h-4" />
                        </span>
                        <span className="font-poppins font-semibold text-rd-dark text-base md:text-lg">{faq.q}</span>
                      </div>
                      <IconChevron className={`w-5 h-5 text-rd-teal shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-7 pb-6 pl-[4.25rem]">
                        {faq.a === 'connect-link' ? (
                          <p className="font-dm-sans text-gray-600 leading-relaxed">
                            Appointments Pro is available for FREE when you purchase{' '}
                            <Link to="/products/connect" className="text-rd-teal font-semibold hover:underline">
                              RepairHub Connect
                            </Link>
                            .
                          </p>
                        ) : (
                          <p className="font-dm-sans text-gray-600 leading-relaxed">{faq.a}</p>
                        )}
                      </div>
                    )}
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
