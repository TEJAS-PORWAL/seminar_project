import React from 'react';
import './App.css';
import FP from './components/FirstPAGE.js';
// import RP from './components/Navbar'
import {
  BrowserRouter as Router, Routes,  Route,} from "react-router-dom";
// import background from './background.png'


export default function App() {
  
  return (
    <Router>

       < div className="BB" >
      <FP />
      <Routes>
          <Route path="/about">
            trying
          </Route>
          </Routes>
 
      </div>
    </Router>
   );
}

