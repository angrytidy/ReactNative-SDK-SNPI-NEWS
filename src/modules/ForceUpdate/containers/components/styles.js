import styles from "styles";

const { FontFamily, FontSize, DeviceHeight, DeviceWidth } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";

export default ScaledSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: "25@vs",
    backgroundColor: "#FFF",
    paddingVertical: "15@vs",
    marginHorizontal: "32@s",
    borderRadius: "20@ms",
  },
  moovanceHeader: {
    alignSelf: "center",
    // width: "20@vs",
    // height: "150@vs",
  },
  updateContainer: {
    position: "absolute",
    top: DeviceHeight * 0.23,
    alignSelf: "center",
    width: DeviceWidth * 0.95,
    paddingVertical: "20@vs",
    borderRadius: "25@ms",
    borderWidth: 1,
    borderColor: "#000",
  },
  moovanceLogo: {
    alignSelf: "center",
    width: "201@s",
    height: "201@vs",
    // borderRadius: "150@ms",
  },
  messageConatainer: {
    paddingVertical: "16@vs",
    paddingHorizontal: "17@s",
  },
  messageContent: {
    color: "#000",
    fontWeight: "normal",
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    fontSize: FontSize.f18,
    letterSpacing: -0.02,
  },
  btnToStore: {
    alignSelf: "center",
    padding: "16@vs",
    borderRadius: "20@ms",
    backgroundColor: "#5e6060",
  },
  visit_store: {
    color: "#FFF",
    fontWeight: "bold",
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    fontSize: FontSize.f16,
    letterSpacing: -0.02,
  },
});
