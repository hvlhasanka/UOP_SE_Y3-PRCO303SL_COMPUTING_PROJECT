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
      <Text style={{ color: 'black' }}>
        Emergency Contact Screen
      </Text>
    </View>
  );
};

export default EmergencyContactScreen;
