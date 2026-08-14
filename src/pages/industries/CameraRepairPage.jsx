import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ------------------------------------------------------------------ */
/* Decorative camera-themed graphics                                  */
/* ------------------------------------------------------------------ */

function ApertureGraphic({ className }) {
  const blades = Array.from({ length: 8 });
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none">
      <circle cx="100" cy="100" r="98" stroke="currentColor" strokeOpacity="0.18" strokeWidth="1" />
      <circle cx="100" cy="100" r="72" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />
      {blades.map((_, i) => (
        <polygon
          key={i}
          points="100,100 135,26 158,44"
          transform={`rotate(${i * 45} 100 100)`}
          fill="currentColor"
          fillOpacity="0.14"
        />
      ))}
      <circle cx="100" cy="100" r="34" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="100" cy="100" r="6" fill="currentColor" fillOpacity="0.5" />
    </svg>
  );
}

function FilmStrip({ className }) {
  return (
    <div className={`flex gap-3 ${className || ''}`}>
      {Array.from({ length: 26 }).map((_, i) => (
        <div key={i} className="w-2.5 h-4 rounded-[2px] bg-white/25 shrink-0" />
      ))}
    </div>
  );
}

function ViewfinderCorners({ variant = 'light' }) {
  const color = variant === 'light' ? 'border-rd-teal' : 'border-rd-lime/70';
  return (
    <>
      <span className={`absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 ${color}`} />
      <span className={`absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 ${color}`} />
      <span className={`absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2 ${color}`} />
      <span className={`absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 ${color}`} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Icon paths                                                          */
/* ------------------------------------------------------------------ */

const icons = {
  bell: <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />,
  document: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
  cube: <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  swap: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />,
  ticket: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
  signature: <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />,
  star: <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />,
  clock: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
  coin: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M15 8.5c0-1.38-1.79-2.5-4-2.5s-4 1.12-4 2.5c0 1.38 1.79 2.5 4 2.5s4 1.12 4 2.5-1.79 2.5-4 2.5-4-1.12-4-2.5" />,
  lock: <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z" />,
  chart: <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
  wallet: <path strokeLinecap="round" strokeLinejoin="round" d="M21 12V7H5a2 2 0 010-4h14v4M3 5v14a2 2 0 002 2h16v-5M18 12a2 2 0 000 4h4v-4h-4z" />,
  percent: <><circle cx="7" cy="7" r="2.2" /><circle cx="17" cy="17" r="2.2" /><path strokeLinecap="round" strokeLinejoin="round" d="M18 6L6 18" /></>,
  alert: <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  shieldCheck: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
  lens: <><circle cx="12" cy="12" r="8.2" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="0.8" fill="currentColor" /></>,
};

function IconBadge({ children, tone = 'teal' }) {
  const toneClasses =
    tone === 'lime'
      ? 'bg-rd-lime text-rd-dark'
      : tone === 'white5'
      ? 'bg-white/10 text-rd-lime group-hover:bg-rd-lime group-hover:text-rd-dark'
      : 'bg-rd-teal/10 text-rd-teal group-hover:bg-rd-teal group-hover:text-white';
  return (
    <div className={`w-11 h-11 rounded-full flex items-center justify-center mb-4 transition-colors ${toneClasses}`}>
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        {children}
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Reusable feature card with camera-viewfinder corner brackets       */
/* ------------------------------------------------------------------ */

function FocusCard({ icon, title, desc, dark = false }) {
  return (
    <div
      className={`group relative p-7 transition-colors ${
        dark ? 'bg-white/5 border border-white/10 hover:border-rd-lime/40' : 'bg-white border border-rd-teal/15 hover:border-rd-teal/50'
      }`}
    >
      <ViewfinderCorners variant={dark ? 'dark' : 'light'} />
      <IconBadge tone={dark ? 'white5' : 'teal'}>{icon}</IconBadge>
      <h3 className={`font-poppins font-semibold mb-2 ${dark ? 'text-white' : 'text-rd-dark'}`}>{title}</h3>
      <p className={`font-dm-sans text-sm leading-relaxed ${dark ? 'text-white/60' : 'text-gray-500'}`}>{desc}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const inventoryFeatures = [
  { title: 'Get Low Stock Alerts', desc: 'Get notified instantly when any repair part, product, or accessory falls below your desired quantity so you can reorder in time.', icon: icons.bell },
  { title: 'Create Purchase Orders', desc: 'Generate purchase orders within seconds and sync them with QuickBooks or Xero to save time and prevent errors.', icon: icons.document },
  { title: 'Track Inventory', desc: 'Track your inventory and stay organized with real-time tracking for parts like shutter units, sensors, lenses, LCDs, and more.', icon: icons.cube },
  { title: 'Inventory Transfer Between Stores', desc: 'If you run multiple repair shops, You can easily transfer stock between locations and keep everything synced across the board.', icon: icons.swap },
];

const repairFeatures = [
  { title: 'Repair Job Tracking', desc: 'Create repair tickets for every camera repair job. Include camera info, customer contact details, link required parts, and assign jobs to technicians.', icon: icons.ticket },
  { title: "Get Customers' Signatures", desc: 'Get signatures from your customers for estimate approvals, and before and after repairs right from within your POS.', icon: icons.signature },
  { title: 'Notify Your Customers', desc: "Automatically send real-time updates and notifications to your customers through email or text whenever there's a status change on their repair ticket.", icon: icons.bell },
  { title: 'Collect Reviews', desc: 'Automatically send a review link after completing a repair job to customers so they can rate your repair shop on Google.', icon: icons.star },
];

const employeeFeatures = [
  { title: 'Track Work Hours', desc: 'Let employees clock in and out directly from the POS, then easily export their hours on payday and process their payroll accordingly.', icon: icons.clock },
  { title: 'Track & Process Commissions', desc: 'Track commissions on repairs and product sales to reward top-performing employees fairly.', icon: icons.coin },
  { title: 'Role Based Access', desc: 'Set permission levels based on roles so each technician or employee can only see what they need.', icon: icons.lock },
  { title: 'Performance Monitoring', desc: "Get real-time insights into who's completing the most repairs, bring in sales, upselling services and more with RepairDesk, leading software for camera repair shops.", icon: icons.chart },
];

const paymentFeatures = [
  { title: 'Multiple Payment Methods', desc: "Accept credit/debit cards, cash, or digital wallet payments such as PayPal, Square, Stripe, Tyro, and Paymentsense based on your customers' convenience.", icon: icons.wallet },
  { title: 'Custom Tax Settings', desc: 'Set and apply tax rules by region, product, or services to simplify compliance and accounting.', icon: icons.percent },
  { title: 'Automate Payment Alerts', desc: 'Send automated alerts to your customers on unpaid or partially paid invoices so you never miss any payment.', icon: icons.alert },
  { title: 'PCI Compliant', desc: 'Top-notch security is guaranteed by PCI compliance. Get end-to-end encryption for each transaction.', icon: icons.shieldCheck },
];

const stats = [
  { value: '3,000+', label: 'Happy Customers' },
  { value: '$50M+', label: 'Payment Processed' },
  { value: '120+', label: 'Countries' },
  { value: '100+', label: 'Dedicated Employees' },
];

const faqs = [
  {
    q: 'Can I keep track of the same camera parts but from different suppliers?',
    a: 'Yes. You can easily track the parts from the purchase order history while using RepairDesk.',
  },
  {
    q: 'Can I create an estimate and provide a quote to the customer using camera repair shop software?',
    a: (
      <>
        Yes. It is possible. RepairDesk allows you to create an estimate beforehand and send it to your customers for approval. Moreover, our{' '}
        <Link to="/features/customer-facing-display" className="text-rd-teal font-semibold hover:underline">
          customer-facing display
        </Link>{' '}
        takes digital signatures of the customers. This reduces the chances of disputes over payments and eliminates miscommunication.
      </>
    ),
  },
  {
    q: 'Can I track the progress of the camera repairs after assigning it to the technician?',
    a: 'Yes, it is completely possible. When you assign a repair ticket to the technician, you can always check its status and send your technician reminders using RepairDesk.',
  },
  {
    q: 'How can I track shutters, lenses, and batteries in my camera repair store?',
    a: 'You can search for the parts either by SKUs in the inventory or by the product name, using the RepairDesk camera inventory management software.',
  },
  {
    q: 'What is the best camera repair shop management software?',
    a: 'The best camera repair shop management software is the one that automates your repair tickets, inventory, and billing, all while properly updating your customers. Not only that, but it also offers integrations so you can efficiently operate your store and design your own workflow. RepairDesk checks all the boxes in this case.',
  },
  {
    q: 'How can I track the sales made by employees in my camera repair store?',
    a: 'RepairDesk creates a specific profile for each employee, so each sale made by them during their shift hours will be tracked through their profile. You can also view their progress in the employee reports available in the reports section of RepairDesk.',
  },
  {
    q: 'Does RepairDesk support diagnostic checklists for camera repairs?',
    a: "Yes. It does. In RepairDesk's camera shop software, whenever you create a repair ticket, there is a checklist where you can select the condition of the camera parts. Not only that, but you can also add pre- and post-repair images to improve the quality of your services and avoid any issues with customers.",
  },
];

function FaqItem({ q, a, index }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="border-b border-gray-200 py-5">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 text-left">
        <span className="font-poppins font-semibold text-rd-dark text-base md:text-lg">{q}</span>
        <span className={`shrink-0 w-8 h-8 rounded-full border border-rd-teal/40 flex items-center justify-center transition-transform ${open ? 'rotate-45' : ''}`}>
          <svg className="w-4 h-4 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mt-3 max-w-3xl">{a}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function CameraRepairPage() {
  return (
    <PageLayout>
      {/* HERO — dark room / aperture theme */}
      <section className="bg-rd-dark text-white pt-20 pb-28 px-6 relative overflow-hidden">
        <ApertureGraphic className="absolute -right-16 -top-10 w-[420px] h-[420px] text-rd-teal hidden md:block" />
        <ApertureGraphic className="absolute -left-24 bottom-[-140px] w-72 h-72 text-rd-lime opacity-60 hidden lg:block" />
        <div className="container-main relative z-10">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>{icons.lens}</svg>
              Camera Repair Shop Software
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
              Effortlessly Manage Your Camera Repair Shop
            </h1>
            <p className="text-white/80 text-lg font-dm-sans leading-relaxed mb-4">
              Stay on top of every job — track repairs, order parts and accessories from your desired vendors, and manage your employees.
            </p>
            <p className="text-white/80 text-lg font-dm-sans leading-relaxed mb-4">
              Create top-notch repair estimates and receipts for a full-fledged invoice solution. Impressing your customers is that easy!
            </p>
            <p className="text-white/80 text-lg font-dm-sans leading-relaxed mb-8">
              Don't just record, chart your repair shop's growth with detailed breakdowns. Integrate with <span className="text-rd-lime font-semibold">PayPal</span>, and <span className="text-rd-lime font-semibold">RepairDesk</span> payments for smooth financial operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-8 py-3.5">Request a Demo</Link>
              <a href="https://app.repairdesk.co/register" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Start Free Trial</a>
            </div>
          </div>
        </div>
      </section>

      {/* INVENTORY — viewfinder-bracketed cards on cream */}
      <section className="bg-rd-cream py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="max-w-2xl mb-12">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Track Your Stock</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Smart Inventory Management for Your Business</h2>
            <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">
              With our smart inventory management solution, your vision will always be 20/20. It allows you to track every lens, battery, memory card, and tiny screw in real time. Whether you sell gear or just fix it, you'll always know what's in stock, what's running low, and when it's time to reorder repair parts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inventoryFeatures.map((f) => (
              <FocusCard key={f.title} title={f.title} desc={f.desc} icon={f.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* REPAIR MANAGEMENT — dark, film-strip framed */}
      <section className="bg-rd-dark text-white py-16 md:py-24 px-6 relative overflow-hidden">
        <div className="container-main relative z-10">
          <FilmStrip className="mb-12 overflow-hidden" />
          <div className="max-w-2xl mb-12">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-3">Repair Management</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-5">Ace All Repair Jobs Effortlessly!</h2>
            <p className="text-white/70 font-dm-sans text-lg leading-relaxed">
              Say goodbye to paperwork and spreadsheets. RepairDesk helps you manage every step of the repair process transparently—from intake to delivery. Whether it's creating and assigning tickets, or collecting order notes and images, we're with you every step of the way.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairFeatures.map((f) => (
              <FocusCard key={f.title} title={f.title} desc={f.desc} icon={f.icon} dark />
            ))}
          </div>
          <FilmStrip className="mt-12 overflow-hidden" />
        </div>
      </section>

      {/* EMPLOYEE MANAGEMENT — dial-style row on white */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Employee Management</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Manage Your Workforce Smoothly</h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">
                Monitor your employees' performance and improve accountability. Track work hours, calculate commissions, and organize your technicians with role-based access to fully control your shop's performance.
              </p>
            </div>
            <div className="relative">
              {/* dial connector line */}
              <div className="hidden sm:block absolute top-[22px] left-[10%] right-[10%] h-px bg-rd-teal/20" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 relative">
                {employeeFeatures.map((f) => (
                  <div key={f.title} className="flex flex-col items-center text-center">
                    <div className="w-11 h-11 rounded-full bg-white border-2 border-rd-teal flex items-center justify-center mb-4 relative z-10">
                      <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>{f.icon}</svg>
                    </div>
                    <h3 className="font-poppins font-semibold text-rd-dark text-sm mb-1.5">{f.title}</h3>
                    <p className="text-gray-500 font-dm-sans text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLLECT PAYMENTS — cream with corner-bracketed cards */}
      <section className="bg-rd-cream py-16 md:py-24 px-6 relative overflow-hidden">
        <ApertureGraphic className="absolute -right-20 -bottom-20 w-72 h-72 text-rd-teal opacity-40 hidden md:block" />
        <div className="container-main relative z-10">
          <div className="max-w-2xl mb-12">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Collect Payments</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-5">Get Paid Faster with Multiple Payment Integrations</h2>
            <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">
              Use our multiple payment integrations to get paid immediately. Send digital bills via email and SMS. Pre-determine the tax classes and let customers pay with their desired payment method.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paymentFeatures.map((f) => (
              <FocusCard key={f.title} title={f.title} desc={f.desc} icon={f.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY / STATS */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="bg-rd-dark rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <ApertureGraphic className="absolute -right-10 -top-10 w-64 h-64 text-rd-lime opacity-20" />
            <div className="relative z-10 max-w-2xl mb-10">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-3">You're in Great Company</span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-white mb-4">You're in Great Company</h2>
              <p className="text-white/70 font-dm-sans leading-relaxed">
                When you join RepairDesk, you don't just get a POS system built for camera repair shops, but a global community of repair business owners who help you grow and understand your business better.
              </p>
            </div>
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-poppins font-bold text-3xl md:text-4xl text-rd-lime">{s.value}</p>
                  <p className="text-white/60 font-dm-sans text-xs md:text-sm mt-1">{s.label}</p>
                </div>
              ))}
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

      {/* FINAL CTA */}
      <section className="bg-rd-teal text-white py-16 px-6 relative overflow-hidden">
        <ApertureGraphic className="absolute -left-16 -top-16 w-56 h-56 text-white opacity-10 hidden md:block" />
        <div className="container-main text-center max-w-3xl relative z-10">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-5">Power Up Your Camera Repair Shop with the #1 POS!</h2>
          <p className="text-white/80 font-dm-sans leading-relaxed mb-8">
            RepairDesk is a cloud-based point-of-sale software designed specifically for small and medium-sized repair shops, including computer, small engine, power tools, watch & jewelry, shoe, e-bike, bicycle, wireless, camera, heavy-duty, and cell phone repair businesses. The software keeps track of inventory levels and notifies the business when a required part is running low and needs to be replenished, so they can order parts.
          </p>
          <a href="https://app.repairdesk.co/register" className="inline-block bg-white text-rd-dark px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-rd-cream transition-colors">Start Free Trial</a>
        </div>
      </section>
    </PageLayout>
  );
}
