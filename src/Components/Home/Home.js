import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Items from '../Items/Items';
import OurStory from '../OurStory/OurStory';
import './Home.css';
const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <OurStory></OurStory>
            <Contact></Contact>
            <div className='manage-inv'>
                <button onClick={() => navigate('/manageitems')}>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Home;