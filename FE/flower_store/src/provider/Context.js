import {createContext} from "react";
import {cartInitialization} from "./reducer";

const CartContext = createContext(cartInitialization);

export {CartContext};