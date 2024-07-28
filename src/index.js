import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar'
import Landing from './pages/LandingPage'
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <Navbar></Navbar>
    <Landing />
    <Footer></Footer>
  </React.StrictMode>
);


