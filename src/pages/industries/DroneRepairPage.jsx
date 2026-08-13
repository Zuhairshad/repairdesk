import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Ticket Management', desc: 'Simplify your drone repair operations with a robust ticket management solution for efficiency and transparency. Track repair tickets with centralized history and technician notes.' },
  { title: 'Easy & Fast Invoicing', desc: 'Streamline transactions through integrated payment processing with Square and RepairDesk Payments. Search for items, tickets, invoices, or customer details for a smooth workflow.' },
  { title: 'Inventory Management', desc: 'Effortlessly manage buybacks, spare parts, accessories, and retail sales. Organize your inventory and enhance efficiency by printing barcodes and labels directly from the platform.' },
  { title: 'Integrations', desc: 'Leverage powerful integrations for e-commerce, payments, SMS, printing, and customer management. Connect with Shopify, WooCommerce, Square, Stripe, and more.' },
  { title: 'Appointments Pro', desc: 'Convert website visitors into booked appointments and provide accurate repair quotes no matter where you are. Let customers schedule online 24/7.' },
  { title: 'Self Check-In', desc: 'Eliminate manual check-ins and provide convenience to your customers with self-check-in. Save time at the counter and serve more customers per day.' },
  { title: 'Phone System', desc: 'Avoid missing leads due to missed phone calls. Get instant notifications on your POS screen for calls and text messages from customers.' },
  { title: 'Reviews Management', desc: 'Stand out from competitors by setting up your review campaign and getting positive feedback on each repair job. Build your online reputation automatically.' },
];

export default function DroneRepairPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Drone Repair Shop Software</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Unlock the True Potential of Your Drone Repair Business</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">An all-in-one repair shop management software. Track repair jobs, create invoices, and manage your inventory in one place — from intake to pickup.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Everything Your Drone Repair Shop Needs</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">From walk-in customers to mail-in requests — handle every type of drone repair job with a platform built for your workflow.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Case Study</span>
              <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-4">Team Newland Ag Drones on RepairDesk</h2>
              <div className="bg-rd-dark text-white rounded-2xl p-8">
                <div className="text-rd-lime text-4xl font-dm-serif mb-3">"</div>
                <p className="text-white/90 font-dm-sans leading-relaxed mb-6 italic">Once we had everything in RepairDesk, we stopped guessing where a repair stood and started running service with a lot more clarity. RepairDesk gave us a more dependable way to stay organized as volume increased because we can see the repair and the status in one place.</p>
                <p className="font-poppins font-semibold text-white">Team Newland Ag Drones</p>
              </div>
            </div>
            <div>
              <h3 className="font-poppins font-bold text-2xl text-rd-dark mb-4">Customize RepairDesk for Your Drone Repair Store</h3>
              <p className="text-gray-500 font-dm-sans mb-6">Leverage high-level customization to create your check-in flow and serve your customers in the best way possible. Set custom fields to enhance your drone repair process with customer notes and keep a record of pre and post-repair conditions.</p>
              <ul className="space-y-3">
                {['Track drone model, serial number, and damage type per ticket', 'Record pre and post-repair condition with photos', 'Provide trade-in value to customers on their old drones', 'Mail-in repair tracking with integrated calendar'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rd-teal flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></div>
                    <span className="text-gray-600 font-dm-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
