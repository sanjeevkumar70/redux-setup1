import { act } from "react";
import { LOG_DATA } from "../constant/counterConst";

const intialdata = {
    token: localStorage.getItem('token'),
    user_data: null
}

export const loginReducer = (state = intialdata, action) => {

    switch (action.type) {
        case LOG_DATA:
            return {
                ...state,
                token: action.payload.token,
                user_data: action.payload.data
            }

        default:
            return state
    }

}