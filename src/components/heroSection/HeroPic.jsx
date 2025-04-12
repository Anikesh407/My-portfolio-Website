import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "motion/react";
import { fadeIn } from "../../../src/framermotion/variants";

function HeroPic() {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="../../../../public/mypic.png"
        alt="loading"
        className="max-h-[450px] sm:min-h-[90%] w-auto "
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse overflow-hidden">
        <PiHexagonThin className="md:h-[120%] sm:h-[90%] text-cyan md:min-h-[600px] sm:min-h-[500px] w-auto text-cyan- blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
}

export default HeroPic;
