import {applyMiddleware, createStore} from "redux";
import {rootReduce} from "./reducers";
import {thunk} from "redux-thunk";

const middleware = [thunk];

export const store = createStore(rootReduce, applyMiddleware(...middleware))