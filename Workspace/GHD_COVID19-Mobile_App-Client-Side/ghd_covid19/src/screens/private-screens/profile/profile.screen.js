import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from './profile.style';

const userIcon = require('../../../assets/images/profile-screen/user-icon.png'); 


const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileBlock}>
        <View style={styles.userBannerBlock}>
          <View style={styles.profileIconBlock}>
            <Image source={userIcon} style={styles.userIcon} />
          </View>
          <View style={styles.greetingTextBlock}>
            <Text style={styles.greetingText}>
              Lucas {"\n"}Anderson
            </Text>
          </View>
        </View>
        <ScrollView style={styles.userDetailsBlock}>
          <Text style={styles.userDetailsHeading}>
            Age Group
          </Text>
          <Text style={styles.userDetails}>
            20 - 15
          </Text>
        </ScrollView>
        <View style={styles.updateUserDetailsButtonBlock}>
          <TouchableOpacity 
            onPress={() => {}}>
            <View style={styles.changePasswordButton}>
              <View>
                <Text style={styles.text}>CHANGE PASSWORD</Text>
              </View>
              <View>
                <MaterialCommunityIconsIcon 
                  name="form-textbox-password" style={styles.icon}>
                </MaterialCommunityIconsIcon>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {}}>
            <View style={styles.updateAccountDetailsButton}>
              <View>
                <MaterialCommunityIconsIcon 
                  name="account-edit-outline" style={styles.icon}>
                </MaterialCommunityIconsIcon>
              </View>
              <View>
                <Text style={styles.text}>UPDATE DETAILS</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.logoutButtonBlock}>
          <TouchableOpacity 
            onPress={() => {}}>
            <View style={styles.logoutButton}>
              <View>
                <Text style={styles.text}>LOGOUT</Text>
              </View>
              <View>
                <MaterialCommunityIconsIcon 
                  name="account-arrow-right-outline" style={styles.icon}>
                </MaterialCommunityIconsIcon>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
