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
import LoginScreen from "./src/modules/auth/LoginScreen";

import HomeScreen from "./src/modules/home/HomeScreen";

export const AuthStack = createStackNavigator({
  Login: { screen: LoginScreen }
});

export const AppStack = createStackNavigator({
  Home: { screen: HomeScreen }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
