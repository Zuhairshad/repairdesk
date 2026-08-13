import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Online Booking Widget', desc: 'Add a booking widget to your website so customers can submit their mail-in repair requests 24/7. Requests create tickets in RepairDesk automatically.' },
  { title: 'Automated Intake Tracking', desc: 'Track inbound packages from the moment they ship to the moment they arrive. Create repair tickets automatically when packages check in.' },
  { title: 'Repair Status Notifications', desc: 'Send automatic SMS and email updates when a package arrives, when the repair starts, and when it ships back. Customers always know where their device is.' },
  { title: 'Email Invoicing with Payment Link', desc: 'Send invoices with a payment link so customers pay online before you ship back the repaired device. Collect payment without back-and-forth calls.' },
  { title: 'Customer Quote Approval', desc: 'Send repair estimates via email for customer approval before starting work. Customers accept or decline online — no phone tag, no miscommunication.' },
  { title: 'Pre-Repair Condition Record', desc: 'Document device condition with photos and notes on intake. Protect your business from disputes with a clear record of what arrived and in what state.' },
  { title: 'Return Shipping Labels', desc: 'Generate and email return shipping labels directly from RepairDesk. Make the return process seamless for both you and your customer.' },
  { title: 'Integrated Payments', desc: 'Accept card, PayPal, and other digital payments online. Track partial payments and deposits. Every payment is logged against the repair ticket.' },
];

export default function MailInRepairPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Mail-in Repair Shop Software</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Digitize Your End-to-End Mail-in Repair Workflow</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">From online booking to return shipping — manage every mail-in repair order with custom features designed for repair shops that serve customers across the country.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Everything You Need to Run a Successful Mail-in Repair Business</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">Scale your repair business beyond your local market. Accept devices from customers anywhere and deliver a professional, fully tracked experience every time.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rd-dark text-white py-16 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-center mb-10">How Mail-in Repair Works With RepairDesk</h2>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Customer Books Online', desc: 'Customer submits a mail-in repair request through your website booking widget.' },
              { step: '02', title: 'Device Ships In', desc: 'RepairDesk tracks the inbound shipment and creates a ticket automatically when it arrives.' },
              { step: '03', title: 'Repair & Quote', desc: 'Diagnose the device, send a quote if needed, and get customer approval before starting.' },
              { step: '04', title: 'Invoice & Return', desc: 'Send an invoice with a payment link. Once paid, ship the device back with a return label.' },
            ].map(s => (
              <div key={s.step} className="flex gap-4 items-start bg-white/10 rounded-xl p-5">
                <span className="text-rd-lime font-dm-serif text-2xl font-bold shrink-0">{s.step}</span>
                <div>
                  <h3 className="font-poppins font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-white/60 font-dm-sans text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
