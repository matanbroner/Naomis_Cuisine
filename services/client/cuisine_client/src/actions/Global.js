import {
    CHANGE_LANGUAGE,
    LOADING_ON,
    LOADING_OFF,
    PUSH_NOTIFICATION,
    CLEAR_NOTIFICATIONS,
    IS_PAGE_TOP,
    NOT_PAGE_TOP
} from "../constants/ActionTypes"

export const changeLanguage = (language) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: language
    }
}

export const pushNotification = (notification) => {
    return {
        type: PUSH_NOTIFICATION,
        payload: notification
    }
}

export const clearNotifications = () => {
    return {
        type: CLEAR_NOTIFICATIONS
    }
}

export const loadingOn  = () => {
    return {
        type: LOADING_ON
    }
}

export const loadingOff  = () => {
    return {
        type: LOADING_OFF
    }
}

export const isPageTop = () => {
    return {
        type: IS_PAGE_TOP
    }
}

export const notPageTop = () => {
    return {
        type: NOT_PAGE_TOP
    }
}