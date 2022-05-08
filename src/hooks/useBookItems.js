import { useEffect, useState } from 'react';

const useBookItems = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('https://young-beach-82538.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return [books, setBooks]
}

export default useBookItems;