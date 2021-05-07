import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { Card, Title, Button, Paragraph } from 'react-native-paper';
import LottieView from 'lottie-react-native';

import styles from './health-details-tab.style';
import HealthNewsService from '../../../services/public/health-news-service';
import ErrorMessageBlock from '../../../components/error-message-block/error-message-block';


const loadingSpinnerJSON = require("../../../assets/loading-spinner/loading-spinner.json");

const HealthDetailsTabScreen = ({ navigation }) => {

  const [loadingSpinner, setLoadingSpinner] = useState(true);
  const [errorMessageBox, setErrorMessageBox] = useState(false);
  const [healthNews, setHealthNews] = useState([]);
  
  const retrieveHealthNewsDetails = async () => {
    try {
      const responseHealthNewsDetails = await HealthNewsService
        .getHealthNewsDetails()
        .then(response => {
          setLoadingSpinner(false);
          setHealthNews(response.data.articles);
        });
    } catch (error) {
      setLoadingSpinner(false);
      setErrorMessageBox(true);
      console.log(error);
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setHealthNews([]);
      setErrorMessageBox(false);
      setLoadingSpinner(true);
      retrieveHealthNewsDetails().then(() => {
        console.log(healthNews);
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={[styles.ghdHealthDetails, styles.blockShadow]}>
          <Text style={styles.blockHeading}>
            GHD Health Details
          </Text>
        </View>
        <View style={[styles.publicHealthNews, styles.blockShadow]}>
          <Text style={styles.blockHeading}>
            Public Health News
          </Text>
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
                <ScrollView horizontal={true}
                            showsHorizontalScrollIndicator={false}
                >
                  <View style={styles.healthNewsBlock}>
                    {
                        healthNews.map((listOfHealthNews, key) => {
                          return (
                            <View key={ listOfHealthNews.source.name } key={ listOfHealthNews.source.name }style={styles.healthNewsBlockItem}>
                              <Card style={[styles.healthNewsCard, styles.blockShadow]}>
                                <Card.Cover source={{ uri: listOfHealthNews.urlToImage }} />
                                <Card.Content>
                                  <Title>{ listOfHealthNews.title }</Title>
                                  <Paragraph>{ listOfHealthNews.description }</Paragraph>
                                </Card.Content>
                                <Card.Actions>
                                  <Button onPress={() => navigation.navigate("PublicHealthNews", { newsDetails: listOfHealthNews })}>READ MORE</Button>
                                </Card.Actions>
                              </Card>
                            </View>
                          );
                        })
                      }
                  </View>
                </ScrollView>
            )
          }
        </View>
      </ScrollView>
    </View>
  );
};

export default HealthDetailsTabScreen;
