import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const keyPartners = [
  {
    name: 'MobileSentrix',
    tag: 'Parts Supplier — USA & Canada',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    name: 'Techy',
    tag: 'Repair Franchise Network',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    name: 'Cellbotics',
    tag: 'Technician Training Academy',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443" />
      </svg>
    ),
  },
  {
    name: 'Walmart',
    tag: 'Retail Repair Partner',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'OrderSync Network',
    tag: 'Integrated Suppliers',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

const resellerBenefits = [
  {
    title: 'Generous Commissions',
    desc: 'Get a signup bonus and recurring commission for every customer you refer to RepairDesk.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182 1.106-.879 2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Implementation Bonus',
    desc: 'Offer expertise in customer onboarding and store implementation to your referrals and get rewarded.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Resources',
    desc: 'Get exclusive access to technical training, marketing material, and user guides to help you grow with us.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
];

const orderSyncBenefits = [
  {
    title: 'Brand Visibility',
    desc: 'Gain trust, visibility, and credibility in the repair industry by becoming an integrated supplier.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Increase Sales',
    desc: 'Expand your revenue by becoming an integrated vendor of the most popular Repair POS.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: 'Happy Customers',
    desc: 'Delight your customers with a smooth ordering experience with RepairDesk.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
];

const highlights = [
  {
    tag: 'Reseller Partnership',
    title: 'Lessons from Partnering with Walmart with Timothy Phelps',
    desc: "RepairDesk's partnership with Techy is focused towards developing RepairDesk University to help repair store owners excel in their business.",
  },
  {
    tag: 'Supplier Integration',
    title: 'RepairDesk Integration with MobileSentrix Canada is now LIVE!',
    desc: 'Our strategic partnership is focused on providing high-quality parts to repair shops in USA and Canada.',
  },
  {
    tag: 'Affiliate Training',
    title: 'The Importance of Training with Nicole Russell',
    desc: 'Cellbotics is our affiliate partner working with repair shop owners and technicians to train them and help them work on repairs, among other things.',
  },
];

function HandshakeIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M9 12.75c0-.606.06-1.196.174-1.767.09-.446-.089-.878-.393-1.126L7.5 9M9 12.75v7.5m-6-9v9c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75v-9a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 11.25z" />
    </svg>
  );
}

export default function PartnerPage() {
  return (
    <PageLayout>
      {/* Hero — partnership ecosystem diagram */}
      <section className="relative overflow-hidden bg-rd-dark pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-rd-lime" />
          <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-rd-teal" />
        </div>
        <div className="container-main relative z-10 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-rd-lime/15 text-rd-lime text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 font-poppins">
              <HandshakeIcon className="w-4 h-4" />
              Partner Program
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6">
              RepairDesk Partner Program
            </h1>
            <p className="font-dm-sans text-white/75 text-lg md:text-xl leading-relaxed mb-9 max-w-xl mx-auto lg:mx-0">
              We are building an integrated ecosystem to support the repair movement.
            </p>
            <a href="#become-partner" className="btn-primary px-9 py-3.5 inline-block">Join Us</a>
          </div>

          {/* Ecosystem diagram */}
          <div className="relative mx-auto w-full max-w-md aspect-square">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <g stroke="#D4F479" strokeOpacity="0.35" strokeWidth="1.5">
                <line x1="200" y1="200" x2="200" y2="70" />
                <line x1="200" y1="200" x2="330" y2="200" />
                <line x1="200" y1="200" x2="200" y2="330" />
                <line x1="200" y1="200" x2="70" y2="200" />
              </g>
              {/* Center node */}
              <circle cx="200" cy="200" r="58" fill="#016D74" />
              <text x="200" y="196" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="700" fontFamily="Poppins, sans-serif">RepairDesk</text>
              <text x="200" y="214" textAnchor="middle" fill="#C3EAB3" fontSize="10" fontFamily="DM Sans, sans-serif">Ecosystem Core</text>

              {/* Satellite: Resellers */}
              <circle cx="200" cy="70" r="42" fill="#0C3C3E" stroke="#D4F479" strokeOpacity="0.4" />
              <text x="200" y="66" textAnchor="middle" fill="#D4F479" fontSize="12" fontWeight="700" fontFamily="Poppins, sans-serif">Resellers</text>
              <text x="200" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="DM Sans, sans-serif" opacity="0.7">Refer &amp; Earn</text>

              {/* Satellite: Suppliers */}
              <circle cx="330" cy="200" r="42" fill="#0C3C3E" stroke="#D4F479" strokeOpacity="0.4" />
              <text x="330" y="196" textAnchor="middle" fill="#D4F479" fontSize="12" fontWeight="700" fontFamily="Poppins, sans-serif">Suppliers</text>
              <text x="330" y="210" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="DM Sans, sans-serif" opacity="0.7">OrderSync</text>

              {/* Satellite: Affiliates */}
              <circle cx="200" cy="330" r="42" fill="#0C3C3E" stroke="#D4F479" strokeOpacity="0.4" />
              <text x="200" y="326" textAnchor="middle" fill="#D4F479" fontSize="12" fontWeight="700" fontFamily="Poppins, sans-serif">Affiliates</text>
              <text x="200" y="340" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="DM Sans, sans-serif" opacity="0.7">Train &amp; Refer</text>

              {/* Satellite: Repair Shops */}
              <circle cx="70" cy="200" r="42" fill="#0C3C3E" stroke="#D4F479" strokeOpacity="0.4" />
              <text x="70" y="196" textAnchor="middle" fill="#D4F479" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif">Repair</text>
              <text x="70" y="210" textAnchor="middle" fill="#D4F479" fontSize="11" fontWeight="700" fontFamily="Poppins, sans-serif">Shops</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Our Key Partners */}
      <section className="bg-white py-14 border-b border-gray-100">
        <div className="container-main">
          <p className="text-center text-xs font-poppins font-bold uppercase tracking-widest text-gray-400 mb-8">Our Key Partners</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {keyPartners.map((p) => (
              <div key={p.name} className="flex items-center gap-3 bg-rd-cream rounded-xl px-4 py-3.5">
                <div className="w-9 h-9 rounded-lg bg-rd-teal/10 text-rd-teal flex items-center justify-center shrink-0">
                  {p.icon}
                </div>
                <div className="min-w-0">
                  <div className="font-poppins font-bold text-rd-dark text-sm leading-tight truncate">{p.name}</div>
                  <div className="font-dm-sans text-[11px] text-gray-500 leading-tight truncate">{p.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from CEO */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <p className="text-center text-xs font-poppins font-bold uppercase tracking-widest text-rd-teal mb-3">Message From CEO</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-12">Building Partnerships Around the World</h2>

          <div className="relative bg-rd-dark rounded-3xl px-6 sm:px-10 md:px-16 py-14 max-w-4xl mx-auto overflow-hidden">
            <svg className="absolute top-6 left-6 w-16 h-16 text-white/10" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36 1 24.64 4.12 28 8.16 28c3.36 0 5.84-2.56 5.84-5.84 0-3.16-2.16-5.4-4.96-5.4-.56 0-1.32.12-1.48.16.48-3.24 3.56-7.12 6.44-9.08L9.352 4zm16.24 0C20.696 7.456 17.24 13.12 17.24 19.36c0 5.28 3.12 8.64 7.16 8.64 3.36 0 5.84-2.56 5.84-5.84 0-3.16-2.16-5.4-4.96-5.4-.56 0-1.32.12-1.48.16.48-3.24 3.56-7.12 6.44-9.08L25.592 4z" />
            </svg>

            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-1.5 bg-rd-lime text-rd-dark text-[11px] font-bold px-3.5 py-1 rounded-full mb-8 font-poppins">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 1l2.755 5.91 6.245.6-4.72 4.316 1.29 6.174L10 15.09l-5.57 2.91 1.29-6.174L.999 7.51l6.245-.6L10 1z" /></svg>
                Best Rated POS Software
              </span>

              <blockquote className="font-poppins text-xl md:text-2xl leading-relaxed text-white max-w-2xl">
                "At RepairDesk, we are committed to providing robust repair shop management and growth solutions for our merchants in <span className="text-rd-lime">over 70 countries</span>. Our vision is to build a next-generation integrated platform that empowers repair shops to save time, earn more and unlock their true potential. We're grateful to everyone who has been part of this journey and are looking forward to building more meaningful partnerships in the coming year. If you're looking to partner with the next disruptor in the repair industry, drop us a line — we'd love to connect and explore potential synergies."
              </blockquote>

              <div className="flex items-center gap-4 mt-9">
                <div className="w-14 h-14 rounded-full bg-rd-lime/20 border border-rd-lime/40 flex items-center justify-center font-poppins font-bold text-rd-lime text-lg">
                  UB
                </div>
                <div className="text-left">
                  <div className="font-poppins font-bold text-white">Usman Butt</div>
                  <div className="font-dm-sans text-white/60 text-sm">CEO &amp; Founder, RepairDesk</div>
                </div>
              </div>

              <Link to="/our-story" className="mt-8 inline-flex items-center gap-2 text-rd-lime font-poppins font-semibold text-sm hover:gap-3 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Reseller */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
            <div>
              <p className="text-xs font-poppins font-bold uppercase tracking-widest text-rd-teal mb-3">Reseller Program</p>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5 leading-tight">Become a Reseller!</h2>
              <p className="font-dm-sans text-gray-600 leading-relaxed mb-8">
                Do you like sharing things you love? Help your fellow repair businesses upgrade to RepairDesk and earn money while opening new possibilities for them.
              </p>
              <a href="#become-partner" className="btn-primary px-8 py-3.5 inline-block">Get Started Now</a>
            </div>

            <div className="space-y-5">
              {resellerBenefits.map((b, i) => (
                <div key={b.title} className="flex gap-5 bg-rd-cream rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-rd-teal text-white flex items-center justify-center shrink-0 font-poppins font-bold">
                    {b.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-rd-dark mb-1.5">{b.title}</h3>
                    <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OrderSync App — Become an Integrated Supplier */}
      <section className="bg-rd-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-rd-mint" />
        </div>
        <div className="container-main relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs font-poppins font-bold uppercase tracking-widest text-rd-lime mb-3">OrderSync App</p>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-5">Become an Integrated Supplier!</h2>
            <p className="font-dm-sans text-white/70 leading-relaxed">
              Become your customer's favorite supplier by helping them save up to 20 hrs in inventory management. With RepairDesk's OrderSync application integration, customers can import Purchase Order details in just one click, update cost and pricing in their POS, and automatically save SKUs — reducing manual hassle and improving efficiency in their repair shops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {orderSyncBenefits.map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 backdrop-blur-sm">
                <div className="w-14 h-14 rounded-2xl bg-rd-lime/15 text-rd-lime flex items-center justify-center mb-5">
                  {b.icon}
                </div>
                <h3 className="font-poppins font-bold text-white text-lg mb-2">{b.title}</h3>
                <p className="font-dm-sans text-white/65 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Highlights */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <p className="text-center text-xs font-poppins font-bold uppercase tracking-widest text-rd-teal mb-3">Highlights</p>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark text-center mb-14">Partnership Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm flex flex-col">
                <span className="inline-block text-[11px] font-poppins font-bold uppercase tracking-wide text-rd-teal bg-rd-teal/10 px-3 py-1 rounded-full mb-4 w-fit">
                  {h.tag}
                </span>
                <h3 className="font-poppins font-bold text-rd-dark text-lg mb-3 leading-snug flex-1">{h.title}</h3>
                <p className="font-dm-sans text-gray-600 text-sm leading-relaxed mb-5">{h.desc}</p>
                <a href="#become-partner" className="inline-flex items-center gap-2 text-rd-teal font-poppins font-semibold text-sm hover:gap-3 transition-all mt-auto">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="become-partner" className="bg-rd-teal py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 font-poppins">
                <HandshakeIcon className="w-4 h-4" />
                Partnership
              </span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-4 leading-tight">
                Join Hands with the Next Disruptor in the Industry!
              </h2>
              <p className="font-dm-sans text-white/80 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Team up and let's grow together by having purposeful collaborations focusing on scaling mutual benefits.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="bg-white text-rd-teal font-poppins font-semibold px-8 py-3.5 rounded-full hover:bg-rd-cream transition-colors">
                  Become a Partner!
                </Link>
                <Link to="/contact" className="border border-white/50 text-white font-poppins font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors">
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="font-poppins font-bold text-rd-dark mb-5">Got any questions? We are happy to answer.</p>
              <ul className="space-y-4 font-dm-sans text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-rd-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  <a href="mailto:partnerships@repairdesk.co" className="text-rd-dark hover:text-rd-teal">partnerships@repairdesk.co</a>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-rd-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a1.5 1.5 0 001.5-1.5v-3.379a1.5 1.5 0 00-1.06-1.06l-3.94-.984a1.5 1.5 0 00-1.4.408l-1.021 1.02a11.207 11.207 0 01-6.336-6.336l1.021-1.021a1.5 1.5 0 00.408-1.398l-.984-3.941A1.5 1.5 0 0011.5 2.25H8.25a1.5 1.5 0 00-1.5 1.5V6.75z" /></svg>
                  <span className="text-rd-dark">+1 302-207-7373</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-rd-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span className="text-rd-dark">108 West 13th Street, Wilmington, Delaware 19801</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
