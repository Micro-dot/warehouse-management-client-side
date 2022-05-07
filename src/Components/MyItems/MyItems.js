import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './MyItems.css';
const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    const handleItemDelete = id => {
        const alert = window.confirm("Confirm Delete");
        if (alert) {
            const url = `http://localhost:5000/items/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainItem = myItems.filter(book => book._id !== id);
                    setMyItems(remainItem);
                })
            return <Loading></Loading>
        }
    }
    useEffect(() => {
        const email = user?.email;
        const url = `http://localhost:5000/myitems?email=${email}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [user])
    return (

        <div >
            <h1>My Item {myItems.length}</h1>
            {
                myItems.map(myitem =>
                    <div className='item mx-auto '>
                        <div>
                            <img src={myitem.img} alt="" />
                        </div>
                        <div className='item-information'>
                            <h5 className='ms-3'>Name: {myitem.name}</h5>
                            <p><b>Description:</b> {myitem.description.slice(0, 130)}... </p>
                            <p><b>Quantity:</b> {myitem.quantity}</p>
                            <p><b>Price:</b> ${myitem.price}</p>
                            <p><b>Publish by</b> {myitem.publisher}</p>
                            <div className='btn-update'>
                                <button onClick={() => handleItemDelete(myitem._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyItems;