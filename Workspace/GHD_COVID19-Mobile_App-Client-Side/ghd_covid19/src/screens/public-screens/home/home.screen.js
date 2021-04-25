import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './home.style';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>
        Home Screen
      </Text>
    </View>
  );
};

export default HomeScreen;
