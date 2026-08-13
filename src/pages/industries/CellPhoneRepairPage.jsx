import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const pressurePoints = [
  'A customer wants an update, and the ticket is hard to find.',
  'A promised screen repair slips because the part is not in stock.',
  'A job stalls because the next step was not clear.',
  'Two people grab the same repair, or nobody does.',
  'Repairs and checkout live apart, so the handoff slows down.',
  'Customers leave happy, then you never see them again.',
];

const workflowSteps = [
  'Take in the device, snap photos, and print a barcode label in seconds',
  'Assign the job, track status, and log diagnostic notes without losing context',
  'Send SMS and email alerts that keep customers updated without constant calls',
  'Check out with any payment method, including cash, card, contactless, and mobile wallet',
  'Prepare repair estimates and print tax invoices without rebuilding the ticket',
  'Reorder parts directly from your supplier without leaving the screen',
];

const featureSections = [
  {
    title: 'Repair Ticket Management',
    desc: 'Create, assign, and track every phone repair from intake to pickup with full context on one ticket.',
    bullets: ['Multi-device tickets', 'Pre/post repair photos', 'Diagnostic & staff notes', 'Calendar view and ticket workflows', 'Custom statuses with color labels'],
  },
  {
    title: 'Inventory Management',
    desc: 'Track every LCD, battery, charging port, and accessory down to the unit with real visibility across stores.',
    bullets: ['Low-stock alerts', 'Barcode scan and labels', 'Serialized parts tracking', 'Cross-store stock view', 'Inventory valuation and refurb tracking'],
  },
  {
    title: 'Point of Sale & Billing',
    desc: 'A POS that understands repair tickets, labor, parts, taxes, repair estimates, and tax invoices.',
    bullets: ['Customer-facing display and self check-in', 'Estimates, refunds, and exchanges', 'Split payments and bill payments', 'Loyalty programs and gift cards', 'Recurring billing module'],
  },
  {
    title: 'CRM and Customer Tracking',
    desc: 'Every customer profile shows every device they brought in and how much they spent, making follow-ups easier.',
    bullets: ['Customer groups and third-party billing', 'Purchase history and device linkage', 'Flagged notes and document upload', 'B2B portal for enterprise clients', 'Auto SMS and email notifications'],
  },
  {
    title: 'Reporting & Analytics',
    desc: 'Real-time reports on sales, repairs, profit margins, and store-by-store performance, allowing you to make decisions with data.',
    bullets: ['Multi-store performance report', 'Sales and ticket insights', 'Custom sales report', 'Inventory and RMA report', 'QuickBooks and Xero export report'],
  },
  {
    title: 'Trade-in and Buyback',
    desc: 'Turn used phones into resale inventory with consistent pricing, refurb workflows, and VAT margin rules built-in.',
    bullets: ['Website buyback widget', 'VAT-margin support', 'Reusely integration', 'Condition and resale tracking'],
  },
  {
    title: 'Employee Management',
    desc: 'Assign roles and permissions, switch staff profiles with a 4-digit PIN, and track clock-in and clock-out with timesheets.',
    bullets: ['Access roles and permissions', 'Commission tracking and payroll', 'Clock-in/Clock-out', 'Shift scheduling', 'Activity log and productivity report'],
  },
  {
    title: 'Marketing & Retention',
    desc: 'Send the right follow-ups automatically, so reviews grow and past customers keep returning to your store.',
    bullets: ['Campaigner module', 'Automated follow-ups via SMS and email', 'Mailchimp integration'],
  },
];

export default function CellPhoneRepairPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark to-rd-teal text-white py-20 md:py-28 px-6">
        <div className="container-main max-w-4xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
            Cell Phone Repair Shop Software
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            One System for Every Phone Repair, Every Part, and Every Checkout
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8 max-w-2xl">
            Faster booking, repair tickets, invoicing, and inventory tracking in one flow. Move phone repairs from intake to checkout with less manual work.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Book a Free Demo</Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-white/70 font-dm-sans">
            {['Built for repair stores', '24/6 support included', '40+ integrated partners'].map(t => (
              <span key={t} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The Daily Pressure */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-4">The Daily Pressure</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            A Busy Phone Repair Shop Can Turn Into Chaos Fast
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-2xl">
            On a packed day, phone repair moves at the speed of your workflow. Every intake, every status change, and every part pull has to stay tight — or the counter backs up, and the bench slows down.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pressurePoints.map((point, i) => (
              <div key={i} className="bg-white rounded-xl p-5 flex items-start gap-3 shadow-sm">
                <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </div>
                <p className="text-gray-600 text-sm font-dm-sans leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-rd-dark rounded-2xl p-6 md:p-8">
            <p className="text-white font-dm-sans text-lg leading-relaxed">
              When your workflow cracks under pressure, the gaps get expensive. <span className="text-rd-lime font-semibold">RepairDesk keeps repairs, inventory, and checkout connected</span>, so your shop stays in control.
            </p>
          </div>
        </div>
      </section>

      {/* Connected Workflow */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-4">The Connected Workflow</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-3xl">
            One System for Every Phone Repair, Every Part, and Every Checkout
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-3xl">
            From cracked screens and battery swaps to charge port fixes and diagnostics, the work moves fast on a busy bench. RepairDesk keeps the full job in one place — from intake to pickup — with tickets, inventory, customer updates, and checkout working together.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workflowSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-rd-cream">
                <div className="w-8 h-8 rounded-full bg-rd-teal text-white flex items-center justify-center shrink-0 text-sm font-bold font-poppins">{i + 1}</div>
                <p className="text-gray-700 font-dm-sans text-sm leading-relaxed pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Feature Breakdown */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">
            Everything You Need to Run a Fast, Profitable Cell Phone Repair Shop
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-3xl">
            Phone repair is detailed work. Your software should keep up. These are the core tools RepairDesk brings together so tickets, parts, customers, and checkout stay connected during the daily rush.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureSections.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-7 shadow-sm">
                <h3 className="font-poppins font-bold text-rd-dark text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-4">{f.desc}</p>
                <ul className="space-y-1.5">
                  {f.bullets.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-600 font-dm-sans">
                      <svg className="w-4 h-4 text-rd-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-rd-dark text-white py-20 px-6">
        <div className="container-main max-w-2xl mx-auto text-center">
          <div className="text-rd-lime text-5xl font-dm-serif mb-6">"</div>
          <p className="text-white/90 text-xl font-dm-sans italic leading-relaxed mb-8">
            RepairDesk has been a really exciting advancement for our business. Usman and his team go out of their way to assist their customers and are open to feedback and integrating new ideas into their software. Cannot recommend these guys enough.
          </p>
          <p className="font-poppins font-semibold text-rd-lime">Simon Nash</p>
          <p className="text-white/60 text-sm font-poppins">Owner, The iPhone Guy</p>
        </div>
      </section>
    </PageLayout>
  );
}
