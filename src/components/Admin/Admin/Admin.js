import React, { useState } from 'react';
import SelectOption from '../SelectOption/SelectOption';
import Clients from '../Clients/Clients';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import Products from '../Products/Products';
const Admin = () => {
  const [showCompo, setShowCompo] = useState('');
  return (
    <div className="admin-wrapper">
      <SelectOption setShowCompo={setShowCompo}></SelectOption>
      <div>
        {showCompo === 'slider' && <Slider></Slider>}
        {showCompo === 'services' && <Services></Services>}
        {showCompo === 'clients' && <Clients></Clients>}
        {showCompo === 'products' && <Products></Products>}
      </div>
    </div>
  );
};

export default Admin;
