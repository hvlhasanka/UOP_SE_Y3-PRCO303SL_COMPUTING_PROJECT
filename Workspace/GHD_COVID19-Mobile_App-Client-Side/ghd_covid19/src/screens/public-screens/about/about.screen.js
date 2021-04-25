import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './about.style';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>
        About Screen
      </Text>
    </View>
  );
};

export default AboutScreen;
