import React from "react";

function AboutMeImage() {
  return (
    <div className="h-[500px] md:w-[300px] sm:w-[270px]   relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden ">
        <img
          src="https://res.cloudinary.com/dieds7her/image/upload/v1744526067/about-me_qongyp.png"
          alt="About me"
          className="h-full w-auto object-cover "
        />
      </div>
      <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
}

export default AboutMeImage;
