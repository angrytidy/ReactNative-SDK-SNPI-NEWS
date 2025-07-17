/*
 * Routing component (from modules folder)
 */
import checkauthRoutes from "modules/CheckAuth/routes.js";
import authRoutes from "modules/Auth/routes.js";
import homeRoutes from "modules/Home/routes.js";
import profileRoutes from "modules/Profile/route";
import ForceUpdateRoutes from "modules/ForceUpdate/routes";
export default function configureRoutes() {
  const routes = [
    ...checkauthRoutes,
    ...authRoutes,
    ...homeRoutes,
    ...profileRoutes,
    ...ForceUpdateRoutes,
  ];

  return routes;
}
