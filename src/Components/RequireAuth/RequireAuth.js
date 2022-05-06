import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init'
import Loading from '../Loading/Loading';
import './RequiteAuth.css';
const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return <div className='text-center verify-mail'>
            <h1> Please Verify your email address</h1>
            <p>Cheek your email & click the link to activate your account</p>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Send Verification Email Again
            </button>
        </div>
    }
    return children;
};

export default RequireAuth