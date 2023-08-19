import React from 'react';
import image from '../../../assets/4592943_2438054-removebg-preview (1).png'

const AboutUs = () => {
    return (
        <div className='bg-gray-100'>
            <div className='grid grid-cols-2 items-center mx-auto w-9/12'>
            <div>
                <h2 className='text-6xl font-bold '>Lets to share <br /> with us.</h2>
                <p className='text-lg mt-5 text-left'>Welcome to our survey website! We are a dedicated team of passionate individuals united by our commitment to  collecting valuable insights and data. With diverse backgrounds and expertise,we collaborate to provide you with an unparalleled survey experience.  Our goal is to make your voice heard and transform your opinions into  meaningful information. Join us in shaping the future through the power of your opinions.</p>
            </div>
            <div>
                <img className='' src={image} alt="" />
            </div>
            </div>
        </div>
    );
};

export default AboutUs;