// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY64V8GiTG3V8hr4xKd7SN-L6or9Xcal8",
  authDomain: "chef-recipe-assignment-420fb.firebaseapp.com",
  projectId: "chef-recipe-assignment-420fb",
  storageBucket: "chef-recipe-assignment-420fb.appspot.com",
  messagingSenderId: "1010937822657",
  appId: "1:1010937822657:web:a97aeebc30c4dd75f50340"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;