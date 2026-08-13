import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Ticket Management for Wireless Devices',
    desc: 'Create and manage repair tickets for smartphones, tablets, hotspots, and other wireless devices. Track every job from diagnostic to pickup with full device details attached.',
    bullets: ['Multi-device ticket support', 'Status tracking with color-coded labels', 'Pre/post repair photo capture', 'Technician assignment and notes', 'Automated customer notifications'],
  },
  {
    title: 'IMEI & Serial Number Tracking',
    desc: 'Log IMEI numbers, serial numbers, and device identifiers at intake. Verify device ownership, flag blacklisted units, and keep a searchable history for every device that passes through your shop.',
    bullets: ['IMEI lookup and logging', 'Blacklist verification', 'Device history search', 'Serialized inventory tracking', 'Custom device fields'],
  },
  {
    title: 'Parts Inventory for Wireless',
    desc: 'Manage screens, batteries, flex cables, charging ports, and every wireless-specific part with real-time stock levels, low-stock alerts, and barcode-driven workflows.',
    bullets: ['Low-stock alerts and reorder points', 'Barcode and label printing', 'Supplier purchase orders', 'Cross-location stock visibility', 'Parts compatibility tagging'],
  },
  {
    title: 'Customer Communication',
    desc: 'Keep customers in the loop with automated SMS and email updates at every stage of the repair. Send estimates, status changes, and pickup reminders without lifting the phone.',
    bullets: ['Automated SMS and email alerts', 'Repair estimate approval', 'Pickup-ready notifications', 'Two-way messaging support', 'Custom message templates'],
  },
  {
    title: 'Multi-Carrier Support',
    desc: 'Handle devices across every major carrier — AT&T, Verizon, T-Mobile, and unlocked units. Tag carrier information on tickets and manage carrier-specific repair requirements from one system.',
    bullets: ['Carrier tagging on tickets', 'Carrier-specific pricing rules', 'Unlocked device handling', 'Network compatibility notes', 'Bulk carrier imports'],
  },
  {
    title: 'Warranty Tracking',
    desc: 'Track manufacturer warranties, in-house repair warranties, and extended protection plans. Automatically flag warranty-eligible repairs and log warranty claims for accurate record-keeping.',
    bullets: ['Manufacturer warranty lookup', 'In-house warranty management', 'Warranty expiration alerts', 'Claim history per device', 'Extended protection plan tracking'],
  },
];

const faqs = [
  {
    q: 'Can RepairDesk handle repairs for all types of wireless devices?',
    a: 'Yes. RepairDesk supports repair ticketing for smartphones, tablets, wireless hotspots, smartwatches, and any other wireless device. You can create custom device categories and repair types to match the specific devices your shop services.',
  },
  {
    q: 'How does IMEI and serial number tracking work?',
    a: 'When you create a repair ticket, you can log the device IMEI or serial number directly on the ticket. RepairDesk stores this information in the device history so you can search, verify ownership, and cross-reference past repairs for the same unit at any time.',
  },
  {
    q: 'Can I manage parts inventory for multiple wireless brands?',
    a: 'Absolutely. You can organize your parts catalog by brand, device model, and part type. RepairDesk supports barcode scanning, low-stock alerts, supplier purchase orders, and cross-store inventory views — so you always know what is in stock and where.',
  },
  {
    q: 'Does RepairDesk integrate with my existing payment processor?',
    a: 'RepairDesk integrates with Square, Stripe, PayPal, and RepairDesk Payments. You can accept cash, card, contactless, and split payments directly from the built-in POS — no separate terminal software needed.',
  },
];

export default function WirelessRepairPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-20 md:py-28 px-6">
        <div className="container-main max-w-4xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
            Wireless Repair Shop Software
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Wireless Repair Shop Software Built for Speed and Accuracy
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8 max-w-2xl">
            Manage every wireless device repair from intake to checkout. Track IMEI numbers, assign jobs, update customers, and move parts — all in one connected system.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Book a Free Demo</Link>
          </div>
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-white/70 font-dm-sans">
            {['Built for wireless repair', 'IMEI tracking included', '40+ integrations'].map(t => (
              <span key={t} className="flex items-center gap-2">
                <svg className="w-4 h-4 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">
            Everything You Need to Run a Wireless Repair Shop
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-3xl">
            From cracked screens to motherboard-level work, wireless repairs demand precision. RepairDesk keeps tickets, parts, customer updates, and checkout working together so nothing falls through the cracks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f) => (
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
          <div className="text-rd-lime text-5xl font-dm-serif mb-6">&ldquo;</div>
          <p className="text-white/90 text-xl font-dm-sans italic leading-relaxed mb-8">
            We switched to RepairDesk from a paper-based system and the difference was night and day. Every wireless repair is tracked from the moment the customer walks in. IMEI logging, parts tracking, and automated texts save us hours every week.
          </p>
          <p className="font-poppins font-semibold text-rd-lime">Marcus Rivera</p>
          <p className="text-white/60 text-sm font-poppins">Owner, QuickFix Wireless</p>
        </div>
      </section>

      {/* Why Wireless Shops Choose RepairDesk */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-4">Why Wireless Shops Choose RepairDesk</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-3xl">
            A Platform That Understands Wireless Repair
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-3xl">
            Wireless repair moves fast. Customers expect quick turnarounds, accurate estimates, and real-time updates. RepairDesk gives your team the tools to deliver on all three.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Faster Check-In', desc: 'Self check-in kiosks and quick-create tickets let you process walk-ins in under a minute.' },
              { title: 'Accurate Estimates', desc: 'Pull repair pricing from your catalog, add labor, and send the estimate for approval — all before touching the device.' },
              { title: 'Multi-Store Ready', desc: 'Running more than one location? RepairDesk syncs inventory, tickets, and reporting across every store in real time.' },
            ].map(item => (
              <div key={item.title} className="bg-rd-cream rounded-2xl p-6">
                <h3 className="font-poppins font-bold text-rd-dark mb-2">{item.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm">
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
