// Api
// some endpoints

// import actions types

//lib
import {SET_CURRENT_USER_ADHERENT_CARD} from "../actionsTypes";

export const setUserAdherentCard = (payload) => ({
  type: SET_CURRENT_USER_ADHERENT_CARD,
  payload,
});
