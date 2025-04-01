import "./index.css";
import Nav from "./component/Nav";
import { HeroSectionFirst } from "./component/HeroSectionFirst";
import ImageCarouselWithThumbnails from "./component/Carousel";
import { NewHeroSection } from "./component/NewHeroSection";
import { SecondHeroSection } from "./component/HeroSectionSec";
  import FeatureGrid from "./component/FeatureGrid";
import StartTemplate from "./component/StartTemplate";
import { HeroSectionThird } from "./component/HeroSectionThird";
import { HeroSectionFourth } from "./component/HeroSectionFourth";
import { HeroSectionFifth } from "./component/HeroSectionFifth";
import GetStarted from "./component/GetStarted"

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
         <GetStarted/>
        
      </div>
    
    </>
  );
}

export default App;
