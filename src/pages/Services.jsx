import {React, useEffect} from "react";
import ServiceCard from "../components/Services/ServiceCard";

import { services } from "../assets/data/services";

const Sevices = () => {

  
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] ">
          {services.map((item, index) => (
            <ServiceCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sevices;
