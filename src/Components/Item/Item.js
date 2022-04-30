import React from 'react';
import { useNavigate } from 'react-router-dom';
import './item.css';
const Item = ({ book }) => {
    
    const navigate = useNavigate();
    const navigateInventory = id => {
        navigate(`/items/${id}`);
    }
    return (
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
                        <button onClick={() => navigateInventory(book._id)}>Update</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Item;