import styles from "styles";
import colors from "colors";
const { DeviceWidth, FontSize } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";
import { I18nManager } from "react-native";

export default ScaledSheet.create({
  container: {
    flex: 1,
    width: DeviceWidth,
    backgroundColor: "#fff",
  },
  back: {
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
    zIndex: 2,
    position: "absolute",
  },
  image: {
    height: "150@vs",
    width: DeviceWidth,
    backgroundColor:"#f9f9f9"
    // alignSelf: "center",
  },
  textContent: {
    backgroundColor: "#FFF",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: DeviceWidth,
  },
  direction: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: "15@vs",
    marginHorizontal: "5@vs",
  },
  status: {
    color: "#DC002E",
    fontSize: FontSize.f12,
    fontFamily: "PTSans-Bold",
  },
  time: {
    color: "#838385",
    fontSize: FontSize.f14,
    fontFamily: "PTSans-Regular",
  },
  title: {
    color: "#042B72",
    fontSize: FontSize.f20,
    fontFamily: "PTSans-Bold",
    marginBottom: "15@vs",
  },
  publisher: {
    color: "#042B72",
    fontSize: FontSize.f14,
    fontFamily: "PTSans-Bold",
  },
  description: {
    flex: 1
  },
  fetchContainer: { flex: 1, justifyContent: "center" },
  textContentNoImage: { height: "90%" },
  textContentImage: { height: "83%" },
});
