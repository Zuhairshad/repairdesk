import React from 'react';

/**
 * RepairHub logo — self-contained SVG mark + Poppins wordmark.
 * No image files needed.
 *
 * dark=false (default) → dark navy wordmark  — use on light/white backgrounds
 * dark=true            → white wordmark       — use on dark/navy backgrounds
 *
 * Mark: filled wrench with bridge circle
 *   • Rounded navy square background
 *   • Open-end ring head (two concentric circles + jaw cut)
 *   • Thick diagonal line handle with rounded cap
 *   • Small bridge circle connecting ring to handle
 */
export default function Logo({ dark = false, className = 'h-8' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      style={{ height: 'inherit' }}
    >
      {/* ─── Icon mark ─── */}
      <svg
        viewBox="0 0 36 36"
        className="h-full w-auto shrink-0"
        fill="none"
        aria-hidden="true"
      >
        {/* Rounded square background */}
        <rect width="36" height="36" rx="8.5" fill="#3d405b" />

        {/* Head: open-end ring */}
        <circle cx="23" cy="12" r="8" fill="white" fillOpacity="0.93" />
        <circle cx="23" cy="12" r="4" fill="#3d405b" />

        {/* Jaw cut — masks left side to form open-end spanner */}
        <rect x="12" y="7.5" width="7.5" height="9" fill="#3d405b" />

        {/* Handle — thick diagonal line with rounded ends */}
        <line
          x1="19" y1="18"
          x2="8"  y2="29"
          stroke="white"
          strokeWidth="5.5"
          strokeLinecap="round"
          strokeOpacity="0.93"
        />

        {/* Bridge circle — smooth joint between ring and handle */}
        <circle cx="17.5" cy="19.5" r="3.5" fill="white" fillOpacity="0.93" />
        <circle cx="17.5" cy="19.5" r="0.8" fill="#3d405b" />
      </svg>

      {/* ─── Wordmark ─── */}
      <span
        className="font-poppins font-bold leading-none tracking-tight select-none"
        style={{ fontSize: '17px' }}
      >
        <span style={{ color: dark ? '#ffffff' : '#1e2035' }}>Repair</span>
        <span style={{ color: '#457b9d' }}>Hub</span>
      </span>
    </span>
  );
}
