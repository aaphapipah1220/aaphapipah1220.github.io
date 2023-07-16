import React from "react";
import "./footer.css";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        hApipaH
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#certificates">Certificates</a>
        </li>
        <li>
          <a href="#draw">Art</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/aaphapipah1220">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/aap-hapipah-87b3b3179/">
          <FiLinkedin />
        </a>
        <a href="https://www.instagram.com/hpiphap/">
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>CopyRight; 2022 by Aap Hapipah</small>
      </div>
    </footer>
  );
};

export default Footer;
