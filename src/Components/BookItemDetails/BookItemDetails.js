import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './BookItemDetails.css';
const BookItemDetails = () => {
    const { itemsId } = useParams();
    const [bookItem, setBookItem] = useState({});
    const [Updatequantity, setUpdateQuantity] = useState('');
    const navigate = useNavigate();
    const handleDelivered = data => {
        const { quantity, ...rest } = bookItem;
        if (bookItem.quantity > 0) {
            const quantity1 = parseInt(bookItem.quantity) - 1;
            const quantityStr = quantity1.toString();
            const newQuantity = { quantity: quantityStr, ...rest };
            setBookItem(newQuantity);
            const url = `https://young-beach-82538.herokuapp.com/items/${itemsId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newQuantity)
            })
                .then(res => res.json())
                .then(data => { })
        }
    }
    useEffect(() => {
        const url = `https://young-beach-82538.herokuapp.com/items/${itemsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBookItem(data))
    }, [itemsId])

    const handleQuantity = event => {
        if (event.target.value > 0) {
            setUpdateQuantity(event.target.value);
            console.log(setUpdateQuantity);
        }
    }
    const handleupdate = event => {
        const { quantity, ...rest } = bookItem;
        event.preventDefault();
        const quantity1 = parseInt(bookItem.quantity);
        const quantity2 = parseInt(Updatequantity);
        const Quantity = quantity1 + quantity2;
        const quantityStr = Quantity.toString();
        const newQuantity = { quantity: quantityStr, ...rest };
        setBookItem(newQuantity);
        console.log(newQuantity);
        const url = `https://young-beach-82538.herokuapp.com/items/${itemsId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuantity)
        })
            .then(res => res.json())
            .then(data => { })

    }


    return (
        <div>
            <div className='item mx-auto item-slice'>
                <div>
                    <img src={bookItem.img} alt="" />
                </div>
                <div className='item-information'>
                    <h5 className='ms-3'>Name: {bookItem.name}</h5>
                    <h6 className='ms-3'>ID: {bookItem._id}</h6>
                    <p><b>Description:</b> {bookItem.description?.slice(0, 130)}...</p>
                    <p><b>Quantity:</b> {bookItem?.quantity}</p>
                    <p><b>Price:</b> ${bookItem.price}</p>
                    <p><b>Publish by</b> {bookItem.publisher}</p>
                    <div className='btn-update'>
                        <button onClick={handleDelivered}>
                            {bookItem.quantity > 0 ?
                                <>delivered</> :
                                <div className='text-danger'>Stock Out</div>
                            }
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <input type="text" placeholder='Add your quantity' required onBlur={handleQuantity} /> <button onClick={handleupdate}>Update</button>
            </div>
            <div className='manage-inv'>
                <button onClick={() => navigate('/manageitems')}>Manage Inventories</button>
            </div>
        </div>
    );
};

export default BookItemDetails;