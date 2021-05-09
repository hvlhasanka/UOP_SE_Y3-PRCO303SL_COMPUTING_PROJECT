/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN - Report Screen
 */
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './report.style';

const ReportScreen = () => {
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

export default ReportScreen;
