import {
    LOADING_ON,
    LOADING_OFF,
    CHANGE_LANGUAGE
} from '../constants/ActionTypes'

const globalInitialState = {
    loading: false,
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
        default:
            return state;
    }
}