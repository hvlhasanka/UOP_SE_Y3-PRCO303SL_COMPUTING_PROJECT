import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './health-details-tab.style';

const HealthDetailsTabScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>
        Health Details Tab Screen
      </Text>
    </View>
  );
};

export default HealthDetailsTabScreen;
