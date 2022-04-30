import React, { useEffect, useState } from 'react';
import useBookItems from '../../hooks/useBookItems';
import Book from '../Book/Book';
import './Books.css'
import { useForm } from "react-hook-form";
const Books = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [books, setBooks] = useBookItems();
    return (
        <div>
            <div className="items-body">
                {
                    books.map(book => <Book
                        book={book}
                        key={book._id}
                    ></Book>)
                }
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form>
        </div>
    );
};
export default Books;