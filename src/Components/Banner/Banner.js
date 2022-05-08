import React from 'react';
import './Banner.css';
import logo from '../../images/02.png';
const Banner = () => {
    return (
        <div className='d-lg-flex main'>
            <div className='banner-title'>
                <h2 className='heading'>GET YOUR NEW <span className='color'>BOOK COLLECTION</span></h2>
            </div>
            <div className='banner-img'>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Banner;