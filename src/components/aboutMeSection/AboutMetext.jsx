import React from "react";

function AboutMetext() {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10 ">About me</h2>
      <p className="text-white">
        I’m Anikesh — a tech enthusiast passionate about coding,
        problem-solving, and continuous learning. I love building projects,
        exploring new technologies, and sharpening my skills through DSA.
        Whether it's front-end development or solving complex problems, I’m
        always driven to grow and create meaningful solutions.I believe in
        writing clean, efficient code and constantly challenging myself to
        improve. My goal is to build tech that not only works but makes a real
        difference.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center  mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-black ">
        <a href="https://github.com/Anikesh407?tab=repositories">My Projects</a>
      </button>
    </div>
  );
}

export default AboutMetext;
