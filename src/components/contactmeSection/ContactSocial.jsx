import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function ContactSocial() {
  return (
    <div className="flex gap-4 ">
      <SingleContactSocial
        link="https://github.com/Anikesh407"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.linkedin.com/in/anikesh-poddar-949521269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://www.instagram.com/anikesh.0_0/"
        Icon={FaInstagram}
      />
    </div>
  );
}

export default ContactSocial;
