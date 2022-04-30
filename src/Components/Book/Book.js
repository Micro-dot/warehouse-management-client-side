import React from 'react';
import './Book.css';

const Book = ({ book }) => {
    const { name, img, description, price, quantity, publisher } = book;
    return (
        <div>
            <div className='item mx-auto '>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='item-information'>
                    <h5 className='ms-3'>Name: {name}</h5>
                    <p><b>Description:</b> {description.slice(0, 130)}...</p>
                    <p><b>Quantity:</b> {quantity}</p>
                    <p><b>Price:</b> ${price}</p>
                    <p><b>Publish by</b> {publisher}</p>
                    <div className='btn-update'>
                        <button >Delete</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Book;