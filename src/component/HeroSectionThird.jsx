"use client"
import { ChevronRight } from "lucide-react"
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Content */}
      <div className="space-y-6 order-1">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Your workflow. Your way.</h1>
        <p className="text-lg text-muted-foreground">
        All your projects, goals, calendars, roadmaps, and more—in one tool—personalized to how you and your team work.
        </p>
        <a href="" className="inline-flex items-center text-primary font-medium hover:underline">
          Explore Projects{<ChevronRight/>}
        </a>
      </div>

      {/* Right Content */}
      <div className="order-3 md:order-2">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {arrayofhero.map((item, index) => (
            <li key={index} className="p-4 bg-background">
              <div className="w-full max-w-[80px] aspect-video bg-muted rounded-md mb-4">
                <video src={item.vidSource} className="w-full h-[80px] object-cover" autoPlay muted playsInline />
              </div>
              <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Section */}
      <div className="md:col-span-2 order-2 md:order-3">
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-8">
          <video src={heroSectionVideo} preload="none" autoPlay muted playsInline className="w-full h-full object-cover" />
        </div>
 {/* Features Section */}
 <div className="md:col-span-2 order-4">
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
      </div>

     
    </div>
  </div>
  )
}
