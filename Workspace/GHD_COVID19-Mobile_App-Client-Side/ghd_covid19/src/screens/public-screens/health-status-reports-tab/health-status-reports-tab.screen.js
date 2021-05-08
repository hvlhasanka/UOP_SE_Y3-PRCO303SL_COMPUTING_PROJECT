/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN - Health Status Reports Tab Screen
 */
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './health-status-reports-tab.style';

const HealthStatusReportsTabScreen = () => {
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

export default HealthStatusReportsTabScreen;
