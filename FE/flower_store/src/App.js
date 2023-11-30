import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
      <Routes>
        <Route path="*" element={<Header/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
  );
}

export default App;
