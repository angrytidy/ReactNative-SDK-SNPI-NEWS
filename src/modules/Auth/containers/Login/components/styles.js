import styles from "styles";
import colors from "colors";

const { FontFamily, FontSize } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";
import { I18nManager } from "react-native";

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    // paddingBottom: "40@vs",
  },
  back: {
    // height: "6@vs",
    // width: "12@vs",
    height: "25@vs",
    width: "25@vs",
    left: "10@vs",
    top: "20@vs",
  },
  backContent: {
    left: "10@vs",
    top: "20@vs",
    width: "80@vs",
    height: "80@vs",
    //borderWidth: 2,
  },
  logoContent: {
    marginBottom: "50@s",
    alignItems: "center",
  },
  logoImage: {
    height: "150@vs",
    width: "150@vs",
    // top: "10@vs",
  },
  logoText: {
    height: "70@vs",
    width: "242@vs",
    top: "10@vs",
  },

  loginText: {
    fontFamily: FontFamily.nextBold,
    fontSize: FontSize.f30,
    color: colors.purple_one,
    marginLeft: "28@s",
    textAlign: "left",
    marginTop: "58@vs",
    marginBottom: "32@vs",
    // marginBottom: '20@vs',
  },
  forgetPasswordContainer: {
    marginTop: "5@vs",
    marginBottom: "50@vs",
    alignItems: "center",
  },
  textbutton: {
    fontFamily: "PTSans-Regular",
    fontSize: FontSize.f16,
    color: "#042B72",
  },
  cguAndButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: "40@vs",
  },
  additonalContainerStyle: {
    marginTop: "31@vs",
  },
  contentContainerner: {
    flex: 1,
    // marginTop: "50@vs",
  },
  rightIcon: {
    width: "20@s",
    height: "20@vs",
  },
});
