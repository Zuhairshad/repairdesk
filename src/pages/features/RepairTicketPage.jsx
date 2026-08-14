import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

// --- Icons (ticket / time / security themed, unique to this page) ---

const IconFilter = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16M7 12h10M10 19h4" />
  </svg>
);
const IconPart = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l1.6-1.6a3 3 0 10-4.6-4.6l-1.6 1.6a1 1 0 000 1.4zM9.3 17.7a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-1.6 1.6a3 3 0 104.6 4.6l1.6-1.6a1 1 0 000-1.4z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 15.5l7-7" />
  </svg>
);
const IconWorkflow = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <circle cx="5" cy="6" r="2.2" /><circle cx="12" cy="18" r="2.2" /><circle cx="19" cy="6" r="2.2" />
    <path strokeLinecap="round" d="M5 8.2V13a4 4 0 004 4M19 8.2V13a4 4 0 01-4 4" />
  </svg>
);
const IconExport = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 8l5-5 5 5M12 3v13" />
  </svg>
);
const IconChecklist = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M9 12l2 2 4-4" />
  </svg>
);
const IconEmail = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4V6zm0 0l8 7 8-7" />
  </svg>
);
const IconSignature = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17c2-4 3-2 4 0s2 4 4-2 2-6 3-2 1 6 3 2 2-3 4 0" />
    <path strokeLinecap="round" d="M3 20h18" />
  </svg>
);
const IconHistory = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <circle cx="12" cy="13" r="8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4l3 2M9 2h6" />
  </svg>
);
const IconNote = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 4h11l3 3v13H5V4z M16 4v3h3M9 11h6M9 15h6" />
  </svg>
);
const IconDiagnostic = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v5a3 3 0 006 0V3M9 3H7M15 3h2M12 11v4a5 5 0 005 5" />
    <circle cx="19" cy="18" r="2" />
  </svg>
);
const IconBell = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 8a6 6 0 1112 0c0 3 1 4.5 2 6H4c1-1.5 2-3 2-6zM10 19a2 2 0 004 0" />
  </svg>
);
const IconChat = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a8 8 0 11-3.5-6.6L21 4l-1 4.5A8 8 0 0121 12z" />
  </svg>
);
const IconKanban = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <rect x="4" y="4" width="4.5" height="16" rx="1" /><rect x="10" y="4" width="4.5" height="10" rx="1" /><rect x="16" y="4" width="4.5" height="13" rx="1" />
  </svg>
);
const IconBarcode = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" d="M4 5v14M8 5v14M11 5v14M15 5v14M17.5 5v14M20 5v14" />
  </svg>
);
const IconLink = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15l6-6M8 12l-2 2a3 3 0 004.2 4.2l2-2M16 12l2-2a3 3 0 00-4.2-4.2l-2 2" />
  </svg>
);
const IconTicketStub = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8a2 2 0 100 4v0a2 2 0 100 4h16v-4a2 2 0 110-4V4H4v4z" />
    <path strokeLinecap="round" d="M14 4v16" strokeDasharray="2 2" />
  </svg>
);
const IconSpark = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />
  </svg>
);

// --- Content ---

const saveTimeSteps = [
  { n: '01', title: 'Filter Tickets', desc: 'Search for a specific ticket by applying multiple filters including name, ticket type, ticket status, date created and more.', Icon: IconFilter },
  { n: '02', title: 'Order Special Parts', desc: 'Order special parts whenever a customer brings in an unusual device. Reduce unsecured cash outflow and keep it secure against abandoned sales and odd parts.', Icon: IconPart },
  { n: '03', title: 'Manage Workflows', desc: 'Create customizable workflows in tickets with steps required for repair jobs in the desired sequence for easy management and tracking.', Icon: IconWorkflow },
  { n: '04', title: 'Export Tickets', desc: 'Format data and create your own customized reports or maintain a backup log of tickets so you can find information on customer devices in case your internet cuts out.', Icon: IconExport },
];

const riskSteps = [
  { n: '01', title: 'Pre- & Post-Repair Checklists & Images', desc: 'Ensure repair accuracy by keeping a pre-repair checklist. Upload images of the device using a webcam or your computer system. Send estimates through SMS to customers for approval if you find more issues.', Icon: IconChecklist },
  { n: '02', title: 'Email Tickets to Customers', desc: 'Update customers by setting up automated SMS or email alerts for when a repair job is completed, available for pick up, pending for parts and more.', Icon: IconEmail },
  { n: '03', title: 'Digital Signature', desc: "Avoid chargeback disputes by getting customers' digital signatures on store terms and conditions before or after a repair is completed.", Icon: IconSignature },
  { n: '04', title: 'Ticket History', desc: 'Get diagnostic notes, staff notes or a record of any official communication you sent to customers about the ticket since its creation.', Icon: IconHistory },
];

const commSteps = [
  { title: 'Internal Notes', desc: 'Serve your customers better & improve internal communication by adding private notes, only accessible to the repair shop personnel, to a ticket.', Icon: IconNote },
  { title: 'Diagnostic Notes', desc: 'Improve communication and repair clarity between the customer and the technician by adding diagnostic notes that are viewable by both parties.', Icon: IconDiagnostic },
  { title: 'Repair Job Notifications', desc: 'Automatically send repair job notifications to technicians. View due date, repair time, ticket status, repair charges, and technician name.', Icon: IconBell },
  { title: 'Email & SMS Alerts', desc: 'Update customers by setting up automated SMS or email alerts on the repair status. Using AA Repairdesk Connect, it is easier to manage everything.', Icon: IconChat },
];

const chipFeatures = [
  { title: 'Ticket Management', desc: 'Displays repair tickets based on due date instead of creation date & highlights overdue tickets in red so action is immediate.', Icon: IconTicketStub },
  { title: 'Multiple Viewing Options', desc: 'Reduce time wastage with flexible viewing options for your ticket dashboard — Kanban, list and calendar view.', Icon: IconKanban },
  { title: 'Ticket Labels', desc: 'Never confuse similar repair orders again. Add ticket labels, scan the code and pull up the desired ticket in seconds.', Icon: IconBarcode },
  { title: 'Associate Parts to Repairs', desc: 'Reduce the actual cost of repairs by associating parts to repairs directly within AA Repairdesk.', Icon: IconLink },
];

const journeySteps = [
  { label: 'Ticket Created', sub: 'Device checked in & logged' },
  { label: 'Diagnosed', sub: 'Notes & images attached' },
  { label: 'In Repair', sub: 'Parts assigned, tech notified' },
  { label: 'Ready for Pickup', sub: 'Customer alerted by SMS/email' },
];

const faqs = [
  { q: 'How long are your contracts?', a: 'We offer both, month to month and annual plans, to give you the most flexibility. You can always upgrade, downgrade or add locations as your business grows.' },
  { q: 'Can I add custom fields in the ticket?', a: "Yes, you can create a text field for device type, color, special order notes, priority, or anything else that's important to your workflow for a more personalized system." },
  { q: 'Can I re-assign a ticket to a technician?', a: 'Yes, you can re-assign a ticket to a technician by editing it and changing the entry in the "Assigned to" column.' },
  { q: 'Can I make an invoice out of an existing repair ticket?', a: 'Yes, AA Repairdesk lets you convert a repair ticket directly into an invoice with a single click, keeping all parts and labor already populated.' },
  { q: 'Can I search for a ticket using item barcode?', a: 'Yes, you can scan the item barcode under the SKU field to pull up your desired ticket.' },
  { q: 'Can I add warranty on repair services?', a: 'Yes, you can add warranty on repair services.' },
];

export default function RepairTicketPage() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rd-dark via-[#2d2f45] to-rd-teal text-white py-24 px-6">
        <div className="absolute -right-16 top-10 w-72 h-72 rounded-full border border-white/10 hidden lg:block" />
        <div className="absolute -right-6 top-32 w-40 h-40 rounded-full border border-dashed border-rd-lime/30 hidden lg:block" />
        <div className="container-main max-w-3xl relative">
          <div className="inline-flex items-center gap-2 text-rd-mint text-xs font-poppins font-semibold uppercase tracking-widest mb-5">
            <IconTicketStub className="w-4 h-4" />
            Repair Ticket Management
          </div>
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
            Repair Ticket Management System
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">
            Increase your repair shop's efficiency and save time with a maintenance ticketing system that reduces your losses and manual errors. Offer a great experience to your customers by keeping them updated on the repair status and enhancing communication within your team.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.aarepairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      {/* Save Time — 2x2 process grid with numbered nodes + connecting lines */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Save Time</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Less Time Managing, More Time Repairing
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-14 max-w-2xl">
            Time is money. Save precious time with AA Repairdesk by creating tickets seamlessly, sorting repairs efficiently and managing special orders with the click of a button. With <strong className="text-rd-dark">customizable workflows</strong> for each repair type, your store becomes the Usain Bolt of device repairs and never misses a step.
          </p>

          <div className="max-w-4xl mx-auto">
            {[0, 1].map((rowIdx) => (
              <div key={rowIdx} className="relative">
                {/* horizontal connector row */}
                <div className="hidden sm:flex items-center justify-between px-[10%] mb-4">
                  <span className="w-3 h-3 rounded-full bg-rd-teal" />
                  <span className="flex-1 border-t-2 border-dashed border-rd-teal/30 mx-2" />
                  <span className="w-3 h-3 rounded-full bg-rd-teal" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
                  {saveTimeSteps.slice(rowIdx * 2, rowIdx * 2 + 2).map((f) => (
                    <div key={f.n} className="relative bg-rd-cream rounded-2xl p-7 pt-9 border border-gray-100">
                      <span className="absolute -top-4 left-7 w-8 h-8 rounded-full bg-rd-dark text-rd-mint text-xs font-poppins font-bold flex items-center justify-center shadow-md">
                        {f.n}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-rd-teal/10 flex items-center justify-center mb-4">
                        <f.Icon className="w-5 h-5 text-rd-teal" />
                      </div>
                      <h4 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h4>
                      <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
                {rowIdx === 0 && (
                  <div className="hidden sm:flex justify-center my-2">
                    <span className="w-px h-8 border-l-2 border-dashed border-rd-teal/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reduce risk of loss — vertical timeline */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Reduce Risk of Loss</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Minimize Risk &amp; Maximize Productivity
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-14 max-w-2xl">
            Making money isn't easy, but losing it is. Minimize your risks and cover all your bases to reduce your chances of payment disputes using the right kind of repair ticket management system. Allow customers to pay half with cash and the remaining using their credit/debit card.
          </p>

          <div className="max-w-3xl relative">
            <div className="absolute left-6 top-2 bottom-2 w-px border-l-2 border-dashed border-rd-teal/30" aria-hidden="true" />
            <div className="space-y-10">
              {riskSteps.map((f) => (
                <div key={f.n} className="relative flex gap-6 pl-0">
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full bg-rd-dark flex items-center justify-center text-white relative z-10">
                      <f.Icon className="w-5 h-5 text-rd-mint" />
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-rd-teal font-poppins font-bold text-xs">{f.n}</span>
                      <h4 className="font-poppins font-semibold text-rd-dark">{f.title}</h4>
                    </div>
                    <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study — ticket stub design */}
      <section className="bg-rd-dark text-white py-20 px-6">
        <div className="container-main max-w-3xl mx-auto">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-mint mb-3 text-center">Case Study</span>
          <h2 className="font-poppins font-semibold text-2xl md:text-3xl text-center mb-10">
            Peter Haydon of Technology Traders on Repair Ticket Management
          </h2>
          <div className="relative bg-[#1e2035] rounded-2xl border border-white/10 p-8 md:p-10">
            <div className="absolute left-1/2 -top-4 -translate-x-1/2 w-8 h-8 rounded-full bg-rd-dark border border-white/10" />
            <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-8 h-8 rounded-full bg-rd-dark border border-white/10" />
            <IconTicketStub className="w-8 h-8 text-rd-mint mb-5" />
            <p className="text-white/90 text-xl font-dm-sans italic leading-relaxed mb-6">
              "I think the repair business is the hardest lane of retail. There are so many computers and cell phone models, each one has different kinds of repair problems and we have to master them all. AA Repairdesk helps us a lot in managing all types of repairs and devices."
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-poppins font-semibold text-rd-mint">Peter Haydon</p>
                <p className="text-white/60 text-sm font-poppins">Technology Traders</p>
              </div>
              <Link to="/customer-stories" className="text-rd-mint font-poppins font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Improve Communication — horizontal chevron flow */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Improve Communication</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">
            Reduce Communication Errors
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-14 max-w-2xl">
            Miscommunication on repairs can cost your business thousands of dollars a year. Send repair job notifications to your technicians and assign jobs from one repair man to another so they never mix up another repair.
          </p>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:items-stretch">
            {commSteps.map((f, i) => (
              <React.Fragment key={f.title}>
                <div className="flex-1 bg-rd-cream rounded-2xl p-6 border border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-rd-teal/10 flex items-center justify-center mb-4">
                    <f.Icon className="w-5 h-5 text-rd-teal" />
                  </div>
                  <h4 className="font-poppins font-semibold text-rd-dark mb-2 text-sm">{f.title}</h4>
                  <p className="text-gray-500 font-dm-sans text-xs leading-relaxed">{f.desc}</p>
                </div>
                {i < commSteps.length - 1 && (
                  <div className="flex items-center justify-center lg:w-10 shrink-0">
                    <svg className="w-6 h-6 text-rd-teal/40 rotate-90 lg:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Increase Efficiency — "M1 Chip" circuit-style feature row */}
      <section className="bg-rd-dark text-white py-20 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-mint mb-3">Increase Efficiency</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4 max-w-2xl">
            The M1 Chip of Repair Shop Softwares
          </h2>
          <p className="text-white/70 font-dm-sans text-lg mb-14 max-w-2xl">
            Tightly-integrated and efficient, AA Repairdesk gives you all the tools to optimize your store for better management and increase employee productivity. Just like an Apple M1 chip.
          </p>

          <div className="relative rounded-3xl border border-white/15 p-8 md:p-10">
            <div className="hidden md:flex absolute -top-px left-8 right-8 justify-between">
              {chipFeatures.map((f, i) => <span key={i} className="w-px h-3 bg-rd-lime/60" />)}
            </div>
            <div className="hidden md:block absolute top-0 left-8 right-8 border-t border-dashed border-white/20" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {chipFeatures.map((f) => (
                <div key={f.title} className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="w-9 h-9 rounded-lg bg-rd-lime/15 flex items-center justify-center mb-4">
                    <f.Icon className="w-5 h-5 text-rd-mint" />
                  </div>
                  <h4 className="font-poppins font-semibold text-white mb-2 text-sm">{f.title}</h4>
                  <p className="text-white/60 font-dm-sans text-xs leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhance Customer Experience — repair journey tracker */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3 text-center">Enhance Customer Experience</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 text-center max-w-2xl mx-auto">
            Keep Your Customers Updated at Every Step
          </h2>
          <p className="text-gray-500 font-dm-sans text-lg mb-16 text-center max-w-2xl mx-auto">
            Give your customers a better repair experience through alerts and updates that will keep them coming back for more. The perfect repair shop POS management ticket software takes care of all this and more.
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="hidden sm:block absolute top-6 left-[12%] right-[12%] border-t-2 border-dashed border-rd-teal/30" aria-hidden="true" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {journeySteps.map((step, i) => (
                <div key={step.label} className="relative flex flex-col items-center text-center">
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-poppins font-bold text-sm mb-4 ${i === journeySteps.length - 1 ? 'bg-rd-lime text-white' : 'bg-rd-dark text-rd-mint'}`}>
                    {i === journeySteps.length - 1 ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    ) : (i + 1)}
                  </div>
                  <p className="font-poppins font-semibold text-rd-dark text-sm mb-1">{step.label}</p>
                  <p className="text-gray-500 font-dm-sans text-xs leading-relaxed">{step.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-6">
        <div className="container-main max-w-3xl">
          <div className="flex items-center gap-3 mb-10">
            <IconSpark className="w-6 h-6 text-rd-teal" />
            <h2 className="font-poppins font-bold text-3xl text-rd-dark">All the Answers You're Looking For</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-rd-cream rounded-xl overflow-hidden border border-gray-100">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <svg className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-200 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
