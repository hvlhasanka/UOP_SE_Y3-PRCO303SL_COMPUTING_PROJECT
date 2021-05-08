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
      <Text style={{ color: 'black' }}>
        Notifications Screen
      </Text>
    </View>
  );
};

export default NotificationsScreen;
