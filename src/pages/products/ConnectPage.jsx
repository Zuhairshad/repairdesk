import React from 'react';
import PageLayout from '../../components/PageLayout';

const features = [
  {
    title: 'Facebook Messenger',
    description: 'Reply to Facebook chats straight from Connect. Conversations sync both ways whether you answer in Connect or in Facebook Messenger.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Reviews Automation',
    description: 'Get more reviews on Google through automatically scheduling SMS campaigns. View increase in reviews on a dashboard.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Auto-Reply to Google Reviews',
    description: 'New reviews get automated responses. No writing, no logging in. Connect responds for you so every review gets acknowledged, and you remain active on Google.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Customer Information',
    description: 'See who you\'re talking to without leaving the chat. Past tickets, devices, and contact details sit right beside the conversation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'In-App Notifications',
    description: 'Never miss a new message. Instant in-app alerts let your team respond fast and keep customers engaged throughout the repair process.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: 'Canned Responses',
    description: 'Save your most common replies and send them in one click. Speed up every conversation without sacrificing a personal touch.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
  },
  {
    title: 'Threaded 2-Way Communication',
    description: 'Full conversation threads for SMS, social, and email — all in one place. Context is always visible so your team never has to ask customers to repeat themselves.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Chats Assignment',
    description: 'Route conversations to the right team member. Assign chats based on expertise or availability and keep every customer interaction accountable.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Search Conversations',
    description: 'Instantly find any past conversation by customer name, phone, keyword, or date. No more digging through inboxes or old SMS threads.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'How to purchase RepairDesk Connect?',
    a: 'Start with a 7-day free trial by filling in the sign-up form. You can enable a paid subscription from the Billing Module in your RepairDesk account at any time.',
  },
  {
    q: 'Do I need to upgrade my plan?',
    a: 'RepairDesk Connect is an Add-on available for Essential and Growth plan users. It is included by default for customers on the Advanced plan.',
  },
  {
    q: 'How is data stored?',
    a: 'We do not store any messages. All messages are processed in a runtime environment and are not retained on our servers.',
  },
];

export default function ConnectPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 md:py-32">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-rd-lime text-rd-dark text-sm font-semibold font-poppins px-4 py-1.5 rounded-full mb-6">
              RepairDesk Connect
            </span>
            <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              RepairDesk Connect
            </h1>
            <p className="font-dm-sans text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Manage your emails, texts, and social messages from one inbox inside RepairDesk. Reply to customers in real-time with live chat, turn more inquiries into booked repairs, all in one screen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary text-base px-8 py-3.5">
                Sign Up For A Free Trial
              </a>
              <a href="#" className="border border-white/40 hover:border-white text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-full transition-colors duration-200">
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Simplify Cross Platform Communication */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-6">
                Simplify Cross Platform Communication
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed mb-6">
                No more switching tabs. Facebook Messenger, Google Business, SMS, emails — all land in one inbox so you never miss a customer message or lose a repair to a slow reply.
              </p>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed mb-8">
                Talk to website visitors in real time through live chat. Answer questions, quote repairs, and catch new customers before they leave for another shop.
              </p>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed font-medium">
                Enable two-way conversations with SMS chat and wow your customers.
              </p>
            </div>
            <div className="bg-rd-cream rounded-2xl p-10 flex flex-col gap-5">
              {['Facebook Messenger', 'Google Business', 'SMS & Texts', 'Email', 'Live Chat', 'Website Widget'].map((ch) => (
                <div key={ch} className="flex items-center gap-4 bg-white rounded-xl px-5 py-3 shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-rd-teal flex-shrink-0" />
                  <span className="font-poppins font-medium text-rd-dark text-sm">{ch}</span>
                  <span className="ml-auto text-xs text-rd-teal font-semibold font-poppins uppercase tracking-wide">Connected</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Do More in Less Time */}
      <section className="py-20 bg-rd-cream">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-4">
              Do More in Less Time
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              Manage conversations and customer experience from the same inbox. Easily engage with customers on text, social, web, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-rd-cream rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-14 h-14 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-5 group-hover:bg-rd-teal group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{feature.title}</h3>
                <p className="font-dm-sans text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-rd-dark to-rd-teal">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center text-white">
            <svg className="w-10 h-10 text-rd-lime mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-dm-sans text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
              "RepairDesk Connect seems to be a great feature. Having all our customer messages in one place has completely changed how we run our shop."
            </p>
            <div>
              <div className="font-poppins font-semibold text-rd-lime">RepairDesk Customer</div>
              <div className="font-dm-sans text-white/60 text-sm mt-1">Verified User</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-rd-cream">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{faq.q}</h3>
                  <p className="font-dm-sans text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
