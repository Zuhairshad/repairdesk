import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const journeySteps = [
  {
    label: 'Customer Checks Out',
    desc: 'A customer pays for a repair or purchase at your POS.',
    icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
  },
  {
    label: 'Points Are Earned',
    desc: 'AA Repairdesk automatically credits loyalty points to their account.',
    icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  },
  {
    label: 'Notified Instantly',
    desc: 'An automated email & SMS lets them know what they just earned.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  },
  {
    label: 'Points Fund Next Visit',
    desc: 'They redeem points against a future repair — and come back again.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

const featureRows = [
  {
    eyebrow: 'Make more money',
    title: 'Keep Your Customers Coming Back For More',
    desc: 'Get customers to come back by rewarding them for repeat behavior. Keep the ones you already have and give new shoppers a solid reason to ditch your competition.',
    art: 'heart',
  },
  {
    eyebrow: 'Retain customers',
    title: 'Turn One-Time Visitors Into Loyal Customers',
    desc: "Let your customers get the best value from you so they keep coming back for more. With your own repair shop loyalty program, you'll be able to retain customers better and have them visit your store more often.",
    art: 'path',
  },
  {
    eyebrow: 'Reward customer loyalty',
    title: 'Make Your Customers Feel Special With Rewards',
    desc: 'Reward your customers for their loyalty to your repair shop. Each time you make a sale, they get loyalty points that help them pay for more in the future. Win-win for both you and your customers.',
    art: 'star',
  },
  {
    eyebrow: 'Send Automatic Notifications',
    title: 'Use Email & SMS To Keep Customers Updated',
    desc: 'Inform your customers every time they earn or redeem loyalty points with automated email and SMS notifications sent directly to them.',
    art: 'bell',
  },
  {
    eyebrow: 'Lightning Fast Enrollment',
    title: 'Bring More Customers Into The Fold',
    desc: 'Enroll customers in your loyalty program directly from the checkout screen without the need to navigate away.',
    art: 'bolt',
  },
];

const faqs = [
  { q: 'How long are your contracts?', a: 'We offer both, month to month and annual plans, to give you the most flexibility. You can always upgrade, downgrade or add locations as your business grows.' },
  { q: 'I am a startup, do you have a cheaper plan for me?', a: "If you're a budding company looking to branch out, we've got the Essential plan for you that takes care of your needs. If you'd like more features, you can sign up for our Growth plan instead. AA Repairdesk offers you plans that are highly affordable and pack the most utility for your business, so you're always winning when you choose AA Repairdesk." },
  { q: "How do I check for a customer's available loyalty points?", a: "The loyalty points for a customer will be visible on the customer information section of the POS once you've selected them, and in the Customer section of your AA Repairdesk account. You should be able to view their remaining loyalty points from here." },
  { q: 'Will customers be able to stack loyalty points with any other means of payment?', a: 'Yes. Customers can split their payments between loyalty points and any other form of payment that you accept.' },
  { q: 'Will my customers receive confirmation on their purchase?', a: 'Yes. AA Repairdesk tracks and monitors all purchases made, and your customers will receive an invoice in their email and on their registered number once a transaction goes through. They will also be able to see how many loyalty points they spent on the purchase.' },
  { q: 'Are there any extra charges to using the loyalty program feature?', a: 'The loyalty program feature is part of your subscription to the AA Repairdesk Enterprise package. If you would like to add store credits to your repair business, please consider signing up.' },
  { q: 'Do you offer customer support?', a: 'We have excellent customer support & you are always prioritized above anything and everything. If you ever run into a problem or cannot find what you are looking for, you can give us a call, chat with one of product specialists, or send us an email at support@aarepairdesk.co.' },
];

function FeatureArt({ type }) {
  const wrap = 'w-full aspect-[4/3] rounded-3xl bg-rd-dark flex items-center justify-center relative overflow-hidden';
  if (type === 'heart') {
    return (
      <div className={wrap}>
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-rd-teal/30 blur-2xl" />
        <div className="absolute -bottom-12 -left-8 w-48 h-48 rounded-full bg-rd-lime/10 blur-2xl" />
        <svg className="w-28 h-28 text-rd-mint relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21s-6.716-4.35-9.428-8.06C.86 10.31 1.24 6.6 4.2 4.95c2.4-1.34 5.1-.55 6.8 1.44 1.7-1.99 4.4-2.78 6.8-1.44 2.96 1.65 3.34 5.36 1.63 7.99C18.716 16.65 12 21 12 21z"/></svg>
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
          <span className="text-[10px] font-poppins font-bold uppercase tracking-widest text-white/50">Repeat Visit</span>
          <span className="text-[10px] font-poppins font-bold uppercase tracking-widest text-rd-mint">Loyalty +1</span>
        </div>
      </div>
    );
  }
  if (type === 'path') {
    return (
      <div className={wrap}>
        <svg className="w-4/5 h-4/5 relative z-10" viewBox="0 0 200 140" fill="none">
          <path d="M15 110 C 60 20, 140 120, 185 30" stroke="#457b9d" strokeWidth="3" strokeDasharray="6 8" strokeLinecap="round" />
          <circle cx="15" cy="110" r="9" fill="#1e2035" stroke="#457b9d" strokeWidth="2.5" />
          <circle cx="185" cy="30" r="12" fill="#457b9d" />
          <path d="M180 30 l4 -5 l4 5 l-4 5z" fill="#1e2035" transform="translate(1,1)" />
        </svg>
        <div className="absolute top-6 left-6 text-[10px] font-poppins font-bold uppercase tracking-widest text-white/50">First Visit</div>
        <div className="absolute bottom-6 right-6 text-[10px] font-poppins font-bold uppercase tracking-widest text-rd-mint">Loyal Regular</div>
      </div>
    );
  }
  if (type === 'star') {
    return (
      <div className={wrap}>
        <div className="grid grid-cols-3 gap-3 relative z-10">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <svg key={i} className={`w-9 h-9 ${i === 4 ? 'text-rd-mint scale-125' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
            </svg>
          ))}
        </div>
        <span className="absolute bottom-6 text-[10px] font-poppins font-bold uppercase tracking-widest text-white/50">Reward Unlocked</span>
      </div>
    );
  }
  if (type === 'bell') {
    return (
      <div className={wrap}>
        <div className="relative z-10 flex flex-col items-center">
          <svg className="w-20 h-20 text-rd-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
          <div className="mt-4 bg-white/10 rounded-lg px-4 py-2 flex items-center gap-2">
            <svg className="w-4 h-4 text-rd-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span className="text-[11px] font-dm-sans text-white/70">You've earned 150 pts!</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={wrap}>
      <div className="relative z-10 flex items-center gap-4">
        <svg className="w-14 h-14 text-rd-mint" fill="currentColor" viewBox="0 0 24 24"><path d="M13 2L3 14h7l-1 8 11-14h-7l0-6z"/></svg>
      </div>
      <div className="absolute bottom-6 bg-rd-lime text-white text-[10px] font-poppins font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Enrolled at Checkout</div>
    </div>
  );
}

export default function LoyaltyProgramPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="bg-rd-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-rd-teal/20 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="container-main px-6 py-20 md:py-28 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-poppins font-bold uppercase tracking-widest bg-[#FAF9E3] text-rd-dark px-4 py-1.5 rounded-full mb-6">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
              Loyalty Program
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
              Build your customer database, grow repeat business
            </h1>
            <p className="text-white/75 text-lg font-dm-sans leading-relaxed mb-8 max-w-lg">
              Increase lifetime value with the loyalty program — reward every sale with points your customers can spend on their next repair.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.aarepairdesk.co/register" className="btn-primary px-8 py-3.5">Free Trial</a>
              <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
            </div>
          </div>

          {/* Loyalty card mockup */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-6 bg-rd-teal/20 rounded-[2.5rem] blur-2xl" />
            <div className="relative bg-gradient-to-br from-rd-teal via-[#1e2035] to-rd-dark rounded-3xl p-7 shadow-2xl border border-white/10">
              <div className="flex items-center justify-between mb-8">
                <span className="font-poppins font-bold tracking-wide text-sm">REPAIRDESK REWARDS</span>
                <div className="w-9 h-6 rounded-sm bg-rd-lime/80" />
              </div>
              <div className="flex items-center gap-1 mb-2">
                {[0, 1, 2, 3, 4].map(i => (
                  <svg key={i} className="w-4 h-4 text-rd-mint" fill="currentColor" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                ))}
                <span className="text-[10px] font-poppins font-bold text-rd-mint ml-1 tracking-widest">GOLD TIER</span>
              </div>
              <p className="text-3xl font-poppins font-bold mb-1">2,450 <span className="text-base font-dm-sans font-normal text-white/60">pts</span></p>
              <p className="text-white/50 text-xs font-dm-sans mb-6">550 pts to your next reward</p>
              <div className="h-1.5 w-full bg-white/15 rounded-full mb-6 overflow-hidden">
                <div className="h-full w-[80%] bg-rd-lime rounded-full" />
              </div>
              <div className="flex items-center justify-between text-white/40 text-[11px] font-dm-sans tracking-wide">
                <span>MEMBER SINCE 2023</span>
                <span>•••• 8842</span>
              </div>
            </div>
            {/* floating points-earned toast */}
            <div className="absolute -bottom-8 -left-8 bg-white text-rd-dark rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 max-w-[220px]">
              <div className="w-9 h-9 rounded-full bg-rd-lime/30 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-rd-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21s-6.716-4.35-9.428-8.06C.86 10.31 1.24 6.6 4.2 4.95c2.4-1.34 5.1-.55 6.8 1.44 1.7-1.99 4.4-2.78 6.8-1.44 2.96 1.65 3.34 5.36 1.63 7.99C18.716 16.65 12 21 12 21z"/></svg>
              </div>
              <div>
                <p className="font-poppins font-semibold text-xs leading-tight">+120 points earned</p>
                <p className="text-gray-400 text-[10px] font-dm-sans">on today's screen repair</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS LOOP */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-rd-teal font-poppins font-bold text-xs uppercase tracking-widest">Make more money</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3">The Loyalty Loop That Keeps Customers Coming Back</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {journeySteps.map((step, i) => (
              <div key={step.label} className="relative">
                <div className="bg-rd-cream rounded-2xl p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-rd-dark flex items-center justify-center mb-5">
                    <svg className="w-5 h-5 text-rd-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={step.icon} /></svg>
                  </div>
                  <span className="text-rd-teal font-poppins font-bold text-xs">STEP {i + 1}</span>
                  <h3 className="font-poppins font-semibold text-rd-dark mt-1 mb-2">{step.label}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < journeySteps.length - 1 && (
                  <svg className="hidden lg:block absolute top-1/2 -right-5 -translate-y-1/2 w-6 h-6 text-gray-300 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALTERNATING FEATURE ROWS */}
      <section className="bg-rd-cream py-4 px-6">
        <div className="container-main py-12 space-y-20">
          {featureRows.map((row, i) => (
            <div key={row.title} className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <FeatureArt type={row.art} />
              <div>
                <span className="text-rd-teal font-poppins font-bold text-xs uppercase tracking-widest">{row.eyebrow}</span>
                <h3 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mt-3 mb-4">{row.title}</h3>
                <p className="text-gray-600 font-dm-sans text-base leading-relaxed">{row.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="container-main grid md:grid-cols-[280px_1fr] gap-12">
          <div>
            <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-4">All the Answers You're Looking For</h2>
            <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">Everything repair shop owners ask us before switching their loyalty program to AA Repairdesk.</p>
            <div className="mt-8 bg-rd-dark rounded-2xl p-5 hidden md:block">
              <svg className="w-7 h-7 text-rd-mint mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21s-6.716-4.35-9.428-8.06C.86 10.31 1.24 6.6 4.2 4.95c2.4-1.34 5.1-.55 6.8 1.44 1.7-1.99 4.4-2.78 6.8-1.44 2.96 1.65 3.34 5.36 1.63 7.99C18.716 16.65 12 21 12 21z"/></svg>
              <p className="text-white text-sm font-poppins font-semibold leading-snug">Still have a question about loyalty points?</p>
              <p className="text-white/60 text-xs font-dm-sans mt-1">support@aarepairdesk.co</p>
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`rounded-xl overflow-hidden border transition-colors ${openFaq === i ? 'border-rd-teal/40 bg-rd-cream' : 'border-gray-100'}`}>
                <button
                  className="w-full flex items-center gap-4 px-6 py-4 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className={`shrink-0 w-6 h-6 rounded-full text-[11px] flex items-center justify-center font-poppins font-bold ${openFaq === i ? 'bg-rd-teal text-white' : 'bg-rd-cream text-rd-teal'}`}>{i + 1}</span>
                  <span className="flex-1">{faq.q}</span>
                  <svg className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-5 pl-16 text-gray-500 font-dm-sans text-sm leading-relaxed">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
