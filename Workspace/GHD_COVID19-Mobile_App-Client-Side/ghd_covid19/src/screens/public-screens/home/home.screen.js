import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert
} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import styles from './home.style';


const HomeScreen = () => {

  // 'Coming Soon' Alert Box Implementation
  const comingSoonAlertBox = () =>
    Alert.alert(
      "ALERT",
      "Feature Coming Soon",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { 
          text: "OK", onPress: () => console.log("OK Pressed") 
        }
      ]
    );

  return (
    <View style={styles.container}>
      
      <ScrollView>
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

        <View style={styles.floatingBlock}>
          <TouchableOpacity onPress={() => comingSoonAlertBox()} style={[styles.floatingSection, styles.blockShadow]}>
            <Text style={styles.floatingText}>CONTACT TRACING</Text>
            <MaterialCommunityIconsIcon 
              name="contactless-payment" style={styles.floatingIcon}>
            </MaterialCommunityIconsIcon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => comingSoonAlertBox()} style={[styles.floatingSection, styles.blockShadow]}>
            <Text style={styles.floatingText}>PROXIMITY ALERT</Text>
            <FeatherIcon 
              name="check-circle" style={styles.floatingIcon}>
            </FeatherIcon>
          </TouchableOpacity>
        </View>
        
        <View style={[styles.healthStatusReportBlock, styles.blockShadow]}>
          <Text style={styles.blockText}>
            HEALTH STATUS REPORT
          </Text>
        </View>

        <View style={[styles.covidStatsBlock, styles.blockShadow]}>
          <Text style={styles.blockText}>
            LOCAL COVID19 STATISTICS
          </Text>
          <ScrollView horizontal={true}
                      showsHorizontalScrollIndicator={false}
          >
            <View style={styles.covidStatsTileBlock}>
              <View style={[styles.covidStatsTile, {
                backgroundColor: "#1687a7"
              }]}>
                <View style={styles.covidStatsTileHeader}>
                  <Text style={styles.covidStatsTileValue}>
                    22
                  </Text>
                </View>
                <View style={styles.covidStatsTileFooter}>
                  <Text style={styles.covidStatsTileHeading}>
                    ACTIVE CASES
                  </Text>
                </View>
              </View>
              <View style={[styles.covidStatsTile, {
                backgroundColor: "#1687a7"
              }]}>
                <View style={styles.covidStatsTileHeader}>
                  <Text style={styles.covidStatsTileValue}>
                    22
                  </Text>
                </View>
                <View style={styles.covidStatsTileFooter}>
                  <Text style={styles.covidStatsTileHeading}>
                    RECOVERED CASES
                  </Text>
                </View>
              </View>
              <View style={[styles.covidStatsTile, {
                backgroundColor: "#1687a7"
              }]}>
                <View style={styles.covidStatsTileHeader}>
                  <Text style={styles.covidStatsTileValue}>
                    22
                  </Text>
                </View>
                <View style={styles.covidStatsTileFooter}>
                  <Text style={styles.covidStatsTileHeading}>
                    NO OF DEATHS
                  </Text>
                </View>
              </View>
              <View style={[styles.covidStatsTile, {
                backgroundColor: "#1687a7"
              }]}>
                <View style={styles.covidStatsTileHeader}>
                  <Text style={styles.covidStatsTileValue}>
                    22
                  </Text>
                </View>
                <View style={styles.covidStatsTileFooter}>
                  <Text style={styles.covidStatsTileHeading}>
                    TOTAL COVID CASES
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      
    </View>
  );
};

export default HomeScreen;
