import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import ButtonAuth from "./ButtonAuth";

class FormSignUpComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Form SignUp</Text>
        <View style={styles.bottom}>
          <ButtonAuth />
        </View>
      </View>
    );
  }
}

export default FormSignUpComponent;

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
