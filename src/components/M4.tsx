import { useGSAP } from "@gsap/react";
import { ChevronRight } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const M4 = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isMobile) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#m4",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          scale: 1.15,
        })
        .to(".content", { opacity: 1, y: 0, ease: "power2.out", delay: 0.25 });
    }
  }, [isMobile]);
  return (
    <section id="m4">
      <div className="media">
        <video src="/videos/game.mp4" autoPlay muted loop playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" alt="Mask" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket chip.</h2>
            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing{" "}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                . M4 powers
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that’s
                unbelievably thin, light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>
              <p className="text-primary">
                <a href="/apple-intelligence" className="flex items-center">
                  Learn more about Apple Intelligence{" "}
                  <ChevronRight size={20} strokeWidth={4} />
                </a>
              </p>{" "}
            </div>
          </div>
          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default M4;
