/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN STYLES - About Screen
 */
import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#11406C"
  },
  backIconBlock: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 0,
    left: 0,
    margin: "1%",
    width: 50,
    height: 50
  },
  backIcon: {
    color: "#ffffff",
    width: 50,
    height: 50,
    fontSize: 40
  },
  /* ABOUT BLOCK */
  aboutBlock: {
    minWidth: "90%",
    minHeight: "40%",
    margin: "5%",
    backgroundColor: "#EEEEEE",
    borderRadius: 20,
    padding: 5
  },
  /* IMAGE BLOCK */
  imageBlock: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2
  },
  imageTile: {
    width: 100,
    height: 100,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginLeft: "2%",
    alignItems: "center",
    justifyContent: "center"
  },
  ghdCovid19LogoImage: {
    width: 100,
    height: 100,
    borderRadius: 20
  },
  nsbmLogoImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 20
  },
  plymouthUniversityLogoImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    borderRadius: 20
  },
  /* TEXT BLOCK */
  textBlock: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  textTop: {
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  textBottom: {
    paddingLeft: 1,
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  textBold: {
    fontWeight: "bold"
  }
});

export default styles;
