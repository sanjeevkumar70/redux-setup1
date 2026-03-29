import { CART_DATA, QUAN_DATA, COUNTER_TYPE, COUNTER_TYPE_DECR, COUNTER_TYPE_INCR, REM_DATA } from "../constant/counterConst";

// Object 
const initialValue = {
    cart_product: []     //key:value   
}

export const cartReducer = (state = initialValue, action) => {
    switch (action.type) {
        case CART_DATA:

            const exist = state.cart_product.find((item) => item._id === action.payload._id)
            if (exist) {
                alert("Item is already in cart")
                return state;
            }
            alert("Item Added in cart")
            return {
                ...state,
                cart_product: [...state.cart_product, { ...action.payload, quantity: 1 }]
            }
        case REM_DATA:
            const remove = state.cart_product.filter((item) => item._id != action.payload)
            alert("Item Removed from cart")
            return {
                ...state,
                cart_product: remove
            }

        case QUAN_DATA:
            return {
                ...state,
                cart_product: state.cart_product?.map((item) => {
                    if (item?.id === action.payload) {
                        let quant = item?.quantity || 1;
                        if (action?.quantity_type === "incer") {
                            return {
                                ...item,
                                quantity: quant + 1
                            }
                        }

                        if (action?.quantity_type === "decr") {
                            return {
                                ...item,
                                quantity: quant > 1 ? quant-1 : 1
                            }
                        }
                    }
                    return item;
                })
            }

        default:
            return state;
    }
}

