import React from 'react';
import PageLayout from '../components/PageLayout';

/* ---------- Icon primitives ---------- */

const IconPerson = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="8" r="3.5" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 20c1.2-3.6 4.2-5.5 7.5-5.5s6.3 1.9 7.5 5.5" />
  </svg>
);

const IconShield = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l7 3v5c0 5-3.2 8.5-7 10-3.8-1.5-7-5-7-10V6l7-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4" />
  </svg>
);

const IconHeartPulse = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20.5S3.5 15.2 3.5 9.3A4.3 4.3 0 0112 6.3a4.3 4.3 0 018.5 3c0 5.9-8.5 11.2-8.5 11.2z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.5 11h2.5l1.5-2.5 2 4 1.5-2.5H16" />
  </svg>
);

const IconBaby = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="12" cy="7.5" r="3.5" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 20c0-4 2.7-6.5 6-6.5S18 16 18 20" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.5 7c.4.8 1.3 1.3 2.5 1.3S13.6 7.8 14 7" />
  </svg>
);

const IconUsersShare = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <circle cx="8" cy="8" r="3" strokeWidth={1.5} />
    <circle cx="17" cy="6" r="2.3" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19c.6-3.3 2.7-5 5-5s4.4 1.7 5 5" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.5 14.3c1.9.4 3.5 1.9 4 4.7" />
  </svg>
);

const IconCalendarLeaf = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.5 9.5h17M8 3v4M16 3v4" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.5 15.5c1.5-2 4-2 5.5 0-1.5 2-4 2-5.5 0z" />
  </svg>
);

const IconTrophy = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4h10v4a5 5 0 01-10 0V4z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 5.5H4.5A2.5 2.5 0 007 10M17 5.5h2.5A2.5 2.5 0 0117 10" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12.5v3M9 20h6M9.5 20c0-2 .8-3 2.5-4 1.7 1 2.5 2 2.5 4" />
  </svg>
);

const IconBook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5.5c2-1 5-1 8 .5 3-1.5 6-1.5 8-.5v13c-2-1-5-1-8 .5-3-1.5-6-1.5-8-.5v-13z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v13" />
  </svg>
);

const IconLotus = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 20c-4.5 0-8-2.3-8-6 3 1.3 5.5.6 8-1.5 2.5 2.1 5 2.8 8 1.5 0 3.7-3.5 6-8 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12.5c-1-2.8-.6-5.7 1.6-8 1 2.9.4 5.8-1.6 8zM12 12.5c1-2.8.6-5.7-1.6-8-1 2.9-.4 5.8 1.6 8z" />
  </svg>
);

const IconDice = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="4" y="4" width="16" height="16" rx="3" strokeWidth={1.5} />
    <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
    <circle cx="9" cy="15" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="15" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconCamera = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8.5A1.5 1.5 0 015.5 7H8l1-2h6l1 2h2.5A1.5 1.5 0 0120 8.5v9A1.5 1.5 0 0118.5 19h-13A1.5 1.5 0 014 17.5v-9z" />
    <circle cx="12" cy="13" r="3.2" strokeWidth={1.5} />
  </svg>
);

const IconMegaphone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10v4h3l6 4V6l-6 4H3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 9.5a3 3 0 010 5M19 7.5a6 6 0 010 9" />
  </svg>
);

const IconGift = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="4" y="9" width="16" height="11" rx="1.5" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9h16M12 9v11" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9c-1-3-3-4-4.5-3S6 9 12 9zm0 0c1-3 3-4 4.5-3S18 9 12 9z" />
  </svg>
);

const IconHandHeart = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 13l3.5 3.5c.6.6 1.4.9 2.2.9H15c1 0 2-.4 2.7-1.1l3-3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 10h3l3.4-1.7a2 2 0 011.9 0L16 10h1" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15h4a1.5 1.5 0 000-3h-2.5" />
  </svg>
);

const IconMedal = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 4l4 6-4 6-4-6 4-6zM16 4l4 6-4 6-4-6 4-6z" />
    <circle cx="12" cy="17" r="4" strokeWidth={1.5} />
  </svg>
);

const IconPhone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="7" y="3" width="10" height="18" rx="2" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 18h2" />
  </svg>
);

const IconCode = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 8l-4 4 4 4M15 8l4 4-4 4" />
  </svg>
);

const IconClipboardCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <rect x="5" y="4.5" width="14" height="16" rx="2" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 4.5V3.5a1 1 0 011-1h4a1 1 0 011 1v1" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13l1.8 1.8L15 10.6" />
  </svg>
);

const IconHandshake = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12l4-4 4.5 4.5-1.5 1.5-3-3M22 12l-4-4-4.5 4.5 1.5 1.5 3-3" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13.5l1.8 1.8a1.6 1.6 0 002.3 0l.4-.4M12.5 16.7l.6.6a1.6 1.6 0 002.3 0l.4-.4" />
  </svg>
);

/* ---------- Data ---------- */

const perks = [
  { icon: IconShield, tint: 'bg-rd-lime/25 text-rd-dark', title: 'PF & Employee Old Age Benefit', desc: 'Provident fund contributions and EOBI coverage so your future stays secure while you build ours.' },
  { icon: IconBaby, tint: 'bg-rd-mint/40 text-rd-teal', title: 'Maternity & Paternity Leave', desc: 'Paid time off for new parents to bond with their little ones without work worries.' },
  { icon: IconHeartPulse, tint: 'bg-rd-teal/10 text-rd-teal', title: 'Health Insurance', desc: 'Medical coverage for you and your dependents, because wellbeing comes first.' },
  { icon: IconUsersShare, tint: 'bg-rd-lime/25 text-rd-dark', title: 'Employee Referral Program', desc: 'Bring great people along and get rewarded for growing the RepairDesk family.' },
  { icon: IconCalendarLeaf, tint: 'bg-rd-mint/40 text-rd-teal', title: 'Paid Leaves', desc: 'Generous annual, casual, and sick leave so you can rest and recharge guilt-free.' },
  { icon: IconTrophy, tint: 'bg-rd-teal/10 text-rd-teal', title: 'Employee Recognition & Performance Incentives', desc: 'Bonuses, shout-outs, and rewards for the people who consistently raise the bar.' },
];

const stats = [
  { value: '120+', label: 'Team Members' },
  { value: '3,000+', label: 'Customers' },
  { value: '12,000+ SQFT', label: 'Office Space' },
];

const steps = [
  { num: '01', title: 'Introduction Call', desc: 'Telephonic discussion with our technical recruiter.', icon: IconPhone },
  { num: '02', title: 'Technical Interview', desc: 'On-site technical interview with the team lead.', icon: IconCode },
  { num: '03', title: 'Assessment Centre', desc: 'Cultural assessment & HR interview.', icon: IconClipboardCheck },
  { num: '04', title: 'Offer Placement', desc: 'Selection round & final call for offer placement.', icon: IconHandshake },
];

const galleryItems = [
  { title: 'Team Celebrations', icon: IconGift, tint: 'bg-rd-lime' },
  { title: 'Townhalls & Learning', icon: IconMegaphone, tint: 'bg-rd-mint' },
  { title: 'Sports & Games', icon: IconTrophy, tint: 'bg-rd-teal' },
  { title: 'Fun Fridays', icon: IconDice, tint: 'bg-rd-lime' },
  { title: 'Community Give-Back', icon: IconHandHeart, tint: 'bg-rd-mint' },
  { title: 'Annual Awards Night', icon: IconMedal, tint: 'bg-rd-teal' },
];

export default function CareersPage() {
  return (
    <PageLayout>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-rd-cream pt-24 pb-32">
        {/* decorative soft glows */}
        <div className="absolute -top-20 right-[10%] w-72 h-72 rounded-full bg-rd-teal/6 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[5%] w-56 h-56 rounded-full bg-rd-lime/8 blur-3xl pointer-events-none" />

        <div className="container-main relative z-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block bg-rd-teal/10 text-rd-teal text-sm font-poppins font-semibold px-4 py-1.5 rounded-full mb-6">
              Careers at RepairDesk
            </span>
            <h1 className="font-dm-serif text-4xl md:text-6xl text-rd-dark mb-6 leading-tight">
              Be a Part of Something Great!
            </h1>
            <p className="font-dm-sans text-gray-600 text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              Join Us on a Journey to Experience the Global IT Industry and a Culture That Inspires Community
            </p>
            <a href="#open-positions" className="btn-primary">
              See Open Positions
            </a>
          </div>

          {/* People constellation graphic */}
          <div className="relative h-72 hidden sm:block">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 260" fill="none">
              <path d="M60 60 L160 130 L260 50 M160 130 L100 210 M160 130 L240 200" stroke="#3d405b" strokeOpacity="0.3" strokeWidth="1.5" />
            </svg>
            {[
              { top: '4%', left: '10%', size: 'w-16 h-16', tint: 'bg-rd-lime text-rd-dark' },
              { top: '38%', left: '42%', size: 'w-24 h-24', tint: 'bg-rd-dark text-white' },
              { top: '2%', left: '76%', size: 'w-14 h-14', tint: 'bg-rd-mint text-rd-dark' },
              { top: '68%', left: '24%', size: 'w-16 h-16', tint: 'bg-rd-teal text-white' },
              { top: '66%', left: '68%', size: 'w-16 h-16', tint: 'bg-rd-lime text-rd-dark' },
            ].map((p, i) => (
              <div
                key={i}
                className={`absolute ${p.size} ${p.tint} rounded-full flex items-center justify-center shadow-lg`}
                style={{ top: p.top, left: p.left }}
              >
                <IconPerson className="w-1/2 h-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Floating stats strip */}
        <div className="container-main relative z-10 mt-8">
          <div className="bg-white rounded-2xl shadow-xl grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 -mb-40 sm:-mb-24">
            {stats.map((s) => (
              <div key={s.label} className="p-6 text-center">
                <div className="font-dm-serif text-3xl font-bold text-rd-teal">{s.value}</div>
                <div className="text-sm text-gray-500 font-dm-sans mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CEO MESSAGE ============ */}
      <section className="bg-white pt-48 sm:pt-32 pb-20">
        <div className="container-main">
          <div className="bg-rd-cream rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center max-w-4xl mx-auto">
            <div className="flex md:flex-col items-center gap-4 md:gap-3 justify-center">
              <div className="w-20 h-20 rounded-full bg-rd-teal text-white flex items-center justify-center font-dm-serif text-2xl font-bold flex-shrink-0">
                UB
              </div>
              <div className="text-center md:text-center">
                <p className="font-poppins font-bold text-rd-dark">Usman Butt</p>
                <p className="font-dm-sans text-sm text-rd-teal">Founder &amp; CEO</p>
              </div>
            </div>
            <div>
              <svg className="w-9 h-9 text-rd-teal/40 mb-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 6c-2.8 0-5 2.2-5 5v7h7v-7H5.2C5.6 9.5 7 8 9 8V6H7zm10 0c-2.8 0-5 2.2-5 5v7h7v-7h-3.8c.4-1.5 1.8-3 3.8-3V6h-2z" />
              </svg>
              <p className="font-dm-serif text-lg md:text-xl text-rd-dark italic leading-relaxed">
                "Welcome to RepairDesk! We're grateful to all the people who have been part of this journey and are
                looking forward to joining forces with exceptional talent that shares our vision, values, and work
                philosophy. So, if you want to be challenged to be the best at what you do, drop us a line and we'd
                love to connect."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ NORTH STAR ============ */}
      <section className="bg-rd-teal py-16 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-56 h-56 rounded-full bg-white/5" />
        <div className="container-main relative z-10 text-center max-w-3xl mx-auto">
          <svg className="w-10 h-10 text-rd-lime mx-auto mb-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.3} d="M12 2l2.4 6.8L21 11l-6.6 2.2L12 20l-2.4-6.8L3 11l6.6-2.2L12 2z" />
          </svg>
          <span className="text-rd-lime text-sm font-poppins font-semibold uppercase tracking-widest">
            North Star for RepairDesk
          </span>
          <p className="font-dm-serif text-2xl md:text-3xl text-white mt-4 leading-snug">
            RepairDesk to be the most customer-centric, reliable &amp; innovative company in the repair industry.
          </p>
        </div>
      </section>

      {/* ============ WHERE WE STAND ============ */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-rd-teal text-sm font-poppins font-semibold uppercase tracking-widest">
                Since 2014
              </span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2 mb-6">Where We Stand</h2>
              <p className="font-dm-sans text-gray-600 leading-relaxed">
                RepairDesk started in 2014 as a POS solution for independent Cell Phone Repair stores but has
                rapidly grown over the years to become the preferred choice of merchants in any repair industry all
                over the world. We take pride in our growing family of dedicated, talented people building this
                journey with us.
              </p>
            </div>

            {/* vertical connected timeline of stats */}
            <div className="relative pl-10">
              <div className="absolute left-[15px] top-2 bottom-2 w-px bg-rd-teal/20" />
              <div className="space-y-8">
                {stats.map((s, i) => (
                  <div key={s.label} className="relative flex items-center gap-5">
                    <div className="absolute -left-10 w-8 h-8 rounded-full bg-rd-teal text-white flex items-center justify-center text-xs font-poppins font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="bg-rd-cream rounded-xl px-6 py-4 flex-1">
                      <span className="font-dm-serif text-2xl font-bold text-rd-teal">{s.value}</span>
                      <span className="text-gray-600 font-dm-sans text-sm ml-2">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS AND PERKS ============ */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-rd-teal text-sm font-poppins font-semibold uppercase tracking-widest">
              Take Care of Our People
            </span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2">Benefits and Perks</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className={`bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${i % 3 === 1 ? 'lg:mt-6' : ''}`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${perk.tint}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-poppins font-bold text-rd-dark mb-2">{perk.title}</h3>
                  <p className="text-sm text-gray-600 font-dm-sans leading-relaxed">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ MTO PROGRAM ============ */}
      <section className="bg-rd-dark py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-rd-lime/10 -translate-y-1/3 translate-x-1/3" />
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center max-w-4xl mx-auto text-center md:text-left">
            <div className="w-20 h-20 rounded-2xl bg-rd-lime text-rd-dark flex items-center justify-center mx-auto md:mx-0 flex-shrink-0">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-5 9 5-9 5-9-5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11v4c0 1.7 2.2 3 5 3s5-1.3 5-3v-4" />
              </svg>
            </div>
            <div>
              <span className="text-rd-lime text-sm font-poppins font-semibold uppercase tracking-widest">
                Management Trainee Officer
              </span>
              <h2 className="font-dm-serif text-2xl md:text-3xl text-white mt-2 mb-3">
                Kickstart your Career Today, MTO Program at RepairDesk!
              </h2>
              <p className="font-dm-sans text-gray-300 leading-relaxed">
                Built for fresh graduates and early-career talent, our MTO program rotates you across teams,
                pairs you with experienced mentors, and gives you hands-on exposure to a real, growing SaaS
                business — a fast track from classroom theory to industry-ready expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GIRLS LOUNGE ============ */}
      <section className="bg-rd-mint/30 py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-rd-teal text-sm font-poppins font-semibold uppercase tracking-widest">
                A Space of Her Own
              </span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2 mb-5">
                Ditch the Office, Get Relaxed in Girls Lounge!
              </h2>
              <p className="font-dm-sans text-gray-600 leading-relaxed mb-6">
                Away from the work desk, a sanctuary where the ladies of RepairDesk convene to relax, rest and
                relieve stress. Disconnect from the daily grind of work, stretch, meditate, and re-energize your
                body and soul. Read a nice book, get a power nap or challenge your friends to a game of monopoly.
                Shine on girl, be you.
              </p>
              <div className="flex gap-4">
                {[IconBook, IconLotus, IconDice].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 rounded-xl bg-white text-rd-teal flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-64 lg:h-80">
              <div className="absolute top-0 left-4 w-40 h-40 rounded-3xl bg-rd-lime/60 flex items-center justify-center rotate-3">
                <IconLotus className="w-16 h-16 text-rd-dark" />
              </div>
              <div className="absolute bottom-0 right-0 w-44 h-44 rounded-3xl bg-white shadow-lg flex items-center justify-center -rotate-3">
                <IconBook className="w-16 h-16 text-rd-teal" />
              </div>
              <div className="absolute bottom-6 left-24 w-28 h-28 rounded-full bg-rd-teal/90 flex items-center justify-center">
                <IconDice className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LIFE AT REPAIRDESK ============ */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-rd-teal text-sm font-poppins font-semibold uppercase tracking-widest">
              Culture &amp; Community
            </span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2">Life at RepairDesk</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {galleryItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`relative rounded-2xl overflow-hidden aspect-square flex flex-col items-center justify-center text-center p-4 ${item.tint} ${i % 2 === 0 ? 'sm:translate-y-2' : ''}`}
                >
                  <Icon className="w-9 h-9 text-rd-dark/70 mb-3" />
                  <span className="font-poppins font-semibold text-rd-dark text-sm">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ RECRUITMENT PROCESS ============ */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="text-center mb-16">
            <span className="text-rd-teal text-sm font-poppins font-semibold uppercase tracking-widest">
              Interested?
            </span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-2">Know About Our Recruitment Process</h2>
          </div>

          <div className="relative">
            {/* connecting line - desktop */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-rd-teal/25" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.num} className="relative text-center">
                    <div className="relative w-16 h-16 mx-auto mb-5">
                      <div className="w-16 h-16 rounded-full bg-rd-teal text-white flex items-center justify-center shadow-md relative z-10">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-rd-lime text-rd-dark text-xs font-poppins font-bold flex items-center justify-center z-20">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="font-poppins font-bold text-rd-dark mb-1.5">{step.title}</h3>
                    <p className="text-sm text-gray-600 font-dm-sans">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ OPEN POSITIONS CTA ============ */}
      <section id="open-positions" className="bg-rd-dark py-20 relative overflow-hidden">
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-rd-teal/30" />
        <div className="absolute -top-10 right-10 w-48 h-48 rounded-full bg-rd-lime/10" />
        <div className="container-main relative z-10 text-center max-w-2xl mx-auto">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-white mb-4">Open Positions</h2>
          <p className="font-dm-sans text-gray-300 text-lg mb-8 leading-relaxed">
            Join our dynamic team and be part of a culture that values creativity, collaboration, and growth.
            Let's build something amazing together!
          </p>
          <a
            href="mailto:careers@repairdesk.co?subject=I'm Interested in Joining RepairDesk"
            className="inline-block bg-rd-lime text-rd-dark font-poppins font-semibold px-8 py-3.5 rounded-full hover:bg-yellow-300 transition-colors"
          >
            Join Us!
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
