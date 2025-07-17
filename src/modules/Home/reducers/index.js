// import front-end config
import { unionBy } from "lodash";
import actions from "../actionsTypes";

const initialState = {
  fetching: false,
  error: "",
  list: [],
  news: {},
  count: 0,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    /** List */
    case actions.LIST_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case actions.LIST_SUCCESS:
      const { items, count, offset } = action.payload.response;
      // console.log("comming data", items);
      const list = offset === 0 ? items : unionBy(state.list, items, "id");
      return {
        ...state,
        fetching: false,
        list,
        count,
      };

    case actions.LIST_FAILED:
      return {
        ...state,
        fetching: false,
      };

    /** One */
    case actions.GET_ONE_REQUEST:
      return {
        ...state,
        fetching: true,
      };

    case actions.GET_ONE_SUCCESS:
      return {
        ...state,
        fetching: false,
        news: action.payload.response,
      };

    case actions.LIST_FAILED:
      return {
        ...state,
        fetching: false,
      };

    default:
      return state;
  }
}
