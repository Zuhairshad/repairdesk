import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const productCards = [
  {
    title: 'Point of Sale',
    desc: 'Join AA Repairdesk in bringing the best POS system for repair stores to customers all over the world.',
    href: '/features/point-of-sale',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3M3.75 6h16.5a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5z" />
      </svg>
    ),
  },
  {
    title: 'Repair Ticket Management',
    desc: 'Process customers while saving time, increasing productivity, reducing losses, giving a great customer experience.',
    href: '/features/repair-ticket-management',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Inventory',
    desc: 'Organize your inventory and keep track of your entire stock from order to sale. Your inventory management made effortless.',
    href: '/features/inventory-management',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    title: 'Reporting',
    desc: 'Use reports to predict growth and plan for your next big move. Learn how well your repair shop is doing every single day.',
    href: '/features/reporting',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const workflowSteps = [
  { label: 'Customer Walks In', desc: 'Device is checked in and logged against a new repair ticket in seconds.' },
  { label: 'Ticket Is Tracked', desc: 'Deadlines are set, employees are delegated, and deposits are collected.' },
  { label: 'Stock Stays Ready', desc: 'Low-stock alerts notify employees before a needed part runs out.' },
  { label: 'Device Is Picked Up', desc: 'Invoices and receipts are generated the moment the customer returns.' },
];

const mapPins = [
  { name: 'Canada', top: '22%', left: '19%' },
  { name: 'USA', top: '42%', left: '17%' },
  { name: 'UK', top: '26%', left: '46%' },
  { name: 'France', top: '33%', left: '48%' },
  { name: 'Italy', top: '39%', left: '51%' },
  { name: 'Australia', top: '80%', left: '85%' },
];
const hub = { top: '46%', left: '50%' };
const restPin = { name: '+ 34 More Countries', top: '58%', left: '70%' };

const values = [
  {
    title: 'Peace of Mind',
    desc: 'We build software that automates the whole process of running a repair shop, so owners can stop firefighting and start focusing on their customers.',
  },
  {
    title: 'Efficiency First',
    desc: 'Every workflow is designed to maximize efficiency from the moment a customer walks in to the moment they return to pick up their device.',
  },
  {
    title: 'Data-Driven Growth',
    desc: 'Detailed analytics help repair businesses anticipate demand, predict growth, and plan their next big move with confidence.',
  },
  {
    title: 'A Global Community',
    desc: 'From small independent shops to multi-location chains, we work with our customers all over the world to help them grow their business.',
  },
];

const journey = [
  {
    tag: 'The Finance Graduate',
    text: "Achieving his degree in Finance, Usman Butt, the CEO and founder of AA Repairdesk, was eager to be a successful entrepreneur.",
  },
  {
    tag: 'Learning the Trade',
    text: 'He started his career in a software development company and learned more about the industry and consumer demand.',
  },
  {
    tag: 'The First Venture',
    text: 'Once he was ready, he started his own little firm and successfully ran it for many years.',
  },
  {
    tag: 'The Bigger Opportunity',
    text: "Usman's ambition to achieve big and do more drove him further to pursue greater opportunities, and AA Repairdesk was born.",
  },
];

const stats = [
  { number: '3,000+', label: 'Satisfied Customers' },
  { number: '40+', label: 'Countries Served' },
  { number: '40+', label: 'Powerful Integrations' },
  { number: '25,000+', label: 'Cups of Coffee' },
];

const trustBadges = [
  { src: '/images/badge-happiest.png', alt: 'Happiest Users' },
  { src: '/images/badge-budget.png', alt: 'Budget Friendly' },
  { src: '/images/badge-capterra.png', alt: 'Capterra' },
  { src: '/images/badge-quality.png', alt: 'Quality Choice' },
  { src: '/images/badge-trustpilot.png', alt: 'Trustpilot' },
  { src: '/images/badge-trusted.png', alt: 'Trusted Vendor' },
];

const customerLogos = [
  { src: '/images/logos/wsa.svg', alt: 'WSA' },
  { src: '/images/logos/techy.png', alt: 'Techy' },
  { src: '/images/logos/savannah.png', alt: 'Savannah iDoctor' },
  { src: '/images/logos/crd.png', alt: 'Computer Repair Doctor' },
  { src: '/images/logos/ifixscreens.svg', alt: 'iFixScreens' },
  { src: '/images/logos/firstresponse.png', alt: 'First Response Phone Repair' },
];

const locations = [
  { city: 'Wilmington, USA', address: '108 W 13th St', detail: 'Wilmington, DE 19801' },
  { city: 'Lahore, Pakistan', address: 'Floor A3, Suite 701, 705, Jeff Heights', detail: 'Gulberg 3, Lahore, 54000' },
];

export default function OurStoryPage() {
  return (
    <PageLayout>
      {/* Hero — asymmetric, storytelling tone */}
      <section className="bg-rd-cream relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-rd-teal/8 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-rd-lime/8 blur-3xl pointer-events-none" />
        <div className="container-main relative z-10 py-20 md:py-28 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-rd-teal text-xs font-poppins font-semibold uppercase tracking-widest mb-6">
              <span className="w-8 h-px bg-rd-teal" /> Our Story
            </span>
            <h1 className="font-poppins font-semibold text-3xl md:text-5xl text-rd-dark leading-tight mb-6">
              Everything You Need To Know About AA Repairdesk
            </h1>
            <p className="font-dm-sans text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              AA Repairdesk is built to automate the whole process of repair shops and to streamline their daily activities to give you greater peace of mind.
            </p>
            <Link to="/partner-with-us" className="btn-primary">
              Become a Partner
            </Link>
          </div>

          {/* Floating credential stack */}
          <div className="relative hidden lg:block h-72">
            <div className="absolute top-0 right-4 bg-white shadow-lg border border-gray-100 rounded-2xl px-6 py-5 w-52">
              <div className="font-poppins font-semibold text-2xl text-rd-teal">3,000+</div>
              <div className="text-gray-500 text-sm font-dm-sans">Repair Shops Trust Us</div>
            </div>
            <div className="absolute top-24 left-0 bg-white shadow-lg border border-gray-100 rounded-2xl px-6 py-5 w-52">
              <div className="font-poppins font-semibold text-2xl text-rd-teal">40+</div>
              <div className="text-gray-500 text-sm font-dm-sans">Countries Served</div>
            </div>
            <div className="absolute bottom-0 right-10 bg-white shadow-lg border border-gray-100 rounded-2xl px-6 py-5 w-52">
              <div className="font-poppins font-semibold text-2xl text-rd-teal">SaaS</div>
              <div className="text-gray-500 text-sm font-dm-sans">POS &amp; ERP Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reinventing Repair — About the Product */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-rd-teal text-xs font-poppins font-semibold uppercase tracking-widest">Reinventing Repair</span>
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-rd-dark mt-3 mb-5">About the Product</h2>
            <p className="font-dm-sans text-gray-600 leading-relaxed">
              AA Repairdesk is a SaaS-based integrated POS &amp; ERP software designed specifically for the repair industry. It allows users to track items for repair, set deadlines, delegate employees, save customer information, collect deposits, print repair tickets, and manage invoices and receipts.
            </p>
            <p className="font-dm-sans text-gray-600 leading-relaxed mt-4">
              AA Repairdesk also notifies employees of low stock, and gives detailed analytics that help businesses anticipate demand.
            </p>
          </div>

          {/* Workflow strip — unique storytelling visualization */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {workflowSteps.map((step, i) => (
              <div key={step.label} className="relative">
                <div className="bg-rd-cream rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 rounded-full bg-rd-dark text-rd-mint font-poppins font-semibold flex items-center justify-center mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-2">{step.label}</h3>
                  <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
                {i < workflowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 items-center justify-center text-rd-teal">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center font-dm-sans text-gray-500 text-sm mt-6 max-w-2xl mx-auto">
            The idea is to maximize efficiency, from the time a customer walks in, to when they return to pick up their device.
          </p>
        </div>
      </section>

      {/* Product cards */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="text-rd-teal text-xs font-poppins font-semibold uppercase tracking-widest">What's Inside</span>
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-rd-dark mt-3">One Platform, Every Repair Workflow</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-rd-teal/10 text-rd-teal flex items-center justify-center mb-5">
                  {card.icon}
                </div>
                <h3 className="font-poppins font-semibold text-lg text-rd-dark mb-2">{card.title}</h3>
                <p className="font-dm-sans text-sm text-gray-600 leading-relaxed mb-6 flex-1">{card.desc}</p>
                <Link to={card.href} className="inline-flex items-center gap-2 text-rd-teal font-poppins font-semibold text-sm hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Customers — global network / world-map visualization */}
      <section className="bg-rd-dark py-20 relative overflow-hidden">
        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-rd-mint text-xs font-poppins font-semibold uppercase tracking-widest">Our Customers</span>
              <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-white mt-3 mb-5">A Global Network of Repair Shops</h2>
              <p className="font-dm-sans text-white/70 leading-relaxed mb-4">
                AA Repairdesk currently powers hundreds of cell phone repair shops around the world. Most of our customers reside in the USA, UK, Australia, Canada, Italy, France and other European countries.
              </p>
              <p className="font-dm-sans text-white/70 leading-relaxed">
                We work with our customers to help them automate the whole repair management process and grow their business — wherever in the world they operate.
              </p>
            </div>

            {/* Constellation map */}
            <div className="relative h-80 md:h-96">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {mapPins.map((pin) => (
                  <line
                    key={pin.name}
                    x1={parseFloat(hub.left)}
                    y1={parseFloat(hub.top)}
                    x2={parseFloat(pin.left)}
                    y2={parseFloat(pin.top)}
                    stroke="rgba(212,244,121,0.35)"
                    strokeWidth="0.3"
                    strokeDasharray="1.2 1.2"
                  />
                ))}
                <line
                  x1={parseFloat(hub.left)}
                  y1={parseFloat(hub.top)}
                  x2={parseFloat(restPin.left)}
                  y2={parseFloat(restPin.top)}
                  stroke="rgba(212,244,121,0.35)"
                  strokeWidth="0.3"
                  strokeDasharray="1.2 1.2"
                />
              </svg>

              {/* Hub */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ top: hub.top, left: hub.left }}
              >
                <span className="w-4 h-4 rounded-full bg-rd-lime shadow-[0_0_0_6px_rgba(212,244,121,0.2)]" />
                <span className="mt-2 text-[10px] font-poppins font-semibold text-white bg-rd-teal px-2 py-0.5 rounded-full whitespace-nowrap">AA Repairdesk HQ</span>
              </div>

              {mapPins.map((pin) => (
                <div
                  key={pin.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group"
                  style={{ top: pin.top, left: pin.left }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  <span className="mt-1.5 text-[11px] font-dm-sans text-white/80 whitespace-nowrap">{pin.name}</span>
                </div>
              ))}

              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                style={{ top: restPin.top, left: restPin.left }}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-rd-mint" />
                <span className="mt-1.5 text-[11px] font-dm-sans text-white/80 whitespace-nowrap">{restPin.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-rd-teal text-xs font-poppins font-semibold uppercase tracking-widest">What Drives Us</span>
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-rd-dark mt-3">The Principles Behind the Platform</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="border border-gray-100 rounded-2xl p-7 hover:border-rd-teal/40 transition-colors">
                <span className="block font-poppins text-4xl font-semibold text-rd-teal/20 mb-4">0{i + 1}</span>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{v.title}</h3>
                <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder timeline — AA Repairdesk's Journey */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-rd-teal text-xs font-poppins font-semibold uppercase tracking-widest">AA Repairdesk's Journey</span>
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-rd-dark mt-3">Where It All Started...</h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-rd-teal/20" />
            <div className="space-y-10">
              {journey.map((step, i) => (
                <div key={step.tag} className={`relative flex flex-col md:flex-row items-start gap-6 ${i % 2 === 1 ? 'md:flex-row-reverse md:text-right' : ''}`}>
                  <div className="absolute left-4 md:left-1/2 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-rd-teal ring-4 ring-rd-cream" />
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 1 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <span className="text-xs font-poppins font-semibold text-rd-teal uppercase tracking-wide">{step.tag}</span>
                    <p className="font-dm-sans text-gray-600 leading-relaxed mt-2">{step.text}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>

            <div className="bg-rd-dark rounded-2xl p-8 mt-14 text-center">
              <svg className="w-8 h-8 text-rd-mint mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="font-poppins text-lg md:text-xl text-white italic leading-relaxed max-w-xl mx-auto">
                "We didn't just build software — we built a solution for an industry that was crying out for one."
              </p>
              <p className="text-rd-mint text-sm font-poppins font-semibold mt-4">— Usman Butt, CEO &amp; Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-rd-teal text-xs font-poppins font-semibold uppercase tracking-widest">By The Numbers</span>
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-rd-dark mt-3">AA Repairdesk by the Numbers</h2>
            <p className="font-dm-sans text-gray-600 mt-4 max-w-xl mx-auto">
              The best results are ones that can be measured, and we've got the numbers to back up our claims. See just how successful AA Repairdesk has been in the repair industry.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-rd-dark rounded-2xl p-7 text-center">
                <div className="font-poppins font-semibold text-3xl text-rd-mint mb-2">{s.number}</div>
                <div className="text-sm text-white/70 font-dm-sans">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges + customer logos */}
      <section className="bg-rd-cream py-16">
        <div className="container-main">
          <p className="text-center text-xs font-poppins font-semibold uppercase tracking-widest text-gray-400 mb-8">Recognized By</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-14">
            {trustBadges.map((b) => (
              <img key={b.alt} src={b.src} alt={b.alt} className="h-14 md:h-16 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            ))}
          </div>
          <p className="text-center text-xs font-poppins font-semibold uppercase tracking-widest text-gray-400 mb-8">Powering Repair Shops Like</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {customerLogos.map((l) => (
              <img key={l.alt} src={l.src} alt={l.alt} className="h-8 md:h-9 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="text-rd-teal text-xs font-poppins font-semibold uppercase tracking-widest">Our Offices</span>
            <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-rd-dark mt-3">Where We Are</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {locations.map((loc) => (
              <div key={loc.city} className="bg-rd-cream rounded-2xl p-8 flex items-start gap-5">
                <div className="w-12 h-12 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-1">{loc.city}</h3>
                  <p className="font-dm-sans text-gray-600 text-sm">{loc.address}</p>
                  <p className="font-dm-sans text-gray-500 text-sm">{loc.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-rd-teal py-20">
        <div className="container-main text-center">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-white mb-4">Become a AA Repairdesk Partner</h2>
          <p className="font-dm-sans text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join AA Repairdesk in bringing the best POS system for repair stores to customers all over the world.
          </p>
          <Link to="/partner-with-us" className="btn-white inline-block font-semibold px-8 py-3.5">
            Become a Partner
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
