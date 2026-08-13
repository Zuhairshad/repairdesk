import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Repair Ticket Management', desc: 'Create tickets for cobbling and shoe maintenance jobs. Record shoe type, brand, repair type, and condition. Assign jobs to specific cobblers and track progress.' },
  { title: 'Materials & Parts Inventory', desc: 'Track soles, heels, leather, thread, dyes, and other materials. Get low stock alerts before you run dry mid-job. Print labels and barcodes for your products.' },
  { title: 'Customer Pickup Notifications', desc: 'Automatically notify customers via SMS or email when their shoes are ready for pickup. Reduce no-shows and eliminate the manual follow-up calls.' },
  { title: 'Integrated Payments', desc: 'Accept card, cash, and contactless payments at checkout. Send email invoices with a payment link for prepaid orders or mail-in repairs.' },
  { title: 'Customer Profiles', desc: 'Store customer shoe size, preferences, past repairs, and contact info. Build relationships and deliver personalized service that keeps customers coming back.' },
  { title: 'Business Reporting', desc: 'Track revenue per service type, most popular repairs, and employee performance. Make pricing decisions based on real data, not guesswork.' },
];

export default function ShoeRepairPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Shoe Repair Shop Software</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Streamline Cobbling and Shoe Maintenance Jobs</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Manage materials, track repairs, and notify customers on pickup — all in one platform built for shoe repair shops of every size.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Stop Losing Track of Jobs and Materials</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">Every cobbling job tracked from drop-off to pickup. Every material accounted for. Every customer notified automatically. That's RepairDesk for shoe repair shops.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>
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
