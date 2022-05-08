import React from 'react';
import './NotFound.css';
import PageNotFound from '../../images/pagenotfound.jpg' ;
const NotFound = () => {
    return (
        <div className='pagenotfound'>
            <img className='mb-5 mt-5' src={PageNotFound} alt=""/>
        </div>
    );
};

export default NotFound;