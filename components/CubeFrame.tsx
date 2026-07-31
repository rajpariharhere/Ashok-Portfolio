import React, { useState } from "react";
import Raj from "../imgs/Ashok.jpg";

interface CubeFrameProps {
  theme: 'light' | 'dark';
}

const CubeFrame: React.FC<CubeFrameProps> = ({ theme }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isDark = theme === 'dark';

  const style: React.CSSProperties = {
    transform: isHovered
      ? "perspective(1000px) rotateY(0deg) rotateX(0deg)"
      : "perspective(1000px) rotateY(-15deg) rotateX(10deg)",
    transition: "transform 0.5s ease",
  };

  return (
    <div
      className="group relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute -inset-1 bg-[#F97316]/20 blur-lg"></div>

      <div
        style={style}
        className={`relative max-h-[22rem] max-w-[18rem] overflow-hidden border-2 shadow-xl ${isDark ? 'border-slate-700' : 'border-slate-200'}`}
      >
        <img src={Raj} alt="profile" className="block h-auto w-full object-contain" />

        <div className="absolute left-0 top-0 h-4 w-4 border-l-2 border-t-2 border-[#F97316]"></div>
        <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-[#F97316]"></div>
      </div>
    </div>
  );
};

export default CubeFrame;
