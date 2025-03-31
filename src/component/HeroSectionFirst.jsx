import toyotaImage from "../assets/svg/toyota-color.svg";
import vercelImage from "../assets//svg/vercel-image.svg";
import figmaImage from "../assets/svg/figma-color.svg";
import rampImage from "../assets/svg/ramp-image.svg";
import homePageVid from "../assets/homepage.mp4";

export function HeroSectionFirst() {
  return (
    <div className="flex justify-between max-w-[1252px]  mx-auto">
      <div>
        <h1  className=" text-[76.5px] font-semibold leading-[0.95] tracking-[-0.04em] m-0 p-0 balance-text">The happier workspace</h1>
        <h2 className="text-gray-700 text-2xl font-medium leading-[1.2] tracking-[-0.02em] m-0 p-0 balance-text">Write. Plan. Collaborate. With a little help from AI.</h2>
        <div>
          <button>Get Notion free</button>
          <button>Request a demo</button>
        </div>
        <div className="mt-4">
          <p>Trusted by teams at</p>
          <div className="flex gap-2">
            <img src={toyotaImage} className=" w-[150px]" alt="Toyota" />
            <img src={vercelImage} className=" w-[150px]" alt="Vercel" />
            <img src={figmaImage} className=" w-[150px]" alt="Figma" />
            <img src={rampImage} className="w-[150px]" alt="Ramp" />
          </div>
        </div>
      </div>
      <div>
        <video
          src={homePageVid}
          className="w-[630px] h-[348px]"
          autoPlay
          muted
          loop
        />
      </div>{" "}
    </div>
  );
}