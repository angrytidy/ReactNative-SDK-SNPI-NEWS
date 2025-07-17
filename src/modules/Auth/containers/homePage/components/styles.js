import styles from "styles";
import colors from "colors";

const { DeviceWidth, FontFamily } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";

export default ScaledSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "59%",
    width: DeviceWidth,
    alignSelf: "center",
  },

  containerText: {
    flex: 1,
    width: DeviceWidth,
    // borderWidth: 0.2,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    height: "400@vs",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  buttonContentStyle: {
    // justifyContent: "center",
  },
  btnText: {
    fontFamily: FontFamily.nextSemiBold,
    fontSize: "18@ms0.3",
    color: colors.white,
    textAlign: "center",
  },
  text: {
    // borderWidth: 2,
    flexWrap: "nowrap",
    alignSelf: "center",
    marginTop: "25@vs",
    textAlign: "center",
  },
  title: {
    fontFamily: "PTSans-Bold",
    fontSize: "20@ms",
    width: "360@vs",
    color: "#1c3e7f",
    textAlign: "center",
    alignSelf: "center",
    // flexWrap: "nowrap",
  },
  paragraph: {
    alignSelf: "center",
    textAlign: "center",
    marginTop: "10@vs",
    fontSize: "18@ms",
    fontFamily: "PTSans-Regular",
    color: "#35538d",
    width: "360@vs",
  },
  syndicatContent: {
    alignItems: "center",
    marginVertical: "5@vs",
  },
  logoImage: {
    height: "60@vs",
    width: "70@vs",
    top: "10@vs",
  },
  logoText: {
    height: "37@vs",
    width: "133@vs",
    top: "10@vs",
  },
});
