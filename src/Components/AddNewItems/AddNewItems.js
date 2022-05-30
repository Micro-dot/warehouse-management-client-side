import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import addbook from '../../images/17300367.jpg';
import './AddNewItems.css';
const AddNewItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        const url = `https://young-beach-82538.herokuapp.com/items`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        toast('Book Added your My items list');
        e.target.reset();
    };
    return (
        <div className='additems mx-auto'>
            <h1 className='text-white mb-5'>Store Your Book </h1>
            <div className='store-book'>
                <div className='addbook'>
                    <img src={addbook} alt="" />
                </div>
                <form className='addbookfrom' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' value={user?.email} {...register("email")}/> <br />

                    <input placeholder='Book Name' className='mb-2' {...register("name")} required />
                    <input placeholder='Book Quantity' className='mb-2' {...register("quantity")} required /> <br />
                    <input placeholder='Book Price' className='mb-2' {...register("price")} required />
                    <input placeholder='Book Publisher' className='mb-2' {...register("publisher")} required /> <br />
                    <input placeholder='Book Img Link' className='mb-2 img' {...register("img")} required /> <br />
                    <textarea placeholder='Book Short Description' className='mb-2' {...register("description")} required /> <br />
                    <button className='add-book-button' type="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
};

export default AddNewItems;