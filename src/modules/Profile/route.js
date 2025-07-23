// ...
// import { ActionConst } from "react-native-router-flux";

/*
 * Routing component (from modules folder)
 */
import Notifications from "./containers/notifications";
import Abonnements from "./containers/followers";
import Card from "./containers/card";

const routes = [
  {
    key: "Notifications",
    component: Notifications,
    drawer: false,
  },
  {
    key: "Abonnements",
    component: Abonnements,
    drawer: false,
  },
  {
    key: "Card",
    component: Card,
    drawer: false,
  },
];

export default routes;
