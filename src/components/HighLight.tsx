import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const HighLight = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(
    () => {
      gsap.to([".left", ".right"], {
        scrollTrigger: {
          trigger: ".masonry",
          start: isMobile ? "bottom bottom" : "top center",
        },
        y: 0,
        opacity: 1,
        stagger: 0.5,
        ease: "power1.inOut",
        duration: 2,
      });
    },
    { dependencies: [isMobile] },
  );
  return (
    <section id="high">
      <h2>There's never been a better time to upgrade.</h2>
      <h3>Here's what you get with the new MacBook Pro.</h3>

      <div className="masonry">
        <div className="left">
          <div>
            <img src="/laptop.png" alt="laptop" />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <img src="/sun.png" alt="sun" />
            <p>
              A stunning <br /> Liquid Retina XDR <br /> display.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              Built for <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              Up to
              <span className="green-gradient"> 14 more hours </span>
              battery life.
              <span className="text-dark-100"> (Up to 24 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighLight;
