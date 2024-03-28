// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRNo9DaHzrQEf4xRhG9B3YoAwNDYmVxGU",
  authDomain: "lungcancer-screening.firebaseapp.com",
  projectId: "lungcancer-screening",
  storageBucket: "lungcancer-screening.appspot.com",
  messagingSenderId: "34126282877",
  appId: "1:34126282877:web:5680d7941f922a4a6c3114"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;