import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const StarIcon = ({ filled = true, size = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={size} viewBox="0 0 24 24" fill={filled ? '#FACC15' : '#D1D5DB'} stroke={filled ? '#EAB308' : '#9CA3AF'} strokeWidth={0.5}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const reviewCards = [
  { name: 'Sarah M.', stars: 5, text: 'Fixed my iPhone screen in 30 minutes. Incredible service!', time: '2 hours ago', avatar: 'S' },
  { name: 'James K.', stars: 5, text: 'Best repair shop in town. Fair pricing and fast turnaround.', time: '5 hours ago', avatar: 'J' },
  { name: 'Priya D.', stars: 4, text: 'Great repair work on my laptop. Would definitely recommend.', time: '1 day ago', avatar: 'P' },
  { name: 'Marcus T.', stars: 5, text: 'They saved my water-damaged phone! Thought it was gone for good.', time: '2 days ago', avatar: 'M' },
  { name: 'Linda R.', stars: 5, text: 'Professional, quick, and honest. Rare combo these days.', time: '3 days ago', avatar: 'L' },
  { name: 'Omar F.', stars: 4, text: 'Solid battery replacement. Phone works like new again.', time: '4 days ago', avatar: 'O' },
];

const faqs = [
  { q: 'How quickly are review requests sent after a repair?', a: 'Review requests are sent automatically within minutes of marking a repair as complete. You can customize the delay — some shops prefer 1 hour so the customer has time to test their device, others send immediately at pickup. Both email and SMS channels are available.' },
  { q: 'Does this integrate with my existing Google Business Profile?', a: 'Yes. You connect your verified Google Business Profile directly inside RepairDesk. Once linked, new reviews appear in your dashboard in real time, and you can respond to them without ever opening Google. The integration takes about 2 minutes to set up.' },
  { q: 'What happens when a customer leaves a negative review?', a: 'You receive an instant alert via email and in-app notification. The dashboard highlights negative reviews so you can respond quickly. Our sentiment filter can also intercept unhappy customers before they reach Google, routing them to a private feedback form instead.' },
  { q: 'Can I customize the review request messages?', a: 'Absolutely. You can edit both the SMS and email templates, include your shop name and branding, and even A/B test different messages. Templates support dynamic fields like customer name, device type, and repair type for a personal touch.' },
  { q: 'How is NPS tracking different from star ratings?', a: 'NPS (Net Promoter Score) measures overall loyalty — how likely a customer is to recommend your shop. Star ratings reflect individual repair experiences. Together they give you the full picture: NPS shows your brand health trend, while star ratings show day-to-day service quality.' },
];

export default function ReviewsManagementPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* Hero — giant rating display with floating review cards */}
      <section className="relative overflow-hidden bg-gradient-to-b from-rd-dark via-[#013a3f] to-rd-teal py-24 md:py-36">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 5l5.59 11.33L48 18.24l-9 8.77 2.12 12.39L30 33.27l-11.12 6.13L21 27.01l-9-8.77 12.41-1.91L30 5z\' fill=\'%23fff\' fill-opacity=\'1\'/%3E%3C/svg%3E")' }} />
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-rd-lime animate-pulse" />
                <span className="font-dm-sans text-sm text-white/90">Reviews Management</span>
              </div>
              <h1 className="font-poppins text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] mb-6">
                Turn every repair into a
                <span className="block text-rd-lime mt-1">5-star review</span>
              </h1>
              <p className="font-dm-sans text-lg text-white/70 max-w-lg mb-10 leading-relaxed">
                Automatically request reviews after every repair, monitor your reputation in real time, and respond to customers from one dashboard.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/start-trial" className="inline-flex items-center gap-2 bg-rd-lime text-rd-dark font-poppins font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition-all">
                  Start Free Trial
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
                <Link to="/demo" className="inline-flex items-center gap-2 border border-white/30 text-white font-poppins font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all">
                  Watch Demo
                </Link>
              </div>
            </div>

            {/* Giant rating card */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-sm">
                <div className="text-center mb-6">
                  <div className="font-poppins text-7xl font-bold text-rd-dark leading-none">4.8</div>
                  <div className="flex justify-center gap-1 mt-3">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= 5} size="w-7 h-7" />)}
                  </div>
                  <div className="font-dm-sans text-sm text-gray-500 mt-2">Based on 847 reviews</div>
                </div>
                {/* Rating bars */}
                {[
                  { stars: 5, pct: 78 }, { stars: 4, pct: 14 }, { stars: 3, pct: 5 },
                  { stars: 2, pct: 2 }, { stars: 1, pct: 1 },
                ].map(r => (
                  <div key={r.stars} className="flex items-center gap-3 mb-2">
                    <span className="font-dm-sans text-sm text-gray-500 w-4">{r.stars}</span>
                    <StarIcon size="w-3.5 h-3.5" />
                    <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div className="bg-yellow-400 h-full rounded-full" style={{ width: `${r.pct}%` }} />
                    </div>
                    <span className="font-dm-sans text-xs text-gray-400 w-8 text-right">{r.pct}%</span>
                  </div>
                ))}
              </div>
              {/* Floating mini review card */}
              <div className="absolute -left-4 bottom-8 bg-white rounded-xl shadow-lg p-4 max-w-[200px] hidden md:block border border-gray-100">
                <div className="flex gap-1 mb-1">{[1,2,3,4,5].map(i => <StarIcon key={i} size="w-3 h-3" />)}</div>
                <p className="font-dm-sans text-xs text-gray-600 leading-snug">"Absolutely the best repair experience!"</p>
                <span className="font-dm-sans text-[10px] text-gray-400 mt-1 block">— Rachel T., just now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Review Flow Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mb-4">Automated review flow</h2>
            <p className="font-dm-sans text-gray-500 text-lg">From completed repair to 5-star rating — hands-free.</p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            {/* Connector line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-rd-teal via-rd-lime to-rd-teal -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {[
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>), title: 'Repair Complete', desc: 'Ticket marked as picked up in RepairDesk' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>), title: 'Send Request', desc: 'SMS or email sent automatically to customer' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>), title: 'Customer Reviews', desc: 'Happy customers land on your Google page' },
                { icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>), title: 'Rating Goes Up', desc: 'Watch your star rating climb week by week' },
              ].map((step, i) => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-rd-teal text-white flex items-center justify-center mb-4 shadow-lg shadow-rd-teal/20">
                    {step.icon}
                  </div>
                  <div className="bg-rd-lime text-rd-dark font-poppins text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center mb-3 -mt-1">{i + 1}</div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-1">{step.title}</h3>
                  <p className="font-dm-sans text-sm text-gray-500 max-w-[180px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Integration */}
      <section className="py-20 md:py-28 bg-rd-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm mb-6">
                {/* Google G icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-poppins text-sm font-semibold text-gray-700">Google Reviews</span>
              </div>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mb-5">
                Your Google rating,<br />inside RepairDesk
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg mb-8 leading-relaxed">
                Connect your Google Business Profile and manage everything from one place. See new reviews instantly, respond without switching tabs, and track how your rating changes over time.
              </p>
              <ul className="space-y-4">
                {['Real-time review sync from Google', 'Respond to reviews without leaving RepairDesk', 'Negative review alerts via email and in-app', 'Review widget code for your website'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-rd-teal mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="font-dm-sans text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Google integration mockup */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="font-dm-sans text-xs text-gray-400 ml-3">RepairDesk — Reviews Dashboard</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-poppins text-sm text-gray-400 mb-1">Overall Rating</div>
                    <div className="flex items-end gap-2">
                      <span className="font-poppins text-4xl font-bold text-rd-dark">4.8</span>
                      <div className="flex gap-0.5 mb-1">{[1,2,3,4,5].map(i => <StarIcon key={i} size="w-4 h-4" />)}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-dm-sans text-sm text-gray-400">This month</div>
                    <div className="font-poppins text-2xl font-bold text-green-600">+34</div>
                    <div className="font-dm-sans text-xs text-gray-400">new reviews</div>
                  </div>
                </div>
                {/* Mini chart area */}
                <div className="bg-rd-cream/60 rounded-xl p-4">
                  <div className="font-poppins text-xs text-gray-400 mb-3">Rating trend — last 6 months</div>
                  <svg viewBox="0 0 320 80" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3d405b" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#3d405b" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 60 L53 50 L107 45 L160 35 L213 22 L267 18 L320 10 L320 80 L0 80Z" fill="url(#chartGrad)" />
                    <path d="M0 60 L53 50 L107 45 L160 35 L213 22 L267 18 L320 10" stroke="#3d405b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    {[{x:0,y:60},{x:53,y:50},{x:107,y:45},{x:160,y:35},{x:213,y:22},{x:267,y:18},{x:320,y:10}].map((p,i) => (
                      <circle key={i} cx={p.x} cy={p.y} r="4" fill="#fff" stroke="#3d405b" strokeWidth="2" />
                    ))}
                    {['Mar','Apr','May','Jun','Jul','Aug','Sep'].map((m,i) => (
                      <text key={m} x={i * 53.3} y="78" fill="#9CA3AF" fontSize="8" fontFamily="sans-serif">{m}</text>
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Cards Masonry */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mb-4">All your reviews, one feed</h2>
            <p className="font-dm-sans text-gray-500 text-lg">Monitor every review as it comes in. No more checking Google manually.</p>
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 max-w-5xl mx-auto">
            {reviewCards.map((card, idx) => (
              <div key={idx} className="break-inside-avoid bg-rd-cream rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-rd-teal text-white flex items-center justify-center font-poppins font-semibold text-sm">{card.avatar}</div>
                  <div>
                    <div className="font-poppins font-semibold text-rd-dark text-sm">{card.name}</div>
                    <div className="font-dm-sans text-xs text-gray-400">{card.time}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">{[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= card.stars} size="w-4 h-4" />)}</div>
                <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{card.text}</p>
                {idx % 3 === 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                      <span className="font-dm-sans text-xs text-rd-teal font-medium">Replied in 4 min</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Respond Faster Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-rd-dark to-[#013a3f]">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Reply template mockup */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto lg:mx-0">
                <div className="bg-rd-teal px-5 py-3 flex items-center justify-between">
                  <span className="font-poppins text-white text-sm font-semibold">Reply to Review</span>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <div className="flex gap-0.5 mb-1">{[1,2,3,4,5].map(i => <StarIcon key={i} size="w-3.5 h-3.5" />)}</div>
                    <p className="font-dm-sans text-xs text-gray-600">"Best repair shop I've ever been to!"</p>
                    <span className="font-dm-sans text-[10px] text-gray-400">— Sarah M.</span>
                  </div>
                  <div className="mb-4">
                    <label className="font-dm-sans text-xs text-gray-400 block mb-2">Choose template</label>
                    <div className="flex gap-2 flex-wrap">
                      {['Thank You', '5-Star Reply', 'Come Again'].map(t => (
                        <button key={t} className={`font-dm-sans text-xs px-3 py-1.5 rounded-full border transition-colors ${t === '5-Star Reply' ? 'bg-rd-teal text-white border-rd-teal' : 'border-gray-200 text-gray-500 hover:border-rd-teal'}`}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-rd-cream rounded-xl p-3 mb-4">
                    <p className="font-dm-sans text-sm text-gray-700 leading-relaxed">
                      Thank you so much, Sarah! We are thrilled you had a great experience. Your kind words mean a lot to our team. See you next time!
                    </p>
                  </div>
                  <button className="w-full bg-rd-teal text-white font-poppins font-semibold text-sm py-2.5 rounded-xl hover:bg-rd-teal/90 transition-colors flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                    Send Reply
                  </button>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-5">
                Respond to reviews<br />in seconds, not hours
              </h2>
              <p className="font-dm-sans text-lg text-white/70 mb-8 leading-relaxed">
                Use pre-built reply templates or write your own. One click sends your response straight to Google. No more copy-pasting, no more tab switching.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '< 5 min', label: 'Avg. reply time' },
                  { val: '100%', label: 'Response rate' },
                  { val: '12', label: 'Reply templates' },
                  { val: '3x', label: 'Faster than manual' },
                ].map(stat => (
                  <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="font-poppins text-2xl font-bold text-rd-lime">{stat.val}</div>
                    <div className="font-dm-sans text-sm text-white/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Star Rating Growth Chart */}
      <section className="py-20 md:py-28 bg-rd-cream">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-2">
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark mb-5">
                Track your growth, month by month
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg mb-6 leading-relaxed">
                Review analytics and NPS tracking give you the numbers behind your reputation. See exactly what is working and where to improve.
              </p>
              <div className="space-y-4">
                {[
                  { label: 'NPS Score', value: '72', color: 'bg-rd-teal' },
                  { label: 'Response Rate', value: '98%', color: 'bg-rd-lime' },
                  { label: 'Avg. Rating', value: '4.8', color: 'bg-yellow-400' },
                ].map(metric => (
                  <div key={metric.label} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <div className={`w-3 h-3 rounded-full ${metric.color}`} />
                    <span className="font-dm-sans text-gray-600 flex-1">{metric.label}</span>
                    <span className="font-poppins font-bold text-rd-dark text-lg">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Monthly growth SVG chart */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="font-poppins font-semibold text-rd-dark">Monthly Review Count</div>
                <div className="flex items-center gap-1 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  <span className="font-dm-sans text-sm font-semibold">+127% growth</span>
                </div>
              </div>
              <svg viewBox="0 0 400 160" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3d405b" />
                    <stop offset="100%" stopColor="#3d405b" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[0,40,80,120].map(y => (
                  <line key={y} x1="30" y1={y + 10} x2="390" y2={y + 10} stroke="#F1F5F9" strokeWidth="1" />
                ))}
                {/* Bars */}
                {[
                  {m:'Jan',h:25},{m:'Feb',h:32},{m:'Mar',h:38},{m:'Apr',h:45},{m:'May',h:52},
                  {m:'Jun',h:48},{m:'Jul',h:58},{m:'Aug',h:65},{m:'Sep',h:72},{m:'Oct',h:80},
                  {m:'Nov',h:88},{m:'Dec',h:100},
                ].map((bar, i) => {
                  const x = 40 + i * 29;
                  const barH = bar.h * 1.15;
                  return (
                    <g key={bar.m}>
                      <rect x={x} y={130 - barH} width="18" height={barH} rx="4" fill="url(#barGrad)" />
                      <text x={x + 9} y="148" fill="#9CA3AF" fontSize="7" textAnchor="middle" fontFamily="sans-serif">{bar.m}</text>
                      <text x={x + 9} y={125 - barH} fill="#3d405b" fontSize="7" textAnchor="middle" fontFamily="sans-serif" fontWeight="600">{bar.h}</text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid — compact */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark text-center mb-14">Everything you need to own your reputation</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Automated Email & SMS', desc: 'Review requests go out automatically after every completed repair via email and SMS.', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>) },
              { title: 'Review Monitoring', desc: 'All Google reviews stream into your RepairDesk dashboard the moment they are posted.', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>) },
              { title: 'Negative Review Alerts', desc: 'Get notified instantly when a low-rated review appears so you can respond quickly.', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>) },
              { title: 'Review Analytics', desc: 'See star distribution, volume trends, and sentiment breakdowns at a glance.', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>) },
              { title: 'Website Review Widget', desc: 'Embed a live review widget on your website that shows your latest 5-star reviews.', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>) },
              { title: 'NPS Tracking', desc: 'Measure customer loyalty with automated NPS surveys and track your score over time.', icon: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>) },
            ].map(f => (
              <div key={f.title} className="group relative bg-rd-cream rounded-2xl p-6 hover:bg-rd-teal transition-colors duration-300 cursor-default">
                <div className="w-12 h-12 rounded-xl bg-rd-teal/10 text-rd-teal flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark group-hover:text-white transition-colors duration-300 mb-2">{f.title}</h3>
                <p className="font-dm-sans text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-300 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section className="bg-rd-teal py-12">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { val: '4.8', sub: 'Avg rating for users' },
              { val: '3x', sub: 'More reviews in 90 days' },
              { val: '92%', sub: 'Negative reviews intercepted' },
              { val: '< 5 min', sub: 'Average response time' },
            ].map(s => (
              <div key={s.sub}>
                <div className="font-poppins text-3xl md:text-4xl font-bold mb-1">{s.val}</div>
                <div className="font-dm-sans text-sm text-white/70">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-rd-dark text-center mb-14">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className={`rounded-2xl border transition-colors duration-200 ${isOpen ? 'border-rd-teal bg-rd-cream' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-poppins font-semibold text-rd-dark pr-4">{faq.q}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 text-rd-teal shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="font-dm-sans text-gray-600 leading-relaxed px-6 pb-5">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
