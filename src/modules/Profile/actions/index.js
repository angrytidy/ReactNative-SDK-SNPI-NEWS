// error handler
import reportError from "lib/errorHandler";
import { displayToast } from "lib/interactions";

// import Api
import { Api } from "api";

import actions from "../actionsTypes";

import { Notification, setFollower, userNotification } from "../api";
import { refreshToken, setCurrentUser } from "../../../actions/globalActions";

/***********************************************/
export const notificationsRequest = () => ({
  type: actions.NOTIFICATION_REQUEST,
});

export const notificationsSuccess = (payload) => ({
  type: actions.NOTIFICATION_SUCCESS,
  payload,
});

export const notificationsFailure = (payload) => ({
  type: actions.NOTIFICATION_FAILED,
  payload,
});

export const notifications = (id, data) => {
  return (dispatch) => {
    // async await refreshToken();
    dispatch(notificationsRequest());

    Api()
      .post(userNotification(id), {
        hasNotification: data,
        isAccessible: data,
      })
      .then((data) => {
        dispatch(notificationsSuccess(data));
        dispatch(setCurrentUser(data?.response));
      })
      .catch(async (error) => {
        if (error?.status_code != undefined && error?.status_code != null && error?.status_code == 401) {
          await refreshToken();
          notifications(id, data);
        }
      });
  };
};
/***********************************************/
export const followerRequest = () => ({
  type: actions.FOLLOWERS_REQUEST,
});

export const followerSuccess = (payload) => ({
  type: actions.FOLLOWERS_SUCCESS,
  payload,
});

export const followerFailure = (payload) => ({
  type: actions.FOLLOWERS_FAILED,
  payload,
});

export const follower = () => {
  return (dispatch) => {
    // async await refreshToken();
    dispatch(followerRequest());

    Api()
      .get(setFollower())
      .then((data) => {
        // console.log(data?.response?.news);
        dispatch(followerSuccess(data?.response?.news));
      })
      .catch(async (error) => {
        if (error?.status_code != undefined && error?.status_code != null && error?.status_code == 401) {
          await refreshToken();
          follower();
        }
      });
  };
};
