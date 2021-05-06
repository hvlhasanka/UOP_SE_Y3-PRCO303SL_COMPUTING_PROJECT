/**
 * GHD COVID19 - React Native Mobile App
 */

import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';

import SideDrawerNavigation from './src/navigation/side-drawer-navigation';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <SideDrawerNavigation />
    </NavigationContainer>
  );
};


export default App;
