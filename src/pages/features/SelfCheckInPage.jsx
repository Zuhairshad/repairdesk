import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const benefits = [
  { title: 'Let Customers Check In With Ease', desc: 'Enjoy a faster and simpler checkout experience by splitting the load with the customer. Your customers can check in to your repair shop while you work on the task at hand.' },
  { title: 'Get Data Right From The Source', desc: 'Get precise and accurate data directly from your customers. Know who your customers are and how you can reach them for repairs — no data entry errors on your end.' },
  { title: 'Less Time Per Customer = More Customers', desc: 'Save up on the time spent with each customer, so you can serve more as they come in. With faster check-ins, you will take in more repairs from more customers in a single day.' },
  { title: 'Run Promotional Content on Display', desc: 'Display your store logo, advertisements, deals and promotions on the self check-in display. Turn your check-in screen into a marketing asset.' },
];

const faqs = [
  { q: 'Can I take digital signatures on Self Check-In?', a: 'No, you can only take digital signatures on customer facing display.' },
  { q: 'Which hardware can I use for Self Check-In?', a: 'You can use any hardware that has a browser, an internet connection and a touchscreen.' },
  { q: 'Are Customer Facing Display and Self Check-In the same?', a: 'No, they are not the same. The self check-in widget is exclusive of customer facing display, where the former can be added to the latter. It can also exist on its own, without the customer facing display.' },
  { q: 'Can my customer use their own device to Self Check-In?', a: 'No, self check-in can only be done on a pre-configured device.' },
  { q: 'Can I run promotional content on Self Check-In Display?', a: 'Yes, you can run your store logo, advertisements, deals and promotions on the self check-in display.' },
];

export default function SelfCheckInPage() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <PageLayout>
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">Self Check-In for Repair Shops</span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">Speed Up Check-In and Serve More Customers</h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">Let customers check themselves in while you focus on repairs. Collect accurate customer data right from the source — faster, smoother, and with no manual entry.</p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {benefits.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rd-cream py-12 px-6">
        <div className="container-main max-w-3xl">
          <div className="bg-rd-dark text-white rounded-2xl p-8">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-3">Case Study</span>
            <h3 className="font-poppins font-bold text-xl mb-4">How Bryan Holmes of iStation Increased Customer Engagement</h3>
            <div className="text-rd-lime text-4xl font-dm-serif mb-3">"</div>
            <p className="text-white/90 font-dm-sans leading-relaxed mb-4 italic">At iStation, customers can use the self check-in terminals to book their devices and save time. Up on the wall, in clear view, you can see the ticket counter display showing you the number of repair jobs in progress and the timeline of your device's diagnosis and repair.</p>
            <p className="font-poppins font-semibold text-white">Bryan Holmes</p>
            <p className="text-white/50 text-xs font-poppins">iStation</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-10">All the Answers You're Looking For</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
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
