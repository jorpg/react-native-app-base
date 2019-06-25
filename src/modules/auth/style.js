import { StyleSheet, Platform, Dimensions } from "react-native";
import { BLUE_MAIN } from "../../constants/colorPalette";
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  logo: {
    width: "75%",
    height: 90,
    ...Platform.select({
      android: {
        marginTop: "20%"
      }
    })
  },
  tabContainerStyle: {
    backgroundColor: "transparent",
    elevation: 0
  },
  tabContainer: {
    backgroundColor: "#fff"
  },
  underLineColor: {
    backgroundColor: BLUE_MAIN
  },
  bottom: {
    position: "relative",
    bottom: 0,
    width: "100%"
  },
});
