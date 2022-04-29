import React, { useEffect, useState } from 'react';
import useBookItems from '../../hooks/useBookItems';
import Book from '../Book/Book';
import './Books.css'
const Books = () => {
    const [books, setBooks] = useBookItems();
    return (
        <div className="items-body">
                {
                    books.map(book => <Book
                        book = {book}
                        key={book._id}
                    ></Book>)
                }
            </div>
    );
};
export default Books;