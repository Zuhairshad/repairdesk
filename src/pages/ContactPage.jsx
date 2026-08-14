import React, { useState, useEffect, useCallback } from 'react';
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

/* Simple text-based captcha generator */
function generateCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let code = '';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '',
    storeName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    industry: '',
    message: '',
    captchaInput: '',
  });
  const [captcha, setCaptcha] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const reloadCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setForm((f) => ({ ...f, captchaInput: '' }));
    setCaptchaError(false);
  }, []);

  useEffect(() => {
    reloadCaptcha();
  }, [reloadCaptcha]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === 'captchaInput') setCaptchaError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.captchaInput !== captcha) {
      setCaptchaError(true);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ fullName: '', storeName: '', email: '', countryCode: '+1', phone: '', industry: '', message: '', captchaInput: '' });
    reloadCaptcha();
    setSubmitted(false);
  };

  const countryCodes = [
    { code: '+1', flag: '🇺🇸', label: 'US' },
    { code: '+44', flag: '🇬🇧', label: 'UK' },
    { code: '+61', flag: '🇦🇺', label: 'AU' },
    { code: '+92', flag: '🇵🇰', label: 'PK' },
    { code: '+91', flag: '🇮🇳', label: 'IN' },
    { code: '+971', flag: '🇦🇪', label: 'AE' },
    { code: '+966', flag: '🇸🇦', label: 'SA' },
    { code: '+49', flag: '🇩🇪', label: 'DE' },
    { code: '+33', flag: '🇫🇷', label: 'FR' },
    { code: '+86', flag: '🇨🇳', label: 'CN' },
    { code: '+81', flag: '🇯🇵', label: 'JP' },
    { code: '+82', flag: '🇰🇷', label: 'KR' },
    { code: '+55', flag: '🇧🇷', label: 'BR' },
    { code: '+234', flag: '🇳🇬', label: 'NG' },
    { code: '+27', flag: '🇿🇦', label: 'ZA' },
  ];

  return (
    <PageLayout showCTA={false}>
      {/* Main Content — matches original layout */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — Contact Info */}
            <div>
              <h1 className="font-poppins font-bold text-4xl md:text-[42px] text-rd-dark leading-tight mb-4">
                Get In Touch
              </h1>
              <p className="text-gray-500 font-dm-sans text-lg mb-10">
                Email or call us. We'd love to hear from you
              </p>

              {/* Email */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-rd-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <a href="mailto:hello@repairhub.co" className="text-rd-dark font-poppins font-medium hover:text-rd-teal transition-colors">
                    hello@repairhub.co
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-rd-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="space-y-1">
                  <p className="text-rd-dark font-poppins font-medium">+1 302-207-7373</p>
                  <p className="text-rd-dark font-poppins font-medium">+61 485-920-730</p>
                  <p className="text-rd-dark font-poppins font-medium">+44 7446-205025</p>
                </div>
              </div>

              {/* US Address */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-rd-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-rd-dark font-poppins font-medium">108 W 13th St Wilmington, DE 19801</p>
                </div>
              </div>

              {/* PK Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-rd-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-rd-dark font-poppins font-medium">Floor A3, Suite 701,705, Jeff Heights Gulberg 3, Lahore, 54000</p>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-[#f8f8fb] rounded-2xl p-8 md:p-10 border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-rd-teal/10 text-rd-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-poppins font-bold text-rd-dark text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-500 font-dm-sans mb-6">Thanks for reaching out. Our team will get back to you shortly.</p>
                  <button onClick={handleReset} className="btn-primary">Send Another Message</button>
                </div>
              ) : (
                <>
                  <h2 className="font-poppins font-semibold text-rd-teal text-xl md:text-2xl mb-6 leading-snug">
                    Fill out the form below and our representative will be in touch
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Full Name*"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                    />

                    {/* Store Name */}
                    <input
                      type="text"
                      name="storeName"
                      value={form.storeName}
                      onChange={handleChange}
                      placeholder="Store Name*"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                    />

                    {/* Email */}
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Email*"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                    />

                    {/* Phone with country code */}
                    <div className="flex gap-0 rounded-lg border border-gray-200 bg-white overflow-hidden focus-within:ring-2 focus-within:ring-rd-teal/30">
                      <select
                        name="countryCode"
                        value={form.countryCode}
                        onChange={handleChange}
                        className="pl-3 pr-1 py-3 bg-white border-r border-gray-200 font-dm-sans text-sm focus:outline-none appearance-none min-w-[100px]"
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.flag} {c.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="flex-1 px-3 py-3 bg-white focus:outline-none font-dm-sans text-sm placeholder-gray-400"
                      />
                    </div>

                    {/* Industry */}
                    <select
                      name="industry"
                      value={form.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm text-gray-400"
                      style={form.industry ? { color: '#2e384d' } : {}}
                    >
                      <option value="">Select your Industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>

                    {/* Message */}
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="I would like to enquire about?"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm resize-none placeholder-gray-400"
                    />

                    {/* Captcha Input */}
                    <input
                      type="text"
                      name="captchaInput"
                      value={form.captchaInput}
                      onChange={handleChange}
                      required
                      placeholder="Enter the Captcha"
                      className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400 ${captchaError ? 'border-red-400' : 'border-gray-200'}`}
                    />
                    {captchaError && (
                      <p className="text-red-500 text-xs font-dm-sans -mt-2">Captcha does not match. Please try again.</p>
                    )}

                    {/* Captcha Display */}
                    <div className="flex flex-col items-center gap-2 py-2">
                      <div
                        className="select-none px-6 py-3 rounded-lg bg-gray-100 border border-gray-200"
                        style={{
                          fontFamily: 'Georgia, serif',
                          fontSize: '28px',
                          fontWeight: 'bold',
                          fontStyle: 'italic',
                          letterSpacing: '4px',
                          color: '#457b9d',
                          textDecoration: 'line-through',
                          textDecorationColor: '#ccc',
                        }}
                      >
                        {captcha}
                      </div>
                      <button
                        type="button"
                        onClick={reloadCaptcha}
                        className="text-rd-teal font-poppins font-semibold text-sm hover:underline"
                      >
                        Reload
                      </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 pt-2">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-8 py-2.5 rounded-full border border-gray-300 text-rd-dark font-poppins font-semibold text-sm hover:bg-gray-50 transition-colors"
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        className="btn-primary px-8 py-2.5 text-sm"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
