import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const painPoints = [
  "You're not sure who actually clocked in on time, or stayed late.",
  'You spend a lot of time finalizing the payroll, and it still has errors.',
  'You open your second store and lose control over the first one.',
  "Commissions turn into arguments because you don't have a record.",
  'A part went missing, and nobody noticed.',
  'Someone gave the wrong discount. Now you have to find out who did it.',
];

const features = [
  { title: 'Roles and Permissions', desc: 'Set roles and permissions that match your repair shop. Restrict employee access to things that can cost you money. Every action is logged.' },
  { title: 'Clock In, Clock-Out', desc: 'Track check-in and check-out times of your employees from any device. Timesheets and shifts are auto-calculated for payroll.' },
  { title: 'Payroll Processing', desc: 'Calculate wages and process payroll to ensure everyone is fairly paid. No more spreadsheets — pay runs are accurate and on time.' },
  { title: 'Commission Tracking', desc: 'Give commissions to your employees for repairs sold. Set sales targets and track individual performance with automated records.' },
  { title: 'Repair Timer', desc: 'Track how long a technician spends on every job. Use repair timer data to price jobs accurately and measure productivity.' },
  { title: 'Activity Logs & Productivity Reports', desc: 'See exactly what every employee did — repairs completed, discounts applied, and sales made. Full audit trail, always.' },
  { title: 'Shifts and Schedules', desc: "Assign shifts, manage availability, and plan your store schedule without back-and-forth messages." },
  { title: 'Built-in Wiki for Policies', desc: 'Give employees a way to help themselves. Create manuals, repair guides, and how-to articles so they find answers fast.' },
  { title: 'Security Checks & Access PINs', desc: 'Assign each employee a 4-digit PIN for quick and secure login at the POS. Control what each role can see and do.' },
];

export default function EmployeeManagementPage() {
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Employee Management Software for Repair Shops</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Manage Your Team Without Micromanaging</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Assign different roles to employees, actively track their progress, calculate wages, and process payroll — all without leaving RepairDesk.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-10 max-w-2xl">No Visibility into Your Team? That's Why Running Your Shop Feels Exhausting.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((point, i) => (
              <div key={i} className="bg-white rounded-xl p-5 flex items-start gap-3 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg></div>
                <p className="text-gray-600 text-sm font-dm-sans leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-rd-dark text-white rounded-2xl p-6">
            <p className="font-dm-sans text-lg leading-relaxed">You didn't open a repair business to keep an eye on a team. You opened it to grow. <span className="text-rd-lime font-semibold">RepairDesk gives you full visibility without micromanagement.</span></p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Everything You Need to Manage a Team at Your Repair Shop</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">Get a complete view of your employees' performance with just one tool. No micromanagement required.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
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
          <h2 className="font-poppins font-bold text-3xl text-center mb-12">Real Shops. Real Numbers.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[{ from: '6 hours', to: '25 minutes', label: 'Weekly payroll processing time', quote: 'Single repair shop owner' }, { from: '4 Stores', to: '1 Software', label: 'Unified rules across all locations', quote: 'Multi-store repair business owner' }].map(s => (
              <div key={s.label} className="bg-white/10 rounded-2xl p-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-white/50 font-dm-serif text-2xl line-through">{s.from}</span>
                  <svg className="w-6 h-6 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  <span className="text-rd-lime font-dm-serif text-3xl font-bold">{s.to}</span>
                </div>
                <p className="text-white/70 font-dm-sans text-sm mb-2">{s.label}</p>
                <p className="text-white/40 text-xs font-poppins">— {s.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
