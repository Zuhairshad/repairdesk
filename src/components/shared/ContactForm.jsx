import React, { useState } from 'react';

export default function ContactForm({ title = 'Get in Touch', subtitle }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-main max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-[38px] font-poppins font-normal text-[#2e384d] mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-500 font-poppins text-lg font-light">{subtitle}</p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 font-poppins text-sm text-[#2e384d] focus:border-rd-teal focus:ring-1 focus:ring-rd-teal outline-none transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 font-poppins text-sm text-[#2e384d] focus:border-rd-teal focus:ring-1 focus:ring-rd-teal outline-none transition-colors"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 font-poppins text-sm text-[#2e384d] focus:border-rd-teal focus:ring-1 focus:ring-rd-teal outline-none transition-colors"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 font-poppins text-sm text-[#2e384d] focus:border-rd-teal focus:ring-1 focus:ring-rd-teal outline-none transition-colors"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 font-poppins text-sm text-[#2e384d] focus:border-rd-teal focus:ring-1 focus:ring-rd-teal outline-none transition-colors resize-none"
          />
          <div className="text-center">
            <button type="submit" className="btn-primary px-12 py-3.5 text-base">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
