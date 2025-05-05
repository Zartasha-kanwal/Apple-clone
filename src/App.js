import "./App.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import SectioniPadAir from "./Components/SectioniPadAir";
import SectioniPhone from "./Components/SectioniPhone";
import Section4 from "./Components/Section4";
import Section5 from "./Components/Section5";
import Section6 from "./Components/Section6";
import Carousel from "./Components/Carousel";
import SectionCards from "./Components/SectionCards";
import SectionText from "./Components/SectionText";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <SectioniPhone/>
      <HeroSection/>
      <SectioniPadAir/>
      <Section4/>
      <Section5/>
      <Section6/>
      <SectionCards/>
      <Carousel/>
      <SectionText/>
      <Footer/>
    </div>
  );
}

export default App;
