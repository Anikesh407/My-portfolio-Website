import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framermotion/variants";

function SingleExperience({ experience }) {
  return (
    <motion.div
      variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border border-orange border-dashed rounded-2xl mt-12 p-4"
    >
      <p className="font bold text-cyan">{experience.job}</p>
      <p className="text-orange">{experience.project}</p>
      <p className="text-lightGray">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {experience.responsiblities.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </motion.div>
  );
}

export default SingleExperience;
