import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Repair Ticket Management', desc: 'Create tickets for drills, saws, grinders, and other power tools. Tag tools with serial numbers, record pre-repair condition, and assign jobs to technicians.' },
  { title: 'Inventory Management', desc: 'Track brushes, bearings, blades, and other spare parts. Get low stock alerts before you run out mid-job. Import/export your product catalog and print barcodes.' },
  { title: 'Warranty Claim Tracking', desc: 'Keep records of warranty status per tool, document warranty claims, and track authorization numbers from manufacturers directly on the repair ticket.' },
  { title: 'Service History', desc: "Maintain a complete service history for each customer's tools. Know what was repaired before, what parts were used, and when the next service is due." },
  { title: 'Integrated Payments', desc: 'Accept card, cash, contactless, and online payments. Send invoices with a payment link for customers who want to pay remotely before pickup.' },
  { title: 'Customer Notifications', desc: 'Send automated SMS and email updates when a repair status changes. Keep customers in the loop without spending time on phone calls.' },
  { title: 'Quotes & Estimates', desc: 'Send repair estimates before starting work. Customers can accept or decline electronically, giving you a clear authorization trail for every job.' },
  { title: 'Business Reporting', desc: 'See your most repaired brands, most common failures, and most profitable services. Use real data to stock the right parts and price your services accurately.' },
];

export default function PowerToolsPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Power Tools Repair Shop Software</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Built for Drills, Saws, and Grinder Repair Shops</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Tag tools, track service history, and manage warranty claims. RepairDesk keeps every power tool repair job organized from intake to pickup.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Everything Your Power Tools Repair Shop Needs</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">From the first diagnostic to the final invoice — manage every job efficiently with a platform built for the way power tool shops actually work.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
