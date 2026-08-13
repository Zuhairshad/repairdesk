import React from 'react';
import PageLayout from '../components/PageLayout';

const stats = [
  { number: '10,000+', label: 'Repair Shops Worldwide' },
  { number: '35+', label: 'Countries Served' },
  { number: '2M+', label: 'Tickets Processed Monthly' },
  { number: '98%', label: 'Customer Satisfaction Rate' },
];

const locations = [
  {
    city: 'Wilmington, USA',
    address: '108 W 13th St',
    detail: 'Wilmington, DE 19801',
    flag: 'US',
  },
  {
    city: 'Lahore, Pakistan',
    address: 'Floor A3, Suite 701,705',
    detail: 'Jeff Heights Gulberg 3, Lahore, 54000',
    flag: 'PK',
  },
];

export default function OurStoryPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rd-dark pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-rd-lime" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-rd-teal" />
        </div>
        <div className="container-main relative z-10 text-center">
          <span className="inline-block bg-rd-lime/20 text-rd-lime text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            About Us
          </span>
          <h1 className="font-dm-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
            Everything You Need To Know<br />About RepairDesk
          </h1>
          <p className="font-dm-sans text-gray-300 text-lg max-w-3xl mx-auto">
            RepairDesk is built to automate the whole process of repair shops and to streamline their daily activities to give you greater peace of mind.
          </p>
        </div>
      </section>

      {/* About the Product */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">About the Product</span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2 mb-6">
                A POS Built Specifically for the Repair Industry
              </h2>
              <p className="font-dm-sans text-gray-600 mb-4 leading-relaxed">
                RepairDesk is a SaaS-based integrated POS & ERP software designed specifically for the repair industry. It brings together everything a repair shop needs — from ticket management and inventory to customer communication and financial reporting — in one unified platform.
              </p>
              <p className="font-dm-sans text-gray-600 leading-relaxed">
                Unlike generic POS software, RepairDesk was built from the ground up for repair shop workflows. Every feature reflects the real-world needs of technicians and shop owners who repair phones, tablets, computers, and other devices day in, day out.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ number, label }) => (
                <div key={label} className="bg-rd-cream rounded-2xl p-6 text-center">
                  <div className="font-dm-serif text-3xl font-bold text-rd-teal mb-1">{number}</div>
                  <div className="text-sm text-gray-500 font-dm-sans">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where It All Started */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">Founder Story</span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2">Where It All Started...</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {/* CEO Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center">
                <div className="w-20 h-20 bg-rd-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-dm-serif text-3xl text-rd-teal font-bold">UB</span>
                </div>
                <h3 className="font-poppins font-bold text-rd-dark text-lg mb-1">Usman Butt</h3>
                <p className="text-rd-teal text-sm font-semibold font-dm-sans mb-3">CEO & Founder</p>
                <p className="text-xs text-gray-500 font-dm-sans">
                  Finance degree. Software entrepreneur. Visionary behind RepairDesk.
                </p>
              </div>

              {/* Story */}
              <div className="md:col-span-2 space-y-5">
                <p className="font-dm-sans text-gray-600 leading-relaxed">
                  Achieving his degree in Finance, Usman Butt, the CEO and founder of RepairDesk, was eager to be a successful entrepreneur. He started his career in a software development company and learned more about the industry and consumer demand.
                </p>
                <p className="font-dm-sans text-gray-600 leading-relaxed">
                  Once he was ready, he started his own little firm and successfully ran it for many years. However, Usman's ambition to achieve big and do more drove him further to pursue greater opportunities!
                </p>
                <p className="font-dm-sans text-gray-600 leading-relaxed">
                  Recognizing the gap in the market for a repair-shop-specific management system, Usman channeled his entrepreneurial spirit and software background to build RepairDesk — a platform that would transform how repair shops operate around the world.
                </p>
                <div className="bg-rd-dark rounded-xl p-5">
                  <blockquote className="font-dm-serif text-lg text-white italic leading-relaxed">
                    "We didn't just build software — we built a solution for an industry that was crying out for one."
                  </blockquote>
                  <cite className="block mt-3 text-rd-lime text-sm font-poppins font-semibold not-italic">
                    — Usman Butt, CEO & Founder
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RepairDesk by the Numbers */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">By the Numbers</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2">RepairDesk by the Numbers</h2>
            <p className="font-dm-sans text-gray-600 mt-3 max-w-xl mx-auto">
              From a small startup to a global platform trusted by thousands of repair professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: '10,000+', desc: 'Active Repair Shops' },
              { stat: '35+', desc: 'Countries Worldwide' },
              { stat: '$500M+', desc: 'Revenue Processed' },
              { stat: '4.8/5', desc: 'Average Customer Rating' },
              { stat: '2M+', desc: 'Monthly Repair Tickets' },
              { stat: '24/7', desc: 'Customer Support' },
              { stat: '50+', desc: 'Integrations Available' },
              { stat: '99.9%', desc: 'Platform Uptime' },
            ].map(({ stat, desc }) => (
              <div key={desc} className="bg-rd-cream rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="font-dm-serif text-3xl font-bold text-rd-teal mb-2">{stat}</div>
                <div className="text-sm text-gray-600 font-dm-sans">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">Our Offices</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2">Where We Are</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-start gap-5">
                <div className="w-12 h-12 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-rd-dark mb-1">{loc.city}</h3>
                  <p className="font-dm-sans text-gray-600 text-sm">{loc.address}</p>
                  <p className="font-dm-sans text-gray-500 text-sm">{loc.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners CTA */}
      <section className="bg-rd-teal py-20">
        <div className="container-main text-center">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-white mb-4">
            Become a RepairDesk Partner
          </h2>
          <p className="font-dm-sans text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join RepairDesk in bringing the best POS system for repair stores to customers all over the world. Partner with us to grow your business and make an impact in the repair industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block bg-rd-lime text-rd-dark font-semibold px-8 py-3.5 rounded-full hover:bg-yellow-300 transition-colors font-poppins"
            >
              Become a Partner
            </a>
            <a
              href="/contact"
              className="inline-block border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors font-poppins"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
