import styles from "styles";
import colors from "colors";

const { FontFamily, FontSize } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";

export default ScaledSheet.create({
  bigContainer: {
    height: "60@vs",
    justifyContent: "center",
    alignItems: "center",
    width: "350@s",
    backgroundColor: colors.orange_one,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    alignSelf: "center",
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: "#a0a1a2",
  },
  smallContainer: {
    height: "60@s",
    justifyContent: "center",
    alignItems: "center",
    width: "146@s",
    backgroundColor: colors.orange_one,
    borderRadius: "24.5@ms0.5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontFamily: "PTSans-Bold",
    color: colors.white,
    fontSize: FontSize.f18,
  },
});
