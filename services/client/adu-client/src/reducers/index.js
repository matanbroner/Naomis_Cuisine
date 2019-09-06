import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import notificationsReducer from './notifications'
import globalReducer from './global'


export default (history) => combineReducers({
    notifications: notificationsReducer,
    global: globalReducer,
    router: connectRouter(history)
})