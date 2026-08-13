import React from 'react';
import PageLayout from '../../components/PageLayout';

const features = [
  {
    title: 'Automated Review Requests',
    description: 'Trigger a personalized SMS or email review request the moment a repair is marked as picked up. Catch customers while their experience is still fresh.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'QR Code for In-Store Reviews',
    description: 'Print a branded QR code to place on your counter. Customers scan it with their phone and land directly on your Google review page — zero friction.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    title: 'Review Monitoring Dashboard',
    description: 'See all your Google reviews in one place inside RepairDesk. Track your average rating over time, spot trends, and know immediately when a new review lands.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Negative Feedback Filter',
    description: 'If a customer indicates they had a poor experience, route them to a private feedback form instead of a public review. Resolve issues before they go online.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
  },
  {
    title: 'Google Business Integration',
    description: 'Connect your Google Business Profile directly to RepairDesk. Review requests link to the right location and your dashboard stays synced with live data.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
];

const stats = [
  { value: '4.8★', label: 'Avg. rating for RepairDesk shops' },
  { value: '4x', label: 'More reviews vs. asking manually' },
  { value: '90%', label: 'Negative reviews resolved privately' },
  { value: 'Auto', label: 'Triggered on every repair pickup' },
];

export default function GoogleReviewsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 md:py-32">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="inline-block bg-rd-lime text-rd-dark text-sm font-semibold font-poppins px-4 py-1.5 rounded-full">
                Google Reviews
              </span>
              <span className="inline-block bg-white text-rd-teal text-xs font-bold font-poppins px-3 py-1 rounded-full uppercase tracking-wide">
                NEW
              </span>
            </div>
            <h1 className="font-dm-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              More 5-Star Reviews, Automatically
            </h1>
            <p className="font-dm-sans text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Turn every repaired device into a Google review opportunity. RepairDesk sends the request, filters negative feedback, and keeps your star rating climbing — on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="btn-primary text-base px-8 py-3.5">
                Start Free Trial
              </a>
              <a href="#" className="border border-white/40 hover:border-white text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-full transition-colors duration-200">
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-rd-cream py-14 border-b border-gray-200">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-dm-serif text-4xl md:text-5xl text-rd-teal mb-2">{stat.value}</div>
                <div className="font-dm-sans text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-4">
              Your reputation, managed automatically
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              Every feature in the Google Reviews module works together to amplify positive experiences and catch problems before they go public.
            </p>
          </div>
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
              "We went from 47 Google reviews to over 300 in three months without asking a single customer manually. Our local search ranking jumped and new walk-ins went through the roof."
            </p>
            <div>
              <div className="font-poppins font-semibold text-rd-lime">Ben Holloway</div>
              <div className="font-dm-sans text-white/60 text-sm mt-1">Owner, iFixFast — Denver, CO</div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
