// import front-end config
import { unionBy } from "lodash";
import actions from "../actionsTypes";

const initialState = {
  fetching: false,
  response: {},
  news: {},
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    /** notif */
    case actions.NOTIFICATION_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case actions.NOTIFICATION_SUCCESS:
      return {
        ...state,
        fetching: false,
        response: action.payload,
      };

    case actions.NOTIFICATION_FAILED:
      return {
        ...state,
        fetching: false,
      };

    /** follower */
    case actions.FOLLOWERS_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case actions.FOLLOWERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        news: action.payload,
      };

    case actions.FOLLOWERS_FAILED:
      return {
        ...state,
        fetching: false,
      };
    default:
      return state;
  }
}
