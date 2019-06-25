import React from "react";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Warning: Failed prop type",
  "Module RCTImageLoader"
]);

import AuthLoadingScreen from "./src/modules/auth/AuthLoading";
import AuthScreen from "./src/modules/auth/AuthScreen";
import ForgotScreen from "./src/modules/auth/ForgotScreen"

import HomeScreen from "./src/modules/home/HomeScreen";
import { AUTH_ROUTE, FORGOT_ROUTE, HOME_ROUTE, AUTHSWITCH_ROUTE, APP_ROUTE } from "./src/constants/routes";

export const AuthStack = createStackNavigator({
  [AUTH_ROUTE]: { screen: AuthScreen },
  [FORGOT_ROUTE]: { screen: ForgotScreen }
});

export const AppStack = createStackNavigator({
  [HOME_ROUTE]: { screen: HomeScreen }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      [APP_ROUTE]: AppStack,
      [AUTHSWITCH_ROUTE]: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
