import SvgIcon from "@/assets/svg/SvgIcon";
import heroilloleft from "@/assets/hero-illo-left.avif";
import heroilloright from "@/assets/hero-illo-right.avif";
export function NewHeroSection() {
  return (
    <div className="max-w-[83.75rem] mx-auto">
      <div>
        <div className="text-center pt-[4.6875rem]">
          <h1 className=" text-[2.625rem] font-semibold leading-[0.95] tracking-[-0.04em] m-0 p-0 balance-text">
            The happier workspace
          </h1>
          <p className="text-gray-700 text-lg font-medium tracking-[-0.02em] m-0 p-0 balance-text">
            Write. Plan. Collaborate. With a little help from AI.
          </p>
        </div>
      </div>

      {/* ✅ Add relative to contain absolute positioning */}
      <div className="relative">
        <div className="flex justify-center gap-8 xl:gap-12">
         
          <div className="shrink-1 hidden lg:block">
            <img
              src={heroilloleft}
              className="h-[22.5rem] object-contain"
              alt=""
            />
          </div>

          <div className="mt-8 md:mt-12 px-4 lg:px-0 relative h-[7.8125rem] lg:min-w-[30rem] flex-1 flex justify-center items-center">
            <SvgIcon className="absolute top-3 left-3" />
            <form action="" className="w-[100%] h-[7.8125rem]">
              <textarea
                placeholder="What would you like to make?"
                className="w-[100%] resize-none h-[100%] rounded-[.625rem] border-[.0831rem] border-[#e3e2e0] p-[16px] pl-[48px] transition-[height] duration-100 ease-in-out min-h-[7.5rem] max-h-[12.5rem] shadow-[0_0_0_.1875rem_rgba(200,200,200,0.149)]"
              ></textarea>
            </form>
          </div>

          <div className="shrink-1 hidden lg:block">
            <img
              src={heroilloright}
              className="h-[22.5rem] object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
