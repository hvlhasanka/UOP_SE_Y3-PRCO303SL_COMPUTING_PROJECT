import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './help.style';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>
        Help Screen
      </Text>
    </View>
  );
};

export default HelpScreen;
