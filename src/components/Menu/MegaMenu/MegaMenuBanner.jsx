import React from "react";
import "./MegaMenu.css";

const MegaMenuBanner = () => {
  return (
    <div className="container container-fluid ms-5">
      <div className="megamenu-banner ms-5">
        <div className="megamenu-banner-content">
          <div className="megamenu-banner-title">
            Yeşil Lojistik <IconLeaf />
          </div>
        </div>
        <div className="megamenu-banner-triangle">
          <IconTriangle />
        </div>
      </div>
    </div>
  );
};

export default MegaMenuBanner;

function IconTriangle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="37"
      fill="none"
      viewBox="0 0 37 37"
    >
      <path
        fill="#fff"
        d="M34.701 36.277l-26.917-.165a1.607 1.607 0 01-1.54-1.594 1.567 1.567 0 011.52-1.576l23.088.14L.477 2.706c-.299-.3-.468-.704-.471-1.125A1.567 1.567 0 011.582.006c.421.002.826.172 1.125.471L33.08 30.852l-.139-23.088a1.566 1.566 0 011.576-1.52 1.607 1.607 0 011.594 1.54l.165 26.917a1.567 1.567 0 01-1.576 1.576z"
      ></path>
    </svg>
  );
}

function IconLeaf() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="29"
      fill="none"
      viewBox="0 0 18 29"
      className="ms-2"
    >
      <g>
        <g fill="#fff">
          <path d="M1.536 10.671C.069 12.861-.431 15.633.403 18.326 1.8 22.831 6.281 24.3 8.232 24.734c-1.706-6.111-5.379-8.462-5.379-8.462C7.621 18.755 9.156 24.9 9.156 24.9c2.085-8.342-6.354-10.137-7.622-14.228h.002z"></path>
          <path d="M16.765 9.485c.948 1.614 1.292 3.671.791 5.685-.837 3.37-3.654 4.511-4.882 4.854 1.017-4.567 3.314-6.356 3.314-6.356-2.988 1.9-3.897 6.489-3.897 6.489-1.4-6.187 3.914-7.614 4.674-10.672z"></path>
          <path d="M5.38 6.484c4.815 3.276 5.847 10.397 5.847 10.397C14.247 7.615 5.472 4.763 4.524 0A10.747 10.747 0 002.58 8.577c.585 2.939 2.29 4.89 4.03 6.157 2.077 1.513 3.445 3.87 3.643 6.485.34 4.49-2.314 7.237-2.314 7.237 5.795-4.283 2.322-11.852 2.322-11.852-1.217-7.099-4.884-10.12-4.884-10.12h.001z"></path>
        </g>
      </g>
    </svg>
  );
}
