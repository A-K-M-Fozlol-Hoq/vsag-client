import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import './Client.css';
const Clients = () => {
  const [file, setFile] = useState('');
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/client/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLogos(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('image', file);
    fetch('http://localhost:4000/client/add', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data._id) {
          alert('Client created successfully');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleClick = (logo) => {
    console.log(logo);
  };
  return (
    <div className="client-wrapper">
      <h2 className="text-center mt-3">Added clients</h2>
      <div
        style={{
          backgroundColor: '#6EAD40',
          height: '5px',
          width: '150px',
          borderRadius: '5px',
          margin: '0 auto 50px',
        }}
      ></div>
      <div className="all-logos">
        {logos.map((logo) => (
          <div className="single-logo" key={logo._id}>
            <img src={`data:image/png;base64,${logo.image.img}`} alt="icon" />
            <div
              onClick={() => {
                handleClick(logo);
              }}
              className="delete-icon"
            >
              <AiFillDelete />
            </div>
          </div>
        ))}
      </div>
      <div style={{ width: '210px', margin: '20px auto 0' }}>
        Enter a new client: <br />
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          name=""
          id=""
        />
        <div className="btn btn-primary mt-2" onClick={handleSubmit}>
          Add Client
        </div>
      </div>
    </div>
  );
};

export default Clients;