import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

const industries = [
  'Cell Phone Repair',
  'Computer Repair',
  'Tablet Repair',
  'Watch Repair',
  'Game Console Repair',
  'Appliance Repair',
  'Multi-Store / Franchise',
  'Mail-In Repair',
  'Refurbishment / Warranty Center',
  'Manufacturer Repair Depot',
  'Other',
];

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/repairdesk',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'Twitter / X',
    href: 'https://twitter.com/repairdesk',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/repairdesk',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/repairdesk',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/repairdesk',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

const addresses = [
  {
    label: 'US Office',
    address: '108 W 13th St Wilmington, DE 19801',
    mapHref: 'https://maps.google.com/?q=108+W+13th+St+Wilmington+DE+19801',
  },
  {
    label: 'PK Office',
    address: 'Floor A3, Suite 701,705, Jeff Heights Gulberg 3, Lahore, 54000',
    mapHref: 'https://maps.google.com/?q=Jeff+Heights+Gulberg+3+Lahore',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    industry: '',
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
      <section className="bg-rd-cream pt-20 pb-16">
        <div className="container-main text-center">
          <span className="inline-block bg-rd-teal/10 text-rd-teal text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h1 className="font-dm-serif text-4xl md:text-5xl text-rd-dark mb-4">
            Get In Touch
          </h1>
          <p className="font-dm-sans text-gray-600 text-lg max-w-2xl mx-auto">
            Fill out the form below and our representative will be in touch.
          </p>
        </div>
      </section>

      {/* Got Question? Contact Cards */}
      <section className="bg-white py-14">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="font-dm-serif text-2xl md:text-3xl text-rd-dark">Got a Question?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Email */}
            <a
              href="mailto:hello@repairdesk.co"
              className="group bg-rd-cream rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-11 h-11 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-4 group-hover:bg-rd-teal group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-xs text-gray-400 font-dm-sans uppercase tracking-widest mb-1">Email Us</div>
              <div className="font-poppins font-semibold text-rd-dark text-sm mb-0.5">hello@repairdesk.co</div>
              <div className="text-xs text-gray-500 font-dm-sans">We reply within 24 hours</div>
            </a>

            {/* US Address */}
            <a
              href="https://maps.google.com/?q=108+W+13th+St+Wilmington+DE+19801"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-rd-cream rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-11 h-11 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-4 group-hover:bg-rd-teal group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-xs text-gray-400 font-dm-sans uppercase tracking-widest mb-1">US Office</div>
              <div className="font-poppins font-semibold text-rd-dark text-sm mb-0.5">108 W 13th St</div>
              <div className="text-xs text-gray-500 font-dm-sans">Wilmington, DE 19801</div>
            </a>

            {/* PK Address */}
            <a
              href="https://maps.google.com/?q=Jeff+Heights+Gulberg+3+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-rd-cream rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-11 h-11 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-4 group-hover:bg-rd-teal group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-xs text-gray-400 font-dm-sans uppercase tracking-widest mb-1">PK Office</div>
              <div className="font-poppins font-semibold text-rd-dark text-sm mb-0.5">Jeff Heights Gulberg 3</div>
              <div className="text-xs text-gray-500 font-dm-sans">Lahore, 54000</div>
            </a>

            {/* Live Chat */}
            <div className="group bg-rd-cream rounded-2xl p-6 hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 cursor-pointer">
              <div className="w-11 h-11 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-4 group-hover:bg-rd-teal group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div className="text-xs text-gray-400 font-dm-sans uppercase tracking-widest mb-1">Live Chat</div>
              <div className="font-poppins font-semibold text-rd-dark text-sm mb-0.5">Chat with Support</div>
              <div className="text-xs text-gray-500 font-dm-sans">Available during business hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-rd-cream py-20">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-dm-serif text-2xl text-rd-dark mb-2">Send Us a Message</h2>
                <p className="font-dm-sans text-gray-500 text-sm mb-6">
                  Fill out the form below and our representative will be in touch.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-rd-teal/10 text-rd-teal rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-poppins font-bold text-rd-dark text-xl mb-2">Message Sent!</h3>
                    <p className="text-gray-500 font-dm-sans">
                      Thanks for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ fullName: '', email: '', company: '', phone: '', industry: '', message: '' });
                      }}
                      className="mt-6 btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-rd-dark mb-1.5 font-poppins">
                          Full Name <span className="text-rd-teal">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-rd-dark mb-1.5 font-poppins">
                          Email <span className="text-rd-teal">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-rd-dark mb-1.5 font-poppins">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Acme Repairs LLC"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-rd-dark mb-1.5 font-poppins">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-rd-dark mb-1.5 font-poppins">
                        Industry <span className="text-rd-teal">*</span>
                      </label>
                      <select
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm bg-white"
                      >
                        <option value="">Select your industry...</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-rd-dark mb-1.5 font-poppins">
                        Message <span className="text-rd-teal">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full py-3">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Office Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-poppins font-bold text-rd-dark mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Office Hours
                </h3>
                <div className="space-y-2 font-dm-sans text-sm">
                  {[
                    { days: 'Monday – Friday', hours: '9:00 AM – 6:00 PM EST' },
                    { days: 'Saturday', hours: '10:00 AM – 3:00 PM EST' },
                    { days: 'Sunday', hours: 'Closed' },
                  ].map(({ days, hours }) => (
                    <div key={days} className="flex justify-between text-gray-600">
                      <span className="font-medium text-rd-dark">{days}</span>
                      <span>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Chat promo */}
              <div className="bg-rd-teal rounded-2xl p-6 text-white">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="font-poppins font-bold mb-1">Live Chat Available</h3>
                <p className="text-white/80 text-sm font-dm-sans mb-4">
                  Get instant answers from our support team directly on any page.
                </p>
                <button className="bg-white text-rd-teal font-semibold text-sm px-4 py-2 rounded-full hover:bg-rd-lime transition-colors">
                  Start Chat
                </button>
              </div>

              {/* Connect with us - Social */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-poppins font-bold text-rd-dark mb-4">Connect with us</h3>
                <div className="flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      title={s.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-rd-cream rounded-full flex items-center justify-center text-rd-dark hover:bg-rd-teal hover:text-white transition-colors"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email direct */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-poppins font-bold text-rd-dark mb-2">Email Us Directly</h3>
                <a
                  href="mailto:hello@repairdesk.co"
                  className="text-rd-teal font-semibold font-dm-sans text-sm hover:underline"
                >
                  hello@repairdesk.co
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
