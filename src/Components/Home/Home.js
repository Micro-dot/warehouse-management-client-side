import React from 'react';
import useBookItems from '../../hooks/useBookItems';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import './Home.css';
const Home = () => {
    const [books, setBooks] = useBookItems();
    const bookSlice = books.slice(0, 6);

    return (
        <div>
            <Banner></Banner>
            <Items></Items>
        </div>
    );
};

export default Home;