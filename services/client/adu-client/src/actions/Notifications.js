import {
    APPEND_NOTIFICATION,
    REMOVE_NOTIFICATION
} from '../constants/ActionTypes'

const uuid = require('uuid/v4')

export const appendNotification = (notification) => {
    return {
        type: APPEND_NOTIFICATION,
        payload: {
            ...notification,
            id: uuid()
        }
    }
}

export const removeNotification = (id) => {
    return {
        type: REMOVE_NOTIFICATION,
        payload: id
    }
}