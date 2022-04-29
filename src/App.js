import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Books from './Components/Books/Books';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/books' element={<Books></Books>}></Route>
        <Route path='/blogs' element={<Home></Home>}></Route>
        <Route path='/Login' element={<Home></Home>}></Route>
        <Route path='/Signup' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
