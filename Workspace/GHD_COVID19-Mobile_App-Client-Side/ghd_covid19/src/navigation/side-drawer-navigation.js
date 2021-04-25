import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigation from './bottom-tab-navigation';
import ReportScreen from '../screens/public-screens/report/report.screen';
import HelpScreen from '../screens/public-screens/help/help.screen';
import EmergencyContactScreen from '../screens/public-screens/emergency-contact/emergency-contact.screen';
import SettingsScreen from '../screens/public-screens/settings/settings.screen';
import AboutScreen from '../screens/public-screens/about/about.screen';

const SideDrawerNav = createDrawerNavigator();

const SideDrawerNavigation = () => {
  return (
    <SideDrawerNav.Navigator initialRouteName="Home">
      <SideDrawerNav.Screen 
        name="Home" 
        component={ BottomTabNavigation }
        options={{
          title: "HOME" 
        }}
      />
      <SideDrawerNav.Screen 
        name="Report" 
        component={ ReportScreen }
        options={{
          title: "REPORT" 
        }}
      />
      <SideDrawerNav.Screen 
        name="Help" 
        component={ HelpScreen }
        options={{
          title: "HELP" 
        }}
      />
      <SideDrawerNav.Screen 
        name="Emergency Contact" 
        component={ EmergencyContactScreen }
        options={{
          title: "EMERGENCY CONTACT" 
        }}
      />
      <SideDrawerNav.Screen 
        name="Settings" 
        component={ SettingsScreen }
        options={{
          title: "SETTINGS" 
        }}
      />
      <SideDrawerNav.Screen 
        name="About" 
        component={ AboutScreen }
        options={{
          title: "ABOUT" 
        }}
      />
    </SideDrawerNav.Navigator>
  );
};


export default SideDrawerNavigation;
