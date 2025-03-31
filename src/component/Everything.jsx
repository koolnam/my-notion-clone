export default function FeatureGrid() {
  const layoutItems = [
    {
      id: 1,
      title: "Docs  →",
      description: "Build any page, communicate any idea.",
    },
    {
      id: 2,
      title: "Wiki  →",
      description: "One home base for all your knowledge.",
    },
    {
      id: 3,
      title: "Projects  →",
      description: "Manage any project from beginning to end.",
    },
    {
      id: 4,
      title: "Notion AI  →",
      description: "Finds what you need. Does what you need.",
    },
    {
      id: 5,
      title: "Calendar  →",
      description: "See all your commitments in one place.",
    },
    {
      id: 6,
      title: "Goals  →",
      description: "Track progress toward what's most important.",
    },
    {
      id: 7,
      title: "Sites  →",
      description: "Make any page a website in minutes.",
    },
    {
      id: 8,
      title: "Templates  →",
      description: "Get started with one of 30,000+ templates.",
    }
  ];


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
}



