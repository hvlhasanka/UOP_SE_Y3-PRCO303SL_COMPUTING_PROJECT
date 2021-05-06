import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#608CDB"
  },
  updatedPeriodBlock: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'
  },
  localStatsBlock: {
    height: 250,
    backgroundColor: "#fff",
    marginBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  globalStatsBlock: {
    height: 250,
    backgroundColor: "#fff",
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 110,
    borderRadius: 10
  },
  blockHeading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.7,
    position: "absolute",
    top: 10,
    left: 19
  },
  tileBlock: {
    width: "92%",
    height: "80%",
    margin: 10,
    backgroundColor: "#ccc",
    marginTop: 35
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
