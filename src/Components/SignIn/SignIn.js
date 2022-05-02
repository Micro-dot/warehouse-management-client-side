import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignIn.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';
import google from '../../images/Google.png'

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    let from = location.state?.from?.pathname || '/'
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleFromLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const handlepasswordreset = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email Sent');
        }
        else {
            toast('Please Enter Your Email Address');
        }
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div className='d-flex'>
            <img className='login-image' src={"https://thumbs.dreamstime.com/b/bookstore-interior-bookshelves-cheerful-cashier-desk-advertising-banner-poster-promotional-leaflet-flat-vector-184179648.jpg"} alt="" />
            <div className="login-container">
                <div className="login-title">LOGIN</div>
                <form onSubmit={handleFromLogin} className="login-form">
                    <input onChange={handleEmail} type="text" placeholder="Your Email" required />
                    <input onChange={handlePassword} type="password" placeholder="password" required />
                    <p className='error-message'>{error?.message || error1?.message}</p>
                    <p className='btn btn-link text-primary pe-auto text-decoration-none' onClick={handlepasswordreset} variant="link">Forget Password</p>
                    <button>Login</button>
                </form>

                <p className="mt-2">Don't have an account? <Link to='/signup'>Sign Up</Link></p>

                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                    <p className='mt-2 px-2'> or </p>
                    <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                </div>

                <div>
                    <button
                        onClick={() => signInWithGoogle()}>
                        <img width={25} className="me-1 google" src={google} alt="" />
                        <span>Google</span>
                    </button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default SignIn;