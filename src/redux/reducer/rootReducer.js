import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { fetchReducer } from "./fetchReducer";
import { cartReducer } from "./cartReducer";
import {wishcartReducer} from './wishcartReducer'

export const rootReducer = combineReducers({
    counter: counterReducer,
    productReducer: fetchReducer,
    cartReducer,
    wishcartReducer,
})