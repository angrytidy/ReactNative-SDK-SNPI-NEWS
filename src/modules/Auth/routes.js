import { ActionConst } from "react-native-router-flux";

/*
 * Routing component (from modules folder)
 */
import Login from "modules/Auth/containers/Login";
import ResetPassword from "modules/Auth/containers/resetPassword";
import PasswordMessage from "modules/Auth/containers/passwordMessage";
import Home from "modules/Auth/containers/homePage";
import List from "../Home/containers/Home";
const routes = [
  {
    key: "Login",
    component: Login,
    drawer: false,
  },
  {
    key: "ResetPassword",
    component: ResetPassword,
    drawer: false,
    hideNavBar: true,
  },
  {
    key: "PasswordMessage",
    component: PasswordMessage,
    drawer: false,
    hideNavBar: true,
  },
  {
    key: "FirstView",
    component: Home,
    drawer: false,
    hideNavBar: true,
  },
  {
    key: "List",
    component: List,
    drawer: false,
    hideNavBar: true,
  },
];

export default routes;
