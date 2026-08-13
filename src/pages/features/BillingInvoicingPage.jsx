import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Email Invoices with Payment Link', desc: 'Send professional invoices directly to customers via email with an integrated payment link so they can pay online from anywhere — no follow-up calls needed.' },
  { title: 'Partial Payments & Deposits', desc: 'Accept partial payments on repairs and track outstanding balances automatically. Never lose track of what is owed on any ticket.' },
  { title: 'Custom Invoice Templates', desc: 'Create branded invoice templates with your logo, store name, and custom fields using the built-in Template Editor. Look professional every time.' },
  { title: 'Quotes & Estimates', desc: 'Send repair quotes to customers for approval before starting work. Customers can accept or decline electronically — no phone tag required.' },
  { title: 'Tax Management', desc: 'Automatically calculate taxes on invoices. Set up tax rates for different product categories and services, and stay compliant without manual math.' },
  { title: 'Multiple Payment Methods', desc: 'Accept cash, card, digital wallets, store credits, loyalty points, and gift cards — all from the same billing screen in a single transaction.' },
  { title: 'Automated Billing Reminders', desc: 'Send automatic reminders for overdue invoices so you never have to chase payments manually. Get paid faster with less awkward follow-up.' },
  { title: 'PCI Compliant Payments', desc: 'End-to-end encryption and PCI compliance make collecting payments a secure and simple process — in-store, online, or contactless.' },
  { title: 'Integrated with POS', desc: 'Billing flows directly into your POS so every sale, repair, and accessory purchase is tracked in one place. No double entry, no discrepancies.' },
];

export default function BillingInvoicingPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Billing & Invoicing for Repair Shops</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Automate Billing and Get Paid Faster</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Email invoices with a payment link, accept partial payments, and manage taxes automatically — all without leaving RepairDesk.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Everything You Need to Bill Customers Cleanly and Quickly</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">From quote to paid invoice in minutes. RepairDesk billing is integrated with your tickets, inventory, and POS — so the numbers are always right.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
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
          <h2 className="font-poppins font-bold text-3xl text-center mb-12">Billing That Works the Way You Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { stat: 'Email', label: 'Send invoice + payment link directly from any ticket', sub: 'Customer pays online in one click' },
              { stat: 'Print', label: 'Generate and print receipts or invoices instantly at POS', sub: 'Full template customization' },
              { stat: 'Online', label: 'Accept contactless & online payments with end-to-end encryption', sub: 'PCI compliant & secure' },
            ].map(s => (
              <div key={s.label} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-rd-lime font-dm-serif text-3xl font-bold mb-3">{s.stat}</div>
                <p className="text-white/80 font-dm-sans text-sm mb-1">{s.label}</p>
                <p className="text-white/40 text-xs font-poppins">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
