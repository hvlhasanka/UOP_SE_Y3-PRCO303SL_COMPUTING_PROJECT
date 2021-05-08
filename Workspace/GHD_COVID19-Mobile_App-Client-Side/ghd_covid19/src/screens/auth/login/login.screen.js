import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Button } from 'react-native-paper';
import styles from './login.style';


const loginCoverImage = require("../../../assets/images/login-screen/cover-image.jpg");

const LoginScreen = () => {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#4E3AC2" />
      <View style={styles.loginHeader}>
        <TouchableOpacity style={styles.closeLoginButton} onPress={() => {}}>
          <MaterialCommunityIconsIcon
            name="close"
            color= "#4E3AC2"
            size={30}
          />
        </TouchableOpacity>
        <Image
          style={styles.loginCoverImage}
          source={loginCoverImage}
        />
      </View>
      <View style={[styles.loginFooter, styles.blockShadow]}>
        <Text style={styles.footerHeading}>
          LOGIN
        </Text>
        <Text style={styles.textBoxHeading}>
          Email Address
        </Text>
        <View style={styles.formInputRow}>
          <MaterialCommunityIconsIcon
            name="email-outline"
            color= "#fff"
            size={20}
            style={styles.inputLeftIcon}
          />
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Account Email"
          />
          {/* <FeatherIcon 
            size={20}
            name="check-circle"
            color="#0FEEA5"
            style={styles.inputRightIcon}
          /> */}
        </View>
        <Text style={styles.textBoxHeading}>
          Password
        </Text>
        <View style={styles.formInputRow}>
          <FontAwesomeIcon
            name="lock"
            color= "#fff"
            size={20}
            style={styles.inputLeftIcon}
          />
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Account Password"
            secureTextEntry={true}
          />
          <FeatherIcon 
            size={20}
            name="eye-off"
            color="#02EEFF"
            style={styles.inputRightIcon}
          />
          <TouchableOpacity style={styles.forgotPasswordBlock}>
            <Text style={styles.forgotPasswordText}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" style={styles.loginButton} onPress={() => {}}>
          LOGIN
        </Button>
        <View style={styles.signUpTextBlock}>
          <Text style={styles.signUpText}>
            Don't have an account?
          </Text>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.signUpButtonText}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
