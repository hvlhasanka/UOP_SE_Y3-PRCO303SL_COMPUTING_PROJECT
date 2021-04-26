import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import styles from './home.style';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      
        <View style={styles.headerContent}>
          <TouchableOpacity>
            <Text style={[styles.submitEmergencyHealthReportButton, styles.blockShadow]}>
              SUBMIT EMERGENCY{"\n"}HEALTH STATUS REPORT
            </Text>
          </TouchableOpacity>

          <View style={[styles.countrySituationBlock, styles.blockShadow]}>
            <View>
              <IoniconsIcon 
                name="people-outline" style={styles.situationIcon}>
              </IoniconsIcon>
            </View>
            <View>
              <Text style={styles.situationText}>
                Positive Cases Rising Rapidly
              </Text>
            </View>
          </View>

        </View>

        <View style={styles.floatingBlock}>
          <View style={styles.floatingSection}>
            <Text style={styles.floatingText}>CONTACT TRACING</Text>
            <MaterialCommunityIconsIcon 
              name="contactless-payment" style={styles.floatingIcon}>
            </MaterialCommunityIconsIcon>
          </View>
          <View style={styles.floatingSection}>
            <Text style={styles.floatingText}>PROXIMITY ALERT</Text>
            <FeatherIcon 
              name="check-circle" style={styles.floatingIcon}>
            </FeatherIcon>
          </View>
        </View>
        
        <View style={styles.healthStatusReportBlock}>
          <Text style={styles.blockText}>
            HEALTH STATUS REPORT
          </Text>
        </View>

        <View style={styles.covidStatsBlock}>
          <Text style={styles.blockText}>
            COVID19 Statistics
          </Text>
        </View>
      

    </View>
  );
};

export default HomeScreen;
