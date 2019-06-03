import {
    LOADING_ON,
    LOADING_OFF,
    CHANGE_LANGUAGE,
    PUSH_NOTIFICATION,
    CLEAR_NOTIFICATIONS,
    IS_PAGE_TOP,
    NOT_PAGE_TOP
} from '../constants/ActionTypes'

const globalInitialState = {
    loading: false,
    isPageTop: true,
    notifications: [],
    language: 'eng'
};

export default function globalReducer(state = globalInitialState, action) {
    switch (action.type) {
        case LOADING_ON:
            return {
                ...state,
                loading: true
            };
        case LOADING_OFF:
            return {
                ...state,
                loading: false
            };
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        case PUSH_NOTIFICATION:
            return {
                ...state,
                notifications: [
                    ...state.notifications, 
                    action.payload
                ]
            }
        case CLEAR_NOTIFICATIONS:
            return {
                ...state,
                notifications: []
            }
        case IS_PAGE_TOP: {
            return {
                ...state,
                isPageTop: true
            }
        }
        case NOT_PAGE_TOP: {
            return {
                ...state,
                isPageTop: false
            }
        }
        default:
            return state;
    }
}