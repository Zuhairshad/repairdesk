import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const featuredStory = {
  company: 'QuickFix Mobile',
  owner: 'Marcus Chen',
  role: 'Founder & CEO',
  industry: 'Cell Phone Repair',
  location: 'Austin, TX',
  quote:
    'We were drowning in sticky notes and spreadsheets. RepairHub replaced all of it overnight. Our ticket time got cut in half, and customers actually started leaving five-star reviews because they could track their repairs in real time.',
  results: [
    { number: '50%', label: 'Faster ticket processing' },
    { number: '4.9', label: 'Google review rating' },
    { number: '2x', label: 'Revenue in 18 months' },
  ],
};

const stories = [
  {
    company: 'NorthStar Computer Services',
    owner: 'Jamie Atwood',
    industry: 'Computer Repair',
    location: 'Denver, CO',
    metric: '3 locations synced',
    quote:
      'Inventory visibility across our three locations used to be a nightmare. Now we see stock in real time and reorder before we run out.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    company: 'Precision Watch Repair',
    owner: 'Elena Vasquez',
    industry: 'Watch Repair',
    location: 'New York, NY',
    metric: '70% fewer calls',
    quote:
      'Our customers love the automated updates. They know exactly when their watch is ready, and we spend far less time on the phone.',
    color: 'from-amber-500 to-orange-600',
  },
  {
    company: 'Gemstone & Gold Jewelers',
    owner: 'Priya Patel',
    industry: 'Jewelry Repair',
    location: 'San Francisco, CA',
    metric: '$18K saved yearly',
    quote:
      'Tracking custom orders and serialized pieces was chaos before RepairHub. Now every piece has a digital trail from intake to pickup.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    company: 'AeroDrone Services',
    owner: 'Tom Bridwell',
    industry: 'Drone Repair',
    location: 'Phoenix, AZ',
    metric: '100% serial tracking',
    quote:
      'Tracking drone serial numbers and logging repair history was impossible with our old system. RepairHub makes it simple and searchable.',
    color: 'from-sky-500 to-blue-600',
  },
  {
    company: 'Green Pedal Bike Shop',
    owner: 'Sara Lindgren',
    industry: 'Bicycle Repair',
    location: 'Portland, OR',
    metric: '40% faster repairs',
    quote:
      'The seasonal inventory tools helped us prepare for spring without overstocking. We saved thousands in carrying costs last year.',
    color: 'from-[#457b9d] to-[#3d405b]',
  },
  {
    company: 'AllFix Electronics',
    owner: 'David Okonkwo',
    industry: 'Multi-Store Franchise',
    location: 'Chicago, IL',
    metric: '5 stores, 1 platform',
    quote:
      'We scaled from one store to five in two years. RepairHub grew with us — same system, same data, no migration headaches.',
    color: 'from-rose-500 to-red-600',
  },
];

const stats = [
  {
    number: '3,000+',
    label: 'Repair Shops Served',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0020.25 9.35m-16.5 0L2.25 5.25h19.5l-1.5 4.1" />
      </svg>
    ),
  },
  {
    number: '120+',
    label: 'Countries Worldwide',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    number: '37%',
    label: 'Avg. Efficiency Gain',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    number: '50M+',
    label: 'Tickets Processed',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
      </svg>
    ),
  },
];

const videoTestimonials = [
  { company: 'QuickFix Mobile', person: 'Marcus Chen', duration: '3:42', industry: 'Cell Phone Repair' },
  { company: 'NorthStar Computers', person: 'Jamie Atwood', duration: '4:15', industry: 'Computer Repair' },
  { company: 'Precision Watch Repair', person: 'Elena Vasquez', duration: '2:58', industry: 'Watch Repair' },
];

/* ---------- Inline SVG icon helpers ---------- */

const TrophyIcon = () => (
  <svg className="w-14 h-14 text-rd-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.996.178-1.768.77-2.065 1.56a2.062 2.062 0 00.597 2.22l.882.756c.166.143.314.3.443.47M18.75 4.236c.996.178 1.768.77 2.065 1.56a2.062 2.062 0 01-.597 2.22l-.882.756a3.72 3.72 0 00-.443.47m-10.386-.01a7.5 7.5 0 1010.386.01" />
  </svg>
);

const StarCluster = () => (
  <svg className="w-24 h-24 text-rd-mint/30 absolute -top-4 -right-4" viewBox="0 0 96 96" fill="currentColor">
    <polygon points="48,4 56,36 88,36 62,56 70,88 48,68 26,88 34,56 8,36 40,36" opacity="0.5" />
    <polygon points="20,8 24,20 36,20 26,28 30,40 20,32 10,40 14,28 4,20 16,20" opacity="0.3" />
    <polygon points="80,60 83,68 92,68 85,74 88,82 80,76 72,82 75,74 68,68 77,68" opacity="0.35" />
  </svg>
);

const QuoteIcon = () => (
  <svg className="w-10 h-10 text-rd-teal/20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-16 h-16 drop-shadow-lg" viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="30" fill="white" fillOpacity="0.95" />
    <path d="M26 20L46 32L26 44V20Z" fill="#3d405b" />
  </svg>
);

export default function CustomerStoriesPage() {
  return (
    <PageLayout>
      {/* ─── Hero: Spotlight Stage ─── */}
      <section className="relative overflow-hidden bg-rd-dark text-white py-24 md:py-32 px-6">
        {/* decorative radial glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-rd-teal/10 blur-[120px]" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-rd-lime/5 blur-[80px]" />
        </div>

        <div className="container-main max-w-5xl relative z-10 flex flex-col items-center text-center gap-6">
          <div className="relative">
            <TrophyIcon />
            <StarCluster />
          </div>
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] bg-white/10 backdrop-blur px-5 py-1.5 rounded-full border border-white/10 font-dm-sans">
            Customer Spotlights
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] max-w-3xl">
            Real Stories from{' '}
            <span className="text-rd-mint">Real Repair Shops</span>
          </h1>
          <p className="text-white/65 text-lg md:text-xl font-dm-sans leading-relaxed max-w-2xl">
            From cell phone stores to jewelry workshops, see how repair businesses
            around the world use RepairHub to save time, delight customers, and grow revenue.
          </p>
          <div className="flex items-center gap-3 mt-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-white/50 font-dm-sans text-sm ml-1">4.7 / 5 average rating</span>
          </div>
        </div>
      </section>

      {/* ─── Featured Story: Full-Width Spotlight Card ─── */}
      <section className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-rd-teal font-poppins font-semibold text-sm uppercase tracking-wider">Featured Story</span>
          </div>

          <div className="relative bg-white rounded-3xl shadow-xl shadow-rd-teal/5 overflow-hidden border border-gray-100">
            {/* teal accent strip */}
            <div className="h-1.5 bg-gradient-to-r from-rd-teal via-rd-lime to-rd-teal" />

            <div className="grid md:grid-cols-5 gap-0">
              {/* Photo placeholder column */}
              <div className="md:col-span-2 bg-gradient-to-br from-rd-teal to-[#014a50] flex items-center justify-center p-10 md:p-12 min-h-[260px] relative overflow-hidden">
                {/* abstract person silhouette */}
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <div className="w-24 h-24 rounded-full bg-white/15 backdrop-blur border-2 border-white/25 flex items-center justify-center">
                    <span className="font-poppins text-3xl font-bold text-white/90">
                      {featuredStory.owner.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-poppins font-semibold text-lg">{featuredStory.owner}</p>
                    <p className="text-white/60 font-dm-sans text-sm">{featuredStory.role}</p>
                    <p className="text-rd-mint font-dm-sans text-xs mt-1">{featuredStory.company}</p>
                  </div>
                </div>
                {/* decorative circles */}
                <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full border border-white/10" />
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full border border-white/10" />
              </div>

              {/* Content column */}
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-rd-teal/10 text-rd-teal font-dm-sans text-xs font-semibold px-3 py-1 rounded-full">
                    {featuredStory.industry}
                  </span>
                  <span className="text-gray-400 font-dm-sans text-xs">{featuredStory.location}</span>
                </div>

                <QuoteIcon />
                <blockquote className="font-dm-sans text-gray-700 text-lg md:text-xl leading-relaxed mt-2 mb-8 italic">
                  {featuredStory.quote}
                </blockquote>

                {/* Result metrics row */}
                <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                  {featuredStory.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <p className="font-poppins font-bold text-2xl md:text-3xl text-rd-teal">{r.number}</p>
                      <p className="font-dm-sans text-xs text-gray-500 mt-1 leading-tight">{r.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="#"
                  className="mt-8 inline-flex items-center gap-2 text-rd-teal font-poppins font-semibold text-sm hover:gap-3 transition-all self-start group"
                >
                  Read the Full Story
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stories Grid: 2-Column Cards ─── */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark">
              More Success Stories
            </h2>
            <p className="font-dm-sans text-gray-500 mt-3 max-w-xl mx-auto">
              Every repair shop has its own challenges. Here is how six different businesses transformed their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {stories.map((s, i) => (
              <Link
                key={i}
                to="#"
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-rd-teal/20 transition-all flex flex-col"
              >
                {/* gradient accent top */}
                <div className={`h-1 bg-gradient-to-r ${s.color}`} />

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  {/* header row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-poppins font-bold text-rd-dark text-lg group-hover:text-rd-teal transition-colors leading-snug">
                        {s.company}
                      </h3>
                      <p className="font-dm-sans text-gray-400 text-xs mt-0.5">{s.owner} &middot; {s.location}</p>
                    </div>
                    <span className="shrink-0 bg-rd-teal/10 text-rd-teal font-poppins font-bold text-xs px-3 py-1 rounded-full whitespace-nowrap">
                      {s.industry}
                    </span>
                  </div>

                  {/* key metric badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-rd-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-.001m5.94 0v5.94" />
                    </svg>
                    <span className="font-poppins font-bold text-rd-dark text-sm">{s.metric}</span>
                  </div>

                  {/* quote */}
                  <p className="font-dm-sans text-gray-600 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{s.quote}&rdquo;
                  </p>

                  {/* read story link */}
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-rd-teal font-poppins font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read Story
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <span className="text-gray-300 font-dm-sans text-[11px]">3 min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Results by the Numbers ─── */}
      <section className="bg-rd-dark text-white py-16 md:py-20 px-6 relative overflow-hidden">
        {/* decorative mesh */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-rd-teal/8 blur-[100px]" />
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-rd-lime/5 blur-[80px]" />
        </div>

        <div className="container-main max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <span className="text-rd-mint font-dm-sans font-semibold text-sm uppercase tracking-wider">By the Numbers</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mt-2">
              Results That Speak for Themselves
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="flex justify-center text-rd-mint mb-3">{s.icon}</div>
                <p className="font-poppins font-bold text-3xl md:text-4xl text-white">{s.number}</p>
                <p className="font-dm-sans text-white/55 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Video Testimonials ─── */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark">
              Hear It Straight from Them
            </h2>
            <p className="font-dm-sans text-gray-500 mt-3 max-w-lg mx-auto">
              Watch repair shop owners share their experience with RepairHub in their own words.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videoTestimonials.map((v, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 aspect-video flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow"
              >
                {/* film-grain overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(1,109,116,0.25),transparent_70%)]" />

                {/* play button */}
                <div className="relative z-10 flex flex-col items-center gap-3 group-hover:scale-105 transition-transform">
                  <PlayIcon />
                  <span className="text-white/80 font-dm-sans text-xs bg-black/30 backdrop-blur px-3 py-1 rounded-full">
                    {v.duration}
                  </span>
                </div>

                {/* caption bar */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                  <p className="font-poppins font-semibold text-white text-sm">{v.person}</p>
                  <p className="font-dm-sans text-white/60 text-xs">{v.company} &middot; {v.industry}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Industry Ribbon ─── */}
      <section className="bg-rd-cream py-10 px-6">
        <div className="container-main max-w-5xl">
          <p className="text-center font-dm-sans text-gray-400 text-sm mb-5 uppercase tracking-wider">
            Trusted across repair industries
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Cell Phone', 'Computer', 'Watch', 'Jewelry', 'Drone', 'Bicycle', 'Small Engine', 'Shoe', 'Camera', 'Power Tools'].map((ind) => (
              <span
                key={ind}
                className="bg-white border border-gray-200 text-gray-600 font-dm-sans text-xs px-4 py-2 rounded-full hover:border-rd-teal/40 hover:text-rd-teal transition-colors"
              >
                {ind} Repair
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Share Your Story CTA ─── */}
      <section className="relative bg-gradient-to-br from-rd-teal to-[#014a50] text-white py-16 md:py-20 px-6 overflow-hidden">
        {/* decorative dots grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots-cta" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots-cta)" />
          </svg>
        </div>

        <div className="container-main max-w-3xl text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur border border-white/15 mb-6">
            <svg className="w-8 h-8 text-rd-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Share Your Story
          </h2>
          <p className="font-dm-sans text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto">
            Using RepairHub to run your repair shop? We would love to feature your journey and the results
            you have achieved. Your story could inspire thousands of shop owners worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-rd-teal font-poppins font-semibold px-8 py-3.5 rounded-full hover:bg-rd-lime hover:text-rd-dark transition-colors"
            >
              Submit Your Story
            </Link>
            <a
              href="https://app.repairhub.co/register"
              className="border border-white/30 text-white font-poppins font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
