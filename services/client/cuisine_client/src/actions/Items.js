import {
    SET_ITEMS_BANK,
    APPEND_ITEMS_BANK
} from "../constants/ActionTypes"

export const setItemsBank = (items) => {
    return {
        type: SET_ITEMS_BANK,
        payload: items
    }
}

export const appendItemsBank = (items) => {
    return {
        type: APPEND_ITEMS_BANK,
        payload: items
    }
}