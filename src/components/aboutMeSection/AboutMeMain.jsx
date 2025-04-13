import React from "react";
import AboutMetext from "./AboutMetext";
import AboutMeImage from "./AboutMeImage";
// import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framermotion/variants";
import { motion } from "framer-motion";

function AboutMeMain() {
  return (
    <div
      id="about"
      className=" flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px]  mx-auto mt-[100px] justify-between items-center"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AboutMetext />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex justify-center items-center w-full "
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
}

export default AboutMeMain;
