/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN - Public Health News Screen
 */
import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { Button, Title, Card, Paragraph } from 'react-native-paper';

import styles from './public-health-news.style';

const PublicHealthNewsScreen = (props) => {

  const { route } = props;
  const { newsDetails } = route.params

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.backButtonBlock}>
          <IoniconsIcon.Button 
            name="arrow-back" 
            width={50}
            size={25} 
            backgroundColor="#1C2A43" 
            color="#ffffff"
            borderRadius={30}
            paddingLeft={10}
            onPress={() => props.navigation.goBack()}
          ></IoniconsIcon.Button>
        </TouchableOpacity>
        <View style={styles.newsCard}>
          <Card style={[styles.newsCardContent, styles.blockShadow]}>
            <Card.Cover source={{ uri: newsDetails.urlToImage }} />
            <Card.Content>
              <Title>{ newsDetails.title }</Title>
              <Paragraph>{ newsDetails.content }</Paragraph>
              <Paragraph>Source: { newsDetails.source.name }</Paragraph>
              <Paragraph>Published At:{" "}
                {new Date(newsDetails.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} {" | "}
                {new Date(newsDetails.publishedAt).getDate()}{ " / " }{(new Date(newsDetails.publishedAt).getMonth() + 1)}{ " / " }{new Date(newsDetails.publishedAt).getFullYear()}
              </Paragraph>
              <Button icon="link" mode="contained" 
                onPress={() => Linking.openURL( newsDetails.url )} 
                style={styles.linkButton}
              >
                GO TO SOURCE
              </Button>
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default PublicHealthNewsScreen;
