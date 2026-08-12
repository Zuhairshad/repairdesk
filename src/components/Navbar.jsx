import React, { useState, useEffect, useRef } from 'react';

const industriesLinks = [
  'Drone Repair',
  'Cellphone Repair',
  'Computer Repair',
  'Watch Repair & Restoration',
  'Jewelry Repair & Restoration',
];

const featureColumns = [
  {
    title: 'Attract Customers',
    subtitle: 'Get more customers with marketing and retention',
    items: [
      { label: 'Marketing' },
      { label: 'Appointments Pro', badge: 'NEW' },
      { label: 'Store Credits' },
      { label: 'Loyalty Program' },
      { label: 'Gift Cards' },
    ],
  },
  {
    title: 'Sell More',
    subtitle: 'Tools to help you sell more repairs and accessories',
    items: [
      { label: 'Point of Sale' },
      { label: 'Payments' },
      { label: 'Repairdesk Connect' },
      { label: 'PhonePro' },
      { label: 'Customer Facing Display' },
      { label: 'Google Reviews' },
    ],
  },
  {
    title: 'Increase Efficiency',
    subtitle: 'Reduce costs and optimize your store operations',
    items: [
      { label: 'Repair Ticket Management' },
      { label: 'Employee Management' },
      { label: 'Inventory' },
      { label: 'Billing and Invoices' },
      { label: 'Reporting' },
    ],
  },
];

const WrenchIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.3 2.3-2-2z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Logo = () => (
  <a href="/" className="flex items-center gap-2 shrink-0">
    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-rd-teal text-white">
      <WrenchIcon className="w-5 h-5" />
    </span>
    <span className="font-poppins font-bold text-2xl text-rd-dark">
      Repair<span className="text-rd-teal">Desk</span>
    </span>
  </a>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'industries' | 'features' | null
  const [mobileAccordion, setMobileAccordion] = useState(null); // 'industries' | 'features' | null
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const openDropdown = (name) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const toggleDropdownClick = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileAccordion = (name) => {
    setMobileAccordion((prev) => (prev === name ? null : name));
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <nav className="container-main flex items-center justify-between h-20">
        <Logo />

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-7 font-dm-sans">
          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown('industries')}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => toggleDropdownClick('industries')}
              className="flex items-center gap-1 text-rd-dark font-medium hover:text-rd-teal transition-colors py-2"
              aria-expanded={activeDropdown === 'industries'}
            >
              Industries
              <ChevronIcon
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'industries' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {activeDropdown === 'industries' && (
              <div className="absolute left-0 top-full mt-2 w-64 rounded-xl bg-white shadow-xl border border-gray-100 py-3 z-50">
                {industriesLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-5 py-2.5 text-sm text-rd-dark hover:bg-rd-cream hover:text-rd-teal transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Features mega dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown('features')}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => toggleDropdownClick('features')}
              className="flex items-center gap-1 text-rd-dark font-medium hover:text-rd-teal transition-colors py-2"
              aria-expanded={activeDropdown === 'features'}
            >
              Features
              <ChevronIcon
                className={`w-4 h-4 transition-transform ${
                  activeDropdown === 'features' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {activeDropdown === 'features' && (
              <div className="fixed left-1/2 -translate-x-1/2 top-20 mt-2 w-[900px] max-w-[92vw] rounded-2xl bg-white shadow-2xl border border-gray-100 p-8 z-50">
                <div className="grid grid-cols-3 gap-8">
                  {featureColumns.map((col) => (
                    <div key={col.title}>
                      <h4 className="font-poppins font-semibold text-rd-dark text-base mb-1">
                        {col.title}
                      </h4>
                      <p className="text-xs text-gray-500 mb-4 leading-snug">
                        {col.subtitle}
                      </p>
                      <ul className="space-y-2.5">
                        {col.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href="#"
                              className="flex items-center gap-2 text-sm text-rd-dark hover:text-rd-teal transition-colors"
                            >
                              {item.label}
                              {item.badge && (
                                <span className="bg-rd-lime text-rd-dark text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#"
            className="text-rd-dark font-medium hover:text-rd-teal transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-rd-dark font-medium hover:text-rd-teal transition-colors"
          >
            Integrations
          </a>
          <a
            href="#"
            className="text-rd-dark font-medium hover:text-rd-teal transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="#"
            className="text-rd-dark font-medium hover:text-rd-teal transition-colors"
          >
            Login
          </a>
          <a href="#" className="btn-primary text-sm px-6 py-2.5">
            Free Trial
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden flex items-center justify-center w-10 h-10 text-rd-dark"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile slide-down menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 ${
          mobileOpen ? 'max-h-[calc(100vh-5rem)] overflow-y-auto' : 'max-h-0'
        }`}
      >
        <div className="container-main py-4 flex flex-col gap-1 font-dm-sans">
          {/* Industries accordion */}
          <div className="border-b border-gray-100">
            <button
              type="button"
              onClick={() => toggleMobileAccordion('industries')}
              className="w-full flex items-center justify-between py-3.5 text-rd-dark font-medium"
            >
              Industries
              <ChevronIcon
                className={`w-4 h-4 transition-transform ${
                  mobileAccordion === 'industries' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileAccordion === 'industries' && (
              <div className="pb-3 pl-3 flex flex-col gap-2">
                {industriesLinks.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="py-1.5 text-sm text-gray-600 hover:text-rd-teal"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Features accordion */}
          <div className="border-b border-gray-100">
            <button
              type="button"
              onClick={() => toggleMobileAccordion('features')}
              className="w-full flex items-center justify-between py-3.5 text-rd-dark font-medium"
            >
              Features
              <ChevronIcon
                className={`w-4 h-4 transition-transform ${
                  mobileAccordion === 'features' ? 'rotate-180' : ''
                }`}
              />
            </button>
            {mobileAccordion === 'features' && (
              <div className="pb-4 pl-3 flex flex-col gap-5">
                {featureColumns.map((col) => (
                  <div key={col.title}>
                    <h4 className="font-poppins font-semibold text-rd-dark text-sm mb-2">
                      {col.title}
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-rd-teal"
                          >
                            {item.label}
                            {item.badge && (
                              <span className="bg-rd-lime text-rd-dark text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
                                {item.badge}
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a
            href="#"
            className="py-3.5 border-b border-gray-100 text-rd-dark font-medium"
          >
            Pricing
          </a>
          <a
            href="#"
            className="py-3.5 border-b border-gray-100 text-rd-dark font-medium"
          >
            Integrations
          </a>
          <a href="#" className="py-3.5 text-rd-dark font-medium">
            Get in Touch
          </a>

          <div className="flex flex-col gap-3 mt-4">
            <a
              href="#"
              className="text-center text-rd-dark font-medium py-2 border border-gray-200 rounded-full"
            >
              Login
            </a>
            <a href="#" className="btn-primary text-center">
              Free Trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
