import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const webinars = [
  {
    title: '10 Common Mistakes Cell Phone Repair Shop Owners Make',
    description:
      'In this expert-led webinar, learn about the most common pitfalls shop owners face and how to avoid them. From pricing to customer service and employee management, we cover real-world mistakes and offer practical tips to run a successful business.',
  },
  {
    title: 'RepairHub Phone System for Repair Pros – A Fireside Chat',
    description:
      'In this candid discussion, Usman (CEO RepairHub) sits down with Alex (Computer Repair Doctor Cleveland), Travis (Four Corners Repair Center), and Coby (The Hard Drive) to talk about their communication challenges—and how RepairHub Phone System helped solve them.',
    speakers: 'Usman, Alex, Travis & Coby',
  },
  {
    title: 'How to Transform Your Business to Work Without You',
    description:
      "Tired of being tied to your repair shop 24/7? In this powerful webinar, Usman (RepairHub) and Ben (ProFixerr) share proven strategies to build systems that let your repair business run smoothly—even when you're not around.",
    speakers: 'Usman & Ben',
  },
  {
    title: 'How to Train Your Repair Store Staff – RepairHub x ProFixerr',
    description:
      'Learn how to create clear SOPs, divide responsibilities fairly, and foster teamwork that drives business growth in this insightful session with Ben Rossow (Co-founder of ProFixerr). Watch now to start improving your operations.',
    speakers: 'Ben Rossow',
  },
  {
    title: 'Fast Tracking Success at Repair Shops with Digital Marketing',
    description:
      'Learn proven digital marketing strategies from Ben (ProFixerr), along with Saad, Hamid, and Usman from RepairHub, that attract and retain customers, and help you stand out in a crowded market, and enhance visibility.',
    speakers: 'Ben, Saad, Hamid & Usman',
  },
  {
    title: 'Boost Profits & Cut Risks with RepairHub + M360 Integration',
    description:
      "Unlock the full replay of our exclusive M360 + RepairHub webinar and discover how to streamline repairs, eliminate trade-in risks, and boost your shop's efficiency — anytime, at your convenience.",
  },
  {
    title: 'Key Takeaways from The Profitable Playbook Session',
    description:
      'Jeff Sandridge from The Smartphone Medics, along with Jase Iker & Nick Iker from Nano Repairs, shares expert strategies on what it really takes to make millions from a single repair store.',
    speakers: 'Jeff Sandridge, Jase Iker & Nick Iker',
  },
  {
    title: 'How to Set Up the Most Fun Black Friday Ever',
    description:
      'Discover proven ways to increase sales and make more money on Black Friday as Jeff Sandridge from The Smartphone Medics imparts his 10-year industry knowledge on attracting and retaining customers at your repair shop.',
    speakers: 'Jeff Sandridge',
  },
  {
    title: "How to Leverage RepairHub's Powerful Reporting Tool",
    description: '',
  },
  {
    title: 'New Repair Tickets Module, Membership Module, & Appointments Pro',
    description:
      'Discover the launch of 3 new exciting modules in RepairHub – the new Repair Tickets Module, Membership Module, and Appointments Pro. Learn how these modules provide more control over your repairs, appointments, and revenue.',
  },
  {
    title: 'RepairHub Automations with Jeff Baker from One Bite Technology',
    description:
      'Learn how to use RepairHub automations to get real-time repair updates and monitor employee performance at your repair store. Jeff Baker (One Bite Technology) explains how to automate processes and boost productivity.',
    speakers: 'Jeff Baker',
  },
  {
    title: 'Unlock Higher Profits with Trade-Ins & Buy-Backs',
    description:
      'Learn how trade-ins can be more profitable than supplier purchases and how you can automate trade-ins with RepairHub and Reusely. Jeff also shares some of his effective resale and pricing strategies to maximize profit margins.',
    speakers: 'Jeff Baker',
  },
];

const speakers = [
  { name: 'Usman', role: 'CEO, RepairHub' },
  { name: 'Ben Rossow', role: 'Co-founder, ProFixerr' },
  { name: 'Jeff Sandridge', role: 'The Smartphone Medics' },
  { name: 'Jeff Baker', role: 'One Bite Technology' },
  { name: 'Jase & Nick Iker', role: 'Nano Repairs' },
  { name: 'Alex', role: 'Computer Repair Doctor Cleveland' },
  { name: 'Travis', role: 'Four Corners Repair Center' },
  { name: 'Coby', role: 'The Hard Drive' },
];

/* --- Inline icons --- */
const PlayIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
  </svg>
);

const CalendarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const MicIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  </svg>
);

const VolumeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25H4.5a.75.75 0 00-.75.75v6a.75.75 0 00.75.75h2.25L11 19.5V4.5L6.75 8.25z" />
  </svg>
);

const ScreenIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75h4.5m0 0v4.5m0-4.5L4.5 9.75M20.25 3.75h-4.5m0 0v4.5m0-4.5l4.5 6M3.75 20.25h4.5m-4.5 0v-4.5m0 4.5l4.5-6M20.25 20.25h-4.5m4.5 0v-4.5m0 4.5l-4.5-6" />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

export default function WebinarPage() {
  const featured = webinars[0];

  return (
    <PageLayout>
      {/* Hero with video-player mockup */}
      <section className="bg-rd-dark text-white pt-16 md:pt-20 pb-0 px-6 overflow-hidden">
        <div className="container-main grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-white px-4 py-1.5 rounded-full mb-6">
              Webinars
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
              RepairHub Webinar
            </h1>
            <p className="text-white/80 text-lg font-dm-sans leading-relaxed mb-8 max-w-lg">
              Expert insights from industry leaders for shop owners, service advisors, and technicians.
            </p>
            <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5 inline-block">
              Start My Free Trial
            </a>
          </div>

          {/* Right: video player mockup */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-br from-[#1e2035] to-[#3d405b]">
              {/* "screen" area */}
              <div className="relative aspect-video flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(212,244,121,0.15),transparent_60%)]">
                <span className="absolute top-4 left-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-black/40 text-rd-mint px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-rd-lime inline-block" />
                  On-Demand
                </span>
                <button
                  type="button"
                  aria-label="Play featured webinar"
                  className="w-20 h-20 rounded-full bg-white/95 text-rd-dark flex items-center justify-center hover:scale-105 transition-transform shadow-xl"
                >
                  <PlayIcon className="w-8 h-8" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-poppins font-semibold text-sm text-white leading-snug line-clamp-2">
                    {featured.title}
                  </p>
                </div>
              </div>
              {/* control bar */}
              <div className="flex items-center gap-4 px-4 py-3 bg-black/30 border-t border-white/10">
                <PlayIcon className="w-4 h-4 text-white/80" />
                <div className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full w-1/3 bg-rd-lime rounded-full" />
                </div>
                <VolumeIcon className="w-4 h-4 text-white/80" />
                <ScreenIcon className="w-4 h-4 text-white/80" />
              </div>
            </div>
          </div>
        </div>

        {/* wave divider */}
        <div className="mt-14">
          <svg viewBox="0 0 1440 60" className="w-full h-10 text-rd-cream" preserveAspectRatio="none" fill="currentColor">
            <path d="M0,32 C240,60 480,0 720,20 C960,40 1200,10 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Featured speakers strip */}
      <section className="bg-rd-cream pt-2 pb-14 px-6">
        <div className="container-main">
          <div className="flex flex-wrap gap-4 justify-center">
            {speakers.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-3 bg-white rounded-full pl-2 pr-5 py-2 border border-gray-100 shadow-sm"
              >
                <span className="w-9 h-9 rounded-full bg-rd-teal/10 text-rd-teal flex items-center justify-center shrink-0">
                  <UserIcon className="w-5 h-5" />
                </span>
                <span>
                  <span className="block font-poppins font-semibold text-rd-dark text-sm leading-tight">{s.name}</span>
                  <span className="block text-gray-500 font-dm-sans text-xs leading-tight">{s.role}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar library grid */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">
                Webinar Library
              </span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark">
                Watch On-Demand Sessions
              </h2>
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-dm-sans text-sm">
              <CalendarIcon className="w-5 h-5 text-rd-teal" />
              New sessions added regularly
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webinars.map((webinar, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-rd-teal/30 hover:shadow-lg transition-all flex flex-col"
              >
                {/* video thumbnail */}
                <div className="relative aspect-video bg-[#1e2035] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rd-teal/40 via-rd-dark/60 to-black/40" />
                  <div className="relative w-12 h-12 rounded-full bg-white/90 text-rd-dark flex items-center justify-center group-hover:bg-rd-lime transition-colors">
                    <PlayIcon className="w-5 h-5" />
                  </div>
                  {webinar.speakers && (
                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide bg-black/40 text-white px-2.5 py-1 rounded-full">
                      <MicIcon className="w-3 h-3" />
                      {webinar.speakers}
                    </span>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-poppins font-bold text-rd-dark text-lg mb-3 leading-snug">
                    {webinar.title}
                  </h3>
                  {webinar.description ? (
                    <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-5 flex-1">
                      {webinar.description}
                    </p>
                  ) : (
                    <div className="flex-1 mb-5" />
                  )}
                  <a
                    href="#"
                    className="text-rd-teal font-poppins font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About RepairHub */}
      <section className="bg-[#FAF9E3] py-16 px-6">
        <div className="container-main grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="w-16 h-16 rounded-2xl bg-rd-dark text-rd-mint flex items-center justify-center shrink-0">
            <ScreenIcon className="w-8 h-8" />
          </div>
          <p className="text-rd-dark font-dm-sans text-base md:text-lg leading-relaxed">
            RepairHub is a cloud-based point-of-sale software designed specifically for small and medium-sized repair shops, including computer, small engine, power tools, watch &amp; jewelry, shoe, e-bike, bicycle, wireless, camera, heavy-duty, and cell phone repair businesses. The software keeps track of inventory levels and notifies the business when a required part is running low and needs to be replenished, so they can order parts.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-rd-dark text-white py-16 px-6">
        <div className="container-main text-center max-w-2xl">
          <div className="w-14 h-14 rounded-full bg-rd-lime text-white flex items-center justify-center mx-auto mb-6">
            <PlayIcon className="w-6 h-6" />
          </div>
          <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-4">Start Your Free Trial Now</h2>
          <p className="text-white/70 font-dm-sans text-lg mb-8">
            Expert insights from industry leaders for shop owners, service advisors, and technicians — put them to work in your own shop today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5">Start My Free Trial</a>
            <Link
              to="/contact"
              className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
