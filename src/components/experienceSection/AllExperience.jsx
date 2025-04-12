import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
import { fadeIn } from "../../../src/framermotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    project: "Personal Projects",

    date: "2023-Present",
    responsiblities: [
      "Created responsive, high-performance web interfaces using React ",
      "Focused on clean UI, accessibility, and mobile-first design",
      "Prioritized maintainable code and component reusability",
    ],
  },
  {
    job: "Front-End Developer",
    project: "Freelance & Self-Initiated Projects",

    date: "2023-Present",
    responsiblities: [
      "Developed projects from small business websites to complex frontend systems",
      "Gained experience in state management, API integration",
      "Followed best practices in UI/UX and frontend ",
    ],
  },
  {
    job: "Web Developer (Learner & Builder)",
    project: "Self-Learning & Skill Development",

    date: "2024-Present",
    responsiblities: [
      "Regularly work on new projects to strengthen development skills",
      "Explore tools in the React",
      "Actively practice DSA to improve logic and problem-solving",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl font-bold text-orange sm:hidden lg:block" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;
