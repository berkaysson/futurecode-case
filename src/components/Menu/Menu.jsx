/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from "react";
import "./Menu.css";
import Logo from "../Logo/Logo";
import MegaMenu from "./MegaMenu/MegaMenu";

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const Menu = () => {
  const [isMegaMenuActive, setIsMegaMenuActive] = useState(false);

  const handleMouseEnter = useCallback(
    debounce(() => {
      setIsMegaMenuActive(true);
    }, 200),
    []
  );

  const handleMouseLeave = useCallback(
    debounce(() => {
      setIsMegaMenuActive(false);
    }, 300),
    []
  );
  return (
    <nav
      id="navigation"
      className="navbar navbar-light bg-light position-relative fixed-top"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container container-fluid">
        <Logo />
        <ul className="nav justify-content-end">
          <li className="nav-item d-flex align-items-center">
            <button className="btn ml-auto fw-light" type="button" id={"button-teklif"}>
              Teklif Al
            </button>
          </li>
          <li className="nav-item font-semi-bold ms-4">
            <a className="nav-link" href="#">
              Kurumsal
            </a>
          </li>
          <li className="nav-item ms-2">
            <a className="nav-link" href="#">
              Lojistik Hizmetlerimiz
            </a>
          </li>
          <li className="nav-item ms-2">
            <a className="nav-link" href="#">
              Kariyer
            </a>
          </li>
          <li className="nav-item ms-2">
            <a className="nav-link" href="#">
              İletişim
            </a>
          </li>
          <li className="nav-item ms-2">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item ms-2">
            <a className="nav-link" href="#">
              TR
            </a>
          </li>
        </ul>
        <MegaMenu isActive={isMegaMenuActive} />
      </div>
    </nav>
  );
};

export default Menu;
