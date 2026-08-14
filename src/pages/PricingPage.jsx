import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const plans = [
  {
    name: 'Essential',
    monthlyPrice: 99,
    annualPrice: 79,
    description:
      'Perfectly suited for automating and managing operations in single-store repair businesses.',
    badge: null,
    highlight: false,
    users: '5 users per location',
    highlights: [
      'Unlimited repair tickets',
      'Multi-location support',
      'Advanced reporting & dashboards',
      'Repair workflow automation',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    monthlyPrice: 149,
    annualPrice: 119,
    description:
      'Designed for growing repair businesses with high volume sales. Built for multi-stores and franchises.',
    badge: 'Most Popular',
    highlight: true,
    users: '8 users per location',
    highlights: [
      'Unlimited repair tickets',
      'Supports multi-locations',
      'Advanced reporting & KPI dashboards',
      'Repair workflow automation',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Advanced',
    monthlyPrice: null,
    annualPrice: null,
    description:
      'Custom-built for mail-in repair, refurbishment & warranty centers, and manufacturer repair depots.',
    badge: null,
    highlight: false,
    users: 'Unlimited users per location',
    highlights: [
      'Unlimited repair tickets',
      'Supports multi-locations',
      'Advanced reporting & KPI dashboards',
      'Dedicated onboarding & support',
    ],
    cta: 'Get a Custom Quote',
  },
];

const workflowRows = [
  { label: 'Users', values: ['5 per location', '8 per location', 'Unlimited'] },
  { label: 'Unlimited Tickets', values: [true, true, true] },
  { label: 'Multi-Locations', values: [true, true, true] },
  { label: 'Advanced Reporting & Dashboard', values: [true, 'KPI Dashboards', 'KPI Dashboards'] },
  { label: 'Repair Workflows', values: [true, true, true] },
];

const productivityRows = [
  { label: 'Self Checkin', values: [true, true, true] },
  { label: 'Repair Tracker Widget', values: [true, true, true] },
  { label: 'Ticket Counter Display', values: [true, true, true] },
  { label: 'Device Buyback and Trade', values: [true, true, true] },
  { label: 'Internal Wiki', values: [true, true, true] },
  { label: 'Loyalty', values: ['paid', true, true] },
  { label: 'Store Credits', values: ['paid', true, true] },
  { label: 'Gift Cards', values: ['paid', true, true] },
  { label: 'Product Bundles', values: [true, true, true] },
];

const integrations = [
  'QuickBooks Online',
  'Xero',
  'Zapier',
  'MailChimp',
  'RepairHub Payments',
  'Square (Terminal)',
  'PaymentSense',
  'PayFacto',
  'Stripe',
  'PayPal',
  'RepairHub SMS',
  'M360 Diagnostics',
  'Shopify',
  'WooCommerce',
];

const faqs = [
  {
    q: 'Which pricing plan is right for me?',
    a: 'If you run a single-store repair shop, the Essential plan is a great fit. If you have multiple locations, a growing team, or franchise stores, the Growth plan is designed for you. For mail-in repair centers, refurbishment & warranty centers, or manufacturer repair depots, the Advanced plan is built specifically to handle those workflows.',
  },
  {
    q: 'How much does a RepairHub subscription cost?',
    a: 'The Essential plan starts at $99/store per month, or $79/store per month when billed annually. The Growth plan starts at $149/store per month, or $119/store per month when billed annually. The Advanced plan is custom-quoted based on your business needs — contact our sales team for a quote.',
  },
  {
    q: 'Do you offer a discount for annual billing?',
    a: 'Yes. Switching from monthly to annual billing saves you roughly 20% across every plan. The price shown on this page updates automatically when you toggle between Monthly and Annually.',
  },
  {
    q: 'How do I get started?',
    a: 'Click "Get Started" on the Essential or Growth plan to begin your setup — no credit card required. If you need the Advanced plan, click "Get a Custom Quote" and our team will put together a package tailored to your operation.',
  },
  {
    q: 'Are all integrations available on every plan?',
    a: 'Core integrations like QuickBooks Online, Xero, and Zapier are available starting on the Essential plan. Payment integrations such as RepairHub Payments, Square, Stripe, and PayPal, along with M360 Diagnostics, Shopify, and WooCommerce, are available across plans — reach out to our team to confirm availability for your specific setup.',
  },
  {
    q: 'Can I change or upgrade my plan later?',
    a: 'Yes. You can move between Essential, Growth, and Advanced at any time as your business grows. Upgrades take effect immediately so you never lose access to the features you need.',
  },
  {
    q: 'What counts as a "store" for pricing?',
    a: 'Pricing is per store location per month. If you operate multiple stores or a franchise, the Growth and Advanced plans are built to manage all of your locations from a single account.',
  },
];

const Check = ({ className = 'w-5 h-5 text-rd-teal' }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

function Cell({ value }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check />
      </div>
    );
  }
  if (value === 'paid') {
    return (
      <div className="flex justify-center">
        <span className="text-xs font-semibold bg-rd-lime/30 text-rd-dark px-2.5 py-1 rounded-full">
          Paid Add-on
        </span>
      </div>
    );
  }
  return (
    <span className="font-dm-sans text-sm font-semibold text-rd-dark">{value}</span>
  );
}

function ComparisonTable({ title, subtitle, rows }) {
  return (
    <div className="mb-14 last:mb-0">
      <h3 className="font-poppins text-xl font-bold text-rd-dark mb-1">{title}</h3>
      {subtitle && <p className="font-dm-sans text-sm text-gray-500 mb-5">{subtitle}</p>}
      <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
        <table className="w-full min-w-[560px] bg-white">
          <thead>
            <tr className="bg-rd-cream">
              <th className="text-left font-poppins text-sm font-semibold text-rd-dark px-6 py-4">
                Feature
              </th>
              {plans.map((p) => (
                <th
                  key={p.name}
                  className={`text-center font-poppins text-sm font-semibold px-6 py-4 ${
                    p.highlight ? 'text-rd-teal' : 'text-rd-dark'
                  }`}
                >
                  {p.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? 'bg-white' : 'bg-rd-cream/40'}
              >
                <td className="font-dm-sans text-sm text-gray-700 px-6 py-4">{row.label}</td>
                {row.values.map((v, idx) => (
                  <td key={idx} className="px-6 py-4">
                    <Cell value={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-poppins font-semibold text-rd-dark text-sm">{q}</span>
        <svg
          className={`w-5 h-5 text-rd-teal flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <PageLayout>
      {/* Hero + Toggle */}
      <section className="bg-rd-cream pt-20 pb-14">
        <div className="container-main text-center">
          <h1 className="font-dm-serif text-4xl md:text-5xl text-rd-dark mb-4">
            Choose the plan that&rsquo;s right for you!
          </h1>
          <p className="font-dm-sans text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Feature-rich plans. Every size of business. All repair industries.
          </p>

          <div className="inline-flex items-center bg-white rounded-full p-1.5 shadow-sm border border-gray-100">
            <button
              onClick={() => setAnnual(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-poppins font-semibold transition-all ${
                !annual ? 'bg-rd-teal text-white shadow' : 'text-gray-500 hover:text-rd-dark'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-poppins font-semibold transition-all flex items-center gap-2 ${
                annual ? 'bg-rd-teal text-white shadow' : 'text-gray-500 hover:text-rd-dark'
              }`}
            >
              Annually
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  annual ? 'bg-rd-lime text-rd-dark' : 'bg-rd-lime/60 text-rd-dark'
                }`}
              >
                -20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white pt-4 pb-20">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? 'bg-rd-dark text-white shadow-2xl ring-2 ring-rd-teal md:scale-[1.03]'
                    : 'bg-white text-rd-dark border border-gray-200 shadow-md hover:shadow-xl'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 right-8 bg-rd-lime text-rd-dark text-xs font-poppins font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow">
                    {plan.badge}
                  </span>
                )}

                <h2
                  className={`font-poppins text-2xl font-bold mb-3 ${
                    plan.highlight ? 'text-white' : 'text-rd-dark'
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`font-dm-sans text-sm leading-relaxed mb-7 min-h-[70px] ${
                    plan.highlight ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-7 pb-7 border-b border-dashed border-white/20">
                  {plan.monthlyPrice ? (
                    <>
                      <p
                        className={`font-dm-sans text-xs uppercase tracking-wide font-semibold mb-1 ${
                          plan.highlight ? 'text-gray-400' : 'text-gray-400'
                        }`}
                      >
                        Starting from
                      </p>
                      <div className="flex items-end gap-1.5">
                        <span
                          className={`font-dm-serif text-5xl font-bold ${
                            plan.highlight ? 'text-white' : 'text-rd-dark'
                          }`}
                        >
                          ${annual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span
                          className={`text-sm mb-2 font-dm-sans ${
                            plan.highlight ? 'text-gray-300' : 'text-gray-500'
                          }`}
                        >
                          /store per month{annual ? ' (billed annually)' : ''}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <p
                        className={`font-dm-sans text-xs uppercase tracking-wide font-semibold mb-1 ${
                          plan.highlight ? 'text-gray-400' : 'text-gray-400'
                        }`}
                      >
                        Get a
                      </p>
                      <span
                        className={`font-dm-serif text-4xl font-bold ${
                          plan.highlight ? 'text-white' : 'text-rd-dark'
                        }`}
                      >
                        Custom Quote
                      </span>
                    </>
                  )}
                </div>

                <div
                  className={`flex items-center gap-2 mb-5 text-sm font-poppins font-semibold ${
                    plan.highlight ? 'text-rd-lime' : 'text-rd-teal'
                  }`}
                >
                  <Check className={`w-4 h-4 ${plan.highlight ? 'text-rd-lime' : 'text-rd-teal'}`} />
                  {plan.users}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.highlights.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-dm-sans">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-rd-lime' : 'text-rd-teal'}`} />
                      <span className={plan.highlight ? 'text-gray-200' : 'text-gray-700'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3.5 rounded-full font-poppins font-semibold text-sm transition-all ${
                    plan.highlight
                      ? 'bg-rd-lime text-rd-dark hover:bg-yellow-300'
                      : 'btn-primary'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="inline-block bg-rd-teal/10 text-rd-teal text-sm font-poppins font-semibold px-4 py-1.5 rounded-full mb-4">
              Compare Plans
            </span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-3">
              Workflow Management &amp; Automation
            </h2>
            <p className="font-dm-sans text-gray-600 max-w-xl mx-auto">
              See exactly what&rsquo;s included at every tier, from core repair workflows to advanced
              reporting and location management.
            </p>
          </div>

          <ComparisonTable title="Workflow Management &amp; Automation" rows={workflowRows} />
          <ComparisonTable
            title="Productivity &amp; Growth"
            subtitle="Tools that help your team move faster and keep customers coming back."
            rows={productivityRows}
          />
        </div>
      </section>

      {/* Integrations */}
      <section className="bg-white py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-3">Integrations</h2>
            <p className="font-dm-sans text-gray-600 max-w-xl mx-auto">
              Connect the payment processors, accounting tools, and platforms your repair business
              already runs on.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {integrations.map((name) => (
              <span
                key={name}
                className="bg-rd-cream text-rd-dark font-poppins font-semibold text-sm px-5 py-2.5 rounded-full border border-gray-200"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-dm-sans text-gray-600 max-w-xl mx-auto">
              Have a question about pricing or plans? Here&rsquo;s what our customers ask most.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rd-dark py-20">
        <div className="container-main text-center">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-white mb-4">
            Ready to get started?
          </h2>
          <p className="font-dm-sans text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Join thousands of repair shops worldwide who trust RepairHub to run their business
            every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="inline-block bg-rd-lime text-rd-dark font-semibold px-8 py-3.5 rounded-full hover:bg-yellow-300 transition-colors font-poppins"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="inline-block border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors font-poppins"
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
