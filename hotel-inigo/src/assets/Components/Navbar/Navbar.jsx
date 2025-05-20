import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../assets/images/logo.png"; // Assuming you have a logo image in the specified path

const Navbar = () => {
  const menu = useRef();
  const navbar = useRef();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const menubtn = () => {
    menu.current.classList.toggle("active");
  };

  useEffect(() => {
    // Handle navbar color change on scroll
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.current.classList.add("navbarScroll");
      } else {
        navbar.current.classList.remove("navbarScroll");
      }

      // Handle navbar visibility based on scroll direction
      const currentScrollPos = window.scrollY;

      // Make navbar visible when scrolling up and hidden when scrolling down
      if (prevScrollPos > currentScrollPos) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="navbar">
      <div
        className={`navbar-container ${
          visible ? "navbar-visible" : "navbar-hidden"
        }`}
        ref={navbar}
      >
        <div className="logo">
          <img src={logo} alt="hotel-logo" className="logo-img" />
        </div>

        <ul ref={menu}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/room">Rooms</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/facilities">Facilities</Link>
          </li>
          <li>
            <Link to="/booking">Book Now</Link>
          </li>
        </ul>

        <div className="nav-btns">
          <button className="menu-toggle" onClick={menubtn}>
            <i className="ri-menu-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
