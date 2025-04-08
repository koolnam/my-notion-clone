import { Book, Bike, Target, FileText, Plane, Calendar, CheckCircle, ArrowRight } from "lucide-react"

export default function ResourceGrid() {
  return (
    <div className="container max-w-[1252px] mx-auto p-4">
  <div className="space-y-6 order-1">
        <h1 className="text-4xl md:text-6xl font-bold md:leading-[64px] max-w-[650px] tracking-[-1.875px] text-balance">Start with a template. Build anything</h1>
        <a href="" className="inline-flex items-center text-blue-500 pb-5 font-medium hover:underline">
         Browse all templates <span className="ml-1"> <ArrowRight className="size-4" /> </span>
      </a>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Large Company Wiki Card - Takes full width on mobile/tablet, 1/3 on desktop */}
        <div className="lg:col-span-3 overflow-hidden lg:row-span-3 bg-gray-50 rounded-xl p-6 flex flex-col">

          
          <div className="mb-6">
            <div className="text-red-500 mb-4">
              <Book size={40} />
            </div>
            <h2 className="text-2xl font-bold flex items-center">
              Company Wiki <ArrowRight className="ml-2" size={20} />
            </h2>
          </div>

        
            <div className="relative w-full h-auto lg:h-[400px] lg:w-[600px]">
              <img
                src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fpages%2Fproduct%2Fsuper-duper%2Fwiki-template.png&w=3840&q=75"
                alt="Company wiki preview"
                className="object-cover size-full rounded-md border border-gray-100"
              />
            </div>
      
        </div>

        {/* Grid of smaller cards - 2x3 on desktop, single column on tablet/mobile */}
        <div className="lg:col-span-3 row-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Roadmap */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-blue-500 mb-4">
              <Bike size={40} />
            </div>
            <h2 className="text-xl font-bold flex items-center">
              Project Roadmap <ArrowRight className="ml-2" size={20} />
            </h2>
          </div>

          {/* OKRs */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-orange-500 mb-4">
              <Target size={40} />
            </div>
            <h2 className="text-xl font-bold flex items-center">
              OKRs <ArrowRight className="ml-2" size={20} />
            </h2>
          </div>

          {/* Meeting Notes */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-amber-500 mb-4">
              <FileText size={40} />
            </div>
            <h2 className="text-xl font-bold flex items-center">
              Meeting Notes <ArrowRight className="ml-2" size={20} />
            </h2>
          </div>

          {/* Vacation Planner */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-red-500 mb-4">
              <Plane size={40} />
            </div>
            <h2 className="text-xl font-bold flex items-center">
              Vacation Planner <ArrowRight className="ml-2" size={20} />
            </h2>
          </div>

          {/* Editorial Calendar */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-teal-500 mb-4">
              <Calendar size={40} />
            </div>
            <h2 className="text-xl font-bold flex items-center">
              Editorial Calendar <ArrowRight className="ml-2" size={20} />
            </h2>
          </div>

          {/* Habit Tracker */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-purple-500 mb-4">
              <CheckCircle size={40} />
            </div>
            <h2 className="text-xl font-bold flex items-center">
              Habit Tracker <ArrowRight className="ml-2" size={20} />
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

