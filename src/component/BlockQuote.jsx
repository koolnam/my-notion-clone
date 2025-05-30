import pin from "../assets/pin.png"
export function BlockQuote() {
    return(
      <section className="flex justify-center items-center w-full max-w-[1252px] m-auto py-16">
      <div className="max-w-none w-[80%] sm:w-[60%] md:w-auto transform rotate-[-3deg]">
        <div className="relative bg-[#f8f7f4] px-6 py-8 lg:px-20 lg:py-16 lg:pt-14 shadow-md">
        <div className="absolute w-[64px] h-full top-[-40px] lg:top-[-65px] left-[calc(50%+24px)] -translate-x-1/2 z-10">
          <img src={pin} alt="" className="w-[40px] lg:w-[80px] object-contain" />
        </div>
          <blockquote className="text-center">
            <p className="text-xl md:text-3xl lg:text-[42px] font-serif mb-4 whitespace-nowrap">
              "Your AI everything app."
            </p>
            <div className="flex justify-center "> 
           <img className="w-[50px] lg:w-[60px]" width={60} src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fshared%2Flogos%2Fblack%2Fforbes.png&w=96&q=75" alt="" />
           </div>
          </blockquote>
        </div>
      </div>
    </section>
    )
}