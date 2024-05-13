import React from 'react'
import ReactDOM from 'react-dom/client'
import { CalcProvider } from './context/calcContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalcProvider>
      <App />
    </CalcProvider>
  </React.StrictMode>
)