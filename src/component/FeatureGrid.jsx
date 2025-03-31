import React from "react";

const layoutItems = [
  { title: "Docs →", description: "Build any page, communicate any idea." },
  { title: "Wiki →", description: "One home base for all your knowledge." },
  { title: "Projects →", description: "Manage any project from beginning to end." },
  { title: "Notion AI →", description: "Finds what you need. Does what you need." },
  { title: "Calendar →", description: "See all your commitments in one place." },
  { title: "Goals →", description: "Track progress toward what's most important." },
  { title: "Sites →", description: "Make any page a website in minutes." },
  { title: "Templates →", description: "Get started with one of 30,000+ templates." }
];

const FeatureGrid = () => {
  return (
    <div className="max-w-[1252px] mx-auto py-[40px] px-[30px]">
      <h2 className="text-[60px] font-bold leading-[64px] tracking-[-1.875px] text-[#191918] max-w-[550px] mb-[48px]">
        Everything you need to do your best work.
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {layoutItems.map((item, index) => (
          <div key={index} className="flex flex-row items-center p-4 bg-white rounded-lg shadow-md">
            <div className="flex flex-col">
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
