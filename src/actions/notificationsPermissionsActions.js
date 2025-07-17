// Api
// some endpoints

// import actions types

//lib
import {SET_CURRENT_USER_NOTIFICATION_PERMISSION} from "../actionsTypes";

export const setUserHasSentNotificationsPermission = (payload) => ({
  type: SET_CURRENT_USER_NOTIFICATION_PERMISSION,
  payload,
});