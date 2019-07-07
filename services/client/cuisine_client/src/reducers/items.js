import {
    SET_ITEMS_BANK,
    APPEND_ITEMS_BANK
} from '../constants/ActionTypes'

const itemsInitialState = {
    bank: []
};

export default function itemsReducer(state = itemsInitialState, action) {
    switch (action.type) {
        case SET_ITEMS_BANK:
            return {
                ...state,
                bank: action.payload
            }
            case APPEND_ITEMS_BANK:
                return {
                    ...state,
                    bank: [
                        ...state.items.bank,
                        action.payload
                    ]
                }
                default:
                    return state
    }
}