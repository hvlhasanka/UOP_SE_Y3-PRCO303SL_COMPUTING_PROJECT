import React from 'react';
import {
  Text,
  View,
  Image, TouchableOpacity
} from 'react-native';
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from './about.style';

const ghdCovid19Logo = require('../../../assets/images/logo/GHD-COVID19-Logo.png'); 
const nsbmLogo = require('../../../assets/images/about-screen/NSBM-Logo.png'); 
const plymouthUniversityLogo = require('../../../assets/images/about-screen/Plymouth-University-Logo.png'); 


const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.aboutBlock}>
        <View style={styles.imageBlock}>
          <View style={styles.imageTile}>
            <Image source={ghdCovid19Logo} style={styles.ghdCovid19LogoImage} />
          </View>
          <View style={styles.imageTile}>
            <Image source={nsbmLogo} style={styles.nsbmLogoImage} />
          </View>
          <View style={styles.imageTile}>
            <Image source={plymouthUniversityLogo} style={styles.plymouthUniversityLogoImage} />
          </View>
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.textTop}>
            <Text style={styles.textBold}>
              GHD Covid19
            </Text> was developed by University of Plymouth Third Year Student,{"\n"} Mr. H.V.L.Hasanka.
          </Text>
          <Text style={styles.textBottom}>
            Assignment Title: {" "}
            <Text style={styles.textBold}>
              Coursework PRCO303SL - Computing Project
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AboutScreen;
