import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const trustedLogos = [
  { src: '/images/logos/techy.png', alt: 'Techy' },
  { src: '/images/logos/savannah.png', alt: 'Savannah iDoctor' },
  { src: '/images/logos/crd.png', alt: 'Computer Repair Doctor' },
  { src: '/images/logos/ifixscreens.svg', alt: 'iFixScreens' },
  { src: '/images/logos/firstresponse.png', alt: 'First Response Phone Repair' },
  { src: '/images/logos/wsa.svg', alt: 'WSA' },
];

const billingSubFeatures = [
  {
    title: 'Simplified Billing',
    desc: 'Apply discounts, adjust taxes, create multiple invoices, and finalize payments effortlessly.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Notify Your Customers',
    desc: 'Send notification alerts to your customers at the end of every repair job. Update details instantly and see ticket history.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    ),
  },
  {
    title: 'Workflow Management',
    desc: 'Ensure the completion of each step of the repair process by defining your custom workflow within repair tickets.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    ),
  },
];

const trackerFeatures = [
  {
    title: 'Transparency at Every Stage',
    desc: 'Scan ticket labels to open tickets, use quick search to update ticket information, handle refunds and warranty efficiently.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    ),
  },
  {
    title: 'Time Saving',
    desc: 'Hassle less and save your precious time by tracking every item and repair job happening at your store.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Offer Great Customer Experience',
    desc: 'Never let your customers wait to hear from you. Send them quotes, estimates, and allow them to track repairs.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-2.13a4 4 0 100-8 4 4 0 000 8zm6 0a4 4 0 10-4.24-6.65" />
    ),
  },
];

const posRelatedFeatures = [
  {
    title: 'Repair Ticket Management',
    desc: 'Process customers while saving time, increasing productivity, reducing losses, and giving a great customer experience.',
    link: '/features/repair-ticket-management',
  },
  {
    title: 'Customer Facing Display',
    desc: 'Cut down on checkout errors by showing the customers exactly what they are getting at all stages of the process.',
    link: '/features/customer-facing-display',
  },
  {
    title: 'Reporting',
    desc: 'Use reports to predict growth and plan for your next big move. Learn how well your repair shop does every day, month, and year.',
    link: '/features/business-reporting',
  },
];

const moreReasons = [
  {
    title: 'One Click Contact',
    desc: 'Connect with your customers with just a click of a button, so they never miss an update.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
  },
  {
    title: 'Check out More Customers in Less Time',
    desc: 'Serve more customers in less time with faster check-ins and check-outs, and get precise, accurate data directly from your customers.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
  },
  {
    title: 'Process Payments In The Blink Of An Eye',
    desc: 'Collect your dues using RepairDesk Payments or other payment providers. Faster, safer, and easier to get paid.',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h5M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />,
  },
];

const companyStats = [
  { stat: '3,000+', label: 'Happy Customers' },
  { stat: '50M+', label: 'Payment Processed' },
  { stat: '120+', label: 'Countries' },
];

const faqs = [
  {
    q: 'What is the best computer repair invoicing software for repair stores?',
    a: 'The best computer repair invoicing software is the one that automates your billing, tracks payments from various methods like cash or credit, and calculates based on the repair ticket. RepairDesk offers all these services and creates invoices that you can email to your customers directly or print as per your choice.',
  },
  {
    q: 'Can I track my computer mail-in repairs from RepairDesk?',
    a: "Yes, you can. With RepairDesk's mail-in repair management software, you can easily create a mail-in workflow, triage, assign labels, submit an estimate, and keep your customer informed, ensuring a smooth and error-free process for mail-in repairs.",
  },
  {
    q: 'How can I manage my payments for my computer repair shop with RepairDesk?',
    a: 'RepairDesk manages different payment methods like cash, credit/debit card, or store credit. Moreover, RepairDesk payments and integration with PayPal, Stripe, Square, and Tyro make the payment process easier and smoother for both you and the customer. You can also create estimates of the payments with the computer repair estimates software.',
  },
  {
    q: 'How can I market my computer repair store with the POS system?',
    a: 'RepairDesk computer repair shop POS software helps you market your computer repair store through built-in marketing automation. You can send promotional campaigns through email and SMS, offer loyalty points and store credits to your customers, and send automated reminders for Google reviews and feedback.',
  },
  {
    q: 'Does getting professional computer repair shop software help me run my computer repair store better?',
    a: "Definitely. Not only does the POS software manage your significant repair features, tickets, inventory, billing, and payments, but it also handles your store's reports, sales, and customer data while continuously sending updates. This enhances communication and boosts your store's productivity.",
  },
  {
    q: 'Can I set low stock alerts on my inventory for my computer repair store?',
    a: "Yes. You can set custom levels of low stock alerts using RepairDesk's computer repair shop inventory system. Once the threshold is crossed, the system will automatically update you.",
  },
];

function FaqItem({ q, a, index }) {
  const [open, setOpen] = React.useState(index === 0);
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left"
      >
        <span className="font-poppins font-semibold text-rd-dark text-base md:text-lg">{q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full border border-rd-teal/40 flex items-center justify-center transition-transform ${open ? 'rotate-45' : ''}`}>
          <svg className="w-4 h-4 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
        </span>
      </button>
      {open && <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mt-3 max-w-3xl">{a}</p>}
    </div>
  );
}

export default function ComputerRepairPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#0C3C3E] text-white pt-20 pb-24 px-6 relative overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-rd-teal/20 blur-3xl" />
        <div className="absolute -left-16 bottom-0 w-72 h-72 rounded-full bg-rd-lime/10 blur-3xl" />
        <div className="container-main relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
              Computer Repair Shop Software
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
              Upgrade Your Repair Shop with the #1 Computer Repair Management Software
            </h1>
            <p className="text-white/80 text-lg font-dm-sans leading-relaxed mb-8 max-w-xl">
              Built to solve real repair challenges, RepairDesk offers repair tickets, customizable workflows, inventory management, payments, and employee management – all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-8 py-3.5">Request a Demo</Link>
              <a href="https://app.repairdesk.co/register" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Start My Free Trial</a>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-white/5 border border-white/10 p-3 backdrop-blur-sm">
              <img src="/images/carousel/pos.png" alt="RepairDesk computer repair shop POS screen" className="rounded-2xl w-full shadow-2xl" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl px-5 py-4 shadow-xl hidden sm:block">
              <p className="text-rd-dark font-poppins font-bold text-2xl">3,000+</p>
              <p className="text-gray-500 text-xs font-dm-sans">Repair stores worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-white py-10 px-6 border-b border-gray-100">
        <div className="container-main">
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-gray-400 font-poppins mb-6">Trusted By</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {trustedLogos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-9 md:h-11 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            ))}
          </div>
        </div>
      </section>

      {/* Repair Ticketing & Invoicing — image left, text right */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Boost efficiency with Repair Tickets</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src="/images/carousel/repair-ticket.png" alt="Repair ticketing and invoicing screen in RepairDesk" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Repair Ticketing &amp; Invoicing</h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">
                Create repair tickets, upload pre, and post repair images, update or search ticket information, add internal notes &amp; staff comments. Send SMS/email alerts to customers when the repair is completed with the best in class computer repair shop POS software that caters to all your business requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14">
            {billingSubFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-rd-teal/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>{f.icon}</svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inventory Management — text left, image right */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Effective Inventory Management</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-2">Manage your Inventory like an Expert</h2>
              <p className="font-poppins font-semibold text-rd-teal text-lg mb-5">Never Miss a Sales Opportunity Due to Low Stock</p>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-6">
                Stay on top of your inventory all the time with RepairDesk. Get notified whenever a part or accessory is low in stock, reorder items from your desired suppliers, and add multiple SKUs against various vendors.
              </p>
              <ul className="space-y-3">
                {['Track your computer repair shop inventory in real time', 'Order parts and accessories from your desired vendors and suppliers', 'Add multiple SKUs against various vendors'].map((li) => (
                  <li key={li} className="flex items-start gap-3 text-gray-700 font-dm-sans text-sm">
                    <svg className="w-5 h-5 text-rd-teal shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img src="/images/carousel/inventory.png" alt="Inventory management dashboard in RepairDesk" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Repair Tracker — full-width intro then 3-up icon cards */}
      <section className="bg-[#0C3C3E] text-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="max-w-2xl mb-14">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-3">Repair Tracker</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-5">Track Repair Jobs at your Shop</h2>
            <p className="text-white/70 font-dm-sans text-lg leading-relaxed">
              Track all repairs coming in your shop, items in queue and items that are already repaired. Set up multiple access checks of the items in your store and create invoices with just a click of a button.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trackerFeatures.map((f) => (
              <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl bg-rd-lime flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-rd-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>{f.icon}</svg>
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg mb-2">{f.title}</h3>
                <p className="text-white/60 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More reasons — compact horizontal strip */}
      <section className="bg-rd-cream py-14 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {moreReasons.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>{f.icon}</svg>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-rd-dark text-sm mb-1">{f.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Point of Sale — image right, text left */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Point of Sale</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">
                Intake Devices and Checkout Customers Faster
              </h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed mb-8">
                Intake devices and checkout customers faster with a POS system explicitly made for computer repair shop needs.
              </p>
              <Link to="/features/point-of-sale" className="btn-primary px-8 py-3.5 inline-block">Learn More</Link>
            </div>
            <div>
              <img src="/images/carousel/pos.png" alt="Point of sale checkout screen in RepairDesk" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {posRelatedFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-100 p-7 hover:shadow-md hover:border-rd-teal/30 transition-all">
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-5">{f.desc}</p>
                <Link to={f.link} className="text-rd-teal font-poppins font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Management — image left, text right */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img src="/images/carousel/employee.png" alt="Employee management screen in RepairDesk" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Employee Management</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Manage your Repair Shop Efficiently</h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">
                Assign tasks, set distinctive roles and permissions for employees, record shift start and end times, actively track work progress, and monitor productivity with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case study / community */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.55fr_0.45fr] gap-12 items-center bg-[#0C3C3E] rounded-3xl p-8 md:p-14">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-3">You're in Great Company</span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-5">Trusted by More Than 3,000+ Repair Stores</h2>
              <p className="text-white/70 font-dm-sans leading-relaxed mb-8">
                When you join RepairDesk, you don't just get a software. You join a community of computer repair shop owners around the world who help you learn and grow your business.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {companyStats.map((s) => (
                  <div key={s.label}>
                    <p className="font-poppins font-bold text-2xl md:text-3xl text-rd-lime">{s.stat}</p>
                    <p className="text-white/60 font-dm-sans text-xs">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-7">
              <div className="text-rd-teal text-4xl font-dm-serif mb-3">"</div>
              <p className="text-rd-dark font-dm-sans italic leading-relaxed mb-6">
                Inventory visibility across our three locations used to be a nightmare. Now we see stock in real time and reorder before we run out.
              </p>
              <p className="font-poppins font-semibold text-rd-dark">NorthStar Computer Services</p>
              <p className="text-gray-500 text-sm font-dm-sans">Computer Repair &middot; Denver, CO</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-10">All the Answers You're Looking For</h2>
          <div className="bg-white rounded-2xl px-6 md:px-10 py-2">
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0C3C3E] py-16 md:py-20 px-6">
        <div className="container-main text-center max-w-2xl mx-auto">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">Fix More Computers Faster with the #1 Repair POS!</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary px-8 py-3.5">Request a Demo</Link>
            <a href="https://app.repairdesk.co/register" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Start My Free Trial</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
