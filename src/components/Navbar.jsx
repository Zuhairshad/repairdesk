import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// ── NAV DATA ─────────────────────────────────────────────────────────────────

const productsData = {
  unified: [
    { label: 'Connect', sub: 'Manage emails, texts & social from one inbox', to: '/products/connect' },
    { label: 'Phone System', sub: 'Instant call notifications and missed call logs', to: '/products/phone-system' },
  ],
  revenue: [
    { label: 'Appointments Pro', sub: 'Let customers book from your website', to: '/products/appointments-pro' },
    { label: 'Work Order Management', sub: 'Create tickets, assign jobs, track status', to: '/products/work-order-management' },
    { label: 'Mail-in Repair', sub: 'Track and manage mail-in repair orders', to: '/products/mail-in-repair' },
    { label: 'RepairDesk Payments', sub: 'Accept in-person, contactless & online payments', to: '/products/payments' },
    { label: 'Reviews Management', sub: 'Automate review requests and get more 5-stars', to: '/products/reviews-management' },
    { label: 'Franchise Management', sub: 'Scale and manage multi-location franchises', to: '/products/franchise-management' },
  ],
};

const featuresData = {
  productivity: [
    { label: 'Point of Sale', to: '/features/point-of-sale' },
    { label: 'Repair Ticket Management', to: '/features/repair-ticket-management' },
    { label: 'Inventory Management', to: '/features/inventory-management' },
    { label: 'Billing & Invoicing', to: '/features/billing-invoicing' },
    { label: 'Employee Management', to: '/features/employee-management' },
    { label: 'Reporting', to: '/features/reporting' },
    { label: 'Clock-In and Clock-Out', to: '/features/clock-in-out' },
    { label: 'Self Check-In', to: '/features/self-check-in' },
  ],
  marketing: [
    { label: 'Marketing', to: '/features/marketing' },
    { label: 'Loyalty Program', to: '/features/loyalty-program' },
    { label: 'Store Credits', to: '/features/store-credits' },
    { label: 'Gift Cards', to: '/features/gift-cards' },
    { label: 'RepairDesk SMS', to: '/features/repairdesk-sms' },
  ],
  business: [
    { label: 'Customer Facing Display', to: '/features/customer-facing-display' },
    { label: 'Job Notifications', to: '/features/job-notifications' },
    { label: 'Multi Location Management', to: '/features/multi-location' },
  ],
};

const industriesData = [
  { label: 'Cell Phone Repair', to: '/industries/cell-phone-repair' },
  { label: 'Computer Repair', to: '/industries/computer-repair' },
  { label: 'Jewelry Repair', to: '/industries/jewelry-repair' },
  { label: 'Camera Repair', to: '/industries/camera-repair' },
  { label: 'Watch Repair', to: '/industries/watch-repair' },
  { label: 'Wireless Repair', to: '/industries/wireless-repair' },
  { label: 'Small Engine Repair', to: '/industries/small-engine-repair' },
  { label: 'Heavy Duty Repair', to: '/industries/heavy-duty-repair' },
  { label: 'Drone Repair', to: '/industries/drone-repair' },
  { label: 'Power Tools', to: '/industries/power-tools' },
  { label: 'Shoe Repair', to: '/industries/shoe-repair' },
  { label: 'Tailor Shop', to: '/industries/tailor-shop' },
];

const resourcesData = [
  { label: 'Blog', sub: 'Tips, tools, updates, and insights', to: '/blog' },
  { label: 'Knowledge Base', sub: 'Find guides and how-tos for RepairDesk', to: '/knowledge-base' },
  { label: 'Recommended Hardware', sub: 'Hardware that works best for your shop', to: '/recommended-hardware' },
  { label: 'Webinar', sub: 'Expert-led sessions to help you grow', to: '/webinar' },
  { label: 'Customer Success', sub: 'Browse RepairDesk success stories', to: '/customer-stories' },
  { label: 'Get In Touch', sub: 'Talk to our team', to: '/contact' },
];

// ── ICONS ─────────────────────────────────────────────────────────────────────

const ChevronIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const closeTimer = useRef(null);

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

  const open = (name) => { clearTimeout(closeTimer.current); setActiveDropdown(name); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setActiveDropdown(null), 250); };
  const closeAll = () => { clearTimeout(closeTimer.current); setActiveDropdown(null); setMobileOpen(false); setMobileAccordion(null); };
  const toggleMobile = (name) => setMobileAccordion(p => p === name ? null : name);

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        closeAll();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const NavBtn = ({ name, children }) => (
    <button
      type="button"
      onMouseEnter={() => open(name)}
      onMouseLeave={scheduleClose}
      onClick={() => {
        clearTimeout(closeTimer.current);
        setActiveDropdown(p => p === name ? null : name);
      }}
      className="flex items-center gap-1 text-[#2e384d] text-sm font-medium hover:text-rd-teal transition-colors py-2 whitespace-nowrap"
      aria-expanded={activeDropdown === name}
    >
      {children}
      <ChevronIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === name ? 'rotate-180' : ''}`} />
    </button>
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

          {/* PRODUCTS */}
          <div className="relative" onMouseEnter={() => open('products')} onMouseLeave={scheduleClose}>
            <NavBtn name="products">Products</NavBtn>
            {activeDropdown === 'products' && (
              <div
                className="absolute left-0 top-full pt-2 w-[560px] z-50"
                onMouseEnter={() => open('products')} onMouseLeave={scheduleClose}
              >
                <div className="rounded-2xl bg-white shadow-2xl border border-gray-100 p-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Unified Communication</p>
                      {productsData.unified.map(item => (
                        <Link key={item.label} to={item.to} onClick={closeAll}
                          className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors mb-1">
                          <span className="text-sm font-semibold text-rd-dark">{item.label}</span>
                          <span className="text-xs text-gray-400 leading-snug">{item.sub}</span>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Unlock Revenue</p>
                      {productsData.revenue.map(item => (
                        <Link key={item.label} to={item.to} onClick={closeAll}
                          className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors mb-1">
                          <span className="text-sm font-semibold text-rd-dark">{item.label}</span>
                          <span className="text-xs text-gray-400 leading-snug">{item.sub}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* FEATURES */}
          <div className="relative" onMouseEnter={() => open('features')} onMouseLeave={scheduleClose}>
            <NavBtn name="features">Features</NavBtn>
            {activeDropdown === 'features' && (
              <div
                className="fixed left-1/2 -translate-x-1/2 top-[56px] pt-3 w-[820px] max-w-[96vw] z-50"
                onMouseEnter={() => open('features')} onMouseLeave={scheduleClose}
              >
                <div className="rounded-2xl bg-white shadow-2xl border border-gray-100 p-8">
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Productivity</p>
                      {featuresData.productivity.map(item => (
                        <Link key={item.label} to={item.to} onClick={closeAll}
                          className="block text-sm text-gray-600 hover:text-rd-teal py-1.5 transition-colors">{item.label}</Link>
                      ))}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Marketing & Loyalty</p>
                      {featuresData.marketing.map(item => (
                        <Link key={item.label} to={item.to} onClick={closeAll}
                          className="block text-sm text-gray-600 hover:text-rd-teal py-1.5 transition-colors">{item.label}</Link>
                      ))}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Business Management</p>
                      {featuresData.business.map(item => (
                        <Link key={item.label} to={item.to} onClick={closeAll}
                          className="block text-sm text-gray-600 hover:text-rd-teal py-1.5 transition-colors">{item.label}</Link>
                      ))}
                    </div>
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

          {/* INDUSTRIES */}
          <div className="relative" onMouseEnter={() => open('industries')} onMouseLeave={scheduleClose}>
            <NavBtn name="industries">Industries</NavBtn>
            {activeDropdown === 'industries' && (
              <div
                className="absolute left-0 top-full pt-2 w-64 z-50"
                onMouseEnter={() => open('industries')} onMouseLeave={scheduleClose}
              >
                <div className="rounded-xl bg-white shadow-xl border border-gray-100 py-3">
                  <div className="grid grid-cols-2 gap-x-2 px-3">
                    {industriesData.map(item => (
                      <Link key={item.label} to={item.to} onClick={closeAll}
                        className="block text-xs text-gray-600 hover:text-rd-teal py-1.5 px-2 rounded hover:bg-gray-50 transition-colors">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* RESOURCES */}
          <div className="relative" onMouseEnter={() => open('resources')} onMouseLeave={scheduleClose}>
            <NavBtn name="resources">Resources</NavBtn>
            {activeDropdown === 'resources' && (
              <div
                className="absolute left-0 top-full pt-2 w-72 z-50"
                onMouseEnter={() => open('resources')} onMouseLeave={scheduleClose}
              >
                <div className="rounded-xl bg-white shadow-xl border border-gray-100 p-3">
                  {resourcesData.map(item => (
                    <Link key={item.label} to={item.to} onClick={closeAll}
                      className="flex flex-col gap-0.5 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-sm font-semibold text-rd-dark">{item.label}</span>
                      <span className="text-xs text-gray-400">{item.sub}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right CTA */}
        <div className="hidden xl:flex items-center gap-4 ml-4">
          <Link to="/login"
            className="text-[#2e384d] text-sm font-medium hover:text-rd-teal transition-colors whitespace-nowrap">
            Login
          </Link>
          <Link to="/contact"
            className="text-sm font-medium border border-rd-teal text-rd-teal px-5 py-2 rounded-full hover:bg-rd-teal hover:text-white transition-colors whitespace-nowrap">
            Request a Demo
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

      {/* Mobile Menu */}
      <div className={`xl:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen overflow-y-auto' : 'max-h-0'}`}>
        <div className="container-main py-4 space-y-1 font-dm-sans">
          {/* Products */}
          <div className="border-b border-gray-100">
            <button onClick={() => toggleMobile('products')} type="button"
              className="w-full flex items-center justify-between py-3 text-rd-dark font-semibold text-sm">
              Products <ChevronIcon className={`w-4 h-4 transition-transform ${mobileAccordion === 'products' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'products' ? 'max-h-[600px] pb-4' : 'max-h-0'}`}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 pl-2">Unified Communication</p>
              {productsData.unified.map(item => (
                <Link key={item.label} to={item.to} onClick={closeAll} className="block py-2 pl-4 text-sm text-gray-600 hover:text-rd-teal">{item.label}</Link>
              ))}
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-3 mb-2 pl-2">Unlock Revenue</p>
              {productsData.revenue.map(item => (
                <Link key={item.label} to={item.to} onClick={closeAll} className="block py-2 pl-4 text-sm text-gray-600 hover:text-rd-teal">{item.label}</Link>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="border-b border-gray-100">
            <button onClick={() => toggleMobile('features')} type="button"
              className="w-full flex items-center justify-between py-3 text-rd-dark font-semibold text-sm">
              Features <ChevronIcon className={`w-4 h-4 transition-transform ${mobileAccordion === 'features' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'features' ? 'max-h-[800px] pb-4' : 'max-h-0'}`}>
              {[['Productivity', featuresData.productivity], ['Marketing & Loyalty', featuresData.marketing], ['Business Management', featuresData.business]].map(([cat, items]) => (
                <div key={cat} className="mb-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 pl-2">{cat}</p>
                  {items.map(item => (
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
            <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'industries' ? 'max-h-96 pb-3' : 'max-h-0'}`}>
              {industriesData.map(item => (
                <Link key={item.label} to={item.to} onClick={closeAll} className="block py-1.5 pl-4 text-sm text-gray-600 hover:text-rd-teal">{item.label}</Link>
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
            <Link to="/login" onClick={closeAll} className="text-center border border-gray-200 rounded-full py-2.5 text-sm font-medium text-rd-dark">Login</Link>
            <Link to="/contact" onClick={closeAll} className="text-center border border-rd-teal text-rd-teal rounded-full py-2.5 text-sm font-medium">Request a Demo</Link>
            <Link to="/register" onClick={closeAll} className="btn-primary text-center py-2.5 text-sm">Start Free Trial</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
