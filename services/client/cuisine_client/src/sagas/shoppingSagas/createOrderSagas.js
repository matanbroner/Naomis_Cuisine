import{
    orderFailed
} from '../../actions/Shopping'
import {
    loadingOn,
    loadingOff,
    pushNotification
  } from '../../actions/Global'
  import {
    takeLatest,
    call,
    put
  } from 'redux-saga/effects';
  import {
    ORDER_SERVICE_CREATE_ORDER
  } from '../../constants/Url'
  import {
    NEW_ORDER_WATCHER
  } from '../../constants/ActionTypes'
  const Superagent = require('superagent')

  function placeOrderApi(orderParams) {
    return (
      Superagent
      .post(ORDER_SERVICE_CREATE_ORDER)
      .send(orderParams)
      .set('accept', 'json')
    )
  }

  export function* newOrderWatcher() {
    yield takeLatest(NEW_ORDER_WATCHER, newOrderWorker);
  }

  function* newOrderWorker(action) {
    try {
      yield put(loadingOn());
      // data is obtained after axios call is resolved
      let {
        response
      } = yield call(placeOrderApi, action.payload);
  
      // inform user of successful order
      yield put(pushNotification(response.body.msg));
      yield put(loadingOff());
    } catch (e) {
      yield put(orderFailed(e.body.msg));
      yield put(loadingOff());
    }
  }