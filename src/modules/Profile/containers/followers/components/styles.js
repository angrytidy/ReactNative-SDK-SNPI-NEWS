import styles from "styles";
import colors from "colors";
const { FontFamily, FontSize } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
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
    // borderWidth: 2,
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
  choices: {
    // top: 25,
  },
  switchtitle: {
    backgroundColor: "#fff",
    // padding: "20@vs",
    height: "50@s",
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "15@vs",
  },
  choiceContent: {
    backgroundColor: "#f3f5f8",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: "5@vs",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "50@vs",
    alignItems: "center",
  },
  choice: {
    color: "#042B72",
    fontSize: 16,
    fontFamily: "PTSans-Bold",
  },
  newsTitle: {
    color: "#042B72",
    fontSize: 12,
    fontFamily: "PTSans-Bold",
    textAlign: "left",
    // marginTop: "30@vs",
    left: "20@s",
    // right: 100,
  },
  items: {
    color: "#042B72",
    fontSize: 16,
    fontFamily: "PTSans-Bold",
  },
  unselected: {
    width: 25,
    height: 25,
    backgroundColor: "#f3f5f8",
    borderWidth: 2,
    alignSelf: "center",
    borderRadius: 5,
    borderColor: "#2a4b87",
  },
  selected: {
    width: 25,
    height: 25,
    backgroundColor: "#042b72",
    // borderWidth: 2,
    alignSelf: "center",
    borderRadius: 5,
    borderColor: "#2a4b87",
    paddingVertical: "3@vs",
    textAlign: "center",
    paddingLeft: "4@vs",
  },
});
