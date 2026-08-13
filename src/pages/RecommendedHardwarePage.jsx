import React from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const hardwareSections = [
  {
    title: 'Receipt Printers',
    desc: 'Print receipts, repair estimates, and invoices directly from RepairDesk. These thermal printers are tested and compatible out of the box.',
    products: [
      { name: 'Epson TM-T20III', compat: 'USB & Ethernet — Windows, Mac', price: '$180 – $220' },
      { name: 'Star Micronics TSP143IIIU', compat: 'USB — Windows, Mac, iPad', price: '$350 – $400' },
      { name: 'Star Micronics TSP143IIIW', compat: 'Wi-Fi — Windows, Mac, iPad', price: '$380 – $430' },
    ],
  },
  {
    title: 'Barcode Scanners',
    desc: 'Speed up checkout, inventory counts, and part lookups with a barcode scanner. These models support 1D and 2D scanning for labels and product barcodes.',
    products: [
      { name: 'Zebra DS2208', compat: '1D/2D USB corded scanner', price: '$100 – $140' },
      { name: 'Socket Mobile S740', compat: 'Bluetooth — iOS, Android, Windows', price: '$350 – $400' },
      { name: 'Honeywell Voyager 1202g', compat: 'Wireless USB — Windows, Mac', price: '$120 – $160' },
    ],
  },
  {
    title: 'Label Printers',
    desc: 'Print barcode labels for parts, devices, and inventory items. Stick them on shelves, bins, and repair tickets for fast scanning.',
    products: [
      { name: 'DYMO LabelWriter 450', compat: 'USB — Windows, Mac', price: '$70 – $100' },
      { name: 'Zebra ZD421', compat: 'USB & Ethernet — Windows', price: '$350 – $450' },
      { name: 'Brother QL-820NWB', compat: 'USB, Wi-Fi, Bluetooth — Windows, Mac', price: '$200 – $260' },
    ],
  },
  {
    title: 'Cash Drawers',
    desc: 'A reliable cash drawer that opens automatically when you complete a cash sale in RepairDesk. Connects through your receipt printer.',
    products: [
      { name: 'Star Micronics SMD2-1317', compat: 'Printer-driven — 13" compact', price: '$60 – $80' },
      { name: 'APG Vasario VB320-BL1317', compat: 'Printer-driven — 13" x 17"', price: '$80 – $110' },
    ],
  },
  {
    title: 'Card Readers',
    desc: 'Accept chip, tap, and swipe payments at the counter. These readers integrate with RepairDesk Payments, Square, and Stripe.',
    products: [
      { name: 'Square Terminal', compat: 'Wi-Fi — chip, tap, swipe, receipts', price: '$299' },
      { name: 'Stripe Reader M2', compat: 'Bluetooth — chip, tap', price: '$59' },
      { name: 'RepairDesk Payments Terminal', compat: 'Wi-Fi — chip, tap, swipe', price: 'Contact sales' },
    ],
  },
];

export default function RecommendedHardwarePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-20 md:py-28 px-6">
        <div className="container-main max-w-4xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
            Hardware
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Recommended Hardware for RepairDesk
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8 max-w-2xl">
            These printers, scanners, drawers, and card readers are tested and verified to work with RepairDesk. Pick the hardware that fits your shop and start running in minutes.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Talk to Sales</Link>
          </div>
        </div>
      </section>

      {/* Hardware Sections */}
      {hardwareSections.map((section, sIdx) => (
        <section key={section.title} className={`${sIdx % 2 === 0 ? 'bg-white' : 'bg-rd-cream'} py-16 px-6`}>
          <div className="container-main">
            <div className="max-w-3xl mb-10">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">{section.title}</span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-3">{section.title}</h2>
              <p className="text-gray-500 font-dm-sans text-lg">{section.desc}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.products.map((product) => (
                <div key={product.name} className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-all">
                  {/* Product icon placeholder */}
                  <div className="w-16 h-16 bg-rd-cream rounded-2xl flex items-center justify-center mb-5">
                    <svg className="w-8 h-8 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 7.131V3.375" />
                    </svg>
                  </div>
                  <h3 className="font-poppins font-bold text-rd-dark text-lg mb-2">{product.name}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm mb-3">{product.compat}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-poppins font-bold text-rd-teal">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Need Help */}
      <section className="bg-rd-dark text-white py-16 px-6">
        <div className="container-main text-center max-w-2xl">
          <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-4">Not Sure What Hardware You Need?</h2>
          <p className="text-white/70 font-dm-sans text-lg mb-8">
            Our team can recommend the right setup based on your shop size, workflow, and budget. Book a free consultation.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-3.5">Talk to an Expert</Link>
        </div>
      </section>
    </PageLayout>
  );
}
