import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from './user'
import shoppingReducer from './shopping'
import itemsReducer from './items'
import globalReducer from './global'


export default (history) => combineReducers({
    user: userReducer,
    shopping: shoppingReducer,
    items: itemsReducer,
    global: globalReducer,
    router: connectRouter(history)
})