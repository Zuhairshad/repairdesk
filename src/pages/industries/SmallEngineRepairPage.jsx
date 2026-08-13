import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const inventoryFeatures = [
  { title: 'Low Stock Alert Notifications', desc: "Never run out of spark plugs or blades again — get automatic low stock alerts when any repair part or product falls below your desired quantity." },
  { title: 'Track Special Part Orders', desc: 'Track every custom part request from order to arrival. Whether sourcing rare carburetors, ignition coils, or gaskets, our system makes sure nothing gets overlooked.' },
  { title: 'Supplier Management', desc: 'Save your suppliers and vendors details, manage purchase orders, and reorder inventory directly from the software — no need for spreadsheets.' },
  { title: 'Transfer Inventory Between Stores', desc: 'Easily transfer stock from store A to B and keep everything synced across the board. Always know what you have and where it is.' },
];

const repairFeatures = [
  { title: 'Time Tracking', desc: 'Technicians can log hours directly against repair tickets, helping you understand labor costs, improve productivity, and bill accurately.' },
  { title: 'Digital Signatures', desc: 'Get digital signatures from your customers before and after the repair to avoid any future arguments and issues. Fully paperless.' },
  { title: 'Job Notifications', desc: 'Keep your customers in the loop through SMS or email notifications. Reduce no-shows, boost satisfaction, and build trust with timely communication.' },
  { title: 'Get More Reviews', desc: 'Automatically send an SMS with your Google profile link 24 hours after completing a repair job to encourage customers to rate your shop.' },
];

export default function SmallEngineRepairPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Small Engine Repair Shop Software</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Built for Shops That Fix Lawnmowers, Chainsaws, Snowblowers & More</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Simplify repairs, inventory, customers, and employees all from a single platform. Send repair quotes and accept both in-person and online payments.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Smart Inventory Management</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Inventory Chaos? Not Anymore.</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-2xl">Never run out of spark plugs, mower blades, or oil filters again. Our software enables you to stay on top of your inventory all the time.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inventoryFeatures.map(f => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Repair Job Management</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Take Control of Every Repair Job</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-2xl">Track engine models, serial numbers, and service history for every customer. Create, manage, and track each repair ticket from intake to pickup. Assign repairs to technicians, add internal notes, upload photos, and send job notifications via email or SMS.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repairFeatures.map(f => (
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
