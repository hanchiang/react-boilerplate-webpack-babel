/* eslint-disable no-unused-vars */
import { createReducer } from 'reduxsauce';

import { ActionTypes } from '../actions';


export const INITIAL_STATE = {
  error: null,
  isFetching: false,
  dummy: null
};

const start = (state = INITIAL_STATE, action) => ({
  ...state,
  dummy: 'I am a dummy'
});

const HANDLERS = {
  [ActionTypes.START]: start
};

export default createReducer(INITIAL_STATE, HANDLERS);
