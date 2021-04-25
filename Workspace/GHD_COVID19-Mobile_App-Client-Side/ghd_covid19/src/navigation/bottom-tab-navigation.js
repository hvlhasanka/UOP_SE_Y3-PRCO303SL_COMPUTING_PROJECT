import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/public-screens/home/home.screen';
import CovidStatsTabScreen from '../screens/public-screens/covid-stats-tab/covid-stats-tab.screen';
import HealthDetailsTabScreen from '../screens/public-screens/health-details-tab/health-details-tab.screen';
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
          backgroundColor: "#ededed"
        }
      }}
    >
      <HomeStack.Screen 
        name="Home" 
        component={ HomeScreen } 
        options={{
          title: "HOME",
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
    </HomeStack.Navigator>
  );
};

const CovidStatsStackScreen = ({ navigation }) => {
  return (
    <CovidStatsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ededed"
        }
      }}
    >
      <CovidStatsStack.Screen 
        name="Home" 
        component={ CovidStatsTabScreen } 
        options={{
          title: "COVID STATS",
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
    </CovidStatsStack.Navigator>
  );
};

const HealthDetailsStackScreen = ({ navigation }) => {
  return (
    <HealthDetailsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ededed"
        }
      }}
    >
      <HealthDetailsStack.Screen 
        name="HealthDetails" 
        component={ HealthDetailsTabScreen } 
        options={{
          title: "HEALTH DETAILS",
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
    </HealthDetailsStack.Navigator>
  );
};

const HealthStatusReportsStackScreen = ({ navigation }) => {
  return (
    <HealthStatusReportsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ededed"
        }
      }}
    >
      <HealthStatusReportsStack.Screen 
        name="HealthStatusReports" 
        component={ HealthStatusReportsTabScreen } 
        options={{
          title: "HEALTH STATUS REPORTS",
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
    </HealthStatusReportsStack.Navigator>
  );
};

const HotZonesStackScreen = ({ navigation }) => {
  return (
    <HotZonesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ededed"
        }
      }}
    >
      <HotZonesStack.Screen 
        name="HotZones" 
        component={ HotZonesTabScreen } 
        options={{
          title: "HOT ZONES",
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
