import { ActionConst } from "react-native-router-flux";

/*
 * Routing component (from modules folder)
 */
import Details from "../Home/containers/Details";
import Profile from "../Profile/containers/compte";

const routes = [
  {
    key: "Details",
    component: Details,
    drawer: false,
  },
  {
    key: "Profile",
    component: Profile,
    drawer: false,
  },
];

export default routes;
