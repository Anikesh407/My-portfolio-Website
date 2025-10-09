// AutoTypingText.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AutoTypingText = () => {
  return (
    <div className="sm:text-2xl md:text-4xl font-semibold text-center md:text-start pl-1">
      <span className="text-cyan ">I’m a </span>
      <span className="text-orange">
        <Typewriter
          words={["Software Developer", "Problem Solver", "AI/ML Enthusiast"]}
          loop={0} // 0 = infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
};

export default AutoTypingText;
