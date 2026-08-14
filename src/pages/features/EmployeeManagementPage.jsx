import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const overviewFeatures = [
  {
    title: 'User Profiles',
    desc: 'Easily switch profiles during repairs with a 4-digit Access PIN instead of logging off and logging in to a different profile. No username or password is required.',
    icon: 'user',
  },
  {
    title: 'Employee Time Tracking',
    desc: "Track your employees' check-in & check-out time, in real-time, from any location, using any device, so they are paid exactly what they are due.",
    icon: 'clock',
  },
  {
    title: 'Roles & Permissions',
    desc: 'Roles are the quickest and easiest way to manage employee permissions. Define, set, and implement different employee roles and permissions to control their access to RepairDesk.',
    icon: 'shield',
  },
  {
    title: 'Employee Productivity Reports',
    desc: 'Set employee sales targets & analyze their performance. Determine which employees need training & which ones are skipping necessary steps.',
    icon: 'chart',
  },
];

const orgChart = [
  { role: 'Senior Technician', pin: '4821', status: 'Clocked In' },
  { role: 'Front Desk Associate', pin: '7734', status: 'On Break' },
  { role: 'Sales Associate', pin: '2290', status: 'Clocked In' },
];

const permissionMatrix = [
  { role: 'Owner', access: [true, true, true, true, true] },
  { role: 'Store Manager', access: [true, true, true, true, false] },
  { role: 'Senior Technician', access: [true, true, false, false, false] },
  { role: 'Front Desk', access: [true, false, false, false, false] },
];
const permissionColumns = ['POS & Sales', 'Inventory', 'Reports', 'Payroll', 'Settings'];

const faqs = [
  {
    q: 'Does RepairDesk Employee Management feature work on my mobile or tablet?',
    a: 'You can access the RepairDesk web app from your mobile and tablet.',
  },
  {
    q: 'Can multiple people access the Employee Management Portal at the same time?',
    a: 'Yes, you and your employees can log in with their credentials simultaneously in our employee management software.',
  },
  {
    q: 'Can my employee see if I am checking their productivity?',
    a: 'No, your employees cannot see that, nor do they have access to productivity reports.',
  },
  {
    q: 'Can I contact my employees within the software?',
    a: "You can keep in touch with your employees via the Slack integration of RepairDesk's employee management software for your repair shop.",
  },
  {
    q: 'Does it have a calendar view to show absents and leaves?',
    a: 'You can access the daily time sheet to check for absences and leaves.',
  },
  {
    q: 'Does RepairDesk have a payroll integration?',
    a: "Yes, RepairDesk has a payroll integration that allows you to set your employee's hourly or monthly pay rate. You can also add the commission feature for your employees.",
  },
];

const Icon = ({ name, className }) => {
  if (name === 'user') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
      </svg>
    );
  }
  if (name === 'clock') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  }
  if (name === 'shield') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M12 3l7.5 3v5.25c0 4.5-3.15 7.5-7.5 9-4.35-1.5-7.5-4.5-7.5-9V6L12 3z" />
      </svg>
    );
  }
  if (name === 'chart') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18M8 17V10m5 7V6m5 11v-4" />
      </svg>
    );
  }
  if (name === 'check') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  if (name === 'lock') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V7.5a4.5 4.5 0 10-9 0v3m-.75 0h10.5A1.5 1.5 0 0118.75 12v7.5a1.5 1.5 0 01-1.5 1.5H6.75a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5z" />
      </svg>
    );
  }
  if (name === 'calendar') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5z" />
      </svg>
    );
  }
  if (name === 'cloud') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5h10.5a4.125 4.125 0 001.5-7.965 6 6 0 00-11.373-3.234A4.5 4.5 0 002.25 15z" />
      </svg>
    );
  }
  if (name === 'wallet') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25A2.25 2.25 0 015.25 6h13.5A2.25 2.25 0 0121 8.25v9a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25v-9zM3 9.75h18M16.5 14.25h.75" />
      </svg>
    );
  }
  return null;
};

export default function EmployeeManagementPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageLayout>
      {/* HERO with org chart mockup */}
      <section className="bg-gradient-to-br from-rd-dark via-[#1e2035] to-rd-teal text-white py-24 px-6 overflow-hidden">
        <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-rd-lime text-rd-dark px-4 py-1.5 rounded-full mb-6">
              Employee Management Software for Repair Shops
            </span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
              Manage your repair shop efficiently with an employee management system
            </h1>
            <p className="text-white/80 text-lg font-dm-sans leading-relaxed mb-8">
              An employee management system that assigns distinctive roles to employees, actively tracks their progress, and helps you guide them when necessary. You can also keep an eye on sales generated by each employee using the{' '}
              <Link to="/features/reporting" className="text-rd-lime underline hover:text-white transition-colors">Reporting</Link> feature.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Free Trial</a>
              <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
            </div>
          </div>

          {/* Org chart visual */}
          <div className="relative bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[240px] bg-rd-lime text-rd-dark rounded-xl px-5 py-4 flex items-center gap-3 shadow-lg">
                <div className="w-10 h-10 rounded-full bg-rd-dark/10 flex items-center justify-center shrink-0">
                  <Icon name="shield" className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-poppins font-semibold text-sm leading-tight">Store Manager</p>
                  <p className="text-[11px] font-dm-sans text-rd-dark/70">Full Access · PIN 1004</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-5 mt-6 pt-6 border-t border-white/25 w-full">
                {orgChart.map((emp) => (
                  <div key={emp.role} className="relative flex flex-col items-center text-center">
                    <span className="absolute -top-6 w-px h-6 bg-white/25" />
                    <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center mb-2">
                      <Icon name="user" className="w-5 h-5 text-white" />
                    </div>
                    <p className="font-poppins font-semibold text-xs leading-tight">{emp.role}</p>
                    <p className="text-[10px] font-dm-sans text-white/50 mb-1.5">PIN {emp.pin}</p>
                    <span className={`inline-flex items-center gap-1 text-[10px] font-dm-sans px-2 py-0.5 rounded-full ${emp.status === 'Clocked In' ? 'bg-rd-lime/20 text-rd-lime' : 'bg-white/15 text-white/70'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${emp.status === 'Clocked In' ? 'bg-rd-lime' : 'bg-white/50'}`} />
                      {emp.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Increase Productivity — bird's eye view */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Increase Productivity</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">Get A Bird's Eye View of Your Employees' Progress</h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-12 max-w-2xl">A better view of your business means a better view of growth. Monitor your repair shop with our employee management software and oversee your employees' performance so you can guide them better.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewFeatures.map((f) => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal flex items-center justify-center mb-4 transition-colors">
                  <Icon name={f.icon} className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Employees Attendance — clock in/out mockup */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Track Employees Attendance</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Clock-in, Clock-out Feature to Simplify Attendance Management</h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">Track check-in, check-out times of your employees, their work hours, and maintain time sheets. Your employees can take breaks as well, and will not be able to sell or create tickets until they clock-in.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Icon name="clock" className="w-5 h-5 text-rd-teal" />
                  <span className="font-poppins font-semibold text-rd-dark text-sm">Today's Time Sheet</span>
                </div>
                <span className="text-[11px] font-dm-sans text-gray-400">Aug 13, 2026</span>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Senior Technician', in: '9:02 AM', out: '—', state: 'Clocked In' },
                  { name: 'Front Desk Associate', in: '8:58 AM', out: '1:15 PM', state: 'On Break' },
                  { name: 'Sales Associate', in: '9:41 AM', out: '6:00 PM', state: 'Clocked Out' },
                ].map((row) => (
                  <div key={row.name} className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-rd-teal/10 flex items-center justify-center"><Icon name="user" className="w-4 h-4 text-rd-teal" /></div>
                      <div>
                        <p className="font-poppins font-medium text-rd-dark text-sm">{row.name}</p>
                        <p className="text-[11px] font-dm-sans text-gray-400">In {row.in} · Out {row.out}</p>
                      </div>
                    </div>
                    <span className={`text-[11px] font-dm-sans px-2.5 py-1 rounded-full shrink-0 ${row.state === 'Clocked In' ? 'bg-green-50 text-green-600' : row.state === 'On Break' ? 'bg-amber-50 text-amber-600' : 'bg-gray-100 text-gray-500'}`}>{row.state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Easy Payroll Processing */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-rd-dark rounded-2xl p-6 md:p-8 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Icon name="wallet" className="w-5 h-5 text-rd-lime" />
                <span className="font-poppins font-semibold text-sm">Payroll Summary — This Week</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Senior Technician', rate: '$22.00/hr', hours: '38.5 hrs', total: '$847.00' },
                  { name: 'Front Desk Associate', rate: '$17.50/hr', hours: '40.0 hrs', total: '$700.00' },
                ].map((row) => (
                  <div key={row.name} className="flex items-center justify-between text-sm border-b border-white/10 pb-3">
                    <div>
                      <p className="font-poppins font-medium">{row.name}</p>
                      <p className="text-white/50 text-xs font-dm-sans">{row.rate} × {row.hours}</p>
                    </div>
                    <span className="font-poppins font-semibold text-rd-lime">{row.total}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-5 pt-1">
                <span className="font-poppins font-semibold text-sm">Total Payroll</span>
                <span className="font-poppins font-bold text-lg text-rd-lime">$1,547.00</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Easy Payroll Processing</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Process Your Employees Payroll with Ease</h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">Effortlessly calculate wages by multiplying your technicians' hourly rates with their logged hours. Manage payroll with accuracy and save time. Ensure your employees are paid fairly and promptly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Employee Shift Management */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Employee Shift Management</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Manage Your Employees Shift for a Smooth Workflow</h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">Create multiple shifts for your own store, set timings for the shift and timings for the break as well. Add employees in shifts, and allow them to create tickets once they are logged-in.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-5">
                <Icon name="calendar" className="w-5 h-5 text-rd-teal" />
                <span className="font-poppins font-semibold text-rd-dark text-sm">Weekly Shift Schedule</span>
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Monday', shift: 'Morning Shift', time: '9:00 AM – 5:00 PM', staff: '3 employees' },
                  { day: 'Tuesday', shift: 'Morning Shift', time: '9:00 AM – 5:00 PM', staff: '3 employees' },
                  { day: 'Saturday', shift: 'Weekend Shift', time: '10:00 AM – 6:00 PM', staff: '4 employees' },
                ].map((row) => (
                  <div key={row.day} className="flex items-center gap-4 border border-gray-100 rounded-xl px-4 py-3">
                    <div className="w-16 shrink-0 text-center">
                      <p className="font-poppins font-semibold text-rd-dark text-xs">{row.day}</p>
                    </div>
                    <div className="flex-1 border-l border-gray-100 pl-4">
                      <p className="font-dm-sans text-sm text-rd-dark">{row.shift} <span className="text-gray-400">· {row.time}</span></p>
                      <p className="text-[11px] font-dm-sans text-gray-400">{row.staff} · 30 min break included</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secure Staff Records */}
      <section className="bg-rd-dark text-white py-16 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <Icon name="cloud" className="w-7 h-7 text-rd-lime" />
              </div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-lime mb-3">Secure Staff Records</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Secure Your Records On Cloud</h2>
              <p className="text-white/70 font-dm-sans text-lg leading-relaxed">Having your employee records on the cloud means they're safe, secure, and easily retrievable. Use your employees' activity logs to gauge their performance regularly with a one-stop employee management software for repair shops.</p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <Icon name="shield" className="w-5 h-5 text-rd-lime" />
                <span className="font-poppins font-semibold text-sm">Employee Activity Log</span>
              </div>
              <div className="space-y-3 text-sm font-dm-sans">
                {[
                  '9:02 AM — Clocked in at Main Store',
                  '9:15 AM — Started repair ticket #RT-4821',
                  '11:30 AM — Applied 10% loyalty discount',
                  '1:00 PM — Break started',
                  '6:00 PM — Clocked out',
                ].map((log, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-rd-lime shrink-0" />
                    {log}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <div className="bg-rd-cream rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-rd-teal flex items-center justify-center shrink-0">
              <Icon name="user" className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Case Study</span>
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-rd-dark mb-5">How Adam Donovan Increased Employee Accountability &amp; Efficiency</h2>
              <p className="text-gray-600 font-dm-sans text-lg leading-relaxed italic mb-6">
                "I like that I can check the status of all repair jobs and see what needs to be done and I can track who's been doing what. I have also added the feature where the system asks the employees to sign-in every time they try to do something, now everybody is accountable for the things they are doing. So I can easily keep a check on everything at the old store through RepairDesk reporting, while I'll be away at the new one."
              </p>
              <Link to="/customer-stories" className="text-rd-teal font-poppins font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Control Access — roles & permissions matrix */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main">
          <div className="max-w-2xl mb-10">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Control Access</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Allow Access To Key Features</h2>
            <p className="text-gray-600 font-dm-sans text-lg leading-relaxed">Choose to grant or restrict employees access to your repair store based on their roles. Your employees will only be able to manoeuvre within the allowed areas of the software. It's as simple as clicking a button with an employee management system.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="bg-rd-dark text-white">
                    <th className="text-left font-poppins font-semibold px-5 py-3.5">Role</th>
                    {permissionColumns.map((col) => (
                      <th key={col} className="text-center font-poppins font-medium px-4 py-3.5 text-white/80 text-xs uppercase tracking-wide">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {permissionMatrix.map((row, i) => (
                    <tr key={row.role} className={i % 2 === 0 ? 'bg-white' : 'bg-rd-cream/60'}>
                      <td className="px-5 py-4 flex items-center gap-2.5 font-poppins font-semibold text-rd-dark">
                        <Icon name="shield" className="w-4 h-4 text-rd-teal shrink-0" />
                        {row.role}
                      </td>
                      {row.access.map((granted, j) => (
                        <td key={j} className="text-center px-4 py-4">
                          <span className={`inline-flex w-6 h-6 rounded-full items-center justify-center mx-auto ${granted ? 'bg-rd-teal/10 text-rd-teal' : 'bg-gray-100 text-gray-400'}`}>
                            <Icon name={granted ? 'check' : 'lock'} className="w-3.5 h-3.5" />
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-10">All the Answers You're Looking For</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-rd-cream rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <svg className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-600 font-dm-sans text-sm leading-relaxed border-t border-gray-200/60 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
