import React, { Component } from "react";
import { Text, Button, View } from "native-base";
import { AsyncStorage, StyleSheet } from "react-native";
import { BLUE_MAIN } from "../constants/colorPalette";

const ButtonAuth = () => {
  return (
    <View style={styles.bottom}>
      <Button style={styles.ButtonAuth} block>
        <Text> Login </Text>
      </Button>
    </View>
  );
};

export default ButtonAuth;

const styles = StyleSheet.create({
  ButtonAuth: {
    backgroundColor: BLUE_MAIN,
    paddingTop: 35,
    paddingBottom: 35
  }
});
