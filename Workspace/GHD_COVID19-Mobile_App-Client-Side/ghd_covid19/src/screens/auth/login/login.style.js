import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: "#fff"
  },
  loginHeader: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeLoginButton: {
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
    borderColor: "#4E3AC2"
  },
  loginCoverImage: {
    width: "60%",
    resizeMode: "contain"
  },
  loginFooter: {
    flex: 3,
    backgroundColor: "#4E3AC2",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  loginFooterHeading: {
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
  formContainer: {
    flexDirection: "row"
  },
  formInputRow: {
    marginTop: 10,
    marginBottom: 10,
  },
  inputLeftIcon: {
    position: "absolute",
    top: 15,
    left: 10
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#5F44F6",
    borderRadius: 10,
    paddingLeft: 40,
    paddingRight: 40
  },
  inputRightIcon: {
    position: "absolute",
    right: 10,
    top:15
  },
  forgotPasswordBlock: {
    width: "55%",
    height: 30,
    backgroundColor: "#5039D7",
    borderRadius: 20,
    position: "absolute",
    bottom: 0,
    right: 0,
    top: 60
  },
  forgotPasswordText: {
    fontSize: 14,
    letterSpacing: 1,
    color: "#fff",
    textAlign: "center",
    paddingTop: 5,
    fontWeight: "bold"
  },
  loginButton: {
    backgroundColor: "#1F0F7F",
    borderRadius: 10,
    marginTop: "30%"
  },
  signUpTextBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "10%"
  },
  signUpText: {
    color: "#fff",
    paddingRight: 5,
    fontSize: 15,
    letterSpacing: 0.8
  },
  signUpButton: {
    padding: 10,
    backgroundColor: "#5039D7",
    borderRadius: 10
  },
  signUpButtonText: {
    letterSpacing: 1,
    fontWeight: "bold",
    color: "#fff"
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
