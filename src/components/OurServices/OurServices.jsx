import "./OurServices.css";
import Services from "./Services/Services";

const OurServices = () => {
  return (
    <div id="services" className="">
      <div id="services-title">
        <h3>Hizmetlerimiz</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="196"
          height="4"
          viewBox="0 0 196 4"
          fill="none"
        >
          <rect x="21.4766" width="174.293" height="4" fill="#E71339" />
          <rect width="13.7672" height="4" fill="#E71339" />
        </svg>
        <h5>Kaliteli, Güvenilir, Tam Zamanında, Çözüm Odaklı Hizmetler</h5>
      </div>
      <div className="mt-xxl-4 mt-3">
        <Services />
      </div>
    </div>
  );
};

export default OurServices;
