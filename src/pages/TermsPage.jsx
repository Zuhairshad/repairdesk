import React from 'react';
import PageLayout from '../components/PageLayout';

const sections = [
  { title: 'Acceptance of Terms', content: 'By accessing or using RepairDesk services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service. These terms apply to all visitors, users, and others who access or use the service.' },
  { title: 'Service Description', content: 'RepairDesk provides a cloud-based point-of-sale and repair management software platform designed for repair shops. We reserve the right to modify, suspend, or discontinue the service at any time with reasonable notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of the service.' },
  { title: 'User Accounts', content: 'You are responsible for safeguarding the password you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.' },
  { title: 'Fees and Payment', content: 'Some features of the service are provided on a subscription basis. You will be billed in advance on a recurring and periodic basis. At the end of each billing period, your subscription will automatically renew under the same conditions unless you cancel it or RepairDesk cancels it. All fees are exclusive of all taxes, levies, or duties imposed by taxing authorities.' },
  { title: 'Intellectual Property', content: 'The service and its original content, features, and functionality are and will remain the exclusive property of RepairDesk Inc. and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of RepairDesk.' },
  { title: 'Limitation of Liability', content: 'In no event shall RepairDesk, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of (or inability to access or use) the service.' },
  { title: 'Governing Law', content: 'These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Delaware.' },
  { title: 'Changes to Terms', content: 'We reserve the right to modify or replace these terms at any time. We will provide at least 30 days notice prior to any new terms taking effect. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.' },
];

export default function TermsPage() {
  return (
    <PageLayout showCTA={false}>
      <section className="bg-gradient-to-br from-rd-dark to-rd-teal text-white py-20 px-6">
        <div className="container-main max-w-3xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">Terms &amp; Conditions</h1>
          <p className="text-white/70 font-dm-sans text-lg">Last updated: January 1, 2024</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main max-w-3xl">
          <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-12">
            Please read these Terms and Conditions carefully before using the RepairDesk software platform operated by RepairDesk Inc.
          </p>
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={section.title}>
                <h2 className="font-poppins font-bold text-xl text-rd-dark mb-3">{i + 1}. {section.title}</h2>
                <p className="text-gray-600 font-dm-sans leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
