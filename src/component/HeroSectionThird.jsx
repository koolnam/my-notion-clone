"use client"
import heroSectionVideo from "@/assets/plan-screen-desktop.mp4"

export function HeroSectionThird() {
  const arrayofhero = [
    {
      title: "Tasks and to-dos",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/plan/plan-todos.mp4",
      subtitle: "Tackle any project, big or small.",
    },
    {
      title: "Custom views",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/plan/plan-customizable.mp4",
      subtitle: "Visualize work in any format, from calendars to boards.",
    },
    {
      title: "Automations",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/plan/plan-automations.mp4",
      subtitle: "Put tedious tasks on autopilot.",
    },
  ]

  // New array for the bottom section items
  const featuresArray = [
    {
      imgSrc: "/placeholder.svg?height=20&width=20",
      text: "Feature one",
    },
    {
      imgSrc: "/placeholder.svg?height=20&width=20",
      text: "Feature two",
    },
    {
      imgSrc: "/placeholder.svg?height=20&width=20",
      text: "Feature three",
    },
  ]

  return (
    <div className="w-full max-w-[1252px] mx-auto px-4 md:px-6">
      <div className="flex flex-col gap-8">
        {/* Grid layout that changes based on screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left side content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {/* Different text for mobile/desktop */}
              <span className="md:hidden">Build perfect docs, together.</span>
              <span className="hidden md:inline">Your workflow. Your way.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {/* Different text for mobile/desktop */}
              <span className="md:hidden">
                Capture your ideas, get feedback from teammates, and ask AI to add the finishing touches.
              </span>
              <span className="hidden md:inline">
                All your projects, goals, calendars, roadmaps, and more—in one tool—personalized to how you and your
                team work.
              </span>
            </p>
            <a href="" className="inline-flex items-center text-primary font-medium hover:underline">
              {/* Different text for mobile/desktop */}
              <span className="md:hidden">Explore docs & notes→</span>
              <span className="hidden md:inline">Explore projects</span>
            </a>
          </div>

          {/* Right side content - cards */}
          <div className="hidden md:block">
            <ul className="grid grid-cols-3 gap-7">
              {arrayofhero.map((item, index) => (
                <li key={index} className="p-4 bg-background flex-1">
                  <div className="w-full max-w-[80px] aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                    <video src={item.vidSource} className="w-full h-[80px] object-cover" autoPlay muted playsInline />
                  </div>
                  <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Video section */}
        <div className="w-full">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-8 overflow-hidden">
            <video src={heroSectionVideo} className="w-full h-full object-cover" autoPlay muted playsInline />
          </div>
        </div>

        {/* Features section */}
        <div className="w-full">
          <div className="flex flex-wrap items-center gap-1 mb-8">
            <h4 className="text-lg font-semibold">Key Features:</h4>
            <ul className="flex items-center gap-4 p-0 m-0 list-none">
              {featuresArray.map((feature, index) => (
                <li key={index} className="flex items-center gap-1">
                  <img
                    src={feature.imgSrc || "/placeholder.svg"}
                    alt={`Feature ${index + 1}`}
                    className="w-5 h-5 object-contain"
                  />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile-only cards section at the bottom */}
        <div className="md:hidden w-full">
          <ul className="grid grid-cols-1 gap-4">
            {arrayofhero.map((item, index) => (
              <li key={index} className="p-4 bg-background flex-1">
                <div className="w-full max-w-[80px] aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                  <video src={item.vidSource} className="w-full h-full object-cover" autoPlay muted playsInline />
                </div>
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

