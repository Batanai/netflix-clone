import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
        alt="Netflix logo"
      />

      <img
        className="navbar__avatar"
        src="https://res.cloudinary.com/dtgno0lg2/image/upload/v1582030682/avatars/User_Avatar3_2x_mlsowj.png"
        alt="Netflix avatar"
      />
    </div>
  );
};

export default Navbar;
