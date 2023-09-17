import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useEffect } from 'react';

import Globalnav from './components/globalnav';
import Footer from './components/footer';

import Home from './screens/home';
import Creative from './screens/creative';
import About from './screens/about';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    document.title = "Irene Dinh"
  })
  
  return (
      <Router>
        <div className='App'>
        <Globalnav/>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/creative" element={<Creative/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        <Footer/>
        </div>
      </Router>
  )
}

export default App;
