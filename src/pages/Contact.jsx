import React from "react";
import { Link } from "react-router-dom";
import "../assets/Header.css";
import "../assets/AdminLayout.css";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>Ranga Reddy Nandyala</p>
      <p>Ph No: 4694961737</p>
      <p>email: nrangareddy07@gmail.com</p>
      <Link to={"/"}>
        <button className="themeButton">Home</button>
      </Link>
    </div>
  );
};

export default Contact;
