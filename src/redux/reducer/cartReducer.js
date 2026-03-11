import { CART_DATA, COUNTER_TYPE, COUNTER_TYPE_DECR, COUNTER_TYPE_INCR } from "../constant/counterConst";

const initialValue = {
    cart_product: []
}

export const cartReducer = (state = initialValue, action) => {

    // console.log(action,'this is reducer')

    switch (action.type) {
        case CART_DATA:

            const exist = state.cart_product.find((item) => item.id === action.payload.id)
            if (exist) {
                alert("Item is already in cart")
                return state;
            }

            return {
                ...state,
                cart_product: [...state.cart_product, action.payload]
            }


        default:
            return state;
    }
}

