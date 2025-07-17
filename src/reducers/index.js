import { combineReducers } from "redux";

/*
 * Import reducers
 */
import globalReducer from "./globalReducer";
import auth from "../modules/Auth/reducers";
import listReducer from "../modules/Home/reducers";
import profileReducer from "../modules/Profile/reducers";
import notificationsPermissionsReducer from "./notificationsPermissionsReducer";
import adherentCardReducer from "./adherentCardReducer";
/**
 * Merges the main reducer with dynamically injected reducers
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    global: globalReducer,
    auth,
    list: listReducer,
    profile: profileReducer,
    notificationsPermissions: notificationsPermissionsReducer,
    adherentCard: adherentCardReducer,
  });

  return rootReducer;
}
