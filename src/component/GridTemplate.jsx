import { Target, ArrowRight } from "lucide-react"

export default function StartWithaTemplate() {
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
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    fill="var(--color-red-500)"
    className="NotionIconSvgWrapper_icon__In1uC"
    color="var(--color-red-500)"
    viewBox="0 0 64 64"
  >
    <path
      fill="currentColor"
      d="M30 20v34h-5l-1.89-3.79C22.35 48.7 21.23 48 19.53 48H6V12h16c4.94 0 8 3.06 8 8m12-8c-4.94 0-8 3.06-8 8v34h5l1.89-3.79c.76-1.51 1.88-2.21 3.58-2.21H58V12z"
    ></path>
  </svg>
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
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    fill="var(--color-blue-500)"
    className="NotionIconSvgWrapper_icon__In1uC"
    color="var(--color-blue-500)"
    viewBox="0 0 64 64"
  >
    <path
      fill="currentColor"
      d="M53 30c-.66 0-1.3.07-1.92.18l-1.42-3.79c1.08-.25 2.19-.39 3.34-.39v-3c0-7.4-4.6-12-12-12h-9v4h9.11l.91 2.44A26.1 26.1 0 0 0 34.25 23h-7.87l-1.5-4H12.99v4c3.55 0 6.4.95 8.59 2.86l-4.98 5.69A10.9 10.9 0 0 0 10.99 30c-6.08 0-11 4.92-11 11s4.92 11 11 11c5.39 0 9.87-3.88 10.81-9h16.19v-2c0-5.72 3.2-10.69 7.91-13.22l1.43 3.8C44.14 33.51 42 37 42 41c0 6.08 4.92 11 11 11s11-4.92 11-11-4.92-11-11-11m-33.38 4.18 4.51-5.16c.44.77.84 1.6 1.18 2.51l2.8 7.47h-6.3c-.33-1.8-1.1-3.44-2.19-4.82"
    ></path>
  </svg>
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
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    fill="var(--color-yellow-500)"
    className="NotionIconSvgWrapper_icon__In1uC"
    color="var(--color-yellow-500)"
    viewBox="0 0 64 64"
  >
    <path
      fill="currentColor"
      d="M30 30h22v26H12V8h18zm8-22h-4v18h18v-4z"
    ></path>
  </svg>
            </div>
            <h2 className="text-xl font-bold flex items-center">
              Meeting Notes <ArrowRight className="ml-2" size={20} />
            </h2>
          </div>

          {/* Vacation Planner */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-red-500 mb-4">
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    fill="var(--color-red-500)"
    className="NotionIconSvgWrapper_icon__In1uC"
    color="var(--color-red-500)"
    viewBox="0 0 64 64"
  >
    <path
      fill="currentColor"
      d="M50 14h-6v6h-4v-6H14c-4.94 0-8 3.06-8 8v20c0 4.94 3.06 8 8 8h26v-6h4v6h6c4.94 0 8-3.06 8-8V22c0-4.94-3.06-8-8-8M37 37l-10-2.5V40l4 2v3l-7-1.75L17 45v-3l4-2v-5.5L11 37v-4l10-5v-4c0-3.39 1.15-5 3-5s3 1.61 3 5v4l10 5z"
    ></path>
  </svg>
            </div>
            <h2 className="text-xl font-bold flex items-center">
              Vacation Planner <ArrowRight className="ml-2" size={20} />
            </h2>
          </div>

          {/* Editorial Calendar */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-teal-500 mb-4">
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    fill="var(--color-teal-500)"
    className="NotionIconSvgWrapper_icon__In1uC"
    color="var(--color-teal-500)"
    viewBox="0 0 64 64"
  >
    <path
      fill="currentColor"
      d="M48 12V6h-6v6H22V6h-6v6H8v40h48V12zm2 35H14V28h36z"
    ></path>
  </svg>
            </div>
            <h2 className="text-xl font-bold flex items-center">
              Editorial Calendar <ArrowRight className="ml-2" size={20} />
            </h2>
          </div>

          {/* Habit Tracker */}
          <div className="bg-gray-50 rounded-xl p-6">
            <div className="text-purple-500 mb-4">
            <svg
    xmlns="http://www.w3.org/2000/svg"
    width="3em"
    fill="var(--color-purple-500)"
    className="NotionIconSvgWrapper_icon__In1uC"
    color="var(--color-purple-500)"
    viewBox="0 0 64 64"
  >
    <path
      fill="currentColor"
      d="M32 8C18.75 8 8 18.75 8 32s10.75 24 24 24 24-10.75 24-24S45.25 8 32 8m-3 36.24-11-11L22.24 29 29 35.76 42.76 22 47 26.24z"
    ></path>
  </svg>
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

