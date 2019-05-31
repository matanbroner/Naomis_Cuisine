// root saga

import {
    all
} from 'redux-saga/effects';
import {
    loginWatcher
} from './userSagas/loginSagas';
import {
    registerWatcher
} from './userSagas/registerSagas';
// import watchers from other files
export default function* rootSaga() {
    yield all([
        loginWatcher(),
        registerWatcher()
        // add other watchers to the array
    ]);
}