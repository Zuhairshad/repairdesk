import React from "react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-rd-teal to-rd-dark-teal py-14 md:py-20">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <h2 className="text-white text-2xl md:text-3xl font-poppins font-normal max-w-md">
            Get Started with the #1 Repair Shop POS
          </h2>
          <a
            href="#"
            className="btn-white px-10 py-4 text-lg font-semibold inline-block"
          >
            Start FREE Trial
          </a>
        </div>
      </div>
    </section>
  );
}
