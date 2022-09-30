import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <div name="contact" className="contact-main">
    <form
      method="POST"
      action="https://getform.io/f/0e2b60c4-43d2-4932-9bf5-f63672b04300"
      className="contact-form"
    >
      <div className="contact-div1">
        <p className="contact-p1">Contact</p>
        <p className="contact-p2">
          Please don't hesitate to get in contact using the form, mail icon or 
          social media channels below.
        </p>
      </div>
      <input
        className="contact-input1 font-sans"
        type="text"
        placeholder="Name"
        name="name"
      />
      <input
        className="contact-input2 font-sans"
        type="email"
        placeholder="Email"
        name="email"
      />
      <textarea
        className="contact-textarea font-sans"
        name="message"
        rows="10"
        placeholder="Message"
      ></textarea>
      <button className="contact-button rounded font-sans text-sm">SUBMIT</button>
      
      <div className="icons-div">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/lamasmiguel/" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
        <div className="social-icons">
          <a href="https://github.com/MiguelLamas" target="_blank" rel="noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
        <div className="social-icons">
          <a href="https://twitter.com/lamasmigs" target="_blank" rel="noreferrer">
            <FaTwitter size={30} />
          </a>
        </div>
        <div className="social-icons">
          <a href="mailto:lamasmigs@yahoo.co.uk" target="_blank" rel="noreferrer">
            <HiOutlineMail size={30} />
          </a>
        </div>
      </div>
    </form>
  </div>
    
  );
} 


export default Contact
