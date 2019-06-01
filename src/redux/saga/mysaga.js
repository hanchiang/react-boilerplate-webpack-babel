import { call } from 'redux-saga/effects';

import Api from '../../services';

export function* start(/* action */) {
  // make an api call
  const result = yield call(Api.start);

  if (result.ok) {
    // dispatch success action
  } else {
    // dispatch error action
  }
}
