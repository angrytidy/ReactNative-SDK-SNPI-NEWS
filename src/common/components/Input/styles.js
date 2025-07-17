import styles from "styles";
import colors from "colors";

const { FontFamily, FontSize } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";

export default ScaledSheet.create({
  container: {
    alignSelf: "center",
    width: "356@s",
    marginBottom: "15@vs",
    // marginLeft: "30@vs",
  },
  label: {
    color: "#042B72",
    fontSize: FontSize.f14,
    fontFamily: "PTSans-Bold",
    // marginLeft: "@s",
    marginBottom: "9@vs",
    textAlign: "left",
  },
  inputContainer: {
    height: "50@vs",
    backgroundColor: "#f2f5f8",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    paddingLeft: "15@s",
    // width: "350@s",
    // alignSelf: "center",
  },
  textInput: {
    flex: 1,
    margin: 0,
    padding: 0,
    fontSize: FontSize.f16,
    fontFamily: "PTSans-Regular",
    color: "#7E7E7E",
    textAlign: "left",
  },
  side: {
    width: "45@s",
    justifyContent: "center",
    alignItems: "center",
    height: "49@vs",
  },
  error: {
    alignSelf: "center",
    color: "red",
    fontFamily: FontFamily.nextMedium,
    fontSize: FontSize.small,
  },
});
