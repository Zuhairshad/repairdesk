import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const IconShield = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L4 5v6c0 4.4 3.4 8.5 8 9.5C16.6 19.5 20 15.4 20 11V5l-8-3z" />
  </svg>
);
const IconLock = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const IconCheck = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);
const IconChevron = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const IconMail = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" />
  </svg>
);

const principles = [
  { color: 'bg-rd-teal/10 text-rd-teal', title: 'Lawfulness & Fairness', desc: 'We process personal data only for legitimate, specified purposes disclosed upfront.' },
  { color: 'bg-blue-50 text-blue-600', title: 'Purpose Limitation', desc: 'Data collected for a stated purpose is never repurposed without fresh consent.' },
  { color: 'bg-purple-50 text-purple-600', title: 'Data Minimisation', desc: 'We collect only what is strictly necessary. No bloated profiles, no hoarded data.' },
  { color: 'bg-rd-cream text-rd-teal', title: 'Accuracy', desc: 'We maintain up-to-date records and give you tools to correct anything that is wrong.' },
  { color: 'bg-amber-50 text-amber-600', title: 'Storage Limitation', desc: 'Data is retained only as long as necessary, then securely deleted or anonymised.' },
  { color: 'bg-rose-50 text-rose-600', title: 'Integrity & Confidentiality', desc: 'Encryption, access controls, and regular audits protect data against unauthorised access.' },
];

const rights = [
  { title: 'Right to Access', desc: 'Request a full copy of all personal data we hold about you, free of charge, within 30 days.' },
  { title: 'Right to Rectification', desc: 'Ask us to correct inaccurate or incomplete information at any time.' },
  { title: 'Right to Erasure ("Right to be Forgotten")', desc: 'Request deletion of your personal data when it is no longer needed for the purpose it was collected.' },
  { title: 'Right to Restrict Processing', desc: 'Ask us to pause processing while you contest accuracy or await an objection decision.' },
  { title: 'Right to Data Portability', desc: 'Receive your data in a machine-readable format (JSON / CSV) and transfer it to another provider.' },
  { title: 'Right to Object', desc: 'Object to processing based on legitimate interest, including direct marketing, and we will stop immediately.' },
  { title: 'Right Not to Be Subject to Automated Decisions', desc: 'AA Repairdesk does not make legally significant automated decisions about individuals.' },
];

const securityMeasures = [
  'AES-256 encryption at rest and TLS 1.3 in transit',
  'Role-based access control — staff see only what they need',
  'Continuous intrusion detection and anomaly monitoring',
  'Daily encrypted backups with geo-redundant storage',
  'Penetration testing by independent security firms',
  'SOC 2 Type II audit process underway',
];

const subprocessors = [
  { name: 'Amazon Web Services', role: 'Cloud infrastructure & storage', country: 'USA' },
  { name: 'Stripe', role: 'Payment processing', country: 'USA' },
  { name: 'Twilio', role: 'SMS communications', country: 'USA' },
  { name: 'SendGrid', role: 'Transactional email delivery', country: 'USA' },
  { name: 'Intercom', role: 'Customer support chat', country: 'USA' },
];

export default function GDPRPage() {
  const [openRight, setOpenRight] = useState(null);

  return (
    <PageLayout showCTA={false}>
      {/* Hero */}
      <section className="relative bg-white overflow-hidden py-24 px-6 border-b border-gray-100">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 200 240" className="w-96 h-96" fill="#3d405b">
            <path d="M100 5L15 40v60c0 55 37 105 85 120C148 205 185 155 185 100V40L100 5z" />
          </svg>
        </div>
        <div className="container-main max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 bg-rd-teal/10 border border-rd-teal/20 rounded-full px-4 py-1.5 mb-6">
            <IconShield className="w-4 h-4 text-rd-teal" />
            <span className="text-rd-teal font-poppins font-semibold text-xs tracking-wider uppercase">Data Privacy</span>
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-rd-dark mb-4 leading-tight">Your Data, Your Rights.</h1>
          <p className="text-gray-600 font-dm-sans text-lg max-w-2xl leading-relaxed mb-4">
            AA Repairdesk is fully committed to the General Data Protection Regulation (GDPR). This page explains what that means for you, your customers, and the data in your account.
          </p>
          <p className="text-gray-400 font-dm-sans text-sm">Last updated: 1 January 2025 · Effective date: 25 May 2018</p>
        </div>
      </section>

      {/* Data Controller card */}
      <section className="bg-rd-cream py-10 px-6">
        <div className="container-main max-w-4xl">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
            <p className="font-poppins font-bold text-rd-dark text-lg mb-2">Data Controller</p>
            <p className="font-dm-sans text-gray-500 text-sm leading-relaxed">
              AA Repairdesk Inc., 108 W 13th St, Wilmington, DE 19801, USA is the data controller for personal data processed through the AA Repairdesk platform. For EU/EEA customers, we process data under Article 6(1)(b) GDPR (contract performance) and Article 6(1)(f) (legitimate interests) as primary lawful bases.
            </p>
          </div>
        </div>
      </section>

      {/* Six Principles */}
      <section className="py-20 px-6 bg-white">
        <div className="container-main max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-3">The 6 GDPR Principles We Uphold</h2>
            <p className="font-dm-sans text-gray-500 max-w-xl mx-auto">These foundational rules govern every piece of data entrusted to us.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="bg-rd-cream rounded-2xl p-6 border border-gray-100">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-poppins font-bold text-lg ${p.color}`}>{i + 1}</div>
                <p className="font-poppins font-semibold text-rd-dark text-sm mb-2">{p.title}</p>
                <p className="font-dm-sans text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rights Accordion */}
      <section className="py-20 px-6 bg-rd-cream">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-3">Your Rights Under GDPR</h2>
            <p className="font-dm-sans text-gray-500">We fulfil every request within 30 days at no charge.</p>
          </div>
          <div className="space-y-3">
            {rights.map((r, i) => (
              <div key={i} className={`bg-white rounded-xl border transition-all ${openRight === i ? 'border-rd-teal shadow-sm' : 'border-gray-100'}`}>
                <button onClick={() => setOpenRight(openRight === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left">
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-poppins font-bold flex-shrink-0 transition-colors ${openRight === i ? 'bg-rd-teal text-white' : 'bg-rd-cream text-rd-dark'}`}>{i + 1}</span>
                    <span className="font-poppins font-semibold text-rd-dark text-sm">{r.title}</span>
                  </div>
                  <IconChevron className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${openRight === i ? 'rotate-180' : ''}`} />
                </button>
                {openRight === i && (
                  <div className="px-6 pb-5 pl-16">
                    <p className="font-dm-sans text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 px-6 bg-rd-dark">
        <div className="container-main max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl text-white mb-4">How We Protect Your Data</h2>
              <p className="font-dm-sans text-white/60 leading-relaxed mb-8">We apply measures that go beyond GDPR requirements, because your trust is worth more than compliance.</p>
              <div className="space-y-3">
                {securityMeasures.map((m, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-rd-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <IconCheck className="text-rd-teal" />
                    </div>
                    <span className="font-dm-sans text-white/70 text-sm">{m}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-56 h-64">
                <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
                  <path d="M100 8L18 42v60c0 53 35 101 82 118C147 203 182 155 182 102V42L100 8z" fill="url(#sg)" />
                  <defs>
                    <linearGradient id="sg" x1="100" y1="8" x2="100" y2="220" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#3d405b" /><stop offset="100%" stopColor="#1e2035" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <IconLock className="w-10 h-10 text-white mx-auto mb-2" />
                    <p className="font-poppins font-bold text-white text-sm">GDPR</p>
                    <p className="font-dm-sans text-white/60 text-xs">Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-processors */}
      <section className="py-20 px-6 bg-white">
        <div className="container-main max-w-4xl">
          <div className="mb-8">
            <h2 className="font-poppins font-bold text-2xl text-rd-dark mb-2">Sub-Processors</h2>
            <p className="font-dm-sans text-gray-500 text-sm">Each sub-processor is bound by a data processing agreement meeting GDPR Article 28 requirements.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-100">
            <table className="w-full text-sm font-dm-sans">
              <thead className="bg-rd-cream">
                <tr>
                  <th className="text-left px-5 py-3 font-poppins font-semibold text-rd-dark text-xs">Sub-Processor</th>
                  <th className="text-left px-5 py-3 font-poppins font-semibold text-rd-dark text-xs">Purpose</th>
                  <th className="text-left px-5 py-3 font-poppins font-semibold text-rd-dark text-xs">Country</th>
                </tr>
              </thead>
              <tbody>
                {subprocessors.map((s, i) => (
                  <tr key={i} className="border-t border-gray-50">
                    <td className="px-5 py-3.5 font-semibold text-rd-dark">{s.name}</td>
                    <td className="px-5 py-3.5 text-gray-500">{s.role}</td>
                    <td className="px-5 py-3.5"><span className="bg-gray-100 text-gray-600 rounded-full px-3 py-0.5 text-xs font-poppins">{s.country}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-dm-sans text-gray-400 text-xs mt-4">All transfers to the USA are covered by Standard Contractual Clauses (SCCs) under EU Decision 2021/914.</p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-rd-cream">
        <div className="container-main max-w-4xl text-center">
          <h2 className="font-poppins font-bold text-2xl text-rd-dark mb-2">Contact Us About Your Data</h2>
          <p className="font-dm-sans text-gray-500 mb-8">To exercise any of your rights or ask questions about how we handle personal data:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:privacy@aarepairdesk.co" className="inline-flex items-center gap-2 bg-rd-teal text-white font-poppins font-semibold text-sm px-6 py-3 rounded-xl hover:bg-rd-dark transition-colors">
              <IconMail />privacy@aarepairdesk.co
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-gray-200 text-rd-dark font-poppins font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white transition-colors">
              Contact Form
            </Link>
          </div>
          <p className="font-dm-sans text-gray-400 text-xs mt-6">We respond within 30 days. You also have the right to lodge a complaint with your local supervisory authority.</p>
        </div>
      </section>
    </PageLayout>
  );
}
