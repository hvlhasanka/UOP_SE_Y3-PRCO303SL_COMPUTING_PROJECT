import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigation from './bottom-tab-navigation';
import ReportScreen from '../screens/public-screens/report/report.screen';
import HelpScreen from '../screens/public-screens/help/help.screen';
import EmergencyContactScreen from '../screens/public-screens/emergency-contact/emergency-contact.screen';
import SettingsScreen from '../screens/public-screens/settings/settings.screen';
import AboutScreen from '../screens/public-screens/about/about.screen';
import NotificationsScreen from '../screens/private-screens/notifications/notifications.screen';
import ProfileScreen from '../screens/private-screens/profile/profile.screen';
import SideDrawerContent from './side-drawer-content';

const SideDrawerNav = createDrawerNavigator();

const SideDrawerNavigation = () => {
  return (
    <SideDrawerNav.Navigator initialRouteName="Home" drawerContent={props => <SideDrawerContent {...props} />}>
      <SideDrawerNav.Screen name="BottomTabNavigation" component={ BottomTabNavigation } />
      <SideDrawerNav.Screen name="Notifications" component={ NotificationsScreen } />
      <SideDrawerNav.Screen name="Profile" component={ ProfileScreen } />
      <SideDrawerNav.Screen name="EmergencyContact" component={ EmergencyContactScreen } />
      <SideDrawerNav.Screen name="Report"  component={ ReportScreen } />
      <SideDrawerNav.Screen name="Help" component={ HelpScreen } />
      <SideDrawerNav.Screen name="Settings" component={ SettingsScreen } />
      <SideDrawerNav.Screen name="About" component={ AboutScreen } />
    </SideDrawerNav.Navigator>
  );
};


export default SideDrawerNavigation;
