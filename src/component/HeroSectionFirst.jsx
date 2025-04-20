import toyotaImage from "../assets/svg/toyota-color.svg";
import figmaImage from "../assets/svg/figma-color.svg";
import rampImage from "../assets/svg/ramp-image.svg";
import homePageVid from "../assets/homepage.mp4";
import Button from "./Buttons";

export function HeroSectionFirst() {
  return (
    <div className="flex justify-between max-w-[1252px] mx-auto flex-col mdd:flex-row mdd:items-end py-10 px-8 gap-6">
      <div className="flex flex-col gap-4 sm:items-center mdd:items-start">
        <h1 className="text-[#191918] font-semibold text-[53px]  ms:text-center mmd:text-left leading-[50.35px] tracking-[-1px] md:text-[76.5px] md:leading-[80px] md:tracking-[-3.06px] max-w-[380px]">
          The happier workspace
        </h1>
        <h2 className="text-[22px] text-[#191918] -tracking-[0.25px] leading-[28px] max-w-[445px] sm:max-w-full md:mx-auto mdd:mx-0">
          Write. Plan. Collaborate. With a little help from AI.
        </h2>
        <div className="flex gap-3 flex-col  mdd:flex-row">
          <Button className="rounded-lg bg-[#0081F2] px-[20px] py-[12px]">
            Get Notion free
          </Button>
          <Button className="rounded-lg bg-[#ebf5fe] text-[#087fe7] hover:bg-[#d6e1f5] px-[20px] py-[12px]">
            Request a demo
          </Button>
        </div>

        <div className="mt-4">
  <p className="text-[15px] text-[#78736f] sm:text-center md:text-left font-normal leading-5">
    Trusted by teams at
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6  place-items-start mt-2">
    <img src={toyotaImage} className="w-[90px]" alt="Toyota" />
    <img
      src="https://www.notion.com/front-static/logos/generic/en/openai-v2.svg"
      className="w-[90px]"
      alt="Vercel"
    />
    <img src={figmaImage} className="w-[90px]" alt="Figma" />
    <img src={rampImage} className="w-[90px]" alt="Ramp" />
  </div>
</div>

      </div>
      <div className="flex justify-center">
        <video
          src={homePageVid}
          className="h-auto w-full max-w-[340px] md:max-w-[400px] lg:max-w-[450px]  xl:max-w-[600px]"
          autoPlay
          muted
        />
      </div>
    </div>
  );
}

//"max-w-[450px] mx-auto md:leading-[72.675px] lg:mx-0 sm:text-center md:text-left font-semibold tracking-[-2.06px] lg:leading-[60.675px] text-[53px] ms:text-[76.5px] text-[#191918]"

// text-center text-[#191918] text-2xl md:text-left font-medium leading-[1.2] tracking-[-0.02em]
