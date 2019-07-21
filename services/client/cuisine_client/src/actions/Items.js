import {
    SET_ITEMS_BANK,
    APPEND_ITEMS_BANK,
    NEW_ITEM_WATCHER
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

export const createNewItem = (item) => {
    return {
        type: NEW_ITEM_WATCHER,
        payload: item
    }
}

