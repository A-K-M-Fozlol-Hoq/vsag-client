import React, { useState, useEffect } from 'react';
import LoginForm from '../../components/Admin/LoginForm/LoginForm';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import './AdminPage.css';
import Admin from '../../components/Admin/Admin/Admin';
const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    console.log(
      'sjngfji',
      sessionStorage.getItem('email'),
      sessionStorage.getItem('hash')
    );
    if (sessionStorage.getItem('email') && sessionStorage.getItem('hash')) {
      const formData = new FormData();
      formData.append('email', sessionStorage.getItem('email'));
      formData.append('password', sessionStorage.getItem('hash'));
      fetch('http://localhost:4000/admin/isValid', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data) {
            setIsLoggedIn(true);
          } else {
            // sessionStorage.clear();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  return (
    <div className="admin-page-wrapper">
      <NavBar showLoginLogout={true}></NavBar>
      {isLoggedIn ? (
        <Admin></Admin>
      ) : (
        <div className="login-form py-5 mx-auto">
          <LoginForm
            setLoggedInUser={setLoggedInUser}
            setIsLoggedIn={setIsLoggedIn}
          ></LoginForm>
        </div>
      )}

      <Footer showLetsStayInTouch={false}></Footer>
    </div>
  );
};

export default AdminPage;
