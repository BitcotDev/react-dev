// App.js

import './App.css';
import About from './components/About';
//import Alert from './components/Alert';
import Header from './components/Header';
import TextToUpper from './components/TextToUpper';
import React, { useState } from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert("Dark Mode has been enabled!", "success");
    } else {
      setMode('light');
      showAlert("Light Mode has been enabled!", "success");
    }
  };

  return (
    <>
      {/* // <BrowserRouter>
    //   <Header mode={mode} toggleMode={toggleMode} />
    //   <Alert alert={alert} />
    //   <div className="container my-3">
    //     <Routes>
    //       <Route path="/" element={<TextToUpper heading="Text to UpperCase" />} />
    //       <Route path="/about" element={<About />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter> */}
      <Header mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextToUpper heading="Text to UpperCase" />
        <About />
      </div>
    </>
  );
}

export default App;
