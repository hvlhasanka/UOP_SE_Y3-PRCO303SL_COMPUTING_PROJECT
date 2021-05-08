import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView
} from 'react-native';
import { Button, Checkbox } from 'react-native-paper';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import styles from './sign-up-screen-two.style';

const signUpCoverImage = require("../../../../assets/images/sign-up-screen-two/cover-image.jpg");

const SignUpScreenTwo = () => {

  const [checkedTermsAndConditions, setCheckedTermsAndConditions] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1B31C3" />
      <View style={styles.signUpHeader}>
        <TouchableOpacity style={styles.previousSignUpButton} onPress={() => {}}>
          <IoniconsIcon
            name="chevron-back-outline"
            color= "#1B31C3"
            size={30}
          />
        </TouchableOpacity>
        <Image
          style={styles.signUpCoverImage}
          source={signUpCoverImage}
        />
      </View>
      <View style={[styles.signUpFooter, styles.blockShadow]}>
        <Text style={styles.signUpFooterHeading}>
          CREATE AN ACCOUNT
        </Text>
        <ScrollView>
          <Text style={styles.formHeading}>
            Login Credentials
          </Text>
          <Text style={styles.textBoxHeading}>
            Email Address
          </Text>
          <View style={styles.formInputRow}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Account Email"
            />
          </View>
          <Text style={styles.textBoxHeading}>
            Password
          </Text>
          <View style={styles.formInputRow}>
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
          </View>
          <Text style={styles.textBoxHeading}>
            Confirm Password
          </Text>
          <View style={styles.formInputRow}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Re-enter Account Password"
              secureTextEntry={true}
            />
            <FeatherIcon 
              size={20}
              name="eye-off"
              color="#02EEFF"
              style={styles.inputRightIcon}
            />
          </View>
        </ScrollView>
        
        <View style={styles.tAndCTextBlock}>
          <Checkbox
            status={checkedTermsAndConditions ? "checked" : "unchecked"}
            onPress={() => {
              setCheckedTermsAndConditions(!checkedTermsAndConditions);
            }}
          />
          <Text style={styles.tAndCText}>
            Agree to
          </Text>
          <TouchableOpacity style={styles.tAndCButton}>
            <Text style={styles.tAndCButtonText}>
              Terms & Conditions
            </Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" style={styles.registerButton} onPress={() => {}}>
          REGISTER
        </Button>
      </View>
    </View>
  );
};

export default SignUpScreenTwo;
