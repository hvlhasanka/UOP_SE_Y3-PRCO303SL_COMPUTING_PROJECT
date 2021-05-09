/**
 * GHD COVID19 - React Native Mobile App
 * SCREEN STYLES - Sign Up Screen One
 */
import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff"
  },
  signUpHeader: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeSignUpButton: {
    width: 50,
    height: 50,
    borderRadius: 23,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 15,
    left: 10,
    borderWidth: 2,
    borderColor: "#1B31C3"
  },
  signUpFooter: {
    flex: 18,
    backgroundColor: "#1B31C3",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  signUpFooterHeading: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 10,
    letterSpacing: 2
  },
  textBoxHeading: {
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1.5,
    marginTop: 10
  },
  firstMiddleNameContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  firstNameBlock: {
    width: "48.5%",
    marginRight: 10
  },
  middleNameBlock: {
    width: "48.5%"
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#5F44F6",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  orText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "right",
    marginTop: 5,
    marginRight: 20,
    top: 15
  },
  continueButton: {
    backgroundColor: "#3092FD",
    borderRadius: 10,
    marginTop: "5%"
  },
  blockShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  }
});

export default styles;
