import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './covid-stats-tab.style';

const CovidStatsTabScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>
        Covid Stats Tab Screen
      </Text>
    </View>
  );
};

export default CovidStatsTabScreen;
