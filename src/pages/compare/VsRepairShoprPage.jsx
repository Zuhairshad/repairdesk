import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const Check = () => <span className="text-emerald-500 font-bold text-lg">✓</span>;
const Cross = () => <span className="text-gray-300 font-bold text-lg">✗</span>;

const features = [
  { label: 'Point of Sale', rd: true, rs: true },
  { label: 'Inventory Management', rd: true, rs: true },
  { label: 'Repair Ticket Tracking', rd: true, rs: true },
  { label: 'Multi-Location Management', rd: true, rs: true },
  { label: 'Built-in Marketing Automation', rd: true, rs: false },
  { label: 'Integrated Phone System (VoIP)', rd: true, rs: false },
  { label: 'Loyalty Points Program', rd: true, rs: false },
  { label: 'Self Check-In Kiosk', rd: true, rs: false },
  { label: 'Customer Facing Display', rd: true, rs: false },
  { label: 'Store Credits', rd: true, rs: true },
  { label: 'Gift Cards', rd: true, rs: false },
  { label: 'Google Reviews Integration', rd: true, rs: false },
  { label: 'Phone Diagnostics (PhonePro)', rd: true, rs: false },
  { label: 'Unified Inbox (SMS + Email)', rd: true, rs: false },
  { label: 'Franchise Management', rd: true, rs: false },
  { label: 'Free Data Migration', rd: true, rs: false },
  { label: 'iPad POS Register App', rd: true, rs: true },
  { label: '24/6 Customer Support', rd: true, rs: false },
];

const advantages = [
  { num: '01', title: 'All-in-One Marketing Suite', desc: 'RepairHub includes email campaigns, SMS marketing, loyalty programs, and review collection — tools RepairShopr charges extra for or lacks entirely.' },
  { num: '02', title: 'Built-in Phone System', desc: 'Take calls, see caller ID linked to customer profiles, record calls, and route voicemails — all from within RepairHub. RepairShopr has no native phone system.' },
  { num: '03', title: 'PhonePro Diagnostics', desc: 'Run automated battery, screen, sensor, and speaker diagnostics on any device directly from the repair ticket. Builds customer trust and reduces disputes.' },
  { num: '04', title: 'Google Reviews Automation', desc: "Automatically request reviews after every completed repair. RepairHub's integration sends requests at the right moment to maximise 5-star ratings." },
  { num: '05', title: 'Superior Onboarding & Support', desc: 'Free data migration from RepairShopr, dedicated onboarding specialists, and 24/6 live support. RepairShopr relies heavily on community forums.' },
  { num: '06', title: 'Franchise-Ready at Every Plan', desc: 'Multi-location management, centralized reporting, and franchise-grade controls are built in — not locked behind expensive enterprise tiers.' },
];

const ratings = [
  { platform: 'Capterra', rd: '4.7', rs: '4.5', rdCount: '244+', rsCount: '180+' },
  { platform: 'Trustpilot', rd: '4.9', rs: '3.8', rdCount: '509+', rsCount: '60+' },
  { platform: 'G2', rd: '4.6', rs: '4.2', rdCount: '95+', rsCount: '70+' },
];

export default function VsRepairShoprPage() {
  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll ? features : features.slice(0, 10);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rd-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <span className="text-[18rem] font-poppins font-black text-white select-none">VS</span>
        </div>
        <div className="container-main max-w-5xl relative z-10 text-center">
          <p className="font-poppins font-bold text-xs text-rd-teal tracking-widest uppercase mb-8">Software Comparison</p>
          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-rd-teal flex items-center justify-center mx-auto mb-3 shadow-lg shadow-rd-teal/30">
                <span className="font-poppins font-black text-white text-2xl">RD</span>
              </div>
              <p className="font-poppins font-bold text-white text-lg">RepairHub</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              <span className="font-poppins font-black text-white text-xl">VS</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-600 flex items-center justify-center mx-auto mb-3">
                <span className="font-poppins font-black text-white text-2xl">RS</span>
              </div>
              <p className="font-poppins font-bold text-white text-lg">RepairShopr</p>
            </div>
          </div>
          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
            RepairHub vs RepairShopr:<br />Which Repair Shop Software Is Better?
          </h1>
          <p className="text-white/70 font-dm-sans max-w-xl mx-auto mb-8">
            An honest, feature-by-feature comparison to help you choose the right platform for your repair business.
          </p>
          <Link to="/register" className="inline-flex items-center gap-2 bg-rd-teal text-white font-poppins font-semibold px-8 py-3.5 rounded-xl hover:bg-teal-600 transition-colors">
            Try RepairHub Free for 14 Days
          </Link>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 px-6 bg-rd-cream">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-2">Feature-by-Feature Comparison</h2>
            <p className="font-dm-sans text-gray-500">Every feature independently verified as of January 2025.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full bg-white text-sm font-dm-sans">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 font-poppins text-xs text-gray-400 uppercase tracking-wider w-1/2">Feature</th>
                  <th className="px-6 py-4 text-center w-1/4">
                    <span className="font-poppins font-bold text-rd-teal text-sm">RepairHub</span>
                  </th>
                  <th className="px-6 py-4 text-center w-1/4">
                    <span className="font-poppins font-semibold text-gray-500 text-sm">RepairShopr</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {visibleFeatures.map((f, i) => (
                  <tr key={i} className={`border-t border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/50'}`}>
                    <td className="px-6 py-3.5 font-dm-sans text-gray-700">{f.label}</td>
                    <td className="px-6 py-3.5 text-center">{f.rd ? <Check /> : <Cross />}</td>
                    <td className="px-6 py-3.5 text-center">{f.rs ? <Check /> : <Cross />}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!showAll && (
            <div className="text-center mt-6">
              <button onClick={() => setShowAll(true)} className="font-poppins font-semibold text-sm text-rd-teal hover:underline">
                Show all {features.length} features ↓
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why RepairHub Wins */}
      <section className="py-20 px-6 bg-white">
        <div className="container-main max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-2">Why Repair Shops Choose RepairHub Over RepairShopr</h2>
            <p className="font-dm-sans text-gray-500">Six advantages that make a real difference in day-to-day operations.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="bg-rd-cream rounded-2xl p-6 border border-gray-100">
                <div className="flex items-start gap-4">
                  <span className="font-poppins font-black text-rd-teal/30 text-3xl leading-none flex-shrink-0">{a.num}</span>
                  <div>
                    <p className="font-poppins font-bold text-rd-dark mb-2">{a.title}</p>
                    <p className="font-dm-sans text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings comparison */}
      <section className="py-16 px-6 bg-rd-dark">
        <div className="container-main max-w-4xl">
          <h2 className="font-poppins font-bold text-2xl text-white text-center mb-10">Third-Party Ratings</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {ratings.map((r, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center">
                <p className="font-poppins font-bold text-white mb-4">{r.platform}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-poppins font-black text-rd-teal text-2xl">{r.rd}</p>
                    <p className="font-dm-sans text-white/50 text-xs">RepairHub</p>
                    <p className="font-dm-sans text-white/30 text-xs">{r.rdCount} reviews</p>
                  </div>
                  <div>
                    <p className="font-poppins font-black text-gray-400 text-2xl">{r.rs}</p>
                    <p className="font-dm-sans text-white/50 text-xs">RepairShopr</p>
                    <p className="font-dm-sans text-white/30 text-xs">{r.rsCount} reviews</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Switch section */}
      <section className="py-20 px-6 bg-rd-cream">
        <div className="container-main max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm text-center">
            <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-3">Switch from RepairShopr in 24 Hours</h2>
            <p className="font-dm-sans text-gray-500 max-w-lg mx-auto mb-8">
              Our onboarding team handles your data migration for free. Your tickets, customers, inventory, and history come with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="text-center"><div className="w-10 h-10 rounded-full bg-rd-teal text-white font-poppins font-bold flex items-center justify-center mx-auto mb-2">1</div><p className="font-dm-sans text-sm text-gray-500">Sign up free</p></div>
              <div className="hidden sm:flex items-center text-gray-300">→</div>
              <div className="text-center"><div className="w-10 h-10 rounded-full bg-rd-teal text-white font-poppins font-bold flex items-center justify-center mx-auto mb-2">2</div><p className="font-dm-sans text-sm text-gray-500">We migrate your data</p></div>
              <div className="hidden sm:flex items-center text-gray-300">→</div>
              <div className="text-center"><div className="w-10 h-10 rounded-full bg-rd-teal text-white font-poppins font-bold flex items-center justify-center mx-auto mb-2">3</div><p className="font-dm-sans text-sm text-gray-500">Go live in 24 hours</p></div>
            </div>
            <Link to="/register" className="inline-flex items-center gap-2 bg-rd-teal text-white font-poppins font-semibold px-8 py-3.5 rounded-xl hover:bg-rd-dark transition-colors">
              Start Free — No Credit Card Required
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
