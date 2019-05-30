import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Button, Tab, Tabs, Header, TabHeading } from "native-base";
import { AsyncStorage } from "react-native";
import styles from "./style";
import FormLoginComponent from "../../components/FormLogin";
import FormSignUpComponent from "../../components/FormSignUp";
class LoginScreen extends Component {
  static navigationOptions = { header: null };
  // _LogInAsync = async () => {
  //   await AsyncStorage.setItem("userToken", "abc");
  //   this.props.navigation.navigate("App");
  // };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 50 }}>
          <Image source={require("../../assets/image/Bazl-logo.png")} />
        </View>

        <Tabs
          edgeHitWidth={0}
          initialPage={0}
          tabBarUnderlineStyle={styles.underLineColor}
          tabContainerStyle={styles.tabContainerStyle}
        >
          <Tab
            heading={
              <TabHeading style={styles.tabContainer}>
                <Text>Login</Text>
              </TabHeading>
            }
          >
            <FormLoginComponent />
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.tabContainer}>
                <Text>Sign Up</Text>
              </TabHeading>
            }
          >
            <FormSignUpComponent />
          </Tab>
        </Tabs>

        {/* <Button onPress={this._LogInAsync} block>
          <Text> Login </Text>
        </Button> */}
      </View>
    );
  }
}

export default LoginScreen;
