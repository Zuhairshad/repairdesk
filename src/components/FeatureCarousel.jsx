import React, { useState } from "react";

const FEATURES = [
  {
    icon: "/images/carousel/icon-ticket.svg",
    activeIcon: "/images/carousel/icon-ticket-w.svg",
    label: "Repair Ticket Management",
    image: "/images/carousel/repair-ticket.png",
    title: "Repair Ticket Management",
    paragraph:
      "With RepairHub intuitive repair ticket management software you can easily create tickets, add parts, complete a pre- & post repair checklists, get customer signatures and assign tickets to technicians. The powerful repair ticket software allows you to access customer information and repair history with ease, track tickets and monitor job progress. Resolve tickets with every successful delivery to increase the efficiency of your shop operations.",
  },
  {
    icon: "/images/carousel/icon-inventory.svg",
    activeIcon: "/images/carousel/icon-inventory-w.svg",
    label: "Inventory Management",
    image: "/images/carousel/inventory.png",
    title: "Inventory Management",
    paragraph:
      "Make inventory management effortless with RepairHub’s powerful inventory management software that simplifies inventory tracking, ordering, and replenishment. Easily create a serialized inventory, Purchase Orders and GRNs, transfer your inventory from one store to another and perform inventory counts.",
  },
  {
    icon: "/images/carousel/icon-payments.svg",
    activeIcon: "/images/carousel/icon-payments-w.svg",
    label: "Integrated Payments",
    image: "/images/carousel/payments.png",
    title: "Integrated Payments",
    paragraph:
      "Streamline billing and make payment collection from customers smooth, transparent and secure with multiple integrated payment methods. Accept debit, credit, contactless, online or digital wallet payments. Track partial payments, and overdue invoices and create quotes, invoices and receipts in seconds.",
  },
  {
    icon: "/images/carousel/icon-appointments.svg",
    activeIcon: "/images/carousel/icon-appointments-w.svg",
    label: "Appointment Scheduling",
    image: "/images/carousel/appointments.png",
    title: "Appointment Scheduling",
    paragraph:
      "Convert your website visitors to customers with the RepairHub online appointments module. The innovative feature makes it very easy for your customers to book appointments anytime. With customizable options and an intuitive interface, easily schedule, reschedule, and track appointments in real time.",
  },
  {
    icon: "/images/carousel/icon-sms.svg",
    activeIcon: "/images/carousel/icon-sms-w.svg",
    label: "SMS and Email Notification",
    image: "/images/carousel/sms-email.png",
    title: "SMS and Email Notification",
    paragraph:
      "Stay connected with your customers effortlessly using RepairHub’s SMS and email notification feature. Instantly send automated updates, reminders, and notifications to keep customers informed every step of the way. Customize messages to reflect your brand and improve communication efficiency.",
  },
  {
    icon: "/images/carousel/icon-pos.svg",
    activeIcon: "/images/carousel/icon-pos-w.svg",
    label: "Point of Sale",
    image: "/images/carousel/pos.png",
    title: "Point of Sale",
    paragraph:
      "Generate more revenue and provide a great checkout experience to your customers with a comprehensive POS software that has everything you need for your business operations. Sell more repair services, accessories and gadgets, generate and print invoices, collect payments, and more - all from a single POS system screen.",
  },
  {
    icon: "/images/carousel/icon-employee.svg",
    activeIcon: "/images/carousel/icon-employee-w.svg",
    label: "Employee Management",
    image: "/images/carousel/employee.png",
    title: "Employee Management",
    paragraph:
      "Manage your repair shop efficiently with an employee management system that lets you assign tasks, set distinctive roles and permissions for employees, record shift start and end times, actively track work progress, and monitor productivity with ease.",
  },
  {
    icon: "/images/carousel/icon-reporting.svg",
    activeIcon: "/images/carousel/icon-reporting-w.svg",
    label: "Business Reporting",
    image: "/images/carousel/reporting.png",
    title: "Business Reporting",
    paragraph:
      "Gain invaluable insights into your repair business with RepairHub’s powerful reporting software. The comprehensive reporting tools allow you to track key metrics, analyze performance, and make data-driven decisions with ease.",
  },
];

const DEFAULT_INDEX = 5;

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(DEFAULT_INDEX);
  const active = FEATURES[activeIndex];

  return (
    <section className="bg-[#FAF9E3] py-16 md:py-24">
      <div className="container-main">
        {/* Header */}
        <h2 className="font-poppins text-[32px] md:text-[38px] font-normal text-[#2e384d] text-center">
          Repair Shop Management Control
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4 font-poppins text-lg font-light">
          One feature-rich platform to consolidate, streamline, and manage your
          repair business operations.
        </p>

        {/* Carousel Nav */}
        <div className="mt-12 flex justify-center gap-2 overflow-x-auto scrollbar-hide pb-2">
          {FEATURES.map((feature, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="flex flex-col items-center cursor-pointer w-[100px] gap-1 shrink-0 focus:outline-none"
              >
                <span
                  className={`p-2 rounded-lg transition-all ${
                    isActive ? "bg-[#2d2f45]" : "bg-transparent"
                  }`}
                >
                  <img
                    src={isActive ? feature.activeIcon : feature.icon}
                    alt=""
                    className="w-8 h-8"
                  />
                </span>
                <span className="text-[13px] font-poppins text-center leading-tight text-[#2e384d]">
                  {feature.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div
          key={activeIndex}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn"
        >
          <div>
            <img
              src={active.image}
              alt={active.title}
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:pl-6">
            <h3 className="text-[38px] font-poppins font-normal text-[#2e384d] mb-4">
              {active.title}
            </h3>
            <p className="text-lg md:text-xl font-poppins font-light text-gray-700 leading-relaxed">
              {active.paragraph}
            </p>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="mt-14 text-center">
          <a href="#" className="btn-primary px-10 py-4 text-lg inline-block">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
