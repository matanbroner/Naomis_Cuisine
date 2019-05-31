import {
    CHANGE_LANGUAGE,
    LOADING_ON,
    LOADING_OFF
} from "../constants/ActionTypes"

export const changeLanguage = (language) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: language
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