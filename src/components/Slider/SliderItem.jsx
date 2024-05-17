import "./Slider.css";

const SliderItem = ({ imageSrc, imageAlt, title, caption }) => {
  return (
    <div className="carousel-item active">
      <img src={imageSrc} className="d-block w-100" alt={imageAlt} />
      <div className="carousel-caption position-absolute d-inline-flex top-0 start-20">
        <div className="d-flex flex-row align-items-center">
          <div className="carousel-caption-shape"></div>
          <div className="text-start carousel-caption-text">
            <h5>{title}</h5>
            <p>{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItem;
