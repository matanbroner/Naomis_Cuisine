import {
    SET_MENUS_BANK,
    APPEND_MENUS_BANK,
    FETCH_MENUS_WATCHER,
    CREATE_MENUS_WATCHER,
    APPEND_SELECTED_ITEMS,
    APPEND_DAY_ITEMS,
    REORDER_DAY_ITEMS,
    REMOVE_DAY_ITEM,
    CLEAR_SELECTED_ITEMS,
    CLEAR_NEW_MENU,
    SET_MENU_SCHEDULE_DATE,
    MENU_SCHEDULE_WATCHER
} from '../constants/ActionTypes'

export const setMenusBank = (items) => {
    return {
        type: SET_MENUS_BANK,
        payload: items
    }
}

export const appendMenusBank = (items) => {
    return {
        type: APPEND_MENUS_BANK,
        payload: items
    }
}

export const fetchMenus = () => {
    return {
        type: FETCH_MENUS_WATCHER
    }
}

export const createMenu = (days) => {
    return {
        type: CREATE_MENUS_WATCHER,
        payload: days
    }
}

export const appendSelectedItems = (items) => {
    return {
        type: APPEND_SELECTED_ITEMS,
        payload: items
    }
}

export const appendDayItems = (day, items) => {
    return {
        type: APPEND_DAY_ITEMS,
        payload: {
            day,
            items
        }
    }
}

export const reorderDayItems = (day, source, dest) => {
    return {
        type: REORDER_DAY_ITEMS,
        payload: {
            day,
            source,
            dest
        }
    }
}

export const removeDayItem = (day, item) => {
    return {
        type: REMOVE_DAY_ITEM,
        payload: {
            day,
            item
        }
    }
}

export const clearNewMenu = () => {
    return {
        type: CLEAR_NEW_MENU
    }
}

export const clearSelectedItems = () => {
    return {
        type: CLEAR_SELECTED_ITEMS
    }
}

export const setMenuScheduleDate = (date) => {
    return {
        type: SET_MENU_SCHEDULE_DATE,
        payload: {
            date
        }
    }
}

export const scheduleMenu = () => {
    return {
        type: MENU_SCHEDULE_WATCHER
    }
}