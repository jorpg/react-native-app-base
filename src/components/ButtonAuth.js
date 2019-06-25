import React, { Component } from "react";
import { Text, Button, View } from "native-base";
import { AsyncStorage, StyleSheet } from "react-native";
import { BLUE_MAIN } from "../constants/colorPalette";

const ButtonAuth = ({ title, onPress }) => {
  return (
    <View style={styles.bottom}>
      <Button style={styles.ButtonAuth} onPress={onPress} block>
        <Text>{title}</Text>
      </Button>
    </View>
  );
};

export default ButtonAuth;

const styles = StyleSheet.create({
  ButtonAuth: {
    backgroundColor: BLUE_MAIN,
    paddingTop: 30,
    paddingBottom: 30
  }
});
