'use strict';

// import front-end config
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  PASSWORD_REQUEST,
  PASSWORD_SUCCESS,
  PASSWORD_FAILURE,
} from '../actionsTypes';

// declare actions types

/**
 * ## InitialState
 *
 * The fields we're concerned with
 */
const initialState = {
  fetching: false,
  error: '',
};

/**
 * ## Reducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case LOGIN_SUCCESS:
      return initialState;

    case LOGIN_FAILURE:
      return {
        ...state,
        fetching: false,
      };
    case PASSWORD_REQUEST:
      return {...state, fetching: true};
    case PASSWORD_SUCCESS:
      return {...state, fetching: false};
    case PASSWORD_FAILURE:
      return {...state, fetching: false};

    default:
      return state;
  }
}
