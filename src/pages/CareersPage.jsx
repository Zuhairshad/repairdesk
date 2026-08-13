import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const positions = [
  {
    title: 'Senior React Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Build and scale the core RepairDesk web app. You will work with a modern React/TypeScript stack, collaborate closely with product and design, and ship features used by thousands of repair shops daily.',
    requirements: [
      '5+ years of React experience',
      'Strong TypeScript skills',
      'Experience with REST APIs and GraphQL',
      'Familiarity with testing (Jest, Cypress)',
    ],
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Lahore / Remote',
    type: 'Full-time',
    description:
      'Own key product areas of RepairDesk. You will talk to customers every week, define roadmap priorities, write tight specs, and work with engineering to ship impactful features on time.',
    requirements: [
      '3+ years in product management (SaaS preferred)',
      'Strong analytical and communication skills',
      'Experience with Jira, Figma, and analytics tools',
      'Customer-obsessed mindset',
    ],
  },
  {
    title: 'Customer Success Manager',
    department: 'Support',
    location: 'US (Remote)',
    type: 'Full-time',
    description:
      'Own the onboarding and success of a portfolio of RepairDesk customers. Reduce churn, drive expansion, and be the voice of the customer inside our company.',
    requirements: [
      '2+ years in customer success or account management',
      'Excellent written and verbal communication',
      'Experience with CRM tools (HubSpot, Salesforce)',
      'Bonus: experience in the repair or retail industry',
    ],
  },
  {
    title: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Design intuitive, beautiful experiences for repair shop owners around the world. Own the end-to-end design process from user research and wireframes to high-fidelity Figma prototypes.',
    requirements: [
      '3+ years of UX/product design experience',
      'Strong Figma skills',
      'Portfolio showcasing complex workflow design',
      'Experience with design systems',
    ],
  },
];

const perks = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Health Insurance',
    description: 'Comprehensive medical, dental, and vision coverage for you and your family.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Remote Work',
    description: 'Work from anywhere. We are a remote-first company with async-friendly processes.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: 'Annual Retreat',
    description: 'Once a year we bring the whole company together for a team retreat in a new city.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Learning Budget',
    description: '$1,500/year for courses, conferences, books, and anything that helps you grow.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Equity',
    description: 'Every team member receives stock options. We win together.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Flexible Hours',
    description: 'Set your own schedule. We care about output, not hours on the clock.',
  },
];

const departmentColors = {
  Engineering: 'bg-blue-100 text-blue-700',
  Product: 'bg-purple-100 text-purple-700',
  Support: 'bg-green-100 text-green-700',
  Design: 'bg-pink-100 text-pink-700',
};

export default function CareersPage() {
  const [openJob, setOpenJob] = useState(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rd-dark pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-10 right-20 w-80 h-80 rounded-full bg-rd-lime" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-rd-teal" />
        </div>
        <div className="container-main relative z-10 text-center">
          <span className="inline-block bg-rd-lime/20 text-rd-lime text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Careers at RepairDesk
          </span>
          <h1 className="font-dm-serif text-4xl md:text-6xl text-white mb-6 leading-tight">
            Join the Team Building the<br />Future of Repair
          </h1>
          <p className="font-dm-sans text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            We're a passionate, remote-first team on a mission to empower repair shop owners worldwide. If you want to make a real difference in a growing industry, you belong here.
          </p>
          <a href="#open-roles" className="btn-primary">
            See Open Roles
          </a>
        </div>
      </section>

      {/* Culture / Perks */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">Why RepairDesk</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2">
              A Place Where Great Work Thrives
            </h2>
            <p className="font-dm-sans text-gray-500 mt-3 max-w-xl mx-auto">
              We believe in taking care of our people so they can take care of our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="bg-rd-cream rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-4">
                  {perk.icon}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{perk.title}</h3>
                <p className="text-sm text-gray-600 font-dm-sans">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-rd-cream py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">Our Culture</span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2 mb-6">
                Built on Trust, Driven by Impact
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Be Candid', desc: 'We give honest, direct feedback — because that is how we grow.' },
                  { title: 'Ship Fast, Learn Faster', desc: 'We bias toward action. Done beats perfect when combined with reflection.' },
                  { title: 'Customer Obsession', desc: 'Every decision runs through one filter: does this help our customers succeed?' },
                  { title: 'Celebrate Wins', desc: 'We take the work seriously without taking ourselves too seriously.' },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-rd-teal mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-poppins font-semibold text-rd-dark">{title}:</span>{' '}
                      <span className="text-gray-600 font-dm-sans text-sm">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '80+', label: 'Team Members' },
                { num: '18', label: 'Countries Represented' },
                { num: '4.8★', label: 'Glassdoor Rating' },
                { num: '2015', label: 'Founded' },
              ].map(({ num, label }) => (
                <div key={label} className="bg-white rounded-2xl p-5 text-center shadow-sm">
                  <div className="font-dm-serif text-3xl font-bold text-rd-teal">{num}</div>
                  <div className="text-sm text-gray-500 font-dm-sans mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-roles" className="bg-white py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-rd-teal text-sm font-semibold uppercase tracking-widest">Open Positions</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2">
              {positions.length} Roles Available
            </h2>
          </div>

          <div className="space-y-4">
            {positions.map((job, i) => (
              <div
                key={job.title}
                className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Job header */}
                <button
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                  onClick={() => setOpenJob(openJob === i ? null : i)}
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-poppins font-bold text-rd-dark text-lg">{job.title}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${departmentColors[job.department]}`}>
                        {job.department}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 font-dm-sans">
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${openJob === i ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded content */}
                {openJob === i && (
                  <div className="px-6 pb-6 border-t border-gray-100 pt-5">
                    <p className="text-gray-600 font-dm-sans text-sm mb-5">{job.description}</p>
                    <h4 className="font-poppins font-semibold text-rd-dark text-sm mb-3">Requirements</h4>
                    <ul className="space-y-2 mb-6">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-center gap-2 text-sm text-gray-600 font-dm-sans">
                          <svg className="w-4 h-4 text-rd-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`mailto:careers@repairdesk.co?subject=Application for ${job.title}`}
                      className="btn-primary inline-block"
                    >
                      Apply Now
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Generic application CTA */}
      <section className="bg-rd-dark py-16">
        <div className="container-main text-center">
          <h2 className="font-dm-serif text-3xl text-white mb-4">Don't See the Right Role?</h2>
          <p className="font-dm-sans text-gray-300 mb-8 max-w-lg mx-auto">
            We're always looking for exceptional talent. Send us your resume and tell us how you can make an impact.
          </p>
          <a
            href="mailto:careers@repairdesk.co?subject=General Application"
            className="inline-block bg-rd-lime text-rd-dark font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition-colors"
          >
            Send a General Application
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
