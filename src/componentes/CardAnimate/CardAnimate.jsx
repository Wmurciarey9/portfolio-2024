import React from "react";
import "./cardAnimate.css";
import WilsonTravel from "../../assets/images/Wilson-Travel.jpg";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const CardAnimate = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-12.5, 12.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-12.5, 12.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="motion1"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="motion2"
      >
        <img
          src={WilsonTravel}
          alt=""
          style={{
            transform: "translateZ(75px)",
          }}
          className="motion3"
        />

        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="motion4"
        >
          ABOUT ME
        </p>
      </div>
    </motion.div>
  );
};

//     <div className="wm-cardAnimate" style={{ x, y, rotateX, rotateY, z: 100 }}>
//
//     </div>
//   );
// };
