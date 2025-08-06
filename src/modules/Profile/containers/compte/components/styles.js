import styles from "styles";
import colors from "colors";
const { FontFamily, FontSize } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";

export default ScaledSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor:'#fff',
    paddingBottom: "40@vs",

  },
  hedaerContent: {
    flexDirection: "row",
    top: "10@vs",
    justifyContent: "space-between",
  },
  back: {
    height: "25@vs",
    width: "25@vs",
    top: "-5@vs",
  },
  backContent: {
    left: "10@vs",
    width: "80@vs",
    height: "80@vs",
    justifyContent: "center",
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
  profile: {
    alignItems: "center",
    // top: 35,
    // flex: 1,
    // borderWidth: 1,
  },
  image: {
    borderRadius: "50@vs",
    backgroundColor:'#f9f9f9',
    width: "100@vs",
    height: "100@vs",
  },
  fullName: {
    color: "#042B72",
    fontSize: 20,
    fontFamily: "PTSans-Bold",
    top: 10,
  },
  choices: {
    // borderWidth: 1,
    flex: 1,
    top: "35@vs",
  },
  choiceContent: {
    backgroundColor: "#f3f5f8",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: "5@vs",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoutContent: {
    backgroundColor: "#f3f5f8",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: "5@vs",
    // paddingBottom: "40@vs",
  },
  choice: {
    color: "#042B72",
    fontSize: 16,
    fontFamily: "PTSans-Bold",
  },
  descContent: {
    // borderWidth: 1,
    width: "90%",
    alignSelf: "center",
    fontFamily: "PTSans-Regular",
    fontSize: 14,
    marginBottom: "15@vs",
  },
  textDesc: {
    color: "#5C75A2",
    lineHeight: "20@vs",
  },
  link: {
    color: "#042B72",
    top: 2,
  },
  logout: {
    color: "#DC072E",
    fontSize: 16,
    fontFamily: "PTSans-Bold",
    alignSelf: "center"
  },
  chevron: {
    alignSelf: "center",
    height: "13@vs",
    width: "7@vs",
  },
});
