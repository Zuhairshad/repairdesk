import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Link } from 'react-router-dom';

const journeyStages = [
  {
    stage: 'Intake',
    notification: 'Repair received confirmation',
    channel: 'Email + SMS',
    detail: 'Customer gets instant confirmation with ticket number, estimated timeline, and technician assignment.',
  },
  {
    stage: 'Diagnose',
    notification: 'Estimate approval request',
    channel: 'SMS',
    detail: 'Send cost estimates directly to the customer for quick tap-to-approve authorization.',
  },
  {
    stage: 'Repair',
    notification: 'Technician assignment alert',
    channel: 'In-App',
    detail: 'Your tech receives the job details, device history, and any special customer notes instantly.',
  },
  {
    stage: 'Ready',
    notification: 'Ready-for-pickup alert',
    channel: 'Email + SMS',
    detail: 'Customers are pinged the moment the repair is marked complete. No more "is it done yet?" calls.',
  },
  {
    stage: 'Pickup',
    notification: 'Warranty & follow-up',
    channel: 'Email',
    detail: 'Automated warranty info, feedback request, and a reminder before warranty expiry.',
  },
];

const satisfactionStats = [
  { value: '73%', label: 'Fewer inbound status calls', color: 'bg-rd-teal' },
  { value: '4.8x', label: 'Faster estimate approvals', color: 'bg-[#016D74]' },
  { value: '91%', label: 'Customer satisfaction rate', color: 'bg-rd-dark' },
  { value: '2 min', label: 'Avg. notification delivery', color: 'bg-[#016D74]' },
];

const faqs = [
  {
    q: 'Can I customize the notification messages customers receive?',
    a: 'Yes. RepairDesk provides a full template editor with dynamic merge tags like {customer_name}, {device_type}, {ticket_id}, and {estimated_date}. You can tailor every message to match your shop\'s tone and branding, including adding your logo to email templates.',
  },
  {
    q: 'Which channels are supported for sending notifications?',
    a: 'RepairDesk supports email, SMS, and in-app push notifications. You can configure each notification type to send through one or multiple channels simultaneously. SMS requires a connected Twilio or built-in messaging credit balance.',
  },
  {
    q: 'Can different team members receive different alerts?',
    a: 'Absolutely. Notification routing is role-based. Technicians receive assignment and parts-arrival alerts. Managers get escalation and daily summary notifications. Front desk staff see walk-in and pickup alerts. Each person controls their own preferences on top of the defaults.',
  },
  {
    q: 'Is there a log of all notifications that were sent?',
    a: 'Every notification is recorded in a searchable history log showing recipient, channel, timestamp, delivery status, and the message content. This audit trail helps you verify that customers were notified and troubleshoot any delivery issues.',
  },
  {
    q: 'Do warranty expiry reminders go out automatically?',
    a: 'Yes. Once you configure the warranty period for a repair, RepairDesk schedules a reminder email to the customer a set number of days before expiry. You control the timing and message content. This drives repeat business and builds customer trust.',
  },
];

export default function JobNotificationsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStage, setActiveStage] = useState(0);

  return (
    <PageLayout>
      {/* Hero: Bell with radiating waves */}
      <section className="relative bg-rd-dark overflow-hidden py-28 px-6">
        {/* Radiating wave circles */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
          <div className="w-[600px] h-[600px] rounded-full border-2 border-white animate-ping" style={{ animationDuration: '3s' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
          <div className="w-[900px] h-[900px] rounded-full border border-white animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
        </div>

        <div className="container-main relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-rd-lime font-poppins mb-4">Automated Notifications</span>
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-[3.4rem] text-white leading-[1.12] mb-6">
              Every Repair Stage.<br />Every Customer Update.<br />
              <span className="text-rd-lime">Fully Automatic.</span>
            </h1>
            <p className="text-white/65 font-dm-sans text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              RepairDesk sends the right notification to the right person at every step of the repair journey, so your team can fix devices instead of fielding phone calls.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="https://app.repairdesk.co/register" className="btn-primary px-8 py-3.5">Start Free Trial</a>
              <Link to="/contact" className="border border-white/30 text-white px-8 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors">Book a Demo</Link>
            </div>
          </div>

          {/* Large bell icon with notification badge */}
          <div className="relative shrink-0">
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-rd-teal to-[#014a50] flex items-center justify-center shadow-2xl shadow-rd-teal/20">
              <svg className="w-28 h-28 md:w-32 md:h-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
            </div>
            {/* Notification badge */}
            <div className="absolute -top-1 -right-1 w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/40 border-4 border-rd-dark">
              <span className="text-white font-poppins font-bold text-xl">3</span>
            </div>
            {/* Small radiating dots */}
            <div className="absolute top-4 -left-6 w-3 h-3 rounded-full bg-rd-lime animate-pulse" />
            <div className="absolute bottom-8 -right-8 w-2.5 h-2.5 rounded-full bg-rd-lime/70 animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute -bottom-2 left-6 w-2 h-2 rounded-full bg-white/40 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </section>

      {/* Repair Journey Timeline */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal font-poppins mb-3">Repair Journey</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-3">Notifications at Every Stage</h2>
            <p className="text-gray-500 font-dm-sans text-lg max-w-xl mx-auto">Click each stage to see what gets sent, to whom, and through which channel.</p>
          </div>

          {/* Timeline bar */}
          <div className="relative max-w-4xl mx-auto mb-10">
            <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200" />
            <div className="hidden md:block absolute top-6 left-0 h-0.5 bg-rd-teal transition-all duration-500" style={{ width: `${(activeStage / (journeyStages.length - 1)) * 100}%` }} />

            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
              {journeyStages.map((s, i) => (
                <button
                  key={s.stage}
                  onClick={() => setActiveStage(i)}
                  className="relative flex flex-col items-center group"
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-poppins font-bold transition-all duration-300 z-10 ${i <= activeStage ? 'bg-rd-teal text-white scale-110 shadow-lg shadow-rd-teal/30' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}>
                    {i + 1}
                  </div>
                  <span className={`mt-2 text-sm font-poppins font-semibold transition-colors ${i <= activeStage ? 'text-rd-teal' : 'text-gray-400'}`}>
                    {s.stage}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active stage detail */}
          <div className="max-w-4xl mx-auto bg-rd-cream rounded-2xl p-8 md:p-10 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-xl bg-rd-teal/10 flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-poppins font-bold text-xl text-rd-dark">{journeyStages[activeStage].notification}</h3>
                  <span className="text-[11px] font-poppins font-semibold uppercase tracking-wider bg-rd-teal/10 text-rd-teal px-3 py-1 rounded-full">{journeyStages[activeStage].channel}</span>
                </div>
                <p className="text-gray-600 font-dm-sans leading-relaxed">{journeyStages[activeStage].detail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email & SMS Preview Mockups */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal font-poppins mb-3">Preview</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-3">See What Your Customers See</h2>
            <p className="text-gray-500 font-dm-sans text-lg max-w-xl mx-auto">Professional, branded notifications go out via email and SMS without you typing a word.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Email mockup */}
            <div className="bg-white rounded-2xl shadow-xl shadow-black/5 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <svg className="w-4 h-4 text-gray-400 inline-block mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  <span className="text-xs text-gray-500 font-dm-sans">Email Notification</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rd-teal flex items-center justify-center">
                    <span className="text-white font-poppins font-bold text-sm">RD</span>
                  </div>
                  <div>
                    <p className="font-dm-sans text-sm font-semibold text-rd-dark">Your Repair is Ready!</p>
                    <p className="text-xs text-gray-400 font-dm-sans">from notifications@yourshop.com</p>
                  </div>
                </div>
                <div className="border border-gray-100 rounded-xl p-5 space-y-3">
                  <p className="font-dm-sans text-sm text-gray-700">Hi <span className="font-semibold">Sarah</span>,</p>
                  <p className="font-dm-sans text-sm text-gray-600 leading-relaxed">Great news! Your <span className="font-semibold text-rd-dark">iPhone 14 Pro screen replacement</span> is complete and ready for pickup.</p>
                  <div className="bg-rd-cream rounded-lg p-4">
                    <p className="text-xs text-gray-500 font-dm-sans mb-1">Ticket #RD-4821</p>
                    <p className="font-poppins font-semibold text-rd-dark text-sm">Store Hours: Mon-Sat 9am-7pm</p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block bg-rd-teal text-white text-xs font-poppins font-semibold px-5 py-2.5 rounded-full">View Repair Details</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SMS mockup */}
            <div className="bg-white rounded-2xl shadow-xl shadow-black/5 overflow-hidden">
              <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 text-center">
                  <svg className="w-4 h-4 text-gray-400 inline-block mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                  <span className="text-xs text-gray-500 font-dm-sans">SMS Notification</span>
                </div>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="w-full max-w-xs space-y-4 py-4">
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                      <p className="font-dm-sans text-sm text-gray-800 leading-relaxed">
                        Your Shop: Hi Sarah! Your iPhone 14 Pro repair (Ticket #RD-4821) is complete and ready for pickup. Visit us Mon-Sat 9am-7pm. Reply STOP to opt out.
                      </p>
                      <p className="text-[10px] text-gray-400 font-dm-sans mt-1.5">2:34 PM</p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-rd-teal rounded-2xl rounded-br-sm px-4 py-3 max-w-[85%]">
                      <p className="font-dm-sans text-sm text-white leading-relaxed">Thanks! I'll come by at 5pm today.</p>
                      <p className="text-[10px] text-white/50 font-dm-sans mt-1.5">2:35 PM</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                      <p className="font-dm-sans text-sm text-gray-800 leading-relaxed">
                        Your Shop: See you then, Sarah! Your total is $129.00. We accept all major cards.
                      </p>
                      <p className="text-[10px] text-gray-400 font-dm-sans mt-1.5">2:35 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Never Miss an Update - Multi-Channel */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="bg-gradient-to-br from-rd-dark to-[#013a3f] rounded-3xl p-10 md:p-16 text-white overflow-hidden relative">
            {/* Decorative ring */}
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full border border-white/5" />
            <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full border border-white/5" />

            <div className="relative z-10">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Never Miss an Update</h2>
              <p className="text-white/60 font-dm-sans text-lg mb-12 max-w-lg">
                Reach every customer and team member through their preferred channel. All channels work together seamlessly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Email channel */}
                <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-rd-lime/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-rd-lime/15 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Email</h3>
                  <p className="text-white/50 font-dm-sans text-sm leading-relaxed">Rich HTML templates with your branding, logo, and repair details. Perfect for estimates and invoices.</p>
                </div>

                {/* SMS channel */}
                <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-rd-lime/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-rd-lime/15 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                    </svg>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">SMS</h3>
                  <p className="text-white/50 font-dm-sans text-sm leading-relaxed">Instant text messages with 98% open rates. Ideal for pickup alerts and quick status updates.</p>
                </div>

                {/* Push channel */}
                <div className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-rd-lime/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-rd-lime/15 flex items-center justify-center mb-5">
                    <svg className="w-6 h-6 text-rd-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">Push Alerts</h3>
                  <p className="text-white/50 font-dm-sans text-sm leading-relaxed">Real-time in-app notifications for your technicians. Escalation alerts that demand immediate attention.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Template Customization Preview */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal font-poppins mb-3">Template Editor</span>
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-4">Your Brand, Your Voice</h2>
              <p className="text-gray-500 font-dm-sans text-lg leading-relaxed mb-8">
                Every notification is fully customizable. Use dynamic merge tags, adjust the tone, add your logo, and preview before going live. No coding required.
              </p>
              <div className="space-y-5">
                {[
                  { tag: '{customer_name}', desc: 'Personalize every message with the customer\'s first name' },
                  { tag: '{device_type}', desc: 'Auto-insert the device model being repaired' },
                  { tag: '{estimated_date}', desc: 'Show the expected completion date dynamically' },
                  { tag: '{total_cost}', desc: 'Include the repair cost for transparent billing' },
                ].map(item => (
                  <div key={item.tag} className="flex items-start gap-4">
                    <code className="shrink-0 text-xs font-mono bg-rd-teal/10 text-rd-teal px-2.5 py-1 rounded-md mt-0.5">{item.tag}</code>
                    <p className="text-gray-600 font-dm-sans text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Template preview card */}
            <div className="bg-white rounded-2xl shadow-xl shadow-black/5 overflow-hidden">
              <div className="bg-rd-teal px-6 py-4 flex items-center justify-between">
                <span className="text-white font-poppins font-semibold text-sm">Template: Ready for Pickup</span>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/30" />
                  <span className="w-2 h-2 rounded-full bg-white/30" />
                  <span className="w-2 h-2 rounded-full bg-rd-lime" />
                </div>
              </div>
              <div className="p-6 font-mono text-sm leading-loose text-gray-600 bg-gray-50/50">
                <p>Subject: <span className="text-rd-teal">Your repair is ready!</span></p>
                <div className="border-t border-dashed border-gray-200 my-4" />
                <p>Hi <span className="bg-rd-lime/20 text-rd-dark px-1 rounded">{'{customer_name}'}</span>,</p>
                <p className="mt-2">Your <span className="bg-rd-lime/20 text-rd-dark px-1 rounded">{'{device_type}'}</span> repair is</p>
                <p>complete! Pick it up at your</p>
                <p>convenience during store hours.</p>
                <p className="mt-2">Total: <span className="bg-rd-lime/20 text-rd-dark px-1 rounded">{'{total_cost}'}</span></p>
                <p className="mt-2">Thanks for choosing us!</p>
                <div className="border-t border-dashed border-gray-200 my-4" />
                <p className="text-gray-400 text-xs">Reply STOP to unsubscribe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Satisfaction Stats */}
      <section className="bg-white py-20 px-6">
        <div className="container-main">
          <div className="text-center mb-14">
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-rd-teal font-poppins mb-3">Results</span>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-3">The Impact on Your Shop</h2>
            <p className="text-gray-500 font-dm-sans text-lg max-w-lg mx-auto">Repair shops using RepairDesk notifications see measurable improvements across the board.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {satisfactionStats.map((stat) => (
              <div key={stat.label} className={`${stat.color} rounded-2xl p-7 text-center text-white`}>
                <p className="font-poppins font-bold text-3xl md:text-4xl mb-2">{stat.value}</p>
                <p className="font-dm-sans text-white/70 text-sm leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Notification history log callout */}
          <div className="mt-14 max-w-4xl mx-auto bg-rd-cream rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-8 h-8 text-rd-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-poppins font-bold text-xl text-rd-dark mb-1">Full Notification History Log</h3>
              <p className="text-gray-500 font-dm-sans text-sm leading-relaxed">Every notification ever sent is recorded with recipient, channel, delivery status, and timestamp. Search and filter to audit your communication trail at any time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-rd-cream py-20 px-6">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-rd-dark mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500 font-dm-sans text-lg">Everything you need to know about RepairDesk notifications.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-poppins font-semibold text-rd-dark group-hover:text-rd-teal transition-colors pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openFaq === i ? 'bg-rd-teal rotate-180' : 'bg-gray-100'}`}>
                    <svg className={`w-4 h-4 transition-colors ${openFaq === i ? 'text-white' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-500 font-dm-sans text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
