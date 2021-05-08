import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './covid-stats-tab.style';
import CovidStatsService from '../../../services/public/covid-stats-service';
import ErrorMessageBlock from '../../../components/error-message-block/error-message-block';

const loadingSpinnerJSON = require("../../../assets/loading-spinner/loading-spinner.json");


const CovidStatsTabScreen = ({ navigation }) => {

  const [loadingSpinner, setLoadingSpinner] = useState(true);
  const [errorMessageBox, setErrorMessageBox] = useState(false);
  const [covid19Stats, setCovid19Stats] = useState();

  const retrieveLatestCovid19Stats = async () => {
    try {
      const responseCovid19Stats = await CovidStatsService
        .getLatestCovid19Stats()
        .then(response => {
          setLoadingSpinner(false);
          setCovid19Stats(response);
        });
    } catch (error) {
      setLoadingSpinner(false);
      setErrorMessageBox(true);
      console.log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setCovid19Stats();
      setLoadingSpinner(true);
      setErrorMessageBox(false);
      retrieveLatestCovid19Stats().then(() => {
        console.log(covid19Stats);
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      
      <ScrollView>
      <View style={[styles.updatedPeriodBlock, styles.blockShadow]}>
        {
          errorMessageBox === true ? 
            <ErrorMessageBlock />
          :
          <Text style={styles.updatedPeriodText}>
            UPDATED AT: 2021-05-08 04:51:47 {/*covid19Stats.data.update_date_time*/}
          </Text>
        }
      </View>
      <View style={[styles.localStatsBlock, styles.blockShadow]}>
        <Text style={styles.blockHeading}>Local Statistics</Text>
        <View style={styles.tileBlock}>
          {
            loadingSpinner === true ?
              <View style={styles.loadingSpinnerBlock}>
                <LottieView source={ loadingSpinnerJSON } autoPlay loop style={styles.loadingSpinner} />
              </View>
            :
              (
                errorMessageBox === true ? 
                  <ErrorMessageBlock />
                :
                  <View style={styles.innerTileBlock}>
                    <View style={styles.topTileSection}>
                      <View style={[styles.tile, { backgroundColor: "#00a8cc" }]}>
                        <View style={styles.tileHeader}>
                          <Text style={styles.tileValue}>
                            18811
                          </Text>
                        </View>
                        <View style={styles.tileFooter}>
                          <Text style={styles.tileHeading}>
                            ACTIVE CASES
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tile, { backgroundColor: "#00a8cc" }]}>
                        <View style={styles.tileHeader}>
                          <Text style={styles.tileValue}>
                            101763
                          </Text>
                        </View>
                        <View style={styles.tileFooter}>
                          <Text style={styles.tileHeading}>
                            RECOVERED CASES
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.bottomTileSection}>
                      <View style={[styles.tile, { backgroundColor: "#00a8cc" }]}>
                        <View style={styles.tileHeader}>
                          <Text style={styles.tileValue}>
                            764
                          </Text>
                        </View>
                        <View style={styles.tileFooter}>
                          <Text style={styles.tileHeading}>
                            NO OF DEATHS
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tile, { backgroundColor: "#00a8cc" }]}>
                        <View style={styles.tileHeader}>
                          <Text style={styles.tileValue}>
                            121338
                          </Text>
                        </View>
                        <View style={styles.tileFooter}>
                          <Text style={styles.tileHeading}>
                            TOTAL COVID CASES
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
              )
          }
        </View>
      </View>
      <View style={[styles.globalStatsBlock, styles.blockShadow]}>
        <Text style={styles.blockHeading}>Global Statistics</Text>
        <View style={styles.tileBlock}>
          {
            loadingSpinner === true ?
              <View style={styles.loadingSpinnerBlock}>
                <LottieView source={ loadingSpinnerJSON } autoPlay loop style={styles.loadingSpinner} />
              </View>
            :
              (
                errorMessageBox === true ? 
                  <ErrorMessageBlock />
                :
                  <View style={styles.innerTileBlock}>
                    <View style={styles.topTileSection}>
                      <View style={[styles.tile, { backgroundColor: "#0c7b93" }]}>
                        <View style={styles.tileHeader}>
                          <Text style={styles.tileValue}>
                            830879
                          </Text>
                        </View>
                        <View style={styles.tileFooter}>
                          <Text style={styles.tileHeading}>
                            NEW CASES
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tile, { backgroundColor: "#0c7b93" }]}>
                        <View style={styles.tileHeader}>
                          <Text style={styles.tileValue}>
                            127056527
                          </Text>
                        </View>
                        <View style={styles.tileFooter}>
                          <Text style={styles.tileHeading}>
                            RECOVERED CASES
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.bottomTileSection}>
                      <View style={[styles.tile, { backgroundColor: "#0c7b93" }]}>
                        <View style={styles.tileHeader}>
                          <Text style={styles.tileValue}>
                            3150334
                          </Text>
                        </View>
                        <View style={styles.tileFooter}>
                          <Text style={styles.tileHeading}>
                            NO OF DEATHS
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tile, { backgroundColor: "#0c7b93" }]}>
                        <View style={styles.tileHeader}>
                          <Text style={styles.tileValue}>
                            149377480
                          </Text>
                        </View>
                        <View style={styles.tileFooter}>
                          <Text style={styles.tileHeading}>
                            TOTAL COVID CASES
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
              )
          }
        </View>
      </View>
      </ScrollView>

    </View>
  );
};

export default CovidStatsTabScreen;
