import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
// import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framermotion/variants";
import { motion } from "framer-motion";

function ContactMeMain() {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      id="contact"
      className="max-w-[1200px] w-full mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-6xl text-cyan mb-10 text-center">Contact Me</h2>
      <div className="flex  justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col ">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </motion.div>
  );
}

export default ContactMeMain;
