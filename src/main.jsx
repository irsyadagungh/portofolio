import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB_QWjhKrW1Ojv-qzyIhJBvWxU-VVqSgns",
  authDomain: "irsyad-agung-portofolio.firebaseapp.com",
  projectId: "irsyad-agung-portofolio",
  storageBucket: "irsyad-agung-portofolio.appspot.com",
  messagingSenderId: "362500752864",
  appId: "1:362500752864:web:c81c5bdd194d536ea49785",
  measurementId: "G-F4BGJM6FY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
