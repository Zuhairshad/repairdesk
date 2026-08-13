import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Refund Customers Without Losing Money', desc: 'Offer store credits instead of refunds for repairs or returns. With store credits, you no longer have to lose money to refunds — the revenue stays in your store.' },
  { title: 'Never Lose A Customer To A Refund Again', desc: 'Ensure that your customers return to your repair store when you offer them store credits. Retain your customers and continue receiving their patronage.' },
  { title: 'Keep Customers Coming Back For More', desc: 'With store credits, your customers always have a reason to come back to your store. Incentivize their spending and reward their loyalty to you with credit they can choose to spend at a later date.' },
  { title: 'Use Credits for Trade-In Devices', desc: "Pay customers for their trade-in devices with store credits. This way you get to buy their devices plus they make more purchases with you — a win-win for both sides." },
  { title: 'Stack With Other Payment Methods', desc: 'Customers can split their payments between store credits and any other form of payment you accept — card, cash, loyalty points, and more.' },
  { title: 'Visible on POS Checkout Screen', desc: "The store credits for a customer are visible on the customer information section of your POS once you've selected them. No hunting through menus — just seamless checkout." },
];

const faqs = [
  { q: 'How long are your contracts?', a: 'We offer both, month to month and annual plans, to give you the most flexibility. You can always upgrade, downgrade or add locations as your business grows.' },
  { q: "How do I check for a customer's available store credits?", a: "The store credits for a customer will be visible on the customer information section of the POS once you've selected them, and in the Customer section of your RepairDesk account. You should be able to view their remaining store credits from here." },
  { q: 'Will customers be able to stack store credits with any other means of payment?', a: 'Yes. Customers can split their payments between store credits and any other form of payment that you accept.' },
  { q: 'Are there any extra charges to using the store credits feature?', a: 'The store credits feature is part of your subscription to the RepairDesk Enterprise package. If you would like to add store credits to your repair business, please consider signing up.' },
  { q: 'Is there an offline mode?', a: 'The RepairDesk iPad POS Register app has an Offline Mode that allows you to create tickets and invoices, collect cash payments and process customers when you do not have a reliable internet connection.' },
  { q: 'Do you offer customer support?', a: 'We have excellent customer support & you are always prioritized above anything and everything. If you ever run into a problem, you can give us a call, chat with one of our product specialists, or send us an email at support@repairdesk.co.' },
];

export default function StoreCreditsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Store Credits for Repair Shops</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Reduce Refunds and Encourage Customers to Come Back</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Stop losing money to refunds. Offer store credits instead — keep the revenue and keep the customer coming back for more.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-rd-cream py-12 px-6">
        <div className="container-main">
          <div className="bg-rd-dark text-white rounded-2xl p-8 max-w-3xl">
            <div className="text-rd-lime text-4xl font-dm-serif mb-3">"</div>
            <p className="text-white/90 font-dm-sans leading-relaxed mb-4 italic">Store Credits have been amazing for us. We use them to pay customers for their trade-in devices, so this way we get to buy their devices plus they make more purchases with us with the credits. Introducing product bundles is on my to-do list, so we're definitely excited to increase our sales with that one.</p>
            <p className="font-poppins font-semibold text-white">Andrew Frahm</p>
            <p className="text-white/50 text-xs font-poppins">Kixup Repairs</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Everything You Need to Stop Losing Money on Refunds</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">Turn a negative experience into a reason for customers to return. Store credits keep revenue in your shop and customers loyal.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-10">All the Answers You're Looking For</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button className="w-full flex items-center justify-between px-6 py-4 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {faq.q}<svg className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
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
