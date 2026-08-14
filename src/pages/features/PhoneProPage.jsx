import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const diagnosticTests = [
  { name: 'Battery Health', score: 92, color: '#22c55e', icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><rect x="6" y="4" width="12" height="17" rx="2" /><line x1="10" y1="1" x2="14" y2="1" /><rect x="8" y="10" width="8" height="9" rx="1" fill="currentColor" opacity=".25" /></svg>
  )},
  { name: 'Display & Touch', score: 100, color: '#22c55e', icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="18" r="1" fill="currentColor" /><path d="M9 8l2 2 4-4" /></svg>
  )},
  { name: 'Audio System', score: 85, color: '#eab308', icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14" /></svg>
  )},
  { name: 'Sensors', score: 97, color: '#22c55e', icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
  )},
  { name: 'Connectivity', score: 78, color: '#f97316', icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0M5.636 13.636a9 9 0 0112.728 0" /></svg>
  )},
];

const reportItems = [
  { label: 'Touchscreen Multi-touch', status: 'pass' },
  { label: 'Front Camera', status: 'pass' },
  { label: 'Rear Camera (Main)', status: 'pass' },
  { label: 'Face ID / Biometrics', status: 'pass' },
  { label: 'Charging Port', status: 'fail' },
  { label: 'Proximity Sensor', status: 'pass' },
  { label: 'GPS Signal', status: 'warn' },
  { label: 'Bluetooth Pairing', status: 'pass' },
];

const faqs = [
  { q: 'What devices does PhonePro support?', a: 'PhonePro supports a wide range of iOS devices (iPhone 6 and later) and Android devices from major manufacturers including Samsung, Google Pixel, OnePlus, Xiaomi, and more. We continuously add support for new models as they are released.' },
  { q: 'How long does a full diagnostic scan take?', a: 'A complete diagnostic scan covering all test categories typically takes 2 to 4 minutes depending on the device model. Individual tests like battery health or screen checks can be run in under 30 seconds each.' },
  { q: 'Can customers see the diagnostic results?', a: 'Yes. PhonePro generates a customer-facing diagnostic summary that you can print, email, or display on screen. This builds trust by showing customers exactly what was tested and the results, both before and after repair.' },
  { q: 'Does PhonePro integrate with RepairDesk repair tickets?', a: 'Absolutely. Diagnostic results are automatically linked to the corresponding repair ticket. Pre-repair and post-repair scans are stored side by side so you and your customer can see exactly what improved.' },
  { q: 'Do I need special hardware to run diagnostics?', a: 'No special hardware is required. PhonePro runs diagnostics through a software connection using a standard USB cable for the device being tested. Any computer or tablet running RepairDesk can initiate a scan.' },
];

function CircleProgress({ score, color, size = 80, strokeWidth = 6 }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" className="text-gray-200" strokeWidth={strokeWidth} />
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-700" />
    </svg>
  );
}

export default function PhoneProPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* ── Hero: Phone X-Ray Scanner ── */}
      <section className="relative bg-rd-dark overflow-hidden py-24 md:py-32">
        {/* Scan-line animation grid background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #fff 39px, #fff 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, #fff 39px, #fff 40px)' }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-rd-lime/30 to-transparent" />

        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Copy */}
            <div>
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] bg-rd-lime/15 text-rd-lime border border-rd-lime/30 px-4 py-1.5 rounded-full mb-6 font-poppins">
                PhonePro Diagnostics
              </span>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[3.4rem] text-white leading-[1.12] mb-6">
                See Inside Every Device Before You Repair It
              </h1>
              <p className="font-dm-sans text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                Automated phone diagnostics that test battery, screen, audio, sensors, and connectivity in minutes. Know exactly what is wrong and prove exactly what you fixed.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5 text-base">Start Free Trial</a>
                <Link to="/contact" className="border border-white/25 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/5 transition-colors text-base">Book a Demo</Link>
              </div>
            </div>

            {/* Right: Phone X-Ray SVG */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[260px] h-[460px]">
                {/* Phone outline */}
                <svg viewBox="0 0 260 460" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="244" height="444" rx="32" stroke="#3d405b" strokeWidth="2" fill="none" />
                  <rect x="16" y="50" width="228" height="370" rx="4" fill="#3d405b" fillOpacity="0.08" />
                  {/* Notch */}
                  <rect x="90" y="14" width="80" height="24" rx="12" fill="#3d405b" fillOpacity="0.25" />
                  {/* Internal components - X-ray style */}
                  {/* Battery */}
                  <rect x="30" y="280" width="90" height="120" rx="8" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 2" fill="#22c55e" fillOpacity="0.06" />
                  <text x="75" y="345" textAnchor="middle" fill="#22c55e" fontSize="9" fontFamily="sans-serif" opacity="0.8">BATTERY</text>
                  {/* Mainboard */}
                  <rect x="130" y="120" width="100" height="180" rx="6" stroke="#3d405b" strokeWidth="1" strokeDasharray="3 3" fill="#3d405b" fillOpacity="0.05" />
                  <circle cx="160" cy="180" r="14" stroke="#eab308" strokeWidth="1" fill="#eab308" fillOpacity="0.08" />
                  <text x="160" y="184" textAnchor="middle" fill="#eab308" fontSize="7" fontFamily="sans-serif">CPU</text>
                  <circle cx="200" cy="160" r="10" stroke="#06b6d4" strokeWidth="1" fill="#06b6d4" fillOpacity="0.08" />
                  <text x="200" y="163" textAnchor="middle" fill="#06b6d4" fontSize="6" fontFamily="sans-serif">RAM</text>
                  {/* Camera module */}
                  <circle cx="55" cy="90" r="18" stroke="#a78bfa" strokeWidth="1.5" fill="#a78bfa" fillOpacity="0.06" />
                  <circle cx="55" cy="90" r="8" stroke="#a78bfa" strokeWidth="1" fill="none" />
                  <text x="55" y="120" textAnchor="middle" fill="#a78bfa" fontSize="7" fontFamily="sans-serif" opacity="0.8">CAM</text>
                  {/* Speaker */}
                  <rect x="30" y="200" width="80" height="30" rx="4" stroke="#f97316" strokeWidth="1" strokeDasharray="3 2" fill="#f97316" fillOpacity="0.05" />
                  <text x="70" y="219" textAnchor="middle" fill="#f97316" fontSize="7" fontFamily="sans-serif" opacity="0.8">SPEAKER</text>
                  {/* Charging port */}
                  <rect x="100" y="430" width="60" height="12" rx="6" stroke="#3d405b" strokeWidth="1" fill="#3d405b" fillOpacity="0.15" />
                  {/* Antenna lines */}
                  <line x1="20" y1="60" x2="20" y2="180" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
                  <line x1="240" y1="60" x2="240" y2="180" stroke="#06b6d4" strokeWidth="0.5" opacity="0.3" />
                  {/* Scan line glow */}
                  <rect x="16" y="200" width="228" height="3" fill="url(#scanGlow)" opacity="0.6">
                    <animate attributeName="y" values="50;420;50" dur="4s" repeatCount="indefinite" />
                  </rect>
                  <defs>
                    <linearGradient id="scanGlow" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3d405b" stopOpacity="0" />
                      <stop offset="30%" stopColor="#B2F042" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#B2F042" stopOpacity="1" />
                      <stop offset="70%" stopColor="#B2F042" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3d405b" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Pulse dots on components */}
                <span className="absolute top-[58%] left-[22%] w-2 h-2 rounded-full bg-green-400 animate-ping" />
                <span className="absolute top-[18%] left-[18%] w-2 h-2 rounded-full bg-purple-400 animate-ping [animation-delay:0.5s]" />
                <span className="absolute top-[43%] left-[25%] w-2 h-2 rounded-full bg-orange-400 animate-ping [animation-delay:1s]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Diagnostic Suite Grid ── */}
      <section className="bg-rd-cream py-20 md:py-28">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">
              Five Tests. One Complete Picture.
            </h2>
            <p className="font-dm-sans text-gray-500 text-lg">
              Each diagnostic category runs a suite of automated checks and returns a health score so nothing gets overlooked.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {diagnosticTests.map((test) => (
              <div key={test.name} className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 group border border-gray-100">
                <div className="relative w-20 h-20 mx-auto mb-5">
                  <CircleProgress score={test.score} color={test.color} size={80} />
                  <span className="absolute inset-0 flex items-center justify-center font-poppins font-bold text-rd-dark text-lg">
                    {test.score}
                  </span>
                </div>
                <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-rd-teal/10 text-rd-teal flex items-center justify-center group-hover:bg-rd-teal group-hover:text-white transition-colors">
                  {test.icon}
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark text-sm">{test.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After Comparison ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-main">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">
              Pre-Repair vs Post-Repair
            </h2>
            <p className="font-dm-sans text-gray-500 text-lg">
              Run diagnostics before and after every repair. Side-by-side proof that your work made the difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Pre-Repair */}
            <div className="rounded-2xl border-2 border-dashed border-red-200 bg-red-50/40 p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="font-poppins font-semibold text-rd-dark text-lg">Pre-Repair Scan</span>
              </div>
              <div className="space-y-4">
                {[{ name: 'Battery Health', score: 61 }, { name: 'Display & Touch', score: 45 }, { name: 'Audio System', score: 30 }, { name: 'Sensors', score: 88 }, { name: 'Connectivity', score: 72 }].map(t => (
                  <div key={t.name}>
                    <div className="flex justify-between font-dm-sans text-sm text-gray-700 mb-1">
                      <span>{t.name}</span><span className="font-poppins font-semibold">{t.score}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${t.score}%`, backgroundColor: t.score >= 80 ? '#22c55e' : t.score >= 60 ? '#eab308' : '#ef4444' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-red-200 flex items-end justify-between">
                <span className="font-dm-sans text-sm text-gray-500">Overall Score</span>
                <span className="font-poppins font-bold text-3xl text-red-500">59%</span>
              </div>
            </div>

            {/* Post-Repair */}
            <div className="rounded-2xl border-2 border-green-200 bg-green-50/40 p-8 shadow-lg shadow-green-100/50">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="font-poppins font-semibold text-rd-dark text-lg">Post-Repair Scan</span>
              </div>
              <div className="space-y-4">
                {[{ name: 'Battery Health', score: 95 }, { name: 'Display & Touch', score: 100 }, { name: 'Audio System', score: 97 }, { name: 'Sensors', score: 99 }, { name: 'Connectivity', score: 94 }].map(t => (
                  <div key={t.name}>
                    <div className="flex justify-between font-dm-sans text-sm text-gray-700 mb-1">
                      <span>{t.name}</span><span className="font-poppins font-semibold">{t.score}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full rounded-full transition-all duration-500" style={{ width: `${t.score}%`, backgroundColor: '#22c55e' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-green-200 flex items-end justify-between">
                <span className="font-dm-sans text-sm text-gray-500">Overall Score</span>
                <span className="font-poppins font-bold text-3xl text-green-600">97%</span>
              </div>
            </div>
          </div>

          {/* Arrow connector between cards (visible md+) */}
          <div className="hidden md:flex justify-center -mt-[11.5rem] mb-[6rem] relative z-10 pointer-events-none">
            <div className="w-14 h-14 rounded-full bg-rd-teal text-white flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Diagnostic Report Mockup ── */}
      <section className="bg-rd-dark py-20 md:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-5 leading-tight">
                Detailed Reports Customers Can Trust
              </h2>
              <p className="font-dm-sans text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                Generate a professional diagnostic report for every device. Each component gets a clear pass, warning, or fail status so customers see exactly what was checked.
              </p>
              <ul className="space-y-3 font-dm-sans text-white/75 text-[15px]">
                {['Auto-attached to repair tickets', 'Email or print for customers', 'Stored for warranty reference', 'Branded with your shop name'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-rd-lime flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Report card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-sm mx-auto lg:ml-auto w-full">
              <div className="bg-rd-teal px-6 py-4 flex items-center justify-between">
                <div>
                  <div className="font-poppins font-bold text-white text-sm">PhonePro Report</div>
                  <div className="text-white/60 text-xs font-dm-sans mt-0.5">iPhone 14 Pro &mdash; 128 GB</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-white/50 font-dm-sans">Ticket #4821</div>
                  <div className="text-xs text-white/50 font-dm-sans">Aug 14, 2026</div>
                </div>
              </div>
              <div className="px-6 py-5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-gray-400 text-xs font-poppins uppercase tracking-wider">
                      <th className="pb-3">Component</th>
                      <th className="pb-3 text-right">Result</th>
                    </tr>
                  </thead>
                  <tbody className="font-dm-sans divide-y divide-gray-100">
                    {reportItems.map(item => (
                      <tr key={item.label}>
                        <td className="py-2.5 text-rd-dark">{item.label}</td>
                        <td className="py-2.5 text-right">
                          {item.status === 'pass' && (
                            <span className="inline-flex items-center gap-1 text-green-600 font-semibold text-xs">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                              Pass
                            </span>
                          )}
                          {item.status === 'fail' && (
                            <span className="inline-flex items-center gap-1 text-red-500 font-semibold text-xs">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                              Fail
                            </span>
                          )}
                          {item.status === 'warn' && (
                            <span className="inline-flex items-center gap-1 text-yellow-500 font-semibold text-xs">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M12 3l9.5 16.5H2.5L12 3z" /></svg>
                              Warn
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-6 py-3 flex justify-between items-center">
                <span className="text-xs text-gray-400 font-dm-sans">6 passed &middot; 1 warning &middot; 1 failed</span>
                <span className="text-xs font-poppins font-semibold text-rd-teal">75% Health</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Supported Devices ── */}
      <section className="bg-rd-cream py-20 md:py-24">
        <div className="container-main text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Works With the Phones You Repair</h2>
          <p className="font-dm-sans text-gray-500 text-lg mb-14 max-w-xl mx-auto">iOS and Android coverage across hundreds of models. If your customers bring it in, PhonePro can test it.</p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-14 mb-14">
            {/* Phone silhouettes with labels */}
            {[
              { label: 'iPhone', sub: '6 and later' },
              { label: 'Samsung', sub: 'Galaxy S/A/Z' },
              { label: 'Google', sub: 'Pixel series' },
              { label: 'OnePlus', sub: 'All models' },
              { label: 'Xiaomi', sub: 'Mi / Redmi' },
            ].map((device) => (
              <div key={device.label} className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-28 rounded-xl border-2 border-gray-300 group-hover:border-rd-teal transition-colors relative bg-white">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-gray-200" />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gray-200 group-hover:border-rd-teal transition-colors" />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-rd-dark text-sm">{device.label}</div>
                  <div className="font-dm-sans text-gray-400 text-xs">{device.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 border border-gray-200 text-sm font-dm-sans text-gray-500">
            <svg className="w-4 h-4 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            New models added with every update
          </div>
        </div>
      </section>

      {/* ── Trust Section ── */}
      <section className="bg-gradient-to-br from-rd-teal to-[#014a50] py-20 md:py-28">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-8">
              <svg className="w-8 h-8 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
              Transparent Repairs Build Trust
            </h2>
            <p className="font-dm-sans text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Customers question repair quality when they cannot see the results. PhonePro gives them a clear before-and-after diagnostic report, turning skepticism into loyalty. Shops using diagnostics report fewer disputes and more repeat customers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              {[
                { stat: '40%', label: 'Fewer repair disputes' },
                { stat: '2.5x', label: 'More repeat customers' },
                { stat: '< 4 min', label: 'Full scan completion' },
              ].map(s => (
                <div key={s.label} className="bg-white/10 backdrop-blur rounded-xl px-5 py-6">
                  <div className="font-poppins font-bold text-2xl md:text-3xl text-rd-lime mb-1">{s.stat}</div>
                  <div className="font-dm-sans text-white/60 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Accordion ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`rounded-xl border transition-colors duration-200 ${isOpen ? 'border-rd-teal bg-rd-teal/[0.03]' : 'border-gray-200'}`}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-poppins font-semibold text-rd-dark pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-rd-teal flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-6 pb-5 font-dm-sans text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
