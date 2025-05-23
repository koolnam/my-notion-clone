import { ArrowRight } from "lucide-react"

export function BuildPerfect() {
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
    <div className="w-full max-w-[1252px] mx-auto px-4 md:px-13">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Content */}
      <div className="space-y-6 order-1">
        <h1 className="text-4xl md:text-6xl font-bold md:leading-[64px] tracking-[-1.875px] ">Build perfect docs, together.</h1>
        <p className="text-lg text-muted-foreground">
          Capture your ideas, get feedback from teammates, and ask AI to add the finishing touches.
        </p>
        <a href="" className="inline-flex items-center text-blue-500 font-medium hover:underline decoration-black">
          Explore docs & notes <span><ArrowRight size={18}/></span>
        </a>
      </div>

      {/* Right Content */}
      <div className="order-3 md:order-2">
        <ul className="grid grid-cols-1 xs:grid-cols-3 gap-4">
          {arrayofhero.map((item, index) => (
            <li key={index} className="p-4 bg-background">
                       <div className="w-full max-w-[80px] bg-muted rounded-md mb-4">
                <video src={item.vidSource} className="size-full object-cover max-h-[80px]" autoPlay muted playsInline />
              </div>
              <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Video Section */}
      <div className="md:col-span-2 order-2 md:order-3">
        <div className="aspect-video bg-muted rounded-2xl  flex items-center justify-center mb-8">
          <video src='https://www.notion.com/front-static/pages/product/super-duper/write/write-screen-desktop.mp4'  loop autoPlay playsInline muted className="w-full rounded-[inherit] h-full object-cover" />
        </div>
 {/* Features Section */}
 <div className="md:col-span-2 order-4">
        <div className="flex flex-wrap items-center gap-1 mb-8">
        <h4 className="text-md font-semibold">Replaces</h4>
          <ul className="flex flex-wrap items-center gap-4 p-0 m-0 list-none">
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
