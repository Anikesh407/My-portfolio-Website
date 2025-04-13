import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

function ContactMeRight() {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="https://res.cloudinary.com/dieds7her/image/upload/v1744526054/email-image_gpehrg.png"
        alt="Email img"
        className="max-w-[300px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
}

export default ContactMeRight;
