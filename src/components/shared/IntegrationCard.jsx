import React from 'react';
import { Link } from 'react-router-dom';

export default function IntegrationCard({ logo, name, description, link }) {
  const Wrapper = link ? Link : 'div';
  const wrapperProps = link ? { to: link } : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="bg-white rounded-xl p-6 shadow-[0_6px_20px_rgba(60,63,64,0.07)] border border-gray-50 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
    >
      {logo && (
        <img src={logo} alt={name} className="h-12 w-auto object-contain mb-4" />
      )}
      <h3 className="font-poppins font-semibold text-[#2e384d] text-base mb-2">{name}</h3>
      {description && (
        <p className="text-gray-500 font-poppins text-sm leading-relaxed">{description}</p>
      )}
    </Wrapper>
  );
}
