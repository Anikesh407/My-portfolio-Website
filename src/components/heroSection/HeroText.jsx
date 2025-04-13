import React from "react";
import AutoTypingText from "./AutoTypingText";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framermotion/variants";

function HeroText() {
  return (
    <div className="flex flex-col gap-2 h-full justify-center md:text-left sm:text-center">
      {/* <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">
        Front-End Web Developer
      </h2> */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <AutoTypingText />
      </motion.div>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=" md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange"
      >
        Anikesh Kumar
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        Passionate Web Developer and problem solver <br /> with 2 years of
        experience.
      </motion.p>
    </div>
  );
}

export default HeroText;
