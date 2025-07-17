import styles from "styles";
const { FontFamily, FontSize } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";

export default ScaledSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#f3f3f3",
    borderRadius: 5,
    alignSelf: "center",
    width: "360@s",
    // height: "179@vs",
    marginBottom: 10,
    paddingBottom: 5,
    overflow:'hidden',
    backgroundColor: '#fff'
  },
  image: {
    height: "150@vs",
    width: "360@s",
    backgroundColor:'#eee',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderRightWidth: 5,
    margin:-1
    // zIndex: 1,
  },
  imageContent: {
    height: "150@vs",
  },
  // badgeContent: {
  //   borderWidth: 2,
  //   position: "absolute",
  //   backgroundColor: "#7f7f7f",
  //   left: 15,
  //   top: 15,
  // },
  badgeContent: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "transparent",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    left: 14,
    top: 15,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  badge: {
    color: "#FFF",
    fontSize: FontSize.f14,
    fontFamily: "PTSans-Regular",
  },
  title: {
    color: "#042B72",
    fontSize: FontSize.f18,
    fontFamily: "PTSans-Bold",
    marginVertical: "10@vs",
  },
  description: {
    color: "#042B72",
    fontSize: FontSize.f16,
    fontFamily: "PTSans-Regular",
  },
  status: {
    color: "#DC002E",
    fontSize: FontSize.f12,
    fontFamily: "PTSans-Bold",
    marginTop: "10@vs",
  },
  descContent: {
    marginLeft: 15,
    paddingBottom: "10@vs",
  },
  withoutImage: { marginTop: "55@vs" },
});
