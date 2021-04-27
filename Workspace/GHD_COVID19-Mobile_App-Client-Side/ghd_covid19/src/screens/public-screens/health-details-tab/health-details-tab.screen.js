import React from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import styles from './health-details-tab.style';

const HealthDetailsTabScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.ghdHealthDetails, styles.blockShadow]}>
          <Text style={styles.blockHeading}>
            GHD Health Details
          </Text>
        </View>
        <View style={[styles.publicHealthNews, styles.blockShadow]}>
          <Text style={styles.blockHeading}>
            Public Health News
          </Text>
        </View>

      </ScrollView>
    </View>
  );
};

export default HealthDetailsTabScreen;
