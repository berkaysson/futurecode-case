/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./MobileMenu.css";
import Logo from "../Logo/Logo";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      id="mobile-navigation"
      className="navbar navbar-light bg-light position-relative fixed-top"
    >
      <div className="d-flex flex-row justify-content-between">
        <a className="mobile-nav-link" href="#">
          <Logo />
        </a>
        <button className="mobile-nav-toggle" onClick={toggleMenu}>
          {isOpen ? "X" : "="}
        </button>
      </div>

      <ul className={`mobile-nav-list ${isOpen ? "open" : "closed"}`}>
        <li className="mobile-nav-item">
          <a className="mobile-nav-link" href="#">
            Kurumsal
          </a>
        </li>
        <li className="mobile-nav-item">
          <a className="mobile-nav-link" href="#">
            Lojistik Hizmetlerimiz
          </a>
        </li>
        <li className="mobile-nav-item">
          <a className="mobile-nav-link" href="#">
            Kariyer
          </a>
        </li>
        <li className="mobile-nav-item">
          <a className="mobile-nav-link" href="#">
            İletişim
          </a>
        </li>
        <li className="mobile-nav-item">
          <a className="mobile-nav-link" href="#">
            Blog
          </a>
        </li>
        <li className="mobile-nav-item">
          <a className="mobile-nav-link" href="#">
            TR
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
