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
    backgroundColor: "#D7F7FF",
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center'
  },
  updatedPeriodText: {
    fontSize: 15,
    letterSpacing: 0.8,
    color: "#064E60"
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
    marginTop: 35,
    flex: 1,
    flexDirection: "column"
  },
  innerTileBlock: {
    flex: 1,
    flexDirection: "column"
  },
  topTileSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomTileSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  tile: {
    width: "47%",
    height: 95,
    backgroundColor: "#ffffff",
    marginHorizontal: 5,
    borderRadius: 5,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12
  },
  tileHeader: {
    height: "50%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  tileFooter: {
    height: "50%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  tileValue: {
    fontSize: 20,
    letterSpacing: 1,
    color: "#ffffff"
  },
  tileHeading: {
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ffffff"
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
