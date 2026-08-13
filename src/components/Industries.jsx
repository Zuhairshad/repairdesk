import React from 'react';
import { Link } from 'react-router-dom';

const industries = [
  {
    icon: '/images/icon-mobile.png',
    title: 'Cell Phone Repair',
    to: '/industries/cell-phone-repair',
    description: 'Streamline cell phone repairs and manage parts inventory. Create tickets, invoices, and process payments in one flow.',
  },
  {
    icon: '/images/icon-laptop.png',
    title: 'Computer Repair',
    to: '/industries/computer-repair',
    description: 'Track computer repair jobs and keep customers informed. Manage diagnostics, parts, and billing all in one place.',
  },
  {
    icon: '/images/icon-ring.png',
    title: 'Jewelry Repair',
    to: '/industries/jewelry-repair',
    description: 'Organize jewelry repair and retail operations. Manage valuables, appraisals, and customer pickups effortlessly.',
  },
  {
    icon: '/images/icon-watch.png',
    title: 'Watch Repair',
    to: '/industries/watch-repair',
    description: 'Manage all watch repair and restoration processes. Quick ticketing and easy checkout for repairs and retail.',
  },
  {
    icon: '/images/icon-drone.png',
    title: 'Drone Repair',
    to: '/industries/drone-repair',
    description: 'Serve walk-in customers, mail-in requests, and everything in between with a powerful repair software suite.',
  },
  {
    icon: '/images/icon-mailin.svg',
    title: 'Mail-in Repair',
    to: '/industries/mail-in-repair',
    description: 'Digitize your end-to-end repair workflow with custom features designed to handle mail-in repair orders.',
  },
  {
    icon: '/images/icon-laptop.png',
    title: 'Camera Repair',
    to: '/industries/camera-repair',
    description: 'Automate your camera repair store\'s workflow. Track lens, sensor, and firmware jobs from intake to pickup.',
  },
  {
    icon: '/images/icon-drone.png',
    title: 'Small Engine Repair',
    to: '/industries/small-engine-repair',
    description: 'Built for all types of small engine repair shops. Manage seasonal jobs, parts, and customer equipment profiles.',
  },
  {
    icon: '/images/icon-laptop.png',
    title: 'Heavy Duty Repair',
    to: '/industries/heavy-duty-repair',
    description: 'Handle complex heavy duty repairs. Track multi-part jobs, fleet service records, and large equipment inventory.',
  },
  {
    icon: '/images/icon-drone.png',
    title: 'Power Tools',
    to: '/industries/power-tools',
    description: 'Built for drills, saws, and grinder repair shops. Tag tools, track service history, and manage warranty claims.',
  },
  {
    icon: '/images/icon-mobile.png',
    title: 'Shoe Repair',
    to: '/industries/shoe-repair',
    description: 'Streamline cobbling and shoe maintenance jobs. Manage materials, track repairs, and notify customers on pickup.',
  },
  {
    icon: '/images/icon-watch.png',
    title: 'Tailor Shop',
    to: '/industries/tailor-shop',
    description: 'Manage custom tailoring orders, measurements, fabric inventory, and fitting appointments in one system.',
  },
];

export default function Industries() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-[32px] md:text-[38px] font-poppins font-normal text-[#2e384d] mb-4">
            Industries We Serve
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-poppins text-lg font-light">
            RepairDesk offers total repair control with an end-to-end workflow tailored for your entire repair business in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {industries.map(({ icon, title, to, description }) => (
            <Link
              key={title}
              to={to}
              className="bg-white rounded-xl p-6 shadow-[0_4px_16px_rgba(60,63,64,0.07)] border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all duration-300 block group"
            >
              <img src={icon} alt="" className="w-10 h-10 mb-3 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-base font-poppins font-semibold text-[#2e384d] mb-2 group-hover:text-rd-teal transition-colors">{title}</h3>
              <p className="text-gray-500 font-poppins text-xs leading-relaxed">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
