import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import LanguageDetails from './components/LanguageDetails.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path = "/" element = {<App/>} /> 
        <Route path = "/language/:id" element = {<LanguageDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
