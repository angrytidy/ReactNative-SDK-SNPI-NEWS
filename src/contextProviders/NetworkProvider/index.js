import React from 'react';
import NetInfo from '@react-native-community/netinfo';
import {ReactReduxContext} from 'react-redux';

export const NetworkContext = React.createContext({isConnected: true});

export class NetworkProvider extends React.PureComponent {
  state = {
    isConnected: true,
  };

  static contextType = ReactReduxContext;

  componentDidMount() {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      this.handleConnectivityChange(state.isConnected);
    });

    // Unsubscribe
    unsubscribe();
  }

  handleConnectivityChange = isConnected => this.setState({isConnected});

  render() {
    return (
      <NetworkContext.Provider value={this.state}>
        {this.props.children}
      </NetworkContext.Provider>
    );
  }
}
