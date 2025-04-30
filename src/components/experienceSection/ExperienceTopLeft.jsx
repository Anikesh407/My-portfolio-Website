import React from "react";
import ExperienceInfo from "./ExperienceInfo";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framermotion/variants";

function ExperienceTopLeft() {
  return (
    <motion.div
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="flex flex-col gap-6 w-[300px]  "
    >
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4 ">
        <ExperienceInfo number="1" text="Years" />
        <p className=" font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="7" text="WebSites" />
      </div>
      <p className="text-center text-white ">
        Over 2 years of experience building dynamic and user-friendly web
        applications.
      </p>
      <ExperienceInfo number="$10k" text="Max Budget" />
    </motion.div>
  );
}

export default ExperienceTopLeft;
