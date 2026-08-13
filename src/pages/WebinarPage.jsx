import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const webinars = [
  {
    title: 'Getting Started with RepairDesk: A Complete Walkthrough',
    date: 'Sep 10, 2026 — 2:00 PM EST',
    description: 'A live walkthrough of RepairDesk for new users. Learn how to set up your store, create your first repair ticket, configure your POS, and start selling in under an hour.',
    type: 'upcoming',
  },
  {
    title: 'Advanced Inventory Management for Repair Shops',
    date: 'Sep 24, 2026 — 2:00 PM EST',
    description: 'Go beyond the basics. Learn how to set reorder points, manage serialized parts, run inventory valuation reports, and optimize stock across multiple locations.',
    type: 'upcoming',
  },
  {
    title: 'Marketing Automation: Turn One-Time Repairs Into Repeat Customers',
    date: 'Oct 8, 2026 — 2:00 PM EST',
    description: 'Discover how to set up automated follow-up campaigns, Google review requests, and loyalty programs that bring customers back without manual outreach.',
    type: 'upcoming',
  },
  {
    title: 'Multi-Location Setup: Scaling Your Repair Business',
    date: 'Jul 15, 2026',
    description: 'Watch the recording of our session on managing multiple repair shop locations. Covers centralized inventory, cross-store reporting, and role-based employee access.',
    type: 'recording',
  },
  {
    title: 'Repair Ticket Workflows: From Intake to Pickup',
    date: 'Jun 20, 2026',
    description: 'A deep dive into configuring ticket statuses, automating customer notifications, and building custom workflows that match the way your bench operates.',
    type: 'recording',
  },
  {
    title: 'Integrations Masterclass: Connecting RepairDesk to Your Stack',
    date: 'May 30, 2026',
    description: 'Learn how to connect RepairDesk with QuickBooks, Shopify, WooCommerce, Stripe, Square, and Zapier. Includes live setup demos and Q&A.',
    type: 'recording',
  },
];

export default function WebinarPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-20 md:py-28 px-6">
        <div className="container-main max-w-4xl text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
            Webinars
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            RepairDesk Webinars
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8 max-w-2xl mx-auto">
            Expert-led sessions to help you get the most out of RepairDesk. Register for upcoming events or watch past recordings at your own pace.
          </p>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Upcoming</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-10">
            Upcoming Webinars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.filter(w => w.type === 'upcoming').map((webinar, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-rd-teal/30 hover:shadow-md transition-all flex flex-col">
                {/* Calendar icon */}
                <div className="w-12 h-12 rounded-2xl bg-rd-teal/10 text-rd-teal flex items-center justify-center mb-4 group-hover:bg-rd-teal group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <span className="text-rd-teal font-poppins font-semibold text-xs uppercase tracking-wide mb-2">{webinar.date}</span>
                <h3 className="font-poppins font-bold text-rd-dark text-lg mb-3 leading-snug">{webinar.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-5 flex-1">{webinar.description}</p>
                <a href="#" className="btn-primary text-center py-3 text-sm">Register Now</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Recordings */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">On Demand</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-10">
            Watch Past Recordings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.filter(w => w.type === 'recording').map((webinar, i) => (
              <div key={i} className="group bg-white rounded-2xl p-6 hover:shadow-md transition-all flex flex-col">
                {/* Play icon */}
                <div className="w-12 h-12 rounded-2xl bg-rd-dark/10 text-rd-dark flex items-center justify-center mb-4 group-hover:bg-rd-teal group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                </div>
                <span className="text-gray-400 font-poppins text-xs uppercase tracking-wide mb-2">{webinar.date}</span>
                <h3 className="font-poppins font-bold text-rd-dark text-lg mb-3 leading-snug">{webinar.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-5 flex-1">{webinar.description}</p>
                <a href="#" className="border border-rd-teal text-rd-teal px-6 py-3 rounded-full font-poppins font-semibold text-sm text-center hover:bg-rd-teal hover:text-white transition-colors">
                  Watch Recording
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rd-dark text-white py-16 px-6">
        <div className="container-main text-center max-w-2xl">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-4">Want a Private Demo Instead?</h2>
          <p className="text-white/70 font-dm-sans text-lg mb-8">
            If you prefer a one-on-one walkthrough tailored to your shop, book a free demo with our team.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-3.5">Book a Free Demo</Link>
        </div>
      </section>
    </PageLayout>
  );
}
