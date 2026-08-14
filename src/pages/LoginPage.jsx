import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only — no actual auth
  };

  return (
    <div className="min-h-screen flex">
      {/* Left — Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="inline-flex items-center gap-2 mb-10">
            <img src="/images/logo.png" alt="RepairHub" className="h-8" />
          </Link>

          <h1 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-2">
            Welcome Back!
          </h1>
          <p className="text-gray-500 font-dm-sans mb-8">Please login to your account.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-rd-dark mb-1.5 font-poppins">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-rd-dark mb-1.5 font-poppins">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rd-teal/30 font-dm-sans text-sm placeholder-gray-400"
              />
            </div>

            {/* Show password & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  className="w-4 h-4 rounded border-gray-300 text-rd-teal focus:ring-rd-teal"
                />
                <span className="text-sm text-gray-600 font-dm-sans">Show password</span>
              </label>
              <button type="button" className="text-sm text-rd-teal font-semibold font-poppins hover:underline">
                Forgot your password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-rd-teal text-white font-poppins font-semibold text-sm px-6 py-2.5 rounded-lg hover:bg-rd-dark transition-colors"
            >
              Login
            </button>
          </form>

          {/* Sign Up link */}
          <p className="mt-6 text-sm text-gray-600 font-dm-sans">
            Don't have an account?{' '}
            <Link to="/register" className="text-rd-teal font-semibold hover:underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>

      {/* Right — Branded Panel */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #3d405b 0%, #1e2035 100%)' }}>
        {/* Tropical leaf decorations — bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none">
          {/* Left palm leaf */}
          <svg className="absolute bottom-0 left-0 w-72 h-56 text-white/[0.07]" viewBox="0 0 300 230" fill="currentColor">
            <path d="M-20 230C10 180 50 140 100 120C70 160 60 190 50 230H-20Z" />
            <path d="M10 230C30 170 80 120 140 100C100 150 80 180 70 230H10Z" />
            <path d="M40 230C60 160 120 100 180 80C140 130 110 170 100 230H40Z" />
            <path d="M80 230C90 170 130 110 190 90C160 130 140 170 130 230H80Z" />
          </svg>
          {/* Right palm leaf */}
          <svg className="absolute bottom-0 right-0 w-72 h-56 text-white/[0.07] scale-x-[-1]" viewBox="0 0 300 230" fill="currentColor">
            <path d="M-20 230C10 180 50 140 100 120C70 160 60 190 50 230H-20Z" />
            <path d="M10 230C30 170 80 120 140 100C100 150 80 180 70 230H10Z" />
            <path d="M40 230C60 160 120 100 180 80C140 130 110 170 100 230H40Z" />
            <path d="M80 230C90 170 130 110 190 90C160 130 140 170 130 230H80Z" />
          </svg>
        </div>

        {/* Product Update Card */}
        <div className="relative z-10 w-full max-w-lg mx-8">
          <div className="bg-[#0a3a3d] rounded-2xl p-8 border border-white/10 shadow-2xl">
            {/* Card header — Logo + PRODUCT UPDATE badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-rd-teal rounded-full flex items-center justify-center border-2 border-white/20">
                  <div className="w-3.5 h-3.5 bg-white rounded-full" />
                </div>
                <span className="text-white font-poppins font-bold text-lg">RepairHub</span>
              </div>
              <span className="text-white text-xs font-poppins font-semibold tracking-wider border border-white/40 rounded-full px-4 py-1.5 uppercase">
                Product Update
              </span>
            </div>

            {/* Feature label + REVAMPED badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-rd-mint font-poppins font-bold text-sm tracking-wider uppercase">Inventory Transfer</span>
              <span className="bg-rd-lime/20 text-rd-mint text-[10px] font-poppins font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full">
                Revamped
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-white font-poppins font-bold text-2xl leading-snug mb-4">
              Sitting on extra stock at Store A while missing sales at Store B?
            </h2>

            {/* Description */}
            <p className="text-white/60 font-dm-sans text-sm leading-relaxed mb-6">
              Repair shops often re-order stock instead of transferring excess inventory to high-demand store locations.
            </p>

            {/* CTA text */}
            <p className="text-white font-poppins font-semibold text-lg mb-6">
              Send, request &amp; receive stock with<br />
              RepairHub <span className="text-rd-mint">Inventory Transfer</span>
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {['Simple, error-free transfers', 'Search or scan to add products', 'Bulk product selection interface', 'Real-time transfer status'].map((feature) => (
                <span
                  key={feature}
                  className="border border-white/30 text-white text-xs font-dm-sans px-4 py-2 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Watch Video Guide button */}
            <div className="text-center">
              <button className="border border-white/40 text-white font-poppins font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors">
                Watch Video Guide!
              </button>
            </div>

            {/* Pagination dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="w-2 h-2 bg-white rounded-full" />
              <div className="w-2 h-2 bg-white/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
