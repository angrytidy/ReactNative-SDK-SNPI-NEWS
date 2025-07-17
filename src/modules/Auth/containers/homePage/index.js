import React from "react";

import HomePageComponent from "./components";

// Injectors
import injectLocales from "utils/injectLocales";

// import locales
import fr from "../../locales/fr";

const HomePage = (props) => {
  injectLocales({ fr });
  return <HomePageComponent {...props} />;
};

export default HomePage;
