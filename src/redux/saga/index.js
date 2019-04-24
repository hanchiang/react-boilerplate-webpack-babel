import { all, takeLatest } from 'redux-saga/effects';

import { start } from './mysaga';

import { ActionTypes } from '../actions';

export default function* rootSaga() {
  yield all([
    takeLatest(ActionTypes.START, start)
  ]);
}
