import Hero from "./components/Hero.tsx";
import M4 from "./components/M4.tsx";
import NavBar from "./components/NavBar.tsx";
import Product from "./components/Product.tsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Performance from "./components/Performance.tsx";
import Feature from "./components/Feature.tsx";
import Footer from "./components/Footer.tsx";
import HighLight from "./components/HighLight.tsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Product />
        <M4 />
        <Performance />
        <Feature />
        <HighLight />
      </main>
      <Footer />
    </>
  );
};
export default App;
