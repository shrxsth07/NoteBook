// import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import {Alert} from './components/Alert';
// import Signup from './components/Signup';
// import Login from './components/Login';

function App() {
  // const [alert, setAlert] = useState(null);
  // const showAlert = (message, type) => {
  //   setAlert({ msg: message, type: type });
  //   setTimeout(() => setAlert(null), 3000);
  // };

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is shresth's project"/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
