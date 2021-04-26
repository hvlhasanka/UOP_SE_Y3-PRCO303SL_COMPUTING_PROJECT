import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: "column",
    backgroundColor: "#ededed"
  },
  headerContent: {
    height: "45%",
    width: "100%",
    backgroundColor: "#3573E1"
  },
  submitEmergencyHealthReportButton: {
    backgroundColor: "#E1355D",
    color: "#ffffff",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    fontSize: 20,
    letterSpacing: 1.5,
    fontWeight: "700",
    textAlign: "center",
    justifyContent: "center"
  },
  countrySituationBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: 90,
    backgroundColor: "#083884",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    borderWidth: 4,
    borderColor: "#06285E"
  },
  situationIcon: {
    fontSize: 40,
    color: "#ffffff",
    paddingRight: 20
  },
  situationText: {
    fontSize: 20,
    letterSpacing: 1.5,
    color: "#ffffff",
    textAlign: "center"
  },
  floatingBlock: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    height: 140,
    position: "absolute",
    top: "32%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 15,
    padding: 10,
  },
  floatingSection: {
    width: "50%",
    height: "120%",
    backgroundColor: "#083884",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  floatingText: {
    fontSize: 20,
    letterSpacing: 1.5,
    color: "#ffffff",
    textAlign: "center"
  },
  floatingIcon: {
    fontSize: 60,
    height: 60,
    width: 60,
    color: '#ffffff'
  },
  rippleLoadingSpinner: {
    width: "100%",
    height: "10%",
  },
  healthStatusReportBlock: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    height: 140,
    position: "absolute",
    top: "57%",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10
  },
  blockText: {
    paddingTop: 10,
    paddingLeft: 10,
    fontSize: 15,
    letterSpacing: 1.1
  },
  covidStatsBlock: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    height: 140,
    position: "absolute",
    top: "80%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: 100,
    marginTop: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10
  },
  contentScroll: {
    flex: 1
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
