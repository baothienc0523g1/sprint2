import {useReducer} from "react";
import {CartContext} from "./Context";
import {cartInitialization} from "./reducer";
import myReducer from "./reducer";

function CartProvider({child}) {

    const [state, dispatch] = useReducer(myReducer, null);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            {child}
        </CartContext.Provider>
    )
}

export default CartProvider;