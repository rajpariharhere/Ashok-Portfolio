
import React, { useState } from 'react';
import { PROFILE_IMAGE } from '../constants';

const CubeFrame: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const style: React.CSSProperties = {
    transform: isHovered 
      ? 'perspective(1000px) rotateY(0deg) rotateX(0deg)' 
      : 'perspective(1000px) rotateY(-15deg) rotateX(10deg)',
    transition: 'transform 0.5s ease',
  };

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-accent opacity-20 blur-lg group-hover:opacity-40 transition duration-1000"></div>
      <div 
        style={style}
        className="relative w-56 h-56 lg:w-72 lg:h-72 bg-slate-200 border-2 border-primary/10 shadow-xl overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover" 
          style={{ backgroundImage: `url("${PROFILE_IMAGE}")` }}
        ></div>
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent"></div>
      </div>
    </div>
  );
};

export default CubeFrame;
