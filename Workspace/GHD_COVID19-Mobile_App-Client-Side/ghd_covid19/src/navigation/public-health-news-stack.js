/**
 * GHD COVID19 - React Native Mobile App
 * NAVIGATION - Public Health News Stack Navigation
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PublicHealthNewsScreen from '../screens/public-screens/health-details-tab/public-health-news/public-health-news.screen';
import HealthDetailsTabScreen from '../screens/public-screens/health-details-tab/health-details-tab.screen';


const PublicHealthNewsStack = createStackNavigator();

const HealthDetailsStackNavigation = () => {
  return (
    <PublicHealthNewsStack.Navigator initialRouteName="HealthDetails" 
      screenOptions={{
        headerShown: false
      }}
    >
      <PublicHealthNewsStack.Screen name="HealthDetails" component={ HealthDetailsTabScreen } />
      <PublicHealthNewsStack.Screen name="PublicHealthNews" component={ PublicHealthNewsScreen } />
    </PublicHealthNewsStack.Navigator>
  );
};

export default HealthDetailsStackNavigation;
