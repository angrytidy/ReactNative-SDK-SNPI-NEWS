// Api
import { Api } from "api";

// some endpoints
import { meUrl, canalsUrl, refresh } from "api/endpoints";

// import actions types
import {
  SET_ONE_SIGNAL_ID,
  SET_SELECTED_LANGUAGE,
  SET_CURRENT_USER,
  SET_IS_GUEST,
  SET_USER_CONVER,
  REFRESH_REQUEST,
  REFRESH_SUCCESS,
  REFRESH_FAILED,
} from "actionsTypes";

//lib
import { displaySessionToast, displayToast } from "lib/interactions";
import { reportError } from "lib/errorHandler";
import storage from "../lib/storage";

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});

export const setIsGuest = (payload) => ({
  type: SET_IS_GUEST,
  payload,
});

// export const setOneSignalId = (payload) => ({
//   type: SET_ONE_SIGNAL_ID,
//   payload,
// });

export const setLanguage = (payload) => ({
  type: SET_SELECTED_LANGUAGE,
  payload,
});

export const getMe = () => {
  return (dispatch) => {
    Api()
      .get(meUrl())
      .then((data) => {
        if (data) {
          console.log(data)
          dispatch(setCurrentUser(data?.response));
        } else {
          displaySessionToast();
        }
      })
      .catch(async (err) => {
        if (err?.status_code != undefined && err?.status_code != null && err?.status_code == 401) {
          await refreshToken();
          dispatch(getMe());
        }
        else {
          reportError("get me error", err);
        }
      });
  };
};

export const setConver = (payload) => ({
  type: SET_USER_CONVER,
  payload,
});

export const canalsFetch = (params) => {
  return (dispatch) => {
    Api()
      .get(canalsUrl(params))
      .then((data) => {
        if (data && data.value && data.value[0]) {
          dispatch(setConver(data.value[0]));
        }
      })
      .catch(async (err) => {
        if (err?.status_code != undefined && err?.status_code != null && err?.status_code == 401) {
          await refreshToken();
          dispatch(getMe());
        }
        else {
          displayToast(error?.message);
          reportError(error);
        }
      });
  };
};
/** REFRESH TOKEN */
export const refreshRequest = () => ({
  type: REFRESH_REQUEST,
});

export const refreshSuccess = () => ({
  type: REFRESH_SUCCESS,
});

export const refreshFailure = () => ({
  type: REFRESH_FAILED,
});

export const refreshToken = async () => {
  const jwt = await storage.getRefreshJWT();

  return Api()
    .post(refresh(), { refresh_token: jwt })
    .then(() => {})
    .catch(() => {});
};
