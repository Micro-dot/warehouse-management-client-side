import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Books.css'
const Books = () => {
    const [books, setBooks] = useState([]);
    console.log(books)
    console.log(books);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
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