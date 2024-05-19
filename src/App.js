import { useEffect, useState } from "react";
import Menu from "./components/Menu/Menu";
import OurServices from "./components/OurServices/OurServices";
import Slider from "./components/Slider/Slider";
import MobileMenu from "./components/MobileMenu/MobileMenu";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mb-5">
      {isMobile ?  <MobileMenu /> : <Menu />}
      <Slider />
      <OurServices />
    </div>
  );
}

export default App;
