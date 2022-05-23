import React from 'react';
import{ BrowserRouter as Router,Route, Routes,Navigate } from "react-router-dom";
import ContactUs from './components/ContactUs';
import LandingPage from './components/LandingPage';
import TopMenu from "./components/TopMenu"
import Products from './Products/Products';

function App() {
  return (
  <Router>
  <TopMenu/>
  <div style={{padding:"10px"}}>
  <Routes>
    <Route path ="/products" element={<Products/>}/>
    <Route path ="/contact-us" element={<ContactUs/>}/>
    <Route path ='/' element={<LandingPage/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
