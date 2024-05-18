/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Menu.css";
import Logo from "../Logo/Logo";
import MegaMenu from "./MegaMenu/MegaMenu";

const Menu = () => {
  const [isMegaMenuActive, setIsMegaMenuActive] = useState(false);

  let timer;

  const handleMouseEnter = () => {
    clearTimeout(timer);
    setIsMegaMenuActive(true);
  };

  const handleMouseLeave = () => {
    timer = setTimeout(() => {
      setIsMegaMenuActive(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <nav
      id="navigation"
      className="navbar navbar-light bg-light position-relative fixed-top"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container-fluid container-xxl">
        <Logo />
        <ul className="nav justify-content-end">
          <li className="nav-item d-flex align-items-center">
            <button className="btn ml-auto fw-light" type="button" id={"button-teklif"}>
              Teklif Al
            </button>
          </li>
          <li className="nav-item font-semi-bold ms-2 ms-xxl-4">
            <a className="nav-link" href="#">
              Kurumsal
            </a>
          </li>
          <li className="nav-item ms-1 ms-xxl-2">
            <a className="nav-link" href="#">
              Lojistik Hizmetlerimiz
            </a>
          </li>
          <li className="nav-item ms-1 ms-xxl-2">
            <a className="nav-link" href="#">
              Kariyer
            </a>
          </li>
          <li className="nav-item ms-1 ms-xxl-2">
            <a className="nav-link" href="#">
              İletişim
            </a>
          </li>
          <li className="nav-item ms-1 ms-xxl-2">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item ms-1 ms-xxl-2">
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
