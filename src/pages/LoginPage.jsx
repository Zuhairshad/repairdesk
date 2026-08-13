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
            <img src="/images/logo.png" alt="RepairDesk" className="h-8" />
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
      <div className="hidden lg:flex w-1/2 bg-rd-teal relative items-center justify-center overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border-[3px] border-white/30 rounded-3xl rotate-12" />
          <div className="absolute bottom-20 right-10 w-48 h-48 border-[3px] border-white/20 rounded-3xl -rotate-6" />
          <div className="absolute top-1/2 left-1/3 w-80 h-16 bg-gradient-to-r from-white/20 to-transparent rounded-full -rotate-3" />
        </div>

        <div className="relative z-10 text-center max-w-md px-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <div className="w-5 h-5 bg-rd-teal rounded-full" />
            </div>
            <span className="text-white font-poppins font-bold text-2xl tracking-tight">RepairDesk</span>
          </div>

          {/* Support Notice Card */}
          <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h2 className="text-white font-poppins font-bold text-2xl mb-3">Support Notice</h2>
            <p className="text-white/80 font-dm-sans mb-4">
              Our technical support will be limited on
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 mb-4">
              <svg className="w-5 h-5 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span className="text-rd-lime font-poppins font-semibold text-sm">Friday, August 14, 2026</span>
            </div>
            <p className="text-white/80 font-dm-sans">
              We will be back to serve<br />our valued customers shortly.
            </p>
          </div>
        </div>

        {/* Person illustration placeholder — bottom right */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-tl-[80px]" />
      </div>
    </div>
  );
}
