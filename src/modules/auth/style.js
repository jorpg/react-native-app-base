import { StyleSheet, Platform, Dimensions } from "react-native";
import { BLUE_MAIN } from "../../constants/colorPalette";
var width = Dimensions.get("window").width;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
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
  }
});
