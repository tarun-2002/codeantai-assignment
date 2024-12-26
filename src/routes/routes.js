import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from '../modules/Login/Login';
import Repository from '../modules/Repository/Repository';
import Home from '../modules/Home/Home';
export default function Router(){
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path='/repository' element={<Repository />} />
  </Routes>
  </BrowserRouter>
  )
}


