import { FETCH_DATA } from "../constant/counterConst"

export const fetchAction = (data) => {
    return {
        type: FETCH_DATA,
        payload: data
    }
}

