"use client"
import heroSectionVideo from "@/assets/plan-screen-desktop.mp4" 
import { useEffect, useState } from "react"

export function HeroSectionThird() {
  const arrayofhero = [
    {
      title: "Building blocks",
      vidSource: "",
      subtitle: "100+ content types to communicate any idea.",
    },
    {
      title: "Collaborative tools",
      vidSource: "",
      subtitle: "Built for teams to share, suggest, and comment.",
    },
    {
      title: "AI-assisted",
      vidSource: "",
      subtitle: "Edit, draft, translate. Ask and AI will help.",
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
      <div className="flex flex-col gap-8">
        {/* Conditional rendering based on screen width */}
        {!isMobile ? (
          // Desktop layout (> 836px)
          <>
            <div className="flex flex-row gap-12">
              {/* Left side content */}
              <div className="w-1/2 space-y-6">
                <h1 className="text-5xl font-bold tracking-tight">Build perfect docs, together.</h1>
                <p className="text-lg text-muted-foreground">
                  Capture your ideas, get feedback from teammates, and ask AI to add the finishing touches.
                </p>
                <a href="" className="inline-flex items-center text-primary font-medium hover:underline">
                  Explore docs & notes→
                </a>
              </div>

              {/* Right side content */}
              <div className="w-1/2">
                <ul className="flex flex-row gap-6">
                  {arrayofhero.map((item, index) => (
                    <li key={index} className="p-4 bg-background flex-1">
                      {/* Video at the top */}
                      <div className="w-full max-w-[80px] aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                        {item.vidSource ? (
                          <video src={item.vidSource} className="w-full h-full object-cover" autoPlay muted loop />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <p className="text-xs text-muted-foreground">Video preview</p>
                          </div>
                        )}
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
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-8">
                <video src={heroSectionVideo}></video>
                {/* <p className="text-muted-foreground">Video content will be displayed here</p> */}
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
          </>
        ) : (
          // Mobile layout (≤ 836px)
          <>
            {/* Left side content */}
            <div className="w-full space-y-6">
              <h1 className="text-4xl font-bold tracking-tight">Build perfect docs, together.</h1>
              <p className="text-lg text-muted-foreground">
                Capture your ideas, get feedback from teammates, and ask AI to add the finishing touches.
              </p>
              <a href="" className="inline-flex items-center text-primary font-medium hover:underline">
                Explore docs & notes→
              </a>
            </div>

            {/* Video section */}
            <div className="w-full">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-8">
                <p className="text-muted-foreground">Video content will be displayed here</p>
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

            {/* Right side content - at the very bottom on mobile */}
            <div className="w-full">
              <ul className="flex flex-col md:flex-row gap-4">
                {arrayofhero.map((item, index) => (
                  <li key={index} className="p-4 bg-background flex-1">
                    {/* Video at the top */}
                    <div className="w-full max-w-[80px] aspect-video bg-muted rounded-md mb-4 overflow-hidden">
                      {item.vidSource ? (
                        <video src={item.vidSource} className="w-full h-full object-cover" autoPlay muted loop />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-xs text-muted-foreground">Video preview</p>
                        </div>
                      )}
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

