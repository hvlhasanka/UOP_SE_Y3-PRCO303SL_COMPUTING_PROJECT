/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN STYLES - Health Details Tab Screen
 */
import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#608CDB"
  },
  ghdHealthDetails: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 310,
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  noGhdHealthDetailsBlock: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#616161",
    backgroundColor: "#D6D6D6"
  },
  noGhdHealthDetailsText: {
    color: "#616161",
    fontSize: 15,
    letterSpacing: 1
  },
  publicHealthNews: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,
    paddingTop: 50,
    paddingBottom: 10,
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    minHeight: 190
  },
  healthNewsBlock: {
    flexDirection: "row",
    marginRight: 20
  },
  blockHeading: {
    fontSize: 18,
    letterSpacing: 1.2,
    marginTop: 10,
    marginLeft: 10,
    position: "absolute",
    top: 5,
    left: 5,
    fontWeight: "bold"
  },
  healthNewsBlockItem: {
    marginLeft: 10,
    marginBottom: 1
  },
  healthNewsCard: {
    width: 260
  },
  loadingSpinnerBlock: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  loadingSpinner: {
    height: 100,
    width: 100
  },
  blockShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  }
});

export default styles;
