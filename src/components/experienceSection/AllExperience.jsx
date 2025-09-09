import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../../src/framermotion/variants";

const experiences = [
  {
    job: "SDE",
    project: "Docmise Solutions Private Limited",
    date: "4th May to 6th Sep 2025",
    responsiblities: [
      "Worked on responsive, high-performance web using MERN",
      "Collaborated with the team to implement clean UI and maintainable code",
      "Gained hands-on experience with real-world fullstack development",
    ],
  },
  {
    job: "Full-Stack Developer",
    project: "Hotel Booking Platform",
    date: "2025-Present",
    responsiblities: [
      "Built a complete full-stack web application using MERN stack",
      "Integrated payment gateway (Stripe) and user authentication (Clerk)",
      "Focused on scalability, clean code, and seamless user experience",
    ],
  },
  {
    job: "Web Developer (Learner & Builder)",
    project: "Self-Learning & Skill Development",
    date: "2024-Present",
    responsiblities: [
      "Regularly work on new projects to strengthen development skills",
      "Explore tools in React and modern web development",
      "Actively practice DSA to improve logic and problem-solving",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={`experience-${index}`}>
            <SingleExperience experience={experience} />
            {index < 2 ? (
              <motion.div
                key={`arrow-${index}`}
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
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperience;
