import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

function NavbarMain() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="max-w-[1300px] md:h-[80px] sm:h-[60px] mx-auto w-full px-4 fixed left-[50%]-translate-x-[-50%] z-20 flex gap-4 mt-8">
      <div className="flex justify-between w-full  max-w-[1200px] mx-auto bg-black items-center p-6 rounded-l-full rounded-r-full border-[0.5px] border-orange">
        <NavbarLogo />
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex items-center justify-center lg:hidden sm:flex ">
        <div className="flex items-center justify-center w-[60px] h-[60px] bg-black rounded-full border-[0.5px] border-orange">
          <button
            className="text-xl w-[60px] h-[60px] flex items-center justify-center border border-orange rounded-full text-white"
            onClick={toggleMenu}
          >
            {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarMain;
