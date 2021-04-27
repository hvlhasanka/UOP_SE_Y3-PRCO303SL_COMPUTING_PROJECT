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
    height: 250,
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10
  },
  publicHealthNews: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100,
    height: 250,
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 10
  },
  blockHeading: {
    fontSize: 18,
    letterSpacing: 1.2,
    marginTop: 10,
    marginLeft: 10
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
