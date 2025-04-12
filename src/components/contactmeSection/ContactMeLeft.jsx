import React from "react";
import ContactMeForm from "./ContactMeForm";

function ContactMeLeft() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-orange text-3xl mb-4 ">Get In Touch</h2>
        <p className="text-white">
          Open to collaboration, feedback, or a simple hello <br />
          you’re just a few clicks away!
        </p>
      </div>
      <ContactMeForm />
    </div>
  );
}

export default ContactMeLeft;
