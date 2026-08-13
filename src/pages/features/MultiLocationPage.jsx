import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Centralized Dashboard', desc: 'View all your store locations in one place. Compare performance, track sales, and manage operations across every branch from a single screen.' },
  { title: 'Location-Based Inventory', desc: 'Track stock at each location separately. Transfer inventory between stores and never oversell from any branch. Stay in sync across the board.' },
  { title: 'Unified Customer Database', desc: 'Your customer profiles, repair history, and loyalty points are shared across all locations for seamless service. No siloed data.' },
  { title: 'Per-Location Reporting', desc: 'Get detailed reports for each store location so you can identify top performers and underperforming branches — then act on it.' },
  { title: 'Consistent Workflows', desc: 'Set repair ticket templates, pricing, and policies that apply across all your locations — no manual syncing required. One update, everywhere.' },
  { title: 'Employee Management Across Locations', desc: 'Assign employees to specific stores, track their hours per location, and manage payroll for every branch from one place.' },
  { title: 'Multi-Store Access Control', desc: 'Set which employees can access which locations. Control data visibility by role and branch to keep sensitive data protected.' },
  { title: 'Franchise-Ready Setup', desc: 'Perfect for franchise owners who need each location to operate independently while staying connected to HQ with full visibility.' },
];

export default function MultiLocationPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Multi-Location Management</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Manage All Your Repair Shop Locations From One Dashboard</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Set consistent processes, track performance across every branch, and grow without losing control. RepairDesk scales with your business.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Open Your Second Store Without Losing Control of Your First</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">Everything you need to run multiple repair shop locations from a single platform — inventory, staff, customers, reporting, and more.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rd-dark text-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl text-center mb-12">Built for Growing Repair Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { from: '1 store', to: '10+ locations', label: 'RepairDesk scales with your growth' },
              { from: 'Multiple spreadsheets', to: '1 dashboard', label: 'Unified reporting across all branches' },
              { from: 'Per-store software', to: 'One platform', label: 'Single subscription for all locations' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-white/50 font-dm-sans text-sm line-through">{s.from}</span>
                  <svg className="w-5 h-5 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  <span className="text-rd-lime font-poppins font-semibold text-sm">{s.to}</span>
                </div>
                <p className="text-white/60 font-dm-sans text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
