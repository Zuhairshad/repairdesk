import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Jewelry Inventory Management', desc: 'Track your jewelry inventory with serialized items, purchase orders, and GRNs. Transfer stock between stores, perform inventory counts, and get low stock alerts automatically.' },
  { title: 'Integrated Payments', desc: 'Accept debit, credit, contactless, online or digital wallet payments. Track partial payments and overdue invoices, and send email invoices with a payment link.' },
  { title: 'Appointment Scheduling', desc: 'Convert website visitors to customers with online appointment booking. Schedule, reschedule, and track appointments in real time with automated reminders and notifications.' },
  { title: 'Point of Sale', desc: 'Sell jewelry repair services, accessories, and retail items — all from a single POS screen. Generate and print invoices, collect payments, and process customers fast.' },
  { title: 'Customer Notifications', desc: 'Send automated SMS and email updates, reminders, and repair status notifications. Keep customers informed at every step without picking up the phone.' },
  { title: 'Repair Ticket Management', desc: 'Create tickets for jewelry repairs with custom fields for item descriptions, material, appraisal notes, and pre-repair condition. Get customer signatures digitally.' },
  { title: 'Employee Management', desc: 'Assign jobs to specific technicians, track working hours, set roles and permissions, and monitor productivity. See sales and repairs completed by each employee.' },
  { title: 'Business Reporting', desc: 'Track revenue, parts costs, and service performance. Customize reports by date, service type, or employee. Visualize your growth with data that actually makes sense.' },
];

export default function JewelryRepairPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Jewelry Repair Shop Software</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Organize Jewelry Repair and Retail Operations</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Manage valuables, appraisals, and customer pickups effortlessly. From intake to invoice — everything tracked in one place.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Everything Your Jewelry Repair Shop Needs in One Platform</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">From the moment a customer walks in with a broken ring to the moment they walk out with it polished and perfect — RepairDesk tracks it all.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <div className="bg-rd-dark text-white rounded-2xl p-8 max-w-3xl">
            <h3 className="font-poppins font-bold text-xl mb-4 text-rd-lime">Why Jewelry Repair Shops Choose RepairDesk</h3>
            <ul className="space-y-3">
              {[
                'Track each piece of jewelry with item-level serial numbers and photos',
                'Record pre-repair condition and get digital customer signatures',
                'Send automated pickup notifications when jewelry is ready',
                'Accept deposits and track partial payments on expensive repairs',
                'Manage retail display inventory alongside repair job tracking',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rd-lime/20 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></div>
                  <span className="text-white/80 font-dm-sans text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
