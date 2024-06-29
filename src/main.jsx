import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//menghubungkan file css
import './style.css'
import './mobile.css'

//menghubungkan react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import react router dom
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
