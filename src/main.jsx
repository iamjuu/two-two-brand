import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
})
