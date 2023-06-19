import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Main from './Main/'
import Header from '../Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
