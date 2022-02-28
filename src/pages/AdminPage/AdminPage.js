import React, { useState } from 'react';
import LoginForm from '../../components/Admin/LoginForm/LoginForm';
import SelectOption from '../../components/Admin/SelectOption/SelectOption';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import './AdminPage.css';
import Clients from '../../components/Admin/Clients/Clients';
const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div className="admin-page-wrapper">
      <NavBar showLoginLogout={true}></NavBar>
      {isLoggedIn ? (
        <div>
          <SelectOption></SelectOption>
          <div>
            <>
              <Clients></Clients>
            </>
          </div>
        </div>
      ) : (
        <div className="login-form py-5 mx-auto">
          <LoginForm></LoginForm>
        </div>
      )}

      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default AdminPage;
