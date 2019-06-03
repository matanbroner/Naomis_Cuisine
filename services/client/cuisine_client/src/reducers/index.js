import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from './user'
import shoppingReducer from './shopping'
import globalReducer from './global'


export default (history) => combineReducers({
    user: userReducer,
    shopping: shoppingReducer,
    global: globalReducer,
    router: connectRouter(history)
})