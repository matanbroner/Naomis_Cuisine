import {
    registerFailed
} from '../../actions/User';
import {
    loadingOn,
    loadingOff
} from '../../actions/Global'
import {
    takeLatest,
    call,
    put
} from 'redux-saga/effects';
import {
    USER_SERVICE_REGISTER
} from '../../constants/Url'
import {
    REGISTER_WATCHER
} from '../../constants/ActionTypes'
const Superagent = require('superagent')


function registerApi(profileParams) {
    return (
        Superagent
        .post(USER_SERVICE_REGISTER)
        .send(profileParams)
        .set('accept', 'json')
    )
}

export function* registerWatcher() {
    yield takeLatest(REGISTER_WATCHER, registerWorker);
}

function* registerWorker(action) {
    try {
        yield put(loadingOn());
        yield call(registerApi, action.payload);
        yield put(loadingOff());

        // redirect to home route after successful register
    } catch (e) {
        yield put(registerFailed(e.body.msg))
    }
}