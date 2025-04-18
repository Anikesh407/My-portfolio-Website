import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

function NavbarBtn() {
  return (
    <Link
      to="contact"
      smooth={true}
      spy={true}
      duration={900}
      offset={-140}
      className="px-4 py-2 rounded-full text-xl font-bold text-[#fff] border-cyan border flex items-center gap-2 bg-gradient-to-r from-cyan to-orange hover:border-orange ShadowCs hover:scale-110 duration-300 cursor-pointer"
    >
      Hire Me
      <div className=" sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </Link>
  );
}

export default NavbarBtn;
