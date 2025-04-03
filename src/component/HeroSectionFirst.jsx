import toyotaImage from "../assets/svg/toyota-color.svg";
import vercelImage from "../assets//svg/vercel-image.svg";
import figmaImage from "../assets/svg/figma-color.svg";
import rampImage from "../assets/svg/ramp-image.svg";
import homePageVid from "../assets/homepage.mp4";
import Button from "./Buttons";

export function HeroSectionFirst() {
  return (
    <div className="flex justify-between  max-w-[1252px] mx-auto flex-col mdd:flex-row mdd:items-end px-[102.398px] py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-[#191918] font-semibold text-[53px] text-left leading-[50.35px] tracking-[-2.12px] md:text-[76.5px] md:leading-[72.675px] md:-tracking-[3.06px] max-w-[380px] md:mx-auto mdd:mx-0">
          The happier workspace
        </h1>
        <h2 className="text-[22px] text-[#191918] -tracking-[0.25px] leading-[28px] max-w-[445px] sm:max-w-full md:mx-auto mdd:mx-0">
          Write. Plan. Collaborate. With a little help from AI.
        </h2>
        <div className="flex gap-3 px-2 flex-col sm:mx-auto ms:flex-col mdd:text-left justify-center ms:justify-start">
          <Button className="rounded-lg bg-[#0081F2] px-[20px] py-[12px]">
            Get Notion free
          </Button>
          <Button className="rounded-lg bg-[#ebf5fe] text-[#087fe7] hover:bg-[#d6e1f5] px-[20px] py-[12px]">
            Request a demo
          </Button>
        </div>
        <div className="mt-4">
          <p className="text-[15px] text-[#78736f] ms:text-center md:text-left font-normal leading-5">
            Trusted by teams at
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 place-content-center md:max-w-[500px] mx-auto">
            <img src={toyotaImage} className=" w-[90px]" alt="Toyota" />
            <img src="https://www.notion.com/front-static/logos/generic/en/openai-v2.svg" className="w-[90px]" alt="Vercel" />
            <img src={figmaImage} className=" w-[90px]" alt="Figma" />
            <img src={rampImage} className="w-[90px]" alt="Ramp" />
          </div>
        </div>
      </div>
      <div className="">
        <video
          src={homePageVid}
          className="h-auto w-fit max-w-[500px] mx-auto md:max-[300px] lg:max-h-auto"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
}

//"max-w-[450px] mx-auto md:leading-[72.675px] lg:mx-0 sm:text-center md:text-left font-semibold tracking-[-2.06px] lg:leading-[60.675px] text-[53px] ms:text-[76.5px] text-[#191918]"

// text-center text-[#191918] text-2xl md:text-left font-medium leading-[1.2] tracking-[-0.02em]
