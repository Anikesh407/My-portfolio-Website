import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

function NavbarBtn() {
  return (
    <a
      href="https://wa.me/+916203422416"
      className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-2 bg-gradient-to-r from-cyan to-orange hover:border-orange ShadowCs hover:scale-110 duration-300 cursor-pointer"
    >
      Hire Me
      <div className=" sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </a>
  );
}

export default NavbarBtn;
