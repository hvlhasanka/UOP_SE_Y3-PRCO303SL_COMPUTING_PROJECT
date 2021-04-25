import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import styles from './profile.style';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'black' }}>
        Profile Screen
      </Text>
    </View>
  );
};

export default ProfileScreen;
