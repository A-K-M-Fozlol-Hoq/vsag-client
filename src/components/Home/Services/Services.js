import React, { useEffect, useState } from 'react';
import './Service.css';
const Services = () => {
  const [services, setServices] = useState([]);
  const updateLogosState = () => {
    fetch('https://ancient-falls-69387.herokuapp.com/service/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    updateLogosState();
  }, []);
  return (
    <div className="service-wrapper">
      <div className="container" id="backpack">
        <div className="card-group">
          {services.map((service) => (
            <div key={service._id} className="card">
              <img
                src={`data:image/png;base64,${service.image.img}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
