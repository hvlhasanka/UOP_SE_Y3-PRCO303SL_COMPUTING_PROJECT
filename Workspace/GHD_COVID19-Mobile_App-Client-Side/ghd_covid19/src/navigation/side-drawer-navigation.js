import React from 'react';
import { View, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

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
const NotificationsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const EmergencyContactStack = createStackNavigator();
const ReportStack = createStackNavigator();
const HelpStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const AboutStack = createStackNavigator();

const NotificationsStackScreen = ({ navigation }) => {
  return (
    <NotificationsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ededed"
        }
      }}
    >
      <NotificationsStack.Screen 
        name="Notifications" 
        component={ NotificationsScreen } 
        options={{
          title: "NOTIFICATIONS",
          headerLeft: () => (
            <IoniconsIcon.Button 
              name="menu" 
              size={35} 
              backgroundColor="#ededed" 
              color="#000000"
              onPress={() => navigation.openDrawer()}
            ></IoniconsIcon.Button>
          )
        }}
      />
    </NotificationsStack.Navigator>
  );
};

const ProfileStackScreen = ({ navigation }) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0B3359"
        }
      }}
    >
      <ProfileStack.Screen 
        name="Profile" 
        component={ ProfileScreen } 
        options={{
          title: "PROFILE",
          headerTitleStyle: {
            color: "#ffffff"
          },
          headerLeft: () => (
            <View>
              <StatusBar backgroundColor="#3573E1" />
              <IoniconsIcon.Button 
                name="menu" 
                size={35} 
                backgroundColor="#0B3359" 
                color="#ffffff"
                onPress={() => navigation.openDrawer()}
              ></IoniconsIcon.Button>
            </View>
          )
        }}
      />
    </ProfileStack.Navigator>
  );
};

const EmergencyContactStackScreen = ({ navigation }) => {
  return (
    <EmergencyContactStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ededed"
        }
      }}
    >
      <EmergencyContactStack.Screen 
        name="EmergencyContact" 
        component={ EmergencyContactScreen } 
        options={{
          title: "EMERGENCY CONTACT",
          headerLeft: () => (
            <IoniconsIcon.Button 
              name="menu" 
              size={35} 
              backgroundColor="#ededed" 
              color="#000000"
              onPress={() => navigation.openDrawer()}
            ></IoniconsIcon.Button>
          )
        }}
      />
    </EmergencyContactStack.Navigator>
  );
};

const ReportStackScreen = ({ navigation }) => {
  return (
    <ReportStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ededed"
        }
      }}
    >
      <ReportStack.Screen 
        name="Report" 
        component={ ReportScreen } 
        options={{
          title: "REPORT",
          headerLeft: () => (
            <IoniconsIcon.Button 
              name="menu" 
              size={35} 
              backgroundColor="#ededed" 
              color="#000000"
              onPress={() => navigation.openDrawer()}
            ></IoniconsIcon.Button>
          )
        }}
      />
    </ReportStack.Navigator>
  );
};

const HelpStackScreen = ({ navigation }) => {
  return (
    <HelpStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ededed"
        }
      }}
    >
      <HelpStack.Screen 
        name="Help" 
        component={ HelpScreen } 
        options={{
          title: "HELP",
          headerLeft: () => (
            <IoniconsIcon.Button 
              name="menu" 
              size={35} 
              backgroundColor="#ededed" 
              color="#000000"
              onPress={() => navigation.openDrawer()}
            ></IoniconsIcon.Button>
          )
        }}
      />
    </HelpStack.Navigator>
  );
};

const SettingsStackScreen = ({ navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ededed"
        }
      }}
    >
      <SettingsStack.Screen 
        name="Settings" 
        component={ SettingsScreen } 
        options={{
          title: "SETTINGS",
          headerLeft: () => (
            <IoniconsIcon.Button 
              name="menu" 
              size={35} 
              backgroundColor="#ededed" 
              color="#000000"
              onPress={() => navigation.openDrawer()}
            ></IoniconsIcon.Button>
          )
        }}
      />
    </SettingsStack.Navigator>
  );
};

const AboutStackScreen = ({ navigation }) => {
  return (
    <AboutStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0B3359"
        }
      }}
    >
      <AboutStack.Screen 
        name="About" 
        component={ AboutScreen } 
        options={{
          title: "ABOUT",
          headerTitleStyle: {
            color: "#ffffff"
          },
          headerLeft: () => (
            <View>
              <StatusBar backgroundColor="#3573E1" />
              <IoniconsIcon.Button 
                name="menu" 
                size={35} 
                backgroundColor="#0B3359" 
                color="#ffffff"
                onPress={() => navigation.openDrawer()}
              ></IoniconsIcon.Button>
            </View>
          )
        }}
      />
    </AboutStack.Navigator>
  );
};


const SideDrawerNavigation = () => {
  return (
    <SideDrawerNav.Navigator initialRouteName="Home" drawerContent={props => <SideDrawerContent {...props} />}>
      <SideDrawerNav.Screen name="BottomTabNavigation" component={ BottomTabNavigation } />
      <SideDrawerNav.Screen name="Notifications" component={ NotificationsStackScreen } />
      <SideDrawerNav.Screen name="Profile" component={ ProfileStackScreen } />
      <SideDrawerNav.Screen name="EmergencyContact" component={ EmergencyContactStackScreen } />
      <SideDrawerNav.Screen name="Report"  component={ ReportStackScreen } />
      <SideDrawerNav.Screen name="Help" component={ HelpStackScreen } />
      <SideDrawerNav.Screen name="Settings" component={ SettingsStackScreen } />
      <SideDrawerNav.Screen name="About" component={ AboutStackScreen } />
    </SideDrawerNav.Navigator>
  );
};


export default SideDrawerNavigation;
