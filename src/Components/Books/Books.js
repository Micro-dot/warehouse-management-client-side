import { useNavigate } from 'react-router-dom';
import useBookItems from '../../hooks/useBookItems';
import Loading from '../Loading/Loading';
import './Books.css'

const Books = () => {
    const navigate = useNavigate();
    const [books, setBooks] = useBookItems();
    const handleItemDelete = id => {
        const alert = window.confirm("Confirm Delete");
        if (alert) {
            const url = `https://young-beach-82538.herokuapp.com/items/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainItem = books.filter(book => book._id !== id);
                    setBooks(remainItem);
                })
        }
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="items-body">
                {
                    books.map(book =>
                        <div className='item mx-auto '>
                            <div>
                                <img src={book.img} alt="" />
                            </div>
                            <div className='item-information'>
                                <h5 className='ms-3'>Name: {book.name}</h5>
                                <p><b>Description:</b> {book.description.slice(0, 130)}... </p>
                                <p><b>Quantity:</b> {book.quantity}</p>
                                <p><b>Price:</b> ${book.price}</p>
                                <p><b>Publish by</b> {book.publisher}</p>
                                <div className='btn-update'>
                                    <button onClick={() => handleItemDelete(book._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    )}

            </div>

            <button onClick={() => navigate('/addNewItems')} className='addnewitems'>Add New Items</button>

        </div>
    );
};
export default Books;