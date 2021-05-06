import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from './covid-stats-tab.style';
import CovidStatsService from '../../../services/public/covid-stats-service';


const CovidStatsTabScreen = ({ navigation }) => {

  const [covid19Stats, setCovid19Stats] = useState();
  console.log('covid19Stats');
  const retrieveLatestCovid19Stats = async () => {
    try {
      const responseCovid19Stats = await CovidStatsService
        .getLatestCovid19Stats()
        .then(response => {
          setCovid19Stats(response.data);
        });
    } catch (error) {
      console.log(error);
      // TODO: SHOW LOAD ERROR MESSAGE
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      retrieveLatestCovid19Stats().then(() => {
        // AFTER RETRIEVING API DATA
        console.log(covid19Stats.data);
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      
      <ScrollView>
      <View style={[styles.updatedPeriodBlock, styles.blockShadow]}>
        <Text>UPDATED AT:</Text>
      </View>
      <View style={[styles.localStatsBlock, styles.blockShadow]}>
        <Text style={styles.blockHeading}>Local Stats</Text>
        <View style={styles.tileBlock}>

        </View>
      </View>
      <View style={[styles.globalStatsBlock, styles.blockShadow]}>
        <Text style={styles.blockHeading}>Global Stats</Text>
        <View style={styles.tileBlock}>
          
        </View>
      </View>
      </ScrollView>

    </View>
  );
};

export default CovidStatsTabScreen;
