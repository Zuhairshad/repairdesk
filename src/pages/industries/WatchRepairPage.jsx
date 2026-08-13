import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Ticket Management', desc: 'Speed up your watch repairs using efficient ticket management software for a smoother workflow. Track repair jobs and send job notifications and estimates to customers.' },
  { title: 'Easy Payment Options', desc: 'Allow customers to pay conveniently using their debit/credit cards without additional fees. Get paid faster by integrating with Square and Stripe.' },
  { title: 'Inventory Management', desc: 'Manage your repair shop inventory like never before. Get low stock alerts, streamline buybacks, import or export product catalogs, and print barcodes and labels.' },
  { title: 'Ticketing System', desc: 'Serve customers better by creating tickets online and sending the ticket reference number to your customers via SMS or email so they can track their repair.' },
  { title: 'Built-in POS System', desc: 'Sell products, repairs, trade-ins, and bundle offers all from the built-in POS system. Sell and repair in the same platform without switching tools.' },
  { title: 'Billing & Invoicing', desc: 'Get paid faster online by sending email invoices to your customers with a payment link. Also take payments from in-store customers at checkout.' },
  { title: 'Mail-in Repair Tracking', desc: 'Start offering mail-in repair facility through an integrated calendar on your website. Appointments land in RepairDesk, creating a ticket automatically.' },
  { title: 'WooCommerce Integration', desc: 'Have more control over your retail operations with a two-way product catalog sync. Sell your watches online and manage orders from the same platform.' },
];

export default function WatchRepairPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Watch Repair Shop Software</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Watch Repair Ticketing That Works Faster When You're in a Rush</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Manage all your watch repair and heirloom restoration jobs in one place. Create tickets, track jobs, and sell watches — all from a single platform.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Repair and Sell Watches in One Place</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">Selling and repairing was never so easy. Seamlessly manage all your repair tickets with watch repair ticketing software that also has a built-in POS for the retail side of your business.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main max-w-4xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-8">RepairDesk Works Better Together</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-8">Connect all your core systems with the central headquarters of your business. Manage everything from one place with powerful integrations.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Square', 'Stripe', 'WooCommerce', 'Shopify', 'QuickBooks', 'PayPal', 'Zapier', 'Xero'].map(name => (
              <div key={name} className="bg-white rounded-xl p-4 text-center shadow-sm font-poppins font-semibold text-rd-dark text-sm border border-gray-100">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
