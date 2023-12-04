import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import ProductDetail from "./components/core/ProductDetail";

function App() {
    return (
        <>
            <Routes>
                <Route path="*" element={<Header/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>

            <Routes>
                <Route path="/detail" element={<ProductDetail/>}/>
                <Route path="/" element={<Body/>}/>
            </Routes>
        </>
    );
}

export default App;
