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
    MENUS_SERVICE_API_ITEMS_CREATE
  } from '../../constants/Url'
  import {
    NEW_ITEM_WATCHER
  } from '../../constants/ActionTypes'
  const Superagent = require('superagent')

  function mapItemToSchema(item){
    return {
      name: {
        heb: item.name_heb,
        eng: item.name_eng
      },
      description: {
        heb: item.description_heb,
        eng: item.description_eng
      },
      price: item.price,
      serves: item.serves,
      type: item.type
    }
  }

  function createItemApi(itemParams) {
    return (
      Superagent
      .post(MENUS_SERVICE_API_ITEMS_CREATE)
      .send(mapItemToSchema(itemParams))
      .set('accept', 'json')
    )
  }

  export function* newItemWatcher() {
    yield takeLatest(NEW_ITEM_WATCHER, newItemWorker);
  }

  function* newItemWorker(action) {
    try {
      yield put(loadingOn());
      // data is obtained after axios call is resolved
      let {
        response
      } = yield call(createItemApi, action.payload);
  
      // inform user of successful order
      yield put(loadingOff());
    } catch (e) {
      yield put(loadingOff());
    }
  }