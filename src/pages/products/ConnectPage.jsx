import React from 'react';
import PageLayout from '../../components/PageLayout';

/* Channels that land inside the unified inbox */
const channels = [
  {
    title: 'Live Chat',
    description: 'Talk to website visitors in real time through live chat. Answer questions, quote repairs, and catch new customers before they leave for another shop.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Facebook Messenger',
    description: 'Reply to Facebook chats straight from Connect. Conversations sync both ways whether you answer in Connect or in Facebook Messenger.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Reviews Automation',
    description: 'Get more reviews on Google through automatically scheduling SMS campaigns. View increase in reviews on a dashboard.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: 'Auto-Reply to Google Reviews',
    description: 'New reviews get automated responses. No writing, no logging in. Connect responds for you so every review gets acknowledged, and you remain active on Google.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'RepairHub SMS',
    description: 'Enable two-way conversations with SMS chat and wow your customers with a personalized and engaging experience.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Two-way Email',
    description: 'Integrate your business email account with RepairHub Connect and receive all the emails in your unified inbox.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Customer Information',
    description: 'See who you\'re talking to without leaving the chat. Past tickets, devices, and contact details sit right beside the conversation to avoid any interruptions.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

/* Do More in Less Time */
const efficiency = [
  {
    title: 'Engage Better',
    description: 'Manage conversations and customer experience from the same inbox. Easily engage with customers on text, social, web, and beyond.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Make More Sales',
    description: 'Never lose an opportunity again. Turn conversations into conversions by business messaging 1-on-1 with customers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m0-2c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Level Up Support',
    description: 'Real human conversations need context and history. Track conversation history and respond to queries faster. Wow your customers!',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Save Time',
    description: 'No more tab switching. Goodbye context switching. Stop feeling like a mess, and start winning with RepairHub Connect.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* Manage Customer Experiences */
const experience = [
  {
    title: 'In-App Notifications',
    description: 'Get notification alerts within RepairHub and never miss a vital call or message from your customers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: 'Canned Responses',
    description: 'Have some pre-set templates set up for the most frequently asked questions so you can respond to queries faster.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
  },
  {
    title: 'Threaded 2-way Communication',
    description: 'Receive messages and send replies, build a conversation. With instant access to chat history, serve your customers better.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Chats Assignment',
    description: 'Explore the potential of our deep integration with RepairHub POS by assigning chats to employees so they can respond to queries faster.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Internal Notes',
    description: 'Add repair notes to each chat to improve internal communication and better follow-ups.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Sort and Filter',
    description: 'View all messages together or filter out conversations from specific communication platforms to suit your business needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M6 8h12M9 12h6M11 16h2" />
      </svg>
    ),
  },
  {
    title: 'Search Conversations',
    description: 'Click on the search icon when looking to find a specific customer or a particular text based conversation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'How to purchase RepairHub Connect for my RepairHub POS?',
    a: 'You can get a 7 day free trial to RepairHub Connect by filling the form above. Once you\'re happy with the experience, you can enable subscription from the Billing Module at any time.',
  },
  {
    q: 'Do I need to upgrade my RepairHub plan to enable RepairHub Connect?',
    a: 'RepairHub Connect is available as an add-on and can be purchased separately by Essential and Growth paid subscription plan users. It is included in the Advanced package.',
  },
  {
    q: 'How is my data stored and protected?',
    a: 'We take the privacy of our users seriously and do not store any of their messages or confidential data. All messages are processed in a runtime environment and are not retained.',
  },
  {
    q: 'Do you offer customer support?',
    a: 'We have excellent customer support and you are always prioritized above anything and everything. If you ever run into a problem, you can give us a call, chat with one of our product specialists, or email us at support@repairhub.co',
  },
];

/* Small chat-bubble avatar used across the mockups */
function ChannelDot({ color }) {
  return <span className={`inline-block w-2.5 h-2.5 rounded-full ${color}`} />;
}

export default function ConnectPage() {
  return (
    <PageLayout>
      {/* Hero — split with a live "unified inbox" mockup */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-20 md:py-28 overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex items-center gap-2 bg-rd-lime text-white text-sm font-semibold font-poppins px-4 py-1.5 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                RepairHub Connect
              </span>
              <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                One inbox for every conversation
              </h1>
              <p className="font-dm-sans text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
                Manage your emails, texts, and social messages from one inbox inside RepairHub. Reply to customers in real-time with live chat, and turn more inquiries into booked repairs, all in one screen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="btn-primary text-base px-8 py-3.5">
                  Get Started
                </a>
                <a href="#" className="border border-white/40 hover:border-white text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-full transition-colors duration-200">
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Unified inbox mockup */}
            <div className="lg:col-span-6 relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
                <div className="bg-rd-cream px-5 py-3 flex items-center gap-2 border-b border-gray-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                  <span className="ml-3 font-poppins text-xs font-semibold text-rd-dark/60 tracking-wide uppercase">Connect Inbox</span>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  {[
                    { name: 'Sarah M.', channel: 'Facebook', color: 'bg-[#1877F2]', msg: 'Is my screen repair ready for pickup?', time: '2m', align: 'left' },
                    { name: 'You', channel: 'SMS', color: 'bg-rd-teal', msg: "Yes! It's ready at the counter whenever you can stop by.", time: 'now', align: 'right' },
                    { name: 'Devon K.', channel: 'Email', color: 'bg-orange-500', msg: 'Following up on my battery replacement quote.', time: '14m', align: 'left' },
                    { name: 'Priya R.', channel: 'Live Chat', color: 'bg-purple-500', msg: 'Do you fix cracked tablet screens too?', time: '26m', align: 'left' },
                  ].map((m) => (
                    <div key={m.name} className={`flex ${m.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] ${m.align === 'right' ? 'bg-rd-teal text-white' : 'bg-rd-cream text-rd-dark'} rounded-2xl px-4 py-2.5`}>
                        <div className="flex items-center gap-1.5 mb-1">
                          <ChannelDot color={m.color} />
                          <span className={`font-poppins text-[11px] font-semibold ${m.align === 'right' ? 'text-white/80' : 'text-rd-dark/50'}`}>{m.name} · {m.channel}</span>
                        </div>
                        <p className="font-dm-sans text-sm leading-snug">{m.msg}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex absolute -bottom-5 -left-5 bg-rd-lime text-white rounded-xl px-4 py-2.5 shadow-lg items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-poppins text-xs font-bold">7 channels, 0 tab switches</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Inbox — Simplify Cross Platform Communication */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-poppins text-sm font-semibold text-rd-teal uppercase tracking-wider">Unified Inbox</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-3 mb-4">
              Simplify Cross Platform Communication
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
              No more switching tabs. Facebook Messenger, Google Business, SMS, and emails all land in one inbox so you never miss a customer message or lose a repair to a slow reply.
            </p>
          </div>

          {/* Conversation-thread layout: alternating bubbles down a center line */}
          <div className="relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-gray-200 -translate-x-1/2" />
            <div className="flex flex-col gap-6 md:gap-4">
              {channels.map((ch, i) => {
                const left = i % 2 === 0;
                return (
                  <div key={ch.title} className={`md:grid md:grid-cols-2 md:gap-10 items-center`}>
                    <div className={`${left ? 'md:col-start-1' : 'md:col-start-2'} ${left ? 'md:text-right' : 'md:text-left'} relative`}>
                      <div className={`bg-rd-cream rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 ${left ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'} max-w-md`}>
                        <div className={`flex items-center gap-3 mb-2 ${left ? 'md:flex-row-reverse' : ''}`}>
                          <div className="w-10 h-10 bg-rd-teal/10 text-rd-teal rounded-lg flex items-center justify-center flex-shrink-0">
                            {ch.icon}
                          </div>
                          <h3 className="font-poppins font-semibold text-rd-dark text-base">{ch.title}</h3>
                        </div>
                        <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{ch.description}</p>
                      </div>
                      <span className={`hidden md:block absolute top-8 w-3 h-3 rounded-full bg-rd-teal ring-4 ring-white ${left ? 'right-[-1.6rem]' : 'left-[-1.6rem]'}`} />
                    </div>
                    <div className="hidden md:block" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Be Efficient — Do More in Less Time */}
      <section className="py-20 md:py-24 bg-rd-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-main relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-poppins text-sm font-semibold text-rd-mint uppercase tracking-wider">Be Efficient</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-white mt-3 mb-4">
              Do More in Less Time
            </h2>
            <p className="font-dm-sans text-white/70 text-lg leading-relaxed">
              Easily engage with more customers, get more repair jobs, respond to queries and serve your customers faster than ever.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {efficiency.map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors duration-300">
                <div className="w-12 h-12 bg-rd-lime text-white rounded-xl flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg mb-3">{item.title}</h3>
                <p className="font-dm-sans text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manage Customer Experiences */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-4">
                Manage Customer Experiences
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed mb-8">
                Reduce the hassle of cross platform communication and enjoy the powerful feature set of RepairHub Connect.
              </p>
              <a href="#" className="btn-primary text-base px-7 py-3 inline-block">
                Get Started
              </a>
            </div>

            {/* App panel mockup listing every feature as a checklist row */}
            <div className="lg:col-span-7">
              <div className="bg-rd-cream rounded-2xl overflow-hidden shadow-sm">
                <div className="bg-rd-dark px-6 py-4 flex items-center justify-between">
                  <span className="font-poppins text-white font-semibold text-sm">Conversation Settings</span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rd-lime" />
                    <span className="font-dm-sans text-white/70 text-xs">Live</span>
                  </span>
                </div>
                <div className="divide-y divide-gray-200/70">
                  {experience.map((feat) => (
                    <div key={feat.title} className="flex items-start gap-4 px-6 py-4 hover:bg-white/60 transition-colors duration-200">
                      <div className="w-9 h-9 bg-white text-rd-teal rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        {feat.icon}
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-rd-dark text-sm mb-1">{feat.title}</h3>
                        <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{feat.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-gradient-to-br from-rd-dark to-rd-teal">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center text-white">
            <svg className="w-10 h-10 text-rd-mint mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="font-dm-sans text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
              "RepairHub Connect seems to be a great feature, excellent service by Musa — he goes beyond for my help. I'm not an IT person but he explains in a very professional and friendly manner, best recommended feature so far."
            </p>
            <div>
              <div className="font-poppins font-semibold text-rd-mint">Catherine Morris Hinerman</div>
              <div className="font-dm-sans text-white/60 text-sm mt-1">RepairHub Connect Customer</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-rd-cream">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-12 text-center">
              All the Answers You're Looking For
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
