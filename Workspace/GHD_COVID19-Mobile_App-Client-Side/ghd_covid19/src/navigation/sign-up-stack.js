/**
 * GHD COVID19 - React Native Mobile App
 * NAVIGATION - Sign Up Stack Navigation
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignUpScreenOne from '../screens/auth/sign-up/sign-up-screen-one/sign-up-screen-one.screen';
import SignUpScreenTwo from '../screens/auth/sign-up/sign-up-screen-two/sign-up-screen-two.screen';


const SignUpStack = createStackNavigator();

const SignUpStackNavigation = () => {
  return (
    <SignUpStack.Navigator initialRouteName="SignUpScreenOne" 
      screenOptions={{
        headerShown: false
      }}
    >
      <SignUpStack.Screen name="SignUpScreenOne" component={ SignUpScreenOne } />
      <SignUpStack.Screen name="SignUpScreenTwo" component={ SignUpScreenTwo } />
    </SignUpStack.Navigator>
  );
};

export default SignUpStackNavigation;
 