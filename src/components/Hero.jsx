import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center py-16 md:py-24 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #0C3C3E 0%, #134e4a 50%, #0C3C3E 100%)',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 30% 40%, rgba(1,109,116,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="container-main relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left: text content — 55% */}
          <div className="w-full lg:w-[55%] text-center lg:text-left">
            <h1 className="font-poppins font-normal text-white text-[34px] md:text-[44px] lg:text-[54px] leading-[1.15]">
              All-in-One Repair Shop
              <br />
              Management Software
            </h1>

            <p className="mt-6 text-white/80 text-base md:text-lg lg:text-xl font-poppins font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              #1 Cloud-based Point of Sale Repair Shop Software and Unified
              Communication Ecosystem to manage and grow your Repair Business.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/register"
                className="btn-white text-base px-8 py-3.5 w-full sm:w-auto font-medium"
              >
                Start My Free Trial
              </Link>
              <Link
                to="/pricing"
                className="btn-outline text-base px-8 py-3.5 w-full sm:w-auto font-medium"
              >
                See Pricing
              </Link>
            </div>
          </div>

          {/* Right: ecosystem image — 45% */}
          <div className="w-full lg:w-[45%] flex flex-col items-center">
            <img
              src="/images/ecosystem.png"
              alt="Complete Ecosystem"
              className="w-full max-w-lg lg:max-w-none drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.35))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
