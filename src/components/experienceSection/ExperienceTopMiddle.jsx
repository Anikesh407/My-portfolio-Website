import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framermotion/variants";

function ExperienceTopMiddle() {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <img
        src="https://res.cloudinary.com/dieds7her/image/upload/v1744526335/experience-image_m92p7n.png"
        alt="Image"
      />
    </motion.div>
  );
}

export default ExperienceTopMiddle;
