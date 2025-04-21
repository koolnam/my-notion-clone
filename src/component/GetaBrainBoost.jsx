import { ArrowRight } from "lucide-react"

export function GetaBrainBoost() {
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


  return (
    <div className="w-full max-w-[1252px] mx-auto px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Content */}
      <div className="space-y-6 order-1">
        <h1 className="text-4xl md:text-6xl font-bold md:leading-[64px] tracking-[-1.875px]">Get a brain boost.</h1>
        <p className="text-lg text-muted-foreground">
          Built right into your workspace, Notion AI is ready to brainstorm, summarize, help you write, and find what you’re looking for.
        </p>
        <a href="" className="inline-flex items-center text-blue-500 font-medium hover:underline decoration-black">
          Try Notion AI <span>{<ArrowRight size={19}/>}</span>
        </a>
      </div>
  
      {/* Right Content */}
      <div className="order-3 md:order-2">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-8">
          <video src='https://www.notion.com/front-static/pages/product/super-duper/ai/ai-screen-desktop.mp4' autoPlay muted playsInline loop className="w-full h-full object-cover" />
        </div>
      </div>
  
   
    </div>
  </div>
  
  )
}

