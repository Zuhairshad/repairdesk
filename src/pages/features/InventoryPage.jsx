import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

/* ---------- Icons ---------- */

function IconClipboard(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="6" y="4" width="12" height="17" rx="2" strokeLinejoin="round" />
      <path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 11h6M9 15h6M9 19h3" strokeLinecap="round" />
    </svg>
  );
}

function IconTruck(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M2 8h11v9H2z" strokeLinejoin="round" />
      <path d="M13 11h4l3 3v3h-7z" strokeLinejoin="round" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </svg>
  );
}

function IconTransfer(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <rect x="2" y="6" width="7" height="7" rx="1" />
      <rect x="15" y="11" width="7" height="7" rx="1" />
      <path d="M9 9h6a2 2 0 012 2v0" strokeLinecap="round" />
      <path d="M15 15H9a2 2 0 01-2-2v0" strokeLinecap="round" />
      <path d="M17 9l0 0M7 15l0 0" strokeLinecap="round" />
      <path d="M14.5 6.5L17 9l-2.5 2.5M9.5 14.5L7 12l2.5-2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconTag(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M11 3h6a1 1 0 011 1v6l-9.5 9.5a2 2 0 01-2.9 0l-4.1-4.1a2 2 0 010-2.9L11 3z" strokeLinejoin="round" />
      <circle cx="15.5" cy="7.5" r="1.4" />
    </svg>
  );
}

function IconPercent(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <circle cx="6.5" cy="7.5" r="2.5" />
      <circle cx="17.5" cy="16.5" r="2.5" />
      <path d="M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

function IconInbox(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M4 13V6a1 1 0 011-1h14a1 1 0 011 1v7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 13h4.5l1.2 2.2h4.6L15.5 13H20v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5z" strokeLinejoin="round" />
    </svg>
  );
}

function IconBell(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M18 8a6 6 0 10-12 0c0 3.5-1 5-2 6.5h16c-1-1.5-2-3-2-6.5z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 18a2.5 2.5 0 005 0" strokeLinecap="round" />
    </svg>
  );
}

function IconGauge(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M4 15a8 8 0 1116 0" strokeLinecap="round" />
      <path d="M12 15l3.5-4.5" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconPackage(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M3 8l9-5 9 5-9 5-9-5z" strokeLinejoin="round" />
      <path d="M3 8v9l9 5 9-5V8" strokeLinejoin="round" />
      <path d="M12 13v9" />
    </svg>
  );
}

function IconRotate(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M4 4v5h5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 20v-5h-5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 15a7 7 0 0012.4 2.6M18.5 9A7 7 0 006.1 6.4" strokeLinecap="round" />
    </svg>
  );
}

function IconStore(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path d="M3 9l1.5-5h15L21 9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.5 9v10a1 1 0 001 1h13a1 1 0 001-1V9" strokeLinejoin="round" />
      <path d="M9.5 20v-6h5v6" strokeLinejoin="round" />
      <path d="M3 9a2.3 2.3 0 004.6.2M7.6 9.2A2.3 2.3 0 0012 9M12 9a2.3 2.3 0 004.4.2M16.4 9.2A2.3 2.3 0 0021 9" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Small building blocks ---------- */

function Barcode({ className = '' }) {
  const widths = [2, 1, 3, 1, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2, 1, 1, 3, 2, 4, 1];
  return (
    <div className={`flex items-end gap-[2px] ${className}`}>
      {widths.map((w, i) => (
        <span
          key={i}
          className="bg-current"
          style={{ width: `${w * 2}px`, height: i % 5 === 0 ? '100%' : '78%' }}
        />
      ))}
    </div>
  );
}

function StockRow({ label, sku, pct, status }) {
  const tone =
    status === 'critical'
      ? { bar: 'bg-red-400', text: 'text-red-500', pill: 'bg-red-50 text-red-500' }
      : status === 'low'
      ? { bar: 'bg-amber-400', text: 'text-amber-500', pill: 'bg-amber-50 text-amber-600' }
      : { bar: 'bg-rd-lime', text: 'text-rd-teal', pill: 'bg-rd-teal/10 text-rd-teal' };
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="w-9 h-9 rounded-lg bg-rd-dark/5 flex items-center justify-center shrink-0">
        <IconPackage className="w-4 h-4 text-rd-dark/60" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <p className="font-poppins font-semibold text-rd-dark text-sm truncate">{label}</p>
          <span className={`text-[10px] font-poppins font-bold px-2 py-0.5 rounded-full shrink-0 ${tone.pill}`}>
            {status === 'critical' ? 'Critical' : status === 'low' ? 'Low Stock' : 'In Stock'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-1.5 flex-1 rounded-full bg-gray-100 overflow-hidden">
            <div className={`h-full rounded-full ${tone.bar}`} style={{ width: `${pct}%` }} />
          </div>
          <span className={`text-xs font-dm-sans font-semibold w-9 text-right ${tone.text}`}>{pct}%</span>
        </div>
        <p className="text-gray-400 text-[11px] font-dm-sans mt-1">SKU {sku}</p>
      </div>
    </div>
  );
}

/* ---------- Data ---------- */

const conveyorSteps = [
  { n: '01', icon: IconClipboard, title: 'Inventory Count', desc: 'Ensure sufficient stock for any item by keeping a check on your physical inventory, manually or through a barcode scanner.' },
  { n: '02', icon: IconTruck, title: 'Purchase Order', desc: 'Never miss a repair order again due to low inventory. Use integrated purchase orders to instantly order the missing part.' },
  { n: '03', icon: IconTransfer, title: 'Inventory Transfer', desc: 'Create Inventory Transfer Orders and transport your inventory swiftly from store A to store B.' },
  { n: '04', icon: IconTag, title: 'Serialized Inventory', desc: 'Easily differentiate the same items from two different vendors and clearly trace inventory from supplier to end customer.' },
];

const labelFeatures = [
  { icon: IconPercent, title: 'Tax Class', desc: 'Customize tax handling for different cities, states or countries — charge tax on the entire product, run a tax-exempt transaction, or charge tax against a part used for a repair.' },
  { icon: IconInbox, title: 'Accept Inventory (GRN)', desc: 'Accept full or partial inventory against your purchase order to help you keep an accurate track of what has actually landed on your shelf.' },
  { icon: IconBell, title: 'Low Stock Report', desc: 'Keep track of inventory levels and get notified when a phone part is low and needs to be replenished — order parts with a single click.' },
  { icon: IconGauge, title: 'Inventory Adjustment', desc: 'Forecast demand and maintain adequate inventory at all times so you can focus on growing the business and get rid of paperwork.' },
];

const shelfItems = [
  { label: 'iPhone 13 OLED Screen', sku: 'IP13-SCR-BLK', pct: 84, status: 'ok' },
  { label: 'Samsung S22 Battery', sku: 'S22-BAT-STD', pct: 22, status: 'low' },
  { label: 'USB-C Charging Port Flex', sku: 'USBC-FLEX-04', pct: 8, status: 'critical' },
  { label: 'iPad 9th Gen Digitizer', sku: 'IPD9-DIG-WHT', pct: 61, status: 'ok' },
];

const otherFeatures = [
  { icon: IconTruck, title: 'Automate Parts Ordering', desc: 'Create a purchase order, add the items you need, and place your order with a simple click. Review purchase bills for ordered items, add bulk items, and update your inventory automatically.' },
  { icon: IconTag, title: 'OrderSync & ScanPro', desc: 'Speed up the process of adding products from your favorite vendors with OrderSync. Then leverage ScanPro to identify product information automatically with a simple barcode scan.' },
  { icon: IconRotate, title: 'RMA & Supplier Returns', desc: 'Returning faulty parts to your suppliers doesn’t have to be a hiccup. Send back faulty orders and keep track of them so you’re always on top of your inventory.' },
];

const faqs = [
  { q: 'How long will it take to add my inventory into the software?', a: 'Single items are instantly added to the inventory. However, if you are importing a larger number of items together, it will take 2-3 minutes.' },
  { q: 'Does my staff need extensive training to use the inventory management feature?', a: 'No, RepairDesk is a user-friendly software and offers employee training so your staff can make the most out of it.' },
  { q: 'Can I move inventory from one store to another?', a: 'Yes, you can move inventory from one store to another using a transfer order.' },
  { q: 'Can I add images for each inventory item?', a: 'Yes, you can add multiple images for each inventory item.' },
  { q: 'Is there an offline mode?', a: 'The RepairDesk iPad POS Register app has an Offline Mode that allows you to create tickets and invoices, collect cash payments and process customers when you do not have a reliable internet connection.' },
  { q: 'Do you offer customer support?', a: 'We have excellent customer support and you are always prioritized above anything and everything. If you ever run into a problem, you can give us a call, chat with a product specialist, or email us at support@repairdesk.co' },
];

/* ---------- Page ---------- */

export default function InventoryPage() {
  const [openFaq, setOpenFaq] = React.useState(0);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rd-dark text-white relative overflow-hidden">
        <div className="container-main py-20 md:py-24 px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center relative z-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
              <IconGauge className="w-3.5 h-3.5" />
              Easy to Manage
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
              Inventory Management Software for Repair Shops
            </h1>
            <p className="text-white/75 text-lg md:text-xl font-dm-sans leading-relaxed mb-8 max-w-lg">
              Organize your inventory and keep track of your entire stock from order to sale. Your inventory management is made effortless with RepairDesk.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
              <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
            </div>
          </div>

          {/* Warehouse shelf mock panel */}
          <div className="bg-white rounded-2xl p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-3 px-1">
              <p className="font-poppins font-bold text-rd-dark text-sm">Live Stock Levels</p>
              <Barcode className="h-4 text-rd-dark/70 w-16" />
            </div>
            <div className="divide-y divide-gray-100">
              {shelfItems.map((it) => (
                <StockRow key={it.sku} {...it} />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
      </section>

      {/* Your Inventory On Cruise Control — conveyor layout */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Easy to Manage</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Your Inventory On Cruise Control</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-14 max-w-2xl">
            Take the hassle out of your workflow with this inventory management system. Create purchase orders, transfer between stores, make adjustments and perform inventory counts. All from a single platform.
          </p>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-gray-200" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {conveyorSteps.map((s) => (
                <div key={s.n} className="relative flex flex-col items-center text-center">
                  <div className="relative w-16 h-16 rounded-2xl bg-rd-teal flex items-center justify-center mb-5 shadow-lg shadow-rd-teal/20 z-10">
                    <s.icon className="w-7 h-7 text-white" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-rd-lime text-rd-dark text-[10px] font-bold font-poppins flex items-center justify-center">{s.n}</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-2">{s.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add Inventory Labels — barcode scan */}
      <section className="bg-rd-dark text-white py-16 md:py-20 px-6 relative overflow-hidden">
        <div className="container-main grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 items-center">
          {/* Barcode visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              <p className="text-white/50 font-dm-sans text-xs mb-4 tracking-widest uppercase">Scan &amp; Retrieve</p>
              <div className="bg-white rounded-xl p-6 flex flex-col items-center">
                <Barcode className="text-rd-dark h-16 w-full max-w-[220px] justify-center" />
                <p className="font-dm-sans text-rd-dark/70 text-xs tracking-[0.3em] mt-3">RD 4471 2098 3316</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="bg-white/10 rounded-lg px-3 py-2.5">
                  <p className="text-white/40 text-[10px] font-dm-sans uppercase tracking-wide">Item</p>
                  <p className="text-white font-poppins text-sm font-semibold">Battery – S22</p>
                </div>
                <div className="bg-white/10 rounded-lg px-3 py-2.5">
                  <p className="text-white/40 text-[10px] font-dm-sans uppercase tracking-wide">Tax Class</p>
                  <p className="text-white font-poppins text-sm font-semibold">Standard</p>
                </div>
                <div className="bg-white/10 rounded-lg px-3 py-2.5">
                  <p className="text-white/40 text-[10px] font-dm-sans uppercase tracking-wide">In Stock</p>
                  <p className="text-rd-lime font-poppins text-sm font-semibold">22 units</p>
                </div>
                <div className="bg-white/10 rounded-lg px-3 py-2.5">
                  <p className="text-white/40 text-[10px] font-dm-sans uppercase tracking-wide">Reorder At</p>
                  <p className="text-white font-poppins text-sm font-semibold">10 units</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-3">Add Inventory Labels</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Every Detail, A Barcode Scan Away</h2>
            <p className="text-white/70 font-dm-sans text-lg mb-10 max-w-xl">
              Use inventory labels to organize your stock and manage your inventory without a wrinkle. Scan your inventory items with a barcode reader to instantly pull up all the details you need in your POS terminal.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {labelFeatures.map((f) => (
                <div key={f.title} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-rd-lime/40 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-rd-lime/20 flex items-center justify-center mb-3">
                    <f.icon className="w-4.5 h-4.5 text-rd-lime" />
                  </div>
                  <h3 className="font-poppins font-semibold text-white text-sm mb-1.5">{f.title}</h3>
                  <p className="text-white/60 font-dm-sans text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div>
              <div className="grid grid-cols-7 gap-2 mb-8 max-w-xs">
                {Array.from({ length: 14 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-md bg-rd-teal/10 flex items-center justify-center">
                    <IconStore className="w-4 h-4 text-rd-teal" />
                  </div>
                ))}
              </div>
              <p className="font-dm-serif text-4xl text-rd-teal mb-1">14</p>
              <p className="text-gray-500 font-poppins text-sm">Stores unified under one inventory view</p>
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Case Study</span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-5">
                How Kevin Resolved Inventory Issues In His 14 Stores
              </h2>
              <p className="text-gray-600 font-dm-sans text-base md:text-lg leading-relaxed mb-6">
                "Stock-take was another major issue for us. We sell a lot of devices on a daily basis, so we need our POS software to keep a clean record of all that's sold, plus resting devices. But our previous software was failing to do so, whereas RepairDesk is a big success on that."
              </p>
              <div className="flex items-center gap-4">
                <a href="https://app.repairdesk.co/register" className="btn-primary px-6 py-3">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-store / low stock alerts */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-14 items-start">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Low Stock Alerts</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Never Run Out Of Stock With Low Stock Alerts</h2>
              <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-lg">
                Don't you hate it when you run out of a part that you need for that urgent repair? We know the feeling all too well. You'll never have to face that problem again with RepairDesk's low stock alerts — synced live across every store you run.
              </p>
              <div className="space-y-6">
                {otherFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-rd-teal/10 flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-rd-teal" />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-rd-dark mb-1">{f.title}</h3>
                      <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Warehouse shelf visual with a fuller stock board */}
            <div className="bg-rd-dark rounded-2xl p-6 md:p-7">
              <div className="flex items-center justify-between mb-5">
                <p className="font-poppins font-bold text-white text-sm">Multi-Store Stock Board</p>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-3 py-1 rounded-full">Live Sync</span>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="divide-y divide-gray-100">
                  {shelfItems.map((it) => (
                    <StockRow key={`b-${it.sku}`} {...it} />
                  ))}
                </div>
              </div>
              <p className="text-white/50 font-dm-sans text-xs mt-5 leading-relaxed">
                Every location reads from the same stock ledger — a transfer, sale, or adjustment in Store A updates Store B instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rd-cream py-16 md:py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-10">All the Answers You're Looking For</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden">
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
