import {all} from 'redux-saga/effects';

import {
    newItemWatcher
} from './createItem'

export function *itemSagas() {
    yield all([
        newItemWatcher()
    ]);
  }