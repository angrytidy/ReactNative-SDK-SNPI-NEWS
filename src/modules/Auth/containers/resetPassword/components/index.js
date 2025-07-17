import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Content } from "native-base";

//styles
import styles from "./styles";

// libs
import { Actions } from "react-native-router-flux";

//componens
import AuthHeader from "../../../components/authHeader";
import Input from "components/Input";
import Button from "components/Button";
import Switcher from "../../../components/Switcher";
import strings from "config/strings";

class Login extends React.Component {
  state = {
    login: "",
  };

  resetPassword = () => {
    const { login } = this.state;
    const paylaod = { login };
    this.props.actions.passwordReset(paylaod);
  };

  onPress = () => {
    Actions.Login();
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <AuthHeader /> */}
        <TouchableOpacity style={styles.backContent} onPress={this.onPress} activeOpacity={0.8}>
          <Image
            source={require("assets/imgs/arrow-back.png")}
            style={styles.back}
          />
        </TouchableOpacity>
        <Content contentContainerStyle={styles.contentContainerner}>
          <Text style={styles.recoverText}>{strings.passwordReset}</Text>
          <Input
            label={strings.loginEmail}
            value={this.state.login}
            onChangeText={(login) => this.setState({ login })}
          />

          <View style={styles.ButtonContainer}>
            <Button
              big
              content={strings.resetPassword}
              onPress={this.resetPassword}
              loading={this.props.auth.fetching}
              disabled={!this.state.login}
            />
          </View>
        </Content>
      </View>
    );
  }
}

export default Login;
