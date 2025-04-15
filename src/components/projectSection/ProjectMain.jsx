import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framermotion/variants";

const projects = [
  {
    name: "Gemini Clone",
    year: "Apr2025",
    align: "right",
    image:
      "https://res.cloudinary.com/dieds7her/image/upload/v1744712992/gm_tbdd7r.png",
    link: "https://benevolent-salmiakki-7f9811.netlify.app/",
  },
  {
    name: "Myntra Clone",
    year: "Mar2024",
    align: "left",
    image:
      "https://res.cloudinary.com/dieds7her/image/upload/v1744526069/myntraimg_b3ydh5.png",
    link: "https://github.com/Anikesh407/Myntra-clone02",
  },
  {
    name: "Testimonials",
    year: "Sep2024",
    align: "right",
    image:
      "https://res.cloudinary.com/dieds7her/image/upload/v1744526061/testimonial_ohxxuf.jpg",
    link: "https://github.com/Anikesh407/Testinomial",
  },
  {
    name: "Ecommerce Website",
    year: "Dec2024",
    align: "left",
    image:
      "https://res.cloudinary.com/dieds7her/image/upload/v1744526485/website-img-3_nefg6v.jpg",
    link: "#",
  },
  {
    name: "Vidyanza",
    year: "Jan2025",
    align: "right",
    image:
      "https://res.cloudinary.com/dieds7her/image/upload/v1744526065/vidyanza_dkvhsn.png",
    link: "https://github.com/Anikesh407/Project-vid",
  },
];

function ProjectMain() {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 ">
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w[900px] mx-auto mt-12 ">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              index={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProjectMain;
