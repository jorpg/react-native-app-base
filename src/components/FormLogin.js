import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonAuth from "./ButtonAuth";

class FormLoginComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <View style={styles.bottom}>
          <ButtonAuth />
        </View>
      </View>
    );
  }
}

export default FormLoginComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  }
});
