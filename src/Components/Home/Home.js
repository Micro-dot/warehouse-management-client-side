import React from 'react';
import { useNavigate } from 'react-router-dom';
import useBookItems from '../../hooks/useBookItems';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Items from '../Items/Items';
import './Home.css';
const Home = () => {
    const [books, setBooks] = useBookItems();
    const bookSlice = books.slice(0, 6);
    const navigate = useNavigate();

    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <Contact></Contact>
            <div className='manage-inv'>
                <button onClick={() => navigate('/manageitems')}>Manage Inventories</button>
            </div>
        </div>
    );
};

export default Home;