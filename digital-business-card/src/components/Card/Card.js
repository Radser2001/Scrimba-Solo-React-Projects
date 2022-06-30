import React from "react";
import "./Card.css";
import image from "../../assets/img.png";
import { GrMail } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Card = () => {
  return (
    <section className="card-container">
      <img src={image} alt="" className="card-image" />
      <div className="card-general-info">
        <h1>Laura Smith</h1>
        <p className="job">FrontEnd Developer</p>
        <p className="web">laurasmith.website</p>
        <div className="card-contact">
          <div className="email">
            <GrMail />
            <div className="email-text">Email</div>
          </div>
          <div className="linkedin">
            <BsLinkedin />
            <div className="linkedin-text">Linkedin</div>
          </div>
        </div>
      </div>
      <div className="card-details">
        <h2>About</h2>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h2>Interests</h2>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
      <div className="card-social-media">
        <FaTwitterSquare className="twitter" />
        <FaFacebookSquare className="fb" />
        <FaInstagramSquare className="insta" />
        <FaGithubSquare className="git" />
      </div>
    </section>
  );
};

export default Card;
