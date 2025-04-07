"use client"
import heroSectionVideo from "@/assets/write-screen-desktop.mp4"

export function SecondHeroSection() {
  const arrayofhero = [
    {
      title: "Building blocks",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/write/write-building-blocks.mp4",
      subtitle: "100+ content types to communicate any idea.",
    },
    {
      title: "Collaborative tools",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/write/write-collaboration.mp4",
      subtitle: "Built for teams to share, suggest, and comment.",
    },
    {
      title: "AI-assisted",
      vidSource: "https://www.notion.com/front-static/pages/product/super-duper/write/write-ai.mp4",
      subtitle: "Edit, draft, translate. Ask and AI will help.",
    },
  ]

  const featuresArray = [
    {
      imgSrc: "https://www.notion.com/front-static/pages/product/super-duper/tools/evernote.svg",
      text: "Evernote",
    },
    {
      imgSrc: "https://www.notion.com/front-static/pages/product/super-duper/tools/gdocs.svg",
      text: "Google Docs",
    },
    {
      imgSrc: "https://www.notion.com/front-static/pages/product/super-duper/tools/coda.svg",
      text: "Coda",
    },
  ]

  return (
    <div className="w-full max-w-[1252px] mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Content */}
      <div className="space-y-6 order-1">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Build perfect docs, together.</h1>
        <p className="text-lg text-muted-foreground">
          Capture your ideas, get feedback from teammates, and ask AI to add the finishing touches.
        </p>
        <a href="" className="inline-flex items-center text-primary font-medium hover:underline">
          Explore docs & notes→
        </a>
      </div>

      {/* Right Content */}
      <div className="order-3 md:order-2">
        <ul className="grid grid-cols-1 xs:grid-cols-3 gap-4">
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
          <h4 className="text-lg font-semibold">Replaces</h4>
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
