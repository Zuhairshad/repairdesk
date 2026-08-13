import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const coreFeatures = [
  { title: 'Real-Time Stock Tracking', desc: 'Ensure sufficient stock for any item by keeping a check on your physical inventory, manually or through a barcode scanner.' },
  { title: 'Integrated Purchase Orders', desc: 'Never miss a repair order again due to low inventory. Use integrated purchase orders to instantly order the missing part.' },
  { title: 'Inventory Transfer', desc: 'Create Inventory Transfer Orders and transport your inventory swiftly from store A to store B.' },
  { title: 'Serialized Inventory', desc: 'Easily differentiate the same items from two different vendors and clearly trace your inventory items from supplier to end customer.' },
  { title: 'Low Stock Report', desc: 'Keep track of inventory levels and get notified when a phone part is low and needs to be replenished — order parts with a single click.' },
  { title: 'Inventory Adjustment', desc: 'Forecast demand and maintain adequate inventory at all times so you can focus on growing business and get rid of paperwork.' },
  { title: 'Barcode Labels', desc: 'Customize tax handling for different cities, states or countries. Add inventory labels and scan any item in seconds.' },
  { title: 'Partial Purchase Orders', desc: "Accept full or partial inventory against your purchase order to help keep track of what's been received and what's outstanding." },
];

const faqs = [
  { q: 'How long will it take to add my inventory into the software?', a: 'Single items are instantly added to the inventory. However, if you are importing a larger number of items together, it will take 2-3 minutes.' },
  { q: 'Does my staff need extensive training to use the inventory management feature?', a: 'No, RepairDesk is a user-friendly software and offers employee training so your staff can make the most out of it.' },
  { q: 'Can I move inventory from one store to another?', a: 'Yes, you can move inventory from one store to another using a transfer order.' },
  { q: 'Can I add images for each inventory item?', a: 'Yes, you can add multiple images for each inventory item.' },
  { q: 'Is there an offline mode?', a: 'The RepairDesk iPad POS Register app has an Offline Mode that allows you to create tickets and invoices, collect cash payments and process customers when you do not have a reliable internet connection.' },
  { q: 'Do you offer customer support?', a: 'We have excellent customer support and you are always prioritized above anything. If you ever run into a problem, you can give us a call, chat with one of our product specialists, or send us an email at support@repairdesk.co' },
];

export default function InventoryPage() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
            Inventory Management Software for Repair Shops
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">
            Your inventory on cruise control. Track parts, manage purchase orders, transfer stock between stores, and get low-stock alerts — all from one screen.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-rd-cream py-10 px-6">
        <div className="container-main grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[['Real-Time', 'Stock Updates'], ['1-Click', 'Parts Reorder'], ['Multi-Store', 'Inventory View'], ['Barcode', 'Label Printing']].map(([val, label]) => (
            <div key={label}>
              <p className="font-dm-serif text-2xl md:text-3xl text-rd-teal mb-1">{val}</p>
              <p className="text-gray-500 text-sm font-poppins">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Every Detail, A Barcode Scan Away</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Your Inventory On Cruise Control</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">
            Ensure sufficient stock for any item by keeping a check on your physical inventory, manually or through a barcode scanner.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-sm mb-2">{f.title}</h3>
                <p className="text-gray-400 font-dm-sans text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OrderSync & ScanPro */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Integrated Ordering</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Automate Parts Ordering Within Your POS</h2>
              <p className="text-gray-500 font-dm-sans text-lg mb-6">
                Create a purchase order, add the items you need, and place your order with a simple click. Review ordered items, add bulk items, and update your inventory automatically. Inventory management made effortless.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rd-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-rd-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <p className="text-gray-600 font-dm-sans text-sm"><strong>OrderSync</strong> — Speed up the process of adding products from your favorite vendors in RepairDesk.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rd-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-rd-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <p className="text-gray-600 font-dm-sans text-sm"><strong>ScanPro</strong> — Customize inventory labels and automatically identify product information with a simple barcode scan.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-rd-lime flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-rd-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <p className="text-gray-600 font-dm-sans text-sm"><strong>Supplier Returns</strong> — Never let a return to your supplier go unnoticed. Track every RMA from start to finish.</p>
                </div>
              </div>
            </div>
            <div className="bg-rd-dark rounded-2xl p-8 text-white">
              <p className="font-poppins font-bold text-xl mb-3 text-rd-lime">How Kevin Resolved Inventory Issues In His 14 Stores</p>
              <p className="text-white/80 font-dm-sans text-sm leading-relaxed mb-6">
                "Before RepairDesk, keeping track of parts across 14 stores was a nightmare. Now I can see exactly what's in stock everywhere, transfer parts between locations, and set reorder points so we never run out. It saved us hours every single week."
              </p>
              <p className="font-poppins font-semibold text-white">Kevin</p>
              <p className="text-white/50 text-xs font-poppins">Multi-Store Owner, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-10">All the Answers You're Looking For</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <svg className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === i && <div className="px-6 pb-5 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
