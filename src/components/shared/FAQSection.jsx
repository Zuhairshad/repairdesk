import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-poppins font-medium text-[#2e384d] text-[15px] pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-rd-teal shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-500 font-poppins text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection({ title = 'Frequently Asked Questions', faqs = [] }) {
  return (
    <section className="bg-[#F8F8FB] section-padding">
      <div className="container-main max-w-3xl">
        <h2 className="text-[32px] md:text-[38px] font-poppins font-normal text-[#2e384d] text-center mb-12">
          {title}
        </h2>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
