export default function StartTemplate() {
  const item = [
    {
      id: 1,
      title: "Company Wiki →",
    },
    {
      id: 2,
      title: "Project Roadmap →",
    },
    {
      id: 3,
      title: "OKRs →",
    },
    {
      id: 4,
      title: "Meeting Notes →",
    },
    {
      id: 5,
      title: "Vacation Planner→",
    },
    {
      id: 6,
      title: "Editorial Calendar →",
    },
    {
      id: 7,
      title: "Habit Tracker →",
    },
  ];
  return (
    <>
      <div className="w-full max-w-[1252px] mx-auto px-4 md:px-6">
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Build perfect docs, together.
          </h1>
          <a
            href=""
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            Explore docs & notes→
          </a>
        </div>
      </div>
      <div>
        <div>
            {item.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                </div>
            ))}
            <img src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fillustrated-icons%2FdocsStacked.png&w=256&q=75" alt="asdasd" />
        </div>
      </div>{" "}
    </>
  );
}
