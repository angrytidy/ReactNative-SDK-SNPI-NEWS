/**
 * Copyright (c) Flexi Apps.
 *
 * Async Component to check user logged in.
 *
 */

"use strict";

import React from "react";
import { View } from "react-native";
import { Actions } from "react-native-router-flux";
import { ReactReduxContext } from "react-redux";

import storage from "lib/storage";
import { forceUpdateFromStore } from "../../config/appConfig";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
  },
};

class CheckAuth extends React.Component {
  static contextType = ReactReduxContext;

  async componentDidMount() {
    try {
      const session = await storage.getSession();
      const jwt = await storage.getJWT();
      const refresh = await storage.getRefreshJWT();
      // check for update required
      if (forceUpdateFromStore) {
        Actions.ForceUpdate();
      } else {
        if (
          session &&
          session !== "null" &&
          jwt &&
          jwt !== "null" &&
          refresh &&
          refresh !== "null"
        ) {
          // redirect user to home page
          Actions.List();
        } else {
          // Actions.reset("FirstView");
          // Actions.reset("Login");
          Actions.Login();
        }
      }
    } catch (e) {
      console.log(e);
      Actions.Login();
    }
  }

  render() {
    return <View style={styles.container} />;
  }
}

export default CheckAuth;
