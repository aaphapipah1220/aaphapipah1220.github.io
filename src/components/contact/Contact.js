import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pxfd92j",
        "template_l58417v",
        form.current,
        "pcA9PW-Rs8x3KKRMc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <articles className="contact__option">
            <MdEmail className=".contact__option-icon" />
            <h4> Email </h4>
            <h5>aaphapiipah@gmail.com</h5>
          </articles>

          <articles className="contact__option">
            <BsMessenger className=".contact__option-icon" />
            <h4> Instagram </h4>
            <h5>@hpiphap</h5>
          </articles>

          <articles className="contact__option">
            <IoLogoWhatsapp className=".contact__option-icon" />
            <h4> WhatsApp </h4>
            <a href="https://api.whatsapp.com/send/?phone=6285770768486&text=Thank+you+for+calling+me.%0aplease+tell+me+who+you+are+%0aName+:%0aFrom+:%0aMessage+:">
              Message by WhatsApp
            </a>
          </articles>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="9"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
