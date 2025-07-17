import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

//styles
import styles from "./styles";

//lib
import { Actions } from "react-native-router-flux";
import { Content } from "native-base";

//componens
import Input from "components/Input";
import Button from "components/Button";
import strings from "config/strings";

class Login extends React.Component {
  state = {
    password: "",
    login: "",
    showPassword: true,
  };

  login = () => {
    const { login, password } = this.state;
    const payload = {
      login,
      password,
      // oneSignalPlayerId: this.props.oneSignalPlayerId,
    };
    this.props.actions.login(payload);
  };
  onPress = () => {
    Actions.FirstView();
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backContent} onPress={this.onPress} activeOpacity={0.8}>
          <Image
            source={require("assets/imgs/arrow-back.png")}
            style={styles.back}
          />
        </TouchableOpacity>

        <Content contentContainerStyle={styles.contentContainerner}>
          <View style={styles.logoContent}>
            <Image
              source={require("../../../../../assets/imgs/SNPI-logo.png")}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <Input
            label={strings.mail_address}
            value={this.state.login}
            onChangeText={(login) => this.setState({ login })}
            keyboardType={"email-address"}
          />

          <Input
            label={strings.mot_de_passe}
            value={this.state.password}
            secureTextEntry={this.state.showPassword}
            onChangeText={(password) => this.setState({ password })}
            rightIcon={
              <Image
                source={
                  this.state.showPassword
                    ? require("assets/imgs/view.png")
                    : require("assets/imgs/invisible.png")
                }
                style={styles.rightIcon}
                resizeMode="cover"
              />
            }
            onPressRight={() =>
              this.setState({ showPassword: !this.state.showPassword })
            }
          />
          <TouchableOpacity
            style={styles.forgetPasswordContainer}
            onPress={() => Actions.ResetPassword()}
            activeOpacity={0.8}
          >
            <Text style={styles.textbutton}>{strings.forgetPassword}</Text>
          </TouchableOpacity>

          <View style={styles.cguAndButtonContainer}>
            <Button
              big
              content={strings.connexion}
              additonalContainerStyle={styles.additonalContainerStyle}
              onPress={this.login}
              loading={this.props.auth.fetching}
              disabled={!this.state.login || !this.state.password}
            />
          </View>
        </Content>
      </View>
    );
  }
}

export default Login;
