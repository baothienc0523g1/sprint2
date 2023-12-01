import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/body/Products";
import Body from "./components/Body";

function App() {
  return (
      <>
          <Routes>
              <Route path="*" element={<Header/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>

          <Routes>
              <Route path="/" element={<Body/>}/>
          </Routes>

          <Routes>
              <Route path="*" element={<Footer/>}/>
          </Routes>
      </>
  );
}

export default App;
