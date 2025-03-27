import toyotaImage from "../assets/svg/toyota-color.svg";
import vercelImage from "../assets//svg/vercel-image.svg";
import figmaImage from "../assets/svg/figma-color.svg";
import rampImage from "../assets/svg/ramp-image.svg";
import homePageVid from "../assets/homepage-hero.mp4";

export function HeroSectionFirst() {
  return (
    <>
      <div className="w-100% m-auto max-w-7xl flex flex-col gap-36">
        <section className="grid auto-rows-min grid-cols-12 gap-[28px] w-full items-center row-gap-[50px] mx-auto mt-[30px]">
          <div>
            <header className=" grid-cols-5 col-span-5 flex flex-col gap-4 z-10">
              <h1 className="text-[76.5px] text-gray-900 font-semibold leading-[0.95] tracking-[-0.04em] m-0 p-0 balance-text">
                The happier workspace
              </h1>
              <p className="text-gray-700">
                Write Plan Collaborate. With a little help from AI.
              </p>

              <nav className="flex flex-wrap gap-2 mt-1 w-max">
                <button className="rounded-lg px-5 py-[11px] border-none shadow-none outline-none flex-grow bg-gray-900 text-white">
                  Get Notion free
                </button>
                <button className="rounded-lg px-5 py-[11px] border-none shadow-none outline-none flex-grow bg-gray-200 text-gray-900">
                  Request a demo
                </button>
              </nav>

              <div className="mt-6 max-w-full flex flex-col gap-2">
                <span className="m-0 text-[#78736f]">Trusted by teams at</span>
                <section className="grid grid-cols-4 gap-y-2 gap-x-6 items-center">
                  <img
                    src={toyotaImage}
                    alt="Toyota"
                    className="w-full h-auto max-h-[55px] object-contain"
                  />
                  <img
                    src={vercelImage}
                    alt="Vercel"
                    className="w-full h-auto max-h-[55px] object-contain"
                  />
                  <img
                    src={figmaImage}
                    alt="Figma"
                    className="w-full h-auto max-h-[55px] object-contain"
                  />
                  <img
                    src={rampImage}
                    alt="Ramp"
                    className="w-full h-auto max-h-[55px] object-contain"
                  />
                </section>
              </div>
            </header>
            <div className="col-start-6 col-span-7 flex items-center justify-center self-end">
              <video
                autoPlay
                loop
                muted
                className="w-full h-auto object-cover"
                src={homePageVid}
              ></video>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
