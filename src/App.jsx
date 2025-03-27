import "./index.css";
import Nav from "./component/Nav";
import { HeroSectionFirst } from "./component/HeroSectionFirst";
import ImageCarousel from "./component/Carousel";

function App() {
  return (
    <>
      <Nav />
      <HeroSectionFirst />
      <ImageCarousel />
    </>
  );
}

export default App;
