import React from "react";

const companyLinks = [
  "Our Story",
  "Pricing",
  "GDPR",
  "Terms & Conditions",
  "Privacy Policy",
  "Careers",
  "Corporate Social Responsibility",
];

const featureLinks = [
  { label: "Point of Sale", isNew: false },
  { label: "Inventory Management", isNew: false },
  { label: "Repair Ticket Management", isNew: false },
  { label: "Marketing", isNew: false },
  { label: "Payments", isNew: false },
  { label: "Appointments Pro", isNew: true },
  { label: "Loyalty Program", isNew: false },
  { label: "Store Credits", isNew: false },
  { label: "Employee Management", isNew: false },
  { label: "Billing & Invoicing", isNew: false },
  { label: "Repairdesk Connect", isNew: true },
  { label: "PhonePro", isNew: true },
  { label: "Google Reviews", isNew: true },
];

const industryLinks = [
  "Cell Phone Repair",
  "Computer Repair",
  "Jewelry Repair",
  "Watch Repair",
  "Drone Repair",
  "Mail-in Repair",
];

const usefulLinks = [
  "Get In Touch",
  "Refer a Friend",
  "Partner With Us",
  "Blog",
  "Events",
  "Podcast",
  "Knowledge Base",
  "Public API",
  "GitHub",
  "Capital",
  "Recommended Hardware",
];

const socialIcons = [
  { src: "/images/linkedin.svg", alt: "LinkedIn" },
  { src: "/images/youtube.svg", alt: "YouTube" },
  { src: "/images/facebook.svg", alt: "Facebook" },
  { src: "/images/twitter.svg", alt: "X" },
];

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="font-poppins font-bold text-[#2e384d] text-base mb-4">
        {title}
      </h4>
      <nav>{children}</nav>
    </div>
  );
}

function FooterLink({ children }) {
  return (
    <a
      href="#"
      className="text-gray-600 hover:text-rd-teal text-sm font-poppins block mb-2.5 transition-colors"
    >
      {children}
    </a>
  );
}

function NewBadge() {
  return (
    <span className="bg-rd-teal text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
      NEW
    </span>
  );
}

export default function Footer() {
  return (
    <footer>
      {/* Top Section */}
      <div className="bg-[#f8f8fb]">
        <div className="container-main pt-16 pb-8">
          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Column 1 - Company */}
            <FooterColumn title="Company">
              {companyLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </FooterColumn>

            {/* Column 2 - Features */}
            <FooterColumn title="Features">
              {featureLinks.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="text-gray-600 hover:text-rd-teal text-sm font-poppins mb-2.5 transition-colors flex items-center gap-2"
                >
                  {item.label}
                  {item.isNew && <NewBadge />}
                </a>
              ))}
            </FooterColumn>

            {/* Column 3 - Industries */}
            <FooterColumn title="Industries we Serve">
              {industryLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </FooterColumn>

            {/* Column 4 - Useful Links */}
            <FooterColumn title="Useful Links">
              {usefulLinks.map((link) => (
                <FooterLink key={link}>{link}</FooterLink>
              ))}
            </FooterColumn>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6" />

          {/* Address + Social Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm font-poppins">
              108 West 13th Street, Wilmington, Delaware 19801
            </p>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a href="#" key={icon.alt}>
                  <img
                    src={icon.src}
                    alt={icon.alt}
                    className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300 my-6" />

          {/* Description */}
          <p className="text-gray-500 text-xs font-poppins leading-relaxed">
            RepairDesk is a cloud based point-of-sale software, engineered
            specifically for small and medium sized computer and cell phone repair
            shops that allows technicians to track &amp; monitor repair jobs, stay
            on top of inventory and manage multiple store locations.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00464f]">
        <div className="container-main py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-white/70 text-xs">
              Copyright 2024 RepairDesk INC. All rights reserved
            </span>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/70 text-xs hover:text-white transition-colors"
              >
                Privacy &amp; GDPR
              </a>
              <a
                href="#"
                className="text-white/70 text-xs hover:text-white transition-colors"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
