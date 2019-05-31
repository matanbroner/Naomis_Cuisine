import {
    LOGIN_WATCHER,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    REGISTER_WATCHER,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    UPDATE_PROFILE,
    REMOVE_PROFILE
} from "../constants/ActionTypes"

export const loginWatcher = (authParams) => {
    return {
        type: LOGIN_WATCHER,
        payload: authParams
    }
}

export const loginFailed = (error) => {
    return {
        type: LOGIN_FAILED,
        payload: error
    }
}

export const setProfile = (profile) => {
    return {
        type: UPDATE_PROFILE,
        payload: profile
    }
}

export const removeProfile = () => {
    return {
        type: REMOVE_PROFILE,
    }
}

export const registerWatcher = (profileParams) => {
    return {
        type: REGISTER_WATCHER,
        payload: profileParams
    }
}


export const registerFailed = (error) => {
    return {
        type: REGISTER_FAILED,
        payload: error
    }
}