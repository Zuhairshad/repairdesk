import React from "react";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-rd-teal to-rd-dark-teal py-14 md:py-20">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-poppins font-semibold max-w-md mb-2">
              Get Started with the #1 Repair Shop POS
            </h2>
            <p className="text-white/70 font-dm-sans text-base">No credit card required · 14-day free trial · Cancel anytime</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link to="/contact" className="border border-white/40 text-white px-7 py-3.5 rounded-full font-poppins font-semibold hover:bg-white/10 transition-colors whitespace-nowrap">
              Request a Demo
            </Link>
            <a href="https://app.repairdesk.co/register" className="btn-white px-7 py-3.5 font-semibold inline-block whitespace-nowrap">
              Start Free Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
