import React, { useState } from 'react';
import SelectOption from '../SelectOption/SelectOption';
import Clients from '../Clients/Clients';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import Products from '../Products/Products';
import AdminController from '../AdminController/AdminController';
import Inbox from '../Inbox/Inbox';
import AboutUs from '../AboutUs/AboutUs';
const Admin = () => {
  const [showCompo, setShowCompo] = useState('slider');
  return (
    <div className="admin-wrapper">
      <SelectOption setShowCompo={setShowCompo}></SelectOption>
      <div>
        {showCompo === 'slider' && <Slider></Slider>}
        {showCompo === 'services' && <Services></Services>}
        {showCompo === 'clients' && <Clients></Clients>}
        {showCompo === 'products' && <Products></Products>}
        {showCompo === 'admins' && <AdminController></AdminController>}
        {showCompo === 'inbox' && <Inbox></Inbox>}
        {showCompo === 'aboutUs' && <AboutUs />}
      </div>
    </div>
  );
};

export default Admin;
