/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN - Proximity Alert Screen
 */
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './proximity-alert.style';

const ProximityAlertScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>
        Proximity Alert Screen
      </Text>
    </View>
  );
};

export default ProximityAlertScreen;
