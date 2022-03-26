import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import GoToButton from '../../components/utils/GoToButton/GoToButton';
import image from '../image/image.jpg'
const OutdoorLighting = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="p-5">
                <div className="container">
                    <h1 className="text-center">Outdoor Lighting</h1>
                    <div style={{height:'5px', width:'150px', borderRadius:'5px', margin:'0 auto 0', background:'green'}}></div>
                    <img className="my-5" style={{width:'100%', borderRadius:'20px'}} src={image} alt="PatioHeating" />
                    <b className="text-center mb-3"><i className='text-center'>Outdoor Lighting for Restaurant Patio</i></b>
                    <p>You have a vision for the type of restaurant you want, what kind of guests filter in and out each day, and the type of food you want to serve. But, aren't you missing out on an important feature that will create an unforgettable experience for your customers. Yes, we are talking about the lighting. The right outdoor lighting will complement your restaurant décor and transform eating out at the restaurant into an unforgettable experience.
                    </p>
                </div>
                <GoToButton></GoToButton>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OutdoorLighting;