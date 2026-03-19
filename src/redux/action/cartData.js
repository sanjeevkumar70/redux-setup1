import { CART_DATA, REM_DATA, QUAN_DATA, WISH_DATA, LOG_DATA } from "../constant/counterConst"

export const cartAction = (p_data) => {
    return {
        type: CART_DATA,        //it connect action & reducers(for identify for specfic reducer)
        payload: p_data         //send data
    }
}

export const cartRemoveAction = (id)=>{
    return{
        type:REM_DATA,
        payload:id
    }
}

export const quantityUpdateAction = (id, quantity)=>{
    return{
        type:QUAN_DATA,
        payload:id,
        quantity_type : quantity
    }
}

export const wishUpdateAction = (s_data)=>{
    return{
        type:WISH_DATA,
        payload:s_data
    }
}


export const loginDataAction = (log_data)=>{
    return{
        type:LOG_DATA,
        payload:log_data
    }
}