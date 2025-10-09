import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import SingleSkills from "./SingleSkills";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framermotion/variants";
import { FaNode } from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "React.Js",
    icon: FaReact,
  },

  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "Next.js",
    icon: RiNextjsFill,
  },
  {
    skill: "Tailwind.Css",
    icon: RiTailwindCssFill,
  },
  {
      skill: "Node.js",
      icon: FaNode,
    },
    {
      skill: "Others",
      icon: RiPsychotherapyFill,
    },
];

function AllSkills() {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto ">
        {skills.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkills text={item.skill} image={<item.icon />} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default AllSkills;
