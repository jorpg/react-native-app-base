import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button, Container } from "native-base";
import { AsyncStorage } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = { header: null };
  _showHome = () => {
    this.props.navigation.navigate("App");
  };
  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
  render() {
    return (
      <Container>
        <Text>Hola Home</Text>
        <Button onPress={this._showMoreApp} block />
        <Button onPress={this._signOutAsync} block />
      </Container>
    );
  }
}

export default HomeScreen;
