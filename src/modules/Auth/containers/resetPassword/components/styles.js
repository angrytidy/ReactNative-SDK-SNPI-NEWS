import styles from "styles";
import colors from "colors";

const { FontFamily, FontSize } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
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
    // borderWidth: 2,
  },
  contentContainerner: {
    flex: 1,
    marginTop: "20@vs",
  },
  recoverText: {
    fontFamily: FontFamily.nextBold,
    fontSize: FontSize.f25,
    color: colors.purple_one,
    alignSelf: "center",
    // marginLeft: "28@s",
    // textAlign: "left",
    marginBottom: "30@vs",
    // marginBottom: '33@vs',
  },

  ButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: "20@vs",
    alignSelf: "center",
  },
  roleTypeQuestion: {
    marginTop: "24@vs",
    marginLeft: "28@s",
    marginBottom: "11@vs",
    color: colors.purple_one,
    fontSize: "16@ms0.3",
    fontFamily: FontFamily.nextSemiBold,
    textAlign: "left",
  },
});
