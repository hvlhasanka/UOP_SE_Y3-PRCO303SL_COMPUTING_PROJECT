/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN STYLES - Hot Zones Tab Screen
 */
import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#608CDB"
  },
  comingSoonBlock: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#13497D",
    backgroundColor: "#256FB5"
  },
  comingSoonText: {
    color: "#fff",
    fontSize: 15,
    letterSpacing: 1
  }
});

export default styles;
