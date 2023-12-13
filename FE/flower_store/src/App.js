import './App.css';
import React from "react";
import Body from "./components/Body";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import {EnumRole} from "./service/EnumRole";
import {Route, Routes} from "react-router-dom";
import About from "./components/HeaderLink/About";
import {HandleAuthor} from "./service/authorization";
import UnAuthorized from "./components/UnAuthorized";
import {requestFilter} from "./service/requestFilter";
import ProductDetail from "./components/ProductDetail";
import ProductsWithType from "./components/ProductsWithType";
import ProductsTrending from "./components/ProductsTrending";

export default function App({productArr, productQuantity}) {

    requestFilter();
    return (
        <>
            <Routes>
                <Route path="*" element={<Header/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/401" element={<UnAuthorized/>}/>
            </Routes>

            <Routes>
                <Route
                    element={<HandleAuthor
                        allowedRole={[
                            EnumRole.ADMIN,
                            EnumRole.MEMBER
                        ]}/>}>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/personal-page" element={<Cart/>}/>
                </Route>
            </Routes>

            <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/detail/:id" element={<ProductDetail/>}/>
                <Route path="/product/type/:id" element={<ProductsWithType/>}/>
                <Route path="/product/trending" element={<ProductsTrending/>}/>
            </Routes>
        </>
    );
}



