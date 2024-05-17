import SliderImage from "../../assets/images/slider1.png";
import "./Slider.css";
import SliderItem from "./SliderItem";

const SLIDER_ITEMS = [
  {
    imageSrc: SliderImage,
    imageAlt: "Slider Image",
    title: "First slide label",
    caption: "Some representative placeholder content for the first slide.",
  },
  {
    imageSrc: SliderImage,
    imageAlt: "Slider Image",
    title: "Second slide label",
    caption: "Some representative placeholder content for the second slide.",
  },
  {
    imageSrc: SliderImage,
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
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#sliderCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
