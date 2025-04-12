import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";

function ContactMeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_92p3904", "template_gctmqus", form.current, {
        publicKey: "liWPina5eHQlM8B53",
      })
      .then(
        () => {
          toast.success("Send Successfully");
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent!");
        },
        (error) => {
          toast.error("try again");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan ">{success}</p>
      <form
        action=""
        className="flex flex-col gap-4 text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 lowercase"
          name="from_name"
          onChange={handleName}
          value={name}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          name="from_email"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className="rounded-lg bg-lightBrown px-2"
          name="message"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-lightBrown hover:text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan  transition-all duration-500 "
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactMeForm;
