import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Information We Collect',
    content: [
      'Account information: name, email address, company name, phone number, billing details.',
      'Usage data: pages visited, features used, session duration, error logs.',
      'Device information: browser type, operating system, IP address.',
      'Communications: emails, support tickets, survey responses you send us.',
      'Payment information: processed by our PCI-compliant payment processors — we do not store full card numbers.',
    ],
  },
  {
    title: 'How We Use Your Information',
    content: [
      'Provide, maintain, and improve the RepairDesk platform.',
      'Process transactions and send billing communications.',
      'Send product updates, security notices, and support messages.',
      'Analyse usage patterns to fix bugs and plan new features.',
      'Comply with legal obligations and protect RepairDesk and its users.',
    ],
  },
  {
    title: 'Information Sharing',
    content: [
      'We do not sell your personal data to third parties, ever.',
      'We share data only with service providers who need it to deliver our platform (see sub-processors on the GDPR page).',
      'We may disclose data when required by law, court order, or regulatory request.',
      'If RepairDesk is acquired, data transfers under the same privacy terms.',
    ],
  },
  {
    title: 'Cookies & Tracking',
    content: [
      'Essential cookies: required for login, session management, and security.',
      'Analytics cookies: help us understand how the product is used (opt-out available).',
      'Marketing cookies: only placed with your consent.',
      'You can manage cookie preferences in our cookie banner or your browser settings.',
    ],
  },
  {
    title: 'Data Security',
    content: [
      'AES-256 encryption at rest; TLS 1.3 in transit.',
      'Role-based access controls limit who can see your data internally.',
      'Regular penetration tests and independent security audits.',
      'Automated daily backups stored across multiple geographic regions.',
    ],
  },
  {
    title: 'Data Retention',
    content: [
      'Active account data is retained for the lifetime of your subscription.',
      'After account cancellation, data is retained for 90 days to support recovery, then deleted.',
      'Billing records are retained for 7 years as required by tax law.',
      'Backup copies are purged on a rolling 30-day cycle.',
    ],
  },
  {
    title: 'Your Rights',
    content: [
      'Access: request a copy of all data we hold about you.',
      'Correction: update inaccurate or incomplete information.',
      'Deletion: request erasure of your personal data (subject to legal retention obligations).',
      'Portability: receive your data in a machine-readable format.',
      'Contact privacy@repairdesk.co to exercise any of these rights.',
    ],
  },
  {
    title: 'Changes to This Policy',
    content: [
      'We may update this policy to reflect changes in our practices or legal requirements.',
      'We will notify you via email and in-app notification at least 30 days before material changes take effect.',
      'Continued use of RepairDesk after the effective date constitutes acceptance.',
    ],
  },
  {
    title: 'Contact Us',
    content: [
      'Privacy enquiries: privacy@repairdesk.co',
      'General support: hello@repairdesk.co',
      'Phone: +1 302-207-7373',
      'Address: 108 W 13th St, Wilmington, DE 19801, USA',
    ],
  },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <PageLayout showCTA={false}>
      {/* Hero */}
      <section className="bg-white border-b border-gray-100 py-20 px-6">
        <div className="container-main max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-rd-teal/10 border border-rd-teal/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-rd-teal font-poppins font-semibold text-xs tracking-wider uppercase">Legal</span>
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl text-rd-dark mb-4">Privacy Policy</h1>
          <p className="text-gray-600 font-dm-sans text-base mb-4">
            We care about your privacy. This policy explains what data we collect, why we collect it, and how you can control it.
          </p>
          <div className="flex items-center gap-4 text-gray-400 font-dm-sans text-sm">
            <span>Last updated: 1 January 2025</span>
            <span>·</span>
            <span>Effective: 1 January 2025</span>
          </div>
        </div>
      </section>

      {/* Quick summary callout */}
      <section className="bg-rd-teal py-10 px-6">
        <div className="container-main max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-6 text-white text-center">
            <div>
              <p className="font-poppins font-bold text-lg mb-1">We never sell your data</p>
              <p className="font-dm-sans text-white/70 text-sm">Your data belongs to you, not advertisers.</p>
            </div>
            <div>
              <p className="font-poppins font-bold text-lg mb-1">You can delete anytime</p>
              <p className="font-dm-sans text-white/70 text-sm">Request full data deletion by contacting us.</p>
            </div>
            <div>
              <p className="font-poppins font-bold text-lg mb-1">GDPR & CCPA compliant</p>
              <p className="font-dm-sans text-white/70 text-sm">Your privacy rights are fully respected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content with TOC */}
      <section className="py-16 px-6 bg-rd-cream">
        <div className="container-main max-w-5xl">
          <div className="grid lg:grid-cols-[240px_1fr] gap-12">
            {/* Sticky Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="font-poppins font-bold text-xs text-gray-400 tracking-wider uppercase mb-4">Contents</p>
                <nav className="space-y-1">
                  {sections.map((s, i) => (
                    <button key={i} onClick={() => document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-dm-sans text-gray-500 hover:bg-rd-cream hover:text-rd-teal transition-colors">
                      {i + 1}. {s.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Sections */}
            <div className="space-y-4">
              {sections.map((s, i) => (
                <div key={i} id={`section-${i}`} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <button onClick={() => setActiveSection(activeSection === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-rd-teal text-white font-poppins font-bold text-xs flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <span className="font-poppins font-semibold text-rd-dark">{s.title}</span>
                    </div>
                    <svg className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${activeSection === i ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {activeSection === i && (
                    <div className="px-6 pb-6 pl-14">
                      <ul className="space-y-2">
                        {s.content.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 font-dm-sans text-gray-500 text-sm">
                            <span className="text-rd-teal mt-1 flex-shrink-0">·</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 px-6 bg-white">
        <div className="container-main max-w-4xl text-center">
          <h2 className="font-poppins font-bold text-2xl text-rd-dark mb-2">Questions About Your Privacy?</h2>
          <p className="font-dm-sans text-gray-500 mb-6">Our privacy team responds within 48 hours on business days.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:privacy@repairdesk.co" className="inline-flex items-center gap-2 bg-rd-teal text-white font-poppins font-semibold text-sm px-6 py-3 rounded-xl hover:bg-rd-dark transition-colors">
              privacy@repairdesk.co
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-gray-200 text-rd-dark font-poppins font-semibold text-sm px-6 py-3 rounded-xl hover:bg-rd-cream transition-colors">
              Contact Form
            </Link>
          </div>
          <p className="font-dm-sans text-gray-400 text-xs mt-6">
            Also see our <Link to="/gdpr" className="text-rd-teal hover:underline">GDPR page</Link> and <Link to="/terms" className="text-rd-teal hover:underline">Terms of Service</Link>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
