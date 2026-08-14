import React from 'react';
import PageLayout from '../../components/PageLayout';

/* ---------------------------------------------------------------------- */
/* Icons                                                                   */
/* ---------------------------------------------------------------------- */

const IconWrap = ({ children, className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    {children}
  </svg>
);

const MailIcon = (props) => (
  <IconWrap {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </IconWrap>
);

const TicketIcon = (props) => (
  <IconWrap {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 100-4V7z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" d="M12 6v12" />
  </IconWrap>
);

const PackageIcon = (props) => (
  <IconWrap {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-8.25 4.5-8.25-4.5M12 12v9m8.25-13.5v9a1 1 0 01-.51.87l-7.5 4.125a1 1 0 01-.98 0l-7.5-4.125a1 1 0 01-.51-.87v-9a1 1 0 01.51-.87l7.5-4.125a1 1 0 01.98 0l7.5 4.125a1 1 0 01.51.87z" />
  </IconWrap>
);

const TruckIcon = (props) => (
  <IconWrap {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16V6a1 1 0 011-1h8a1 1 0 011 1v10M3 16h10M3 16a2 2 0 104 0m6 0a2 2 0 104 0m-4 0h4m0 0h2.5V11a1 1 0 00-.293-.707l-2.5-2.5A1 1 0 0015 7.5H13v8.5" />
  </IconWrap>
);

const CreditCardIcon = (props) => (
  <IconWrap {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </IconWrap>
);

const ClipboardCheckIcon = (props) => (
  <IconWrap {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" />
  </IconWrap>
);

const TrackerPinIcon = (props) => (
  <IconWrap {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </IconWrap>
);

const CheckCircleIcon = (props) => (
  <IconWrap {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </IconWrap>
);

/* ---------------------------------------------------------------------- */
/* Content                                                                 */
/* ---------------------------------------------------------------------- */

const heroBullets = [
  'Requests, tickets, estimates, payments, and shipping details stay connected',
  'Track each mail-in repair order through return shipping',
  'Customer updates stay tied to the repair workflow',
  'Give teams clearer job visibility from the time a mail-in request is received',
];

const trustBadges = ['Built for Repair Shops', 'Guided Onboarding', '24/6 Support'];

const stats = [
  { value: '3,000+', label: 'Repair Stores' },
  { value: '400M', label: 'Payment Processed' },
  { value: '90+', label: 'Countries' },
  { value: '4.7', label: 'Capterra Rating' },
  { value: '15+', label: 'Industries Served' },
];

const painPoints = [
  {
    title: 'Repair Requests Get Missed',
    body: 'Mail-in requests can get buried when customer details, device information, and attachments arrive through different emails or forms.',
  },
  {
    title: 'Intake Detail Is Often Missing',
    body: 'A missing device photo, warranty detail, or condition note can force your team to chase down information before they can even start checking the device.',
  },
  {
    title: 'Triage and Diagnostics Vary from Order to Order',
    body: 'Without a set process, each staff member may check the device, write notes, label assets, or assign a technician in their own way.',
  },
  {
    title: 'Quotes Get Stuck in Limbo',
    body: 'A repair can be ready to move ahead, but it still sits there because the quote went out late or no one is sure the customer said yes.',
  },
  {
    title: 'Payment Delays Return Shipping',
    body: 'The repair may already be done, but the device can stay in the shop if the customer never got the invoice, payment link, or payment details.',
  },
  {
    title: 'Customers Are Left Guessing',
    body: 'When customers cannot check the repair status on your website, they usually do the next obvious thing. They call or message the shop.',
  },
  {
    title: 'Repair Communication Get Hard to Piece Together',
    body: 'One update is in an email. Another is in a text. A technician note sits somewhere else. Before long, the full repair story is hard to follow.',
  },
  {
    title: 'Return Shipping Details Get Hard to Track',
    body: 'Labels, carrier details, tracking numbers, and return shipment updates can be missed when they are managed outside the repair order.',
  },
];

const solutionBullets = [
  'Mail-in request forms sit directly on your website',
  'Customer-submitted requests turn into repair tickets inside RepairHub',
  'Shipping labels are generated right after an invoice is created',
  'Online invoices with the payment methods your shop supports',
  'Repair tracker access when customers want to check progress themselves',
  'Email and SMS updates that follow each ticket status',
];

const processSteps = [
  {
    title: 'Repair request is submitted',
    body: 'Customer enters repair details through your online request form.',
    icon: MailIcon,
  },
  {
    title: 'Ticket is created in RepairHub',
    body: 'Job details move into a repair ticket for tracking.',
    icon: TicketIcon,
  },
  {
    title: 'Estimate is sent for approval',
    body: 'The quoted repair lands with the customer before anyone touches the job.',
    icon: ClipboardCheckIcon,
  },
  {
    title: 'Repair progress is updated',
    body: 'Ticket notes are added along the way, keeping the repair story together.',
    icon: CheckCircleIcon,
  },
  {
    title: 'The invoice is shared for payment',
    body: 'An invoice with a payment link is shared with the customer.',
    icon: CreditCardIcon,
  },
  {
    title: 'The device is prepared for return',
    body: 'ShipStation labels and tracking details stay connected to the ticket.',
    icon: TruckIcon,
  },
];

const featureTabs = ['Repair Ticketing', 'Shipping', 'Payments', 'Intake Forms', 'Repair Tracker', 'B2B Portal', 'Inventory & POS'];

const coreFeatures = [
  {
    eyebrow: 'Ticket Management',
    title: 'One Place for the Mail-in Repair Story',
    body: 'A mail-in repair can lose context fast if the details are sitting in different places. With RepairHub, the request becomes a ticket your team can keep building on. Device condition, customer notes, diagnostics, technician updates, job status, and warranty details stay tied to the repair as it moves through the shop.',
    icon: TicketIcon,
    bullets: [
      'Track customer, device, and mail-in order details from the ticket',
      'Assign the right workflow to each mail-in repair order',
      'Complete a pre-condition checklist and record diagnostic findings',
      'Send the repair estimates to the customer for approval',
      'Trigger automated email and SMS updates as the ticket moves forward',
    ],
    cta: true,
  },
  {
    eyebrow: 'Shipping Integration',
    title: 'Keep Mail-in Shipping Easier to Manage',
    body: 'Mail-in repairs can bring a lot of small shipping details with them. RepairHub connects with ShipStation, so your team can handle labels, carrier options, tracking, return shipments, and invoice-related shipping records without digging through scattered notes.',
    icon: TruckIcon,
    bullets: [
      'Inbound labels generated through RepairHub Forms',
      'One-click Order sends shipping details to ShipStation',
      'Supported carriers available for return shipments',
      'Shipping markup added when the job needs it',
      'Tracking details kept with the ticket and invoice',
    ],
    cta: true,
  },
  {
    eyebrow: 'Online Payments',
    title: 'Collect Payment Before Return Shipping',
    body: 'Once a mail-in repair is ready to close out, payment can slow the job down. RepairHub gives your team a way to send the invoice, share a payment link, and let the customer pay before the item is packed for return shipping.',
    icon: CreditCardIcon,
    bullets: [
      'Payment links included with emailed invoices after the repair is done',
      'Online payment options such as Stripe, PayPal, and RepairHub Payments',
      'Customer Portal access for invoice viewing and payment',
      'Deposit payment collection available through RepairHub Forms when set up',
      'Partial or Full payment requests supported through emailed invoices',
    ],
    cta: true,
  },
  {
    eyebrow: 'Online Intake',
    title: 'Capture Mail-in Requests From Your Website',
    body: 'Use RepairHub Forms to collect mail-in repair details through a website widget. Customers can add the information your team needs, attach supported files, and start a request that can become a ticket or lead.',
    icon: MailIcon,
    bullets: [
      'Build custom form flows with the steps your workflow needs',
      'Create multiple forms for different mail-in repair workflows',
      'Let customers upload supported attachments, including supported documents and device images, for greater transparency',
      'Send automated emails after a customer submits the form',
      'Create inbound shipping labels through RepairHub Forms',
      'Charge a deposit when customers submit a mail-in repair order',
    ],
    cta: true,
  },
  {
    eyebrow: 'Online Repair Tracking',
    title: 'Let Customers Check Progress Without Calling In',
    body: 'Customers do not always want to call just to ask where a repair stands. With RepairHub, they can use the Repair Tracker on your website, enter their ticket ID and last name, and check the latest status on their own. When invoices are available, they can download them from the same place.',
    icon: TrackerPinIcon,
    bullets: [
      'Website Repair Tracker widget for customer self-service',
      'Status lookup with ticket ID and last name',
      'Invoice downloads available through the tracker',
    ],
    cta: false,
  },
];

/* ---------------------------------------------------------------------- */
/* Page                                                                    */
/* ---------------------------------------------------------------------- */

export default function MailInRepairProductPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-rd-dark via-[#0b4a4e] to-rd-teal text-white py-20 md:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block bg-rd-lime text-white text-sm font-semibold font-poppins px-4 py-1.5 rounded-full mb-6">
                Mail-in Repair Software
              </span>
              <h1 className="font-dm-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
                Manage Every Mail-in Repair Order from Request to Return Shipping
              </h1>
              <ul className="space-y-3 mb-8">
                {heroBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 font-dm-sans text-white/85 text-base md:text-lg leading-relaxed">
                    <CheckCircleIcon className="w-5 h-5 text-rd-mint flex-shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="#" className="btn-primary text-base px-8 py-3.5">
                  Book A Demo
                </a>
                <a href="#" className="border border-white/40 hover:border-white text-white font-poppins font-semibold text-base px-8 py-3.5 rounded-full transition-colors duration-200 text-center">
                  View Pricing Plans
                </a>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {trustBadges.map((badge) => (
                  <span key={badge} className="font-poppins text-sm text-white/70 flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-rd-mint" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Shipping / logistics visual */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white/10 border border-white/15 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  {[MailIcon, TicketIcon, PackageIcon, TruckIcon].map((Icon, idx) => (
                    <React.Fragment key={idx}>
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-rd-lime/90 text-rd-dark flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 md:w-7 md:h-7" />
                      </div>
                      {idx < 3 && <div className="flex-1 h-px bg-white/30 mx-1 md:mx-2" />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-1 mt-3 text-center">
                  <span className="font-dm-sans text-[11px] md:text-xs text-white/70">Request</span>
                  <span className="font-dm-sans text-[11px] md:text-xs text-white/70">Ticket</span>
                  <span className="font-dm-sans text-[11px] md:text-xs text-white/70">Shipped</span>
                  <span className="font-dm-sans text-[11px] md:text-xs text-white/70">Returned</span>
                </div>
                <div className="mt-6 pt-6 border-t border-white/15 space-y-3">
                  <div className="flex items-center justify-between font-dm-sans text-sm text-white/80">
                    <span>Ticket #MR-2291</span>
                    <span className="bg-rd-lime/20 text-rd-mint text-xs font-poppins font-semibold px-2.5 py-1 rounded-full">In Repair</span>
                  </div>
                  <div className="flex items-center justify-between font-dm-sans text-sm text-white/80">
                    <span>Ticket #MR-2288</span>
                    <span className="bg-white/20 text-white text-xs font-poppins font-semibold px-2.5 py-1 rounded-full">Shipped Back</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-rd-cream py-14 border-b border-gray-200">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-dm-serif text-3xl md:text-4xl text-rd-teal mb-2">{stat.value}</div>
                <div className="font-dm-sans text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Friction — dark, numbered */}
      <section className="bg-rd-dark py-20 md:py-28">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="font-poppins text-sm font-semibold tracking-widest text-rd-mint uppercase">Daily Friction</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-white mt-3 mb-4">Mail-in Jobs Get Messy Fast</h2>
            <p className="font-dm-sans text-white/70 text-lg leading-relaxed">
              When every repair update lives in a different place, your team loses time chasing details instead of moving repairs forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {painPoints.map((point, idx) => (
              <div key={point.title} className="bg-rd-dark hover:bg-white/5 transition-colors duration-300 p-7 md:p-8">
                <div className="font-dm-serif text-3xl text-rd-mint/40 mb-4">{String(idx + 1).padStart(2, '0')}</div>
                <h3 className="font-poppins font-semibold text-white text-base mb-3 leading-snug">{point.title}</h3>
                <p className="font-dm-sans text-white/60 text-sm leading-relaxed">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="font-poppins text-sm font-semibold tracking-widest text-rd-teal uppercase">The Solution</span>
              <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-3 mb-5">One Workflow for Every Mail-in Repair</h2>
              <p className="font-dm-sans text-gray-600 text-lg leading-relaxed mb-8">
                Mail-in repair gets easier when your entire workflow lives in one place. With RepairHub, the customer request, repair ticket, approval, payment, status update, and shipping details stay tied to the same job as it moves through your shop.
              </p>
              <a href="#" className="btn-primary text-base px-8 py-3.5">
                Book A Demo
              </a>
            </div>
            <div className="bg-rd-cream rounded-2xl p-8 md:p-10">
              <ul className="space-y-5">
                {solutionBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-rd-teal/10 text-rd-teal flex items-center justify-center flex-shrink-0">
                      <CheckCircleIcon className="w-5 h-5" />
                    </span>
                    <span className="font-dm-sans text-rd-dark leading-relaxed pt-1">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mail-in Process — logistics timeline */}
      <section className="bg-rd-cream py-20 md:py-28">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="font-poppins text-sm font-semibold tracking-widest text-rd-teal uppercase">Mail-in Process</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-3 mb-4">A Clearer Path for Every Mail-in Job</h2>
            <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
              RepairHub Workflows let you create different processes for each type of mail-in repair. Assign the right workflow to an order, define the steps and statuses your team should follow, and move the repair through a consistent process from intake to return shipping.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-rd-teal/20" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {processSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative flex flex-col items-center text-center">
                    <div className="relative z-10 w-16 h-16 rounded-full bg-white border-2 border-rd-teal shadow-sm flex items-center justify-center mb-5 text-rd-teal">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-dm-serif text-xs text-rd-teal/60 mb-2">STEP {idx + 1}</span>
                    <h3 className="font-poppins font-semibold text-rd-dark text-sm mb-2 leading-snug">{step.title}</h3>
                    <p className="font-dm-sans text-gray-600 text-xs leading-relaxed">{step.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="font-poppins text-sm font-semibold tracking-widest text-rd-teal uppercase">Core Features</span>
            <h2 className="font-dm-serif text-3xl md:text-4xl text-rd-dark mt-3 mb-4">Everything Your Mail-in Repair Team Needs</h2>
            <p className="font-dm-sans text-gray-600 text-lg leading-relaxed">
              See how RepairHub helps your team manage requests, tickets, approvals, payments, updates, and shipping.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {featureTabs.map((tab) => (
              <span key={tab} className="font-poppins text-sm font-medium text-rd-dark bg-rd-cream border border-gray-200 px-5 py-2 rounded-full">
                {tab}
              </span>
            ))}
          </div>

          <div className="space-y-16 md:space-y-20">
            {coreFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              const reversed = idx % 2 === 1;
              return (
                <div
                  key={feature.eyebrow}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  <div>
                    <div className="w-14 h-14 bg-rd-teal/10 text-rd-teal rounded-xl flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-poppins text-sm font-semibold text-rd-teal uppercase tracking-wide">{feature.eyebrow}</span>
                    <h3 className="font-dm-serif text-2xl md:text-3xl text-rd-dark mt-2 mb-4">{feature.title}</h3>
                    <p className="font-dm-sans text-gray-600 leading-relaxed mb-6">{feature.body}</p>
                    {feature.cta && (
                      <a href="#" className="btn-primary text-sm px-7 py-3">
                        Book A Demo
                      </a>
                    )}
                  </div>
                  <div className="bg-rd-cream rounded-2xl p-8">
                    <ul className="space-y-4">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <CheckCircleIcon className="w-5 h-5 text-rd-teal flex-shrink-0 mt-0.5" />
                          <span className="font-dm-sans text-rd-dark text-sm leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
