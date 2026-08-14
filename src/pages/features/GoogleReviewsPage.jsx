import React from 'react';
import PageLayout from '../../components/PageLayout';

/* ---------------------------------------------------------------- */
/* Icons                                                             */
/* ---------------------------------------------------------------- */

const StarIcon = ({ className = 'w-5 h-5', filled = true }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={filled ? 0 : 1.5}>
    <path d="M12 2.5l2.955 6.278 6.795.727-5.045 4.72 1.375 6.775L12 17.75l-6.08 3.25 1.375-6.775-5.045-4.72 6.795-.727L12 2.5z" />
  </svg>
);

const ChatIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const TrendUpIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8m0 0h-5m5 0v5" />
  </svg>
);

const SearchIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.85-5.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z" />
  </svg>
);

const UsersIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-2.13a4 4 0 100-8 4 4 0 000 8zm7 2a4 4 0 10-3-6.65M5 10.35A4 4 0 018 4" />
  </svg>
);

const HeartFeedbackIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78l1.06 1.06L12 21l7.78-7.55 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

const SparkleIcon = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor" stroke="none">
    <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2zM19 14l.8 2.6L22.4 17.4l-2.6.8L19 21l-.8-2.6-2.6-.8 2.6-.8L19 14zM5 15l.7 2.3L8 18l-2.3.7L5 21l-.7-2.3L2 18l2.3-.7L5 15z" />
  </svg>
);

const RefreshIcon = ({ className = 'w-4 h-4' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M20 20v-5h-5M4.5 9a7.5 7.5 0 0113-4.9L20 6.5M19.5 15a7.5 7.5 0 01-13 4.9L4 17.5" />
  </svg>
);

const GoogleGIcon = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className}>
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.9 32.6 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4c-7.7 0-14.4 4.4-17.7 10.7z" />
    <path fill="#4CAF50" d="M24 44c5.3 0 10.2-2 13.9-5.4l-6.4-5.4C29.5 34.7 26.9 36 24 36c-5.4 0-9.9-3.4-11.3-8.1l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.3-6.4 6.6l6.4 5.4C39.4 36.6 44 30.9 44 24c0-1.3-.1-2.7-.4-3.5z" />
  </svg>
);

/* ---------------------------------------------------------------- */
/* Star row helper                                                   */
/* ---------------------------------------------------------------- */

const StarRow = ({ className = 'w-4 h-4', color = 'text-[#F5B301]' }) => (
  <div className={`flex gap-0.5 ${color}`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <StarIcon key={i} className={className} />
    ))}
  </div>
);

/* ---------------------------------------------------------------- */
/* Content data                                                      */
/* ---------------------------------------------------------------- */

const automationSteps = [
  {
    step: '01',
    title: 'Get More Reviews',
    description:
      'Automatically trigger an SMS with a review form link after 24 hours of completing a repair job and send it to customers to rate your repair shop on Google.',
    icon: <ChatIcon className="w-7 h-7" />,
  },
  {
    step: '02',
    title: 'Review Monitoring',
    description:
      'All reviews can be accessed from within the RepairDesk Connect App. Check reviews directly on your dashboard and monitor your online rating.',
    icon: <TrendUpIcon className="w-7 h-7" />,
  },
  {
    step: '03',
    title: 'Reply using AI',
    description:
      'Use the power of AI to generate an SEO-optimized tailored response to a customer review, turning feedback into meaningful conversations.',
    icon: <SparkleIcon className="w-7 h-7" />,
  },
];

const benefits = [
  {
    title: 'Dominate Search Results',
    description: 'Amplify your visibility and bolster your online presence by becoming the highest-rated repair shop in your area.',
    icon: <SearchIcon className="w-7 h-7" />,
    accent: 'bg-rd-lime text-rd-dark',
  },
  {
    title: 'Drive New Business',
    description: 'Entice a surge of customers to your shop through recommendations, heightened visibility, and unparalleled service experiences.',
    icon: <UsersIcon className="w-7 h-7" />,
    accent: 'bg-rd-mint text-rd-dark',
  },
  {
    title: 'Receive Feedback',
    description: 'Embrace customer feedback to refine and enhance your shop services, ensuring continuous improvement and customer satisfaction.',
    icon: <HeartFeedbackIcon className="w-7 h-7" />,
    accent: 'bg-white text-rd-dark',
  },
];

const testimonials = [
  {
    quote:
      "Shout out to Usman Butt on activating the review campaigner on RD last week. We've already gotten a dozen 5-star reviews! Definitely worth it and so nice to have this process automated.",
    name: 'Thomas Howard',
    shop: 'TechSpot VB',
    initials: 'TH',
  },
  {
    quote:
      "We use Repair Desk Connect and we've gotten 12 reviews in the past 2 weeks. It's worth having a chat with them.",
    name: 'Kaileen Finke',
    shop: 'The Smartphone Medics',
    initials: 'KF',
  },
];

const faqs = [
  {
    q: 'Is Google Review automation via SMS accessible for my current pricing plan?',
    a: 'Google Review automation through SMS is offered as an Add-on and can be obtained independently by subscribers to both the Essential and Growth plans. All clients who subscribe to RepairDesk Connect receive Google review automation via SMS free of charge.',
  },
  {
    q: "Which countries are supported by RepairDesk's Google Review automation via SMS?",
    a: 'At the moment, the Google Review automation through SMS service offered by RepairDesk is only available to RepairDesk merchants situated in the US, Canada, Australia, and the UK.',
  },
  {
    q: 'What happens if I do not observe an increase in the number of reviews I am already receiving?',
    a: 'If you do not witness an increase within the initial thirty days of activating this service, we will be pleased to provide a refund for the initial charge.',
  },
  {
    q: 'Is it necessary for me to purchase SMS credits separately?',
    a: 'At this time, you are required to pay separately for virtual numbers and SMS credits. If you are utilizing RepairDesk Phone System service in either the United States or Canada, you will be eligible to receive a complimentary allotment of one thousand SMS credits.',
  },
];

/* ---------------------------------------------------------------- */
/* Page                                                               */
/* ---------------------------------------------------------------- */

export default function GoogleReviewsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#1e2035] text-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden relative">
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 bg-rd-lime text-rd-dark text-sm font-semibold font-poppins px-4 py-1.5 rounded-full">
                  <StarIcon className="w-3.5 h-3.5" />
                  Google Reviews
                </span>
                <span className="inline-block bg-white text-rd-teal text-xs font-bold font-poppins px-3 py-1 rounded-full uppercase tracking-wide">
                  NEW
                </span>
              </div>
              <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-[3.4rem] leading-tight mb-6">
                Google Reviews Automation System
              </h1>
              <p className="font-dm-sans text-lg text-white/75 mb-10 leading-relaxed max-w-lg">
                In the service business reviews are everything. Make your existing customers your biggest cheerleaders with minimum effort. Automate your Google review collection system, get more 5-star reviews every month, rank higher, and get more repair jobs and new customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="btn-primary text-base px-8 py-3.5">
                  Request a Demo
                </a>
                <a href="#" className="border border-white/40 hover:border-white text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-full transition-colors duration-200">
                  Free Trial
                </a>
              </div>
            </div>

            {/* Right: Google Business Profile mockup */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-rd-lime/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -right-4 w-32 h-32 bg-rd-teal/30 rounded-full blur-2xl" />

              <div className="relative bg-white text-rd-dark rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-full bg-rd-teal text-white font-poppins font-bold flex items-center justify-center text-lg">
                    R
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-sm leading-tight">Your Repair Shop</div>
                    <div className="font-dm-sans text-xs text-gray-500">Cell Phone Repair Store</div>
                  </div>
                  <GoogleGIcon className="w-5 h-5 ml-auto" />
                </div>

                <div className="flex items-end gap-3 mb-5">
                  <span className="font-dm-serif text-4xl leading-none">4.9</span>
                  <div>
                    <StarRow className="w-4 h-4" />
                    <div className="font-dm-sans text-xs text-gray-500 mt-1">1,240 Google reviews</div>
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="bg-rd-cream rounded-xl p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-poppins text-xs font-semibold">Maria G.</span>
                      <StarRow className="w-3 h-3" />
                    </div>
                    <p className="font-dm-sans text-xs text-gray-600 leading-snug">
                      "In and out in 20 minutes, screen looks brand new!"
                    </p>
                  </div>
                  <div className="bg-rd-cream rounded-xl p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-poppins text-xs font-semibold">Daniel R.</span>
                      <StarRow className="w-3 h-3" />
                    </div>
                    <p className="font-dm-sans text-xs text-gray-600 leading-snug">
                      "Best repair shop in town, super fast and honest."
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-rd-dark text-white rounded-xl px-4 py-3">
                  <span className="font-dm-sans text-xs">This month</span>
                  <span className="flex items-center gap-1.5 font-poppins font-semibold text-sm text-rd-lime">
                    <TrendUpIcon className="w-4 h-4" />
                    +30 new reviews
                  </span>
                </div>
              </div>

              <div className="hidden md:flex absolute -right-6 top-6 bg-rd-lime text-rd-dark rounded-2xl shadow-xl px-4 py-3 items-center gap-2">
                <ChatIcon className="w-5 h-5" />
                <span className="font-poppins text-xs font-semibold">Review request sent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-rd-cream py-20 md:py-28">
        <div className="container-main">
          <div className="max-w-2xl mb-14">
            <span className="inline-block bg-rd-lime text-rd-dark text-xs font-bold font-poppins px-4 py-1.5 rounded-full uppercase tracking-wide mb-5">
              Case Study
            </span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark leading-snug mb-5">
              Nate Minor from ScreenFixing on getting 5x More Reviews
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
              RepairDesk Google Review Automation System takes the hassle out of generating and managing reviews. Nate from ScreenFixing, a leading cell phone repair shop in Atlanta, Georgia, tested it out for a few months. The results? Mind-blowing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Copy */}
            <div className="space-y-6">
              <p className="font-dm-sans text-rd-dark text-base leading-relaxed">
                Before Google Review Automation, ScreenFixing was barely averaging <span className="font-semibold">6 reviews per month</span>. Today they're receiving over <span className="font-semibold">30 reviews each month</span> and are on track to crossing <span className="font-semibold">1,000 reviews</span> before the end of this year.
              </p>
              <p className="font-dm-sans text-gray-600 text-base leading-relaxed">
                The secret to success? ScreenFixing's review automation script. It sends each customer a thank you note with a gentle nudge for a 5-star review, leading to a surge of glowing feedback.
              </p>
              <a href="#" className="inline-flex items-center gap-2 font-poppins font-semibold text-rd-teal hover:text-rd-dark transition-colors">
                <GoogleGIcon className="w-5 h-5" />
                Checkout Screen Fixing Google Listing
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Visual: before/after + progress */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-2 mb-6">
                <TrendUpIcon className="w-5 h-5 text-rd-teal" />
                <span className="font-poppins font-semibold text-rd-dark text-sm uppercase tracking-wide">
                  Monthly review volume
                </span>
              </div>

              <div className="flex items-end gap-8 h-40 mb-6">
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="w-full flex items-end justify-center h-32">
                    <div className="w-16 bg-gray-200 rounded-t-lg" style={{ height: '18%' }} />
                  </div>
                  <div className="text-center">
                    <div className="font-dm-serif text-2xl text-gray-500">6</div>
                    <div className="font-dm-sans text-xs text-gray-500">Before</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 flex-1">
                  <div className="w-full flex items-end justify-center h-32">
                    <div className="w-16 bg-rd-teal rounded-t-lg" style={{ height: '92%' }} />
                  </div>
                  <div className="text-center">
                    <div className="font-dm-serif text-2xl text-rd-teal">30+</div>
                    <div className="font-dm-sans text-xs text-gray-500">After automation</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-dm-sans text-xs text-gray-500">Progress toward goal</span>
                  <span className="font-poppins font-semibold text-xs text-rd-dark">On track &middot; 1,000 reviews</span>
                </div>
                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-rd-teal to-rd-lime rounded-full" style={{ width: '68%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automate Review Collection System */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block bg-rd-teal/10 text-rd-teal text-xs font-bold font-poppins px-4 py-1.5 rounded-full uppercase tracking-wide mb-5">
              Get Credibility
            </span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-5">
              Automate Review Collection System
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
              With the RepairDesk review generation and monitoring tool, you can collect 5-star feedback for every successful repair job completed. Whether you're a small local repair shop or a large-scale operation, you can automate the process and enjoy the benefits.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="hidden md:block absolute top-9 left-[16.6%] right-[16.6%] h-px bg-gray-200" />
            {automationSteps.map((s) => (
              <div key={s.step} className="relative bg-rd-cream rounded-2xl p-8 pt-9">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 shrink-0 bg-rd-dark text-rd-lime rounded-xl flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="font-dm-serif text-3xl text-gray-300">{s.step}</span>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{s.title}</h3>
                <p className="font-dm-sans text-gray-600 leading-relaxed text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[#1e2035] py-20 md:py-28">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-10">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${b.accent}`}>
                  {b.icon}
                </div>
                <h3 className="font-poppins font-semibold text-white text-xl mb-3">{b.title}</h3>
                <p className="font-dm-sans text-white/70 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-rd-cream py-20 md:py-28">
        <div className="container-main">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark text-center max-w-3xl mx-auto mb-16 leading-snug">
            RepairDesk Reviews Automation Tool is Popular Among Repair Businesses
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl shadow-md p-8 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <StarRow className="w-4 h-4" />
                  <GoogleGIcon className="w-5 h-5" />
                </div>
                <p className="font-dm-sans text-rd-dark text-base leading-relaxed mb-6 flex-1">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-rd-teal text-white font-poppins font-semibold flex items-center justify-center text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-rd-dark text-sm">{t.name}</div>
                    <div className="font-dm-sans text-gray-500 text-xs">{t.shop}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Form */}
            <div>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-8 leading-snug">
                Fill out the form below and our team will be in touch
              </h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Hidden UTM attribution fields carried with the submission */}
                <input type="hidden" name="utm_source" value="" />
                <input type="hidden" name="utm_medium" value="" />
                <input type="hidden" name="utm_content" value="" />
                <input type="hidden" name="utm_campaign" value="" />
                <input type="hidden" name="utm_dump" value="" />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-dm-sans text-sm text-gray-600 mb-1.5 block">Full Name</label>
                    <input type="text" name="full_name" className="w-full border border-gray-200 rounded-xl px-4 py-3 font-dm-sans text-sm focus:outline-none focus:ring-2 focus:ring-rd-teal/40 focus:border-rd-teal" />
                  </div>
                  <div>
                    <label className="font-dm-sans text-sm text-gray-600 mb-1.5 block">Shop Name</label>
                    <input type="text" name="shop_name" className="w-full border border-gray-200 rounded-xl px-4 py-3 font-dm-sans text-sm focus:outline-none focus:ring-2 focus:ring-rd-teal/40 focus:border-rd-teal" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-dm-sans text-sm text-gray-600 mb-1.5 block">Email Address</label>
                    <input type="email" name="email" className="w-full border border-gray-200 rounded-xl px-4 py-3 font-dm-sans text-sm focus:outline-none focus:ring-2 focus:ring-rd-teal/40 focus:border-rd-teal" />
                  </div>
                  <div>
                    <label className="font-dm-sans text-sm text-gray-600 mb-1.5 block">Phone Number</label>
                    <input type="tel" name="phone" className="w-full border border-gray-200 rounded-xl px-4 py-3 font-dm-sans text-sm focus:outline-none focus:ring-2 focus:ring-rd-teal/40 focus:border-rd-teal" />
                  </div>
                </div>
                <div>
                  <label className="font-dm-sans text-sm text-gray-600 mb-1.5 block">How many repairs do you complete per month?</label>
                  <input type="text" name="monthly_volume" className="w-full border border-gray-200 rounded-xl px-4 py-3 font-dm-sans text-sm focus:outline-none focus:ring-2 focus:ring-rd-teal/40 focus:border-rd-teal" />
                </div>

                <div className="flex items-center justify-between bg-rd-cream rounded-xl px-4 py-3">
                  <span className="font-dm-sans text-xs text-gray-500">Security check &middot; verify you're human</span>
                  <button type="button" className="flex items-center gap-1.5 font-poppins text-xs font-semibold text-rd-teal hover:text-rd-dark transition-colors">
                    <RefreshIcon className="w-3.5 h-3.5" />
                    Reload
                  </button>
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto px-10 py-3.5">
                  Send My Request
                </button>
              </form>
            </div>

            {/* Decorative rating widget */}
            <div className="bg-[#FAF9E3] rounded-2xl p-8 lg:sticky lg:top-24">
              <div className="flex items-center gap-2 mb-6">
                <ChatIcon className="w-5 h-5 text-rd-dark" />
                <span className="font-poppins font-semibold text-rd-dark text-sm uppercase tracking-wide">
                  What customers see
                </span>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <p className="font-dm-sans text-rd-dark text-sm mb-4">
                  How was your repair experience today?
                </p>
                <div className="flex gap-2 justify-center mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="w-8 h-8 text-[#F5B301]" />
                  ))}
                </div>
                <div className="text-center bg-rd-teal text-white font-poppins font-semibold text-sm rounded-full py-2.5">
                  Post to Google
                </div>
              </div>
              <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">
                Sent automatically 24 hours after a repair ticket closes — a one-tap link that takes happy customers straight to your Google Business Profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rd-cream py-20 md:py-28">
        <div className="container-main">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark text-center mb-14">
            All the Answers You're Looking For
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item) => (
              <details key={item.q} className="group bg-white rounded-xl px-6 py-5 shadow-sm open:shadow-md transition-shadow">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                  <span className="font-poppins font-semibold text-rd-dark text-base">{item.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-rd-teal shrink-0 transition-transform duration-200 group-open:rotate-45" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
                  </svg>
                </summary>
                <p className="font-dm-sans text-gray-600 leading-relaxed mt-4 pt-4 border-t border-gray-100">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
