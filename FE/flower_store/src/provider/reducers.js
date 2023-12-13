import {ADD_ITEMS, GET_CART_FROM_API, REMOVE_ITEMS} from "./actions";
import {combineReducers} from "redux";


const initialState = {
    productArr: [],
    totalItem: 0,
    totalPrice: 0,
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_FROM_API:
            const items = action.payload.length;
            return {
                ...state,
                productArr: action.payload,
                totalItem: items,
            }
        case ADD_ITEMS:
            const existingItem = state.productArr.map(item => (item.productId === action.payload.productId));
            if (existingItem) {
                const nextQuantity = state.totalItem + 1;
                return {
                    ...state,
                    totalItem: nextQuantity,
                };
            }
            return {
                ...state,
                productArr: [action.payload],
            };
        case REMOVE_ITEMS:
            const nextQuantity = state.totalItem -1;
            return {
                ...state,
                totalItem: nextQuantity,
            }
        default:
            console.log("state thay doi tai case default")
            return state;
    }
}

export const rootReduce = combineReducers({
    reducers,
});