import React from 'react';

const PlayIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="currentColor" />
  </svg>
);

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0C3C3E 0%, #134e4a 100%)',
      }}
    >
      <div className="container-main section-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-10">
          {/* Left: text content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-dm-sans font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
              All-in-One Repair Shop{' '}
              <span className="gradient-text">Management Software</span>
            </h1>

            <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              #1 Cloud-based Point of Sale Repair Shop Software and Unified
              Communication Ecosystem to manage and grow your Repair
              Business.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#" className="btn-white w-full sm:w-auto">
                Start My Free Trial
              </a>
              <a href="#" className="btn-outline w-full sm:w-auto">
                See Pricing
              </a>
            </div>
          </div>

          {/* Right: image placeholder */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl bg-gradient-to-br from-rd-teal/40 via-rd-dark-teal/60 to-rd-dark/80 border border-white/10 shadow-2xl aspect-[4/3] flex items-center justify-center backdrop-blur-sm">
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,_rgba(212,244,121,0.15),_transparent_55%)]" />
              <div className="relative flex flex-col items-center gap-3 px-6 text-center">
                <span className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20">
                  <svg
                    className="w-8 h-8 text-rd-lime"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M8 21h8M12 18v3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <p className="font-poppins font-semibold text-white text-xl">
                  Complete Ecosystem
                </p>
                <p className="text-white/60 text-sm max-w-xs">
                  Dashboard preview placeholder — POS, tickets, inventory and
                  more in one platform.
                </p>
              </div>
            </div>

            {/* How it works link */}
            <div className="mt-6 flex justify-center lg:justify-start">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-rd-lime transition-colors"
              >
                <PlayIcon className="w-5 h-5" />
                How RepairDesk Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
