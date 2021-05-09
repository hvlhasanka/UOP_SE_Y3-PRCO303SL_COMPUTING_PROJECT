/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN - Emergency Contact Screen
 */
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './emergency-contact.style';

const EmergencyContactScreen = () => {
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

export default EmergencyContactScreen;
