import React, { Component } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import { Button, Tab, Tabs, Header, TabHeading, Content } from "native-base";
import styles from "./style";
import FormLoginComponent from "../../components/FormLogin";
import FormSignUpComponent from "../../components/FormSignUp";
import ButtonAuth from "../../components/ButtonAuth";

// import ButtonAuth from "../../components/ButtonAuth";
class AuthScreen extends Component {
  
  static navigationOptions = { header: null };

  render() {
    const { currentTab } = this.state;
    return (
      <View style={styles.container}>
      <Content>
      <View style={styles.container}>
      <View style={{ padding: 40}}>
          <Image source={require("../../assets/image/Bazl-logo.png")} />
    </View>

        </View>
      </Content>
      <View style={styles.bottom}>
        <ButtonAuth title={currentTab.buttonText} onPress={currentTab.callback}/>
      </View>
      </View>
  
    );
  }
}

export default AuthScreen;
