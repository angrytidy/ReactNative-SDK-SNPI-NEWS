import styles from "styles";
import colors from "colors";
const { FontFamily, FontSize } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";

export default ScaledSheet.create({
  container: {
    paddingVertical: 15,
    backgroundColor:'#fff'
  },
  hedaerContent: {
    flexDirection: "row",
    top: "10@vs",
    justifyContent: "space-between",
  },
  back: {
    // height: "6@vs",
    // width: "12@vs",
    height: "25@vs",
    width: "25@vs",
    // left: "10@vs",
    top: "-5@vs",
  },
  backContent: {
    left: "10@vs",
    // top: "20@vs",
    width: "80@vs",
    height: "80@vs",
    justifyContent: "center",
    // borderWidth: 2,
  },
  title: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "PTSans-Bold",
    textAlign: "center",
    top: 20,
    position: 'absolute',
    left: 50,
    right: 50
  },
  choices: {
    top: 25,
  },
  choiceContent: {
    backgroundColor: "#fff",
    // padding: 25,
    height: "50@vs",
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  choice: {
    color: "#042B72",
    fontSize: 16,
    fontFamily: "PTSans-Bold",
  },
});
