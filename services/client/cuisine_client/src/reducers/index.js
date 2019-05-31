import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import userReducer from './user'
import globalReducer from './global'


export default (history) => combineReducers({
    user: userReducer,
    global: globalReducer,
    router: connectRouter(history)
})