import React from 'react';
import useBookItems from '../../hooks/useBookItems';
import Banner from '../Banner/Banner';
import './Home.css';
const Home = () => {
    const [books, setBooks] = useBookItems();
    const bookSlice = books.slice(0, 6);
    return (
        <div>
            <Banner></Banner>
            <div className='item-slice'>
                {
                    bookSlice.map(book =>
                        <div key={book._id}>
                            <div className='item mx-auto item-slice'>
                                <div>
                                    <img src={book.img} alt="" />
                                </div>
                                <div className='item-information'>
                                    <h5 className='ms-3'>Name: {book.name}</h5>
                                    <p><b>Description:</b> {book.description.slice(0, 130)}...</p>
                                    <p><b>Quantity:</b> {book.quantity}</p>
                                    <p><b>Price:</b> ${book.price}</p>
                                    <p><b>Publish by</b> {book.publisher}</p>
                                    <div className='btn-update'>
                                        <button>Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Home;