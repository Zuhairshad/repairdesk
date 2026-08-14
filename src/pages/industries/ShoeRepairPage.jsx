import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const mailInSteps = [
  {
    title: "Pre-& Post Repair Checklists & Images",
    desc: "Take photos when shoes arrive, and have your staff take pictures and fill out a pre-repair checklist. Once the restoration/repair is complete, finish the post-repair checklist and take pictures after the repair to protect your shop against disputes.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 7l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Repair Tracker",
    desc: "Provide customers with peace of mind by embedding the RepairHub Repair Tracker on your website. Customers can enter their ticket ID and last name to check the status of their shoes, bags, or leather items online.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    title: "Repair Jobs Follow-Up",
    desc: "Easily re-engage customers with automated follow-up emails after a repair, helping you stay connected and drive repeat visits.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Workflow Management",
    desc: "Implement custom workflows that prompt your staff and cobblers to the next task and ensure everyone follows the right operating procedures every time. You can tailor workflows for various job types, such as In-Store, Warranty, or Mail-in.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const inventoryCards = [
  {
    title: "Low Stock Alerts",
    desc: "Always get notified when heels, soles or dyes fall below your set threshold.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      </svg>
    ),
  },
  {
    title: "Track Every Order",
    desc: "Track every request from order to arrival—whether it's medicated insoles, exotic leather, or rare shoe parts.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0l-2 7H6l-2-7m16 0H4" />
      </svg>
    ),
  },
  {
    title: "Manage Purchase Orders",
    desc: "Save supplier details, manage purchase orders, and reorder stock directly from your dashboard. So, there is no need of spreadsheets.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2h4" />
      </svg>
    ),
  },
  {
    title: "Transfer Inventory between Different Locations",
    desc: "Transfer inventory from one to another store with our boots repair shop software. To keep everything in sync.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4M16 17H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

const ticketRows = [
  {
    title: "Digital Signatures from Customers",
    desc: "Collect digital signatures before and after the repair from your customers. It prevents disputes and keep clear records of every repair job.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l4-1 10-10a2 2 0 10-3-3L4 13l-1 4zM15 6l3 3" />
      </svg>
    ),
  },
  {
    title: "Assign Jobs to Cobblers",
    desc: "Assign shoe repairs to cobblers, and let them log time spent on each job—so you can track labor, and charge fairly.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Notify Your Customers",
    desc: "Send real-time updates via SMS and email to customers when the job is completed or if there is a change in the ticket status–reduce no shows, build trust, and display professionalism.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
  },
  {
    title: "Get More 5-Star Reviews",
    desc: "Automatically send a review request after each job to boost your online reputation using our shoe store POS system.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const employeeCards = [
  {
    title: "Performance Monitoring",
    desc: "Measure employee productivity with real-time performance insights. Track number of repairs completed and sales generated.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm6 0V9a2 2 0 00-2-2h-2a2 2 0 00-2 2v10m10 0v-4a2 2 0 00-2-2h-2a2 2 0 00-2 2v4" />
      </svg>
    ),
  },
  {
    title: "Clock In & Clock Out",
    desc: "Track employee hours with a simple clock in/out feature and export timesheets. Easily calculate commissions and process payroll, ensuring everyone gets a fair wage.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Role-Based Access",
    desc: "Limit access based on roles. Let your cobblers and staff focus only on the tools they need—nothing more, nothing less.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Reporting",
    desc: "Stay on top of your leather boots repair shop operations. View key operational metrics; most profitable line items, and payment summaries.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9 9 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
  },
];

const paymentCards = [
  {
    title: "Accept Card Payments",
    desc: "Allow your customers to pay using their debit/credit cards. Accept all cards at the same rate, without charging any additional fees, and receive next-day settlements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h5M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
      </svg>
    ),
  },
  {
    title: "In-person Payments",
    desc: "Accept chip cards, Apple Pay, and Google Pay, using a wireless terminal.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Payment Integrations",
    desc: "Connect with popular providers like Square, Stripe, Paypal, RepairHub Payments. Choose what fits your workflow.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 10-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    badges: ["Square", "Stripe", "Paypal", "RepairHub Payments"],
  },
  {
    title: "PCI-Compliant",
    desc: "All your payments are protected with PCI compliance and end-to-end encryption",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 10-8 0v4h8z" />
      </svg>
    ),
  },
];

const trustBadges = [
  {
    label: "Happy Customers",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Payment Processed",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2" />
        <circle cx="12" cy="12" r="9" strokeWidth={2} />
      </svg>
    ),
  },
  {
    label: "Countries",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Dedicated Employees",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m5-4.13a4 4 0 100-8 4 4 0 000 8zm6 4a4 4 0 10-8 0" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Does RepairHub also Manage Mail-in Shoe Repairs?",
    a: "Yes. RepairHub can manage both physical storefronts and mail-in repair service providers. One can easily manage online inquiries, shipping, and tracking.",
  },
  {
    q: "Which One is the Best Shoe Repair Shop Software and Why?",
    a: "RepairHub is by far, the best shoe repair shop software you can find today. It offers all the inventory, mail-in repair, repair ticket, and employee management features.",
  },
  {
    q: "Does Shoe Repair Software Also Allow Online Repair Requests?",
    a: "Yes. Customers can easily submit repair requests using the inquiry submission feature. So, you can respond faster, and convert more customers.",
  },
  {
    q: "Can I Manage Leather Goods and Bags Repair Jobs with RepairHub?",
    a: "Yes. You can manage leather goods, shoes, and bags repair jobs as RepairHub offers all shoe repair store management features. You can manage restoration, polishing, and patchwork, etc., for all types of bags, shoes and leather goods.",
  },
  {
    q: "What Payment Integrations Does RepairHub Offer?",
    a: "RepairHub allows you to connect with Square, Stripe, PayPal and RepairHub Payments effortlessly. So, you can choose what fits your workflow.",
  },
  {
    q: "Can Shoe Repair Software Manage Walking Aids Repairs?",
    a: "Yes. You can manage walking aids with RepairHub. It tracks, organizes and maintains walking aids such as shoe tips, and orthopedic supports.",
  },
  {
    q: "Is RepairHub also Suitable for Small Shoe Repair Shops?",
    a: "Yes. Our POS Software is highly suitable for all types of shoe repair businesses. It helps manage small, independent, and multi-location shoe repair shops by streamlining daily repair operations.",
  },
  {
    q: "How Does RepairHub Help You Manage Shoe Repair Parts?",
    a: "It helps you manage shoe repair parts like soles, heels, or leather pieces by sending you low stock alerts. In addition, you can also manage and keep record of your suppliers and easily create purchase orders.",
  },
  {
    q: "Can RepairHub Manage Different Footwear Repair Types?",
    a: "Yes. Using RepairHub, you can manage various footwear repair services including leather boots, sneakers, and sandals repair. Along with that, you can also manage custom shoe restoration jobs.",
  },
];

export default function ShoeRepairPage() {
  return (
    <PageLayout>
      {/* HERO */}
      <section className="bg-rd-dark text-white py-20 px-6 overflow-hidden relative">
        <div className="container-main grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center relative z-10">
          <div>
            <span className="inline-block text-[11px] font-poppins font-bold uppercase tracking-widest text-rd-lime mb-5">
              Leather Goods & Shoe Repair Shop Software
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-[2.75rem] leading-tight mb-6">
              Say hello to modern shop management software designed to streamline your shoe, luxury handbag, and leather goods repair store operations.
            </h1>
            <p className="text-white/75 font-dm-sans text-lg leading-relaxed mb-4">
              Manage appointments, quotes, work orders, invoicing, inventory, and payments all from one single platform.
            </p>
            <p className="text-white/60 font-dm-sans text-base leading-relaxed mb-8">
              Perfect for repair shops with physical storefronts and mail-in service providers, offering flexibility for every type of repair store.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-8 py-3.5">Request a Demo</Link>
              <a href="https://app.repairhub.co/register" className="border border-white/30 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Free Trial</a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#FAF9E3] text-rd-dark rounded-2xl p-6 shadow-2xl rotate-2 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="font-poppins font-bold text-sm">Pre-Repair Checklist</span>
                <span className="text-[10px] font-dm-sans bg-rd-teal text-white px-2 py-0.5 rounded-full">Ticket #4821</span>
              </div>
              <ul className="space-y-3 font-dm-sans text-sm">
                {["Photos taken on arrival", "Condition notes recorded", "Customer signature collected", "Assigned to cobbler"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-rd-teal flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-rd-teal text-white rounded-xl px-5 py-3 shadow-xl -rotate-3 font-poppins font-semibold text-sm hidden sm:block">
              Return label generated ✓
            </div>
          </div>
        </div>
      </section>

      {/* MAIL-IN REPAIRS — vertical timeline */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="max-w-2xl mb-14">
            <span className="text-rd-teal font-poppins font-bold text-xs uppercase tracking-widest">Expand Your Reach</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3 mb-5">Mail‑In Repairs Made Simple with RepairHub</h2>
            <p className="text-gray-600 font-dm-sans leading-relaxed mb-3">
              Embed a branded request form on your website so customers can quickly take a picture of their shoes, bags, or leather items and send it for assessment. All these requests automatically flow into RepairHub, keeping every detail, from images to service notes, organized in one place.
            </p>
            <p className="text-gray-600 font-dm-sans leading-relaxed mb-3">
              Use our ShipStation integration to generate and print shipping labels. This enables customers to send in their items easily. Keep track of every job, such as restoring, repairing, and reviving shoes, bags, and leather goods, with accuracy.
            </p>
            <p className="text-gray-600 font-dm-sans leading-relaxed">
              Once the repair/restoration is complete, you can generate a return label and use integrated payments to send an invoice with a secure payment link to finalize the process.
            </p>
          </div>

          <div className="relative max-w-3xl">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-10">
              {mailInSteps.map((step, i) => (
                <div key={step.title} className="relative flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-rd-dark text-rd-lime flex items-center justify-center shrink-0 relative z-10">
                    {step.icon}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-1.5">{step.title}</h3>
                    <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INVENTORY — 2x2 cream grid */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <span className="text-rd-teal font-poppins font-bold text-xs uppercase tracking-widest">Inventory That Works for You</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3 mb-5">Smart Inventory Management for Your Shoe Repair Store</h2>
            </div>
            <div className="pt-1 md:pt-16">
              <p className="text-gray-600 font-dm-sans leading-relaxed mb-3">
                Never run out of heel wedges, insoles, laces, zippers, straps, pockets or polish in the middle of a repair again. Our shoe repair shop inventory management software allows you to track leather pieces, adhesives, and other supplies with ease.
              </p>
              <p className="text-gray-600 font-dm-sans leading-relaxed">
                Get low stock alerts, re-order inventory from your favorite suppliers and keep your shelves stocked. This way, you never delay a shoe repair job again.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {inventoryCards.map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-7 flex gap-5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-rd-teal/10 text-rd-teal flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-1.5">{c.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TICKETING — zigzag rows */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="max-w-2xl mb-14">
            <span className="text-rd-teal font-poppins font-bold text-xs uppercase tracking-widest">Easily Manage Repairs</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3 mb-5">Take Control of Every Shoe Repair Job</h2>
            <p className="text-gray-600 font-dm-sans leading-relaxed mb-3">
              Using our shoe repair shop ticketing software, you can create, manage, and track every repair ticket. Assign jobs to your cobblers, add internal notes, and update repair statuses.
            </p>
            <p className="text-gray-600 font-dm-sans leading-relaxed mb-3">
              Need extra approvals for custom work? Send instant quotes that customers can accept or decline.
            </p>
            <p className="text-gray-600 font-dm-sans leading-relaxed">
              Once approved, continue the job with full visibility and zero delays. You can also notify your customers with automated SMS or email updates when the repair is completed.
            </p>
          </div>

          <div className="space-y-3">
            {ticketRows.map((row, i) => (
              <div
                key={row.title}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl border border-gray-100 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse sm:text-right"}`}
              >
                <div className="w-14 h-14 rounded-full bg-rd-dark text-rd-lime flex items-center justify-center shrink-0">
                  {row.icon}
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-rd-dark text-lg mb-1">{row.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPLOYEE MANAGEMENT & REPORTING — dark cards */}
      <section className="bg-rd-dark text-white py-20 px-6">
        <div className="container-main">
          <div className="max-w-2xl mb-14">
            <span className="text-rd-lime font-poppins font-bold text-xs uppercase tracking-widest">Employee Management & Reporting</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mt-3 mb-5">Manage Your Cobblers Smoothly and Set Your Business Up for Success</h2>
            <p className="text-white/70 font-dm-sans leading-relaxed mb-3">
              Keep your cobblers and employees organized with the best, professional shoe repair shop software. Track attendance, work hours, monitor productivity and manage them with role-based access.
            </p>
            <p className="text-white/70 font-dm-sans leading-relaxed">
              Get deep insights into sales, repair trends, and shop performance—all from a single place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {employeeCards.map((c) => (
              <div key={c.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-rd-lime/20 text-rd-lime flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="font-poppins font-semibold mb-1.5">{c.title}</h3>
                <p className="text-white/60 font-dm-sans text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENTS */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="max-w-2xl mb-14">
            <span className="text-rd-teal font-poppins font-bold text-xs uppercase tracking-widest">Fast and Simple</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mt-3 mb-5">Unified POS & Payments</h2>
            <p className="text-gray-600 font-dm-sans leading-relaxed">
              RepairHub is an all-in-one POS system for shoe repair stores, providing a unified platform with payments seamlessly integrated into your point of sale software. This automates your payment process, resulting in quicker checkouts without manual entries. Here's what you get with RepairHub integrated payment processing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {paymentCards.map((c) => (
              <div key={c.title} className="bg-[#1e2035] text-white rounded-2xl p-7">
                <div className="w-11 h-11 rounded-xl bg-rd-teal flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="font-poppins font-semibold mb-1.5">{c.title}</h3>
                <p className="text-white/60 font-dm-sans text-sm leading-relaxed mb-3">{c.desc}</p>
                {c.badges && (
                  <div className="flex flex-wrap gap-2">
                    {c.badges.map((b) => (
                      <span key={b} className="text-[11px] font-dm-sans bg-white/10 rounded-full px-3 py-1">{b}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white py-16 px-6 border-y border-gray-100">
        <div className="container-main text-center">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-3">You're in Great Company</h2>
          <p className="text-gray-500 font-dm-sans max-w-2xl mx-auto mb-10">
            Thousands of business owners and cobblers around the world trust RepairHub to run their shoe repair shops smarter and support each other.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2.5 bg-rd-cream text-rd-dark rounded-full px-6 py-3">
                <span className="text-rd-teal">{b.icon}</span>
                <span className="font-poppins font-semibold text-sm">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — accordion */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-10 text-center">All the Answers You're Looking For</h2>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details key={item.q} className="group bg-white rounded-xl p-5 open:shadow-md">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-poppins font-semibold text-rd-dark">
                  {item.q}
                  <svg className="w-4 h-4 shrink-0 text-rd-teal transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL TAGLINE */}
      <section className="bg-rd-teal text-white py-16 px-6">
        <div className="container-main text-center max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-5">The #1 POS System Built for Shoe Repair Shops</h2>
          <p className="text-white/80 font-dm-sans leading-relaxed mb-8">
            RepairHub is a cloud-based point-of-sale software designed specifically for small and medium-sized repair shops, including computer, small engine, power tools, watch & jewelry, shoe, e-bike, bicycle, wireless, camera, heavy-duty, and cell phone repair businesses. The software keeps track of inventory levels and notifies the business when a required part is running low and needs to be replenished, so they can order parts.
          </p>
          <a href="https://app.repairhub.co/register" className="inline-block bg-white text-rd-dark px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-rd-cream transition-colors">Start Free Trial</a>
        </div>
      </section>
    </PageLayout>
  );
}
