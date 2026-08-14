import React from 'react';

export default function PageHero({
  label,
  title,
  subtitle,
  ctaText = 'Start My Free Trial',
  ctaLink = '#',
  secondaryCta,
  secondaryCtaLink = '#',
  image,
  imageAlt = '',
  dark = true,
  centered = false,
}) {
  const bg = dark
    ? 'linear-gradient(135deg, #1e2035 0%, #2d2f45 50%, #1e2035 100%)'
    : '#F8F8FB';

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: bg }}
    >
      {dark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 30% 40%, rgba(1,109,116,0.15) 0%, transparent 70%)',
          }}
        />
      )}

      <div className="container-main relative z-10 py-16 md:py-20 lg:py-24">
        {centered ? (
          <div className="text-center max-w-3xl mx-auto">
            {label && (
              <p className={`text-sm uppercase tracking-widest font-poppins font-medium mb-3 ${dark ? 'text-rd-lime' : 'text-rd-teal'}`}>
                {label}
              </p>
            )}
            <h1 className={`font-poppins font-normal text-[32px] md:text-[42px] lg:text-[52px] leading-tight ${dark ? 'text-white' : 'text-[#2e384d]'}`}>
              {title}
            </h1>
            {subtitle && (
              <p className={`mt-6 text-base md:text-lg font-poppins font-light leading-relaxed max-w-2xl mx-auto ${dark ? 'text-white/80' : 'text-gray-500'}`}>
                {subtitle}
              </p>
            )}
            {ctaText && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={ctaLink} className={dark ? 'btn-white text-base px-8 py-3' : 'btn-primary text-base px-8 py-3'}>
                  {ctaText}
                </a>
                {secondaryCta && (
                  <a href={secondaryCtaLink} className={dark ? 'btn-outline text-base px-8 py-3' : 'btn-teal-outline text-base px-8 py-3'}>
                    {secondaryCta}
                  </a>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            <div className={`w-full ${image ? 'lg:w-[55%]' : ''} text-center lg:text-left`}>
              {label && (
                <p className={`text-sm uppercase tracking-widest font-poppins font-medium mb-3 ${dark ? 'text-rd-lime' : 'text-rd-teal'}`}>
                  {label}
                </p>
              )}
              <h1 className={`font-poppins font-normal text-[32px] md:text-[38px] lg:text-[48px] leading-tight ${dark ? 'text-white' : 'text-[#2e384d]'}`}>
                {title}
              </h1>
              {subtitle && (
                <p className={`mt-6 text-base md:text-lg font-poppins font-light leading-relaxed max-w-xl mx-auto lg:mx-0 ${dark ? 'text-white/80' : 'text-gray-500'}`}>
                  {subtitle}
                </p>
              )}
              {ctaText && (
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href={ctaLink} className={dark ? 'btn-white text-base px-8 py-3' : 'btn-primary text-base px-8 py-3'}>
                    {ctaText}
                  </a>
                  {secondaryCta && (
                    <a href={secondaryCtaLink} className={dark ? 'btn-outline text-base px-8 py-3' : 'btn-teal-outline text-base px-8 py-3'}>
                      {secondaryCta}
                    </a>
                  )}
                </div>
              )}
            </div>
            {image && (
              <div className="w-full lg:w-[45%]">
                <img
                  src={image}
                  alt={imageAlt}
                  className="w-full max-w-lg lg:max-w-none drop-shadow-2xl rounded-lg"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
