import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    EMPTY_CART
} from "../constants/ActionTypes"

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

export const emptyCart = () => {
    return {
        type: EMPTY_CART
    }
}