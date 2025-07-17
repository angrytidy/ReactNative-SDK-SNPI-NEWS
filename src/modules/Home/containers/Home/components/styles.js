import styles from "styles";
import colors from "colors";
const { FontFamily, FontSize } = styles;

import { ScaledSheet } from "react-native-size-matters/extend";

export default ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
  topBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: "20@vs",
    marginHorizontal: "5@s",
    marginBottom: "5@vs",
    height: 50,
    paddingHorizontal: 10,
  },
  topBarLeftItem : {
    flex: 1,
  },
  topBarCenterItem : {
    flex: 6,
    alignItems: 'center',
  },
  topBarRightItem : {
    flex: 1,
    alignItems: 'flex-end',
  },
  profile: {
    width: "60@vs",
    height: "60@vs",
    borderRadius: "100@vs",
    alignSelf: "center",
    left: 0
  },
  profileText: {
    color: "#042b72",
    textAlign: "center",
    alignSelf: "center",
    position: "absolute",
    fontSize: 26,
    fontFamily: "PTSans-Regular",
    justifyContent: 'center', //Centered horizontally
    alignItems: 'center', //Centered vertically
    flex: 1
  },
  overlayiOS: {
    backgroundColor: "#3333331c",
    width: "60@vs",
    height: "60@vs",
    borderRadius: "50@vs",
    justifyContent: "center",
  },
  filter: {
    alignSelf: "center",
    position: "absolute",
    right: 0,
  },
  triContent: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    bottom: -1,
    width: "100%",
    zIndex: 9,
    justifyContent: "flex-end",
    top: 0,
    left: 0,
    right: 0,
  },
  tri: {
    backgroundColor: "#FFF",
    height: "325@vs",
    paddingTop: "20@vs",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  check: {
    alignSelf: "center",
    height: "11@vs",
    width: "16@vs",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "15@s",
  },
  row_title: {
    fontFamily: "PTSans-Bold",
    fontSize: 16,
    color: colors.black_one,
    marginBottom: "15@vs",
  },
  row_image: {
    height: "10@vs",
    width: "10@s",
    top: 0,
  },
  unselected: {
    color: "#838385",
    marginVertical: "15@vs",
    fontSize: 16,
    fontFamily: "PTSans-Regular",
  },
  selected: {
    color: "#042B72",
    marginVertical: "15@vs",
    fontSize: 16,
    fontFamily: "PTSans-Bold",
  },
  list: {
    marginTop: 33,
    marginBottom: 5,
    flex: 1,
  },
  scrollview: {
    marginTop: 20,
    flex: 1,
    flexGrow: 1
  },
  aselected: {
    alignSelf: "center",
  },
  errorContent: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  errorMessage: {
    color: "#838385",
    marginVertical: 15,
    fontSize: "18@ms",
    fontFamily: "PTSans-Italic",
    textAlign: "center",
  },
  selection: {
    fontWeight: "bold",
  },
  logo: { width: "75@s", height: "75@vs" },
  picto: { width: "25@s", height: "25@vs" },
  modalFilter: {
    backgroundColor: "#FFF",
    height: "300@vs",
    paddingTop: "20@vs",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modalFilterTitle: {
    fontFamily: "PTSans-Bold",
    fontSize: 16,
    color: colors.black_one,
    marginBottom: "15@vs",
  },
  viewButtonSeeMore: {
    paddingBottom: 10
  }
});
