import { CART_DATA } from "../constant/counterConst"

export const cartAction = (data) => {
    return {
        type: CART_DATA,
        payload: data
    }
}
