import React from "react";
import { i } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-black p-3 px-5 d-flex justify-content-between align-items-center">
      <div className="d-flex gap-3 align-items-center">
        <h4 className="text-secondary p-1">Copyrigth @ Star Wars 2023</h4>
        <p className="pt-3">All Rights Reserved.</p>
      </div>
      <div className="d-flex gap-2 text-secondary">
        <a className="text-secondary" href="https://www.facebook.com/?locale=es_LA" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a className="text-secondary" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a className="text-secondary" href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
        <a className="text-secondary" href="https://twitter.com/?lang=es" target="_blank" rel="noopener noreferrer">
        <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a className="text-secondary" href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fmynetwork%2F&trk=login_reg_redirect" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
