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
  previousSignUpButton: {
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
  signUpCoverImage: {
    width: "60%",
    resizeMode: "contain"
  },
  signUpFooter: {
    flex: 3,
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
  formHeading: {
    fontSize: 20,
    color: "#fff",
    letterSpacing: 1.5,
    marginTop: 10,
    fontWeight: "bold",
    marginBottom: 10
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
  textInput: {
    borderWidth: 2,
    borderColor: "#5F44F6",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 40
  },
  inputRightIcon: {
    position: "absolute",
    right: 10,
    top:15
  },
  registerButton: {
    backgroundColor: "#3092FD",
    borderRadius: 10,
    marginTop: "5%"
  },
  tAndCTextBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginTop: "5%"
  },
  tAndCText: {
    color: "#fff",
    paddingRight: 5,
    fontSize: 15,
    letterSpacing: 0.8
  },
  tAndCButton: {
    padding: 10,
    backgroundColor: "#3F55EC",
    borderRadius: 10
  },
  tAndCButtonText: {
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
