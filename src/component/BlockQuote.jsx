import pin from "../assets/pin.png"
export function BlockQuote() {
    return(
      <section className="flex justify-center items-center w-full max-w-[1252px] m-auto py-16">
      <div className="relative max-w-none w-auto transform rotate-[-3deg]">
        <div className="absolute w-[64px] h-full top-[-50px] left-1/2 -translate-x-1/2 z-10">
          <img src={pin} alt="" className=" object-contain" />
        </div>
        <div className="relative bg-[#f8f7f4] px-6 py-8 lg:px-20 lg:py-16 lg:pt-14 shadow-md">
          <blockquote className="text-center">
            <p className="text-xl md:text-3xl lg:text-[42px] font-serif mb-4 whitespace-nowrap">
              "Your AI everything app."
            </p>
            <div className="flex justify-center "> 
           <img width={60} src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fshared%2Flogos%2Fblack%2Fforbes.png&w=96&q=75" alt="" />
           </div>
          </blockquote>
        </div>
      </div>
    </section>
    )
}