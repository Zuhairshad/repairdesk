import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'What is Customer Facing Display?',
    a: 'A customer facing display is a screen that shows all order details to the customer during the checkout process. It includes details such as the items, cost of the items, tax percentage, discounts, etc.',
  },
  {
    q: 'Can I take digital signatures on the Customer Facing Display?',
    a: 'Yes, you can take digital signatures of your customers on terms & conditions.',
  },
  {
    q: 'Which hardware can I use for Customer Facing Display?',
    a: 'You can use any hardware as long as it has a browser and an internet connection.',
  },
  {
    q: 'Are Customer Facing Display and Self Check-In the same?',
    a: 'No, they are not the same. The self check-in widget excludes customer facing display, where the former can be added to the latter. It can also exist on its own, without the customer facing display.',
  },
  {
    q: 'Can I run promotional content on the Customer Facing Display?',
    a: 'Yes, you can run your logo, special promotions, and advertisements. Moreover, you can also show order information, diagnostic notes, and term & conditions on the screen.',
  },
];

/* ---- Reusable "tablet on a stand" screen mockup ---- */
function DisplayMockup({ variant, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* stand */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-rd-dark/30 rounded-full blur-sm" />
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3 h-10 bg-gradient-to-b from-gray-300 to-gray-400 rounded-sm" />
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-2 bg-gray-400 rounded-full" />

      {/* tablet body */}
      <div className="relative bg-rd-dark rounded-[1.75rem] p-2.5 shadow-2xl border-4 border-[#0a2f30]">
        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-black/40 rounded-full" />
        <div className="bg-rd-cream rounded-2xl overflow-hidden aspect-[9/13] flex flex-col">
          {variant === 'items' && <ItemsScreen />}
          {variant === 'ads' && <AdsScreen />}
          {variant === 'signature' && <SignatureScreen />}
          {variant === 'hero' && <ItemsScreen tall />}
        </div>
      </div>
    </div>
  );
}

function ItemsScreen({ tall }) {
  return (
    <>
      <div className="bg-rd-teal px-4 py-3 flex items-center justify-between">
        <span className="font-poppins font-bold text-white text-xs">Please Review Your Order</span>
        <svg className="w-4 h-4 text-rd-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div className="flex-1 px-4 py-3 space-y-2.5">
        {[
          ['iPhone 13 Screen Repair', '$129.00'],
          ['Tempered Glass Protector', '$14.99'],
          ['Battery Replacement', '$59.00'],
        ].map(([name, price]) => (
          <div key={name} className="flex items-center justify-between border-b border-gray-200 pb-2">
            <span className="font-dm-sans text-[11px] text-rd-dark leading-tight pr-2">{name}</span>
            <span className="font-poppins font-semibold text-[11px] text-rd-dark whitespace-nowrap">{price}</span>
          </div>
        ))}
        <div className="flex items-center justify-between pt-1">
          <span className="font-dm-sans text-[11px] text-gray-500">Discount</span>
          <span className="font-poppins font-semibold text-[11px] text-rd-teal">- $10.00</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-dm-sans text-[11px] text-gray-500">Sales Tax</span>
          <span className="font-poppins font-semibold text-[11px] text-rd-dark">$14.32</span>
        </div>
        {tall && (
          <div className="mt-2 pt-2 border-t-2 border-rd-dark flex items-center justify-between">
            <span className="font-poppins font-bold text-xs text-rd-dark">Total Due</span>
            <span className="font-poppins font-bold text-sm text-rd-teal">$207.31</span>
          </div>
        )}
      </div>
      <div className="bg-white px-4 py-3 border-t border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="font-poppins font-bold text-xs text-rd-dark">Total Due</span>
          <span className="font-poppins font-bold text-sm text-rd-teal">$207.31</span>
        </div>
        <div className="bg-rd-teal text-white text-center text-[11px] font-poppins font-semibold rounded-full py-2">
          Tap to Confirm Order
        </div>
      </div>
    </>
  );
}

function AdsScreen() {
  return (
    <>
      <div className="bg-[#1e2035] px-4 py-3 flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-rd-lime flex items-center justify-center">
          <svg className="w-3 h-3 text-rd-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="font-poppins font-bold text-white text-[11px]">SpeedFix Repairs</span>
      </div>
      <div className="flex-1 px-4 py-4 flex flex-col justify-center items-center text-center bg-gradient-to-br from-rd-teal to-rd-dark">
        <span className="text-rd-mint font-poppins font-bold text-[10px] tracking-widest mb-2">SPECIAL OFFER</span>
        <span className="text-white font-poppins font-bold text-2xl leading-tight mb-2">20% OFF</span>
        <span className="text-white/80 font-dm-sans text-[10px] leading-snug px-2">
          Screen protectors with every screen repair this week
        </span>
      </div>
      <div className="bg-white px-4 py-3 border-t border-gray-200 text-center">
        <span className="font-dm-sans text-[10px] text-gray-500">Ask our staff about today's deals</span>
      </div>
    </>
  );
}

function SignatureScreen() {
  return (
    <>
      <div className="bg-rd-teal px-4 py-3">
        <span className="font-poppins font-bold text-white text-xs">Authorize &amp; Sign</span>
      </div>
      <div className="flex-1 px-4 py-3">
        <p className="font-dm-sans text-[10px] text-gray-500 leading-snug mb-3">
          I authorize RepairHub to charge $207.31 for the services listed and agree to the shop's terms &amp; conditions.
        </p>
        <div className="bg-white border-2 border-dashed border-rd-teal/40 rounded-lg h-20 flex items-end px-3 pb-2">
          <svg viewBox="0 0 120 30" className="w-full h-8 text-rd-dark" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <path d="M2 22c4-10 8-16 12-10s4 12 8 6 6-14 10-8 4 10 8 4 6-12 10-6 4 8 8 4 6-10 10-6 6 8 10 4 6-10 10-6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex items-center gap-1.5 mt-2">
          <div className="w-3 h-3 rounded border border-rd-teal bg-rd-teal flex items-center justify-center">
            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="font-dm-sans text-[9px] text-gray-500">I agree to the Terms &amp; Conditions</span>
        </div>
      </div>
      <div className="bg-white px-4 py-3 border-t border-gray-200">
        <div className="bg-rd-dark text-white text-center text-[11px] font-poppins font-semibold rounded-full py-2">
          Submit Signature
        </div>
      </div>
    </>
  );
}

const highlights = [
  {
    label: 'Provide a Visual Confirmation',
    title: 'Let Your Customers Review Items During Checkout',
    desc: 'Cut down on checkout errors by showing the customers exactly what they are getting. Display line items, prices, and discounts to customers so they can visually confirm their order.',
    variant: 'items',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-5 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Increase Sales',
    title: 'Drive Sales By Displaying Ads and Offers',
    desc: "Easily configure your customer facing display to show offers, discounts and special sales. You can also insert your repair shop's logo to increase brand awareness.",
    variant: 'ads',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 013 10c0-2.21 1.79-4 4-4h4.05l4.318-2.658A1 1 0 0117 4.24v11.52a1 1 0 01-1.632.775L11 13.5H7c-.653 0-1.283-.106-1.874-.303" />
      </svg>
    ),
  },
  {
    label: 'Get customer signatures',
    title: 'Minimize Risks By Taking Digital Signatures',
    desc: 'Get authorization from your clients on payments before or after repairs. This allows you to reduce the possibility of payment disputes and win more chargebacks.',
    variant: 'signature',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
];

export default function CustomerFacingDisplayPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-[#1e2035] relative overflow-hidden py-20 md:py-28 px-6">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #457b9d 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="container-main relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-white px-4 py-1.5 rounded-full mb-6">
              Customer Facing Display
            </span>
            <h1 className="font-poppins font-bold text-white text-4xl md:text-5xl leading-tight mb-6">
              Display Store Items, and Capture Customer Signatures Before or After Completing a Sale
            </h1>
            <p className="font-dm-sans text-white/75 text-lg leading-relaxed mb-8">
              Reduce payment disputes and win more chargebacks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary px-8 py-3.5">
                Request a Demo
              </Link>
              <a href="#case-study" className="border border-white/30 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">
                Case Study
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <DisplayMockup variant="hero" className="w-56 md:w-64" />
          </div>
        </div>
      </section>

      {/* Case Study / Testimonial */}
      <section id="case-study" className="bg-[#FAF9E3] py-20 px-6">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Case Study</span>
            <h2 className="font-poppins font-bold text-rd-dark text-2xl md:text-3xl mb-8">
              Alex Marini's Reasons to Choose RepairHub
            </h2>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-black/5">
              <div className="text-rd-teal text-5xl font-dm-serif leading-none mb-2">&ldquo;</div>
              <p className="font-dm-sans text-rd-dark text-lg md:text-xl leading-relaxed italic mb-6">
                When Usman introduced us to RepairHub Payments, it was really huge. An all-in-one payment system with a very nice customer facing display that also carries out contactless payments, what else could we ask for?
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rd-teal text-white font-poppins font-bold flex items-center justify-center text-sm">
                  AM
                </div>
                <div className="text-left">
                  <div className="font-poppins font-semibold text-rd-dark text-sm">Alex Marini</div>
                </div>
              </div>
              <Link to="/customer-stories" className="inline-flex items-center gap-1.5 mt-6 font-poppins font-semibold text-rd-teal hover:text-rd-dark transition-colors">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights, alternating text / mockup */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="container-main space-y-24">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-rd-teal/10 text-rd-teal flex items-center justify-center mb-5">
                  {h.icon}
                </div>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">{h.label}</span>
                <h3 className="font-poppins font-bold text-rd-dark text-2xl md:text-3xl leading-tight mb-4">{h.title}</h3>
                <p className="font-dm-sans text-gray-600 text-base md:text-lg leading-relaxed">{h.desc}</p>
              </div>
              <div className="flex justify-center">
                <DisplayMockup variant={h.variant} className="w-48 md:w-56" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-rd-dark text-3xl md:text-4xl mb-10 text-center">
            All the Answers You're Looking For
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <svg className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
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
