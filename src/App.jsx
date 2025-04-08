import "./index.css";
import Nav from "./component/Nav";
import { HeroSectionFirst } from "./component/HeroSectionFirst";
import ImageCarouselWithThumbnails from "./component/Carousel";
import { SecondHeroSection } from "./component/HeroSectionSec";
import EveryThingYouNeed from "./component/EveryThingYouNeed";
import { HeroSectionThird } from "./component/HeroSectionThird";
import { HeroSectionFourth } from "./component/HeroSectionFourth";
import { HeroSectionFifth } from "./component/HeroSectionFifth";
import GetStarted from "./component/GetStarted"
import Footer from "./component/Footer";
import ResourceGrid from "./component/GridTemplate";

function App() {
  return (
    <>
      <Nav />
      <div className="flex flex-col px-14 gap-[150px]">
      <HeroSectionFirst />
        <ImageCarouselWithThumbnails />
        <SecondHeroSection />  
      
         <HeroSectionThird />
        <HeroSectionFourth />
        <HeroSectionFifth />
       <ResourceGrid/>
        <EveryThingYouNeed/>
         <GetStarted/>
      </div>
     <Footer/>
    </>
  );
}

export default App;
  {/* <NewHeroSection /> */}  {/* <StartTemplate /> */}