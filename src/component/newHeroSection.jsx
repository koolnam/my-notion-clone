import SvgIcon from "@/assets/svg/SvgIcon";
import heroilloleft from "@/assets/hero-illo-left.avif";
import heroilloright from "@/assets/hero-illo-right.avif";
import { useState } from "react";

export function NewHeroSection() {
  const [inputValue, setInputValue] = useState(""); // Stores textarea content
  const [hoverText, setHoverText] = useState(""); // Stores hover placeholder

  const handleMouseEnter = (newText) => setHoverText(newText);
  const handleMouseLeave = () => setHoverText("");
  const handleClick = (newText) => setInputValue(newText);
  return (
  
<div className="max-w-[83.75rem] mx-auto">
      <div>
        <div className="text-center pt-[4.6875rem]">
          <h1 className="text-[2.625rem] font-semibold leading-[0.95] tracking-[-0.04em] m-0 p-0 balance-text">
            The happier workspace
          </h1>
          <p className="text-gray-700 text-lg font-medium tracking-[-0.02em] m-0 p-0 balance-text">
            Write. Plan. Collaborate. With a little help from AI.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex justify-center gap-8 xl:gap-12">
          <div className="shrink-1 hidden lg:block">
            <img
              src={heroilloleft}
              className="h-[22.5rem] object-contain"
              alt="Left illustration"
            />
          </div>

          <div className="mt-8 md:mt-12 px-4 lg:px-0 relative flex-1 flex flex-col items-center">
            <div className="relative w-full lg:min-w-[30rem]">
              <div className="absolute top-3 left-3">
              <SvgIcon className="" />
              </div>
              <form action="" className="w-full">
                <textarea
                  placeholder={hoverText || "What would you like to make?"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full resize-none h-[7.8125rem] rounded-[.625rem] border-[.0831rem] border-[#e3e2e0] p-[16px] pl-[48px] transition-[height] duration-100 ease-in-out min-h-[7.5rem] max-h-[12.5rem] shadow-[0_0_0_.1875rem_rgba(200,200,200,0.149)]"
                ></textarea>
              </form>

              {/* Create for free button with negative margin to position inside textarea */}
              <div className="flex justify-center md:justify-end md:-mt-16 md:mr-4 mt-4">
                <a
                  href="#"
                  className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                >
                  <div>Create for free</div>
                </a>
              </div>
            </div>

            {/* buttons  */}
            {/* all six buttons  */}
       {[
  {
    text: "Manage projects",
    hoverText: "Build a tool to manage projects. It should include a due dates, statuses, and assignees",
    icon: "M36 32c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4m20 0c0 13.25-10.75 24-24 24S8 45.25 8 32 18.75 8 32 8s24 10.75 24 24m-6 0c0-9.94-8.06-18-18-18s-18 8.06-18 18 8.06 18 18 18 18-8.06 18-18m-4 0c0 7.73-6.27 14-14 14s-14-6.27-14-14 6.27-14 14-14 14 6.27 14 14m-6 0c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8 8-3.58 8-8",
    style: "border border-red-200 bg-red-100 hover:text-red-500 hover:border-red-500 text-red-600",
  },
  {
    text: "Organize documents",
    hoverText: "Create a document hub to track the status, author, and other info about our team's documents",
    icon: "M48 16v40h-4L32 44 20 56h-4V16c0-4.94 3.06-8 8-8h16c4.94 0 8 3.06 8 8",
    style: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
  {
    text: "Brainstorm ideas",
    hoverText: "Create a system for brainstorming where my teammates and I can add ideas and vote for our favorites",
    icon: "M32 6c-9.94 0-18 8.06-18 18 0 4.8 1.91 9.41 5.3 12.8l2.93 2.93A6.05 6.05 0 0 1 24 44h16c0-1.6.64-3.14 1.77-4.27l2.93-2.93c3.4-3.4 5.3-8 5.3-12.8 0-9.94-8.06-18-18-18m8 18h-6v14h-4V24h-6v-4h16zM24 48h16v4l-6 6h-4l-6-6z",
    style: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
  {
    text: "Track todos",
    hoverText: "Create a simple todo list",
    icon: "M56 13v6H22v-6zM22 35h34v-6H22zm0 16h34v-6H22zM12 12c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 16c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 16c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4",
    style: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
  {
    text: "Set goals & OKRs",
    hoverText: "Make a tracker for goals and OKRs that lets me track all of the goals across our teams",
    icon: "M32 8C18.75 8 8 18.75 8 32s10.75 24 24 24 24-10.75 24-24S45.25 8 32 8m-3 36.24-11-11L22.24 29 29 35.76 42.76 22 47 26.24z",
    style: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
  {
    text: "Take notes",
    hoverText: "Help me keep track of all of my notes",
    icon: "m39.17 17.76 7.07 7.07L19.07 52l-9.66 4L8 54.59l4-9.66zM48.93 8 42 14.93 49.07 22 56 15.07z",
    style: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
].map(({text,label},index)=>(
        <button key={index}
        onMouseEnter={() => handleMouseEnter(text)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(text)}
        >
  <span>{label}</span>
  <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" className="w-5 h-5 fill-current" viewBox="0 0 64 64">
              <path fill="currentColor" d={button.icon}></path>
            </svg>
          </div>
          <span>{button.text}</span>
        </button>
       ))}

      {/* end six btns */}
              </div>
              
          </div>

          <div className="shrink-1 hidden lg:block">
            <img
              src={heroilloright}
              className="h-[22.5rem] object-contain"
              alt="Right illustration"
            />
          </div>
        </div>
      </div>
    
  );
}
