import React from 'react';
import PageLayout from '../components/PageLayout';

/* ---------------------------------------------------------------------- */
/* Inline icon set                                                         */
/* ---------------------------------------------------------------------- */

function Icon({ name, className = 'w-6 h-6' }) {
  const common = { className, fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', strokeWidth: 1.6 };
  switch (name) {
    case 'printer':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 8.5V4.5a1 1 0 011-1h9a1 1 0 011 1v4M6.5 8.5h11a2 2 0 012 2v5.5a1 1 0 01-1 1H17M6.5 8.5h-1a2 2 0 00-2 2v5.5a1 1 0 001 1h1M17 17v2.5a1 1 0 01-1 1H8a1 1 0 01-1-1V17m10 0H7m2-3.25h6" />
          <circle cx="15.5" cy="11" r=".6" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'paper':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 3.5h10a1 1 0 011 1V20l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3V4.5a1 1 0 011-1z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 7.5h6M9 11h6M9 14.5h4" />
        </svg>
      );
    case 'label':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6.5h9.17a1 1 0 01.7.3l5.83 5.83a1 1 0 010 1.42l-6.45 6.45a1 1 0 01-1.42 0L5.3 14.87a1 1 0 01-.3-.7V6.5z" />
          <circle cx="8.25" cy="10.75" r="1.25" />
        </svg>
      );
    case 'roll':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="7" rx="7" ry="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 7v9c0 1.66 3.13 3 7 3s7-1.34 7-3V7" />
          <ellipse cx="12" cy="7" rx="2.6" ry="1.1" />
        </svg>
      );
    case 'drawer':
      return (
        <svg {...common}>
          <rect x="3.5" y="6" width="17" height="13" rx="1.4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 12h17M9 15.2h6" />
        </svg>
      );
    case 'scanner':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V5.5A1.5 1.5 0 015.5 4H8M16 4h2.5A1.5 1.5 0 0120 5.5V8M20 16v2.5a1.5 1.5 0 01-1.5 1.5H16M8 20H5.5A1.5 1.5 0 014 18.5V16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 9v6M10.5 9v6M12.5 9v6M15 9v6M17 9v6" />
        </svg>
      );
    case 'display':
      return (
        <svg {...common}>
          <rect x="6" y="3" width="12" height="18" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 18.5h3" />
        </svg>
      );
    case 'wifi':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 9.2a12.5 12.5 0 0117 0M6.6 12.6a8.2 8.2 0 0110.8 0M9.8 16a4 4 0 014.4 0" />
          <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'phone':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.75h12A1.25 1.25 0 0119.25 5v14A1.25 1.25 0 0118 20.25H6A1.25 1.25 0 014.75 19V5A1.25 1.25 0 016 3.75z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3.75h6M11 17.25h2" />
        </svg>
      );
    case 'cordless':
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 4.5h6a2 2 0 012 2v2a2 2 0 01-2 2h-1l-1 2.2-1-2.2H7a2 2 0 01-2-2v-2a2 2 0 012-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.8 15.8a5.2 5.2 0 010-7.6M17.3 18.3a8.6 8.6 0 010-12.6" />
        </svg>
      );
    case 'arrow':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

/* ---------------------------------------------------------------------- */
/* Catalog data — exact copy from repairhub.co/recommended-hardware       */
/* ---------------------------------------------------------------------- */

const catalog = [
  {
    id: 'thermal-receipt-printers',
    title: 'Thermal Receipt Printers',
    icon: 'printer',
    blurb: 'Fast, reliable receipt printing for the counter.',
    items: [
      {
        model: 'Star TSP 100',
        compatibility: 'Web',
        paperSize: '80mm and 3.125 inches',
        description:
          "The Star Micronics' TSP100 combines fast print speed of 250mm/s with Star quality and reliability, and offers paper and energy saving features plus a 4 year warranty as standard. An easy-to-use and ready-to-go installation makes it an ideal choice for an all-in-one POS solution.",
      },
      {
        model: 'Star TSP 143',
        compatibility: 'Web',
        paperSize: '80mm and 3.125 inches',
        description:
          "The Star Micronics' TSP143 is a trusted thermal receipt printing solution tailored for businesses of all sizes, offering seamless installation and exceptional print quality. Boasting USB, Bluetooth, and Ethernet (LAN) connectivity, this versatile printer is an ideal choice for an all-in-one POS solution.",
      },
      {
        model: 'Rongta RP 820',
        compatibility: 'Web',
        paperSize: '80mm',
        description:
          'The Rongta RP820 is an efficient and stable printer which is easy to install, operate and maintain. It has a high printing speed of 300mm/s and drop-in paper loading, with auto cutter and partial/full cut options. It allows USB and ethernet compatibility making it an ideal choice for an all-in-one mobile POS solution.',
      },
    ],
  },
  {
    id: 'thermal-receipt-paper',
    title: 'Thermal Receipt Paper',
    icon: 'roll',
    blurb: 'Keep your printers stocked and jam-free.',
    items: [
      {
        model: 'N/A',
        compatibility: 'Thermal Receipt printers',
        paperSize: '80mm (10 pack)',
        description:
          'Top quality thermal rolls for clear and crisp printing. Red line to indicate approaching end of the roll and the need for replacement. Point-of-sale thermal paper rolls suitable for printing high quality barcode labels.',
      },
    ],
  },
  {
    id: 'label-printers',
    title: 'Label Printers',
    icon: 'label',
    blurb: 'Print device tags, barcodes, and shipping labels.',
    items: [
      {
        model: 'Dymo LabelWriter550',
        compatibility: 'Web',
        paperSize: 'Multiple',
        description:
          "Dymo LabelWriter 550 comes with USB connectivity and prints jobs fast and accurately with its unique Automatic Label Recognition so you'll always know which labels (by size, type, and color) are loaded into the label maker, how many labels are remaining and you will never run out of labels mid job.",
      },
      {
        model: 'ZSB-DP14',
        compatibility: 'Web, Bluetooth',
        paperSize:
          '1.25″ x 1.25″ – Small multipurpose labels · 1.25″ x 3.5″ – Address labels · 2.25″ x 0.5″ – Jewelry price tags · 2.25″ x 0.75″ – Return address, file folder labels · 2.25″ x 1″ – Barcode and inventory labels · 2.25″ x 3.5″ – Name tags, product labels · 2.25″ x 4″ – Small shipping labels · 4″ x 3″ – Standard shipping and packaging labels · 4″ x 6″ – Large shipping labels (FedEx, UPS, USPS)',
        description:
          'The Zebra ZSB-DP14 is a versatile thermal label printer tailored for businesses requiring larger label formats. It delivers monochrome prints at 300 DPI resolution and can produce up to 73 labels per minute. Like its 2-inch counterpart, the ZSB-DP14 uses eco-friendly, drop-in label cartridges and supports a wide range of label types. Its compatibility with major shipping services and e-commerce platforms, along with the browser-based label designer, makes it an excellent choice for streamlining labeling tasks across various devices and operating systems.',
      },
      {
        model: 'ZSB-DP12',
        compatibility: 'Web, Bluetooth',
        paperSize:
          '1.25″ x 1.25″ – Small multipurpose labels · 1.25″ x 3.5″ – Address labels · 2.25″ x 0.5″ – Jewelry price tags · 2.25″ x 0.75″ – Return address, file folder labels · 2.25″ x 1″ – Barcode and inventory labels · 2.25″ x 3.5″ – Name tags, product labels · 2.25″ x 4″ – Shipping labels',
        description:
          'The Zebra ZSB-DP12 is a compact, eco-friendly thermal label printer designed for small businesses and home offices. It offers high-quality, monochrome printing at a resolution of 300 DPI and speeds up to 73 labels per minute. The printer utilizes recyclable, drop-in label cartridges made from potato starch, ensuring sustainability and ease of use. Compatible with major shipping carriers and e-commerce platforms, the ZSB-DP12 supports label creation through a browser-based designer accessible on Windows, macOS, Android, and iOS devices.',
      },
    ],
  },
  {
    id: 'label-rolls',
    title: 'Label Rolls',
    icon: 'roll',
    blurb: 'Genuine consumables sized for your label printer.',
    items: [
      {
        model: 'Dymo Label 550 Rolls',
        compatibility: 'Dymo LabelWriter 550mm',
        paperSize: '36mm x 89mm',
        description:
          'These thermal label rolls are designed specifically for the Dymo Label Printers, ensuring accurate and jam-free printing. The 36mm x 89mm labels are ideal for barcodes and product labeling.',
      },
    ],
  },
  {
    id: 'zebra-rat-tail-label',
    title: 'Zebra Rat Tail Label',
    icon: 'label',
    blurb: 'Small-format labels for jewelry and compact items.',
    items: [
      {
        model: 'ZD421CN',
        compatibility: 'USB, Ethernet, Bluetooth, WiFi',
        paperSize:
          '2.2″ x 0.5″ – Jewelry tags, price labeling, small items · 1.25″ x 1.00″ – Barcode labels, small product labeling · 1.2″ x 0.85″ – Inventory tags, compact labeling needs · 2.25″ x 1.25″ – Shipping labels, product identification · 4.00″ x 6.00″ – Large shipping labels, warehouse logistics',
        description:
          'The Zebra ZD421CN is a versatile desktop label printer designed for high-quality printing in various applications. Its compatibility with rat-tail labels makes it ideal for jewelry tagging, providing clear and durable labels for small items. The printer supports both direct thermal and thermal transfer printing methods, ensuring flexibility based on your labeling needs.',
      },
    ],
  },
  {
    id: 'cash-drawer',
    title: 'Cash Drawer',
    icon: 'drawer',
    blurb: 'Secure cash handling at checkout.',
    items: [
      {
        model: 'Any Standard RJ-11 Cash Drawer',
        compatibility: 'Web',
        paperSize: null,
        description:
          'A portable cash drawer with lock made of Stainless Steel with a connection mode RJ11 cable and Voltage DC 12V. Securely built for safe cash handling, it is ideal for repair shops and other commercial retail centers.',
      },
    ],
  },
  {
    id: 'barcode-scanner',
    title: 'Barcode Scanner',
    icon: 'scanner',
    blurb: 'Scan devices, parts, and inventory in seconds.',
    items: [
      {
        model: 'Any',
        compatibility: 'Web',
        paperSize: null,
        description: null,
      },
    ],
  },
  {
    id: 'customer-facing-display',
    title: 'Customer Facing Display',
    icon: 'display',
    blurb: 'Self check-in and on-the-go signature capture.',
    items: [
      {
        model: 'iPad (9.7 inch) & Samsung Galaxy Tab (10-inch)',
        compatibility: 'Web',
        paperSize: null,
        description:
          'Use your iPad or Samsung Tab for customer self check-in and get customer signatures on the go. The CFD widget works with iPads and tablets making it an ideal choice for an all-in-one POS solution.',
      },
    ],
  },
  {
    id: 'wifi-extender',
    title: 'WIFI Extender for Payment Terminal',
    icon: 'wifi',
    blurb: 'Keep payment terminals connected, everywhere in-store.',
    items: [
      {
        model: 'Any',
        compatibility: 'N/A',
        paperSize: null,
        description:
          'TP-Link WiFi Extender with Ethernet Port and Dual Band 5GHz/2.4GHz boosts internet wifi coverage and eliminates wi-fi dead zones. Stay connected and enjoy Lag-Free Connection to any type of devices, including wired devices via Fast Ethernet port.',
      },
    ],
  },
  {
    id: 'ip-phone',
    title: 'IP Phone',
    icon: 'phone',
    blurb: 'Desk phones for calls, VoIP, and 3CX.',
    items: [
      {
        model: 'Yealink T53',
        compatibility: '3CX, VoIP Systems, Ethernet, PoE',
        paperSize: null,
        description:
          'The Yealink T53 is a compact and efficient IP phone designed for professionals who need reliable voice performance with a modern interface. It features a 3.7" graphical LCD display, Gigabit Ethernet, and Power over Ethernet (PoE) support, making it ideal for administrative staff.',
      },
      {
        model: 'Yealink T53W',
        compatibility: '3CX, VoIP Systems, Ethernet, Wi-Fi, PoE',
        paperSize: null,
        description:
          'The Yealink T53W is an enhanced version of the T53 with built-in Wi-Fi (2.4G/5G), allowing flexible placement without additional adapters. With a 3.7" LCD display and Gigabit Ethernet, it is perfect for workplaces that require wireless flexibility.',
      },
      {
        model: 'Yealink T54W',
        compatibility: '3CX, VoIP Systems, Ethernet, Wi-Fi, Bluetooth, PoE',
        paperSize: null,
        description:
          'The Yealink T54W is a mid-level premium IP phone offering a larger 4.3" color LCD display and enhanced usability. It includes built-in Wi-Fi and Bluetooth connectivity, Gigabit Ethernet, and PoE support. This phone is ideal for managers, supervisors, and high-call-volume users.',
      },
      {
        model: 'Yealink T42S',
        compatibility: '3CX, VoIP Systems, Ethernet, PoE',
        paperSize: null,
        description:
          'The Yealink T42S is an entry-level IP phone offering dependable performance for everyday business use. It comes with a 2.7" graphical LCD display, Gigabit Ethernet, PoE support, and a USB port. This model is best for small teams.',
      },
      {
        model: 'Yealink T46S / T46U',
        compatibility: '3CX, VoIP Systems, Ethernet, USB, PoE',
        paperSize: null,
        description:
          'The Yealink T46S / T46U is a mid-range IP phone designed for users handling moderate to high call volumes. It features a 4.3" color display, Gigabit Ethernet, USB ports (dual USB on T46U), and expansion module support, making it ideal for busy professionals.',
      },
    ],
  },
  {
    id: 'cordless-ip-phone-system',
    title: 'Cordless IP Phone System',
    icon: 'cordless',
    blurb: 'DECT wireless handsets for mobility on the floor.',
    items: [
      {
        model: 'Yealink W76P',
        compatibility: '3CX, VoIP Systems, DECT Wireless',
        paperSize: null,
        description:
          'The Yealink W76P is a wireless DECT IP phone solution designed for mobility within offices, warehouses, and retail environments. It includes a DECT base station and cordless handset, supports multiple handsets per base, delivers HD voice quality, and offers secure DECT encryption. Perfect for teams requiring mobility.',
      },
    ],
  },
];

/* ---------------------------------------------------------------------- */
/* Product card                                                            */
/* ---------------------------------------------------------------------- */

function SpecRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex gap-3 py-2 border-b border-gray-100 last:border-b-0">
      <dt className="w-28 shrink-0 text-[11px] font-poppins font-bold uppercase tracking-wide text-rd-teal">
        {label}
      </dt>
      <dd className="text-sm text-gray-600 font-dm-sans leading-relaxed">{value}</dd>
    </div>
  );
}

function ProductCard({ item, icon }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-rd-cream flex items-center justify-center shrink-0">
          <Icon name={icon} className="w-6 h-6 text-rd-teal" />
        </div>
        <h3 className="font-poppins font-bold text-rd-dark text-lg leading-snug pt-1">{item.model}</h3>
      </div>

      <dl className="mb-4">
        <SpecRow label="Compatibility" value={item.compatibility} />
        <SpecRow label="Paper Size" value={item.paperSize} />
      </dl>

      {item.description && (
        <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-5 flex-1">{item.description}</p>
      )}

      <a
        href="https://app.repairhub.co/register"
        className="inline-flex items-center gap-1.5 mt-auto text-rd-teal font-poppins font-bold text-sm hover:gap-2.5 transition-all"
      >
        Learn More
        <Icon name="arrow" className="w-4 h-4" />
      </a>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Page                                                                     */
/* ---------------------------------------------------------------------- */

export default function RecommendedHardwarePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-rd-dark text-white py-20 md:py-28 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-white px-4 py-1.5 rounded-full mb-6">
            Recommended Hardware
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            A Better Way To Sell
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed">
            Choose from our list of recommended hardware to get going and stay going with zero downtime. For the best experience, make sure you use only recommended hardware.
          </p>
        </div>
      </section>

      {/* Category quick-nav */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="container-main px-6 overflow-x-auto">
          <nav className="flex gap-2 py-4 min-w-max">
            {catalog.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-poppins font-semibold text-rd-dark bg-rd-cream hover:bg-rd-teal hover:text-white transition-colors whitespace-nowrap"
              >
                <Icon name={cat.icon} className="w-4 h-4" />
                {cat.title}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Catalog */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main space-y-16">
          {catalog.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-14 h-14 rounded-2xl bg-rd-dark flex items-center justify-center shrink-0">
                  <Icon name={cat.icon} className="w-7 h-7 text-rd-mint" />
                </div>
                <div>
                  <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark">{cat.title}</h2>
                  <p className="text-gray-500 font-dm-sans">{cat.blurb}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {cat.items.map((item) => (
                  <ProductCard key={item.model} item={item} icon={cat.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footnote */}
      <section className="bg-white py-14 px-6">
        <div className="container-main">
          <div className="rounded-2xl bg-rd-dark px-8 py-10 md:px-12 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-poppins font-bold text-xl md:text-2xl text-white mb-2">
                Not sure which hardware fits your shop?
              </h3>
              <p className="text-white/70 font-dm-sans">
                For the best experience, use only recommended hardware — our team can help you choose.
              </p>
            </div>
            <a href="https://app.repairhub.co/register" className="btn-primary px-8 py-3.5 whitespace-nowrap">
              Free Trial
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
