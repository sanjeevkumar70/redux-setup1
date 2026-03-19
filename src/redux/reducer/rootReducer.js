import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { fetchReducer } from "./fetchReducer";
import { cartReducer } from "./cartReducer";
import {wishcartReducer} from './wishcartReducer'
import {loginReducer} from './loginReducer'

export const rootReducer = combineReducers({
    counter: counterReducer,
    productReducer: fetchReducer,
    cartReducer,
    wishcartReducer,
    loginReducer
})