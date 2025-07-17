// error handler
import reportError from "lib/errorHandler";
import { displayToast } from "lib/interactions";

// import Api
import { Api } from "api";

import actions from "../actionsTypes";

//lib
import { getList, getOne } from "../api";
import {getMe, refreshToken} from "../../../actions/globalActions";
import {Actions} from "react-native-router-flux";
import {logoutUser} from "../../Auth/actions";

/** List  */
export const listRequest = () => ({
  type: actions.LIST_REQUEST,
});

export const listRequestSuccess = (payload) => ({
  type: actions.LIST_SUCCESS,
  payload,
});

export const listRequestFailure = (payload) => ({
  type: actions.LIST_FAILED,
  payload,
});

export const listFormations = (limit, offset, sort, order, hasRetry = false) => {
  const l = limit,
    of = offset,
    s = sort,
    or = order;

  return (dispatch) => {

    //async await refreshToken();

    dispatch(listRequest());
    Api()
      .get(getList(limit, offset, sort, order))
      .then((data) => {
        dispatch(listRequestSuccess(data));
      })
      .catch(async (err) => {

        // Manage token expire
        if (!hasRetry) {// OLD : if (error.status_code == 401) {
          await refreshToken();
          dispatch(listFormations(l, of, s, or, true));
        }
        // REFRESH TOKEN EXPIRE => LOGOUT
        else if (err?.status_code != undefined && err?.status_code != null && err?.status_code == 401) {
          dispatch(logoutUser())
        }
        else {
          dispatch(listRequestFailure());
        }

      });
  };
};

/** GET ONE */
export const getOneRequest = () => ({
  type: actions.GET_ONE_REQUEST,
});

export const getOneRequestSuccess = (payload) => ({
  type: actions.GET_ONE_SUCCESS,
  payload,
});

export const getOneRequestFailure = (payload) => ({
  type: actions.GET_ONE_FAILED,
  payload,
});

export const oneNews = (id) => {
  // const id = id;
  return (dispatch) => {
    //async await refreshToken();
    dispatch(getOneRequest());
    Api()
      .get(getOne(id))
      .then((data) => {
        dispatch(getOneRequestSuccess(data));
      })
      .catch(async (error) => {
        if (error?.status_code != undefined && error?.status_code != null && error?.status_code == 401) {
          await refreshToken();
          dispatch(oneNews(id));
        } else {
          console.log("error", error);
          displayToast(error?.status_text);
          dispatch(getOneRequestFailure());
        }
      });
  };
};
