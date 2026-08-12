import React, { useState } from 'react';

const stories = [
  { label: 'WSA' },
  { label: 'Techy' },
  { label: 'Savannah iDoctor' },
  { label: 'Computer Repair Doctor' },
  { label: 'iFixScreens' },
  { label: 'First Response Phone Repair' },
];

const PlayIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v14l11-7-11-7z" />
  </svg>
);

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-px bg-rd-teal" />
          <span className="text-rd-teal font-poppins text-sm uppercase tracking-widest font-medium">
            Success Stories
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold font-dm-sans text-rd-dark max-w-2xl mb-10">
          Trusted by More than 3000+ Repair Stores
        </h2>

        <div className="w-full aspect-video rounded-xl bg-gray-800 flex items-center justify-center relative overflow-hidden mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900" />
          <button
            type="button"
            className="relative z-10 inline-flex items-center gap-2 bg-rd-teal hover:bg-rd-dark-teal transition-colors text-white rounded-full px-6 py-3 font-poppins font-medium"
          >
            <PlayIcon className="w-4 h-4" />
            Watch Testimonial
          </button>
          <span className="absolute bottom-4 left-4 z-10 text-white/80 text-sm font-poppins">
            {stories[activeTab].label}
          </span>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1">
          {stories.map((story, index) => (
            <button
              key={story.label}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`shrink-0 bg-white border rounded-lg p-4 cursor-pointer transition-all font-dm-sans text-sm font-semibold whitespace-nowrap ${
                activeTab === index
                  ? 'border-rd-teal shadow-md text-rd-teal'
                  : 'border-gray-200 text-gray-500 hover:border-gray-300'
              }`}
            >
              {story.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
