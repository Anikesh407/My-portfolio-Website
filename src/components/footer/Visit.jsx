import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framermotion/variants";

function Visit() {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="w-full max-w-[1200px] mx-auto px-4 mt-12 mb-4"
    >
      <p className="text-orange sm:text-3xl md:text-5xl text-center">
        Thanks for visiting! <br /> <br />
        <span className="sm:text-5xl md:text-8xl  p-2">😊</span>
      </p>
    </motion.div>
  );
}

export default Visit;
