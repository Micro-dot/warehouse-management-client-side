import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Books from './Components/Books/Books';
import BookItemDetails from './Components/BookItemDetails/BookItemDetails';
import AddNewItems from './Components/AddNewItems/AddNewItems';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/books' element={<Books></Books>}></Route>
        <Route path='/addNewItems' element={<AddNewItems></AddNewItems>}></Route>
        <Route path='/items/:itemsId' element={<BookItemDetails></BookItemDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
