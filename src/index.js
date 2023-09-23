import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


const firebaseConfig = {
  apiKey: "AIzaSyDm-5MguH3pr2OJP11UIuLdHFk6gesp01Q",
  authDomain: "ecommerce-aliaga.firebaseapp.com",
  projectId: "ecommerce-aliaga",
  storageBucket: "ecommerce-aliaga.appspot.com",
  messagingSenderId: "116668727889",
  appId: "1:116668727889:web:2a9fe96b2469af7134ee70"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

