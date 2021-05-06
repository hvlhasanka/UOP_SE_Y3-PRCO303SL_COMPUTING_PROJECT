import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Badge } from 'react-native-paper';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import HealthDetailsNavigation from './public-health-news-stack';
import HomeScreen from '../screens/public-screens/home/home.screen';
import CovidStatsTabScreen from '../screens/public-screens/covid-stats-tab/covid-stats-tab.screen';
import HealthStatusReportsTabScreen from '../screens/public-screens/health-status-reports-tab/health-status-reports-tab.screen';
import HotZonesTabScreen from '../screens/public-screens/hot-zones-tab/hot-zones-tab.screen';


const BottomTabNav = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const CovidStatsStack = createStackNavigator();
const HealthDetailsStack = createStackNavigator();
const HealthStatusReportsStack = createStackNavigator();
const HotZonesStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3573E1",
        }
      }}
    >
      <HomeStack.Screen 
        name="Home" 
        component={ HomeScreen } 
        options={{
          title: "HOME",
          headerTitleStyle: {
            color: "#ffffff"
          },
          headerLeft: () => (
            <View>
              <StatusBar backgroundColor="#3573E1" />
              <IoniconsIcon.Button 
                name="menu" 
                size={35} 
                backgroundColor="#3573E1" 
                color="#ffffff"
                onPress={() => navigation.openDrawer()}
              ></IoniconsIcon.Button>
            </View>
          ),
          headerRight: () => (
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View style={{ marginRight: 5 }}>
                <IoniconsIcon.Button
                  name="chatbubbles-outline"
                  size={35}
                  backgroundColor="#3573E1"
                  color="#ffffff"
                  onPress={() => {}}
                ></IoniconsIcon.Button>
              </View>
              <View style={{ position: "absolute", right: 75, top: 5 }}>
                <Badge>4</Badge>
              </View>
              <View>
                <IoniconsIcon.Button
                  name="notifications-outline"
                  size={35}
                  backgroundColor="#3573E1"
                  color="#ffffff"
                  onPress={() => {}}
                ></IoniconsIcon.Button>
              </View>
              <View style={{ position: "absolute", right: 10, top: 5 }}>
                <Badge>10</Badge>
              </View>
            </View>
          )
        }}
      />
    </HomeStack.Navigator>
  );
};

const CovidStatsStackScreen = ({ navigation }) => {
  return (
    <CovidStatsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3573E1",
        }
      }}
    >
      <CovidStatsStack.Screen 
        name="Home"
        component={ CovidStatsTabScreen } 
        options={{
          title: "COVID STATS",
          headerTitleStyle: {
            color: "#ffffff"
          },
          headerLeft: () => (
            <View>
              <StatusBar backgroundColor="#3573E1" />
              <IoniconsIcon.Button 
                name="menu" 
                size={35} 
                backgroundColor="#3573E1"
                color="#ffffff"
                onPress={() => navigation.openDrawer()}
              ></IoniconsIcon.Button>
            </View>
          )
        }}
      />
    </CovidStatsStack.Navigator>
  );
};

const HealthDetailsStackScreen = ({ navigation }) => {
  return (
    <HealthDetailsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3573E1",
        }
      }}
    >
      <HealthDetailsStack.Screen 
        name="HealthDetails" 
        component={ HealthDetailsNavigation } 
        options={{
          title: "HEALTH DETAILS",
          headerTitleStyle: {
            color: "#ffffff"
          },
          headerLeft: () => (
            <View>
              <StatusBar backgroundColor="#3573E1" />
              <IoniconsIcon.Button 
                name="menu" 
                size={35} 
                backgroundColor="#3573E1"
                color="#ffffff"
                onPress={() => navigation.openDrawer()}
              ></IoniconsIcon.Button>
            </View>
          )
        }}
      />
    </HealthDetailsStack.Navigator>
  );
};

const HealthStatusReportsStackScreen = ({ navigation }) => {
  return (
    <HealthStatusReportsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3573E1",
        }
      }}
    >
      <HealthStatusReportsStack.Screen 
        name="HealthStatusReports"
        component={ HealthStatusReportsTabScreen } 
        options={{
          title: "HEALTH STATUS REPORTS",
          headerTitleStyle: {
            color: "#0B3359"
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
    </HealthStatusReportsStack.Navigator>
  );
};

const HotZonesStackScreen = ({ navigation }) => {
  return (
    <HotZonesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#3573E1",
        }
      }}
    >
      <HotZonesStack.Screen 
        name="HotZones" 
        component={ HotZonesTabScreen } 
        options={{
          title: "HOT ZONES",
          headerTitleStyle: {
            color: "#ffffff"
          },
          headerLeft: () => (
            <View>
              <StatusBar backgroundColor="#3573E1" />
              <IoniconsIcon.Button 
                name="menu" 
                size={35} 
                backgroundColor="#3573E1" 
                color="#ffffff"
                onPress={() => navigation.openDrawer()}
              ></IoniconsIcon.Button>
            </View>
          )
        }}
      />
    </HotZonesStack.Navigator>
  );
};


const BottomTabNavigation = () => {
  return (
    <BottomTabNav.Navigator
      tabBarOptions= {{
        showLabel: false,
        style: {
          backgroundColor: "#1C2A43",
          height: 80,
          position: "absolute",
          left: 10,
          bottom: 10,
          right: 10,
          elevation: 0,
          borderRadius: 15,
          ...styles.bottomNavShadow // destructing the 'bottomNavShadow' styles
        }
      }}
    >
      <BottomTabNav.Screen 
        name="Home" 
        component={ HomeStackScreen } 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignContent: "center", justifyContent: "center" }}>
              <AntDesignIcon 
                name="home" 
                size={35} 
                color={focused ? "#ff0040" : "#CBE4FD"}
                style={{ alignContent: "center", justifyContent: "center" }}
              ></AntDesignIcon>
            </View>
          )
        }}
      />
      <BottomTabNav.Screen 
        name="COVID Stats" 
        component={ CovidStatsStackScreen } 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignContent: "center", justifyContent: "center" }}>
              <FeatherIcon 
                name="bar-chart-2" 
                size={35}
                color={focused ? "#ff0040" : "#CBE4FD"}
                style={{ alignContent: "center", justifyContent: "center" }}
              ></FeatherIcon>
            </View>
          )
        }}
      />
      <BottomTabNav.Screen 
        name="Health Details" 
        component={ HealthDetailsStackScreen } 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignContent: "center", justifyContent: "center" }}>
              <MaterialCommunityIconsIcon 
                name="timeline-text-outline" 
                size={35}
                color={focused ? "#ff0040" : "#CBE4FD"}
                style={{ alignContent: "center", justifyContent: "center" }}
              ></MaterialCommunityIconsIcon>
            </View>
          )
        }}
      />
      <BottomTabNav.Screen 
        name="Health Status Reports" 
        component={ HealthStatusReportsStackScreen } 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignContent: "center", justifyContent: "center" }}>
              <MaterialCommunityIconsIcon 
                name="file-document-outline" 
                size={35}
                color={focused ? "#ff0040" : "#CBE4FD"}
                style={{ alignContent: "center", justifyContent: "center" }}
              ></MaterialCommunityIconsIcon>
            </View>
          )
        }}
      />
      <BottomTabNav.Screen 
        name="Hot Zones" 
        component={ HotZonesStackScreen } 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{ alignContent: "center", justifyContent: "center" }}>
              <MaterialCommunityIconsIcon 
                name="map-marker-remove-outline" 
                size={35}
                color={focused ? "#ff0040" : "#CBE4FD"}
                style={{ alignContent: "center", justifyContent: "center" }}
              ></MaterialCommunityIconsIcon>
            </View>
          )
        }}
      />
    </BottomTabNav.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomNavShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  }
});

export default BottomTabNavigation;
