import {
    APPEND_NOTIFICATION,
    REMOVE_NOTIFICATION
} from '../constants/ActionTypes'

const notificationsInitialTaste = {
    bank: []
};

export default function notificationsReducer(state = notificationsInitialTaste, action) {
    switch (action.type) {
        case APPEND_NOTIFICATION: {
            return {
                ...state,
                bank: [
                    ...state.bank,
                    action.payload
                ]
            }
        }
        case REMOVE_NOTIFICATION: {
            let newBank = state.bank.filter(item => item.id !== action.payload)
            return {
                ...state,
                bank: [
                    ...newBank
                ]
            }
        }
        default: {
            return state
        }
    }
}