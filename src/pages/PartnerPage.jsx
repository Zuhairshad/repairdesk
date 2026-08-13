import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import { Link } from 'react-router-dom';

const partnerTypes = [
  {
    title: 'Resellers',
    desc: 'Sell RepairDesk alongside your existing product suite. Earn recurring commissions on every customer you bring on board, with dedicated support from our partner team.',
    perks: ['Recurring revenue share', 'Co-branded marketing materials', 'Dedicated partner manager', 'Priority support queue'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    title: 'Integration Partners',
    desc: 'Build integrations between your platform and RepairDesk. Reach thousands of repair shops through our marketplace and grow your user base with a verified partner listing.',
    perks: ['API access and documentation', 'Partner marketplace listing', 'Joint product announcements', 'Technical integration support'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-3.18a4.5 4.5 0 00-1.242-7.244l4.5-4.5a4.5 4.5 0 016.364 6.364l-1.757 1.757" />
      </svg>
    ),
  },
  {
    title: 'Affiliate Partners',
    desc: 'Recommend RepairDesk to your audience through blog posts, videos, or social media and earn a commission for every paying customer that signs up through your link.',
    perks: ['Commission on every conversion', 'Affiliate tracking dashboard', 'Promotional assets and banners', 'Monthly payout via PayPal or bank transfer'],
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
];

const partnerBenefits = [
  { title: 'Grow Together', desc: 'Access a growing market of repair shop owners who need better tools. We bring the product — you bring the reach.' },
  { title: 'Dedicated Support', desc: 'Every partner gets a dedicated point of contact for onboarding, co-marketing campaigns, and technical questions.' },
  { title: 'Revenue Share', desc: 'Earn recurring commissions or one-time payouts depending on your partner type. No caps, no hidden terms.' },
  { title: 'Marketing Resources', desc: 'Get co-branded assets, case studies, and promotional content ready to share with your audience or clients.' },
  { title: 'Early Access', desc: 'Partner-tier access to new features, beta releases, and product roadmap updates before they go public.' },
  { title: 'Global Network', desc: 'Join a partner network that spans 120+ countries. Connect with other partners and repair shop communities worldwide.' },
];

export default function PartnerPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    partnerType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-20 md:py-28 px-6">
        <div className="container-main max-w-4xl text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
            Partners
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Partner With RepairDesk
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8 max-w-2xl mx-auto">
            Whether you resell software, build integrations, or create content for the repair industry — there is a partnership path that works for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#partner-form" className="btn-primary px-8 py-3.5">Become a Partner</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Talk to Us</Link>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 text-center">
            Choose Your Partnership Path
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 text-center max-w-2xl mx-auto">
            Three ways to partner with RepairDesk. Pick the one that fits your business and start earning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerTypes.map((type) => (
              <div key={type.title} className="bg-rd-cream rounded-2xl p-7 flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-rd-teal/10 text-rd-teal flex items-center justify-center mb-5">
                  {type.icon}
                </div>
                <h3 className="font-poppins font-bold text-rd-dark text-xl mb-3">{type.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed mb-5 flex-1">{type.desc}</p>
                <ul className="space-y-2">
                  {type.perks.map(perk => (
                    <li key={perk} className="flex items-center gap-2 text-sm text-gray-600 font-dm-sans">
                      <svg className="w-4 h-4 text-rd-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 text-center">
            Partner Benefits
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 text-center max-w-2xl mx-auto">
            Every RepairDesk partner gets access to tools, support, and revenue opportunities that grow with the relationship.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerBenefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-poppins font-bold text-rd-dark mb-2">{benefit.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="partner-form" className="bg-white py-16 px-6">
        <div className="container-main max-w-2xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-10 text-center">
            Tell us about your business and the partnership you are interested in. Our team will follow up within 48 hours.
          </p>

          <div className="bg-rd-cream rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-rd-teal/10 text-rd-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="font-poppins font-bold text-rd-dark text-xl mb-2">Application Received</h3>
                <p className="text-gray-500 font-dm-sans">Thank you for your interest. Our partnerships team will review your application and reach out within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-rd-dark mb-1.5 font-poppins">Full Name <span className="text-rd-teal">*</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-rd-dark mb-1.5 font-poppins">Email <span className="text-rd-teal">*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-rd-dark mb-1.5 font-poppins">Company Name</label>
                  <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="Your company" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-rd-dark mb-1.5 font-poppins">Partnership Type <span className="text-rd-teal">*</span></label>
                  <select name="partnerType" value={form.partnerType} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm">
                    <option value="">Select a partnership type...</option>
                    <option value="reseller">Reseller</option>
                    <option value="integration">Integration Partner</option>
                    <option value="affiliate">Affiliate Partner</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-rd-dark mb-1.5 font-poppins">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your business and how you would like to partner..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm resize-none" />
                </div>

                <button type="submit" className="btn-primary w-full py-3">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
