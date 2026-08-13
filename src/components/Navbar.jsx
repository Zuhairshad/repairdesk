import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

// ── SVG ICON COMPONENTS ─────────────────────────────────────────────────────

/* Product Icons — each with a unique SVG and brand-matching tinted background */
const IconConnect = () => (
  <div className="w-9 h-9 rounded-lg bg-[#EEF2FF] flex items-center justify-center shrink-0">
    <svg className="w-5 h-5 text-[#6366f1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  </div>
);
const IconPhone = () => (
  <div className="w-9 h-9 rounded-lg bg-[#FFF7ED] flex items-center justify-center shrink-0">
    <svg className="w-5 h-5 text-[#f97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  </div>
);
const IconAppointments = () => (
  <div className="w-9 h-9 rounded-lg bg-[#ECFDF5] flex items-center justify-center shrink-0">
    <svg className="w-5 h-5 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
    </svg>
  </div>
);
const IconWorkOrder = () => (
  <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
    <svg className="w-5 h-5 text-[#3b82f6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
    </svg>
  </div>
);
const IconMailIn = () => (
  <div className="w-9 h-9 rounded-lg bg-[#FDF2F8] flex items-center justify-center shrink-0">
    <svg className="w-5 h-5 text-[#ec4899]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  </div>
);
const IconPayments = () => (
  <div className="w-9 h-9 rounded-lg bg-[#F5F3FF] flex items-center justify-center shrink-0">
    <svg className="w-5 h-5 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
  </div>
);
const IconReviews = () => (
  <div className="w-9 h-9 rounded-lg bg-[#FFFBEB] flex items-center justify-center shrink-0">
    <svg className="w-5 h-5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  </div>
);
const IconFranchise = () => (
  <div className="w-9 h-9 rounded-lg bg-[#ECFEFF] flex items-center justify-center shrink-0">
    <svg className="w-5 h-5 text-[#06b6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
    </svg>
  </div>
);

const productIcons = {
  'Connect': IconConnect,
  'Phone System': IconPhone,
  'Appointments Pro': IconAppointments,
  'Work Order Management': IconWorkOrder,
  'Mail-in Repair': IconMailIn,
  'RepairDesk Payments': IconPayments,
  'Reviews Management': IconReviews,
  'Franchise Management': IconFranchise,
};

/* Feature Icons — teal-tinted outline SVGs per feature */
const featureIcons = {
  // Productivity
  'Point of Sale': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  ),
  'Repair Ticket Management': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
    </svg>
  ),
  'Inventory Management': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
  'Billing & Invoicing': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  'Employee Management': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  ),
  'Reporting': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  'Clock-In and Clock-Out': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'Self Check-In': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  ),
  // Marketing & Loyalty
  'Marketing': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
    </svg>
  ),
  'Loyalty Program': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  'Store Credits': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'Gift Cards': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  ),
  'RepairDesk SMS': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v4.018z" />
    </svg>
  ),
  // Business Management
  'Customer Facing Display': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    </svg>
  ),
  'Job Notifications': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>
  ),
  'Multi Location Management': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  // Operations
  'Google Reviews': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  ),
  'Phone Pro': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  'RepairDesk Connect': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
    </svg>
  ),
};

// ── NAV DATA ─────────────────────────────────────────────────────────────────

const productsData = [
  { label: 'Connect', sub: 'Manage emails, texts & social from one inbox', to: '/products/connect' },
  { label: 'Phone System', sub: 'Instant call notifications and missed call logs', to: '/products/phone-system' },
  { label: 'Appointments Pro', sub: 'Let customers book from your website', to: '/products/appointments-pro' },
  { label: 'Work Order Management', sub: 'Create tickets, assign jobs, track status', to: '/products/work-order-management' },
  { label: 'Mail-in Repair', sub: 'Track and manage mail-in repair orders', to: '/products/mail-in-repair' },
  { label: 'RepairDesk Payments', sub: 'Accept in-person, contactless & online payments', to: '/products/payments' },
  { label: 'Reviews Management', sub: 'Automate review requests and get more 5-stars', to: '/products/reviews-management' },
  { label: 'Franchise Management', sub: 'Scale and manage multi-location franchises', to: '/products/franchise-management' },
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

// ── UTILITY ICONS ────────────────────────────────────────────────────────────

const ChevronIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
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

  /* Render a product icon by label lookup */
  const renderProductIcon = (label) => {
    const Icon = productIcons[label];
    return Icon ? <Icon /> : null;
  };

  /* Render a feature icon by label lookup, with teal tinted bg */
  const renderFeatureIcon = (label) => {
    const icon = featureIcons[label];
    if (!icon) return <div className="w-6 h-6 rounded-md bg-rd-teal/10 flex items-center justify-center shrink-0 text-rd-teal">{React.cloneElement(
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    )}</div>;
    return (
      <div className="w-6 h-6 rounded-md bg-rd-teal/10 flex items-center justify-center shrink-0 text-rd-teal">
        {icon}
      </div>
    );
  };

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
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                          </svg>
                        </div>
                        <span className="text-white font-poppins font-bold text-sm">ARIA</span>
                      </div>
                      <p className="text-white/90 text-xs leading-relaxed mb-4">
                        Meet ARIA — your AI-powered repair assistant. Automate workflows, predict parts needs, and delight customers.
                      </p>
                      {/* Waveform UI */}
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
                          {renderProductIcon(item.label)}
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
                style={{ width: '960px', maxWidth: '96vw' }}
                onMouseEnter={() => open('features')} onMouseLeave={scheduleClose}
              >
                <div className="rounded-2xl bg-white shadow-2xl border border-gray-100 p-7">
                  <div className="grid grid-cols-4 gap-6">
                    {Object.values(featuresData).map(cat => (
                      <div key={cat.title}>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 font-poppins">{cat.title}</p>
                        <div className="space-y-0.5">
                          {cat.items.map(item => (
                            <Link key={item.label} to={item.to} onClick={closeAll}
                              className="flex items-start gap-2.5 py-2 rounded-lg hover:bg-gray-50 px-2 -mx-2 transition-colors group">
                              {renderFeatureIcon(item.label)}
                              <div className="min-w-0">
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
                  {renderProductIcon(item.label)}
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
                    <Link key={item.label} to={item.to} onClick={closeAll}
                      className="flex items-center gap-2.5 py-1.5 pl-4 text-sm text-gray-600 hover:text-rd-teal">
                      {renderFeatureIcon(item.label)}
                      <span>{item.label}</span>
                    </Link>
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
