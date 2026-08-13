import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '1',
    title: 'Share Your Referral Link',
    desc: 'Log in to your RepairDesk account and grab your unique referral link. Share it with any repair shop owner you know — by email, text, or in person.',
  },
  {
    number: '2',
    title: 'Your Friend Signs Up',
    desc: 'When your friend signs up for a paid RepairDesk plan using your link, their account is connected to yours automatically. No extra steps needed.',
  },
  {
    number: '3',
    title: 'Both of You Earn Rewards',
    desc: 'You receive account credit toward your next billing cycle, and your friend gets a discount on their first month. The more you refer, the more you earn.',
  },
];

const benefits = [
  {
    title: 'Earn Account Credits',
    desc: 'Get credit applied directly to your RepairDesk subscription for every successful referral. Credits stack — refer more and pay less.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'No Referral Limit',
    desc: 'There is no cap on how many people you can refer. Every successful referral earns you a reward, whether it is your first or your fiftieth.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Your Friend Saves Too',
    desc: 'Your referral is not one-sided. The friend you refer gets a discount on their first month, making it easier for them to get started.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Easy Tracking',
    desc: 'Track the status of every referral from your RepairDesk dashboard. See who signed up, when their trial converts, and how much credit you have earned.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function ReferAFriendPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-20 md:py-28 px-6">
        <div className="container-main max-w-4xl text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
            Referral Program
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Refer a Friend & Earn Rewards
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8 max-w-2xl mx-auto">
            Know a repair shop owner who could use RepairDesk? Share your referral link, and both of you earn rewards when they sign up for a paid plan.
          </p>
          <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Get Your Referral Link</a>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 text-center">
            How It Works
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 text-center max-w-2xl mx-auto">
            Three simple steps. No forms to fill. No approvals to wait for.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-14 h-14 rounded-full bg-rd-teal text-white flex items-center justify-center mx-auto mb-5 text-xl font-bold font-poppins">
                  {step.number}
                </div>
                <h3 className="font-poppins font-bold text-rd-dark text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          {/* Connecting line (decorative) */}
          <div className="hidden md:flex justify-center mt-[-180px] mb-[120px] px-20">
            <div className="flex-1 border-t-2 border-dashed border-rd-teal/20 mt-7"></div>
            <div className="flex-1 border-t-2 border-dashed border-rd-teal/20 mt-7"></div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 text-center">
            Why Refer?
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 text-center max-w-2xl mx-auto">
            Sharing RepairDesk with other repair shop owners comes with real benefits — for both of you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-2xl p-7 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-rd-teal/10 text-rd-teal flex items-center justify-center shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-rd-dark mb-1">{benefit.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share CTA */}
      <section className="bg-rd-dark text-white py-20 px-6">
        <div className="container-main text-center max-w-2xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Start Referring Today
          </h2>
          <p className="text-white/70 font-dm-sans text-lg mb-8">
            Log in to your RepairDesk account, copy your unique referral link, and share it with repair shop owners in your network. Every successful referral earns you credit.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 mb-8">
            <p className="text-white/60 font-dm-sans text-sm mb-3">Your referral link</p>
            <div className="flex gap-3 items-center">
              <div className="flex-1 bg-white/10 rounded-xl px-4 py-3 text-white/80 font-dm-sans text-sm border border-white/20 text-left truncate">
                https://app.repairdesk.co/register?ref=your-unique-code
              </div>
              <button className="btn-primary px-6 py-3 text-sm whitespace-nowrap">Copy Link</button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Get Started</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Questions? Contact Us</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
