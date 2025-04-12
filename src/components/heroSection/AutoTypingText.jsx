// AutoTypingText.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const AutoTypingText = () => {
  return (
    <div className="sm:text-2xl md:text-4xl font-semibold  text-center">
      <span className="text-cyan ">I’m </span>
      <span className="text-orange">
        <Typewriter
          words={["a Web Developer", "a Problem Solver", "a Web3 Enthusiast"]}
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
