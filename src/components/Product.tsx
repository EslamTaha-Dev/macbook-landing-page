import clsx from "clsx";
import useMacbook from "../store";
import { Canvas } from "@react-three/fiber";
import Studio from "./three/Studio";
import ModelSwitch from "./three/ModelSwitch";
import { useMediaQuery } from "react-responsive";

const ColorControl = (col: string) => {
  if (col === "#7D7E80") {
    return <span>Space black</span>;
  }
  if (col === "#2B2B2D") {
    return <span>Light gray</span>;
  }
};

const Product = () => {
  const { color, scale, setColor, setScale } = useMacbook();
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <section id="product">
      <h2>Take a closer look</h2>

      <div className="controls">
        <p className="info text-center">Macbook 16" in {ColorControl(color)}</p>
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#7D7E80")}
              className={clsx(
                "bg-neutral-300",
                color === "#7D7E80" && "active",
              )}
            />
            <div
              onClick={() => setColor("#2B2B2D")}
              className={clsx(
                "bg-neutral-900",
                color === "#2B2B2D" && "active",
              )}
            />
          </div>
          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <Studio />
        {/* <OrbitControls enableZoom={false} /> */}
        <ModelSwitch isMobile={isMobile} isLargeMac={scale === 0.08} />
      </Canvas>
    </section>
  );
};

export default Product;
