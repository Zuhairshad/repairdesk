import React from 'react';

export default function Testimonial({
  quote,
  name,
  title,
  company,
  imageAlt,
  reversed = false,
}) {
  const textBlock = (
    <div className="w-full md:w-1/2 flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-6">
        <span className="w-10 h-px bg-white/40" />
        <span className="text-white/70 font-poppins text-sm uppercase tracking-widest">
          Testimonial
        </span>
      </div>

      <p className="font-poppins font-light italic text-white text-lg md:text-xl leading-relaxed mb-8">
        “{quote}”
      </p>

      <div className="w-full h-px bg-white/20 mb-6" />

      <p className="text-white font-poppins font-bold uppercase tracking-wide text-base mb-1">
        {name}
      </p>
      <p className="text-white/70 font-poppins text-sm mb-6">
        {title}
        {title && company ? ', ' : ''}
        {company}
      </p>

      <a
        href="#"
        className="inline-flex items-center gap-2 text-white font-poppins font-medium hover:underline"
      >
        Start My Free Trial <span aria-hidden="true">&rarr;</span>
      </a>
    </div>
  );

  const imageBlock = (
    <div className="w-full md:w-1/2 flex items-center justify-center">
      <div
        role="img"
        aria-label={imageAlt || `${name} testimonial photo`}
        className="w-full aspect-[4/3] rounded-2xl bg-gray-300/80"
      />
    </div>
  );

  return (
    <section className="bg-rd-dark section-padding">
      <div className="container-main">
        <div
          className={`flex flex-col gap-10 md:gap-12 items-center ${
            reversed ? 'md:flex-row-reverse' : 'md:flex-row'
          }`}
        >
          {textBlock}
          {imageBlock}
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <>
      <Testimonial
        quote="Our experience with RepairDesk has been a really exciting advancement for our business. While there was a transition period moving to the new system; the positive and cooperative attitude of the company is one that we really admire. Usman and his team go out of their way to assist their customers and are open to feedback and integrating new ideas into their software, as well as providing an extensive knowledge base and tailored support for your business model. Cannot recommend these guys enough for all the hard work and grit they pour into their software."
        name="Simon Nash"
        title="Owner"
        company="The iPhone Guy"
        imageAlt="Simon Nash, Owner of The iPhone Guy"
      />
      <Testimonial
        quote="We had good experience working with the team at RepairDesk in switching everything over from Quickbooks. This software is what I always dreamed of creating for my business. Thank you for all your help and continued improvements with RepairDesk!"
        name="Lyle Schrock"
        title="Owner"
        company="The Lab"
        imageAlt="Lyle Schrock, Owner of The Lab"
        reversed
      />
    </>
  );
}
