// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkwEpFjAUni-LF-OI2BAc7qShOMbBsQOQ",
  authDomain: "story-keeper-371db.firebaseapp.com",
  projectId: "story-keeper-371db",
  storageBucket: "story-keeper-371db.appspot.com",
  messagingSenderId: "912746842809",
  appId: "1:912746842809:web:5da9d4cd30a36da4cda968"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;