import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
const Services = () => {
  const [file, setFile] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [products, setProducts] = useState([]);
  const updateLogosState = () => {
    fetch('http://localhost:4000/service/getAll', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    updateLogosState();
  }, []);
  const handleSubmit = () => {
    if (name && file && description) {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('name', name);
      formData.append('description', description);
      fetch('http://localhost:4000/service/add', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data._id) {
            alert('Product created successfully');
            updateLogosState();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert('Please enter a product name, description and input file');
    }
  };
  const handleClick = (product) => {
    fetch(`http://localhost:4000/service/deleteById/${product._id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message === 'Service was removed successfully!') {
          alert('Service removed successfully');
          updateLogosState();
        }
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to remove client! Please try again');
        window.location.reload();
      });
  };
  return (
    <div className="product-wrapper">
      <h2 className="text-center mt-3">Added services</h2>
      <div
        style={{
          backgroundColor: '#6EAD40',
          height: '5px',
          width: '150px',
          borderRadius: '5px',
          margin: '0 auto 50px',
        }}
      ></div>
      <div className="all-products">
        {products.map((product) => (
          <div className="single-product" key={product._id}>
            <img
              src={`data:image/png;base64,${product.image.img}`}
              alt="icon"
            />
            <div
              onClick={() => {
                handleClick(product);
              }}
              className="delete-icon"
            >
              <AiFillDelete />
            </div>
          </div>
        ))}
      </div>
      <div style={{ width: '210px', margin: '20px auto 0' }}>
        {/* Enter a new client: <br /> */}
        <h4 className="text-center mt-5">Add a new product</h4>
        <div
          style={{
            backgroundColor: '#6EAD40',
            height: '5px',
            width: '150px',
            borderRadius: '5px',
            margin: '0 auto 20px',
          }}
        ></div>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          name=""
          id=""
          className="form-control"
        />
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name=""
          className="form-control mt-2 "
          placeholder="enter product name"
          id=""
        />
        <textarea
          className="form-control mt-2 mb-2"
          name=""
          id=""
          cols="10"
          placeholder="Enter product description"
          rows="2"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="btn btn-primary mt-2" onClick={handleSubmit}>
          Add Service
        </div>
      </div>
    </div>
  );
};

export default Services;
