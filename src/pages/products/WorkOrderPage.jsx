import React from 'react';
import PageLayout from '../../components/PageLayout';

/* Workflow ribbon — how a work order moves through the shop */
const workflowSteps = [
  {
    label: 'Create Ticket',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    label: 'Assign Job',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7zM19 8v4m2-2h-4" />
      </svg>
    ),
  },
  {
    label: 'Track Status',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Notify Customer',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
];

/* STREAMLINE Operations */
const streamlineFeatures = [
  {
    step: '01',
    title: 'Point of Sale',
    description: "Using our best work order management software, sell repairs and accessories, generate invoices, and collect payments — all from a single screen.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h5M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Track Repair Jobs',
    description: 'Track the status of repair jobs and keep customers updated in real time. AA Repairdesk work order software automates workflows and modernizes repair management.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Inventory Management',
    description: "AA Repairdesk work order and inventory management software helps you keep tabs on available parts and accessories so you're always stocked up.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Integrated Parts Ordering',
    description: 'Order special parts and accessories directly from your preferred vendor — saving your team 20+ hours every month.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V6a1 1 0 011-1h9a1 1 0 011 1v10M3 16h13m0 0h2.5M3 16a2 2 0 104 0m9 0a2 2 0 104 0m-4 0h-5m9-5h-3.5V8H17l2.5 3v5" />
      </svg>
    ),
  },
];

/* Increase Profitability */
const profitabilityFeatures = [
  {
    title: 'Marketing Widget',
    description: "Design and send email and SMS campaigns to prospects and customers that increase your store's footfall and online queries.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: 'Omni-channel Communication',
    description: 'Enable a unified inbox experience. Have conversations across Facebook Messenger, Google Business, website live chat, and email — all from within your POS.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
  },
  {
    title: 'Online Appointments',
    description: 'Plug the appointment widget into your website and let customers book repair appointments online. Start conversations, share quotes, and win more jobs than ever.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Customer Experience',
    description: 'Organize customer data so you can deliver a personalized experience, complete with loyalty rewards and gift cards that keep customers coming back.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 10-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

/* Better Insights — dashboard tiles */
const insightTiles = [
  {
    title: 'Employee Management',
    description: 'Manage your employees, evaluate performance, and process payroll — AA Repairdesk work order management software does it all without any errors.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Roles and Permissions',
    description: 'Define, set, and implement employee roles and permissions to control exactly what your team can access inside AA Repairdesk.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Store Dashboard',
    description: 'Get an instant, high-level overview of your business through an intuitive reporting dashboard built for multi-store locations.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l8-4v18M13 21V11l6 4v6M9 9v.01M9 12v.01M9 15v.01" />
      </svg>
    ),
  },
  {
    title: 'Business Reporting',
    description: "Chart your repair shop's growth with Sales, Expense, and Reconciliation reports delivered to your inbox daily.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: 'Our technicians used to lose track of which jobs were waiting on parts. With AA Repairdesk work orders and custom statuses, everyone on the floor knows exactly where every device stands at all times.',
    name: 'Jason Tran',
    role: 'Owner, iRestore — Seattle, WA',
  },
  {
    quote: 'Integrated parts ordering alone gave us back hours every week. We used to call three different vendors for every special order — now it happens right from the work order.',
    name: 'Sarah Coleman',
    role: 'Owner, TechFix Junction — Denver, CO',
  },
  {
    quote: 'Running four locations used to mean four separate spreadsheets. The multi-store dashboard gives me one view of every ticket, every technician, and every dollar across the whole business.',
    name: 'Miguel Ortiz',
    role: 'Multi-Store Owner, GadgetCare — Miami, FL',
  },
];

const faqs = [
  {
    q: 'How do I Get Started?',
    a: 'Share your business details with us by filling out the form. A product specialist will reach out to you to give a complete consultation on how to set up your repair shop using AA Repairdesk Work Order Management software.',
  },
  {
    q: 'What Can I Manage with the Software?',
    a: 'The all-in-one work order software helps you create and track work orders, inventory, employees, sales, and cross-platform communication. You can also use its POS features for an easy check-out process.',
  },
  {
    q: 'Can I Integrate AA Repairdesk with other Platforms?',
    a: 'Yes, AA Repairdesk work order software can be integrated with 40+ platforms, including WooCommerce, Shopify, QuickBooks, Xero, ShipStation, and many more.',
  },
  {
    q: 'How much does AA Repairdesk subscription cost?',
    a: 'AA Repairdesk subscription starts from as low as $99/store/month for five users. It goes up from there depending on your number of users, your chosen plan, and any add-ons you select.',
  },
];

export default function WorkOrderPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#2d2f45] to-rd-teal text-white py-20 md:py-28 overflow-hidden">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              <span className="inline-block bg-rd-lime text-white text-sm font-semibold font-poppins px-4 py-1.5 rounded-full mb-6">
                Work Order Management
              </span>
              <h1 className="font-dm-serif text-4xl md:text-5xl leading-tight mb-6">
                Work Order Software for Repair Shops
              </h1>
              <p className="font-dm-sans text-lg text-white/80 mb-8 leading-relaxed">
                A reliable and powerful work order management system to meet all your repair business requirements. Create tickets, assign jobs to repair technicians, track repair status, organize your inventory, and streamline all the repair management processes with AA Repairdesk.
              </p>
              <div className="flex flex-wrap gap-6">
                {['Create & assign tickets', 'Track repair status live', 'Order parts from vendors'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-white/90 font-dm-sans text-sm">
                    <svg className="w-5 h-5 text-rd-mint flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Form CTA card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-rd-dark">
              <h2 className="font-poppins font-semibold text-xl mb-1">Get a Free Consultation</h2>
              <p className="font-dm-sans text-gray-500 text-sm mb-6">
                Fill out the form below and our representative will be in touch.
              </p>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-dm-sans text-sm focus:outline-none focus:ring-2 focus:ring-rd-teal/40"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-dm-sans text-sm focus:outline-none focus:ring-2 focus:ring-rd-teal/40"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-dm-sans text-sm focus:outline-none focus:ring-2 focus:ring-rd-teal/40"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-dm-sans text-sm focus:outline-none focus:ring-2 focus:ring-rd-teal/40"
                />
                <input
                  type="text"
                  placeholder="Repair Shop Name"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 font-dm-sans text-sm focus:outline-none focus:ring-2 focus:ring-rd-teal/40"
                />
                <button type="submit" className="btn-primary w-full text-base">
                  Talk to a Specialist
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow ribbon */}
      <section className="bg-rd-cream py-10 border-b border-gray-200">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={step.label}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-rd-teal text-white flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="font-poppins font-semibold text-rd-dark text-sm whitespace-nowrap">{step.label}</span>
                </div>
                {idx < workflowSteps.length - 1 && (
                  <svg className="w-6 h-6 text-rd-teal/50 rotate-90 sm:rotate-0 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* STREAMLINE Operations */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-poppins font-semibold text-rd-teal text-sm uppercase tracking-widest">Streamline Operations</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-3 mb-4">
              Automate Processes and Save Time
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              AA Repairdesk work order system for small businesses lets you automate and manage end-to-end operations at your repair shop. Create repair tickets, communicate with your employees, and enable them to finish the repair job quickly — no more manual data entry.
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-rd-teal/20" />
            {streamlineFeatures.map((feature) => (
              <div key={feature.title} className="relative bg-rd-cream rounded-2xl p-7 hover:shadow-lg transition-shadow duration-300 group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center group-hover:bg-rd-teal group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <span className="font-dm-serif text-2xl text-rd-teal/30">{feature.step}</span>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{feature.title}</h3>
                <p className="font-dm-sans text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                <a href="#" className="inline-flex items-center gap-1.5 font-poppins font-semibold text-rd-teal text-sm">
                  Read More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Increase Profitability */}
      <section className="py-20 md:py-24 bg-rd-cream">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="font-poppins font-semibold text-rd-teal text-sm uppercase tracking-widest">Increase Profitability</span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-3 mb-6">
                Increase Revenue with More Sales
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed mb-6">
                Reduce the hassle and use your time to win more walk-in and mail-in customers. Work order software for small businesses powers your marketing and lead generation through smooth cross-platform communication.
              </p>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
                Get queries, book appointments, send estimates, share repair updates, and give your customers the best repair and retail experience.
              </p>
            </div>
            <div className="space-y-4">
              {profitabilityFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-5 bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 bg-rd-teal text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-2">{feature.title}</h3>
                    <p className="font-dm-sans text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Better Insights — dashboard mockup */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-rd-dark rounded-2xl p-2 shadow-2xl">
                <div className="flex items-center gap-1.5 px-3 py-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <span className="ml-3 font-dm-sans text-white/50 text-xs">Business Overview — All Stores</span>
                </div>
                <div className="bg-rd-cream rounded-xl p-5 grid grid-cols-2 gap-4">
                  {insightTiles.map((tile) => (
                    <div key={tile.title} className="bg-white rounded-xl p-4">
                      <div className="w-9 h-9 bg-rd-teal/10 text-rd-teal rounded-lg flex items-center justify-center mb-3">
                        {tile.icon}
                      </div>
                      <div className="font-poppins font-semibold text-rd-dark text-sm">{tile.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-poppins font-semibold text-rd-teal text-sm uppercase tracking-widest">Better Insights</span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-3 mb-6">
                Monitor and Track Performance
              </h2>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed mb-8">
                With AA Repairdesk work order software, track the complete performance of your business — repair jobs, employee activity, sales, and revenue. Streamline everything from inventory management to payroll to repair job history, check repair statuses, monitor employee productivity, and get business reports with rich, advanced modules.
              </p>
              <div className="space-y-5">
                {insightTiles.map((tile) => (
                  <div key={tile.title} className="flex gap-4">
                    <div className="w-9 h-9 bg-rd-teal text-white rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      {tile.icon}
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-rd-dark mb-1">{tile.title}</h3>
                      <p className="font-dm-sans text-gray-600 text-sm leading-relaxed">{tile.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centralized Management banner */}
      <section className="py-16 bg-gradient-to-br from-rd-dark to-rd-teal">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 text-white">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-rd-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V7l8-4v18M13 21V11l6 4v6" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <span className="font-poppins font-semibold text-rd-mint text-sm uppercase tracking-widest">Centralized Management</span>
              <h2 className="font-dm-serif text-2xl md:text-3xl mt-2 mb-3">Manage Multiple Stores</h2>
              <p className="font-dm-sans text-white/80 leading-relaxed">
                Whether you're a multi-store operation or a franchise, AA Repairdesk work order software connects every location you manage. Transfer inventory between stores and keep an accurate record of every part and accessory as you grow from a single store to multiple franchises.
              </p>
            </div>
            <a href="#" className="btn-primary text-base px-8 py-3.5 whitespace-nowrap flex-shrink-0">
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 bg-rd-cream">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-4">
              Repair Shops Running on AA Repairdesk
            </h2>
            <p className="font-dm-sans text-gray-600 text-lg">
              Real shops, real workflows — see how repair businesses use work order management to save time and grow revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-8 shadow-sm flex flex-col">
                <svg className="w-8 h-8 text-rd-teal/30 mb-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="font-dm-sans text-gray-700 leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-rd-teal text-white flex items-center justify-center font-poppins font-semibold text-sm flex-shrink-0">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-rd-dark text-sm">{t.name}</div>
                    <div className="font-dm-sans text-gray-500 text-xs mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-3 text-center">
              All the Answers You're Looking For
            </h2>
            <p className="font-dm-sans text-gray-600 text-center mb-12">
              Common questions about AA Repairdesk's work order management software.
            </p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-rd-cream rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-rd-teal text-white rounded-full flex items-center justify-center flex-shrink-0 font-poppins font-bold text-sm">
                      ?
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-3">{faq.q}</h3>
                      <p className="font-dm-sans text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
