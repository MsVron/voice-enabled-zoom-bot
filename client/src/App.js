import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import HomePage from './HomePage';
import Login from './Login';
import Signup from './Signup';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;