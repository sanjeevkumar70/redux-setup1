import { COUNTER_TYPE, COUNTER_TYPE_DECR, COUNTER_TYPE_INCR } from "../constant/counterConst";

const initialValue = {
    count: 0
}

export const counterReducer = (state = initialValue, action) => {

    switch (action.type) {
        case COUNTER_TYPE_INCR:
            return {
                ...state,
                count: state.count + 1
            }
        case COUNTER_TYPE_DECR:
            return {
                ...state,
                count: state.count - 1
            }


        default:
            return state;
    }
}

