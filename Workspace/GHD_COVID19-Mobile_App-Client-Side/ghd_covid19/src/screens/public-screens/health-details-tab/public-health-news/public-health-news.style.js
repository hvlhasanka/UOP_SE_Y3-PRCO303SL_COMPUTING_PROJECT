import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#608CDB"
  },
  backButtonBlock: {
    position: "absolute",
    top: 20,
    left: 10
  },
  newsCard: {
    margin: 10,
    marginTop: 70,
    marginBottom: 110
  },
  newsCardContent: {
    position: "relative"
  },
  linkButton: {
    marginTop: 20,
    backgroundColor: "#1C8189"
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
