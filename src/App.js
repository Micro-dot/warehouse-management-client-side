import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Books from './Components/Books/Books';
import BookItemDetails from './Components/BookItemDetails/BookItemDetails';
import AddNewItems from './Components/AddNewItems/AddNewItems';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/Signup/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Loading from './Components/Loading/Loading';
import MyItems from './Components/MyItems/MyItems';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import NotFound from './Components/NotFound/NotFound';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/loading' element={<Loading></Loading>}></Route>
        <Route path='/manageitems' element={
          <RequireAuth>
            <Books></Books>
          </RequireAuth>}>
        </Route>
        <Route path='/addNewItems' element={
          <RequireAuth>
            <AddNewItems></AddNewItems>
          </RequireAuth>}>
        </Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}>
        </Route>
        <Route path='/items/:itemsId' element={
          <RequireAuth>
            <BookItemDetails></BookItemDetails>
          </RequireAuth>
        }></Route>
        <Route path='signin' element={<SignIn></SignIn>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
