/**
 * GHD COVID19 - React Native Mobile App
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';

import SideDrawerNavigation from './src/navigation/side-drawer-navigation';
import SignUpScreenOne from './src/screens/auth/sign-up/sign-up-screen-one/sign-up-screen-one.screen';
import LoginScreen from './src/screens/auth/login/login.screen';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <SignUpScreenOne />
    // <LoginScreen />
    <NavigationContainer>
      <SideDrawerNavigation />
    </NavigationContainer>
  );
};


export default App;
