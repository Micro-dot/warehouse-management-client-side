import React from 'react';
import './Banner.css';
import logo from '../Images/Banner/02.png';
const Banner = () => {
    return (
        <div className='d-lg-flex'>
            <div className='banner-title container'>
                <h2 className='heading'>WELCOME TO BOOK STORE</h2>
                <p><b>“This funding came at the most perfect time when I prayed I would have rent for next month and payroll and purchases. Your team will never, ever, know how much booksellers like me appreciate your business.” — VaLinda Miller, The Turning Page Bookshop, Goose Creek, SC </b></p>
            </div>
            <div className='banner-img'>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Banner;