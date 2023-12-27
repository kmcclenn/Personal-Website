import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  //document.body.style = 'background: red;';
  return (
    <Router>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Div />} />
            </Routes>
      </Router>
  );
}

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my template! test reload hi
        
        </a>
      </header>
    </div>
  )
}

function Div() {
  return (
    <div>
      <p>
        I am a div.
      </p>
    </div>
  );
}

export default App;
