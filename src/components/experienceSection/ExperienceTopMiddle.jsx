import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../../src/framermotion/variants";

function ExperienceTopMiddle() {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <img src="../../../public/experience-image.png" alt="Image" />
    </motion.div>
  );
}

export default ExperienceTopMiddle;
