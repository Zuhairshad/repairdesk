import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Track Employee Hours', desc: 'Accurately record when each employee starts and ends their shift. Digital punch-in replaces paper timesheets, reducing buddy-punching and manual errors across all your repair shop locations.' },
  { title: 'Automated Timesheet Calculation', desc: 'Let RepairDesk automatically calculate total hours worked, including regular time, overtime, and breaks. Export-ready timesheets save hours of payroll prep every pay period.' },
  { title: 'Overtime Alerts', desc: 'Set overtime thresholds and receive instant alerts when an employee approaches or exceeds the limit. Stay compliant with labor laws and keep labor costs under control.' },
  { title: 'Break Time Management', desc: 'Configure paid and unpaid break policies for your shop. Employees clock in and out for breaks, and the system automatically deducts break time from total hours worked.' },
  { title: 'Export Timesheets', desc: 'Download detailed timesheet reports in CSV or PDF format. Integrate seamlessly with your payroll provider — QuickBooks, Xero, or any system that accepts standard timesheet exports.' },
  { title: 'Multi-Location Support', desc: 'Manage clock-in and clock-out across all your store locations from a single dashboard. Compare labor hours across branches and identify staffing imbalances instantly.' },
];

const faqs = [
  { q: 'How do employees clock in and out?', a: 'Employees can clock in and out directly from the RepairDesk POS terminal using their unique PIN or login credentials. The system records the exact timestamp and associates it with the correct employee profile and store location automatically.' },
  { q: 'Can I set different overtime rules for different employees?', a: 'Yes. You can configure overtime thresholds at both the store level and the individual employee level. Set daily or weekly overtime limits, define overtime multipliers, and the system will automatically flag any hours that exceed those thresholds.' },
  { q: 'Does the clock-in system work with my existing payroll software?', a: 'Absolutely. RepairDesk lets you export timesheets in standard CSV and PDF formats that are compatible with all major payroll providers including QuickBooks, Xero, Gusto, and ADP. You can also use our direct integrations for a fully automated payroll workflow.' },
  { q: 'Can managers edit or approve timesheets before export?', a: 'Yes. Managers can review, adjust, and approve employee timesheets before exporting. If an employee forgets to clock out or clocks in at the wrong time, managers can make corrections with a full audit trail of every change.' },
];

export default function ClockInOutPage() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Clock-In & Clock-Out for Repair Shops</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">
            Track employee hours with precision. Replace paper timesheets with a digital clock-in system that automates payroll prep, monitors overtime, and gives you full visibility into labor costs across every location.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Everything You Need to Manage Employee Time</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">From shift tracking to payroll exports, RepairDesk gives you complete control over employee hours without the spreadsheets.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-7 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-5 transition-colors">
                  <svg className="w-6 h-6 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-3">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Timesheet Automation</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Say Goodbye to Manual Timesheets Forever</h2>
              <p className="text-gray-500 font-dm-sans text-lg mb-6">RepairDesk calculates hours, overtime, and breaks automatically. No more spreadsheet formulas, no more payroll mistakes. Just accurate, export-ready timesheets every pay period.</p>
              <ul className="space-y-3">
                {['Automatic calculation of regular and overtime hours', 'Configurable break policies with auto-deduction', 'One-click CSV and PDF export for payroll', 'Manager review and approval workflow built in'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rd-teal flex items-center justify-center shrink-0 mt-0.5"><svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg></div>
                    <span className="text-gray-600 font-dm-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-rd-dark rounded-2xl p-8 text-white">
              <div className="text-rd-lime text-4xl font-dm-serif mb-3">"</div>
              <p className="text-white/90 font-dm-sans leading-relaxed mb-6 italic">We used to spend 3 hours every week just sorting out timesheets. With RepairDesk's clock-in system, payroll takes 15 minutes. The overtime alerts alone saved us thousands in unexpected labor costs.</p>
              <p className="font-poppins font-semibold text-white">Marcus D.</p>
              <p className="text-white/50 text-xs font-poppins">Multi-Location Repair Shop Owner, Texas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Labor Cost Control</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Keep Labor Costs Visible and Under Control</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-2xl">See exactly where your labor dollars go. Compare staffing levels across locations, identify scheduling inefficiencies, and make data-driven decisions about hiring and shifts.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ title: 'Real-Time Labor Dashboard', desc: 'See who is clocked in right now across all locations. Monitor active hours, upcoming overtime, and total labor cost for the day — all in one view.' }, { title: 'Location Comparison Reports', desc: 'Compare labor hours and costs between store locations side by side. Spot overstaffing, understaffing, and scheduling gaps before they impact your bottom line.' }, { title: 'Audit Trail & Compliance', desc: 'Every clock-in, clock-out, and manual edit is logged with timestamps and user IDs. Stay compliant with labor regulations and resolve disputes with clear records.' }].map(item => (
              <div key={item.title} className="bg-rd-cream rounded-2xl p-6">
                <h3 className="font-poppins font-semibold text-rd-dark mb-3">{item.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-10">All the Answers You're Looking For</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button className="w-full flex items-center justify-between px-6 py-4 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}<svg className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-5 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
