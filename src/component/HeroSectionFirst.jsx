import toyotaImage from "../assets/svg/toyota-color.svg";
import vercelImage from "../assets//svg/vercel-image.svg";
import figmaImage from "../assets/svg/figma-color.svg";
import rampImage from "../assets/svg/ramp-image.svg";
import homePageVid from "../assets/homepage.mp4";
import Button from "./Buttons";

export function HeroSectionFirst() {
  return (
    <div className="flex justify-between lg:items-end max-w-[1252px] mx-auto px-5 flex-col lg:flex-row py-10">
      <div className="flex flex-col gap-4 flex-1">
        <h1  className=" text-[76.5px] font-semibold leading-[0.95] tracking-[-0.04em] m-0 p-0 balance-text">The happier <br /> workspace</h1>
        <h2 className="text-gray-700 text-2xl font-medium leading-[1.2] tracking-[-0.02em] m-0 p-0 balance-text">Write. Plan. Collaborate. With a little help from AI.</h2>
        <div className="flex gap-3 p-x-2 flex-col sm:flex-row">
          <Button className="rounded-lg">Get Notion free</Button>
          <Button className="rounded-lg">Request a demo</Button>
        </div>
        <div className="mt-4">
          <p>Trusted by teams at</p>
          <div className="grid grid-cols-2 md:grid-cols-4 w-fit gap-4">
            <img src={toyotaImage} className=" w-[150px]" alt="Toyota" />
            <img src={vercelImage} className=" w-[150px]" alt="Vercel" />
            <img src={figmaImage} className=" w-[150px]" alt="Figma" />
            <img src={rampImage} className="w-[150px]" alt="Ramp" />
          </div>
        </div>
      </div>
      <div className="flex-1 lg:pl-20">
        <video
          src={homePageVid}
          className="h-auto w-full  max-h-[290px]"
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
}