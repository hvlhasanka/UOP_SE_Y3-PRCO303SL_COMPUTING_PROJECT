/**
 * GHD COVID19 - React Native Mobile App
 * COMPONENT STYLES - Error Message Block Component
 */
import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  loadErrorBlock: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: "#FB3151",
    backgroundColor: "#FFEBED"
  },
  loadErrorText: {
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#FB3151"
  },
});

export default styles;
