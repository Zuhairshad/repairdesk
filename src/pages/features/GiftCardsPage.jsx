import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const faqs = [
  { q: 'Can my repair store customers redeem the expired gift cards?', a: 'No, it is not possible to redeem expired gift cards.' },
  { q: 'How can I print gift cards?', a: 'You can print gift cards through any receipt printer. The gift card print template in RepairDesk is completely customizable, which you can edit from Template Editor. For more information, please refer to our Knowledge Base article on Gift Cards.' },
  { q: 'Can I import/export my gift cards data?', a: 'Yes, you can export the existing data of your gift cards in an Excel spreadsheet easily from within the system. You can also import data in an Excel spreadsheet into your RepairDesk account, allowing for easy management of your gift card records.' },
  { q: 'Is it possible to refund the gift card being issued?', a: "The gift card issued to a customer can be refunded only before it has been redeemed. However, the payment processed through gift cards can only be refunded through cash. The refunded gift card will automatically be added back to your inventory with its status changed to 'Inactive'." },
  { q: 'Are there any automated emails and SMS that will be sent out for gift cards?', a: 'Yes, RepairDesk provides automated emails and SMS notifications which will be dispatched when a gift card has been issued, redeemed or refunded.' },
  { q: 'Will my customers earn loyalty points on purchasing gift cards?', a: "Yes. Loyalty points can be issued on selling gift cards, just like any other inventory item, only if you have enabled the trigger 'Issue loyalty on selling gift cards'. Remember, only those customers who are enrolled in your loyalty program will receive loyalty points when they purchase gift cards." },
  { q: 'Can store credits be issued on gift card refunds?', a: 'Yes, you can issue store credits to customers while refunding payment for any gift card.' },
];

export default function GiftCardsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Gift Cards for Repair Shops</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Boost Customer Retention with Digital & Plastic Gift Cards</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Increase brand awareness and drive repeat visits. Customers can redeem gift cards from any location or gift them to a loved one.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {[
              { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Boost Customer Retention By Offering Gift Cards', desc: 'Keep your customers coming back for more with Gift Cards. Your customers can easily redeem Gift Cards from any location or gift them to a loved one.' },
              { icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', title: 'Generate Revenue In Advance And Improve Cash Flow', desc: 'Generate additional revenue today for services provided in the future to improve cash flow. Gift cards are pre-paid value that you earn now and fulfill later.' },
              { icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z', title: 'Digital or Physical Gift Cards', desc: 'Issue digital gift cards via email or print physical cards through any receipt printer. The print template is fully customizable with your branding.' },
              { icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', title: 'Automated Notifications', desc: 'RepairDesk automatically sends email and SMS notifications when a gift card has been issued, redeemed, or refunded — keeping customers in the loop.' },
              { icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z', title: 'Loyalty Points on Gift Card Purchases', desc: "Customers enrolled in your loyalty program can earn loyalty points when they purchase gift cards — just like any other inventory item. Toggle it on with a single setting." },
              { icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', title: 'Import & Export Gift Card Data', desc: 'Export your gift card data to an Excel spreadsheet or import existing data into RepairDesk. Easy records management, no data silos.' },
            ].map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={f.icon}/></svg>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                </div>
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
