import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  I18nManager,
} from "react-native";

//styles
import styles from "./styles";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TouchableOpacity
        style={styles.inputContainer}
        disabled={!props.onTouch}
        onPress={props.onTouch}
      >
        {props.onTouch ? (
          <Text style={styles.textInput}>{props.value}</Text>
        ) : (
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            value={props.value}
            onChangeText={(text) => props.onChangeText(text)}
            secureTextEntry={props.secureTextEntry}
            keyboardType={props.keyboardType}
            onEndEditing={props.onEndEditing}
          />
        )}
        {I18nManager.isRTL && !props.rightIcon && <View style={styles.side} />}
        {props.rightIcon && (
          <TouchableOpacity
            style={styles.side}
            disabled={props.onPressRight ? false : true}
            onPress={props.onPressRight}
          >
            {typeof props.rightIcon === "string" ? <View /> : props.rightIcon}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      {props.error && <Text style={styles.error}>{props.errorMessage}</Text>}
    </View>
  );
};

export default Input;
