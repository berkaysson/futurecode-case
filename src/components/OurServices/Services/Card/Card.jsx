import "./Card.css";

const Card = ({ title, description, imgSrc, imgAlt }) => {
  return (
    <div className="col-sm-3 col-xs-12 col-md-3 mb-xxl-5 mb-lg-4 mb-3 service-card">
      <img src={imgSrc} className="service-card-img" alt={imgAlt} />
      <div className="variant-1">
        <div className="d-flex flex-column align-items-start justify-content-start mt-4">
          {title.split(" ").map((word) => (
            <h5 className="b-card-title" key={word}>
              {word}
            </h5>
          ))}
        </div>
      </div>
      <div className="variant-2 ps-3 pt-3">
        <p className="b-card-text">{description}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="46"
        height="38"
        viewBox="0 0 46 38"
        fill="none"
        className="vector vector-rotate"
      >
        <path
          d="M45.5709 19.8315L28.171 37.0205C27.8962 37.2736 27.5326 37.4113 27.157 37.4048C26.7813 37.3982 26.4229 37.2479 26.1572 36.9854C25.8916 36.723 25.7394 36.3689 25.7328 35.9978C25.7262 35.6267 25.8656 35.2676 26.1217 34.996L41.0445 20.2517H2.01319C1.62863 20.2517 1.25982 20.1008 0.987894 19.8321C0.715968 19.5635 0.563202 19.1992 0.563202 18.8193C0.563202 18.4393 0.715968 18.075 0.987894 17.8064C1.25982 17.5377 1.62863 17.3868 2.01319 17.3868H41.0445L26.1217 2.64245C25.8656 2.37091 25.7262 2.01177 25.7328 1.64067C25.7394 1.26958 25.8916 0.915511 26.1572 0.653066C26.4229 0.390622 26.7813 0.240291 27.157 0.233744C27.5326 0.227196 27.8962 0.364943 28.171 0.617966L45.5709 17.807C45.8425 18.0756 45.995 18.4397 45.995 18.8193C45.995 19.1988 45.8425 19.5629 45.5709 19.8315Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Card;
