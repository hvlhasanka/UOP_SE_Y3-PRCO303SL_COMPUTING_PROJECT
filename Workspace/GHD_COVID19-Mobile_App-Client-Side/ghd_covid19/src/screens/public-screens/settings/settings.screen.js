/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN - Settings Screen
 */
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './settings.style';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>
        Settings Screen {"\n"}
        Toggle Proximity Alert
      </Text>
    </View>
  );
};

export default SettingsScreen;
