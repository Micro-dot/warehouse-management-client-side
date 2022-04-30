import { useEffect, useState } from 'react';

const useBookItems = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return [books, setBooks]
}

export default useBookItems;