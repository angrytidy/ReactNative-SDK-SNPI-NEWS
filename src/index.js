"use strict";

import React from "react";

import { Provider } from "react-redux";

import { NetworkProvider } from "contexts/NetworkProvider";
import { AppStateProvider } from "contexts/AppStateProvider";
import { MenuProvider } from "react-native-popup-menu";


import notificationHandler from "lib/notificationHandler";

// Some actions

import configureStore from "./store";
import Router from "./router";
const { store } = configureStore();

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  async componentWillUnmount() {
  }

  onOpened = (openResult) => {
    const { additionalData, isAppInFocus } = openResult.notification.payload;
    const { dispatch, getState } = store;
    notificationHandler({ additionalData, isAppInFocus }, dispatch, getState);
  };

  render() {
    return (
      <MenuProvider skipInstanceCheck>
        <Provider store={store}>
          <NetworkProvider>
            <AppStateProvider>
              <Router />
            </AppStateProvider>
          </NetworkProvider>
        </Provider>
      </MenuProvider>
    );
  }
}
