import React from "react";

const layoutItems = [
  {
    title: "Docs →",
    description: "Build any page, communicate any idea.",
    imgSrc: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fillustrated-icons%2FdocsStacked.png&w=256&q=100"
  },
  {
    title: "Wiki →",
    description: "One home base for all your knowledge.",
    imgSrc: "/icons/wiki.svg"
  },
  {
    title: "Projects →",
    description: "Manage any project from beginning to end.",
    imgSrc: "/icons/projects.svg"
  },
  {
    title: "Notion AI →",
    description: "Finds what you need. Does what you need.",
    imgSrc: "/icons/ai.svg"
  },
  {
    title: "Calendar →",
    description: "See all your commitments in one place.",
    imgSrc: "/icons/calendar.svg"
  },
  {
    title: "Goals →",
    description: "Track progress toward what's most important.",
    imgSrc: "/icons/goals.svg"
  },
  {
    title: "Sites →",
    description: "Make any page a website in minutes.",
    imgSrc: "/icons/sites.svg"
  },
  {
    title: "Templates →",
    description: "Get started with one of 30,000+ templates.",
    imgSrc: "/icons/templates.svg"
  }
];

const FeatureGrid = () => {
  return (
    <div className="max-w-[1252px] mx-auto py-[40px] px-[30px]">
      <h2 className="text-[60px] font-bold leading-[64px] tracking-[-1.875px] text-[#191918] max-w-[550px] mb-[48px]">
        Everything you need to do your best work.
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {layoutItems.map((item, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-col gap-2">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="size-16 object-contain"
              />
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
