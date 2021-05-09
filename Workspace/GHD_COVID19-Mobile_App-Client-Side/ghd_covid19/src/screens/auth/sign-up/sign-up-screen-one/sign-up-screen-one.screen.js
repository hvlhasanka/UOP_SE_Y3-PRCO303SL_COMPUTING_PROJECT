/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN - Sign Up Screen One
 */
import React from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import { Button } from 'react-native-paper';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './sign-up-screen-one.style';


const SignUpScreenOne = ( props ) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1B31C3" />
      <View style={styles.signUpHeader}>
        <TouchableOpacity style={styles.closeSignUpButton} onPress={() => props.navigation.goBack()}>
          <MaterialCommunityIconsIcon
            name="close"
            color= "#1B31C3"
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.signUpFooter, styles.blockShadow]}>
        <Text style={styles.signUpFooterHeading}>
          CREATE AN ACCOUNT
        </Text>
        <ScrollView>
          <Text style={styles.textBoxHeading}>
            Full Name
          </Text>
          <View style={styles.firstMiddleNameContainer}> 
            <View style={styles.firstNameBlock}>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="First Name"
              />
            </View>
            <View style={styles.middleNameBlock}>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Middle Name"
              />
            </View>
            
          </View>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Last Name"
          />
          <Text style={[styles.textBoxHeading, {
            marginTop: 30
          }]}>
            NIC
          </Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="NIC Number"
          />
          <Text style={styles.orText}>
            OR
          </Text>
          <Text style={styles.textBoxHeading}>
            Passport
          </Text>
          <TextInput
            style={[styles.textInput, {
              marginBottom: 30
            }]}
            autoCapitalize="none"
            placeholder="Passport Number"
          />
          <Text style={[styles.textBoxHeading, {
            marginTop: 10
          }]}>
            AGE RANGE
          </Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Select Age Range"
          />
          <Text style={[styles.textBoxHeading, {
            marginTop: 10
          }]}>
            GENDER
          </Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Select Gender"
          />
          <Text style={[styles.textBoxHeading, {
            marginTop: 10
          }]}>
            ADDRESS
          </Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Street Address"
          />
          <TextInput
            style={[styles.textInput, {
              marginTop: 5
            }]}
            autoCapitalize="none"
            placeholder="City"
          />
          <TextInput
            style={[styles.textInput, {
              marginTop: 5
            }]}
            autoCapitalize="none"
            placeholder="Postal Code"
          />
          <TextInput
            style={[styles.textInput, {
              marginTop: 5
            }]}
            autoCapitalize="none"
            placeholder="District"
          />
        </ScrollView>

        <Button mode="contained" style={styles.continueButton} onPress={() => props.navigation.navigate('SignUpScreenTwo')}>
          CONTINUE
        </Button>

      </View>
    </View>
  );
};

export default SignUpScreenOne;
