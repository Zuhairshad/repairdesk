import React from 'react';
import { Link } from 'react-router-dom';

const PlayIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="16"
      cy="16"
      r="15"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M13 10.5L22 16L13 21.5V10.5Z" fill="currentColor" />
  </svg>
);

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0C3C3E 0%, #134e4a 50%, #0C3C3E 100%)',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 30% 40%, rgba(1,109,116,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="container-main relative z-10 pt-16 md:pt-20 lg:pt-24 pb-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-6">
          {/* Left: text content — 55% */}
          <div className="w-full lg:w-[55%] text-center lg:text-left pt-4 lg:pt-8">
            <h1 className="font-poppins font-normal text-white text-[32px] md:text-[38px] lg:text-[48px] leading-tight">
              All-in-One Repair Shop
              <br />
              Management Software
            </h1>

            <p className="mt-6 text-white/80 text-base md:text-lg font-poppins font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              #1 Cloud-based Point of Sale Repair Shop Software and Unified
              Communication Ecosystem to manage and grow your Repair Business.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#"
                className="btn-white text-base px-8 py-3 w-full sm:w-auto font-medium"
              >
                Start My Free Trial
              </a>
              <a
                href="#"
                className="btn-outline text-base px-8 py-3 w-full sm:w-auto font-medium"
              >
                See Pricing
              </a>
            </div>

            {/* How it works — visible on desktop below the buttons */}
            <div className="hidden lg:flex mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 text-white/90 font-poppins font-medium text-sm hover:text-white transition-colors group"
              >
                <PlayIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                How RepairDesk Works
              </a>
            </div>
          </div>

          {/* Right: ecosystem image — 45% */}
          <div className="w-full lg:w-[45%] flex flex-col items-center">
            <img
              src="/images/ecosystem.png"
              alt="Complete Ecosystem"
              className="w-full max-w-lg lg:max-w-none drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))',
              }}
            />

            {/* How it works — visible on mobile below the image */}
            <div className="flex lg:hidden mt-6 mb-6">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 text-white/90 font-poppins font-medium text-sm hover:text-white transition-colors group"
              >
                <PlayIcon className="w-7 h-7 group-hover:scale-110 transition-transform" />
                How RepairDesk Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
