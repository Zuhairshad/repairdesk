import React from 'react';
import PageLayout from '../components/PageLayout';

const rights = [
  { title: 'Right to Access', desc: 'You have the right to request copies of your personal data. We will provide this information within 30 days.' },
  { title: 'Right to Rectification', desc: 'You have the right to request that we correct any information you believe is inaccurate or incomplete.' },
  { title: 'Right to Erasure', desc: 'You have the right to request that we erase your personal data, under certain conditions.' },
  { title: 'Right to Restrict Processing', desc: 'You have the right to request that we restrict the processing of your personal data, under certain conditions.' },
  { title: 'Right to Data Portability', desc: 'You have the right to request that we transfer your data to another organization, or directly to you, under certain conditions.' },
  { title: 'Right to Object', desc: 'You have the right to object to our processing of your personal data, under certain conditions.' },
];

export default function GDPRPage() {
  return (
    <PageLayout showCTA={false}>
      <section className="bg-gradient-to-br from-rd-dark to-rd-teal text-white py-20 px-6">
        <div className="container-main max-w-3xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">GDPR Compliance</h1>
          <p className="text-white/80 font-dm-sans text-lg max-w-2xl">
            RepairDesk is committed to protecting the personal data of our users in compliance with the General Data Protection Regulation (GDPR).
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main max-w-3xl space-y-12">
          <div>
            <h2 className="font-poppins font-bold text-2xl text-rd-dark mb-4">What Data We Hold</h2>
            <p className="text-gray-600 font-dm-sans leading-relaxed">
              As a data processor acting on behalf of our customers (data controllers), RepairDesk processes personal data that you input into our platform. This includes customer names, contact information, device details, and transaction records. We act only on documented instructions from our customers regarding this data.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-2xl text-rd-dark mb-4">Lawful Basis for Processing</h2>
            <p className="text-gray-600 font-dm-sans leading-relaxed">
              We process personal data under the following lawful bases: contractual necessity (to perform our contract with you), legitimate interests (to improve our services and prevent fraud), compliance with legal obligations, and consent (for marketing communications). We do not process special categories of personal data.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-2xl text-rd-dark mb-6">Your Data Subject Rights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {rights.map((r) => (
                <div key={r.title} className="bg-rd-cream rounded-xl p-6">
                  <h3 className="font-poppins font-semibold text-rd-dark mb-2">{r.title}</h3>
                  <p className="text-gray-500 text-sm font-dm-sans leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-2xl text-rd-dark mb-4">International Data Transfers</h2>
            <p className="text-gray-600 font-dm-sans leading-relaxed">
              RepairDesk is headquartered in the United States. If you are located in the European Economic Area, your personal data will be transferred to and processed in the United States. We rely on Standard Contractual Clauses approved by the European Commission for such transfers. A copy of our Data Processing Agreement is available upon request.
            </p>
          </div>

          <div>
            <h2 className="font-poppins font-bold text-2xl text-rd-dark mb-4">Data Retention</h2>
            <p className="text-gray-600 font-dm-sans leading-relaxed">
              We retain personal data for as long as necessary to provide our services and comply with legal obligations. Customer data is retained for the duration of the subscription plus 90 days, after which it is permanently deleted. You may request earlier deletion at any time by contacting our Data Protection Officer.
            </p>
          </div>

          <div className="bg-rd-teal/10 border border-rd-teal/20 rounded-2xl p-8">
            <h2 className="font-poppins font-bold text-xl text-rd-dark mb-3">Contact Our Data Protection Officer</h2>
            <p className="text-gray-600 font-dm-sans mb-4">
              To exercise your rights or for any GDPR-related inquiries, contact our Data Protection Officer:
            </p>
            <div className="space-y-2 text-sm font-poppins text-gray-700">
              <p><strong>Email:</strong> dpo@repairdesk.co</p>
              <p><strong>Postal address:</strong> RepairDesk Inc., 108 West 13th Street, Wilmington, Delaware 19801, USA</p>
              <p><strong>Response time:</strong> Within 30 days of receipt</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
