/**
 * GHD COVID19 - React Native Mobile App
 * NAVIGATION CONTENT - Side Drawer Navigation Content
 */
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import {
  Title,
  Avatar,
  Caption,
  Drawer,
  Text
} from 'react-native-paper';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIconsIcon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesignIconsIcon from 'react-native-vector-icons/AntDesign';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import OcticonsIcon from 'react-native-vector-icons/Octicons';

const ProfileIcon = require("../assets/images/side-drawer-navigation/profile-icon.png");

const SideDrawerContent = (props) => {
  return (
    <View style={styles.sideDrawerContainer}>

      <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
        <View style={styles.userDetailsContainer}>
          <Avatar.Image 
            source={ProfileIcon}
            size={55}
          />
          <View style={styles.userDetailsBlock}>
            <Title style={styles.userName}>
              Lucas Anderson
            </Title>
            <Caption style={styles.userEmailAddress}>
              lucas.anderson@gmail.com
            </Caption>
          </View>
        </View>
      </TouchableOpacity>

      <DrawerContentScrollView {...props}>
        <View style={styles.sideDrawerContent}>
          <View>

            <Drawer.Section style={[ styles.drawerButtonsSection]}>
              <DrawerItem 
                icon={({ color, size }) => {
                  return (
                    <AntDesignIconsIcon 
                      name="home"
                      color={ color }
                      size={ size }
                    />
                  );
                }}
                label={({ color }) => {
                  return (
                    <Text style={{ 
                      color: { color }, 
                      textAlign: "center", 
                      letterSpacing: 1.2, 
                      fontSize: 16, 
                      fontWeight: "bold" 
                    }}>
                      HOME
                    </Text>
                  );
                }}
                inactiveBackgroundColor="#D9E7FF"
                inactiveTintColor="#000000"
                style={{ borderRadius: 10 }}
                onPress={() => props.navigation.navigate('Home')}
              />
              <DrawerItem 
                icon={({ color, size }) => {
                  return (
                    <IoniconsIcon 
                      name="notifications-outline"
                      color={ color }
                      size={ size }
                    />
                  );
                }}
                label={({ color }) => {
                  return (
                    <Text style={{ 
                      color: { color }, 
                      textAlign: "center", 
                      letterSpacing: 1.2, 
                      fontSize: 16, 
                      fontWeight: "bold" 
                    }}>
                      NOTIFICATIONS
                    </Text>
                  );
                }}
                inactiveBackgroundColor="#D9E7FF"
                inactiveTintColor="#000000"
                style={{ borderRadius: 10 }}
                onPress={() => props.navigation.navigate('Notifications')}
              />
              <DrawerItem 
                icon={({ color, size }) => {
                  return (
                    <IoniconsIcon 
                      name="person-outline"
                      color={ color }
                      size={ size }
                    />
                  );
                }}
                label={({ color }) => {
                  return (
                    <Text style={{ 
                      color: { color }, 
                      textAlign: "center", 
                      letterSpacing: 1.2, 
                      fontSize: 16, 
                      fontWeight: "bold" 
                    }}>
                      PROFILE
                    </Text>
                  );
                }}
                inactiveBackgroundColor="#D9E7FF"
                inactiveTintColor="#000000"
                style={{ borderRadius: 10 }}
                onPress={() => props.navigation.navigate('Profile')}
              />
              <DrawerItem 
                icon={({ color, size }) => {
                  return (
                    <MaterialIconsIcon 
                      name="connect-without-contact"
                      color={ color }
                      size={ size }
                    />
                  );
                }}
                label={({ color }) => {
                  return (
                    <Text style={{ 
                      color: { color }, 
                      textAlign: "center", 
                      letterSpacing: 1.2, 
                      fontSize: 16, 
                      fontWeight: "bold" 
                    }}>
                      EMERGENCY CONTACT
                    </Text>
                  );
                }}
                inactiveBackgroundColor="#D9E7FF"
                inactiveTintColor="#000000"
                style={{ borderRadius: 10 }}
                onPress={() => props.navigation.navigate('EmergencyContact')}
              />
              <DrawerItem 
                icon={({ color, size }) => {
                  return (
                    <OcticonsIcon 
                      name="report"
                      color={ color }
                      size={ size }
                    />
                  );
                }}
                label={({ color }) => {
                  return (
                    <Text style={{ 
                      color: { color }, 
                      textAlign: "center", 
                      letterSpacing: 1.2, 
                      fontSize: 16, 
                      fontWeight: "bold" 
                    }}>
                      REPORT
                    </Text>
                  );
                }}
                inactiveBackgroundColor="#D9E7FF"
                inactiveTintColor="#000000"
                style={{ borderRadius: 10 }}
                onPress={() => props.navigation.navigate('Report')}
              />
              <DrawerItem 
                icon={({ color, size }) => {
                  return (
                    <IoniconsIcon 
                      name="help-outline"
                      color={ color }
                      size={ size }
                    />
                  );
                }}
                label={({ color }) => {
                  return (
                    <Text style={{ 
                      color: { color }, 
                      textAlign: "center", 
                      letterSpacing: 1.2, 
                      fontSize: 16, 
                      fontWeight: "bold" 
                    }}>
                      HELP
                    </Text>
                  );
                }}
                inactiveBackgroundColor="#D9E7FF"
                inactiveTintColor="#000000"
                style={{ borderRadius: 10 }}
                onPress={() => props.navigation.navigate('Help')}
              />
              <DrawerItem 
                icon={({ color, size }) => {
                  return (
                    <OcticonsIcon 
                      name="settings"
                      color={ color }
                      size={ size }
                    />
                  );
                }}
                label={({ color }) => {
                  return (
                    <Text style={{ 
                      color: { color }, 
                      textAlign: "center", 
                      letterSpacing: 1.2, 
                      fontSize: 16, 
                      fontWeight: "bold" 
                    }}>
                      SETTINGS
                    </Text>
                  );
                }}
                inactiveBackgroundColor="#D9E7FF"
                inactiveTintColor="#000000"
                style={{ borderRadius: 10 }}
                onPress={() => props.navigation.navigate('Settings')}
              />
              <DrawerItem 
                icon={({ color, size }) => {
                  return (
                    <IoniconsIcon 
                      name="information-circle-outline"
                      color={ color }
                      size={ size }
                    />
                  );
                }}
                label={({ color }) => {
                  return (
                    <Text style={{ 
                      color: { color }, 
                      textAlign: "center", 
                      letterSpacing: 1.2, 
                      fontSize: 16, 
                      fontWeight: "bold" 
                    }}>
                      ABOUT
                    </Text>
                  );
                }}
                inactiveBackgroundColor="#D9E7FF"
                inactiveTintColor="#000000"
                activeBackgroundColor="#000"
                style={{ borderRadius: 10 }}
                onPress={() => props.navigation.navigate('About')}
              />
            </Drawer.Section>
          </View>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerButtonSection}>
        <DrawerItem 
          icon={({ color, size }) => {
            return (
              <SimpleLineIconsIcon 
                name="logout"
                color={ color }
                size={ size }
              />
            );
          }}
          label={({ color }) => {
            return (
              <Text style={{ 
                color: { color }, 
                textAlign: "center", 
                letterSpacing: 1.2, 
                fontSize: 16, 
                fontWeight: "bold" 
              }}>
                SIGN OUT
              </Text>
            );
          }}
          inactiveBackgroundColor="#FFD8D8"
          inactiveTintColor="#000000"
          style={{ borderRadius: 10 }}
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  sideDrawerContainer: {
    flex: 1,
    backgroundColor: "#06193D"
  },
  sideDrawerContent: {
    flex: 1
  },
  userDetailsContainer: {
    flexDirection: "row",
    borderRadius: 30,
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    backgroundColor: "#E1EDFF",
    padding: 10
  },
  userDetailsBlock: {
    flexDirection: "column", 
    marginLeft: 10, 
    marginRight: 55
  },
  userName: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  userEmailAddress: {
    fontSize: 14,
    lineHeight: 14,
  },
  drawerButtonsSection: {
    marginTop: 10
  },
  bottomDrawerButtonSection: {
    marginBottom: 15
  }
});

export default SideDrawerContent;
