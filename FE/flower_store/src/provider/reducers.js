import {ADD_ITEMS, GET_CART_FROM_API, MINUS_ITEMS, PAY_CART, REMOVE_ITEMS} from "./actions";
import {combineReducers} from "redux";


const initialState = {
    productArr: [],
    totalItem: 0,
    totalPrice: 0,
    address: "",
    phoneNumber: "",
};

const reducers = (state = initialState, action) => {

    switch (action.type) {
        case GET_CART_FROM_API:
            const items = action.payload.length;
            if (items > 0) {
                let totalPrices = 0;
                action.payload.map(item => {
                    totalPrices += +item.productPrice * +item.productQuantity
                })
                return {
                    ...state,
                    productArr: action.payload,
                    totalItem: items,
                    address: action.payload[0].address,
                    phoneNumber: action.payload[0].phoneNumber,
                    totalPrice: totalPrices,
                }
            } else {
                return {
                    ...state,
                }
            }
        case ADD_ITEMS:
            const existingItem = state.productArr.map(item => (item.productId === action.payload.productId));
            if (existingItem) {
                const nextTotalItem = state.totalItem + 1;
                return {
                    ...state,
                    totalItem: nextTotalItem,
                };
            }
            return {
                ...state,
                productArr: action.payload,
            };
        case MINUS_ITEMS:
            let totalPrices = 0;
            action.payload.map(item => {
                totalPrices += +item.productPrice * +item.productQuantity
            })
            return {
                ...state,
                productArr: action.payload,
                totalPrice: totalPrices,
            }
        case REMOVE_ITEMS:
            const nextQuantity = state.totalItem - 1;
            return {
                ...state,
                totalItem: nextQuantity,
            }
        case PAY_CART:
            return {
                ...initialState,
            }
        default:
            return state;
    }
}

export const rootReduce = combineReducers({
    reducers,
});