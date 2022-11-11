import React from 'react'
import HeaderNav from './components/mainCon/HeaderNav'
import MainNav from './components/mainCon/MainNav'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/mainCon/Footer';

const MainCon = () => {
  return (
    <div>
      <HeaderNav />
      <MainNav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default MainCon