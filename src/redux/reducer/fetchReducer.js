import { FETCH_DATA } from "../constant/counterConst";

const initialValue = {
    productData: []
}

export const fetchReducer = (state = initialValue, action) => {

    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                productData: action.payload
            }

        default:
            return state;
    }
}

