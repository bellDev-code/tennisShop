import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from '../Components/Header';
import Home from '../Pages/Home';
import Login from '../Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
