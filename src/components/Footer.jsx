import React from "react";
import { Link } from "react-router-dom";

const featureLinks = [
  { label: "Point of Sale", to: "/features/point-of-sale" },
  { label: "Inventory Management", to: "/features/inventory-management" },
  { label: "Repair Ticket Management", to: "/features/repair-ticket-management" },
  { label: "Billing & Invoicing", to: "/features/billing-invoicing" },
  { label: "Employee Management", to: "/features/employee-management" },
  { label: "Phone System", to: "/products/phone-system" },
  { label: "RepairHub Connect", to: "/products/connect" },
  { label: "Appointments Pro", to: "/products/appointments-pro" },
  { label: "Google Reviews", to: "/products/reviews-management" },
  { label: "Customer Facing Display", to: "/features/customer-facing-display" },
  { label: "Loyalty Program", to: "/features/loyalty-program" },
  { label: "Store Credit", to: "/features/store-credits" },
  { label: "Work Order Management", to: "/products/work-order-management" },
  { label: "Multi Location Management", to: "/features/multi-location" },
  { label: "Self Check-In", to: "/features/self-check-in" },
];

const industryLinks = [
  { label: "Cell Phone Repair", to: "/industries/cell-phone-repair" },
  { label: "Computer Repair", to: "/industries/computer-repair" },
  { label: "Jewelry Repair", to: "/industries/jewelry-repair" },
  { label: "Watch Repair", to: "/industries/watch-repair" },
  { label: "Drone Repair", to: "/industries/drone-repair" },
  { label: "Mail-in Repair", to: "/industries/mail-in-repair" },
  { label: "Power Tools", to: "/industries/power-tools" },
  { label: "Bicycle Repair", to: "/industries/bicycle-repair" },
  { label: "Wireless Repair", to: "/industries/wireless-repair" },
  { label: "Camera Repair", to: "/industries/camera-repair" },
  { label: "Small Engine Repair", to: "/industries/small-engine-repair" },
  { label: "Heavy Duty Repair", to: "/industries/heavy-duty-repair" },
  { label: "Shoe Repair", to: "/industries/shoe-repair" },
  { label: "Tailor Shop", to: "/industries/tailor-shop" },
];

const usefulLinks = [
  { label: "Get In Touch", to: "/contact" },
  { label: "Knowledge Base", to: "/knowledge-base" },
  { label: "Refer a Friend", to: "/refer-a-friend" },
  { label: "RepairHub vs RepairShopr", to: "/compare/repairhub-vs-repairshopr" },
  { label: "Partner With Us", to: "/partner-with-us" },
  { label: "RepairHub vs Repairq", to: "/compare/repairhub-vs-repairq" },
  { label: "Recommended Hardware", to: "/recommended-hardware" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-conditions" },
];

const socialIcons = [
  { src: "/images/linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/repairhub" },
  { src: "/images/youtube.svg", alt: "YouTube", href: "https://www.youtube.com/repairhub" },
  { src: "/images/facebook.svg", alt: "Facebook", href: "https://www.facebook.com/repairhub" },
  { src: "/images/twitter.svg", alt: "X / Twitter", href: "https://twitter.com/repairhub" },
];

function FooterLink({ to, children }) {
  return (
    <Link to={to} className="block text-gray-500 hover:text-rd-teal text-sm font-poppins mb-2 transition-colors leading-snug">
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#f8f8fb]">
        <div className="container-main pt-14 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Column 1 – Brand */}
            <div>
              <Link to="/">
                <img src="/images/logo.png" alt="RepairHub" className="h-8 mb-4" />
              </Link>
              <p className="text-gray-500 text-xs font-poppins leading-relaxed mb-5">
                RepairHub is a cloud based point-of-sale software, engineered specifically for small and medium sized computer and cell phone repair shops.
              </p>
              <div className="flex gap-3">
                {socialIcons.map((icon) => (
                  <a key={icon.alt} href={icon.href} target="_blank" rel="noopener noreferrer">
                    <img src={icon.src} alt={icon.alt} className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 – Features */}
            <div>
              <h4 className="font-poppins font-bold text-[#2e384d] text-sm mb-4 uppercase tracking-wide">Features</h4>
              {featureLinks.map((link) => (
                <FooterLink key={link.label} to={link.to}>{link.label}</FooterLink>
              ))}
            </div>

            {/* Column 3 – Industries */}
            <div>
              <h4 className="font-poppins font-bold text-[#2e384d] text-sm mb-4 uppercase tracking-wide">Industries We Serve</h4>
              {industryLinks.map((link) => (
                <FooterLink key={link.label} to={link.to}>{link.label}</FooterLink>
              ))}
            </div>

            {/* Column 4 – Useful Links + Contact */}
            <div>
              <h4 className="font-poppins font-bold text-[#2e384d] text-sm mb-4 uppercase tracking-wide">Useful Links</h4>
              {usefulLinks.map((link) => (
                <FooterLink key={link.label} to={link.to}>{link.label}</FooterLink>
              ))}
              <div className="mt-6 space-y-1.5">
                <p className="text-gray-400 text-xs font-poppins">hello@repairhub.co</p>
                <p className="text-gray-400 text-xs font-poppins">108 W 13th St, Wilmington, DE 19801</p>
                <p className="text-gray-400 text-xs font-poppins">Jeff Heights Gulberg 3, Lahore, 54000</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#1e2035]">
        <div className="container-main py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-white/60 text-xs font-poppins">
              Copyright © 2024 RepairHub INC. All rights reserved.
            </span>
            <div className="flex gap-5">
              <Link to="/privacy-policy" className="text-white/60 text-xs hover:text-white transition-colors font-poppins">Privacy Policy</Link>
              <Link to="/gdpr" className="text-white/60 text-xs hover:text-white transition-colors font-poppins">GDPR</Link>
              <Link to="/terms-conditions" className="text-white/60 text-xs hover:text-white transition-colors font-poppins">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
