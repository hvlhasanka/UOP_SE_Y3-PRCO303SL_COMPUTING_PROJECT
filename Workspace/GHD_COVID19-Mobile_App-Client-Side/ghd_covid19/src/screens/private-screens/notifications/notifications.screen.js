/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN - Notifications Screen
 */
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './notifications.style';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.comingSoonBlock}>
        <Text style={styles.comingSoonText}>
          COMING SOON
        </Text>
      </View>
    </View>
  );
};

export default NotificationsScreen;
