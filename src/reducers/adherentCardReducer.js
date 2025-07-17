"use strict";

import {SET_CURRENT_USER_ADHERENT_CARD, SET_CURRENT_USER_NOTIFICATION_PERMISSION} from "../actionsTypes";

/**
 * ## InitialState
 *
 * The fields we're concerned with
 */
const initialState = {
  card_type: "",
  company_name: "",
  current_year_membership: "",
  firstname: "",
  lastname: "",
  member_id: "",
  member_since: "",
  membership_status: false,
};

/**
 * ## Reducer function
 * @param {Object} state - initialState
 * @param {Object} action - type and payload
 */
export default function adherentCardReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER_ADHERENT_CARD:
      return {
        ...state,
        card_type: action?.payload?.card_type ?? "",
        company_name: action?.payload?.company_name ?? "",
        current_year_membership: action?.payload?.current_year_membership ?? "",
        firstname: action?.payload?.firstname ?? "",
        lastname: action?.payload?.lastname ?? "",
        member_id: action?.payload?.member_id ?? "",
        member_since: action?.payload?.member_since ?? "",
        membership_status: action?.payload?.membership_status ?? false,
      };
    default:
      return state;
  }
}
