import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import styles from './health-details-tab.style';
import HealthNewsService from '../../../services/public/health-news-service';

const HealthDetailsTabScreen = ({ navigation }) => {

  const [healthNews, setHealthNews] = useState([]);

  const retrieveHealthNewsDetails = async () => {
    try {
      const responseLeaseDetails = await HealthNewsService
        .getHealthNewsDetails()
        .then(response => {
          console.log(response.data);
          setHealthNews(response.data.articles);
        });
    } catch (error) {
      console.log(error);
      // TODO: SHOW ERROR MESSAGE
    }
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
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
          <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}>
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
                            <Button onPress={() => {console.log("test");}}>READ MORE</Button>
                          </Card.Actions>
                        </Card>
                      </View>
                    );
                  })
                }
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default HealthDetailsTabScreen;
