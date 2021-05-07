import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './contact-tracing.style';

const ContactTracingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>
        Contact Tracing Screen
      </Text>
    </View>
  );
};

export default ContactTracingScreen;
