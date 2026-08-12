import React, { useState } from "react";

const videoIds = [
  "PSXAWZufMz4",
  "WKvCJld98v0",
  "0oTx9Sbi2AI",
  "vKQiEmDbDuU",
  "PnjJ3FsY40A",
  "Me4tV77122c",
];

const tabs = [
  { logo: "/images/logos/wsa.svg", alt: "WSA" },
  { logo: "/images/logos/techy.png", alt: "Techy" },
  { logo: "/images/logos/savannah.png", alt: "Savannah iDoctor" },
  { logo: "/images/logos/crd.png", alt: "Computer Repair Doctor" },
  { logo: "/images/logos/ifixscreens.svg", alt: "iFixScreens" },
  { logo: "/images/logos/firstresponse.png", alt: "First Response Phone Repair" },
];

export default function SuccessStories() {
  const [activeTab, setActiveTab] = useState(5);

  const currentVideoId = videoIds[activeTab];
  const thumbnailUrl = `https://i.ytimg.com/vi/${currentVideoId}/hqdefault.jpg`;

  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-rd-teal inline-block" />
            <span className="text-rd-teal text-sm uppercase tracking-wider font-poppins font-medium">
              Success Stories
            </span>
          </div>
          <h2 className="text-[32px] md:text-[38px] font-poppins font-normal text-[#2e384d]">
            Trusted by More than 3000+ Repair Stores
          </h2>
        </div>

        {/* Video Placeholder */}
        <div
          className="relative w-full rounded-xl overflow-hidden bg-gray-800"
          style={{ aspectRatio: "16 / 9" }}
        >
          <img
            src={thumbnailUrl}
            alt={tabs[activeTab].alt + " testimonial"}
            className="absolute inset-0 w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-[200px] h-[45px] bg-rd-teal rounded-full flex items-center justify-center text-white text-sm font-poppins gap-2 hover:bg-rd-dark-teal transition-colors shadow-lg">
              <span className="text-lg">&#9654;</span>
              Watch Testimonial
            </button>
          </div>
        </div>

        {/* Tab Row */}
        <div className="flex flex-row gap-4 overflow-x-auto scrollbar-hide mt-6 pb-2">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex-shrink-0 px-6 py-3 bg-white border rounded-lg cursor-pointer transition-all flex items-center justify-center min-w-[140px] ${
                activeTab === index
                  ? "border-rd-teal border-2 shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={tab.logo}
                alt={tab.alt}
                className="h-10 md:h-12 object-contain"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
