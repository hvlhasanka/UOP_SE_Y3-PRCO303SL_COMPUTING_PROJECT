/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN - Home Screen
 */
import React, { useState } from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import { Snackbar } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import styles from './home.style';

const contactTracingRippleJSON = require("../../../assets/loading-spinner/home-screen/contact-tracing-ripple.json");
const proximityAlertRippleJSON = require("../../../assets/loading-spinner/home-screen/proximity-alert-ripple.json");


const HomeScreen = () => {

  // 'Coming Soon' Snackbar Implementation
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const onEnableSnackBar = () => {
    setSnackBarVisible(!snackBarVisible);
  }
  const onCloseSnackBar = () => {
    setSnackBarVisible(false);
  }

  return (
    <View style={styles.container}>
      
      <ScrollView>
        <TouchableOpacity onPress={() => onEnableSnackBar()}>
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
          <TouchableOpacity onPress={() => onEnableSnackBar()} style={[styles.floatingSection, styles.blockShadow]}>
            <View style={styles.floatingBlockHeader}>
              <Text style={styles.floatingText}>
                CONTACT TRACING
              </Text>
            </View>
            <View style={styles.floatingBlockFooter}>
              <LottieView source={ contactTracingRippleJSON } autoPlay loop style={styles.loadingSpinner} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onEnableSnackBar()} style={[styles.floatingSection, styles.blockShadow]}>
            <View style={styles.floatingBlockHeader}>
              <Text style={styles.floatingText}>
                PROXIMITY ALERT
              </Text>
            </View>
            <View style={styles.floatingBlockFooter}>
              <LottieView source={ proximityAlertRippleJSON } autoPlay loop style={styles.loadingSpinner} />
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={[styles.healthStatusReportBlock, styles.blockShadow]}>
          <Text style={styles.healthStatusReportHeading}>
            HEALTH STATUS REPORT
          </Text>
          <View style={styles.healthStatusReportStatusBlock}>
            <Text style={styles.healthStatusReportStatusText}>
              NO REPORT SUBMITTED
            </Text>
          </View>
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
                    18811
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
                    101763
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
                    764
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
                    121338
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
      
      <Snackbar
        visible={snackBarVisible}
        onDismiss={onCloseSnackBar}
        duration={3000}
        style={{ marginBottom: "30%", backgroundColor: "#0A6869" }}
        action={{
          label: 'CLOSE',
          onPress: () => {
            onCloseSnackBar()
          },
        }}>
        Feature Coming Soon
      </Snackbar>

    </View>
  );
};

export default HomeScreen;
