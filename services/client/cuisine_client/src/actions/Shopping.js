import {
    CONTROL_CART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_ITEM_QUANTITY,
    EMPTY_CART,
    NEW_ORDER_WATCHER,
    NEW_ORDER_FAILED
} from "../constants/ActionTypes"

export const controlCart = () => {
    return {
        type: CONTROL_CART
    }
}

export const addItemToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeItemFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

export const setItemQuantity = (_id, quantity) => {
    return {
        type: SET_ITEM_QUANTITY,
        payload: {_id, quantity}
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART
    }
}

export const placeOrder = (orderParams) => {
    return {
        type: NEW_ORDER_WATCHER,
        payload: orderParams
    }
}

export const orderFailed = (errors) => {
    return {
        type: NEW_ORDER_FAILED,
        payload: errors
    }
}