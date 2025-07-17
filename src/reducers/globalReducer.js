"use strict";

import { getDefaultLang } from "config/languages";

// declare actions types
import {
  SET_CURRENT_USER,
  SET_ONE_SIGNAL_ID,
  SET_SELECTED_LANGUAGE,
  SET_IS_GUEST,
  SET_USER_CONVER,
} from "actionstypes";

/**
 * ## InitialState
 *
 * The fields we're concerned with
 */
const initialState = {
  currentUser: {},
  // oneSignalPlayerId: null,
  language: getDefaultLang(),
  isGuest: false,
};

/**
 * ## Reducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isGuest: false,
      };

    // case SET_ONE_SIGNAL_ID:
    //   return { ...state, PoneSignallayerId: action.payload };

    case SET_SELECTED_LANGUAGE:
      return { ...state, language: action.payload };

    case SET_IS_GUEST:
      return { ...state, isGuest: action.payload };

    default:
      return state;
  }
}
