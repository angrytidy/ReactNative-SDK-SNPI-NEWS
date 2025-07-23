/**
 * Copyright (c) Flexi Apps.
 *
 * Async Component to check user logged in.
 *
 */

"use strict";

import React, { useEffect } from "react";
import { View } from "react-native";
// ...
// import { Actions } from "react-native-router-flux";
import { ReactReduxContext } from "react-redux";

import storage from "../../lib/storage";
import { forceUpdateFromStore } from "../../config/appConfig";
import { useNavigation } from "@react-navigation/native";
import { navigate } from "router/navigator";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "white",
  },
};


function CheckAuth() {
  const navigation = useNavigation();

  useEffect(() => {
    const firstLoaded = async () => {
      try {
        const session = await storage.getSession();
        const jwt = await storage.getJWT();
        const refresh = await storage.getRefreshJWT();
        // check for update required
        if (forceUpdateFromStore) {
          // ...
          // Actions.ForceUpdate();
          navigate('ForceUpdate');
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
            // ...
            // Actions.List();
            navigation.navigate('List');
          } else {
            // Actions.reset("FirstView");
            // Actions.reset("Login");
            // ...
            // Actions.Login();
            navigation.navigate('Login');
          }
        }
      } catch (e) {
        console.log(e);
        // ...
        // Actions.Login();
        navigation.navigate('Login');
      }
    }
    firstLoaded();
  }, []);

  return <View style={styles.container} />;
}

export default CheckAuth;
