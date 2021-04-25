/**
 * GHD COVID19 - React Native Mobile App
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/public-screens/home/home.screen';
import ReportScreen from './src/screens/public-screens/report/report.screen';
import HelpScreen from './src/screens/public-screens/help/help.screen';
import EmergencyContactScreen from './src/screens/public-screens/emergency-contact/emergency-contact.screen';
import SettingsScreen from './src/screens/public-screens/settings/settings.screen';
import AboutScreen from './src/screens/public-screens/about/about.screen';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff"
        }
      }}
    >
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: "Home",
          headerLeft: () => (
            <Icon.Button 
              name="menu" 
              size={25} 
              backgroundColor="#ffffff" 
              color="#000000"
              onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          )
        }}
      />
    </HomeStack.Navigator>
  );
};


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Report" component={ReportScreen} />
        <Drawer.Screen name="Help" component={HelpScreen} />
        <Drawer.Screen name="Emergency Contact" component={EmergencyContactScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
