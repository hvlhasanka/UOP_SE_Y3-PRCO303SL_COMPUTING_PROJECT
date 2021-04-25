import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './login.style';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>
        Login Screen
      </Text>
    </View>
  );
};

export default LoginScreen;
