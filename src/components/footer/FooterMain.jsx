import React from "react";
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

function FooterMain() {
  return (
    <div className="px-4 w-full ">
      <div className="w-full h-[1px] bg-lightGray mt-8"></div>
      <div className=" md:flex sm:hidden justify-between  mt-4 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightGray ">Anikesh Kumar</p>
        <ul className="flex gap-4 text-lightGray text-xl ">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-2 text-sm text-lightBrown">
        © 2025 Anikesh Kumar | Built with ❤️ and code.{" "}
      </p>
    </div>
  );
}

export default FooterMain;
