/* eslint-disable jsx-a11y/anchor-is-valid */
const MegaMenuColumn = ({ title, items, type }) => {
  const headerColor = type === "green" ? "#31A40F" : "#18233E";
  return (
    <div className="col megamenu-column">
      <h2 className="dropdown-header d-flex align-items-center">
        <div
          style={{
            width: "3px",
            height: "31px",
            background: headerColor,
            display: "inline-flex",
          }}
        ></div>
        <span style={{ color: headerColor }}>{title}</span>
      </h2>
      <ul className="list-unstyled ms-3">
        {items.map((item, index) => (
          <li key={index} className="mt-xxl-3 mt-2">
            <a className="dropdown-item" href="#">
              {item}
              {type === "green" && <Icon />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenuColumn;

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="26"
      fill="none"
      viewBox="0 0 16 26"
      className="ms-4"
    >
      <g>
        <g>
          <path
            fill="url(#paint0_radial_199_99)"
            d="M1.382 9.6c-1.32 1.97-1.77 4.463-1.02 6.886C1.62 20.54 5.65 21.86 7.406 22.251c-1.534-5.498-4.838-7.612-4.838-7.612 4.289 2.233 5.67 7.76 5.67 7.76 1.876-7.505-5.716-9.12-6.857-12.8h.002z"
          ></path>
          <path
            fill="url(#paint1_radial_199_99)"
            d="M15.081 8.533c.854 1.452 1.163 3.303.713 5.115-.753 3.03-3.288 4.058-4.393 4.366.915-4.108 2.982-5.718 2.982-5.718-2.688 1.709-3.506 5.837-3.506 5.837-1.26-5.565 3.521-6.85 4.204-9.6z"
          ></path>
          <path
            fill="url(#paint2_radial_199_99)"
            d="M4.84 5.833c4.332 2.947 5.26 9.353 5.26 9.353C12.816 6.85 4.922 4.285 4.07 0a9.668 9.668 0 00-1.748 7.716c.526 2.644 2.06 4.399 3.625 5.54 1.868 1.36 3.1 3.48 3.278 5.833.305 4.039-2.082 6.51-2.082 6.51 5.213-3.853 2.09-10.662 2.09-10.662-1.096-6.386-4.395-9.104-4.395-9.104h.001z"
          ></path>
        </g>
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_199_99"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(25.3038 0 0 24.422 8.111 2.815)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29AB03"></stop>
          <stop offset="1" stopColor="#52853F"></stop>
        </radialGradient>
        <radialGradient
          id="paint1_radial_199_99"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(22.5746 0 0 25.664 8.448 2.266)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29AB03"></stop>
          <stop offset="1" stopColor="#52853F"></stop>
        </radialGradient>
        <radialGradient
          id="paint2_radial_199_99"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(24.4628 0 0 25.2673 8.262 2.851)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29AB03"></stop>
          <stop offset="1" stopColor="#52853F"></stop>
        </radialGradient>
      </defs>
    </svg>
  );
}
