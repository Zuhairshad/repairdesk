import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Repair Ticket Management', desc: 'Create detailed repair tickets for heavy equipment. Track engine models, VINs, serial numbers, and service history. Assign jobs to technicians and update status in real time.' },
  { title: 'Inventory & Parts Management', desc: 'Manage large parts catalogs, track serialized components, and get low stock alerts. Transfer parts between locations and create purchase orders from directly within the software.' },
  { title: 'Integrated Payments', desc: 'Accept debit, credit, contactless, and online payments. Track partial payments and deposits on large jobs. Send invoices with a payment link for remote approvals.' },
  { title: 'Customer Quotes & Approvals', desc: 'Send detailed repair estimates to customers before starting work. Customers can approve or decline electronically — saving you time and preventing disputes.' },
  { title: 'Digital Signatures', desc: 'Capture customer signatures on pre-repair condition reports and job authorizations. Protect your business with a full digital paper trail on every job.' },
  { title: 'Employee Management', desc: 'Assign technicians to specific jobs, track working hours, and monitor productivity. Calculate labor costs per ticket to ensure accurate job pricing.' },
  { title: 'Business Reporting', desc: 'View revenue by job type, technician, or time period. Understand your most profitable services and make data-driven decisions about pricing and staffing.' },
  { title: 'Customer Notifications', desc: 'Send automated SMS and email updates when job status changes. Reduce customer calls and keep every client informed without lifting the phone.' },
];

export default function HeavyDutyRepairPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Heavy Duty Repair Shop Software</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Handle Complex Heavy Duty Repairs From One Platform</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Track multi-part jobs, fleet service records, and large equipment inventory. Manage complex repair workflows without the chaos of spreadsheets and paper forms.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Everything Your Heavy Duty Repair Shop Needs</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">Built for shops that handle the big jobs. From fleet maintenance to industrial equipment repair — RepairDesk keeps every ticket organized and every customer informed.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rd-dark text-white py-16 px-6">
        <div className="container-main max-w-3xl text-center">
          <h2 className="font-poppins font-bold text-3xl mb-4">Ready to Run a Tighter Heavy Duty Shop?</h2>
          <p className="text-white/70 font-dm-sans text-lg mb-8">Join thousands of repair shops that use RepairDesk to manage jobs, inventory, and customers in one platform.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
