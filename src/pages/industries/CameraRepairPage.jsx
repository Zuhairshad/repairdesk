import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Repair Ticket Management', desc: 'Create tickets for lens, sensor, firmware, shutter, and body repairs. Record camera model, serial number, and pre-repair condition. Assign jobs and track status in real time.' },
  { title: 'Inventory Management', desc: 'Track lenses, sensors, batteries, straps, and accessories. Get low stock alerts and manage purchase orders directly from the software. Print barcodes and labels.' },
  { title: 'Integrated Payments', desc: 'Accept card, cash, contactless, and online payments. Send email invoices with a payment link so photographers can pay remotely before pickup.' },
  { title: 'Appointment Scheduling', desc: 'Let customers book camera repair appointments from your website. Appointments sync directly into RepairDesk and create tickets automatically.' },
  { title: 'Customer Notifications', desc: 'Send automated SMS and email updates at every stage of the repair. Keep photographers informed so they know exactly when to come in.' },
  { title: 'Mail-in Repair Tracking', desc: 'Manage mail-in camera repairs from intake to return shipping. Track inbound packages, create tickets on arrival, and email return invoices with payment links.' },
  { title: 'Quotes & Estimates', desc: "Send detailed repair estimates before starting work, especially for high-value cameras. Customers approve or decline electronically, protecting both parties." },
  { title: 'Business Reporting', desc: 'Track revenue by repair type, technician, and time period. Understand your most profitable services and plan your parts inventory around real demand.' },
];

export default function CameraRepairPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Camera Repair Shop Software</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Automate Your Camera Repair Store's Workflow</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Track lens, sensor, and firmware jobs from intake to pickup. Manage inventory, send invoices, and keep photographers informed — all in one platform.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Everything Your Camera Repair Shop Needs</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">From the first diagnostic to the final payment — RepairDesk tracks every camera repair job with the precision your customers expect.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
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
