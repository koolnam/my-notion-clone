import Pin from "@/assets/pin.png"
export function BlockQuote() {
    return(
        <section className="flex justify-center items-center p-6 max-w-[1252px m-auto">
      <div className="relative max-w-md w-full transform rotate-[-2deg]">
        <div
          className="relative bg-[#f8f7f4] p-16 pt-12 shadow-md before:content-[''] before:absolute before:w-8 before:h-8 
          before:bottom-6
          before:bg-[url('@/assets/pin.png')] before:bg-contain before:bg-no-repeat before:top-2 before:left-1/2 before:-translate-x-1/2"
        >
          <blockquote className="text-center ">
            <p className="text-[42px] font-serif mb-4">"Your AI everything app."</p>
            <footer className="text-center font-medium">Forbes</footer>
          </blockquote>
        </div>
      </div>
        </section>
    )
}