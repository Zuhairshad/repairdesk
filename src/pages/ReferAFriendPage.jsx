import React, { useState, useEffect, useCallback } from 'react';

import PageLayout from '../components/PageLayout';

const steps = [
  {
    number: '1',
    title: 'Fill Out the Referral Form',
    desc: 'Tell us who you are and share the details of the repair store owner you want to refer. It only takes a minute.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.862 4.487z" />
      </svg>
    ),
  },
  {
    number: '2',
    title: 'Your Friend Subscribes',
    desc: 'We reach out to your referral. Once their repair shop signs up for a paid RepairDesk plan, the referral is marked successful.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.7M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    number: '3',
    title: 'You Get Paid $250',
    desc: "We send your reward via Paypal 35 days after your referral's payment clears — or convert it to subscription credits if you'd rather.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-4-4.5c0 1.38 1.79 2.5 4 2.5s4-1.12 4-2.5-1.79-2.25-4-2.25-4-.87-4-2.25S9.79 6.5 12 6.5s4 1.12 4 2.5" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'Who can be a part of this Referral Program?',
    a: 'This program is open for all our valuable RepairDesk customers.',
  },
  {
    q: 'What is the Reward Structure?',
    a: "If any of your referrals subscribe to one of our paid plans, we'll reward you with up to $250 in Paypal for every successful referral subscription. If the referral business operates several locations, you can receive $250 for each one, potentially earning up to $1,000 for referring that business. Keep in mind that if you are launching a new location, you cannot refer your own business.",
  },
  {
    q: 'Can I avail any other reward option?',
    a: 'You can convert your cash payout to an equal number of subscription credits for RepairDesk. Your subscription credits will be offset in your invoices for the subsequent months automatically. Once we have a referral active from your end, we will reach out to ask for your preferred mode, or you can email us at finance@repairdesk.co.',
  },
  {
    q: 'Will I get any bonus for referring customers?',
    a: 'We only reward once the referred customers subscribe to one of our paid plans.',
  },
  {
    q: 'How many Referrals can I make?',
    a: "There's no limit. You can make repair shop management easier for as many friends as you like and earn as much as you want! You will get a commission for every successfully subscribed referral. If your referred merchant has more than one store, you'll make a commission on each store.",
  },
  {
    q: 'How will RepairDesk know I referred the customers?',
    a: 'Make sure to add your correct details to the referral form above. This is the only way RepairDesk can track your contribution.',
  },
  {
    q: 'When will I get paid?',
    a: 'You will get paid 35 days after the successful completion of payment by the customers you referred to us.',
  },
];

const industries = [
  'Cell Phone Repair',
  'Computer Repair',
  'Small Engine Repair',
  'Bicycle Repair',
  'Others',
];

function generateCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function FaqRow({ item, isOpen, onToggle }) {
  return (
    <div className={`rounded-2xl border transition-colors ${isOpen ? 'border-rd-teal/40 bg-white' : 'border-gray-200 bg-white'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left"
      >
        <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-poppins font-bold text-sm transition-colors ${isOpen ? 'bg-rd-lime text-rd-dark' : 'bg-rd-dark/5 text-rd-dark'}`}>
          {isOpen ? '−' : '+'}
        </span>
        <span className="flex-1 font-poppins font-semibold text-rd-dark text-base">{item.q}</span>
      </button>
      <div
        className="px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '260px' : '0px' }}
      >
        <p className="font-dm-sans text-sm text-gray-500 leading-relaxed pb-6 pl-12">{item.a}</p>
      </div>
    </div>
  );
}

export default function ReferAFriendPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const [form, setForm] = useState({
    yourName: '',
    yourEmail: '',
    friendName: '',
    friendEmail: '',
    friendStore: '',
    industry: '',
    captchaInput: '',
  });
  const [captcha, setCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const reloadCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setForm((f) => ({ ...f, captchaInput: '' }));
    setCaptchaError(false);
  }, []);

  useEffect(() => {
    reloadCaptcha();
  }, [reloadCaptcha]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'captchaInput') setCaptchaError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.captchaInput !== captcha) {
      setCaptchaError(true);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      yourName: '',
      yourEmail: '',
      friendName: '',
      friendEmail: '',
      friendStore: '',
      industry: '',
      captchaInput: '',
    });
    reloadCaptcha();
    setSubmitted(false);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rd-dark relative overflow-hidden text-white py-20 md:py-28 px-6">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rd-teal/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-rd-lime/10 blur-3xl" />
        <div className="container-main relative grid grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l1.5 4.5H18l-3.5 3 1.5 4.5-4-2.8L8 14l1.5-4.5L6 6.5h4.5z" /></svg>
              Limited Time Offer
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] mb-6">
              Share the Love &amp; Earn Up to <span className="text-rd-lime">$250</span>
            </h1>
            <p className="text-white/75 text-lg font-dm-sans leading-relaxed mb-8 max-w-xl">
              Invite a repair store owner to RepairDesk and get $250 in Paypal for every successful referral subscription. Make as many referrals as you like and enjoy the rewards.
            </p>
            <a href="#referral-form" className="btn-primary px-8 py-3.5 inline-block">Refer a Friend Now</a>
          </div>

          {/* Reward badge graphic */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-rd-lime to-rd-mint flex flex-col items-center justify-center shadow-2xl">
              <svg className="w-10 h-10 text-rd-dark mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v7.5m3.75-7.5H10.5a1.875 1.875 0 000 3.75h3a1.875 1.875 0 010 3.75H8.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-poppins font-bold text-rd-dark text-5xl leading-none">$250</span>
              <span className="font-dm-sans text-rd-dark/70 text-xs mt-1 tracking-wide">per referral</span>
            </div>
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center rotate-[-12deg]">
              <svg className="w-7 h-7 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-12 0v-2.513c0-.933.646-1.756 1.577-1.887A32.79 32.79 0 0112 8.25m-6 4.871v3.998c0 .576.47 1.043 1.048 1.06.9.026 1.799.04 2.702.04h.5m1.75 4.5v-4.5m0 0h4.5m-4.5 0v-3" />
              </svg>
            </div>
            <div className="absolute bottom-2 -right-2 w-14 h-14 rounded-full bg-rd-teal border border-white/20 flex items-center justify-center rotate-6">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Reward stats strip */}
      <section className="bg-rd-teal px-6 py-6">
        <div className="container-main grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
          <div>
            <p className="font-poppins font-bold text-3xl">$250</p>
            <p className="font-dm-sans text-white/75 text-sm">per successful referral</p>
          </div>
          <div className="sm:border-x sm:border-white/20">
            <p className="font-poppins font-bold text-3xl">$1,000</p>
            <p className="font-dm-sans text-white/75 text-sm">max per multi-location referral</p>
          </div>
          <div>
            <p className="font-poppins font-bold text-3xl">35 Days</p>
            <p className="font-dm-sans text-white/75 text-sm">until your reward is paid</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">How it Works?</h2>
            <p className="text-gray-500 font-dm-sans text-lg">
              Be a super friend to all your repair shop acquaintances and help them get out of the daily operational and repair shop management agony. Just fill out the form with your details and your friend&rsquo;s details to get started.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-9 left-[16.5%] right-[16.5%] border-t-2 border-dashed border-rd-teal/25" />
            {steps.map((step) => (
              <div key={step.number} className="relative bg-rd-cream rounded-2xl p-7 pt-10 text-center">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-rd-dark text-rd-lime flex items-center justify-center font-poppins font-bold border-4 border-white">
                  {step.number}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-rd-teal/10 text-rd-teal flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-poppins font-bold text-rd-dark text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section id="referral-form" className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-rd-lime/40 text-rd-dark rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold text-rd-dark text-2xl mb-2">Referral Sent!</h3>
                <p className="text-gray-500 font-dm-sans mb-6 max-w-md mx-auto">
                  Thanks, {form.yourName || 'friend'}! We&rsquo;ll reach out to {form.friendName || 'your referral'} shortly. Once they subscribe to a paid plan, your $250 reward is on its way.
                </p>
                <button onClick={handleReset} className="btn-primary">Send Another Referral</button>
              </div>
            ) : (
              <>
                <div className="text-center mb-10">
                  <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-3">
                    Fill out the form below to send a referral
                  </h2>
                  <p className="text-gray-500 font-dm-sans">
                    Give us a bit of information about you and the repair shop owner you&rsquo;re referring.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Your details */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-7 h-7 rounded-full bg-rd-teal text-white flex items-center justify-center text-xs font-poppins font-bold">1</span>
                      <h3 className="font-poppins font-semibold text-rd-dark">Your Details</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="yourName"
                        value={form.yourName}
                        onChange={handleChange}
                        required
                        placeholder="Your Full Name*"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                      />
                      <input
                        type="email"
                        name="yourEmail"
                        value={form.yourEmail}
                        onChange={handleChange}
                        required
                        placeholder="Your Email*"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Friend's details */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-7 h-7 rounded-full bg-rd-teal text-white flex items-center justify-center text-xs font-poppins font-bold">2</span>
                      <h3 className="font-poppins font-semibold text-rd-dark">Your Friend&rsquo;s Details</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="friendName"
                        value={form.friendName}
                        onChange={handleChange}
                        required
                        placeholder="Friend's Full Name*"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                      />
                      <input
                        type="email"
                        name="friendEmail"
                        value={form.friendEmail}
                        onChange={handleChange}
                        required
                        placeholder="Friend's Email*"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                      />
                      <input
                        type="text"
                        name="friendStore"
                        value={form.friendStore}
                        onChange={handleChange}
                        placeholder="Friend's Store Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                      />
                      <select
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm text-gray-400"
                        style={form.industry ? { color: '#2e384d' } : {}}
                      >
                        <option value="">Select Your Industry*</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Captcha */}
                  <div>
                    <input
                      type="text"
                      name="captchaInput"
                      value={form.captchaInput}
                      onChange={handleChange}
                      required
                      placeholder="Enter the Captcha"
                      className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400 ${captchaError ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {captchaError && (
                      <p className="text-red-500 text-xs font-dm-sans mt-2">Captcha does not match. Please try again.</p>
                    )}
                    <div className="flex flex-col items-center gap-2 pt-4">
                      <div
                        className="select-none px-6 py-3 rounded-lg bg-gray-100 border border-gray-200"
                        style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '26px',
                          fontWeight: 'bold',
                          fontStyle: 'italic',
                          letterSpacing: '4px',
                          color: '#1a6e3a',
                          textDecoration: 'line-through',
                          textDecorationColor: '#ccc',
                        }}
                      >
                        {captcha}
                      </div>
                      <button
                        type="button"
                        onClick={reloadCaptcha}
                        className="text-rd-teal font-poppins font-semibold text-sm hover:underline"
                      >
                        Reload
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-center pt-2">
                    <button type="submit" className="btn-primary px-10 py-3.5">
                      Send Referral
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 text-center">
            All the Answers You&rsquo;re Looking For
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 text-center max-w-2xl mx-auto">
            Everything you need to know about earning rewards through the RepairDesk Referral Program.
          </p>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((item, idx) => (
              <FaqRow
                key={item.q}
                item={item}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
