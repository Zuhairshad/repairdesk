import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

// ── NAV DATA ─────────────────────────────────────────────────────────────────

const productsData = [
  { label: 'Connect', sub: 'Manage emails, texts & social from one inbox', to: '/products/connect', color: '#6366f1' },
  { label: 'Phone System', sub: 'Instant call notifications and missed call logs', to: '/products/phone-system', color: '#f97316' },
  { label: 'Appointments Pro', sub: 'Let customers book from your website', to: '/products/appointments-pro', color: '#10b981' },
  { label: 'Work Order Management', sub: 'Create tickets, assign jobs, track status', to: '/products/work-order-management', color: '#3b82f6' },
  { label: 'Mail-in Repair', sub: 'Track and manage mail-in repair orders', to: '/products/mail-in-repair', color: '#ec4899' },
  { label: 'RepairDesk Payments', sub: 'Accept in-person, contactless & online payments', to: '/products/payments', color: '#8b5cf6' },
  { label: 'Reviews Management', sub: 'Automate review requests and get more 5-stars', to: '/products/reviews-management', color: '#f59e0b' },
  { label: 'Franchise Management', sub: 'Scale and manage multi-location franchises', to: '/products/franchise-management', color: '#06b6d4' },
];

const featuresData = {
  productivity: {
    title: 'Productivity',
    items: [
      { label: 'Point of Sale', sub: 'Fast, intuitive POS for repair shops', to: '/features/point-of-sale' },
      { label: 'Repair Ticket Management', sub: 'Track jobs from intake to pickup', to: '/features/repair-ticket-management' },
      { label: 'Inventory Management', sub: 'Manage parts, serialized items & stock', to: '/features/inventory-management' },
      { label: 'Billing & Invoicing', sub: 'Professional invoices and billing', to: '/features/billing-invoicing' },
      { label: 'Employee Management', sub: 'Staff roles, schedules & commissions', to: '/features/employee-management' },
      { label: 'Reporting', sub: 'Sales, inventory & performance reports', to: '/features/reporting' },
      { label: 'Clock-In and Clock-Out', sub: 'Track employee hours and attendance', to: '/features/clock-in-out' },
      { label: 'Self Check-In', sub: 'Customers check in via tablet or kiosk', to: '/features/self-check-in' },
    ],
  },
  marketing: {
    title: 'Marketing & Loyalty',
    items: [
      { label: 'Marketing', sub: 'Automated campaigns to win repeat business', to: '/features/marketing' },
      { label: 'Loyalty Program', sub: 'Reward customers and boost retention', to: '/features/loyalty-program' },
      { label: 'Store Credits', sub: 'Issue and redeem in-store credits', to: '/features/store-credits' },
      { label: 'Gift Cards', sub: 'Sell and redeem custom gift cards', to: '/features/gift-cards' },
      { label: 'RepairDesk SMS', sub: 'Text customers updates and promos', to: '/features/repairdesk-sms' },
    ],
  },
  business: {
    title: 'Business Management',
    items: [
      { label: 'Customer Facing Display', sub: 'Show customers what they\'re paying for', to: '/features/customer-facing-display' },
      { label: 'Job Notifications', sub: 'Auto-notify customers on job status', to: '/features/job-notifications' },
      { label: 'Multi Location Management', sub: 'Manage all stores from one dashboard', to: '/features/multi-location' },
    ],
  },
  operations: {
    title: 'Operations',
    items: [
      { label: 'Appointments Pro', sub: 'Online booking and calendar sync', to: '/features/appointments-pro' },
      { label: 'Google Reviews', sub: 'Boost your Google review ratings', to: '/features/google-reviews' },
      { label: 'RepairDesk Payments', sub: 'Integrated payments for your shop', to: '/features/repairdesk-payments' },
      { label: 'Phone Pro', sub: 'Smart phone system for shops', to: '/features/phone-pro' },
      { label: 'RepairDesk Connect', sub: 'Unified inbox for all channels', to: '/features/repairdesk-connect' },
    ],
  },
};

const industriesData = [
  { label: 'Cell Phone Repair', sub: 'Software built for cell phone repair shops', to: '/industries/cell-phone-repair', icon: '📱' },
  { label: 'Computer Repair', sub: 'All-in-one for computer repair businesses', to: '/industries/computer-repair', icon: '💻' },
  { label: 'Jewelry Repair', sub: 'Manage jewelry repair with precision', to: '/industries/jewelry-repair', icon: '💎' },
  { label: 'Camera Repair', sub: 'Built for camera and lens repair shops', to: '/industries/camera-repair', icon: '📷' },
  { label: 'Watch Repair', sub: 'Track watch repairs from intake to pickup', to: '/industries/watch-repair', icon: '⌚' },
  { label: 'Wireless Repair', sub: 'Wireless device repair management', to: '/industries/wireless-repair', icon: '📡' },
  { label: 'Small Engine Repair', sub: 'Manage small engine repair orders', to: '/industries/small-engine-repair', icon: '⚙️' },
  { label: 'Heavy Duty Repair', sub: 'Track heavy equipment repairs', to: '/industries/heavy-duty-repair', icon: '🔧' },
  { label: 'Drone Repair', sub: 'Drone repair and parts tracking', to: '/industries/drone-repair', icon: '🚁' },
  { label: 'Power Tools', sub: 'Power tool repair management', to: '/industries/power-tools', icon: '🔨' },
  { label: 'Shoe Repair', sub: 'Software for shoe and leather repair', to: '/industries/shoe-repair', icon: '👟' },
  { label: 'Tailor Shop', sub: 'Manage tailoring and alterations', to: '/industries/tailor-shop', icon: '✂️' },
  { label: 'Bicycle Repair', sub: 'Track bicycle repairs and parts', to: '/industries/bicycle-repair', icon: '🚲' },
  { label: 'Mail-in Repair', sub: 'End-to-end mail-in repair workflow', to: '/industries/mail-in-repair', icon: '📦' },
];

const resourcesData = [
  { label: 'Blog', sub: 'Tips, tools, updates, and insights', to: '/blog' },
  { label: 'Knowledge Base', sub: 'Find guides and how-tos for RepairDesk', to: '/knowledge-base' },
  { label: 'Recommended Hardware', sub: 'Hardware that works best for your shop', to: '/recommended-hardware' },
  { label: 'Webinar', sub: 'Expert-led sessions to help you grow', to: '/webinar' },
  { label: 'Customer Stories', sub: 'Browse RepairDesk success stories', to: '/customer-stories' },
  { label: 'Get In Touch', sub: 'Talk to our team', to: '/contact' },
];

// ── ICONS ────────────────────────────────────────────────────────────────────

const ChevronIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* Product icon — small colored dot with initial */
const ProductIcon = ({ color, label }) => (
  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-white font-bold text-xs" style={{ backgroundColor: color }}>
    {label.charAt(0)}
  </div>
);

/* Feature icon — small teal circle with bullet */
const FeatureIcon = () => (
  <div className="w-1.5 h-1.5 rounded-full bg-rd-teal shrink-0 mt-[7px]" />
);

// ── COMPONENT ────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const closeTimer = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeAll = useCallback(() => {
    clearTimeout(closeTimer.current);
    setActiveDropdown(null);
    setMobileOpen(false);
    setMobileAccordion(null);
  }, []);

  const open = (name) => { clearTimeout(closeTimer.current); setActiveDropdown(name); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 250); };
  const toggleMobile = (name) => setMobileAccordion(p => p === name ? null : name);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) closeAll();
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeAll]);

  const NavBtn = ({ name, children }) => (
    <button
      type="button"
      onMouseEnter={() => open(name)}
      onMouseLeave={scheduleClose}
      onClick={() => { clearTimeout(closeTimer.current); setActiveDropdown(p => p === name ? null : name); }}
      className="flex items-center gap-1 text-[#2e384d] text-sm font-medium hover:text-rd-teal transition-colors py-2 whitespace-nowrap"
      aria-expanded={activeDropdown === name}
    >
      {children}
      <ChevronIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === name ? 'rotate-180' : ''}`} />
    </button>
  );

  /* Invisible hover-bridge between nav button and dropdown panel */
  const HoverBridge = () => (
    <div className="absolute left-0 right-0 top-full h-3" />
  );

  return (
    <header ref={navRef} className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-none'}`}>
      <nav className="container-main flex items-center justify-between h-16 md:h-[68px]">

        {/* Logo */}
        <Link to="/" onClick={closeAll} className="flex items-center shrink-0 mr-6">
          <img src="/images/logo.png" alt="RepairDesk" className="h-7 md:h-8" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-6 font-dm-sans flex-1">

          {/* ──────────── PRODUCTS ──────────── */}
          <div className="relative" onMouseEnter={() => open('products')} onMouseLeave={scheduleClose}>
            <NavBtn name="products">Products</NavBtn>
            <HoverBridge />
            {activeDropdown === 'products' && (
              <div
                className="fixed left-1/2 -translate-x-1/2 top-[60px] pt-3 z-50"
                style={{ width: '860px', maxWidth: '96vw' }}
                onMouseEnter={() => open('products')} onMouseLeave={scheduleClose}
              >
                <div className="rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden flex">
                  {/* Left — ARIA promo card */}
                  <div className="w-[240px] shrink-0 bg-gradient-to-br from-[#016D74] to-[#0C3C3E] p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"/></svg>
                        </div>
                        <span className="text-white font-poppins font-bold text-sm">ARIA</span>
                      </div>
                      <p className="text-white/90 text-xs leading-relaxed mb-4">
                        Meet ARIA — your AI-powered repair assistant. Automate workflows, predict parts needs, and delight customers.
                      </p>
                      {/* Fake waveform UI */}
                      <div className="flex items-end gap-[3px] h-8 mb-4 opacity-60">
                        {[40, 65, 30, 80, 55, 70, 35, 60, 45, 75, 50, 40, 65, 55, 70].map((h, i) => (
                          <div key={i} className="w-[3px] rounded-full bg-white/50" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                    </div>
                    <div className="text-[10px] text-white/50 font-dm-sans">Powered by AI</div>
                  </div>

                  {/* Right — product links in 3 columns */}
                  <div className="flex-1 p-6">
                    <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                      {productsData.map(item => (
                        <Link key={item.label} to={item.to} onClick={closeAll}
                          className="flex items-start gap-3 px-2 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group">
                          <ProductIcon color={item.color} label={item.label} />
                          <div className="min-w-0">
                            <span className="text-sm font-semibold text-rd-dark block group-hover:text-rd-teal transition-colors">{item.label}</span>
                            <span className="text-[11px] text-gray-400 leading-snug block">{item.sub}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ──────────── FEATURES ──────────── */}
          <div className="relative" onMouseEnter={() => open('features')} onMouseLeave={scheduleClose}>
            <NavBtn name="features">Features</NavBtn>
            <HoverBridge />
            {activeDropdown === 'features' && (
              <div
                className="fixed left-1/2 -translate-x-1/2 top-[60px] pt-3 z-50"
                style={{ width: '920px', maxWidth: '96vw' }}
                onMouseEnter={() => open('features')} onMouseLeave={scheduleClose}
              >
                <div className="rounded-2xl bg-white shadow-2xl border border-gray-100 p-7">
                  <div className="grid grid-cols-4 gap-6">
                    {Object.values(featuresData).map(cat => (
                      <div key={cat.title}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 font-poppins">{cat.title}</p>
                        <div className="space-y-1">
                          {cat.items.map(item => (
                            <Link key={item.label} to={item.to} onClick={closeAll}
                              className="flex items-start gap-2 py-1.5 rounded-lg hover:bg-gray-50 px-2 -mx-2 transition-colors group">
                              <FeatureIcon />
                              <div>
                                <span className="text-[13px] font-medium text-rd-dark block group-hover:text-rd-teal transition-colors leading-tight">{item.label}</span>
                                <span className="text-[11px] text-gray-400 leading-snug block">{item.sub}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PRICING */}
          <Link to="/pricing" className="text-[#2e384d] text-sm font-medium hover:text-rd-teal transition-colors whitespace-nowrap">
            Pricing
          </Link>

          {/* INTEGRATIONS */}
          <Link to="/integrations" className="text-[#2e384d] text-sm font-medium hover:text-rd-teal transition-colors whitespace-nowrap">
            Integrations
          </Link>

          {/* ──────────── INDUSTRIES ──────────── */}
          <div className="relative" onMouseEnter={() => open('industries')} onMouseLeave={scheduleClose}>
            <NavBtn name="industries">Industries</NavBtn>
            <HoverBridge />
            {activeDropdown === 'industries' && (
              <div
                className="fixed left-1/2 -translate-x-1/2 top-[60px] pt-3 z-50"
                style={{ width: '880px', maxWidth: '96vw' }}
                onMouseEnter={() => open('industries')} onMouseLeave={scheduleClose}
              >
                <div className="rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden flex">
                  {/* Left — industry grid */}
                  <div className="flex-1 p-6">
                    <div className="grid grid-cols-3 gap-x-4 gap-y-1">
                      {industriesData.map(item => (
                        <Link key={item.label} to={item.to} onClick={closeAll}
                          className="flex items-start gap-3 px-2 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group">
                          <span className="text-lg shrink-0 mt-0.5">{item.icon}</span>
                          <div className="min-w-0">
                            <span className="text-[13px] font-medium text-rd-dark block group-hover:text-rd-teal transition-colors">{item.label}</span>
                            <span className="text-[11px] text-gray-400 leading-snug block">{item.sub}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Right — award badges sidebar */}
                  <div className="w-[210px] shrink-0 bg-[#f8f8fb] border-l border-gray-100 p-5 flex flex-col justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 font-poppins">Trusted By</p>
                      <div className="space-y-4">
                        {[
                          { name: 'Capterra', count: '240+', stars: 5, color: '#FF9D28' },
                          { name: 'Trustpilot', count: '500+', stars: 5, color: '#00B67A' },
                          { name: 'Crozdesk', count: 'Leader', stars: 0, color: '#4F46E5' },
                          { name: 'Software Advice', count: 'Top Rated', stars: 0, color: '#FF6D2E' },
                        ].map(badge => (
                          <div key={badge.name} className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-md flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: badge.color }}>
                              {badge.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold text-rd-dark leading-none">{badge.name}</p>
                              <p className="text-[10px] text-gray-400">
                                {badge.stars > 0 && <span className="text-yellow-400">{'★'.repeat(badge.stars)} </span>}
                                {badge.count} reviews
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link to="/customer-stories" onClick={closeAll}
                      className="mt-4 text-rd-teal text-xs font-semibold hover:underline flex items-center gap-1">
                      Customer Success →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ──────────── RESOURCES ──────────── */}
          <div className="relative" onMouseEnter={() => open('resources')} onMouseLeave={scheduleClose}>
            <NavBtn name="resources">Resources</NavBtn>
            <HoverBridge />
            {activeDropdown === 'resources' && (
              <div
                className="absolute right-0 top-full pt-2 w-[300px] z-50"
                onMouseEnter={() => open('resources')} onMouseLeave={scheduleClose}
              >
                <div className="rounded-xl bg-white shadow-xl border border-gray-100 p-3">
                  {resourcesData.map(item => (
                    <Link key={item.label} to={item.to} onClick={closeAll}
                      className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors group">
                      <span className="text-sm font-semibold text-rd-dark group-hover:text-rd-teal transition-colors">{item.label}</span>
                      <span className="text-xs text-gray-400">{item.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right CTA */}
        <div className="hidden xl:flex items-center gap-3 ml-4">
          <Link to="/login"
            className="text-sm font-medium border border-gray-200 text-[#2e384d] px-5 py-2 rounded-full hover:border-rd-teal hover:text-rd-teal transition-colors whitespace-nowrap">
            Log in
          </Link>
          <Link to="/register"
            className="btn-primary text-sm px-5 py-2 whitespace-nowrap">
            Free Trial
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button type="button" onClick={() => setMobileOpen(p => !p)}
          className="xl:hidden w-10 h-10 flex items-center justify-center text-rd-dark rounded-lg hover:bg-gray-50"
          aria-label="Toggle menu">
          {mobileOpen
            ? <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
            : <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          }
        </button>
      </nav>

      {/* ──────────── MOBILE MENU ──────────── */}
      <div className={`xl:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen overflow-y-auto' : 'max-h-0'}`}>
        <div className="container-main py-4 space-y-1 font-dm-sans">

          {/* Products */}
          <div className="border-b border-gray-100">
            <button onClick={() => toggleMobile('products')} type="button"
              className="w-full flex items-center justify-between py-3 text-rd-dark font-semibold text-sm">
              Products <ChevronIcon className={`w-4 h-4 transition-transform ${mobileAccordion === 'products' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'products' ? 'max-h-[800px] pb-4' : 'max-h-0'}`}>
              {productsData.map(item => (
                <Link key={item.label} to={item.to} onClick={closeAll}
                  className="flex items-center gap-3 py-2.5 pl-2">
                  <ProductIcon color={item.color} label={item.label} />
                  <div>
                    <span className="text-sm font-medium text-rd-dark block">{item.label}</span>
                    <span className="text-xs text-gray-400">{item.sub}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="border-b border-gray-100">
            <button onClick={() => toggleMobile('features')} type="button"
              className="w-full flex items-center justify-between py-3 text-rd-dark font-semibold text-sm">
              Features <ChevronIcon className={`w-4 h-4 transition-transform ${mobileAccordion === 'features' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'features' ? 'max-h-[1200px] pb-4' : 'max-h-0'}`}>
              {Object.values(featuresData).map(cat => (
                <div key={cat.title} className="mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 pl-2">{cat.title}</p>
                  {cat.items.map(item => (
                    <Link key={item.label} to={item.to} onClick={closeAll} className="block py-1.5 pl-4 text-sm text-gray-600 hover:text-rd-teal">{item.label}</Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Link to="/pricing" onClick={closeAll} className="block py-3 border-b border-gray-100 text-sm font-semibold text-rd-dark">Pricing</Link>
          <Link to="/integrations" onClick={closeAll} className="block py-3 border-b border-gray-100 text-sm font-semibold text-rd-dark">Integrations</Link>

          {/* Industries */}
          <div className="border-b border-gray-100">
            <button onClick={() => toggleMobile('industries')} type="button"
              className="w-full flex items-center justify-between py-3 text-rd-dark font-semibold text-sm">
              Industries <ChevronIcon className={`w-4 h-4 transition-transform ${mobileAccordion === 'industries' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'industries' ? 'max-h-[600px] pb-3' : 'max-h-0'}`}>
              {industriesData.map(item => (
                <Link key={item.label} to={item.to} onClick={closeAll}
                  className="flex items-center gap-2 py-2 pl-3 text-sm text-gray-600 hover:text-rd-teal">
                  <span>{item.icon}</span> {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="border-b border-gray-100">
            <button onClick={() => toggleMobile('resources')} type="button"
              className="w-full flex items-center justify-between py-3 text-rd-dark font-semibold text-sm">
              Resources <ChevronIcon className={`w-4 h-4 transition-transform ${mobileAccordion === 'resources' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'resources' ? 'max-h-96 pb-3' : 'max-h-0'}`}>
              {resourcesData.map(item => (
                <Link key={item.label} to={item.to} onClick={closeAll} className="block py-1.5 pl-4 text-sm text-gray-600 hover:text-rd-teal">{item.label}</Link>
              ))}
            </div>
          </div>

          <div className="pt-4 pb-2 flex flex-col gap-3">
            <Link to="/login" onClick={closeAll} className="text-center border border-gray-200 rounded-full py-2.5 text-sm font-medium text-rd-dark hover:border-rd-teal hover:text-rd-teal transition-colors">Log in</Link>
            <Link to="/register" onClick={closeAll} className="btn-primary text-center py-2.5 text-sm">Start Free Trial</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
