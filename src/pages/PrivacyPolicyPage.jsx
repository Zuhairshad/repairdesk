import React from 'react';
import PageLayout from '../components/PageLayout';

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes name, email address, company name, phone number, billing information, and any other information you choose to provide. We also automatically collect certain information when you use our services, including log data, device information, and usage data.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to provide, maintain, and improve our services; process transactions; send you technical notices and support messages; respond to your comments and questions; and send you marketing communications (where permitted). We may also use your information to monitor and analyze trends, comply with legal obligations, and protect the rights and property of RepairDesk and our users.`,
  },
  {
    title: 'Information Sharing',
    content: `We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as described in this policy. We may share information with vendors, consultants, and service providers who need access to such information to carry out work on our behalf. We may also disclose information when required by law or to protect our rights.`,
  },
  {
    title: 'Cookies and Tracking',
    content: `We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.`,
  },
  {
    title: 'Data Retention',
    content: `We retain your information for as long as your account is active or as needed to provide you services. You may request deletion of your account and associated data at any time by contacting us. We will respond to your request within 30 days. Some data may be retained for longer periods where required by law or for legitimate business purposes.`,
  },
  {
    title: 'Your Rights',
    content: `Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data; the right to data portability; and the right to object to processing. To exercise any of these rights, please contact us at privacy@repairdesk.co. We will respond to your request within 30 days.`,
  },
  {
    title: 'Security',
    content: `We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We use industry-standard encryption for data in transit and at rest. However, no security system is impenetrable and we cannot guarantee the absolute security of our systems.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions about this Privacy Policy, please contact us at: RepairDesk Inc., 108 West 13th Street, Wilmington, Delaware 19801. Email: privacy@repairdesk.co. Phone: +1-855-919-1256.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout showCTA={false}>
      <section className="bg-gradient-to-br from-rd-dark to-rd-teal text-white py-20 px-6">
        <div className="container-main max-w-3xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-white/70 font-dm-sans text-lg">Last updated: January 1, 2024</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main max-w-3xl">
          <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-12">
            At RepairDesk, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cloud-based repair shop management software.
          </p>
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={section.title}>
                <h2 className="font-poppins font-bold text-xl text-rd-dark mb-3">
                  {i + 1}. {section.title}
                </h2>
                <p className="text-gray-600 font-dm-sans leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
