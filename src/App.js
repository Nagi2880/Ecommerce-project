import React from "react";
import {BrowserRouter,Routes,Route}from "react-router-dom"; //Import the Routes
import Home from './components/Home'; //Import the component Home
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Products from "./elements/Products";
  function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Products />} /> 
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
