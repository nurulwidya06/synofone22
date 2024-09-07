import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//menghubungkan file css
import './style.css'
import './mobile.css'

//menghubungkan react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import react router dom
import { BrowserRouter, RouterProvider } from 'react-router-dom';

// import swiper/css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,


)
