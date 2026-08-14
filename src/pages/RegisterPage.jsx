import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const industries = [
  'Cell Phone Repair',
  'Computer Repair',
  'Tablet Repair',
  'Watch Repair',
  'Game Console Repair',
  'Appliance Repair',
  'Multi-Store / Franchise',
  'Mail-In Repair',
  'Other',
];

export default function RegisterPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    storeName: '',
    phone: '',
    password: '',
    confirmPassword: '',
    industry: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only — no actual registration
  };

  return (
    <div className="min-h-screen flex">
      {/* Left — Branded Panel */}
      <div className="hidden lg:flex w-1/2 bg-rd-teal relative items-center justify-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 right-16 w-72 h-72 border-[3px] border-white/30 rounded-3xl -rotate-12" />
          <div className="absolute bottom-24 left-16 w-56 h-56 border-[3px] border-white/20 rounded-3xl rotate-6" />
          <div className="absolute top-1/3 right-1/4 w-80 h-16 bg-gradient-to-l from-white/20 to-transparent rounded-full rotate-3" />
        </div>

        <div className="relative z-10 text-center max-w-md px-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-rd-teal rounded-full" />
            </div>
            <span className="text-white font-poppins font-bold text-2xl tracking-tight">RepairHub</span>
          </div>

          <h2 className="text-white font-poppins font-bold text-3xl mb-4">
            Start Your Free Trial
          </h2>
          <p className="text-white/80 font-dm-sans text-lg mb-8 leading-relaxed">
            Join thousands of repair shops using RepairHub to streamline their business.
          </p>

          {/* Feature bullets */}
          <div className="space-y-4 text-left max-w-xs mx-auto">
            {[
              'No credit card required',
              '14-day free trial',
              'Full access to all features',
              'Cancel anytime',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-rd-lime/20 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white/90 font-dm-sans text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-tr-[80px]" />
      </div>

      {/* Right — Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <img src="/images/logo.png" alt="RepairHub" className="h-8" />
          </Link>

          <h1 className="font-poppins font-bold text-3xl text-rd-dark mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-500 font-dm-sans mb-6">Start your 14-day free trial today.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-rd-dark mb-1 font-poppins">Full Name*</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-rd-dark mb-1 font-poppins">Store Name*</label>
                <input
                  type="text"
                  name="storeName"
                  value={form.storeName}
                  onChange={handleChange}
                  required
                  placeholder="My Repair Shop"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-rd-dark mb-1 font-poppins">Email*</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-rd-dark mb-1 font-poppins">Phone</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-rd-dark mb-1 font-poppins">Industry</label>
              <select
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm"
                style={form.industry ? { color: '#2e384d' } : { color: '#9ca3af' }}
              >
                <option value="">Select your industry</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-rd-dark mb-1 font-poppins">Password*</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="Create password"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-rd-dark mb-1 font-poppins">Confirm*</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm password"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
                className="w-4 h-4 rounded border-gray-300 text-rd-teal focus:ring-rd-teal"
              />
              <span className="text-sm text-gray-600 font-dm-sans">Show password</span>
            </label>

            <button
              type="submit"
              className="w-full bg-rd-teal text-white font-poppins font-semibold text-sm py-3 rounded-lg hover:bg-rd-dark transition-colors"
            >
              Start Free Trial
            </button>

            <p className="text-xs text-gray-400 font-dm-sans text-center">
              By signing up, you agree to our{' '}
              <Link to="/terms-conditions" className="text-rd-teal hover:underline">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy-policy" className="text-rd-teal hover:underline">Privacy Policy</Link>.
            </p>
          </form>

          <p className="mt-5 text-sm text-gray-600 font-dm-sans text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-rd-teal font-semibold hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
