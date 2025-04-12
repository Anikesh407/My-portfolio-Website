import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

function HeroMain() {
  return (
    <div className="pt-40 px-5 pb-16 ">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between  gap-10  items-center relative px-4 ">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
}

export default HeroMain;
