import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import LinearGradient from "react-native-linear-gradient";

//styles
import styles from "./styles";

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled} activeOpacity={0.8}>
      <LinearGradient
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0 }}
        colors={["#042b75", "#0237a5"]}
        style={[
          props.big && styles.bigContainer,
          props.small && styles.smallContainer,
          props.additonalContainerStyle && props.additonalContainerStyle,
          props.disabled && styles.disabled,
        ]}
      >
        {props.loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : typeof props.content === "string" ? (
          <Text
            style={[
              styles.text,
              props.addionalTextStyle && props.addionalTextStyle,
            ]}
          >
            {props.content}
          </Text>
        ) : (
          props.content
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;
