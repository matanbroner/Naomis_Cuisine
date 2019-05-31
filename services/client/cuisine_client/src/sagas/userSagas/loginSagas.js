import {
  setProfile,
  loginFailed
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
  USER_SERVICE_LOGIN
} from '../../constants/Url'
import {
  LOGIN_WATCHER
} from '../../constants/ActionTypes'
const Superagent = require('superagent')


function loginApi(authParams) {
  return (
    Superagent
    .post(USER_SERVICE_LOGIN)
    .send(authParams)
    .set('accept', 'json')
  )
}

export function* loginWatcher() {
  yield takeLatest(LOGIN_WATCHER, loginWorker);
}

function* loginWorker(action) {
  try {
    yield put(loadingOn());
    // data is obtained after axios call is resolved
    let {
      response
    } = yield call(loginApi, action.payload);

    // store data to localStorage
    Object.keys(response.body).forEach(key => {
      localStorage.setItem(key, response.body[key]);
    });
    // dispatch action to change redux state
    yield put(setProfile(response.body.profile));
    yield put(loadingOff());
    // redirect to home route after successful login
  } catch (e) {
    yield put(loginFailed(e.body.msg))
  }
}