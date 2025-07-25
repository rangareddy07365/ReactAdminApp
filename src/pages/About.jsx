import React from "react";
import { Link } from "react-router-dom";
import "../assets/Header.css";
import "../assets/AdminLayout.css";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Ranga Reddy Nandyala</p>
      <p>Software Developer</p>
      <p>OTSI</p>
      <Link to={"/"}>
        <button className="themeButton">Home</button>
      </Link>
    </div>
  );
};
export default About;
