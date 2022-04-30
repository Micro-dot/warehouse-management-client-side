import React from 'react';
import useBookItems from '../../hooks/useBookItems';
import Item from '../Item/Item';

const Items = () => {
    const [books, setBooks] = useBookItems();
    const bookSlice = books.slice(0, 6);

    return (
        <div className='item-slice'>
            {
                bookSlice.map(book => <Item
                    key={book._id}
                    book={book}
                ></Item>)
            }
        </div>
    );
};

export default Items;