import React, { useState } from 'react';

const Clients = () => {
  const [file, setFile] = useState('');
  const handleSubmit = () => {
    // console.log(file, typeof file, file.data);
    // const encImg = file.toString('base64');

    // var img = {
    //   contentType: file.mimetype,
    //   size: file.size,
    //   // img: Buffer.from(encImg, 'base64'),
    // };

    // const clientInfo = {
    //   img,
    // };
    // console.log(clientInfo);

    const formData = new FormData();
    formData.append('image', file);
    // formData.append('i', 'file');
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
  return (
    <div className="client-wrapper">
      <div className="all-logos">
        <div className="single-logo"></div>
      </div>
      <div style={{ width: '210px', margin: '0 auto 0' }}>
        Enter a new client: <br />
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          name=""
          id=""
        />
        <div className="btn btn-primary mt-2" onClick={handleSubmit}>
          Submit
        </div>
      </div>
    </div>
  );
};

export default Clients;
