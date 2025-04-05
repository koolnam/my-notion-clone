"use client"
import heroSectionVideo from "@/assets/ai-screen-desktop.mp4" 
import { useEffect, useState } from "react"

export function HeroSectionFifth() {
  const arrayofhero = [
    {
      title: "Instant answers",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/ai/ai-answers.mp4",
      subtitle: "Ask any question about a team’s docs and projects.",
    },
    {
      title: "Personalized editor",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/ai/ai-editor.mp4",
      subtitle: "Generate content that’s always relevant.",
    },
    {
      title: "AI connectors beta",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/ai/ai-connectors.mp4",
      subtitle: "Access info from Slack, Google Drive and more, right inside Notion",
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

  // State to track if screen width is <= 836px
  const [isMobile, setIsMobile] = useState(false)

  // Effect to check screen width and update state
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 836)
    }

    // Initial check
    checkScreenWidth()

    // Add event listener for resize
    window.addEventListener("resize", checkScreenWidth)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenWidth)
  }, [])

  return (
    <div className="w-full max-w-[1252px] mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Content */}
      <div className="space-y-6 order-1">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get a brain boost.</h1>
        <p className="text-lg text-muted-foreground">
          Built right into your workspace, Notion AI is ready to brainstorm, summarize, help you write, and find what you’re looking for.
        </p>
        <a href="" className="inline-flex items-center text-primary font-medium hover:underline">
          Try Notion AI→
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
  
  )
}

