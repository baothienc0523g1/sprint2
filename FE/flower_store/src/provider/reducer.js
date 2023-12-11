import * as cartService from "../service/cartService";

const getCart = async () => {
    return await cartService.getCart();
}

const cartInitialization = getCart();

function myReducer(state, action) {
    switch (action.type) {
        case "abc":
        ///
    }
};

export {cartInitialization};
export default myReducer;