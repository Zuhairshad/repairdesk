import React from "react";

export default function Testimonial({
  quote,
  name,
  title,
  company,
  reversed = false,
}) {
  const imageSrc = reversed
    ? "/images/testimonial2.jpeg"
    : "/images/testimonial1.jpeg";

  const textBlock = (
    <div className="w-full lg:w-[60%] flex flex-col justify-center">
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-block w-8 h-[2px] bg-white" />
        <span className="text-white text-sm uppercase tracking-wider font-poppins">
          Testimonial
        </span>
      </div>

      <blockquote className="font-poppins font-light italic text-white text-lg md:text-xl leading-relaxed mb-8">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <div className="w-8 h-[2px] bg-white my-4" />

      <p className="text-white font-semibold uppercase tracking-wide text-sm font-poppins mb-1">
        {name}
      </p>
      <p className="text-white/60 text-sm font-poppins mb-6">
        {title}
        {title && company ? ", " : ""}
        {company}
      </p>

      <a
        href="#"
        className="inline-flex items-center text-white font-poppins font-medium hover:underline"
      >
        Start My Free Trial
        <img
          src="/images/arrow.svg"
          alt=""
          className="w-5 h-5 inline ml-2 brightness-0 invert"
        />
      </a>
    </div>
  );

  const imageBlock = (
    <div className="w-full lg:w-[40%] flex items-center justify-center">
      <img
        src={imageSrc}
        alt={`${name} testimonial photo`}
        className="rounded-lg object-cover w-full shadow-xl"
      />
    </div>
  );

  return (
    <section
      className="section-padding"
      style={{
        background: "linear-gradient(135deg, #3d405b 0%, #1e2035 100%)",
      }}
    >
      <div className="container-main">
        <div
          className={`flex flex-col gap-10 lg:gap-12 items-center ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
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
        quote="Our experience with AA Repairdesk has been a really exciting advancement for our business. While there was a transition period moving to the new system; the positive and cooperative attitude of the company is one that we really admire. Usman and his team go out of their way to assist their customers and are open to feedback and integrating new ideas into their software, as well as providing an extensive knowledge base and tailored support for your business model. Cannot recommend these guys enough for all the hard work and grit they pour into their software."
        name="Simon Nash"
        title="Owner"
        company="The iPhone Guy"
      />
      <Testimonial
        quote="We had good experience working with the team at AA Repairdesk in switching everything over from Quickbooks. This software is what I always dreamed of creating for my business. Thank you for all your help and continued improvements with AA Repairdesk!"
        name="Lyle Schrock"
        title="Owner"
        company="The Lab"
        reversed
      />
    </>
  );
}
