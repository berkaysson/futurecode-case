import Card from "./Card/Card";
import "./Services.css";
import { services } from "./serviceData";

const Services = () => {
  return (
    <div className="d-flex flex-row flex-wrap gap-4">
      {services.map((service) => (
        <Card
          key={service.title}
          title={service.title}
          description={service.description}
          imgSrc={service.imgSrc}
          imgAlt={service.imgAlt}
        />
      ))}
    </div>
  );
};

export default Services;
