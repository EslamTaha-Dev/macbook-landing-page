import Hero from "./components/Hero.tsx";
import NavBar from "./components/NavBar.tsx";
import Product from "./components/Product.tsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Product />
      </main>
    </>
  );
};
export default App;
