import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddNewItems.css';
const AddNewItems = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data,e) => {
        const url = `http://localhost:5000/items`
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
            <h1>Add Book </h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-2' value={user?.email} {...register("email")} readOnly />
                <input placeholder='Book Name' className='mb-2' {...register("name")} required />
                <textarea placeholder='Book Short Description' className='mb-2' {...register("description")} required />
                <input placeholder='Book Quantity' className='mb-2' {...register("quantity")} required />
                <input placeholder='Book Price' className='mb-2' {...register("price")} required />
                <input placeholder='Book Publisher' className='mb-2' {...register("publisher")} required />
                <input placeholder='Book Img Link' className='mb-2' {...register("img")} required />
                <button className='add-book-button' type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddNewItems;