import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
  AsyncStorage
} from "react-native";
import { YellowBox } from "react-native";
import { APP_ROUTE, AUTHSWITCH_ROUTE } from "../../constants/routes";
YellowBox.ignoreWarnings([
  "Warning: Async Storage has been extracted from react-native core"
]);

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? APP_ROUTE : AUTHSWITCH_ROUTE);
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
