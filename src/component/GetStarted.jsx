import Button from "./Buttons";


const ProductCard = ({ title, tryHref, downloadHref, imageSrc, imageAlt }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex gap-3 mb-6">
        <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
          <a href={tryHref}>Try it free</a>
        </Button>
        <Button asChild variant="outline" className="bg-white">
          <a href={downloadHref}>Download now</a>
        </Button>
      </div>
      <div className="relative h-64 w-full mt-auto">
        <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-contain" />
      </div>
    </div>
  );
};

export default function GetStarted() {
  return (
    <section className="max-w-[1252px] mx-auto py-[40px] px-[30px]">
      <h2 className="text-5xl font-bold text-left mb-12">Get started.</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <ProductCard
          title="Notion"
          tryHref="/try-notion"
          downloadHref="/download-notion"
          imageSrc="/placeholder.svg?height=400&width=400"
          imageAlt="Notion app interface"
        />
        <ProductCard
          title="Notion Calendar"
          tryHref="/try-calendar"
          downloadHref="/download-calendar"
          imageSrc="/placeholder.svg?height=400&width=400"
          imageAlt="Notion Calendar interface"
        />
      </div>
    </section>
  );
}
