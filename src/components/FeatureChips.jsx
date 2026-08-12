import React from "react";

const chips = [
  "Repair Ticket Management",
  "Digital Signatures",
  "Print Device Tags",
  "Deposits",
  "Text Messaging",
  "Appointments",
  "Loyalty Program",
  "Store Credits",
  "Review Management",
  "Self Check-In",
  "Buybacks",
  "40+ Integrations",
];

export default function FeatureChips() {
  return (
    <section className="bg-[#F8F8FB] py-10 md:py-14">
      <div className="container-main">
        <div className="flex flex-wrap justify-center gap-3">
          {chips.map((chip) => (
            <div
              key={chip}
              className="flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm border border-gray-100"
            >
              <img src="/images/check.svg" alt="" className="w-5 h-5" />
              <span className="text-sm text-[#2e384d] font-poppins">
                {chip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
