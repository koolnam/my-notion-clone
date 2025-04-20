import Button from "./Buttons";


const ProductCard = ({ title, tryHref, downloadHref, imageSrc, imageAlt }) => {
  return (
    <div className="bg-[#f6f5f4] rounded-xl p-6 flex flex-col">
      <h1 className="text-4xl lg:text-[42px] font-semibold mb-4">{title}</h1>
      <div className="flex gap-3 mb-6">
        <Button className="bg-blue-500 rounded-lg hover:[#045AC4] text-white">
          <a href={tryHref}>Try it free</a>
        </Button>
        <Button  className="bg-white text-black rounded-lg hover:bg-[#eaeaea] ">
          <a href={downloadHref}>Download now</a>
        </Button>
      </div>
      <div className="relative h-auto w-full mt-auto">
        <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="object-contain" />
      </div>
    </div>
  );
};

export default function GetStarted() {
  return (
    <section className="max-w-[1252px] mx-auto py-[40px] px-[25px]">
      <h2 className="text-4xl lg:text-[60px] font-bold text-left mb-12">Get started.</h2>
      <div className="grid md:grid-cols-2 gap-3">
        <ProductCard
          title="Notion"
          tryHref="/try-notion"
          downloadHref="/download-notion"
          imageSrc="https://www.notion.com/_next/image?url=%2Ffront-static%2Fpages%2Fproduct%2Fsuper-duper%2Fdownload%2Fnotion-app.png&w=3840&q=75"
          imageAlt="Notion app interface"
        />
        <ProductCard
          title="Notion Calendar"
          tryHref="/try-calendar"
          downloadHref="/download-calendar"
          imageSrc="https://www.notion.com/_next/image?url=%2Ffront-static%2Fpages%2Fproduct%2Fsuper-duper%2Fdownload%2Fnotion-calendar.png&w=3840&q=75"
          imageAlt="Notion Calendar interface"
        />
      </div>
    </section>
  );
}
