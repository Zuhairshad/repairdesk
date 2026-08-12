import React, { useState, useEffect, useRef } from 'react';

const industriesLinks = [
  { label: 'Drone Repair', icon: '/images/icon-drone.png' },
  { label: 'Cellphone Repair', icon: '/images/icon-mobile.png' },
  { label: 'Computer Repair', icon: '/images/icon-laptop.png' },
  { label: 'Watch Repair & Restoration', icon: '/images/icon-watch.png' },
  { label: 'Jewelry Repair & Restoration', icon: '/images/icon-ring.png' },
];

const featureColumns = [
  {
    icon: '/images/feat-attract.svg',
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
    icon: '/images/feat-sell.svg',
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
    icon: '/images/feat-efficiency.svg',
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 180);
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
      <nav className="container-main flex items-center justify-between h-[72px] md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0">
          <img
            src="/images/logo.png"
            alt="RepairDesk"
            className="h-8 md:h-10"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8 font-dm-sans">
          {/* Industries dropdown */}
          <div
            className="relative"
            onMouseEnter={() => openDropdown('industries')}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => toggleDropdownClick('industries')}
              className="flex items-center gap-1 text-[#2e384d] font-normal text-base hover:text-rd-teal transition-colors py-2"
              aria-expanded={activeDropdown === 'industries'}
            >
              Industries
              <ChevronIcon
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'industries' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {activeDropdown === 'industries' && (
              <div className="absolute left-0 top-full mt-2 w-72 rounded-xl bg-white shadow-xl border border-gray-100 py-2 z-50 animate-fadeIn">
                {industriesLinks.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-rd-teal transition-colors"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="w-6 h-6 object-contain"
                    />
                    {item.label}
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
              className="flex items-center gap-1 text-[#2e384d] font-normal text-base hover:text-rd-teal transition-colors py-2"
              aria-expanded={activeDropdown === 'features'}
            >
              Features
              <ChevronIcon
                className={`w-4 h-4 transition-transform duration-200 ${
                  activeDropdown === 'features' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {activeDropdown === 'features' && (
              <div
                className="fixed left-1/2 -translate-x-1/2 top-20 mt-2 w-[880px] max-w-[94vw] rounded-2xl bg-white shadow-2xl border border-gray-100 p-8 z-50 animate-fadeIn"
                onMouseEnter={() => openDropdown('features')}
                onMouseLeave={scheduleClose}
              >
                <div className="grid grid-cols-3 gap-8">
                  {featureColumns.map((col) => (
                    <div key={col.title}>
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={col.icon}
                          alt=""
                          className="w-8 h-8 object-contain"
                        />
                        <h4 className="font-poppins font-semibold text-[#2e384d] text-[15px] leading-tight">
                          {col.title}
                        </h4>
                      </div>
                      <p className="text-xs text-gray-400 mb-4 leading-snug pl-11">
                        {col.subtitle}
                      </p>
                      <ul className="space-y-2.5 pl-11">
                        {col.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href="#"
                              className="flex items-center gap-2 text-sm text-gray-600 hover:text-rd-teal transition-colors"
                            >
                              {item.label}
                              {item.badge && (
                                <span className="bg-rd-lime text-rd-dark text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full leading-none">
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
            className="text-[#2e384d] font-normal text-base hover:text-rd-teal transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-[#2e384d] font-normal text-base hover:text-rd-teal transition-colors"
          >
            Integrations
          </a>
          <a
            href="#"
            className="text-[#2e384d] font-normal text-base hover:text-rd-teal transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Right side actions */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="#"
            className="text-[#2e384d] font-normal text-base hover:text-rd-teal transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="btn-primary text-sm px-7 py-2.5 whitespace-nowrap"
          >
            Free Trial
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden flex items-center justify-center w-10 h-10 text-[#2e384d] rounded-lg hover:bg-gray-50 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg
              className="w-6 h-6"
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
              className="w-6 h-6"
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
              className="w-full flex items-center justify-between py-3.5 text-[#2e384d] font-medium text-[15px]"
            >
              Industries
              <ChevronIcon
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileAccordion === 'industries' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileAccordion === 'industries' ? 'max-h-96 pb-3' : 'max-h-0'
              }`}
            >
              <div className="pl-3 flex flex-col gap-1">
                {industriesLinks.map((item) => (
                  <a
                    key={item.label}
                    href="#"
                    className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-rd-teal transition-colors"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Features accordion */}
          <div className="border-b border-gray-100">
            <button
              type="button"
              onClick={() => toggleMobileAccordion('features')}
              className="w-full flex items-center justify-between py-3.5 text-[#2e384d] font-medium text-[15px]"
            >
              Features
              <ChevronIcon
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileAccordion === 'features' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileAccordion === 'features'
                  ? 'max-h-[600px] pb-4'
                  : 'max-h-0'
              }`}
            >
              <div className="pl-3 flex flex-col gap-5">
                {featureColumns.map((col) => (
                  <div key={col.title}>
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src={col.icon}
                        alt=""
                        className="w-6 h-6 object-contain"
                      />
                      <h4 className="font-poppins font-semibold text-[#2e384d] text-sm">
                        {col.title}
                      </h4>
                    </div>
                    <ul className="flex flex-col gap-2 pl-8">
                      {col.items.map((item) => (
                        <li key={item.label}>
                          <a
                            href="#"
                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-rd-teal transition-colors"
                          >
                            {item.label}
                            {item.badge && (
                              <span className="bg-rd-lime text-rd-dark text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full leading-none">
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
          </div>

          <a
            href="#"
            className="py-3.5 border-b border-gray-100 text-[#2e384d] font-medium text-[15px]"
          >
            Pricing
          </a>
          <a
            href="#"
            className="py-3.5 border-b border-gray-100 text-[#2e384d] font-medium text-[15px]"
          >
            Integrations
          </a>
          <a
            href="#"
            className="py-3.5 text-[#2e384d] font-medium text-[15px]"
          >
            Get in Touch
          </a>

          <div className="flex flex-col gap-3 mt-5 pb-2">
            <a
              href="#"
              className="text-center text-[#2e384d] font-medium py-2.5 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              Login
            </a>
            <a href="#" className="btn-primary text-center py-2.5">
              Free Trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
