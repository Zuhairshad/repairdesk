import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const features = [
  { title: 'Keep Customers Coming Back', desc: 'Get customers to come back by rewarding them for repeat behavior. Keep the ones you already have and give new shoppers a solid reason to ditch your competition.' },
  { title: 'Turn One-Time Visitors Into Loyal Customers', desc: "Let your customers get the best value from you so they keep coming back for more. With your own repair shop loyalty program, you'll be able to retain customers better and have them visit your store more often." },
  { title: 'Make Customers Feel Special With Rewards', desc: 'Reward your customers for their loyalty to your repair shop. Each time you make a sale, they get loyalty points that help them pay for more in the future. Win-win for both you and your customers.' },
  { title: 'Email & SMS Notifications', desc: 'Inform your customers every time they earn or redeem loyalty points with automated email and SMS notifications sent directly to them.' },
  { title: 'Lightning Fast Enrollment', desc: 'Enroll customers in your loyalty program directly from the checkout screen without the need to navigate away. Quick, seamless, and no disruption to your flow.' },
  { title: 'Split Payments With Points', desc: 'Customers can split their payments between loyalty points and any other form of payment you accept — cash, card, store credits, and more.' },
];

const faqs = [
  { q: 'How long are your contracts?', a: 'We offer both, month to month and annual plans, to give you the most flexibility. You can always upgrade, downgrade or add locations as your business grows.' },
  { q: 'I am a startup, do you have a cheaper plan for me?', a: "If you're a budding company looking to branch out, we've got the Essential plan for you. If you'd like more features, you can sign up for our Growth plan instead. RepairDesk offers you plans that are highly affordable and pack the most utility for your business." },
  { q: "How do I check for a customer's available loyalty points?", a: "The loyalty points for a customer will be visible on the customer information section of the POS once you've selected them, and in the Customer section of your RepairDesk account." },
  { q: 'Will customers be able to stack loyalty points with any other means of payment?', a: 'Yes. Customers can split their payments between loyalty points and any other form of payment that you accept.' },
  { q: 'Will my customers receive confirmation on their purchase?', a: "Yes. RepairDesk tracks and monitors all purchases made, and your customers will receive an invoice in their email and on their registered number once a transaction goes through. They will also be able to see how many loyalty points they spent on the purchase." },
  { q: 'Are there any extra charges to using the loyalty program feature?', a: 'The loyalty program feature is part of your subscription to the RepairDesk Enterprise package. If you would like to add the loyalty program to your repair business, please consider signing up.' },
];

export default function LoyaltyProgramPage() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Loyalty Program for Repair Shops</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Build Your Customer Database, Grow Repeat Business</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Increase lifetime value with a loyalty program that rewards customers for every repair, every purchase, every visit — automatically.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Make More Money by Keeping the Customers You Already Have</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">Retention is more profitable than acquisition. Give customers a reason to come back with a loyalty program built right into your POS.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
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
