import React from 'react';

export default function FeatureSection({
  label,
  title,
  description,
  image,
  imageAlt = '',
  items = [],
  reversed = false,
  bgColor = 'bg-white',
  ctaText,
  ctaLink = '#',
}) {
  const textBlock = (
    <div className="w-full lg:w-1/2">
      {label && (
        <p className="text-rd-teal text-sm uppercase tracking-widest font-poppins font-medium mb-3">
          {label}
        </p>
      )}
      <h2 className="text-[28px] md:text-[36px] font-poppins font-normal text-[#2e384d] leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 font-poppins text-base md:text-lg font-light leading-relaxed mb-6">
          {description}
        </p>
      )}
      {items.length > 0 && (
        <ul className="space-y-3 mb-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <img src="/images/check.svg" alt="" className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="text-gray-600 font-poppins text-[15px]">{item}</span>
            </li>
          ))}
        </ul>
      )}
      {ctaText && (
        <a href={ctaLink} className="btn-primary text-sm mt-2 inline-block">
          {ctaText}
        </a>
      )}
    </div>
  );

  const imageBlock = image ? (
    <div className="w-full lg:w-1/2">
      <img
        src={image}
        alt={imageAlt}
        className="w-full rounded-xl shadow-lg"
      />
    </div>
  ) : null;

  return (
    <section className={`${bgColor} section-padding`}>
      <div className="container-main">
        <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {textBlock}
          {imageBlock}
        </div>
      </div>
    </section>
  );
}
