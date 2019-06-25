import React, { Component } from "react";
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Button, Tab, Tabs, Header, TabHeading, Content } from "native-base";
import { AsyncStorage } from "react-native";
import styles from "./style";
import FormLoginComponent from "../../components/FormLogin";
import FormSignUpComponent from "../../components/FormSignUp";
import { ScrollView } from "react-native-gesture-handler";
import ButtonAuth from "../../components/ButtonAuth";
import { APP_ROUTE, FORGOT_ROUTE } from "../../constants/routes";

// import ButtonAuth from "../../components/ButtonAuth";
class AuthScreen extends Component {
  state = {
    currentTab: { buttonText: 'Login', callback: (data) => this.onLogin(data)}
  };
  static navigationOptions = { header: null };

  onSignUp = async (userData) => {
    await AsyncStorage.setItem("userToken", userData);
    this.props.navigation.navigate(APP_ROUTE);
  };

  onLogin = async (userData) => {
    this.props.navigation.navigate(APP_ROUTE);
  };

  onForgot = () => {
    this.props.navigation.navigate(FORGOT_ROUTE);
  };

  /**
   * @param {number} index
   * @callback onChangeTab will track the changes on tab.
   */
  onChangeTab = ({ i: index  }) => {
    const currentTabProps = [ 
      { buttonText: 'Login', callback: (data) => this.onLogin(data) }, 
      { buttonText: 'Sign Up', callback: (data) => this.onSignUp(data)} 
    ];
    for(let tabIndex of currentTabProps) {
      if(tabIndex === currentTabProps[index]) {
        this.setState({
          currentTab: {...currentTabProps[index]}
        });
        break;
      }
    }

  };

  render() {
    const { currentTab } = this.state;
    return (
      <View style={styles.container}>
      <Content>
      <View style={styles.container}>
      <View style={{ padding: 40}}>
          <Image source={require("../../assets/image/Bazl-logo.png")} />
        </View>
        <Tabs
          onChangeTab={this.onChangeTab}
          locked
          edgeHitWidth={0}
          initialPage={0}
          tabBarUnderlineStyle={styles.underLineColor}
          tabContainerStyle={styles.tabContainerStyle}
        >
          <Tab
            style={{flex: 1, bacgroundColor: "blue"}}
            heading={
              <TabHeading style={styles.tabContainer}>
                <Text>Login</Text>
              </TabHeading>
            }
          >
            <FormLoginComponent onLogin={this.onLogin}/>
          </Tab>
          <Tab

            heading={
              <TabHeading style={styles.tabContainer}>
                <Text>Sign Up</Text>
              </TabHeading>
            }
          >
            <FormSignUpComponent onSignUp={this.onSignUp} />
          </Tab>
        </Tabs>
        <TouchableOpacity full onPress={this.onForgot}>
            <Text>Don't remember your password?</Text>
          </TouchableOpacity>
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
