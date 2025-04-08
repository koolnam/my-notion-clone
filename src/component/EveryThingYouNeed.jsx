import React from "react";
import { ArrowRight } from "lucide-react";
const layoutItems = [
  {
    title: "Docs",
    description: "Build any page, communicate any idea.",
    src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fillustrated-icons%2FdocsStacked.png&w=256&q=100",
    type:"img"
  },
  {
    title: "Wiki",
    description: "One home base for all your knowledge.",
   src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fillustrated-icons%2FbookFlat.png&w=256&q=100",
    type:"img"
  },
  {
    title: "Projects",
    description: "Manage any project from beginning to end.",
    src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fillustrated-icons%2Ftarget.png&w=256&q=75",
    type:"img"
  },
  {
    title: "Notion AI",
    description: "Finds what you need. Does what you need.",
    src: "https://www.notion.com/front-static/pages/product/super-duper/everything/everything-you-need-ai.mp4",
    type:"video"
  },
  {
    title: "Calendar",
    description: "See all your commitments in one place.",
    src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fillustrated-icons%2FnotionCalendarLogo.png&w=256&q=100"
  },
  {
    title: "Goals",
    description: "Track progress toward what's most important.",
    src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fillustrated-icons%2Ftrophy.png&w=256&q=100"
  },
  {
    title: "Sites",
    description: "Make any page a website in minutes.",
    src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fillustrated-icons%2Fglobe.png&w=256&q=100"
  },
  {
    title: "Templates",
    description: "Get started with one of 30,000+ templates.",
    src: "https://www.notion.com/_next/image?url=%2Ffront-static%2Fillustrated-icons%2Fshapes1.png&w=256&q=75"
  }
];

const EveryThingYouNeed = () => {
  return (
    <div className="max-w-[1252px] mx-auto py-[40px] px-[30px]">
      <h2 className="text-[60px] font-bold leading-[64px] tracking-[-1.875px] text-[#191918] max-w-[550px] mb-[48px]">
        Everything you need to do your best work.
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {layoutItems.map((item, index) => (
          <div key={index} className="p-4 bg-white">
            <div className="flex flex-col gap-2">
            {item.type === "video" ? (
       <video
          src={item.src}
          className="size-16 object-contain"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
        src={item.src}
        alt={item.title}
        className="size-16 object-contain"
      />
      )}
              <h2 className="text-2xl font-medium flex">{item.title} <span>{<ArrowRight/>}</span> </h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EveryThingYouNeed;
