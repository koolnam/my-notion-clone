"use client"
import heroSectionVideo from "@/assets/organize-screen-desktop.mp4" 
import { useEffect, useState } from "react"

export function HeroSectionFourth() {
  const arrayofhero = [
    {
      title: "Teamspaces",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/organize/organize-teamspaces.mp4",
      subtitle: "Dedicated spaces for every team & project",
    },
    {
      title: "Integrations",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/organize/organize-integrations.mp4",
      subtitle: "Connected to all your other tools.",
    },
    {
      title:"Just ask AI",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/organize/organize-ai.mp4",
      subtitle: "Trusted answers across your apps.",
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Content */}
      <div className="space-y-6 order-1">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Find everything. Instantly.</h1>
        <p className="text-lg text-muted-foreground">
        No more endless searching. Our built-in AI finds what you're looking for, whether its stored in Notion or one of your other apps. 
        </p>
        <a href="" className="inline-flex items-center text-primary font-medium hover:underline">
        Explore knowledge management→
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

// Find everything. Instantly. 
// 