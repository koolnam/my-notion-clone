import "./index.css";
import Nav from "./component/Nav";
import { HeroSectionFirst } from "./component/HeroSectionFirst";
import ImageCarouselWithThumbnails from "./component/Carousel";
import { NewHeroSection } from "./component/NewHeroSection";
import { SecondHeroSection } from "./component/HeroSectionSec";
  import FeatureGrid from "./component/FeatureGrid";
import StartTemplate from "./component/StartTemplate";
import { HeroSectionThird } from "./component/heroSectionThird";
import { HeroSectionFourth } from "./component/HeroSectionFourth";
import { HeroSectionFifth } from "./component/HeroSectionFifth";

function App() {
  return (
    <>
      <Nav />
      <HeroSectionFirst />
      {/* <ImageCarousel /> */}
      <div className="flex flex-col gap-[150px]">
        {/* <NewHeroSection /> */}
        <ImageCarouselWithThumbnails />
        <SecondHeroSection />  
        {/* <StartTemplate /> */}
         <HeroSectionThird />
        <HeroSectionFourth />
        <HeroSectionFifth />
        <FeatureGrid />
      </div>
    
    </>
  );
}

export default App;
