import SliderImage1 from "../../assets/images/slider1.png";
import SliderImage2 from "../../assets/images/slider2.png";
import SliderImage3 from "../../assets/images/slider3.png";
import "./Slider.css";
import SliderItem from "./SliderItem";

const SLIDER_ITEMS = [
  {
    imageSrc: SliderImage1,
    imageAlt: "Slider Image",
    title: "First slide label",
    caption: "Some representative placeholder content for the first slide.",
  },
  {
    imageSrc: SliderImage2,
    imageAlt: "Slider Image",
    title: "Second slide label",
    caption: "Some representative placeholder content for the second slide.",
  },
  {
    imageSrc: SliderImage3,
    imageAlt: "Slider Image",
    title: "Third slide label",
    caption: "Some representative placeholder content for the third slide.",
  },
];

const Slider = () => {
  return (
    <div id="sliderCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#sliderCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#sliderCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#sliderCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        {SLIDER_ITEMS.map((item, index) => (
          <SliderItem
            key={"SliderItem" + index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
            caption={item.caption}
          />
        ))}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#sliderCaptions"
        data-bs-slide="prev"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <path
            className="carousel-control-prev-icon"
            d="M18.2381 33.6689L31.124 20.7832C31.3927 20.5146 31.7571 20.3636 32.137 20.3636C32.517 20.3636 32.8813 20.5146 33.15 20.7832C33.4187 21.0519 33.5696 21.4162 33.5696 21.7962C33.5696 22.1761 33.4187 22.5405 33.15 22.8091L22.707 33.2501L50.75 33.2501C51.1298 33.2501 51.494 33.4009 51.7625 33.6694C52.031 33.9379 52.1818 34.3021 52.1818 34.6818C52.1818 35.0615 52.031 35.4257 51.7625 35.6942C51.494 35.9627 51.1298 36.1136 50.75 36.1136L22.707 36.1136L33.15 46.5545C33.4187 46.8232 33.5696 47.1875 33.5696 47.5675C33.5696 47.9474 33.4187 48.3118 33.15 48.5804C32.8813 48.8491 32.517 49 32.137 49C31.7571 49 31.3927 48.8491 31.124 48.5804L18.2381 35.6948C18.105 35.5618 17.9994 35.4039 17.9273 35.2301C17.8553 35.0563 17.8182 34.87 17.8182 34.6818C17.8182 34.4937 17.8553 34.3074 17.9273 34.1335C17.9994 33.9597 18.105 33.8018 18.2381 33.6689Z"
            fill="white"
          />
          <circle
            cx="35"
            cy="35"
            r="33.5"
            transform="rotate(-180 35 35)"
            stroke="white"
            stroke-width="3"
          />
        </svg>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#sliderCaptions"
        data-bs-slide="next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <path
            className="carousel-control-next-icon"
            d="M51.762 36.3311L38.876 49.2168C38.6074 49.4854 38.243 49.6364 37.863 49.6364C37.4831 49.6364 37.1187 49.4854 36.8501 49.2168C36.5814 48.9481 36.4305 48.5838 36.4305 48.2038C36.4305 47.8239 36.5814 47.4595 36.8501 47.1909L47.293 36.7499H19.25C18.8703 36.7499 18.5061 36.5991 18.2376 36.3306C17.9691 36.0621 17.8182 35.6979 17.8182 35.3182C17.8182 34.9385 17.9691 34.5743 18.2376 34.3058C18.5061 34.0373 18.8703 33.8864 19.25 33.8864H47.293L36.8501 23.4455C36.5814 23.1768 36.4305 22.8125 36.4305 22.4325C36.4305 22.0526 36.5814 21.6882 36.8501 21.4196C37.1187 21.1509 37.4831 21 37.863 21C38.243 21 38.6074 21.1509 38.876 21.4196L51.762 34.3052C51.8951 34.4382 52.0007 34.5961 52.0727 34.7699C52.1448 34.9437 52.1819 35.13 52.1819 35.3182C52.1819 35.5063 52.1448 35.6926 52.0727 35.8665C52.0007 36.0403 51.8951 36.1982 51.762 36.3311Z"
            fill="white"
          />
          <circle cx="35" cy="35" r="33.5" stroke="white" stroke-width="3" />
        </svg>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
