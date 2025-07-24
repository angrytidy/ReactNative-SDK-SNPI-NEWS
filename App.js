/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { View, Platform, Text, SafeAreaView, StatusBar } from "react-native";

import SplashScreen from "react-native-splash-screen";
// ...
// import codePush from "react-native-code-push";
import AutoHeightImage from "react-native-auto-height-image";

import PercentageCircle from "./src/common/components/PercentageCircle";

import strings from "./src/config/strings";

import colors from "./src/common/colors";
import common from "./src/common/styles";

import Main from "./src";

import PushNotificationIOS from "@react-native-community/push-notification-ios";

// ...
// const codePushOptions = {
//   checkFrequency: codePush.CheckFrequency.MANUAL,// MANUAL
//   installMode: codePush.InstallMode.IMMEDIATE,
// };

const { FontSize, FontFamily } = common;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  progressContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  progress: {
    marginTop: 10,
    alignSelf: "center",
    fontFamily: FontFamily.defaultFont,
    fontSize: FontSize.small,
  },
};

class App extends React.Component {
  constructor() {
    super();
  }

  state = {
    codePushUpdating: false,
    percent: 0,
  };

  async componentDidMount() {

    if (Platform.OS === "ios") {

      PushNotificationIOS.addEventListener('notification', function(notification) {
        PushNotificationIOS.getApplicationIconBadgeNumber(num => {
          if (num > 0) {
            PushNotificationIOS.setApplicationIconBadgeNumber(num+1);
          }
          else {
            PushNotificationIOS.setApplicationIconBadgeNumber(1);
          }
        });
      });

    }

    // WonderPush.eventEmitterWonderPush.addListener('wonderpushNotificationWillOpen', (event) => {
    //   console.log('Notification clicked:', event);
    //   // On Android, you should now start your application on the appropriate screen.
    // });

    if (Platform.OS === "android")
      SplashScreen.hide();
  }

  // ...
  // codePushStatusDidChange(status) {
  //   switch (status) {
  //     case codePush.SyncStatus.CHECKING_FOR_UPDATE:
  //       console.log("Checking for updates.");
  //       break;
  //     case codePush.SyncStatus.DOWNLOADING_PACKAGE:
  //       this.setState({ codePushUpdating: true });
  //       break;
  //     case codePush.SyncStatus.INSTALLING_UPDATE:
  //       break;
  //     case codePush.SyncStatus.UP_TO_DATE:
  //       console.log("Up to date.");
  //       break;
  //     case codePush.SyncStatus.UPDATE_INSTALLED:
  //       console.log("Update installed.");
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // ...
  // codePushDownloadDidProgress(progress) {
  //   this.setState({
  //     percent: parseInt(
  //       (progress.receivedBytes * 100) / progress.totalBytes,
  //       10
  //     ),
  //   });
  // }

  render() {
    // ...
    // const { codePushUpdating, percent } = this.state;
    return (
      <>
        <StatusBar /*backgroundColor={app.darkPink}*/ />
        <SafeAreaView style={styles.container}>
          {/* // ... */}
          {/* {codePushUpdating ? (
            <View style={styles.progressContent}>
              <PercentageCircle
                percent={percent}
                radius={100}
                color={"#ce0f2c"}
                borderWidth={4}
              >
                <AutoHeightImage
                  width={80}
                  source={require("assets/imgs/SNPI-logo.png")}
                />
              </PercentageCircle>
              <Text style={styles.progress}>{strings.updating}</Text>
            </View>
          ) : (
            <Main/>
          )} */}
          <Main/>
        </SafeAreaView>
      </>
    );
  }
}

// ...
// export default codePush(codePushOptions)(App);
export default App;