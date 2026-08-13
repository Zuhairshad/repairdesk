import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const stories = [
  {
    company: 'QuickFix Mobile',
    industry: 'Cell Phone Repair',
    location: 'Austin, TX',
    quote: 'RepairDesk cut our average ticket processing time in half. We went from sticky notes and spreadsheets to a system that actually keeps up with our volume.',
    metric: '50% faster ticket processing',
    metricDetail: 'Average time from intake to checkout reduced by half within 3 months.',
  },
  {
    company: 'NorthStar Computer Services',
    industry: 'Computer Repair',
    location: 'Denver, CO',
    quote: 'Inventory visibility across our three locations used to be a nightmare. Now we see stock in real time and reorder before we run out.',
    metric: '3 locations synced',
    metricDetail: 'Real-time inventory sync across all stores with centralized reporting.',
  },
  {
    company: 'Precision Watch Repair',
    industry: 'Watch Repair',
    location: 'New York, NY',
    quote: 'Our customers love the automated updates. They know exactly when their watch is ready, and we spend less time on the phone.',
    metric: '70% fewer inbound calls',
    metricDetail: 'Automated SMS and email notifications reduced customer follow-up calls.',
  },
  {
    company: 'Green Pedal Bike Shop',
    industry: 'Bicycle Repair',
    location: 'Portland, OR',
    quote: 'The seasonal inventory tools helped us prepare for spring without overstocking. We saved thousands in carrying costs last year.',
    metric: '$12K saved annually',
    metricDetail: 'Reduced excess seasonal inventory through reorder point automation.',
  },
  {
    company: 'AeroDrone Services',
    industry: 'Drone Repair',
    location: 'Phoenix, AZ',
    quote: 'Tracking drone serial numbers and logging repair history was impossible with our old system. RepairDesk makes it simple and searchable.',
    metric: '100% serial tracking',
    metricDetail: 'Every drone repair is logged with serial number, condition, and repair history.',
  },
  {
    company: 'AllFix Electronics',
    industry: 'Multi-Store Franchise',
    location: 'Chicago, IL',
    quote: 'We scaled from one store to five locations in two years. RepairDesk grew with us — same system, same data, no migration headaches.',
    metric: '5 stores on one platform',
    metricDetail: 'Scaled from a single location to five franchise stores without changing software.',
  },
];

export default function CustomerStoriesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-20 md:py-28 px-6">
        <div className="container-main max-w-4xl text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
            Customer Stories
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Customer Success Stories
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed max-w-2xl mx-auto">
            Real repair shops. Real results. See how businesses like yours use RepairDesk to save time, reduce mistakes, and grow.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, i) => (
              <Link
                key={i}
                to="#"
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-rd-teal/30 hover:shadow-lg transition-all flex flex-col"
              >
                {/* Top bar with metric */}
                <div className="bg-rd-teal text-white px-6 py-4">
                  <span className="font-poppins font-bold text-lg">{story.metric}</span>
                  <p className="text-white/70 text-xs font-dm-sans mt-0.5">{story.metricDetail}</p>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Company info */}
                  <div className="mb-4">
                    <h3 className="font-poppins font-bold text-rd-dark text-lg group-hover:text-rd-teal transition-colors">{story.company}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-gray-400 font-dm-sans text-xs">{story.industry}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-400 font-dm-sans text-xs">{story.location}</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="flex-1">
                    <div className="text-rd-teal text-3xl font-dm-serif leading-none mb-2">&ldquo;</div>
                    <p className="text-gray-600 font-dm-sans text-sm leading-relaxed italic">
                      {story.quote}
                    </p>
                  </div>

                  {/* Read more */}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <span className="text-rd-teal font-poppins font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Full Story
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { stat: '3,000+', label: 'Repair shops worldwide' },
              { stat: '50M+', label: 'Tickets processed' },
              { stat: '120+', label: 'Countries served' },
              { stat: '4.7/5', label: 'Average customer rating' },
            ].map(item => (
              <div key={item.label}>
                <div className="font-poppins font-bold text-3xl md:text-4xl text-rd-teal mb-1">{item.stat}</div>
                <p className="text-gray-500 font-dm-sans text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rd-dark text-white py-16 px-6">
        <div className="container-main text-center max-w-2xl">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-4">Ready to Write Your Own Success Story?</h2>
          <p className="text-white/70 font-dm-sans text-lg mb-8">
            Join thousands of repair shops that run on RepairDesk. Start your free trial today — no credit card required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Book a Demo</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
