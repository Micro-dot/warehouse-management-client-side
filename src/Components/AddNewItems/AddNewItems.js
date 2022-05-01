import React from 'react';
import { useForm } from "react-hook-form";
const AddNewItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/items`
        fetch(url,{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then( res => res.json())
        .then (result => {
            console.log(result);
        })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Add Book </h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Book Name' className='mb-2' {...register("name")} />
                <input placeholder='Book Short Description' className='mb-2' {...register("description")} />
                <input placeholder='Book Quantity' className='mb-2' {...register("quantity")} />
                <input placeholder='Book Price' className='mb-2' {...register("price")} />
                <input placeholder='Book Publisher' className='mb-2' {...register("publisher")} />
                <input placeholder='Book Img Link' className='mb-2' {...register("img")} />
                <input type="submit" value="Add Book"/>
            </form>
        </div>
    );
};

export default AddNewItems;