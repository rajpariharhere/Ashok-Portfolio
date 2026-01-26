import React, { useState } from "react";
import Raj from "../imgs/Ashok.jpg";

const CubeFrame: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const style: React.CSSProperties = {
    transform: isHovered
      ? "perspective(1000px) rotateY(0deg) rotateX(0deg)"
      : "perspective(1000px) rotateY(-15deg) rotateX(10deg)",
    transition: "transform 0.5s ease",
  };

  return (
    <div
      className="relative group inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-accent opacity-20 blur-lg"></div>

      {/* FRAME AUTO SIZE */}
      <div
        style={style}
        className="relative max-w-[18rem] max-h-[22rem] border-2 border-primary/10 shadow-xl overflow-hidden"
      >
        <img
          src={Raj}
          alt="profile"
          className="block w-full h-auto object-contain"
        />

        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>
      </div>
    </div>
  );
};

export default CubeFrame;
