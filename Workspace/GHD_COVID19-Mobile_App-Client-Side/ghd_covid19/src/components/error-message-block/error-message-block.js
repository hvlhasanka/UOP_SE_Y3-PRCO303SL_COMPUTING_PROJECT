/**
 * GHD COVID19 - React Native Mobile App
 * COMPONENT - Error Message Block Component
 */
import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './error-message-block.style';

const ErrorMessageBlock = () => {
  return (
    <View style={styles.loadErrorBlock}>
      <MaterialIconsIcon 
          name="error-outline" 
          size={35} 
          color="#FB3151"
          onPress={() => navigation.openDrawer()}
      ></MaterialIconsIcon>
      <Text style={styles.loadErrorText}>
        ERROR: Unable to load
      </Text>
    </View> 
  );
};

export default ErrorMessageBlock;
