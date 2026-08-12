import React from 'react';

const NewBadge = () => (
  <span className="ml-1.5 inline-block bg-rd-teal text-white text-[10px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded align-middle">
    New
  </span>
);

const FooterLink = ({ label, isNew }) => (
  <li className="mb-2">
    <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
      {label}
      {isNew && <NewBadge />}
    </a>
  </li>
);

const companyLinks = [
  'Our Story',
  'Pricing',
  'GDPR',
  'Terms & Conditions',
  'Privacy Policy',
  'Careers',
  'Corporate Social Responsibility',
];

const featureLinks = [
  { label: 'Point of Sale' },
  { label: 'Inventory Management' },
  { label: 'Repair Ticket Management' },
  { label: 'Marketing' },
  { label: 'Payments' },
  { label: 'Appointments Pro', isNew: true },
  { label: 'Loyalty Program' },
  { label: 'Store Credits' },
  { label: 'Employee Management' },
  { label: 'Billing & Invoicing' },
  { label: 'Repairdesk Connect', isNew: true },
  { label: 'PhonePro', isNew: true },
  { label: 'Google Reviews', isNew: true },
];

const industryLinks = [
  'Cell Phone Repair',
  'Computer Repair',
  'Jewelry Repair',
  'Watch Repair',
  'Drone Repair',
  'Mail-in Repair',
];

const usefulLinks = [
  'Get In Touch',
  'Refer a Friend',
  'Partner With Us',
  'Blog',
  'Events',
  'Podcast',
  'Knowledge Base',
  'Public API',
  'GitHub',
  'Capital',
  'Recommended Hardware',
];

const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.64 1.34 2.98 2.98 2.98 1.64 0 2.98-1.34 2.98-2.98C7.96 4.84 6.62 3.5 4.98 3.5zM2.4 21h5.16V9.5H2.4V21zM9.98 9.5v11.5h5.16v-5.7c0-1.5.28-2.96 2.14-2.96 1.83 0 1.86 1.72 1.86 3.06V21H24v-6.1c0-4.24-.9-7.5-5.87-7.5-2.38 0-3.98 1.31-4.63 2.55h-.07V9.5H9.98z" />
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.5 6.2s-.23-1.64-.94-2.36c-.9-.95-1.9-.95-2.36-1C17 2.5 12 2.5 12 2.5h-.01s-5 0-8.2.34c-.46.05-1.46.05-2.36 1-.71.72-.94 2.36-.94 2.36S.2 8.13.2 10.06v1.87c0 1.93.29 3.86.29 3.86s.23 1.64.94 2.36c.9.95 2.08.92 2.6 1.02C5.83 19.4 12 19.46 12 19.46s5.01-.01 8.2-.35c.46-.06 1.46-.06 2.36-1.02.71-.72.94-2.36.94-2.36s.29-1.93.29-3.86v-1.87c0-1.93-.29-3.86-.29-3.86zM9.55 14.6V8.4L15.9 11.5l-6.35 3.1z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94z" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3 2H21l-6.1 7 6.8 10h-5.3l-4.2-6.1L7.1 19H4.4l6.5-7.5L4.4 2h5.4l3.8 5.6L18.3 2z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-rd-dark text-white">
      <div className="container-main pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-dm-sans">Company</h4>
            <ul>
              {companyLinks.map((label) => (
                <FooterLink key={label} label={label} />
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-dm-sans">Features</h4>
            <ul>
              {featureLinks.map(({ label, isNew }) => (
                <FooterLink key={label} label={label} isNew={isNew} />
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-dm-sans">
              Industries we Serve
            </h4>
            <ul>
              {industryLinks.map((label) => (
                <FooterLink key={label} label={label} />
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4 font-dm-sans">Useful Links</h4>
            <ul>
              {usefulLinks.map((label) => (
                <FooterLink key={label} label={label} />
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-sm">
            108 West 13th Street, Wilmington, Delaware 19801
          </p>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <LinkedInIcon className="w-8 h-8" />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors">
              <YouTubeIcon className="w-8 h-8" />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <FacebookIcon className="w-8 h-8" />
            </a>
            <a href="#" aria-label="X (Twitter)" className="text-gray-400 hover:text-white transition-colors">
              <XIcon className="w-8 h-8" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-gray-400 text-sm max-w-4xl">
            RepairDesk is a cloud based point-of-sale software, engineered specifically for small
            and medium sized computer and cell phone repair shops, that gives you all the tools
            you need to manage your repair business from a single dashboard — repair tickets,
            inventory, invoicing, marketing, and more, all in one place.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-gray-400 text-xs">
          <p>Copyright 2024 RepairDesk INC. All rights reserved</p>
          <p>Privacy &amp; GDPR | Terms &amp; Conditions</p>
        </div>
      </div>
    </footer>
  );
}
