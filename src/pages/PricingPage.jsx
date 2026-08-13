import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const plans = [
  {
    name: 'Essential',
    monthlyPrice: 99,
    annualPrice: 79,
    description: 'Perfectly suited for automating and managing operations in single-store repair businesses',
    badge: null,
    highlight: false,
    features: [
      '1 Store Location',
      'Unlimited Repair Tickets',
      'Point of Sale & Easy Checkout',
      'Repair Job Management & Tracking',
      'SMS and Email Notifications',
      'Inventory Control & Management',
      'Purchase & Returns Management',
      'Basic Business Reports',
      'Customer Management',
      'Appointment Scheduling',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    monthlyPrice: 149,
    annualPrice: 119,
    description: 'Designed for growing repair businesses with high volume sales. Built for multi-stores and franchises',
    badge: 'Most Popular',
    highlight: true,
    features: [
      'Up to 5 Users',
      'Multiple Store Locations',
      'Unlimited Repair Tickets',
      'Point of Sale & Easy Checkout',
      'Repair Job Management & Tracking',
      'SMS and Email Notifications',
      'Inventory Control & Management',
      'Purchase & Returns Management',
      'Advanced Business Reports',
      'Customer Facing Display & Signatures',
      'Employee Management',
      'Priority Support',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Advanced',
    monthlyPrice: null,
    annualPrice: null,
    description: 'Custom-built for mail-in repair, refurbishment warranty centers, and manufacturer repair depots',
    badge: null,
    highlight: false,
    features: [
      'Unlimited Tickets',
      'Unlimited Users',
      'Unlimited Store Locations',
      'Everything in Growth',
      'Mail-In Repair Management',
      'Refurbishment Workflows',
      'Warranty Center Tools',
      'Dedicated Account Manager',
      'Custom Onboarding',
      'API Access',
      'SLA Guarantee',
    ],
    cta: 'Contact Sales',
  },
];

const allPlansFeatures = [
  'Point of Sale & Easy Checkout System',
  'Cash Registers & Reconciliation Support',
  'Appointment Scheduling',
  'Repair Job Management & Tracking',
  'SMS and Email Notification',
  'Inventory Control & Management',
  'Purchase & Returns Management',
  'Basic Business Reports',
  'Printing Automation and Label Support',
  'Customer Facing Display and Signatures',
  'Employee Management',
];

const addOns = [
  'Workflows',
  'QuickBooks Online',
  'Zapier',
  'MailChimp',
  'Square Terminal',
  'PaymentSense',
  'M360 Diagnostics',
  'WooCommerce',
  'Avalara Integration',
  'Email Campaigns',
];

const faqs = [
  {
    q: 'Which pricing plan is right for me?',
    a: 'If you run a single-store repair shop, the Essential plan is a great fit. If you have multiple locations or a growing team, the Growth plan is designed for you. For mail-in repair centers or manufacturer depots, the Advanced plan is built specifically to handle those workflows.',
  },
  {
    q: 'How do I Get Started?',
    a: 'Simply click the "Get Started" or "Start Free Trial" button on your desired plan. You can sign up and start using RepairDesk immediately — no credit card required for the trial.',
  },
  {
    q: 'Are all the integrations available with each plan?',
    a: 'Some integrations are available as add-ons and may vary by plan. Core integrations like QuickBooks Online and Zapier are available on Growth and above. Contact our sales team for more details about specific integrations.',
  },
  {
    q: 'How does the pricing work?',
    a: 'RepairDesk offers monthly and annual billing. Annual billing gives you a significant discount compared to paying month-to-month. Prices shown are per store location per month.',
  },
  {
    q: 'How much does RepairDesk subscription cost?',
    a: 'The Essential plan starts at $99/month (or $79/month billed annually). The Growth plan is $149/month (or $119/month billed annually). For Advanced pricing, please contact our sales team for a custom quote.',
  },
  {
    q: 'Do you offer any discounted plans?',
    a: 'Yes! You can save by choosing annual billing — it gives you roughly 20% off compared to monthly billing. We also offer special pricing for nonprofits and educational institutions. Contact us for details.',
  },
  {
    q: 'Can I change plans?',
    a: 'Absolutely. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, and downgrades take effect at the start of your next billing period.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support bank transfers for annual plans. All payments are processed securely.',
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-rd-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-poppins font-semibold text-rd-dark text-sm pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-rd-teal flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
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
      {/* Hero */}
      <section className="bg-rd-cream pt-20 pb-16">
        <div className="container-main text-center">
          <span className="inline-block bg-rd-teal/10 text-rd-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Simple, Transparent Pricing
          </span>
          <h1 className="font-dm-serif text-4xl md:text-5xl text-rd-dark mb-4">
            Plans That Grow With Your Business
          </h1>
          <p className="font-dm-sans text-gray-600 text-lg max-w-2xl mx-auto mb-10">
            Whether you're a solo technician or managing a chain of stores, RepairDesk has the right plan for you.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-2 py-2 shadow-sm border border-gray-100">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !annual ? 'bg-rd-teal text-white shadow' : 'text-gray-500 hover:text-rd-dark'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
                annual ? 'bg-rd-teal text-white shadow' : 'text-gray-500 hover:text-rd-dark'
              }`}
            >
              Annual
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-rd-lime text-rd-dark">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-16">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 p-8 flex flex-col transition-shadow hover:shadow-xl ${
                  plan.highlight
                    ? 'border-rd-teal bg-rd-dark text-white shadow-2xl scale-105'
                    : 'border-gray-100 bg-white text-rd-dark shadow-md'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-rd-lime text-rd-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h2 className={`font-poppins text-xl font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-rd-dark'}`}>
                    {plan.name}
                  </h2>
                  <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="flex items-end gap-1">
                        <span className={`font-dm-serif text-5xl font-bold ${plan.highlight ? 'text-white' : 'text-rd-dark'}`}>
                          ${annual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                        <span className={`text-sm mb-2 ${plan.highlight ? 'text-gray-300' : 'text-gray-500'}`}>/mo</span>
                      </div>
                      {annual && (
                        <p className={`text-xs mt-1 ${plan.highlight ? 'text-rd-lime' : 'text-rd-teal'}`}>
                          Billed annually — save ${(plan.monthlyPrice - plan.annualPrice) * 12}/yr
                        </p>
                      )}
                      {!annual && (
                        <p className={`text-xs mt-1 ${plan.highlight ? 'text-gray-400' : 'text-gray-400'}`}>
                          Or ${plan.annualPrice}/mo billed annually
                        </p>
                      )}
                    </>
                  ) : (
                    <div className={`font-dm-serif text-2xl font-bold ${plan.highlight ? 'text-white' : 'text-rd-dark'}`}>
                      Custom Pricing
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckIcon />
                      <span className={plan.highlight ? 'text-gray-200' : 'text-gray-700'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-semibold text-sm transition-all ${
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

      {/* Included in All Plans */}
      <section className="bg-rd-cream py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-3">Included in All Plans</h2>
            <p className="font-dm-sans text-gray-600 max-w-xl mx-auto">
              Every RepairDesk plan comes with these powerful core features right out of the box.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {allPlansFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-gray-100">
                <CheckIcon />
                <span className="font-dm-sans text-sm text-rd-dark font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="bg-white py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-3">Powerful Add-Ons</h2>
            <p className="font-dm-sans text-gray-600 max-w-xl mx-auto">
              Extend RepairDesk with integrations and features tailored to your workflow.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {addOns.map((addon) => (
              <span
                key={addon}
                className="bg-rd-teal/10 text-rd-teal font-poppins font-semibold text-sm px-5 py-2.5 rounded-full border border-rd-teal/20"
              >
                {addon}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rd-cream py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mb-3">Frequently Asked Questions</h2>
            <p className="font-dm-sans text-gray-600 max-w-xl mx-auto">
              Have questions? We have answers. If you don't see what you're looking for, reach out to our team.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-rd-dark py-20">
        <div className="container-main text-center">
          <h2 className="font-dm-serif text-3xl md:text-4xl text-white mb-4">
            Get Started with the #1 Repair Shop POS
          </h2>
          <p className="font-dm-sans text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Join thousands of repair shops worldwide who trust RepairDesk to run their business every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-block bg-rd-lime text-rd-dark font-semibold px-8 py-3.5 rounded-full hover:bg-yellow-300 transition-colors font-poppins"
            >
              Start Free Trial
            </a>
            <a
              href="/contact"
              className="inline-block border border-white/40 hover:border-white text-white font-semibold px-8 py-3.5 rounded-full transition-colors font-poppins"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
