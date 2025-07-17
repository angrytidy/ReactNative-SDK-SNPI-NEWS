"use strict";

import {SET_CURRENT_USER_NOTIFICATION_PERMISSION} from "../actionsTypes";

/**
 * ## InitialState
 *
 * The fields we're concerned with
 */
const initialState = {
  hasSentNotificationPermissionData: false,
};

/**
 * ## Reducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function notificationsPermissionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER_NOTIFICATION_PERMISSION:
      return {
        ...state,
        hasSentNotificationPermissionData: true,
      };
    default:
      return state;
  }
}
