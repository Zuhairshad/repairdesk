import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const sections = [
  {
    badge: 'Increase Efficiency',
    heading: 'Less Time Managing, More Time Repairing',
    body: 'Save precious time with RepairDesk by creating tickets seamlessly, sorting repairs efficiently and managing special orders with the click of a button. With customizable workflows for each repair type, your store never misses a step.',
    features: [
      { title: 'Advanced Ticket Filters', desc: 'Search for a specific ticket by applying multiple filters including name, ticket type, ticket status, date created and more.' },
      { title: 'Order Special Parts', desc: 'Order special parts whenever a customer brings in an unusual device. Reduce unsecured cash outflow and keep it secure against abandoned sales and odd parts.' },
      { title: 'Manage Workflows', desc: 'Create customizable workflows in tickets with steps required for repair jobs in the desired sequence for easy management and tracking.' },
      { title: 'Custom Reports & Backup', desc: 'Format data and create your own customized reports or maintain a backup log of tickets so you can find information on customer devices if your internet cuts out.' },
    ],
  },
  {
    badge: 'Reduce Risk of Loss',
    heading: 'Minimize Risk & Maximize Productivity',
    body: 'Protect your business from disputes and missed repairs with checklists, digital signatures, and automated alerts built directly into every ticket.',
    features: [
      { title: 'Pre- & Post-Repair Checklists & Images', desc: 'Ensure repair accuracy by keeping a pre-repair checklist. Upload images of the device using a webcam or your computer. Send estimates through SMS to customers for approval if you find more issues.' },
      { title: 'Email Tickets to Customers', desc: 'Update customers by setting up automated SMS or email alerts for when a repair job is completed, available for pick up, pending for parts and more.' },
      { title: 'Digital Signature', desc: 'Get diagnostic notes, staff notes, or a record of any official communication you sent to customers about the ticket since its creation.' },
    ],
  },
  {
    badge: 'Improve Communication',
    heading: 'Reduce Communication Errors',
    body: 'Serve your customers better and improve internal communication with private notes, diagnostic notes, and automated notifications built into every ticket.',
    features: [
      { title: 'Private Notes', desc: 'Serve your customers better by adding private notes — only accessible to the repair shop personnel — to a ticket.' },
      { title: 'Diagnostic Notes', desc: 'Improve communication and repair clarity between the customer and the technician by adding diagnostic notes viewable by both parties.' },
      { title: 'Repair Job Notifications', desc: 'Automatically send repair job notifications to technicians. View due date, repair time, ticket status, repair charges, and technician name.' },
      { title: 'Email & SMS Alerts to Customer', desc: 'Automatically notify customers when their repair job is completed, available for pickup, or pending for parts.' },
    ],
  },
];

const ticketFeatures = [
  { title: 'Ticket Management', desc: 'Displays repair tickets based on due date instead of creation date. Highlights overdue tickets with a red background so a manager or technician can see immediately.' },
  { title: 'Multiple Viewing Options', desc: 'Reduce time wastage and add flexibility to how you view your ticket dashboard. Choose between Kanban, list, and calendar view.' },
  { title: 'Ticket Labels & Barcodes', desc: 'Never confuse similar repair orders again by adding ticket labels to each repair. Scan the code and pull up the desired ticket in seconds.' },
  { title: 'Associate Parts to Repairs', desc: 'Reduce the actual cost of repairs by associating parts to repairs directly within RepairDesk.' },
  { title: 'Re-Assign Technicians', desc: 'Re-assign a ticket to a different technician by editing it and changing the entry in the "Assigned to" column at any time.' },
  { title: 'Warranty on Services', desc: 'Add warranty on repair services so customers know exactly when they can claim a warranty on the work done.' },
];

const faqs = [
  { q: 'How long are your contracts?', a: 'We offer both month-to-month and annual plans to give you the most flexibility. You can always upgrade, downgrade or add locations as your business grows.' },
  { q: 'Can I add custom fields in the ticket?', a: 'Yes, you can create a text field for device type, color, special order notes, priority, or anything else that\'s important to your workflow for a more personalized system.' },
  { q: 'Can I re-assign a ticket to a technician?', a: 'Yes, you can re-assign a ticket to a technician by editing it and changing the entry in the "Assigned to" column.' },
  { q: 'Can I make an invoice out of an existing repair ticket?', a: 'Yes. RepairDesk lets you convert a repair ticket directly into an invoice with a single click, keeping all parts and labor already populated.' },
  { q: 'Can I search for a ticket using item barcode?', a: 'Yes, you can scan the item barcode under the SKU field to pull up your desired ticket.' },
  { q: 'Can I add warranty on repair services?', a: 'Yes, you can add warranty on repair services.' },
];

export default function RepairTicketPage() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rd-dark via-[#014a50] to-rd-teal text-white py-24 px-6">
        <div className="container-main max-w-3xl">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl leading-tight mb-6">
            Repair Ticket Management System
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-dm-sans leading-relaxed mb-8">
            Create repair tickets directly from the POS screen. Choose a device or problem and assign it to a repair technician in just a few clicks. With customizable workflows, your store never misses a step.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
            <Link to="/contact" className="border border-white/40 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Request a Demo</Link>
          </div>
        </div>
      </section>

      {/* Feature sections */}
      {sections.map((s, si) => (
        <section key={s.badge} className={`py-16 px-6 ${si % 2 === 0 ? 'bg-white' : 'bg-rd-cream'}`}>
          <div className="container-main">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">{s.badge}</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4 max-w-2xl">{s.heading}</h2>
            <p className="text-gray-500 font-dm-sans text-lg mb-10 max-w-2xl">{s.body}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {s.features.map(f => (
                <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h4>
                  <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Testimonial */}
      <section className="bg-rd-dark text-white py-16 px-6">
        <div className="container-main max-w-3xl mx-auto">
          <div className="text-rd-lime text-5xl font-dm-serif mb-4">"</div>
          <p className="text-white/90 text-xl font-dm-sans italic leading-relaxed mb-6">
            I think the repair business is the hardest lane of retail. There are so many computers and cell phone models, each one has different kinds of repair problems and we have to master them all. RepairDesk helps us a lot in managing all types of repairs and devices.
          </p>
          <p className="font-poppins font-semibold text-rd-lime">Peter Haydon</p>
          <p className="text-white/60 text-sm font-poppins">Technology Traders</p>
        </div>
      </section>

      {/* The M1 Chip section */}
      <section className="bg-white py-16 px-6">
        <div className="container-main">
          <span className="block text-[10px] font-bold uppercase tracking-widest text-rd-teal mb-3">Enhance Customer Experience</span>
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-10 max-w-2xl">Keep Your Customers Updated at Every Step</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ticketFeatures.map(f => (
              <div key={f.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-rd-teal/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-rd-teal/10 group-hover:bg-rd-teal transition-colors flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-rd-teal group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                </div>
                <h3 className="font-poppins font-semibold text-rd-dark mb-2">{f.title}</h3>
                <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-rd-cream py-16 px-6">
        <div className="container-main max-w-3xl">
          <h2 className="font-poppins font-bold text-3xl text-rd-dark mb-10">All the Answers You're Looking For</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-poppins font-semibold text-rd-dark hover:text-rd-teal transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <svg className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
