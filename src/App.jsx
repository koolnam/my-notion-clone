import "./index.css";
import Nav from "./component/Nav";
import { TheHappierWorkspace } from "./component/TheHappierWorkspace";
import ImageCarouselWithThumbnails from "./component/Carousel";
import { BuildPerfect } from "./component/BuildPerfect";
import { YourWorkflow } from "./component/YourWorkflow.";
import { FindEverything } from "./component/FindEverything.";
import { BlockQuote } from "./component/BlockQuote";
import { GetaBrainBoost } from "./component/GetaBrainBoost";
import EveryThingYouNeed from "./component/EveryThingYouNeed";
import GetStarted from "./component/GetStarted"
import StartWithaTemplate from "./component/GridTemplate";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Nav />
      <div className="flex flex-col gap-10 lg:gap-[150px]">
      <TheHappierWorkspace />
        <ImageCarouselWithThumbnails />
        <BuildPerfect />  
         <YourWorkflow />
        <FindEverything />
       <BlockQuote/>
        <GetaBrainBoost />
       <StartWithaTemplate/>
        <EveryThingYouNeed/>
         <GetStarted/>
      </div>
     <Footer/>
    </>
  );
}

export default App;
  {/* <NewHeroSection /> */}  {/* <StartTemplate /> */}