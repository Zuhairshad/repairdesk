import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Service Ticketing for Bikes',
    desc: 'Create detailed repair tickets for every bike that rolls into your shop. Log the make, model, wheel size, and issue description so technicians have full context before they start.',
    bullets: ['Custom fields for bike specs', 'Multi-service tickets', 'Diagnostic checklists', 'Technician assignment', 'Status tracking with color labels'],
  },
  {
    title: 'Parts Catalog Management',
    desc: 'Organize your entire parts catalog — tires, tubes, chains, derailleurs, brake pads, and accessories — with searchable categories, SKUs, and supplier links.',
    bullets: ['Category and sub-category grouping', 'SKU and barcode support', 'Supplier purchase orders', 'Product images and descriptions', 'Bulk import and export'],
  },
  {
    title: 'Labor Tracking',
    desc: 'Log labor time against each repair ticket so you can bill accurately and measure technician productivity. Set standard labor rates for common services like tune-ups, wheel truing, and brake adjustments.',
    bullets: ['Time tracking per ticket', 'Standard labor rate presets', 'Technician productivity reports', 'Labor cost vs. revenue analysis', 'Commission and payroll integration'],
  },
  {
    title: 'Customer Notifications',
    desc: 'Send automated SMS and email updates when a repair status changes. Notify customers when their bike is ready for pickup, when an estimate needs approval, or when parts are on backorder.',
    bullets: ['Automated status-change alerts', 'Estimate approval requests', 'Pickup-ready notifications', 'Custom message templates', 'Two-way messaging'],
  },
  {
    title: 'Seasonal Inventory Management',
    desc: 'Bicycle shops see demand shift with the seasons. RepairDesk helps you prepare with low-stock alerts, reorder points, and inventory forecasting so you stock up before the spring rush and slim down for winter.',
    bullets: ['Low-stock alerts', 'Reorder point automation', 'Inventory valuation reports', 'Cross-location stock transfers', 'Seasonal product tagging'],
  },
  {
    title: 'Work Order Scheduling',
    desc: 'Schedule repairs on a visual calendar so your bench stays organized. Assign jobs by technician, set estimated completion times, and avoid overbooking during peak season.',
    bullets: ['Drag-and-drop calendar view', 'Technician workload balancing', 'Estimated completion times', 'Online appointment booking', 'Recurring service scheduling'],
  },
];

const faqs = [
  {
    q: 'Is RepairDesk suitable for a bicycle repair shop?',
    a: 'Yes. RepairDesk is used by repair shops across many industries, including bicycle shops. You can customize device types, repair categories, and ticket fields specifically for bikes — logging frame size, wheel diameter, drivetrain type, and any other detail your technicians need.',
  },
  {
    q: 'Can I track labor hours and parts separately on each ticket?',
    a: 'Absolutely. Each repair ticket supports separate line items for labor and parts. You can set standard labor rates for common services, log actual time spent, and attach specific parts from your inventory — giving you a clear breakdown of cost and revenue per job.',
  },
  {
    q: 'How does seasonal inventory management work?',
    a: 'RepairDesk lets you set reorder points and low-stock thresholds for every product. When a part drops below the threshold, you receive an alert. You can also run inventory valuation reports to see what is overstocked and adjust purchasing before the next season.',
  },
  {
    q: 'Can customers book bike repairs online?',
    a: 'Yes. With RepairDesk Appointments Pro, you can embed a booking widget on your website. Customers select the service type, choose a date and time, and the appointment lands in your RepairDesk calendar with a ticket created automatically.',
  },
];

export default function BicycleRepairPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-20 md:py-28 px-6">
        <div className="container-main max-w-4xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
            Bicycle Repair Shop Software
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Bicycle Repair Shop Software That Keeps Your Bench Moving
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8 max-w-2xl">
            Manage bike repair operations from intake to pickup. Track service tickets, schedule work orders, manage parts, and keep customers updated — all from one platform built for repair shops.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Book a Free Demo</Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-white/70 font-dm-sans">
            {['Built for repair shops', 'Seasonal inventory tools', 'Online booking included'].map(t => (
              <span key={t} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-4">The Daily Challenge</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Bike Shops Run on Tight Margins and Tighter Schedules
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-2xl">
            Between walk-ins, online bookings, parts orders, and seasonal rushes, a bicycle repair shop needs a system that keeps everything visible and connected.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'A customer calls for an update and the ticket is buried in a notebook.',
              'A tune-up stalls because the replacement cable is out of stock.',
              'Two mechanics pick up the same job because assignments are unclear.',
              'Seasonal demand spikes and you run out of tubes and tires.',
              'Estimates are sent late because pricing is scattered across spreadsheets.',
              'Repeat customers never come back because there is no follow-up.',
            ].map((point, i) => (
              <div key={i} className="bg-white rounded-xl p-5 flex items-start gap-3 shadow-sm">
                <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </div>
                <p className="text-gray-600 text-sm font-dm-sans leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">
            Everything You Need to Run a Bicycle Repair Shop
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-3xl">
            From flat fixes and brake bleeds to full overhauls, RepairDesk keeps every job, every part, and every customer touchpoint organized and connected.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-rd-cream rounded-2xl p-7">
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

      {/* Integrations */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main max-w-4xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-4">Connect Your Favorite Tools</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-8">RepairDesk integrates with the platforms you already use so your bike shop runs without switching tabs.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Square', 'Stripe', 'QuickBooks', 'Xero', 'Shopify', 'WooCommerce', 'Zapier', 'Mailchimp'].map(name => (
              <div key={name} className="bg-white rounded-xl p-4 text-center shadow-sm font-poppins font-semibold text-rd-dark text-sm border border-gray-100">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-rd-cream rounded-xl">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-poppins font-semibold text-rd-dark pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-rd-teal shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
