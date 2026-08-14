import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ---------- Icons ---------- */
const IconBars = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <path d="M4 18v-3" /><path d="M9 18v-6" /><path d="M14 18v-9" /><path d="M19 18V6" />
  </svg>
);
const IconCart = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" />
    <path d="M2.5 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20 7H6" />
  </svg>
);
const IconSwap = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8h13l-3.5-3.5" /><path d="M20 16H7l3.5 3.5" />
  </svg>
);
const IconClipboard = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
    <path d="M9 11h6" /><path d="M9 15h6" /><path d="M9 19h3" />
  </svg>
);
const IconSignature = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17c2-1 3-3 4-6s2-6 4-4 0 7 2 8 3-2 5-3" /><path d="M3 21h18" />
  </svg>
);
const IconPhoneCheck = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="2" width="10" height="20" rx="2" /><path d="M9.5 12.5l1.8 1.8L14.5 10" />
  </svg>
);
const IconBell = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 3 1 5 2 6H4c1-1 2-3 2-6" /><path d="M10 20a2 2 0 0 0 4 0" />
  </svg>
);
const IconStar = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.1 6.6 7.1.9-5.2 5 1.4 7-6.4-3.6L5.6 21l1.4-7-5.2-5 7.1-.9L12 2z" />
  </svg>
);
const IconSimCard = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3h9l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
    <path d="M9 10h6M9 14h6M9 18h3" />
  </svg>
);
const IconUserSearch = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="8" r="3.2" /><path d="M4 20c0-3.3 2.7-5.5 6-5.5" />
    <circle cx="17" cy="16" r="3" /><path d="M19.3 18.3L21.5 20.5" />
  </svg>
);
const IconDollar = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" /><path d="M17 6.5c0-1.9-2.2-3-5-3s-5 1.2-5 3 2.2 2.5 5 3 5 1.4 5 3.3-2.2 3.2-5 3.2-5-1.1-5-3" />
  </svg>
);
const IconPercent = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="7" r="2.5" /><circle cx="17" cy="17" r="2.5" /><path d="M18 6L6 18" />
  </svg>
);
const IconClock = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
  </svg>
);
const IconChartUp = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19V5" /><path d="M4 19h16" /><path d="M7 15l3.5-4 3 2L18 8" />
  </svg>
);
const IconShield = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" /><path d="M9.5 12.2l1.8 1.8L15 10" />
  </svg>
);
const IconGauge = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18a8 8 0 1 1 16 0" /><path d="M12 18l3.5-5.5" /><path d="M4 18h16" />
  </svg>
);
const IconLock = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);
const IconMail = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
  </svg>
);
const IconTag = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.5 12.5L12 21 3 12l8.5-8.5H20.5v8.5z" /><circle cx="15.5" cy="8.5" r="1.5" />
  </svg>
);
const IconRepeat = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h13l-3-3" /><path d="M20 17H7l3 3" />
  </svg>
);
const IconMegaphone = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11v2a2 2 0 0 0 2 2h1l3 4V7l-3 4H5a2 2 0 0 0-2 2z" /><path d="M14 8a6 6 0 0 1 0 8" /><path d="M17 5a10 10 0 0 1 0 14" />
  </svg>
);
const IconCheck = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7" />
  </svg>
);
const IconCard = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2.5" y="5" width="19" height="14" rx="2" /><path d="M2.5 9.5h19" /><path d="M6 15h4" />
  </svg>
);

/* ---------- Data ---------- */
const inventoryFeatures = [
  { icon: IconBell, title: 'Low Stock Alerts', desc: 'Track what’s on hand and receive alerts when your inventory is low so you can replenish stock.' },
  { icon: IconCart, title: 'Purchase Management', desc: 'Create POs in seconds and quickly send them to QuickBooks or Xero to keep everything in sync. Automatically update inventory as items are received and eliminate double entry by directly passing purchase information into your accounting software.' },
  { icon: IconSwap, title: 'Transfer Inventory b/w Stores', desc: 'Do you own more than one wireless store? With RepairDesk, you can easily sync and transfer inventory across all your locations, making inventory management tasks a breeze!' },
  { icon: IconClipboard, title: 'Inventory Count', desc: 'Take the guesswork out of inventory management and use inventory counts that help you perform physical stock takes to ensure that your inventory is up to date.' },
];

const repairFeatures = [
  { icon: IconSignature, title: 'Collect Digital Signatures', desc: 'Minimize risks by obtaining digital signatures from your clients on payments before or after the repair is completed to reduce payment disputes.' },
  { icon: IconPhoneCheck, title: 'Self Check-In', desc: 'Save time by letting customers enter the information you need before they come to the checkout counter.', link: '/features/self-check-in' },
  { icon: IconBell, title: 'Email & SMS Notifications', desc: 'Keep customers informed at every step. Instantly send job updates via SMS and email whenever there is a change in ticket status.', link: '/features/job-notifications' },
  { icon: IconStar, title: 'Get More Reviews', desc: 'Automatically trigger an SMS with a review link after 24 hours of completing a repair job and send it to customers to rate your repair shop on Google.', link: '/features/google-reviews' },
];

const billSteps = [
  { icon: IconSimCard, title: 'Select Your Provider', desc: 'Enable bill payments, choose one or all providers such as ePay, QPay, or VidaPay, select network/carrier and charge 911 tax for bill payments.' },
  { icon: IconUserSearch, title: 'Add Customer Details', desc: 'Search an existing customer by name, email address, or phone number. For a new customer, you can quickly add their details.' },
  { icon: IconDollar, title: 'Add Custom Amount', desc: 'Add custom amount for networks like Verizon or H2O Wireless, click checkout and print thermal receipt.' },
  { icon: IconPercent, title: 'Select Air-Time Margin', desc: 'Enter Air-Time Margin against each product and bulk import and exports.' },
];

const carriers = ['Cricket', 'Boost Mobile', 'MetroPCS', 'Verizon', 'H2O Wireless'];

const employeeFeatures = [
  { icon: IconClock, title: 'Time Tracking', desc: 'Track employee working hours with our easy to use clock in/out feature and make payday painless by quickly exporting hours.', link: '/features/clock-in-out' },
  { icon: IconChartUp, title: 'Performance Monitoring', desc: 'Measure employee productivity with real-time performance insights. Track sales, repairs completed, and process payrolls.' },
  { icon: IconShield, title: 'Role Based Access', desc: 'Control what each employee can see and do with customizable access to just the tools and data they need.', link: '/features/employee-management' },
  { icon: IconGauge, title: 'Track Commissions', desc: 'Keep tabs on repairs and device sale commissions produced by each employee.' },
];

const efficiencyFeatures = [
  { icon: IconChartUp, title: 'Reporting', desc: 'Stay on top of your shop operations and view key operational metrics including sales, performance, orders, and payment summaries along with your most profitable line items.', link: '/features/reporting' },
  { icon: IconClock, title: 'Appointment Scheduling', desc: 'Grab every opportunity by turning website visitors into quote requests and booked appointments. Provide accurate repair quotes around the clock.', link: '/features/appointments-pro' },
  { icon: IconTag, title: 'Sell Memberships', desc: 'Sell membership with a monthly subscription to increase recurring revenue and unlock a steady income stream.' },
  { icon: IconStar, title: 'Loyalty Program', desc: 'Use the RepairDesk loyalty program to cultivate stronger relationships, grow repeat business, and increase lifetime value.', link: '/features/loyalty-program' },
  { icon: IconMegaphone, title: 'Automated Campaigns', desc: 'Reach the right customers automatically with campaigns triggered by their activity in your store.', link: '/features/marketing' },
];

const paymentFeatures = [
  { icon: IconGauge, title: 'Fast & Simple', desc: 'Accept all cards at the same rate and receive next-day settlements. There are no lock-in contracts or startup, ACH, or other fees. Fees are confusing, and we dislike them as much as you do.' },
  { icon: IconCard, title: 'In-Person Payments', desc: 'Use a Wireless terminal to accept chip cards, Apple Pay, and Google Pay.' },
  { icon: IconMail, title: 'Email Invoice with a Payment Link', desc: 'Email invoices to customers, enabling them to e-sign and pay from any location.' },
  { icon: IconLock, title: 'PCI Compliant', desc: 'Top-notch security is guaranteed by PCI compliance, enhanced by end-to-end encryption for every transaction.' },
];

const trustStats = [
  { stat: '8,000+', label: 'Happy Customers' },
  { stat: '$300M+', label: 'Payment Processed' },
  { stat: '40+', label: 'Countries' },
  { stat: '100+', label: 'Dedicated Employees' },
];

/* ---------- Small building blocks ---------- */
const SignalRings = () => (
  <svg className="absolute -right-10 -top-10 w-72 h-72 opacity-20 pointer-events-none" viewBox="0 0 200 200" fill="none">
    <circle cx="100" cy="100" r="30" stroke="#D4F479" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="55" stroke="#D4F479" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="80" stroke="#D4F479" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="4" fill="#D4F479" />
  </svg>
);

const EyebrowLabel = ({ children, tone = 'teal' }) => (
  <span className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 ${
    tone === 'lime' ? 'bg-rd-lime text-rd-dark' : tone === 'white' ? 'bg-white/10 text-rd-lime' : 'bg-rd-teal/10 text-rd-teal'
  }`}>
    <IconBars className="w-3.5 h-3.5" />
    {children}
  </span>
);

export default function WirelessRepairPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <PageLayout>
      {/* HERO */}
      <section className="relative bg-rd-dark text-white overflow-hidden py-20 md:py-28 px-6">
        <SignalRings />
        <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="container-main relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
              Wireless Retail &amp; Repair
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              POS Built for Wireless Retail and Repair Shop
            </h1>
            <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8 max-w-2xl">
              Manage repairs, activations, buybacks, accessories, and device sales, with built-in support for prepaid refills through VidaPay and the ePay Portal, all on one easy-to-use platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-8 py-3.5">Request a Demo</Link>
              <a href="https://app.repairdesk.co/register" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Start Free Trial</a>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-2 text-white/60 text-sm font-dm-sans uppercase tracking-wide">
              <IconBars className="w-4 h-4 text-rd-lime" />
              Powered by a Suite of 40+ Integrated Partners
            </span>
            <div className="flex-1 h-px bg-white/10 min-w-[60px]" />
          </div>
        </div>
      </section>

      {/* INVENTORY */}
      <section className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <EyebrowLabel>Keep Track of Inventory</EyebrowLabel>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">
                Inventory Management with Accuracy
              </h2>
              <p className="text-gray-500 font-dm-sans text-lg leading-relaxed">
                Don&rsquo;t let a sale slip away due to low stock! Offer custom-tailored extended warranties, monitor accessories, devices, repair parts, and buybacks, and receive alerts whenever an item runs low on stock.
              </p>
            </div>
            <p className="text-rd-dark font-poppins font-semibold max-w-xs md:text-right">
              Whether you prefer selling in-store or online, RepairDesk provides the tools to scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {inventoryFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-rd-teal/10 flex items-center justify-center text-rd-teal mb-5 group-hover:bg-rd-teal group-hover:text-white transition-colors">
                  <f.icon className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-poppins font-bold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REPAIR JOBS */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main">
          <EyebrowLabel>Track Repair Jobs</EyebrowLabel>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Hassle-Free Repair Management
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-4 max-w-3xl">
            Reduce paperwork at your wireless repair shop and effortlessly manage your customers&rsquo; devices and service history. Link parts to tickets, print device tags, add diagnostic or private notes, and easily attach photos and files to tickets.
          </p>
          <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-10 max-w-3xl">
            You can also transfer repair jobs between stores and share updates with customers via text, email or by setting up a repair tracker on the website.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 rounded-2xl overflow-hidden">
            {repairFeatures.map((f, i) => (
              <div key={f.title} className="bg-white p-7 flex gap-5">
                <div className="shrink-0 w-11 h-11 rounded-full border-2 border-rd-teal flex items-center justify-center text-rd-teal font-poppins font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-poppins font-bold text-rd-dark mb-1.5 flex items-center gap-2">
                    <f.icon className="w-5 h-5 text-rd-teal" />
                    {f.title}
                  </h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                  {f.link && (
                    <Link to={f.link} className="text-rd-teal font-poppins font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all mt-3">
                      Learn More
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BILL PAYMENTS */}
      <section className="bg-rd-dark text-white py-16 md:py-20 px-6 relative overflow-hidden">
        <SignalRings />
        <div className="container-main relative z-10">
          <EyebrowLabel tone="white">Process Bill Payments</EyebrowLabel>
          <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl max-w-lg">
              Accept Prepaid Bills At Your Wireless Store
            </h2>
            <p className="text-white/70 font-dm-sans text-lg leading-relaxed max-w-xl">
              Top-up mobile phones of leading providers with the RepairDesk Bill Payments module. Accept payments for {carriers.slice(0, 3).join(', ')}, and more&mdash;ensuring you never lose a sale due to platform limitations. Expand your network carrier options and instantly recharge multiple networks in just a few clicks!
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {carriers.map((c) => (
              <span key={c} className="text-xs font-poppins font-semibold text-white/80 bg-white/10 border border-white/10 rounded-full px-4 py-1.5">
                {c}
              </span>
            ))}
          </div>

          {/* interactive signal-flow stepper */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
            {billSteps.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-2 rounded-full px-3 py-2.5 text-left transition-colors ${
                  activeStep === i ? 'bg-rd-lime text-rd-dark' : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-poppins font-bold shrink-0 ${activeStep === i ? 'bg-rd-dark text-rd-lime' : 'bg-white/15'}`}>{i + 1}</span>
                <span className="font-poppins font-semibold text-xs md:text-sm leading-tight">{s.title}</span>
              </button>
            ))}
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex items-start gap-5 mt-4">
            <div className="w-12 h-12 rounded-xl bg-rd-lime text-rd-dark flex items-center justify-center shrink-0">
              {(() => { const Icon = billSteps[activeStep].icon; return <Icon className="w-6 h-6" />; })()}
            </div>
            <div>
              <h3 className="font-poppins font-bold text-lg mb-1.5">{billSteps[activeStep].title}</h3>
              <p className="text-white/70 font-dm-sans leading-relaxed">{billSteps[activeStep].desc}</p>
            </div>
          </div>

          {/* Renewal alerts */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-[0.45fr_0.55fr] gap-8 items-center bg-[#0C3C3E] border border-white/10 rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-rd-lime/20 text-rd-lime flex items-center justify-center shrink-0">
                <IconRepeat className="w-7 h-7" />
              </div>
              <h3 className="font-poppins font-bold text-xl md:text-2xl">
                Send Automated Plan Renewal Reminders to Customers
              </h3>
            </div>
            <p className="text-white/70 font-dm-sans leading-relaxed">
              Ensure customers never miss a renewal! Set due dates for each bill payment and send automated reminders via email and SMS before the prepaid plan expires. Keep your customers informed and generate recurring revenue effortlessly.
            </p>
          </div>
        </div>
      </section>

      {/* EMPLOYEES */}
      <section className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main">
          <EyebrowLabel>Manage Employees</EyebrowLabel>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Set Your Team and Business Up For Success
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-10 max-w-3xl">
            Keep your employees and technicians organized with role-based access and performance tracking. Track work hours and improve accountability with detailed reports.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {employeeFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 border-t-4 border-rd-teal">
                <f.icon className="w-7 h-7 text-rd-teal mb-4" />
                <h3 className="font-poppins font-bold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-3">{f.desc}</p>
                {f.link && (
                  <Link to={f.link} className="text-rd-teal font-poppins font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EFFICIENCY */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main">
          <EyebrowLabel>Increase Efficiency</EyebrowLabel>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            The Ultimate Solution to Elevate Your Business
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-12 max-w-3xl">
            Automate tedious tasks, speed up operations, and boost your revenue!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {efficiencyFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl p-6 bg-rd-cream flex flex-col">
                <div className="w-10 h-10 rounded-full bg-rd-dark text-rd-lime flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-poppins font-bold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-4 flex-1">{f.desc}</p>
                {f.link && (
                  <Link to={f.link} className="text-rd-teal font-poppins font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIFIED POS & PAYMENTS */}
      <section className="bg-[#0C3C3E] text-white py-16 md:py-20 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_0.5fr] gap-12 items-center">
            <div>
              <EyebrowLabel tone="lime">Unified POS &amp; Payments</EyebrowLabel>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-5">
                Payments Built Into Your POS
              </h2>
              <p className="text-white/70 font-dm-sans leading-relaxed">
                RepairDesk provides a unified platform with Payments seamlessly integrated into your POS. This automates your payment process, reducing errors and quicker checkouts without manual entries. With RepairDesk Integrated payment processing, you get:
              </p>
              <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5 inline-block mt-8">Start Free Trial</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {paymentFeatures.map((f) => (
                <div key={f.title} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <f.icon className="w-6 h-6 text-rd-lime mb-3" />
                  <h3 className="font-poppins font-semibold mb-1.5 text-sm">{f.title}</h3>
                  <p className="text-white/60 font-dm-sans text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / GREAT COMPANY */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main text-center">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-3">
            You&rsquo;re in Great Company
          </h2>
          <p className="text-gray-500 font-dm-sans max-w-2xl mx-auto mb-12">
            When you join RepairDesk, you don&rsquo;t just get software. You join a community of wireless repair shop owners around the world who help you learn and grow your business.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {trustStats.map((s) => (
              <div key={s.label} className="bg-[#FAF9E3] rounded-2xl py-8 px-4">
                <p className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-1">{s.stat}</p>
                <p className="text-gray-600 font-dm-sans text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-rd-teal text-white py-16 md:py-20 px-6 overflow-hidden">
        <SignalRings />
        <div className="container-main text-center relative z-10">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-8 max-w-2xl mx-auto">
            Power Up Your Wireless Retail &amp; Repair Store with the #1 POS!
          </h2>
          <a href="https://app.repairdesk.co/register" className="btn-white px-10 py-3.5 inline-block">Start Free Trial</a>
        </div>
      </section>
    </PageLayout>
  );
}
