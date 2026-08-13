import React from 'react';

export default function FeatureGrid({ title, subtitle, features = [], columns = 3 }) {
  const colClass =
    columns === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-[32px] md:text-[38px] font-poppins font-normal text-[#2e384d] mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-gray-500 font-poppins text-lg font-light max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`grid ${colClass} gap-6`}>
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 md:p-8 shadow-[0_6px_20px_rgba(60,63,64,0.07)] border border-gray-50 hover:shadow-lg transition-shadow duration-300"
            >
              {feat.icon && (
                <div className="w-12 h-12 rounded-xl bg-[#F0FAFB] flex items-center justify-center mb-4">
                  {typeof feat.icon === 'string' ? (
                    <img src={feat.icon} alt="" className="w-7 h-7 object-contain" />
                  ) : (
                    feat.icon
                  )}
                </div>
              )}
              <h3 className="text-lg font-poppins font-semibold text-[#2e384d] mb-2">
                {feat.title}
              </h3>
              <p className="text-gray-500 font-poppins text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
