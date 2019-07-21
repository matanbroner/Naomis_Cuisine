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
import {
    itemSagas
} from './itemSagas'
// import watchers from other files
export default function* rootSaga() {
    yield all([
        loginWatcher(),
        registerWatcher(),
        itemSagas()
        // add other watchers to the array
    ]);
}