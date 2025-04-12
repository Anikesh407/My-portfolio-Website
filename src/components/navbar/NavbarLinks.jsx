import React from "react";
import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function NavbarLinks({ menuOpen, setMenuOpen }) {
  return (
    <ul className="flex gap-6 text-[#f1e1d9]   text-center py-4 lg:flex-row sm:flex-col sm:absolute lg:relative sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full ">
      {links.map((item, index) => (
        <li key={index} className="group">
          <Link
            to={item.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            onClick={() => {
              setMenuOpen(false);
            }}
            className="cursor-pointer w-full text-[#f1e1d9] hover:text-[#15d1e9] transition-all duration-500"
          >
            {item.link}
          </Link>
          <div className="mx-auto bg-[#15d1e9] w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
}

export default NavbarLinks;
