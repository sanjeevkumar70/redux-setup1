import { WISH_DATA } from "../constant/counterConst";


const wishInitalValue = {
    wish_data: []
}

export const wishcartReducer = (state = wishInitalValue, action) => {
    switch (action.type) {
        case WISH_DATA:
            const exist_wish = state.wish_data.find((item) => item?.id == action.payload)
            if (exist_wish) {
                alert("item is present")
                return state
            }
            alert("Item is added to wishList")
            return {
                ...state,
                wish_data: [...state.wish_data, action.payload]
            }

        default:
            return state
    }
}