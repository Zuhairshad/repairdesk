import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Custom Tailoring Orders', desc: 'Create detailed orders for custom tailoring jobs. Record measurements, fabric choices, style notes, and delivery deadlines. Track every order from measurement to final fitting.' },
  { title: 'Measurements & Customer Profiles', desc: "Store each customer's measurements and fitting preferences in their profile. Retrieve measurements instantly for repeat orders — no more lost measurement cards." },
  { title: 'Fabric & Materials Inventory', desc: 'Track fabric bolts, buttons, threads, and other materials. Get low stock alerts before running out on an active order. Manage reorders from within the software.' },
  { title: 'Fitting Appointments', desc: 'Schedule fitting appointments from within RepairDesk. Send automated reminders to customers before their appointment to reduce no-shows.' },
  { title: 'Customer Notifications', desc: 'Send automated SMS and email updates when an order is ready for fitting or pickup. Keep customers informed without playing phone tag.' },
  { title: 'Integrated Payments', desc: 'Accept deposits at order intake and final payments on delivery. Track outstanding balances and send email invoices with a payment link.' },
  { title: 'Business Reporting', desc: 'View revenue by order type, fabric category, or employee. Understand which services are most profitable and plan your staffing accordingly.' },
  { title: 'Employee Management', desc: 'Assign tailoring jobs to specific staff, track working hours, and monitor productivity. Calculate labor per order to ensure accurate pricing.' },
];

export default function TailorShopPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Tailor Shop Software</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Manage Tailoring Orders, Billing, and Appointments in One Place</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">From measurements to final fitting — manage custom tailoring orders, fabric inventory, and customer appointments all in one system designed for tailor shops.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Everything Your Tailor Shop Needs to Stay Organized</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">No more lost measurement cards. No more missed pickups. No more manual invoice writing. RepairDesk brings order to every part of your tailoring business.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
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
