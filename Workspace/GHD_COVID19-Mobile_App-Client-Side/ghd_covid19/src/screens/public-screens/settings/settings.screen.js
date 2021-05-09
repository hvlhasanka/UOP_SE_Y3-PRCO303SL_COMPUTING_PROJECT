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
      {/* 
        TODO: Toggle Proximity Alert Feature
      */}
      <Text style={{ color: '#fff' }}>
        Toggle Proximity Alert Feature
      </Text>
      <View style={styles.comingSoonBlock}>
        <Text style={styles.comingSoonText}>
          COMING SOON
        </Text>
      </View>
    </View>
  );
};

export default SettingsScreen;
