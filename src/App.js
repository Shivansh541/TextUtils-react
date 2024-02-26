import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(43 45 48)'
      document.body.style.color = 'white'
      showAlert('Switched to Dark Mode', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'rgba(248,249,250)'
      document.body.style.color = 'black'
      showAlert('Switched to Light Mode', 'success')
    }
  }
  return (
    <>
      <Router>
          <Navbar mode={mode} toggleMode={toggleMode} />
              <Alert alert={alert} />
              <div className="container">
          <Routes>
              <Route path='/about' element={<About/>} />
              <Route path='/' element={<TextForm heading="Enter Your Text to analyze" mode={mode} showAlert={showAlert} />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

