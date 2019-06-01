/* eslint-disable no-underscore-dangle  */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const makeStore = () => createStore(
  reducer,
  undefined,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

const store = makeStore();

sagaMiddleware.run(rootSaga);

export default store;
