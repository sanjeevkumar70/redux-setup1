import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { fetchReducer } from "./fetchReducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    productReducer: fetchReducer,
})