import { COUNTER_TYPE, COUNTER_TYPE_DECR, COUNTER_TYPE_INCR } from "../constant/counterConst"

export const counterActionIncr = () => {
    return {
        type: COUNTER_TYPE_INCR
    }
}

export const counterActionDecr = () => {
    return {
        type: COUNTER_TYPE_DECR
    }
}

