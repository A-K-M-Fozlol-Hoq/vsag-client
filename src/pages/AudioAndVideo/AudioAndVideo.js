import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import NavBar from '../../components/Shared/NavBar/NavBar';
import GoToButton from '../../components/utils/GoToButton/GoToButton';
import image from '../image/image.jpg'
const AudioAndVideo = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="p-5">
                <div className="container">
                    <h1 className="text-center">Audio and Video</h1>
                    <div style={{height:'5px', width:'150px', borderRadius:'5px', margin:'0 auto 0', background:'green'}}></div>
                    <img className="my-5" style={{width:'100%', borderRadius:'20px'}} src={image} alt="PatioHeating" />
                    <b className="text-center mb-3"><i className='text-center'>Audio and Video System for Restaurants</i></b>
                    <p>Create a memorable experience and keep your guests comfortable and entertained at all times with the right audio and video system in place. We will install an affordable restaurant audio and video system to set the tone for your business.  
                    </p>
                </div>
                <GoToButton></GoToButton>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AudioAndVideo;