import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import IconFacebook from "react-native-vector-icons/EvilIcons";
import {Form, Input, Item, Button} from "native-base";
import ButtonAuth from "./ButtonAuth"
import { TouchableOpacity } from "react-native-gesture-handler";
import { FORGOT_ROUTE } from "../constants/routes";

class FormLoginComponent extends Component {
  onForgot = () => {
    this.props.navigation.navigate(FORGOT_ROUTE);
  };
  render() {
    const { onLogin  } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.ViewForm}>
          <View style={styles.viewFacebook}>
            <Button iconLeft block style={styles.buttonFacebook}>
              <IconFacebook name='sc-facebook' size={20} color="#fff" style={styles.iconFacebook}/>
              <Text style={styles.textFacebook}>Login with facebook</Text>
            </Button>
          </View>
          <View style={styles.viewDivider}>
            <View style={styles.divider}/>
            <Text style={styles.textOr}>OR</Text>
            <View style={styles.divider}/>
          </View>
          <Form >
            <Item style={styles.inputStyle}>
            <Icon style={styles.iconStyle} name="ios-mail" size={20} color="#ccc"/>
              <Input placeholder="your@mail.com"
                underlineColorAndroid="transparent"
                placeholderTextColor="#ccc"
              />
            </Item>
            <Item style={styles.inputStyle}>
            <Icon style={styles.iconStyle} name="ios-lock" size={20} color="#ccc"/>
              <Input placeholder="Your Password"
              underlineColorAndroid="transparent"
              placeholderTextColor="#ccc"
              />
            </Item>
          </Form>
          {/* <Button block transparent dark onPress={this.forgot}>
            <Text>Don't remember your password?</Text>
          </Button>
          <TouchableOpacity full onPress={this._showMoreApp}>
            <Text>Don't remember your password?</Text>
          </TouchableOpacity> */}
        </View>
        {/* <View style={styles.bottom}>
          <ButtonAuth title={'Login'} onPress={onLogin}/>
        </View> */}
      </View>
    );
  }
}

export default FormLoginComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ViewForm:{
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
iconStyle: {
    padding: 14,
    width: 50,
    backgroundColor: '#f3f3f3',
    marginRight: 10,
    textAlign: 'center'
},
inputStyle:{
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderTopWidth: 1,
  borderRadius: 3,
  marginBottom: 10,
  borderColor: '#ccc',
  marginLeft: 0,
},
viewFacebook:{
  paddingTop: 15,
},  
buttonFacebook:{
  justifyContent: "flex-start",
  backgroundColor: '#3b5998',
  borderRadius: 5,
},
textFacebook:{
  color: '#fff',
  textTransform: 'uppercase',
},
iconFacebook:{
  padding: 14,
  backgroundColor: '#2f477a',
  marginRight: 10,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
},
viewDivider:{
  flex: 1, 
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: 10,
  paddingBottom: 10
},
divider:{
  height: 1,
  width: '42%',
  backgroundColor: '#eae8e8'
},
textOr:{
  padding: 15,
  color: '#eae8e8'
}

});
