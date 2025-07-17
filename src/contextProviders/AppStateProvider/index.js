import React from "react";
import { AppState, Linking } from "react-native";
import { ReactReduxContext } from "react-redux";
import WonderPush from "react-native-wonderpush";
import { Actions } from "react-native-router-flux";
// import {loginHandler} from 'services/oAuth20'; <- uncommnent this line if social login activated

export const AppStateContext = React.createContext({ appState: "" });

export class AppStateProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
    };
  }

  static contextType = ReactReduxContext;

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
    Linking.addEventListener("url", this.handleOpenURL);

    this.checkOpeningUrl();
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
    Linking.removeEventListener("url", this.handleOpenURL);
  }

  checkOpeningUrl = async () => {
    try {
      const url = await Linking.getInitialURL();
      this.handleOpenURL({ url });
    } catch {}
  };

  _handleAppStateChange = async (nextAppState) => {
    this.setState({ appState: nextAppState });
  };

  handleOpenURL = async (data) => {
    const { url } = data;
    // if (url && url.includes('://login') && this.context !== null) {
    //   console.log('app context ', url, this.context.store);
    //   // loginHandler(url, this.context.store.dispatch); <- uncommnent this line if social login activated
    // }
    // console.log("Linking", data);
    // const endPoints = url.split("/");
    // const _id = endPoints[3];
    // Actions.Details({ _id });
  };

  render() {
    return (
      <AppStateContext.Provider value={this.state}>
        {this.props.children}
      </AppStateContext.Provider>
    );
  }
}
