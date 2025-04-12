import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

function ContactInfo() {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="anikesh6203@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 00001 00001" Image={FiPhone} />
      <SingleInfo text="Jalandhar, India " Image={IoLocationOutline} />
    </div>
  );
}

export default ContactInfo;
