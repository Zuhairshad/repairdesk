import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const terms = [
  {
    title: 'Acceptance of Terms',
    plain: 'By signing up, you agree to these terms.',
    content: 'By accessing or using RepairHub services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service. These terms apply to all visitors, users, and others who access or use the service. Use of RepairHub constitutes acceptance of both these Terms and our Privacy Policy.',
  },
  {
    title: 'Account Registration',
    plain: 'You are responsible for your account.',
    content: 'You must register for an account to use most RepairHub features. You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately at hello@repairhub.co of any breach of security or unauthorised use. RepairHub reserves the right to suspend accounts that violate these terms.',
  },
  {
    title: 'Subscription & Billing',
    plain: 'We bill monthly or annually. Cancel any time.',
    content: 'RepairHub is offered on a subscription basis billed monthly or annually. Subscriptions automatically renew unless cancelled before the renewal date. All fees are exclusive of applicable taxes. Annual plan refunds are prorated for unused months when requested within 30 days of the billing date. We reserve the right to change pricing with 30 days notice.',
  },
  {
    title: 'Permitted Use',
    plain: "Use RepairHub for your repair business — don't misuse it.",
    content: 'You may use RepairHub solely for your repair shop business operations. You agree not to reproduce, duplicate, copy, sell, or resell any portion of the service without written consent from RepairHub. Prohibited uses include scraping data, attempting to gain unauthorised access, transmitting malware, or using the service in a way that could impair its functionality.',
  },
  {
    title: 'Intellectual Property',
    plain: 'RepairHub owns the platform; you own your data.',
    content: 'The RepairHub platform, including all content, features, and functionality, is owned exclusively by RepairHub Inc. and is protected by copyright, trademark, and other applicable laws. You retain full ownership of all data you input into RepairHub — your customer records, tickets, and inventory belong to you. You may export your data at any time.',
  },
  {
    title: 'Data Ownership & Privacy',
    plain: 'Your data is yours. We are the stewards, not the owners.',
    content: 'All data you enter into RepairHub — customer records, repair tickets, inventory, financial reports — is owned by you. RepairHub processes this data only to provide the service as described in our Privacy Policy. We do not sell, share, or monetise your data. You may request a full export of your data at any time, and we will provide it within 5 business days.',
  },
  {
    title: 'Service Availability',
    plain: 'We aim for 99.9% uptime but cannot guarantee it.',
    content: 'RepairHub targets 99.9% monthly uptime, excluding scheduled maintenance. We will provide at least 24 hours notice for planned downtime. In the event of unplanned outages, we will communicate status at status.repairhub.co. Service interruptions do not entitle users to refunds unless they exceed 24 consecutive hours in a billing month.',
  },
  {
    title: 'Limitation of Liability',
    plain: 'Our liability is capped at what you paid us in the last 12 months.',
    content: "To the maximum extent permitted by law, RepairHub's liability for any claim arising from your use of the service is limited to the amount you paid us in the 12 months preceding the claim. RepairHub is not liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities.",
  },
  {
    title: 'Termination',
    plain: 'Either party can terminate with notice.',
    content: 'You may cancel your subscription at any time from your account settings. RepairHub may terminate or suspend your account immediately if you breach these terms or engage in activity that harms the platform or other users. Upon termination, your data remains accessible for 90 days for export, after which it is permanently deleted.',
  },
  {
    title: 'Governing Law',
    plain: 'Delaware law governs these terms.',
    content: 'These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Wilmington, Delaware.',
  },
  {
    title: 'Changes to Terms',
    plain: 'We will give you 30 days notice of material changes.',
    content: 'We reserve the right to modify these terms at any time. For material changes, we will provide at least 30 days notice via email and an in-app notification. Continued use of RepairHub after the effective date constitutes your acceptance of the updated terms. If you do not agree, you may cancel before the effective date.',
  },
];

export default function TermsPage() {
  const [openSection, setOpenSection] = useState(null);

  return (
    <PageLayout showCTA={false}>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-20 px-6">
        <div className="container-main max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-rd-teal/10 border border-rd-teal/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-rd-teal font-poppins font-semibold text-xs tracking-wider uppercase">Legal</span>
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-rd-dark mb-4">Terms of Service</h1>
          <p className="text-gray-600 font-dm-sans text-base mb-4">
            These terms govern your access to and use of RepairHub software. Please read them carefully.
          </p>
          <div className="flex items-center gap-4 text-gray-400 font-dm-sans text-sm">
            <span>Last updated: 1 January 2025</span>
            <span>·</span>
            <span>Effective: 1 January 2025</span>
          </div>
        </div>
      </section>

      {/* Key highlights bar */}
      <section className="bg-rd-teal py-8 px-6">
        <div className="container-main max-w-5xl">
          <div className="grid sm:grid-cols-4 gap-6 text-white text-center text-sm">
            <div><p className="font-poppins font-bold">Month-to-month</p><p className="text-white/70 font-dm-sans text-xs mt-1">No long-term lock-in</p></div>
            <div><p className="font-poppins font-bold">Your data is yours</p><p className="text-white/70 font-dm-sans text-xs mt-1">Export any time, free</p></div>
            <div><p className="font-poppins font-bold">30-day notice</p><p className="text-white/70 font-dm-sans text-xs mt-1">For any material changes</p></div>
            <div><p className="font-poppins font-bold">99.9% uptime SLA</p><p className="text-white/70 font-dm-sans text-xs mt-1">Monitored 24/7</p></div>
          </div>
        </div>
      </section>

      {/* Terms accordion */}
      <section className="py-16 px-6 bg-rd-cream">
        <div className="container-main max-w-4xl">
          <div className="space-y-3">
            {terms.map((t, i) => (
              <div key={i} className={`bg-white rounded-2xl border transition-all overflow-hidden ${openSection === i ? 'border-rd-teal shadow-sm' : 'border-gray-100'}`}>
                <button onClick={() => setOpenSection(openSection === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <span className="w-8 h-8 rounded-full bg-rd-teal/10 text-rd-teal font-poppins font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                    <div className="min-w-0">
                      <p className="font-poppins font-semibold text-rd-dark">{t.title}</p>
                      <p className="font-dm-sans text-gray-400 text-xs mt-0.5 italic">{t.plain}</p>
                    </div>
                  </div>
                  <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 ml-4 transition-transform ${openSection === i ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openSection === i && (
                  <div className="px-6 pb-6 pl-[4.5rem] border-t border-gray-50">
                    <p className="font-dm-sans text-gray-500 text-sm leading-relaxed pt-4">{t.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 px-6 bg-white">
        <div className="container-main max-w-4xl text-center">
          <h2 className="font-poppins font-bold text-2xl text-rd-dark mb-2">Questions About These Terms?</h2>
          <p className="font-dm-sans text-gray-500 mb-6">Our legal team is happy to clarify anything in plain language.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:legal@repairhub.co" className="inline-flex items-center gap-2 bg-rd-teal text-white font-poppins font-semibold text-sm px-6 py-3 rounded-xl hover:bg-rd-dark transition-colors">
              legal@repairhub.co
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-gray-200 text-rd-dark font-poppins font-semibold text-sm px-6 py-3 rounded-xl hover:bg-rd-cream transition-colors">
              Contact Form
            </Link>
          </div>
          <p className="font-dm-sans text-gray-400 text-xs mt-6">
            Also see our <Link to="/privacy-policy" className="text-rd-teal hover:underline">Privacy Policy</Link> and <Link to="/gdpr" className="text-rd-teal hover:underline">GDPR page</Link>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
