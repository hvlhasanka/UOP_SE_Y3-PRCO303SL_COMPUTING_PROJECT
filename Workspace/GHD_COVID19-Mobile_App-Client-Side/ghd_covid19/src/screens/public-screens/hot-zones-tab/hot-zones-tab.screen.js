/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN - Hot Zones Tab Screen
 */
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './hot-zones-tab.style';

const HotZonesTabScreen = () => {
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

export default HotZonesTabScreen;
