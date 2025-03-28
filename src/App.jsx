import "./index.css";
import Nav from "./component/Nav";
import { HeroSectionFirst } from "./component/HeroSectionFirst";
import ImageCarousel from "./component/Carousel";
import { NewHeroSection } from "./component/newHeroSection";

function App() {
  return (
    <>
      <Nav />
      {/* <HeroSectionFirst /> */}
      {/* <ImageCarousel /> */}
      <NewHeroSection />
    </>
  );
}

export default App;
